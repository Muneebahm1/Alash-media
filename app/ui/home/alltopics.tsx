import React from 'react';
import GroupedTopics from './groupedtopics';
import TopicsSearch from "./topicssearch";
const Alltopics = () => {
  return (
    <div className='mx-auto md:mx-[120px] bg-white p-5 mt-1'>
      <h1 className='text-xl font-bold pl-2'>All Topics</h1>
      <div className="p-4 md:px-5 w-full md:w-96 md:p-5">
        <TopicsSearch />
      </div>
      <GroupedTopics />
    </div>
  );
}

export default Alltopics;
