'use client';  //this component is client because i hav to 
//get current updated path using hook because in 
//server componens we can't use hooks and events
// so i have to write separate client component 
// only for getting updated current path i used useEffect hook when
// path change like home to articles or articles to home effect generates.
import { usePathname,useSearchParams,useRouter } from "next/navigation";
import { useEffect } from 'react';
//import Table from "@/app/ui/table";

const TaiPath = () => {
    const pathName = usePathname();
    const taiParams = useSearchParams();
    const router = useRouter();
    
    useEffect(()=> {
      const params = new URLSearchParams(taiParams.toString());
      if (params.get('pathName') !== pathName) {
      params.set('pathName', pathName);
      router.replace(`?${params.toString()}`);
    }
    },[pathName])
    return null;
    
}

export default TaiPath;
