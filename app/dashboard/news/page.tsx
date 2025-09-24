import { CreateButton } from '@/app/ui/components/button'
import Search from '@/app/ui/components/search'
import Table from '@/app/ui/dashboard/table'
import { fetchArticlesPages } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination';

export default async function page(props:{
    searchParams?: Promise<{
    searchquery: string;
    page: string;
    pathName?: string;
  }>;}){
  const searchParams = await props.searchParams;
  const tquery = searchParams?.searchquery || '';
  const tcurrentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchArticlesPages(tquery);

  //const caption = "Create News";  
  /*const headersList = await headers();
  const referer = headersList.get('referer') || '';
  let pathName = new URL(referer).pathname;*/
  
  //console.log(pathname);
  return (
    <div className='w-full'>
        <div>
          <h1 className='pt-7 mb-5 text-2xl font-bold'>News</h1>
        </div>
        <div className='w-full flex flex-row items-center gap-2'>
          <Search />
          <CreateButton caption={"Create News"} />
        </div>
        <div className='mt-12'>
          {/*<TaiPath>
          {(path:string)=> < Table tabquery={tquery} tabcurrentPage= {tcurrentPage} pathName={path} /> }     
          </TaiPath>*/}
                  
          <Table tabquery={tquery} tabcurrentPage= {tcurrentPage} pathName={searchParams?.pathName} />
        </div>
        <div className='mt-12 flex justify-center'>
          <Pagination totalPages={totalPages} />
        </div>
    </div>
  )
}

