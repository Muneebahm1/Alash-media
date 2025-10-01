import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchAllSubCategoriesNews, fetchCategoryNews } from "@/app/lib/data";
export default async function AllSubCategories({subcat,langu,catName = 'Special Project'}: {subcat:string;langu:string;catName?: string}) {
  
  const allSubcategoriesNews = subcat && subcat.trim() !== ''
    ? await fetchAllSubCategoriesNews(subcat,langu)
    : await fetchCategoryNews(catName,langu);
   
  
      return (
        <section className='mx-auto px-4 pt-0.5 pb-0.5 bg-white mt-1 rounded'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5'>
            {allSubcategoriesNews.rows.map((allSub) => (
              <div key={allSub.id} id='subcateNews' className='overflow-hidden'>
                <Link href={`/newsdetail/${allSub.slug}`}>
                  <Image
                    src={allSub.image_url || '/logo.png'}
                    alt={allSub.subcategory_name || 'Special Project'}
                    width={367}
                    height={296}
                    className='w-full h-48 md:h-48 lg:h-44 object-cover hover:scale-105 transition-transform duration-700 rounded'
                  />
                  <div>
                    <h1 className='text-base md:text-lg font-semibold pt-2 line-clamp-2'>{allSub.title}</h1>
                    <p style={{ fontFamily: verdana.font_Family }} className='text-[12px] md:text-[13px] text-gray-500'>
                      {allSub.date_time}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )
}
