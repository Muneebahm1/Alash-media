import Image from 'next/image';
import { fetchCategoryNews } from '@/app/lib/data';
import Link from 'next/link';
import Latestnews from '../components/latestnews';
import VerticalAdd from '../components/verticaladd';
import HorizontalAdd from '../components/horizontaladd';
//import { fetchSubCategories } from '@/app/lib/actions';

export default async function Hero({ctquery,langu}: {ctquery:string;langu:string;}) {
  const categoryNews = await fetchCategoryNews(ctquery,langu); 
  //console.log(`cateogry_link = ${ctquery}`);
  //const subcategories = await fetchSubCategories('4ff7db1a-30a5-4b45-a051-73130aacbf02');

  if (!categoryNews || Number(categoryNews.rowCount) === 0) {
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No Category Found</h2>
          <p className='text-center mt-2'>Sorry, Web page is under updation</p> 
        </div>
      </div>

    );
  }
    
  return (
    <>
      <main className='max-w-screen-xl mx-auto md:mx-[120px] mt-0.5 flex flex-col md:flex-row gap-1.5 px-4'>
      <section className='w-full md:w-3/4 mt-0.5 rounded-xl'>
        <div className='mt-1 bg-white p-5 rounded'>
          <h1 className="text-4xl font-bold">{categoryNews.rows[0].category_name}</h1>
          <div className='mt-4 flex flex-col md:flex-row gap-8 border-t border-b border-gray-200 p-2'>
          {
            categoryNews.rows.map((category)=>(
            <Link key={category.id} href={`/subcategory/?subcategory_name=${category.subcategory_name}`}>
              <div className="flex flex-row gap-1 items-center ">
                <p className="text-sm font-semibold text-gray-800">{category.subcategory_name}</p>
              </div>
            </Link>
            ))
          }
          </div>
        </div>
        <div className='mt-1 bg-white p-5 rounded'>
          <Link href={`/newsdetail/${categoryNews.rows[0].slug}`} className='relative'>
            <Image src={categoryNews.rows[0].image_url} alt="Highlights" width={746} height={296}
            className="w-full h-52 md:h-96 rounded object-cover border-[3px] border-[#039855] shrink-0"/>
            <h1 className='mt-5 text-xl font-bold'>{categoryNews.rows[0].title}</h1>
            <p className='mt-3 text-xm font-semibold text-gray-400 pb-5'>{categoryNews.rows[0].date_time}</p>
          </Link>
        </div>
      </section>
      <section className='md:w-1/4 flex flex-col gap-1 mt-1.5'>
        <Latestnews lang = {langu} />
        <VerticalAdd />
      </section>
    </main>
    <HorizontalAdd />
    </>
    
  );
  
}



