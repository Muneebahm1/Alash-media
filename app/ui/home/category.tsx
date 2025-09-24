import Image from "next/image";
import Link from "next/link";
import {verdana } from "@/app/ui/fonts";
import { fetchCategoryMain } from "@/app/lib/data";
export default async function Category({langu}: {langu: string}) {
  
  const categoryNews = await fetchCategoryMain(langu);
  if (!categoryNews || Number(categoryNews.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>Category not found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, Category section is under updation</p> 
        </div>
      </div>

    );
  }

  const cat_name = categoryNews.rows[0].category_name;
  const categoryDate = new Date(categoryNews.rows[0].date_time).toLocaleDateString("en-UK",{
    day: "2-digit",   
    month: "short",   // 3-character month (Jan, Feb, Mar...)
    year: "numeric",  
  });
      
  return (
    <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
        <div className="bg-white pt-5">
          <h1 className='text-3xl font-bold px-5'>{cat_name}</h1>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-row-2 gap-5 p-5'>
          {
            categoryNews.rows.map((catNews)=> (
              <div key={catNews.id} id='categoryA' className='overflow-hidden pt-2'>
                <Link href={`/newsdetail/${catNews.slug}`}>
                  <Image src={catNews.image_url} alt="Informational" width={367} height={296} 
                  className='w-full h-41 md:h-48 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                  <div>
                    <h1 className='text-xl font-bold pX-5 pt-2'>{catNews.title}</h1>
                    <div className="flex flex-rows gap-2 pt-1">
                      <p style ={{fontFamily: verdana.font_Family}} className='text-xs text-gray-500'>{categoryDate}</p>
                      <p className='text-xs text-gray-500 '>{catNews.view_count} views</p>
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
