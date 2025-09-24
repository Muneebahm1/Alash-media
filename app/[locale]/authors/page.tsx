import Search from "@/app/ui/components/search";
import AuthorsList from "@/app/ui/components/authorslist";
import { fetchSearchContentPages } from "@/app/lib/data";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";

export default async function page(
  props:{
    searchParams?: Promise<{
    searchquery: string;
    searchLetter: string;
    page: string;
    pathName?: string;

    title?: string;
  
  }>;}
) {
  
    const searchParams = await props.searchParams;
    const authorQuery = searchParams?.searchquery || '';
    const searchAlpha = searchParams?.searchLetter || '';

    const tquery = searchParams?.searchquery || '';
    const tcurrentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchSearchContentPages(tquery);
    //const authorCurrentPage = Number(searchParams?.page) || 1;
                  
    return (
      <>
        {tquery === ''? (
          <main className="mt-1.5">
            <section className='mx-auto md:mx-[120px] px-4 pt-0.5 pb-0.5 '>
              <div className="bg-[#E9FFE5] px-5">
                <h1 className='text-3xl font-bold md:p-5'>Authors</h1>
                <div className="p-4 md:px-5 w-96 md:p-5">
                  <Search />
                </div>
              </div>        
              <div>
                <AuthorsList authorQuery ={authorQuery} searchAlpha ={searchAlpha} />
              </div>
            </section>
          </main>
        ) : 
        (
          <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1 bg-white p-4">
            <SearchContent tagquery={tquery} tagcurrentPage= {tcurrentPage} />
              <div className='mt-12 flex justify-center'>
                <Pagination totalPages={totalPages} />
              </div>
          </div>
        )}
      </>
      
    )
  }
  
