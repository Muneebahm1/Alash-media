import { fetchPublishedNews } from "@/app/lib/data";
import Latestnews from "@/app/ui/components/latestnews";
import Image from "next/image";
import {countViews} from '@/app/lib/data';
import { fetchSearchContentPages } from "@/app/lib/data";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";

export default async function page(
  {
    params,
    searchParams,

  }:{
    
    params:Promise<{slug:string,locale:string}>

    searchParams?: Promise<{
    title?: string;
    searchquery: string;
    page?: string;
    pathName?: string;
    
    }>
  
  }) {
  
  const slug = (await params).slug;
  const langu = (await params).locale;
  
  const tquery = (await searchParams)?.searchquery || '';
  const tcurrentPage = Number((await searchParams)?.page) || 1;

  const totalPages = await fetchSearchContentPages(tquery);

  const newsDetail = await fetchPublishedNews(slug,langu) 
  
  if (!newsDetail || Number(newsDetail.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No News detail Found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, Detail will be provided soon</p> 
        </div>
      </div>

    );
  }
  
  console.log(`slug to send detail: ${newsDetail.rows[0].slug}`);
  await countViews(slug);
  return (
    <>
      {tquery === ''? (
        <main id="container" className='max-w-screen-xl mx-auto md:mx-[120] mt-0.5 flex flex-col md:flex-row gap-1 px-4'>
        <section className='w-full md:w-3/4 mt-0.5'>
          <div className="bg-white overflow-hidden p-5">
            <h1 className="mt-2 py-2 text-4xl font-bold">{newsDetail.rows[0].title}</h1>
            <p className="mt-1 py-2 text-gray-400">{newsDetail.rows[0].subtitle}</p>
            <div className="relative inline-block group">    
              <div className="h-2 w-32 transition-width duration-500 ease-out"></div>
            </div>
            <p className="text-[#00A759] text-2xl">{newsDetail.rows[0].author_name}</p>
           
            <p className="text-gray-400">{newsDetail.rows[0].date_time}</p>
            <Image src={newsDetail.rows[0].image_path} alt="Main News" width={746} height={296} 
            className='mt-2 w-full h-52 md:h-105 object-conver' />
            <div className='mt-5' dangerouslySetInnerHTML={{ __html: newsDetail.rows[0].content}} />                    
          </div>
        </section>
        <section className='md:w-1/4 flex flex-col gap-1'>
          <Latestnews lang = {langu} />
        </section>
      </main>
      ) : 
      (
        <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1 bg-white p-4">
          <SearchContent tagquery={tquery} tagcurrentPage= {tcurrentPage} />
            <div className='mt-12 flex justify-center'>
              <Pagination totalPages={totalPages} />
            </div>
        </div>
      )
    }
    </>
       
  )
}

