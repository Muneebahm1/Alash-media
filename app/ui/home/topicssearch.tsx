'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function TopicsSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial = searchParams.get('tagname') || '';
  const [value, setValue] = useState(initial);

  const update = useDebouncedCallback((next: string) => {
    const q = next.trim();
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');
    if (q) {
      params.set('tagname', q);
    } else {
      params.delete('tagname');
    }
    // Always navigate to /trends for topic searching
    router.push(`/trends?${params.toString()}`);
  }, 300);

  return (
    <div className="w-full">
      <div className="relative w-full md:w-full">
        <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          value={value}
          onChange={(e) => { setValue(e.target.value); update(e.target.value); }}
          placeholder="Search topics"
          className="w-full h-9 pl-9 pr-2 bg-white border border-gray-400 rounded-lg placeholder-gray-400"
        />
      </div>
    </div>
  );
}
