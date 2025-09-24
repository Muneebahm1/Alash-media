import React from 'react';
import GroupedTopics from './groupedtopics';

const Alltopics = () => {
  return (
    <div className='mx-auto md:mx-[120px] bg-white p-5 mt-1'>
      <h1 className='text-xl font-bold pl-2'>All Topics</h1>
      <GroupedTopics />
    </div>
  );
}

export default Alltopics;
