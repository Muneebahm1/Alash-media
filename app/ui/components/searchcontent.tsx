import Image from "next/image"
import Link from "next/link";
import { fetchSearchContent } from "@/app/lib/data";
import VerticalAdd from "./verticaladd";

type TagProps = {
  tagquery?: string;
  tagcurrentPage?: number;
  pathName?: string;
};

export default async function SearchContent({ tagquery, tagcurrentPage }: TagProps) {
  const searchData = await fetchSearchContent(tagquery || '',tagcurrentPage || 1);
  if (!searchData || Number(searchData.rowCount) === 0) {
    return (
      <div className="mt-2 flex flex-row items-left justify-left bg-white p-6">
        <div>
          <h2 className='text-3xl font-bold'>We couldn&apos;t find any results for &quot;{tagquery}&quot;</h2>
        </div>
      </div>

    );
  }
     //  else is automatic count below in else  
  return (
    <div >
   <div className="mb-3 rounded-m bg-white w-full p-2">
    <div className=" px-4 py-3">
    <h2 className="text-3xl font-bold mb-5">
          Showing results for &quot;{tagquery}&quot;
        </h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Filters (non-functional) */}
        <div className="flex flex-wrap items-center gap-4 ">
          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
            <label className="text-sm text-gray-600">Sort by</label>
            <select className=" px-2 py-1 text-sm bg-white">
              <option>Relevance</option>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border border-gray-300 rounded-md p-1">
            <label className="text-sm text-gray-600">Time</label>
            <select className=" px-2 py-1 text-sm bg-white">
              <option>Any time</option>
              <option>Past 24 hours</option>
              <option>Past week</option>
              <option>Past month</option>
            </select>
          </div>
        </div>

        {/* Heading */}
       
      </div>
    </div>
  </div>
  
  
    <main className='max-w-screen-xl mx-auto mt-0.5 flex flex-col md:flex-row gap-1.5' >
  
      <section className='w-full md:w-3/4 mt-0.5 bg-white'>
        {
          searchData.rows.map((article)=> (
            <div key={article.id} id='search_news' className='w-full p-5 mt-5 mb-2'>
                <Link href={`/newsdetail/${article.slug}`}>
                  <Image src={article.image_url} alt="Search News" width={746} height={296} 
                  className='w-full h-52 md:h-96 object-cover hover:scale-105 transition-transform duration-1000 rounded' />
                  <h1 className='mt-5 text-xl font-bold'>{article.title}</h1>
                  <p className='mt-2 text-gray-400 '>{article.subtitle}</p>
                  <p className='mt-1 font-semibold text-gray-500 '>{article.date_time}</p>
                </Link>
            </div>
          ))     
        }         
      </section>
      <section className='mt-0.5 md:w-1/4 flex flex-col gap-1'>
          <VerticalAdd />
          <VerticalAdd />
      </section>
    </main>
    </div>
  )
}

