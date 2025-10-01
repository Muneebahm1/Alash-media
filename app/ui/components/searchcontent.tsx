import Image from "next/image"
import Link from "next/link";
import { fetchSearchContent, fetchSearchContentPages } from "@/app/lib/data";
import VerticalAdd from "./verticaladd";
import SearchFilters, { SortBy, TimeRange } from "./search-filters";

type TagProps = {
  tagquery?: string;
  tagcurrentPage?: number;
  pathName?: string;
  sort?: SortBy;
  time?: TimeRange;
};

export default async function SearchContent({ tagquery, tagcurrentPage, sort, time }: TagProps) {
  const q = tagquery || '';
  const page = tagcurrentPage || 1;
  const sortBy = sort || 'relevance';
  const timeRange = time || 'any';

  // Fetch filtered data for this page
  const searchData = await fetchSearchContent(q, page, { sortBy, time: timeRange });

  // Compute totals to decide which empty-state to show
  const baseTotalPages = await fetchSearchContentPages(q); // no filters
  const baseHasAny = (baseTotalPages || 0) > 0;

  const filteredTotalPages = await fetchSearchContentPages(q, { time: timeRange });
  const filteredHasAny = (filteredTotalPages || 0) > 0;
     //  else is automatic count below in else  
  // If base search has no results at all, show the original empty state (no filters needed)
  if (!baseHasAny) {
    return (
      <div className="mt-2 flex flex-row items-left justify-left bg-white p-6">
        <div>
          <h2 className='text-3xl font-bold'>We couldn&apos;t find any results for &quot;{tagquery}&quot;</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 rounded-m bg-white w-full p-2">
        <div className=" px-4 py-3">
          <h2 className="text-3xl font-bold mb-5">
            Showing results for &quot;{tagquery}&quot;
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* Filters */}
            <SearchFilters />
            {/* Heading spacer (kept for layout stability) */}
          </div>
          {/* If current filters match no items but base had items, show a subtle notice */}
          {filteredHasAny === false && (
            <p className="mt-3 text-sm text-gray-600">No results for the current filters. Try adjusting Sort or Time.</p>
          )}
        </div>
      </div>

      <main className='max-w-screen-xl mx-auto mt-0.5 flex flex-col md:flex-row gap-1.5'>
        <section className='w-full md:w-3/4 mt-0.5 bg-white'>
          {Number(searchData.rowCount) === 0 ? (
            <div className='w-full p-5 mt-5 mb-2'>
              <div className="text-center text-gray-600">No data for selected filters.</div>
            </div>
          ) : (
            searchData.rows.map((article) => (
              <div key={article.id} id='search_news' className='w-full p-5 mt-5 mb-2'>
                <Link href={`/newsdetail/${article.slug}`}>
                  <Image src={article.image_url} alt="Search News" width={746} height={296}
                    className='w-full h-52 md:h-96 object-cover hover:scale-105 transition-transform duration-1000 rounded' />
                  <h1 className='mt-5 text-xl font-bold'>{article.title}</h1>
                  <p className='mt-2 text-gray-400 '>{article.subtitle}</p>
                  <p className='mt-1 font-semibold text-gray-500 '>{article.date_time}</p>
                </Link>
              </div>
            ))
          )}
        </section>
        <section className='mt-0.5 md:w-1/4 flex flex-col gap-1'>
          <VerticalAdd />
          <VerticalAdd />
        </section>
      </main>
    </div>
  )
}

