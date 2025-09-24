import { CreateButton } from '@/app/ui/components/button'
import Search from '@/app/ui/components/search'
import TableCategory from '@/app/ui/dashboard/categories/tablecategory';
import Pagination from '@/app/ui/dashboard/pagination';
import { fetchCategoryPages } from '@/app/lib/data';

export default async function page(props:{
    searchParams?: Promise<{
    searchquery: string;
    page: string;
    pathName?: string;
  }>;}){
    const searchParams = await props.searchParams;
      const tquery = searchParams?.searchquery || '';
      const tcurrentPage = Number(searchParams?.page) || 1;
      const totalPages = await fetchCategoryPages(tquery);
    
    /*const headersList = await headers();
    const referer = headersList.get('referer') || '';
    let pathName = new URL(referer).pathname; */
  return (
    <div className='w-full'>
        <h1 className='pt-7 mb-5 text-2xl font-bold'>Categories</h1>
        <div className='w-full flex flex-row items-center gap-2'>
          <Search />
          <CreateButton caption={"Add Category"} />
        </div>
        <div className='mt-12'>
          <TableCategory tabquery={tquery} tabcurrentPage= {tcurrentPage} pathName={searchParams?.pathName} />
        </div>
        <div className='mt-12 flex justify-center'>
          <Pagination totalPages={totalPages} />
        </div>
    </div>
  )
}

