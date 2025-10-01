import { fetchSeeMostReadNews } from "@/app/lib/data";
import Link from "next/link";

export default async function Seeall_MostRead_News({lang}:{lang:string}) {
  const mostReadNews = await fetchSeeMostReadNews(lang)
  let newsDate: Date;
  if (mostReadNews.rowCount === 0) {
    newsDate = new Date();
  }
  else {
    newsDate = new Date(mostReadNews.rows[0].date_time);
  }
  
  const newsTime = newsDate.toLocaleTimeString();

  return (
    <aside className='bg-white rounded w-[1/4] pb-4'>
        {
          mostReadNews.rows.map((most)=> (
            <Link key={most.id} href={`/newsdetail/${most.slug}`}>
              <p className='py-2 text-[16px] font-bold w-full hover:text-[#068509]'><span className='text-xs text-purple-800 pr-2'>{newsTime}</span>{most.title}</p>
            </Link>
          ))
        }
    </aside>
  )
}
