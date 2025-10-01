import { fetchPublishedNews, countViews, fetchSearchContentPages } from "@/app/lib/data";
import Latestnews from "@/app/ui/components/latestnews";
import MostReadNews from "@/app/ui/components/mostread";
import { Alsoread } from "@/app/ui/components/alsoread";
import Image from "next/image";
import SearchContent from "@/app/ui/components/searchcontent";
import Pagination from "@/app/ui/dashboard/pagination";
import { Relatednews } from "@/app/ui/components/relatednews";
import type { ReactElement } from "react";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams?: Promise<{
    title?: string;
    searchquery?: string;
    page?: string;
    pathName?: string;
    sort?: 'relevance' | 'newest' | 'oldest';
    time?: 'any' | '24h' | 'week' | 'month';
  }>;
}): Promise<ReactElement> {
  const awaitedParams = await params;
  const awaitedSearch = (await searchParams) || {};
  const slug = awaitedParams.slug;
  const langu = awaitedParams.locale;
  
  const tquery = awaitedSearch.searchquery || '';
  const tcurrentPage = Number(awaitedSearch.page) || 1;
  const tsort = awaitedSearch.sort || 'relevance';
  const ttime = awaitedSearch.time || 'any';
  const totalPages = await fetchSearchContentPages(tquery, { time: ttime });
  const newsDetail = await fetchPublishedNews(slug, langu);
  
  if (!newsDetail || Number(newsDetail.rowCount) === 0) {
    return (
      <div className="mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className="text-4xl font-bold">No News detail Found</h2>
          <p className="text-center mt-2 mb-2">Sorry, Detail will be provided soon</p> 
        </div>
      </div>
    );
  }
  
  console.log(`slug to send detail: ${newsDetail.rows[0].slug}`);
  await countViews(slug);

  return (
    <>
      {tquery === '' ? (
        <>
          <main
            id="container"
            className="max-w-screen-xl mx-auto md:mx-[120] mt-0.5 flex flex-col md:flex-row gap-1 px-4"
          >
            <section className="w-full md:w-3/4 mt-0.5">
              <div className="bg-white overflow-hidden p-5">
                <h1 className="mt-2 py-2 text-4xl font-bold">
                  {newsDetail.rows[0].title}
                </h1>
                <p className="mt-1 py-2 text-gray-400">
                  {newsDetail.rows[0].subtitle}
                </p>
                <div className="relative inline-block group">    
                  <div className="h-2 w-32 transition-width duration-500 ease-out"></div>
                </div>
                
                {/* Author Info with border-y */}
                <div className="mt-2 border-y border-gray-200 py-2">
                  <div className="flex items-center gap-2 pl-5">
                    <Image
                      src={newsDetail.rows[0].author_avatar || '/logo.png'}
                      alt={newsDetail.rows[0].author_name}
                      width={46}
                      height={46}
                      className="rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="text-[#00A759] text-xl md:text-2xl">
                        {newsDetail.rows[0].author_name}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {newsDetail.rows[0].date_time}
                      </p>
                    </div>
                  </div>
                </div>

                <Image 
                  src={newsDetail.rows[0].image_path} 
                  alt="Main News" 
                  width={746} 
                  height={296} 
                  className="mt-2 w-full h-52 md:h-105 object-cover" 
                />
                <div 
                  className="mt-5" 
                  dangerouslySetInnerHTML={{ __html: newsDetail.rows[0].content }} 
                />                    
              </div>
            </section>

            <section className="md:w-1/4 flex flex-col gap-3">
              <Latestnews lang={langu} />
              <MostReadNews lang={langu} />
              <div className="bg-white p-5 rounded">
                <h1 className="text-2xl font-bold">Also Read</h1>
                <Alsoread />
              </div>
              {/* Sidebar Ad with background image and centered text */}
              <div
                className="rounded overflow-hidden flex items-center justify-center h-40"
                style={{
                  backgroundImage: "url('/images/banners/1.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label="Advertisement"
              >
                <div className="bg-black/40 text-white px-3 py-1 rounded">
                  Advertisement
                </div>
              </div>
            </section>
          </main>

          {/* Full-width ad image below both sections */}
          <section className="max-w-screen-xl mx-auto px-4 my-3">
            {/* Full width Ad with background image and centered text */}
            <div
              className="w-full h-32 md:h-44 rounded overflow-hidden flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/banners/1.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              aria-label="Advertisement"
            >
              <div className="bg-black/40 text-white px-4 py-2 rounded text-center text-sm md:text-base">
                Advertisement
              </div>
            </div>
          </section>

          {/* Related News grid full width */}
          <section className="max-w-screen-xl mx-auto mb-6">
            <Relatednews lang={langu} />
          </section>
        </>
      ) : (
        <div className="max-w-screen-xl w-full mx-auto md:w-3/4 mt-1 bg-white p-4">
          <SearchContent tagquery={tquery} tagcurrentPage={tcurrentPage} sort={tsort} time={ttime} />
          <div className="mt-12 flex justify-center">
            <Pagination totalPages={totalPages} />
          </div>
        </div>
      )}
    </>
  );
}
