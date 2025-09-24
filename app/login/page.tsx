import { Suspense } from "react";
import Image from "next/image";
import LoginForm from "@/app/ui/components/loginform";

const page = () => {
  return (
    <main className="flex items-center justify-center h-screen">
        <div className="h-[95%] lg:h-[75%] mx-auto bg-white border px-4 py-12 md:py-6 rounded-xl ">
           <div className="w-full flex flex-row items-center mb-2 px-2 lg:px-6 py-10 bg-gradient-to-r from-[#0F5813] to-[#00A759] rounded-lg">
            <Image src='/logo.png' alt="Alashmedia Logo" width={36} height={36} className="bg-white rounded-full"/>
            <h1 className="px-2 lg:px-12 text-2xl font-bold text-white">Alash Media</h1>
           </div> 
           <Suspense fallback={<div>Loading...</div>}>
              <LoginForm />  
           </Suspense>
           
        </div>
       
    </main>
  );
}

export default page;
