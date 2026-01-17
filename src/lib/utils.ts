import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { CollectionEntry } from "astro:content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TagCountList = Map<string, number>;
export const tagCountList = (
  posts: CollectionEntry<"posts">[]
): [string, number, TagCountList] | null => {
  const freqeuncyMap: TagCountList = new Map();
  let maxCount = 0;
  let maxTag: string | null = null;
  for (const post of posts) {
    for (const tag of post.data.tags) {
      // do we have already a count for this tag if so just count it up
      const count = (freqeuncyMap.get(tag) || 0) + 1;
      freqeuncyMap.set(tag, count);
      if (count > maxCount) {
        maxCount = count;
        maxTag = tag;
      }
    }
  }
  // const sorted = sortMapByValue(freqeuncyMap, (a, b) => b - a);
  console.log("Most frequent tag:", maxTag, freqeuncyMap);
  return maxTag ? [maxTag, maxCount, freqeuncyMap] : null;
};

export function sortMapByValue<K, V>(
  map: Map<K, V>,
  compare: (a: V, b: V) => number
): Array<[K, V]> {
  //): MapMap<K, V> {
  // This saves a pass and avoids Map reallocation. instead of recreating a map
  return [...map].sort(([, v1], [, v2]) => compare(v1, v2));
  // if we need a map as return type, we can always do
  //return new Map([...map.entries()].sort(([, v1], [, v2]) => compare(v1, v2)));
}

export function sortMapByValueDescending<K, V extends number>(map: Map<K, V>) {
  return sortMapByValue(map, (a, b) => b - a);
}

export function sortMapByValueAscending<K, V extends number>(map: Map<K, V>) {
  return sortMapByValue(map, (a, b) => a - b);
}

// export const getPostsGroupedByTag = (
//   posts: CollectionEntry<"posts">[]
// ): [string, CollectionEntry<"posts">] | null => {
//   const freqeuncyMap = new Map<string, CollectionEntry<"posts">[]>();
//   let maxCount = 0;
//   let maxTag: string | null = null;
//   for (const post of posts) {
//     for (const tag of post.data.tags) {
//       if (!freqeuncyMap.get(tag)) {
//         freqeuncyMap.set(tag, [post]);
//       } else {
//         freqeuncyMap.get(tag)?.push(post);
//       }
//     }
//   }
//   const sorted = sortMapByValue(freqeuncyMap, (a, b) => a.length - b.length);
//   //console.log("Most frequent tag:", maxTag, freqeuncyMap, sorted);
//   return;
// };
