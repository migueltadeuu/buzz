import debug from "debug";
import { v4 as uuid } from "uuid";
import { appendDedupe, dedupe, removeUndefined, sanitizeRelayUrl, unixNowMs, unwrap } from "@snort/shared";

import EventKind from "./event-kind";
import { FlatReqFilter, NostrLink, NostrPrefix, SystemInterface } from ".";
import { ReqFilter, u256, HexKey, TaggedNostrEvent } from "./nostr";
import { RequestRouter } from "./request-router";

/**
 * A built REQ filter ready for sending to System
 */
export interface BuiltRawReqFilter {
  filters: Array<ReqFilter>;
  relay: string;
  // Use set sync from an existing set of events
  syncFrom?: Array<TaggedNostrEvent>;
}

export interface RequestBuilderOptions {
  /**
   * Dont send CLOSE directly after EOSE and allow events to stream in
   */
  leaveOpen?: boolean;

  /**
   * Do not apply diff logic and always use full filters for query
   */
  skipDiff?: boolean;

  /**
   * Pick N relays per pubkey when using outbox strategy
   */
  outboxPickN?: number;

  /**
   * Max wait time for this request
   */
  timeout?: number;

  /**
   * How many milli-seconds to wait to allow grouping
   */
  groupingDelay?: number;

  /**
   * If events should be added automatically to the internal NoteCollection
   * default=true
   */
  fillStore?: boolean;
}

/**
 * Nostr REQ builder
 */
export class RequestBuilder {
  id: string;
  instance: string;
  #builders: Array<RequestFilterBuilder>;
  #options?: RequestBuilderOptions;
  #log = debug("RequestBuilder");

  constructor(id: string) {
    this.instance = uuid();
    this.id = id;
    this.#builders = [];
  }

  get numFilters() {
    return this.#builders.length;
  }

  get filterBuilders() {
    return this.#builders;
  }

  get options() {
    return this.#options;
  }

  /**
   * Add another request builders filters to this one
   */
  add(other: RequestBuilder) {
    this.#builders.push(...other.#builders);
  }

  withFilter() {
    const ret = new RequestFilterBuilder();
    this.#builders.push(ret);
    return ret;
  }

  withBareFilter(f: ReqFilter) {
    const ret = new RequestFilterBuilder(f);
    this.#builders.push(ret);
    return ret;
  }

  withOptions(opt: RequestBuilderOptions) {
    this.#options = {
      ...this.#options,
      ...opt,
    };
    return this;
  }

  buildRaw(): Array<ReqFilter> {
    return this.#builders.map(f => f.filter);
  }

  build(system: SystemInterface): Array<BuiltRawReqFilter> {
    let rawFilters = this.buildRaw();
    if (system.requestRouter) {
      rawFilters = system.requestRouter.forAllRequest(rawFilters);
    }
    const expanded = rawFilters.flatMap(a => system.optimizer.expandFilter(a));
    return this.#groupFlatByRelay(system, expanded);
  }

  /**
   * Detects a change in request from a previous set of filters
   */
  async buildDiff(system: SystemInterface, prev: Array<ReqFilter>): Promise<Array<BuiltRawReqFilter>> {
    const start = unixNowMs();

    let rawFilters = this.buildRaw();
    if (system.requestRouter) {
      rawFilters = system.requestRouter.forAllRequest(rawFilters);
    }
    const diff = system.optimizer.getDiff(prev, rawFilters);
    const ts = unixNowMs() - start;
    this.#log("buildDiff %s %d ms +%d", this.id, ts, diff.length);
    if (diff.length > 0) {
      return this.#groupFlatByRelay(system, diff);
    }
    return [];
  }

  #groupFlatByRelay(system: SystemInterface, filters: Array<FlatReqFilter>) {
    const relayMerged = filters.reduce((acc, v) => {
      const relay = v.relay ?? "";
      // delete relay from filter
      delete v.relay;
      const existing = acc.get(relay);
      if (existing) {
        existing.push(v);
      } else {
        acc.set(relay, [v]);
      }
      return acc;
    }, new Map<string, Array<FlatReqFilter>>());

    const ret = [];
    for (const [k, v] of relayMerged.entries()) {
      const filters = system.optimizer.flatMerge(v);
      ret.push({
        relay: k,
        filters,
      } as BuiltRawReqFilter);
    }
    return ret;
  }
}

/**
 * Builder class for a single request filter
 */
export class RequestFilterBuilder {
  #filter: ReqFilter;

  constructor(f?: ReqFilter) {
    this.#filter = f ?? {};
  }

  get filter() {
    return {
      ...this.#filter,
    };
  }

  /**
   * Use a specific relay for this request filter
   */
  relay(u: string | Array<string>) {
    const relays = Array.isArray(u) ? u : [u];
    this.#filter.relays = appendDedupe(this.#filter.relays, removeUndefined(relays.map(a => sanitizeRelayUrl(a))));
    return this;
  }

  ids(ids: Array<u256>) {
    this.#filter.ids = appendDedupe(this.#filter.ids, ids);
    return this;
  }

  authors(authors?: Array<HexKey>) {
    if (!authors) return this;
    this.#filter.authors = appendDedupe(this.#filter.authors, authors);
    this.#filter.authors = this.#filter.authors.filter(a => a.length === 64);
    return this;
  }

  kinds(kinds?: Array<EventKind>) {
    if (!kinds) return this;
    this.#filter.kinds = appendDedupe(this.#filter.kinds, kinds);
    return this;
  }

  since(since?: number) {
    if (!since) return this;
    this.#filter.since = since;
    return this;
  }

  until(until?: number) {
    if (!until) return this;
    this.#filter.until = until;
    return this;
  }

  limit(limit?: number) {
    if (!limit) return this;
    this.#filter.limit = limit;
    return this;
  }

  tag(key: "e" | "p" | "d" | "t" | "r" | "a" | "g" | string, value?: Array<string>) {
    if (!value) return this;
    this.#filter[`#${key}`] = appendDedupe(this.#filter[`#${key}`] as Array<string>, value);
    return this;
  }

  search(keyword?: string) {
    if (!keyword) return this;
    this.#filter.search = keyword;
    return this;
  }

  /**
   * Get event from link
   */
  link(link: NostrLink) {
    if (link.type === NostrPrefix.Address) {
      this.tag("d", [link.id])
        .kinds([unwrap(link.kind)])
        .authors([unwrap(link.author)]);
    } else {
      this.ids([link.id]);
      if (link.author) {
        this.authors([link.author]);
      }
    }
    link.relays?.forEach(v => this.relay(v));
    return this;
  }

  /**
   * Get replies to link with e/a tags
   */
  replyToLink(links: Array<NostrLink>) {
    const types = dedupe(links.map(a => a.type));
    if (types.length > 1) throw new Error("Cannot add multiple links of different kinds");

    const tags = links.map(a => unwrap(a.toEventTag()));
    this.tag(
      tags[0][0],
      tags.map(v => v[1]),
    );
    this.relay(removeUndefined(links.map(a => a.relays).flat()));
    return this;
  }

  /**
   * Build/expand this filter into a set of relay specific queries
   */
  build(model?: RequestRouter, options?: RequestBuilderOptions): Array<ReqFilter> {
    if (model) {
      return model.forRequest(this.filter, options?.outboxPickN);
    }

    return [this.filter];
  }
}
