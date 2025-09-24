import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchInterviewMain } from "@/app/lib/data";
export default async function Interview({langu}: {langu: string}) {
  
  const interviewMain = await fetchInterviewMain(langu);
  if (!interviewMain || Number(interviewMain.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No Interviews Found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, Interview section is under updation</p> 
        </div>
      </div>

    );
  }
  
  const section_name = interviewMain.rows[0].section;
  const interviewDate = new Date(interviewMain.rows[0].date_time).toLocaleDateString("en-UK",{
    day: "2-digit",   
    month: "short",   // 3-character month (Jan, Feb, Mar...)
    year: "numeric",  
  });
  return (
    <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
        <div className="bg-white pt-5">
          <h1 className='text-3xl font-bold px-5'>{section_name}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 grid-row-3 gap-5 p-5'>
          {
            interviewMain.rows.map((interviewNews)=> (
              <div key={interviewNews.id} className="flex flex-col items-center md:flex-row">
                <Link href={`/newsdetail/${interviewNews.slug}`}>
                  <div className="w-66 h-36 bg-[#F6D3D3]">
                    <Image src={interviewNews.image_url} alt={interviewNews.title}
                      width={192} height={192}
                      className="object-cover w-66 h-36 rounded-2xl"
                    />
                  </div>
                </Link>
                <Link href={`/newsdetail/${interviewNews.slug}`}>
                  <div className="p-4">
                    <h1 style ={{fontFamily: verdana.font_Family}} className="font-bold text-xl text-center md:text-left">{interviewNews.title}</h1>
                    <div className="flex flex-row gap-2 pt-1">
                      <p style ={{fontFamily: verdana.font_Family}} className='text-xs text-gray-500 text-center md:text-left'>{interviewDate}</p>
                      <p className='text-xs text-gray-500 '>{interviewNews.view_count} views</p>
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
