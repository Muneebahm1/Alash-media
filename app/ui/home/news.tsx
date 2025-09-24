import React from 'react'
import Image from 'next/image';
import { fetchcurrentMainhNews } from '@/app/lib/data';
import { fetchCurrenthNews } from '@/app/lib/data';
import { fetchLatestQuestions } from '@/app/lib/data';
import Link from 'next/link';
import Latestnews from '@/app/ui/components/latestnews';
import MostReadNews from '@/app/ui/components/mostread';
import Questions from '@/app/ui/components/questions';
import VerticalAdd from '@/app/ui/components/verticaladd';
import { QuestionData } from '@/app/lib/definitions';

export default async function News({langu}:{langu: string}) {
    
  //let ntitle,content,divi
  const mainArticle = await fetchcurrentMainhNews(langu);
  const currentArticles = await fetchCurrenthNews(langu);
  const questions = await fetchLatestQuestions()
  
  if (!mainArticle || Number(mainArticle.rowCount) === 0) {
    
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-4xl font-bold'>No main article Found</h2>
          <p className='text-center mt-2 mb-2'>Sorry, main article section is under updation</p> 
        </div>
      </div>

    );
  }
  //console.log(currentArticles.rows[0].title);
  /*if (articles && articles.rows && articles.rows.length > 0) {
    console.log(`title = ${articles.rows[0].title}`);
  }
  else {
    console.log("Article is still loading, Please refresh the page");
  }*/
  
  const mArticleDate = new Date(mainArticle.rows[0].date_time).toLocaleDateString("en-UK",{
    day: "2-digit",   
    month: "short",   // 3-character month (Jan, Feb, Mar...)
    year: "numeric",  
  });
  const cArticleDate = new Date(currentArticles.rows[0].date_time).toLocaleDateString("en-UK",{
    day: "2-digit",   
    month: "short",   // 3-character month (Jan, Feb, Mar...)
    year: "numeric",  
  });
  
  const questionData: QuestionData = {
      id: questions.rows[0].id,
      qdetail: questions.rows[0].qdetail,
      option1: questions.rows[0].option1,
      option2: questions.rows[0].option2,
      option3: questions.rows[0].option3,
      correct: questions.rows[0].correct,
  }

  return (
    <main id="container" className='max-w-screen-xl mx-auto md:mx-[120px] mt-0.5 flex flex-col md:flex-row gap-1.5 px-4'>
      <section className='w-full md:w-3/4 mt-0.5'>
          <div className='bg-white p-5 rounded'>
            <div id='main_news' className='overflow-hidden'>
              <Link href={`/newsdetail/${mainArticle.rows[0].slug}`}>
                <Image src={mainArticle.rows[0].image_url} alt="Main News" width={746} height={296} 
                className='w-full h-52 md:h-96 object-conver hover:scale-105 transition-transform duration-1000 rounded' />
                <h1 className='mt-5 text-xl font-bold'>{mainArticle.rows[0].title}</h1>
                <p className='mt-2 text-gray-700 '>{mainArticle.rows[0].subtitle}</p>
                <div className='flex flex-row gap-5 items-center'>
                  <p className='mt-1 text-xs text-gray-500 '>{mArticleDate}</p>
                  <p className='mt-1 text-xs text-gray-500 '>{mainArticle.rows[0].read_time} min read</p>
                  <p className='mt-1 text-xs text-gray-500 '>{mainArticle.rows[0].view_count} views</p>
                </div>
              </Link>
            </div>
          </div>
          <div className='mt-1 bg-white grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-4 gap-3 p-5 '>
          {
            currentArticles.rows.map((article)=> (
              <div key={article.id} id='news1' className='overflow-hidden bg-[#E9FFE5]'>
                <Link href={`/newsdetail/${article.slug}`} className='relative'>
                  <Image src={article.image_url} alt="Main News" width={367} height={296} 
                  className='w-full h-48 md:h-57 object-conver 
                  hover:scale-105 transition-transform duration-1000 rounded' />
                  <div className='absolute bottom-2 z-10'>
                    <h1 className='text-xl font-bold text-white p-5'>{article.title}</h1>
                    <div className='flex flex-row gap-2 items-center'>
                      <p className='mt-3 text-xs text-gray-200 p-5'>{cArticleDate}</p>
                      <p className='mt-3 text-xs text-gray-200 p-5 '>{article.read_time} min read</p>
                      <p className='mt-3 text-xs text-gray-200 p-5 '>{article.view_count} views</p>
                    </div>
                  </div>
                </Link>
              </div>    
              ))
          }    
          </div>
      </section>
      <section className='md:w-1/4 flex flex-col gap-1'>
        <Latestnews lang = {langu} />
        <MostReadNews lang = {langu} />
        <Questions latestQuestion = {questionData} />
        <VerticalAdd />
      </section>
    </main>
     
  )
}

