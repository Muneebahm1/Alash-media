import Subheader from "@/app/ui/components/subheader";
import ViewAllToggle from "./ui/home/viewall-toggle";
import TrendingTopics from "./ui/home/trending-topics";
import Highlights from "./ui/home/highlights";
import News from "./ui/home/news";
import Alltopics from "./ui/home/alltopics";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "./ui/components/header";
import { fetchSearchContentPages } from "./lib/data";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";
import HorizontalAdd from '@/app/ui/components/horizontaladd';
import Authors from "@/app/ui/home/authors";
import Multimedia from "@/app/ui/home/multimedia";
import Interview from "@/app/ui/home/interview";
import Category from "@/app/ui/home/category";
import Footer from "./ui/components/footer";

export default async function Home(props:{
  params?: Promise<{locale?: string}>
  searchParams?: Promise<{
    title?: string;
    searchquery: string;
    page?: string;
    pathName?: string;
    city: string;
    }>}) {
  
  const params = await props.params;
  const locale = params?.locale || '';
  const searchParams = await props.searchParams;
  const tquery = searchParams?.searchquery || '';
  const tcurrentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchSearchContentPages(tquery);
  console.log(`Search Content Input Text = ${tquery}`);
 //console.log(ctitle);
  const messages = await getMessages();

//const initSlug = " ";
return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <Header />
        <Subheader />
      {
        tquery === '' ? (
        <ViewAllToggle 
          trendingTopics = {<TrendingTopics />}
          otherComponents={[
            // Add a unique key to each element in the array
            <Highlights key="highlights" langu = {locale} />,
            <News key="news" langu = {locale} />,
            <HorizontalAdd key="hadd" />,
            <Category key="category" langu = {locale} />,
            <Multimedia key="multimedia" langu = {locale} />,
            <HorizontalAdd key="hadd2" />,
            <Interview key="interview" langu = {locale} />,
            <Authors key="authors" langu = {locale} />
            
          ]}
        //otherComponents={[<Highlights />, <News title=" " />]} 
        allTopics = {<Alltopics />}
        />
        
      ) : (
        // Render this component if tquery has a value
        <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1  p-4">
          <SearchContent tagquery={tquery} tagcurrentPage= {tcurrentPage} />
          {totalPages > 1 && (
  <div className="...">
    <Pagination totalPages={totalPages} />
  </div>
)}
        </div>
        
      )}
      <Footer />
      </NextIntlClientProvider>
    </div>
    
  );
}
