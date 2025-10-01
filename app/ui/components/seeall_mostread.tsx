'use client';
import {useState} from 'react'

const Seeall_MostRead = ({ children }: { children: React.ReactNode }) => {
  const [open,setOpen] = useState(false);
  return (
    <div>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="text-[#068509] underline cursor-pointer"
        >
          See all most read
        </button>
      )}

      {open && (
        <div>
          {children}
          <button
            onClick={() => setOpen(false)}
            className="cursor-pointer text-[#068509] underline text-end"
          >
            Close all most read
          </button>
        </div>
      )}
    </div>
  )
}

export default Seeall_MostRead
