'use client';
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { FiSearch} from "react-icons/fi";
import { useState,ChangeEvent } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const SearchSite = () => {
  const [inputValue,setInputValue] = useState('');
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  
  const handleInputValue = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  const handleClearInput = () => {
    setInputValue('');
  }
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
            <label htmlFor="search">
                Search
            </label>
            <div className="w-full relative">
              <input type = "text" value={inputValue}  
                onChange={handleInputValue} 
                className="border border-gray-400 rounded-lg pl-4 h-10 "
              />
              <button className="absolute right-2 top-2 cursor-pointer"
              onClick={()=> {
                handleClearInput();
                // Use client-side navigation; next-intl/middleware will add the locale prefix
                replace('/');
              }}
              >
                <IoMdCloseCircle size={23} />
              </button>
            </div>
            <button onClick={()=> handleSearch(inputValue)}
                className="cursor-pointer"
            >
                <div className='p-2 rounded-full bg-[#F9F9FA] text-[#01A9BB]'> <FiSearch size={24} /> </div>
            </button>
        </div>
    </div>
  )
  
}

export default SearchSite