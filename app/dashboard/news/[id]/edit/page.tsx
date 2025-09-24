import { Suspense } from "react"
import NewsForm from "@/app/ui/dashboard/news/newsform"
import { fetchNewsById } from "@/app/lib/data";
import { NewsData } from "@/app/lib/definitions";

const page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
  
  const newsid = params.id;
  const news = await fetchNewsById(newsid);
    
  if (!news || Number(news.newsById.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No news id Found</h2>
          <p className='text-center mt-2 mb-2'>Please add new news first</p> 
        </div>
      </div>

    );
  }

  //console.log('news.tagIds:', news.tagsById.rows, 'type:', typeof news.tagsById.rows[0].tag_id);

 
  const newsData: NewsData = {
    id: news.newsById.rows[0].id,
    title: news.newsById.rows[0].title,
    kktitle: news.kkNewsById.rows[0].title,
    rutitle: news.ruNewsById.rows[0].title,
    subtitle: news.newsById.rows[0].subtitle,
    kksubtitle: news.kkNewsById.rows[0].subtitle,
    rusubtitle: news.ruNewsById.rows[0].subtitle,
    author_name: news.newsById.rows[0].author_name,
    category_id: news.newsById.rows[0].category_id,
    category_name: news.newsById.rows[0].category_name,
    subcategory_id: news.newsById.rows[0].subcategory_id,
    subcategory_name: news.newsById.rows[0].subcategory_name,
    image_url: news.newsById.rows[0].image_url,
    content: news.newsById.rows[0].content,
    kkcontent: news.kkNewsById.rows[0].content,
    rucontent: news.ruNewsById.rows[0].content,
    slug: news.newsById.rows[0].slug,
    section: news.newsById.rows[0].section,
    newsTags: news.tagsById.rows ?? [],
    date_time: news.newsById.rows[0].date_time,
    
  };

  //console.log(`news id in edit: ${news.rows[0].id}`)
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Update News</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <NewsForm news = {newsData} submitText = {'Update'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page