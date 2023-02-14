import { useMemo } from "react";
import { HexKey } from "@snort/nostr";
import { EventKind, Subscriptions } from "@snort/nostr";
import useSubscription, { NoteStore } from "Feed/Subscription";

export default function useFollowsFeed(pubkey: HexKey) {
  const sub = useMemo(() => {
    const x = new Subscriptions();
    x.Id = `follows:${pubkey.slice(0, 12)}`;
    x.Kinds = new Set([EventKind.ContactList]);
    x.Authors = new Set([pubkey]);

    return x;
  }, [pubkey]);

  return useSubscription(sub);
}

export function getFollowers(feed: NoteStore, pubkey: HexKey) {
  const contactLists = feed?.notes.filter(a => a.kind === EventKind.ContactList && a.pubkey === pubkey);
  const pTags = contactLists?.map(a => a.tags.filter(b => b[0] === "p").map(c => c[1]));
  return [...new Set(pTags?.flat())];
}