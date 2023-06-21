import { FeedCache } from "@snort/shared";
import { Connection } from "Connection";
import { RelayMetrics } from "Cache";

export class RelayMetricHandler {
    readonly #cache: FeedCache<RelayMetrics>;

    constructor(cache: FeedCache<RelayMetrics>) {
        this.#cache = cache;
    }

    onDisconnect(c: Connection, code: number) {
        
    }
}