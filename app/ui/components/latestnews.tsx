import { fetchLatestNews } from "@/app/lib/data";
import Link from "next/link";
import { getTranslations } from "next-intl/server"; // for server components
import Seeall_Latest_News from "@/app/ui/components/seeall_latest_news";
import Seeall_Latest from "@/app/ui/components/seeall_latest";

export default async function Latestnews({lang}:{lang:string}) {
  const latestNews = await fetchLatestNews(lang)
  let newsDate: Date;
  if (latestNews.rowCount === 0) {
    newsDate = new Date();
  }
  else {
    newsDate = new Date(latestNews.rows[0].date_time);
  }
  
  const newsTime = newsDate.toLocaleTimeString();

 const t = await getTranslations({locale: lang, namespace: 'Headings'});

  return (
    <aside className='bg-white p-5 rounded w-[1/4] pb-14'>
      <h1 className='text-2xl font-bold'>{t('News.Latest')}</h1>
        {
          latestNews.rows.map((latest)=> (
            <Link key={latest.id} href={`/newsdetail/${latest.slug}`}>
              <p className='pt-2 text-[16px] font-bold w-full hover:text-[#068509]'><span className='text-xs text-purple-800 pr-2'>{newsTime}</span>{latest.title}</p>
            </Link>
                     
          ))
        }
        <div className="flex flex-rows justify-end">
          <Seeall_Latest>
            <Seeall_Latest_News lang = {lang} />
          </Seeall_Latest>
        </div>
    </aside>   
    
  )
}
