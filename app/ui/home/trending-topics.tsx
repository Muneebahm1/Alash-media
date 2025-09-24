import React from 'react';
import Image from 'next/image';
import { fetchTrendingTopics } from '@/app/lib/data';
import Link from 'next/link';

export default async function TrendingTopics() {
  const trends = await fetchTrendingTopics();
  return (
    
      <div className='flex flex-col md:flex-row gap-4 justify-evenly'>
      {
        trends.rows.map((trend)=>(
        <div key={trend.id} className='flex flex-row gap-1'>
          <Link href={`/trends?tagname=${trend.name}`}>
            <div className="flex flex-row gap-1 space-y-5">
              <p className='text-[#068509] font-bold'>#</p>
              <Image src={trend.image_path} width={28} height={28} alt="Trending Topics"
              className='object-cover w-7 h-7' />
              <p className='pl-2 text-lg font-bold'>{trend.name}</p>
            </div>
          </Link>
          
        </div>
        ))
      }
      </div>
    
  );
}


