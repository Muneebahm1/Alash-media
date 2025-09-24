import Image from "next/image"
import Link from "next/link";
import { fetchTrendingNews } from "@/app/lib/data";
import VerticalAdd from "@/app/ui/components/verticaladd";

type TagProps = {
  tagname?: string;
  language: string;
  //tagcurrentPage?: number;
  pathName?: string;
};

export default async function TagNewsList({tagname,language}:TagProps) {
  
    
  console.log(`TagNameinTaglist=${tagname}`)
  
  const trendData = await fetchTrendingNews(tagname || '',language);
  console.log(`tagData: ${trendData.rows[0]}`);
  if (!trendData || Number(trendData.rowCount) === 0) {
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-3xl font-bold'>Not found any trending news;</h2>
        </div>
      </div>

    );
  }
     //  else is automatic count below in else  
  return (
    <main className='max-w-screen-xl mx-auto mt-0.5 flex flex-col md:flex-row gap-1.5'>
      <section className='w-full md:w-3/4 mt-0.5'>
        {
          trendData.rows.map((trend)=> (
            <div key={trend.id} id='search_news' className='w-full p-5 mt-5 mb-2'>
                <Link href={`/newsdetail/${trend.tag_name}`}>
                  <Image src={trend.image_url} alt="Trending News" width={746} height={296} 
                  className='w-full h-52 md:h-96 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                  <h1 className='mt-5 text-xl font-bold'>{trend.title}</h1>
                  <p className='mt-2 text-gray-400 '>{trend.subtitle}</p>
                  <p className='mt-1 font-semibold text-gray-500 '>{trend.date_time}</p>
                </Link>
            </div>
          ))     
        }         
      </section>
      <section className='mt-5 md:w-1/4 flex flex-col gap-1'>
          <VerticalAdd />
          <VerticalAdd />
      </section>
    </main>
   
  )
}

