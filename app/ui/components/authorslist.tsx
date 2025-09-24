import { fetchAuthorsList,fetchAuthorsListPages,fetchLetterAuthorsList } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";
import {verdana } from "@/app/ui/fonts";
import Pagination from "../dashboard/pagination";

interface AuthorQuery {
  authorQuery: string,
  searchAlpha: string
}

const AuthorsList = async({authorQuery,searchAlpha}:AuthorQuery) => {
  const authorTotalPages = await fetchAuthorsListPages(authorQuery);
  const authorsList = await fetchAuthorsList(authorQuery,authorTotalPages);  
  const letterAuthorsList = await fetchLetterAuthorsList(searchAlpha,authorTotalPages);  
 // console.log(`letterQuery: ${searchAlpha}`)
 // console.log(`searchQuery: ${authorQuery}`)
  let authors = 0;
  if (authorQuery === '' && searchAlpha === '' ) {
    authors = 1;
  }
  else if (authorQuery !== '') {
    authors = 1;
  }
  else { 
    authors = 0;
  }
    
  const searchLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  
  return(
    <main>
      <section className="bg-[#E9FFE5] flex px-5">
        <div className="w-full flex flex-wrap gap-5 justify-left ">
          {
            searchLetters.map((searchLetter,index)=> (
            <div key={index}>
              <Link href={`/authors/?searchLetter=${searchLetter}`}>
                <p className="text-3xl font-bold text-[#0C680E] hover:bg-[#00AABF] px-2 py-1 ">{searchLetter}</p>
              </Link>
            </div>
            ))
          }      
        </div>
      </section>
      {
      authors === 0 ? (
      <section className="bg-white">
        <div className="flex justify-center">
          <div className='grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-12 p-5'>
            {
              letterAuthorsList.rows.map((letterAuthor)=> (
                <div key={letterAuthor.id} className="mt-9">
                  <Link href={`/newsdetail/${letterAuthor.slug}`}>
                    <div className="w-39 h-39">
                      <Image src={letterAuthor.image_url} alt={letterAuthor.name}
                        width={130} height={130}
                        className="object-cover w-32 h-32 md:w-39 md:h-39 rounded-full"
                      />
                    </div>
                  </Link>
                  <Link href={`/newsdetail/${letterAuthor.slug}`}>
                    <div className="p-1 md:p-2">
                      <h1 style ={{fontFamily: verdana.font_Family}} className="font-bold text-xl text-center">{letterAuthor.name}</h1>
                    </div>
                  </Link>
                </div>     
                ))
            }    
          </div>   
        </div>
        <div className='mt-12 flex justify-center p-5'>
            <Pagination totalPages={authorTotalPages} />
        </div>
      </section>
      ): (
      <section className="bg-white">
        <div className="flex items-center justify-center">
          <div className='grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-12 p-5'>
            {
              authorsList.rows.map((author)=> (
                <div key={author.id} className="mt-9">
                  <Link href={`/newsdetail/${author.slug}`}>
                    <div className="w-39 h-39">
                      <Image src={author.image_url} alt={author.name}
                        width={130} height={130}
                        className="object-cover w-32 h-32 md:w-39 md:h-39 rounded-full"
                      />
                    </div>
                  </Link>
                  <Link href={`/newsdetail/${author.slug}`}>
                    <div className="p-1 md:p-2">
                      <h1 style ={{fontFamily: verdana.font_Family}} className="font-bold text-xl text-center">{author.name}</h1>
                    </div>
                  </Link>
                </div>     
                ))
            }    
          </div> 
        </div>
        <div className='mt-12 flex justify-center p-5'>
            <Pagination totalPages={authorTotalPages} />
        </div>
      </section>
      ) 
      
      }
    </main>      
  )
}

export default AuthorsList