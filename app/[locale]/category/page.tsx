import Hero from "@/app/ui/category/hero";
import SubCategory from "@/app/ui/category/subcategory";
import { fetchSearchContentPages } from "@/app/lib/data";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";

export default async function Category(props:{
  params?: Promise<{locale?: string}>
  searchParams?: Promise<{
    category_name: string;
    pathName?: string;
        
    title?: string;
    searchquery: string;
    page?: string;
  }>}) {
  
  const params = await props.params;
  const locale = params?.locale || '';
  
  const searchParams = await props.searchParams;
  const cquery = searchParams?.category_name || " ";

  const tquery = searchParams?.searchquery || '';
  const tcurrentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSearchContentPages(tquery);
  console.log(`Received Catquery: ${cquery}`);
  
  return (
    <div>
      {tquery === ''? (
        <div>
          <Hero ctquery = {cquery} langu = {locale}/>
          <SubCategory ctquery = {cquery} langu = {locale} />
        </div>
      ) : (
        <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1 bg-white p-4">
          <SearchContent tagquery={tquery} tagcurrentPage= {tcurrentPage} />
            <div className='mt-12 flex justify-center'>
              <Pagination totalPages={totalPages} />
            </div>
        </div>
      )}
      
    </div>
  )
}

