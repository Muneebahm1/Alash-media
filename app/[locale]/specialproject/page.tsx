import CategoryHeader from '@/app/ui/category/categoryheader';
import React from 'react'
import { fetchSearchContentPages } from '@/app/lib/data';
import SearchContent from '@/app/ui/components/searchcontent';
import Pagination from '@/app/ui/dashboard/pagination';

const page = async (props:{
  params?: Promise<{locale?: string}>
  searchParams?: Promise<{
    category_name: string;

    title?: string;
    searchquery: string;
    page?: string;
    pathName?: string;

    }>}) => {
  
  const params = await props.params;
  const locale = params?.locale || '';
  
  const searchParams = await props.searchParams;
  const cquery = searchParams?.category_name || " ";
  
  const tquery = searchParams?.searchquery || '';
  const tcurrentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchSearchContentPages(tquery);

  return (
    <div>
       {tquery === ''? (
        <CategoryHeader ctquery = {cquery} langu = {locale}/>
       ) : 
       (
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
export default page;
