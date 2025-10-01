import ViewAllToggle from "../ui/home/viewall-toggle";
import TrendingTopics from "../ui/home/trending-topics";
import Highlights from "../ui/home/highlights";
import News from "../ui/home/news";
import Alltopics from "../ui/home/alltopics";
import { fetchSearchContentPages } from "../lib/data";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";
import HorizontalAdd from "../ui/components/horizontaladd";
import Category from "./category/page";
import Multimedia from "../ui/home/multimedia";
import Interview from "../ui/home/interview";
import Authors from "../ui/home/authors";


export default async function Home(props:{
  params?: Promise<{ locale?: string }>
  searchParams?: Promise<{
    title?: string;
    searchquery: string;
    page?: string;
    pathName?: string;
    sort?: 'relevance' | 'newest' | 'oldest';
    time?: 'any' | '24h' | 'week' | 'month';
  }>
}) {
  
  const params = await props.params;
  const locale = params?.locale || '';
  const searchParams = await props.searchParams;
  //const searchSlug = searchParams?.title?.toString() || '';
  const tquery = searchParams?.searchquery || '';
  const tcurrentPage = Number(searchParams?.page) || 1;
  const tsort = searchParams?.sort;
  const ttime = searchParams?.time;
  const totalPages = await fetchSearchContentPages(tquery, { time: ttime || 'any' });
    
  console.log(`Search Content Input Text = ${tquery}`);
    
  //const initSlug = " ";

  return (
    <div>
      {/*<Subheader />*/}
      {tquery === ''? (
        <ViewAllToggle 
        trendingTopics = {<TrendingTopics />}
        otherComponents={[
            // Add a unique key to each element in the array
          <Highlights key = "highlights" langu = {locale} />,
          <News key = "news" langu = {locale} />,
          <HorizontalAdd key="hadd" />,
          <Category key="category" />,
          <Multimedia key="multimedia" langu = {locale} />,
          <HorizontalAdd key="hadd2" />,
          <Interview key="interview" langu = {locale} />,
          <Authors key="authors" langu = {locale} />
        ]}
        allTopics = {<Alltopics />}
        />
      ) : (
        <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1 bg-white p-4">
          <SearchContent tagquery={tquery} tagcurrentPage= {tcurrentPage} sort={tsort || 'relevance'} time={ttime || 'any'} />
          <div className='mt-12 flex justify-center'>
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}
    </div>
  );
}
