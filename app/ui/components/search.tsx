'use client';
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; 
const Search = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  
  const handleSearch = useDebouncedCallback((inputtext: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page','1');
    if(inputtext) {
      params.set('searchquery',inputtext);
    }
    else {
      params.delete('searchquery');
    }
    replace(`${pathName}?${params.toString()}`);
    //console.log(inputtext);
    console.log(`${pathName}?${params.toString()}`);
  },300)
  return (
    <div className="w-full">
    <div className="flex flex-row items-center gap-2">
      {/* <label htmlFor="search" className="text-sm font-medium text-gray-700">
        Search
      </label> */}
      <div className="relative w-full md:w-full">
        <MagnifyingGlassIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search author name"
          defaultValue={searchParams.get("searchquery")?.toString()}
          className="w-full h-9 pl-9 pr-2 bg-white border border-gray-400 rounded-lg placeholder-gray-400"
        />
      </div>
    </div>
  </div>
  )
  
}

export default Search