'use client';
import {useState} from 'react'

const Seeall_Latest = ({ children }: { children: React.ReactNode }) => {
  const [open,setOpen] = useState(false);
    
  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-[#068509] underline cursor-pointer"
        >
          See all latest
        </button>
      )}
      
      {open && (
        <div>
          {children} 
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-[#068509] underline text-end "
          >
            Close all latest
          </button>
        </div>
      )}
      
    </div>
  )
}

export default Seeall_Latest