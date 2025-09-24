'use client';
import { useState } from "react";

const ModelDialog = () => {
  const [isOk,setIsOk] = useState(true);
  if (!isOk) {
    return null;
  }
  else {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-75 z-50">
      {/* Actual dialog box */}
      <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-xl text-center max-w-sm mx-auto">
        <p className="text-lg text-gray-800 mb-4">No results found</p>
        <button
          onClick={() => setIsOk(false)} // Hides the dialog
          className="cursor-pointer px-6 py-2 bg-[#00A759] text-white rounded hover:bg-[#0F5813] focus:outline-none focus:ring-2 focus:ring-[#00A759]"
        >
          OK
        </button>
      </div>
    </div>
    );
  }  
  
}
export default ModelDialog;