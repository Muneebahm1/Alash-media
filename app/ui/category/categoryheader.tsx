import { fetchCategoryNews } from '@/app/lib/data';
import Link from 'next/link';
import AllSubCategories from '@/app/ui/category/allsubcategories';

//import { fetchSubCategories } from '@/app/lib/actions';

export default async function CategoryHeader({ ctquery, langu, selectedSubcat }: { ctquery: string; langu: string; selectedSubcat?: string }) {
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

  type CategoryRow = { id: string; subcategory_name: string };
  const availableSubcats: string[] = categoryNews.rows.map((c: CategoryRow) => c.subcategory_name);
  const subcat = selectedSubcat && availableSubcats.includes(selectedSubcat)
    ? selectedSubcat
    : categoryNews.rows[0].subcategory_name;
  console.log(`cateogry_headerlink = ${ctquery}, selectedSubcat = ${subcat}`);
  //const subcategories = await fetchSubCategories('4ff7db1a-30a5-4b45-a051-73130aacbf02');
  return (
    <main className='max-w-screen-xl mx-auto md:mx-[120px] mt-0.5 px-4'>
        <section className='w-full mt-1.5'>
            <div className='mt-1 bg-white p-5 rounded'>
            <h1 className="text-3xl font-bold">{ctquery}</h1>
            <div className='mt-4 border-y border-gray-200'>
              <div className='flex items-center gap-2 p-2 overflow-x-auto whitespace-nowrap'>
                {categoryNews.rows.map((category: CategoryRow) => {
                  const isActive = category.subcategory_name === subcat;
                  return (
                    <Link
                      key={category.id}
                      href={{ pathname: `/${langu}/specialproject`, query: { category_name: ctquery, subcategory_name: category.subcategory_name } }}
                      className={`px-3 py-1 rounded-full text-sm border ${isActive ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'}`}
                    >
                      {category.subcategory_name}
                    </Link>
                  );
                })}
              </div>
            </div>
            </div>
        </section>
        <section className='w-full mt-1'>
          <AllSubCategories subcat = {subcat} langu = {langu}/>
        </section>
        
        
      </main>   
  );
}


