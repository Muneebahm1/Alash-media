"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type SortBy = "relevance" | "newest" | "oldest";
export type TimeRange = "any" | "24h" | "week" | "month";

export default function SearchFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const sortValue = (searchParams.get("sort") as SortBy) || "relevance";
  const timeValue = (searchParams.get("time") as TimeRange) || "any";

  const setParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    // reset to first page on filter change
    params.delete("page");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
        <label htmlFor="sort" className="text-sm text-gray-600">
          Sort by
        </label>
        <select
          id="sort"
          className="px-2 py-1 text-sm bg-white"
          value={sortValue}
          onChange={(e) => setParam("sort", e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
        <label htmlFor="time" className="text-sm text-gray-600">
          Time
        </label>
        <select
          id="time"
          className="px-2 py-1 text-sm bg-white"
          value={timeValue}
          onChange={(e) => setParam("time", e.target.value)}
        >
          <option value="any">Any time</option>
          <option value="24h">Past 24 hours</option>
          <option value="week">Past week</option>
          <option value="month">Past month</option>
        </select>
      </div>
    </div>
  );
}
