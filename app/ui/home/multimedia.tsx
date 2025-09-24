import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchMultimediaMain } from "@/app/lib/data";
export default async function Multimedia({langu}: {langu: string}) {
  
  const multimediaMain = await fetchMultimediaMain(langu);
  
  if (!multimediaMain || Number(multimediaMain.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No Multimedia Found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, Multimedia section is under updation</p> 
        </div>
      </div>

    );
  }

  const section_name = multimediaMain.rows[0].section;
  const mediaDate = new Date(multimediaMain.rows[0].date_time).toLocaleDateString("en-UK",{
    day: "2-digit",   
    month: "short",   // 3-character month (Jan, Feb, Mar...)
    year: "numeric",  
  });
  return (
    <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
        <div className="bg-white pt-5">
          <h1 className='text-3xl font-bold px-5'>{section_name}</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 p-5'>
          {
            multimediaMain.rows.map((mediaNews)=> (
              <div key={mediaNews.id} id='categoryA' className='overflow-hidden pt-2'>
                <Link href={`/newsdetail/${mediaNews.slug}`}>
                  <Image src={mediaNews.image_url} alt="Informational" width={367} height={296} 
                  className='w-full h-41 md:h-48 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                  <div>
                    <h1 className='text-xl font-bold pX-5 pt-2'>{mediaNews.title}</h1>
                    <div className="flex flex-row gap-2 items-center pt-1">
                      <p style ={{fontFamily: verdana.font_Family}} className='text-xs text-gray-500'>{mediaDate}</p>
                      <p className='text-xs text-gray-500 '>{mediaNews.view_count} views</p>
                    </div>
                  </div>
                </Link>
              </div>    
              ))
          }    
          </div>
        </div>
    </section>  
  )
}
