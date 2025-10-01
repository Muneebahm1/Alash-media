import { fetchMostReadNews } from "@/app/lib/data";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Seeall_MostRead from "@/app/ui/components/seeall_mostread";
import Seeall_MostRead_News from "@/app/ui/components/seeall_mostread_news";

export default async function MostReadNews({lang}:{lang:string}) {
  const mostReadNews = await fetchMostReadNews(lang)
  
  let newsTime: string;
  if (mostReadNews.rowCount !== 0) {
      const newsDate = new Date(mostReadNews.rows[0].date_time);
      newsTime = newsDate.toLocaleTimeString();  
  }
  
  const t = await getTranslations({locale: lang, namespace: 'Headings'});
  return (
    <div className='bg-white p-5 rounded'>
      <h1 className='text-2xl font-bold'>{t('News.MostRead')}</h1>
        {
          mostReadNews.rows.map((mostRead)=> (
            <Link key={mostRead.id} href={`/newsdetail/${mostRead.slug}`}>
              <p  className='pt-2 text-[16px] font-bold w-full hover:text-[#068509]'><span className='text-xs text-purple-800 pr-1'>{newsTime}</span>{mostRead.title}</p>
            </Link>
          ))
        }
        <div className="flex flex-rows justify-end mt-2">
          <Seeall_MostRead>
            <Seeall_MostRead_News lang={lang} />
          </Seeall_MostRead>
        </div>
    </div>
    
  )
}
