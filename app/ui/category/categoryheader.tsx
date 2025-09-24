import { fetchCategoryNews } from '@/app/lib/data';
import Link from 'next/link';
import AllSubCategories from '@/app/ui/category/allsubcategories';

//import { fetchSubCategories } from '@/app/lib/actions';

export default async function CategoryHeader({ctquery,langu}: {ctquery:string;langu:string}) {
  const categoryNews = await fetchCategoryNews(ctquery,langu); 
  
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

  const subcat = categoryNews.rows[0].subcategory_name;
  console.log(`cateogry_headerlink = ${ctquery}`);
  //const subcategories = await fetchSubCategories('4ff7db1a-30a5-4b45-a051-73130aacbf02');
  return (
    <main className='max-w-screen-xl mx-auto md:mx-[120px] mt-0.5 px-4'>
        <section className='w-full mt-1.5'>
            <div className='mt-1 bg-white p-5 rounded'>
            <h1 className="text-3xl font-bold">{ctquery}</h1>
            <div className='mt-4 flex flex-col md:flex-row gap-8 border border-gray-200 p-2'>
            {
                categoryNews.rows.map((category)=>(
                <Link key={category.id} href={`/subcategory/?subcategory_name=${category.subcategory_name}`}>
                <div className="flex flex-row gap-1 items-center">
                    <p className="text-sm font-semibold text-gray-800">{category.subcategory_name}</p>
                </div>
                </Link>
                ))
            }
            </div>
            </div>
        </section>
        <section className='w-full mt-1'>
          <AllSubCategories subcat = {subcat} langu = {langu}/>
        </section>
        
        
      </main>   
  );
}


