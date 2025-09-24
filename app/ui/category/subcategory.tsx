import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchCategoryNews, fetchSubCategoryNews } from "@/app/lib/data";
export default async function SubCategory({ctquery,langu}: {ctquery:string;langu:string}) {
  
  const categoryNews = await fetchCategoryNews(ctquery,langu);
   
  const allSubcategoryNews = await Promise.all(
      categoryNews.rows.map(async (cNews) => {
        const subCatName = cNews.subcategory_name;
        const subcategoryNews = await fetchSubCategoryNews(ctquery, subCatName,langu);
        return {
          categoryId: cNews.id,
          categoryName: subCatName,
          news: subcategoryNews.rows
       }
      }))
      return (
        <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
          <div>
          {
           
          allSubcategoryNews.map((subcategory) => (
          <div key={subcategory.categoryId} className="mb-1 bg-white pt-2">
            {/* Subcategory name as H1 heading */}
            <h1 className="text-3xl font-bold pl-5 pt-5 pb-2 text-gray-800 ">
              {subcategory.categoryName}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 p-5 '>       

            {subcategory.news.map((subcatNews) => (
              <div key={subcatNews.id} id='subcateNews' className='overflow-hidden'>
                {/*<h1 className='text-3xl font-bold px-5'>{subcatNews.subcategory_name}</h1>*/}
                <Link href={`/newsdetail/${subcatNews.slug}`}>
                  <Image src={subcatNews.image_url} alt="Informational" width={367} height={296} 
                  className='w-full h-41 md:h-48 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                  <div>
                    <h1 className='text-xl font-bold pX-5 pt-2'>{subcatNews.title}</h1>
                    <p style ={{fontFamily: verdana.font_Family}} className='text-[14px] text-gray-400'>{subcatNews.date_time}</p>
                  </div>
                </Link>
              </div>
            ))
            }
            </div>    
            </div>
            ))
          }
          </div>
        </section>   
      )
}
