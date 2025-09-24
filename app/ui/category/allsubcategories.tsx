import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchAllSubCategoriesNews } from "@/app/lib/data";
export default async function AllSubCategories({subcat,langu}: {subcat:string;langu:string}) {
  
  const allSubcategoriesNews = await fetchAllSubCategoriesNews(subcat,langu);
   
  
      return (
        <section className='mx-auto px-4 pt-0.5 pb-0.5 bg-white mt-1 rounded '>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 p-5 '>       

            {allSubcategoriesNews.rows.map((allSub) => (
              <div key={allSub.id} id='subcateNews' className='overflow-hidden'>
                {/*<h1 className='text-3xl font-bold px-5'>{subcatNews.subcategory_name}</h1>*/}
                <Link href={`/newsdetail/${allSub.slug}`}>
                  <Image src={allSub.image_url} alt="Informational" width={367} height={296} 
                  className='w-full h-41 md:h-48 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                  <div>
                    <h1 className='text-xl font-bold pX-5 pt-2'>{allSub.title}</h1>
                    <p style ={{fontFamily: verdana.font_Family}} className='text-[14px] text-gray-400'>{allSub.date_time}</p>
                  </div>
                </Link>
              </div>
            ))
            }
            </div>            
        </section>   
      )
}
