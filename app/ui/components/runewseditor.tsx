'use client';
import React from "react";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic
//import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { useState } from "react";

const ReactQuill = dynamic(
  () => import('react-quill-new'),
  {
    ssr: false, // This is the crucial line!
    loading: () => <p>Loading News Editor...</p>, // Optional: show a loading state
  }
);

export default function RUNewsEditor({rucontent}:{rucontent?: string}) {
    const [value,setValue] = useState(rucontent);
    //console.log(`News Content: ${content}`);
    return(
        <div className="mb-14  bg-gray-50">
          <ReactQuill defaultValue={value} value = {value} style={{ height: "132px" }}
          className="[&_.ql-editor]:bg-gray-50"
          onChange={setValue} theme="snow"/>
            <div>
                {/*<div dangerouslySetInnerHTML={{ __html: value}} />*/}
                <input type="hidden" name="rucontent" height={132} defaultValue={value} />
            </div>
        </div>
        
    );
}