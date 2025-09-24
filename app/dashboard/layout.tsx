import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({children}: {children: React.ReactNode}) {
    return(
        <div className="md:h-screen flex flex-col md:flex-row">
            <div className="flex-none w-full md:w-72">
              <SideNav />  
            </div>
            <div className="md:flex-grow overflow-y-auto p-4">{children}</div>
        </div>
        
    );
}