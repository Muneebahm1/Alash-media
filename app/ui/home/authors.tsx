import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchAuthorsMain } from "@/app/lib/data";
export default async function Authors({langu}: {langu: string}) {
  
  const authorsMain = await fetchAuthorsMain(langu);
  
  if (!authorsMain || Number(authorsMain.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No Authors Found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, Author section is under updation</p> 
        </div>
      </div>

    );
  }
  
  const section_name = authorsMain.rows[0].section;
    
  return (
    <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
        <div className="bg-white pt-5">
          <h1 className='text-3xl font-bold px-5'>{section_name}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 grid-row-2 gap-5 p-5'>
          {
            authorsMain.rows.map((authorNews)=> (
              <div key={authorNews.id} className="mt-9 flex flex-col items-center md:flex-row">
                <Link href={`/newsdetail/${authorNews.slug}`}>
                  <div className="w-48 h-48">
                    <Image src={authorNews.image_url} alt={authorNews.title}
                      width={192} height={192}
                      className="object-cover w-48 h-48 rounded-full"
                    />
                  </div>
                </Link>
                <Link href={`/newsdetail/${authorNews.slug}`}>
                  <div className="p-4">
                    <h1 style ={{fontFamily: verdana.font_Family}} className="font-bold text-xl text-center md:text-left">{authorNews.author_name}</h1>
                    <p style ={{fontFamily: verdana.font_Family}} className='text-[14px] text-gray-700 text-center md:text-left'>{authorNews.biography}</p>
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
