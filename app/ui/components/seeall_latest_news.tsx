import { fetchSeeLatestNews } from "@/app/lib/data";
import Link from "next/link";
import { getTranslations } from "next-intl/server"; // for server components

export default async function Seeall_Latest_News({lang}:{lang:string}) {
  const latestNews = await fetchSeeLatestNews(lang)
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
    <aside className='bg-white rounded w-[1/4] pb-14'>
        {
          latestNews.rows.map((latest)=> (
            <Link key={latest.id} href={`/newsdetail/${latest.slug}`}>
              <p className='py-2 text-[16px] font-bold w-full hover:text-[#068509]'><span className='text-xs text-purple-800 pr-2'>{newsTime}</span>{latest.title}</p>
            </Link>
                     
          ))
        }
               
    </aside>   
  )
}
