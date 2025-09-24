'use client';
import { publishNews } from "@/app/lib/actions";
import NewsEditor from "@/app/ui/components/newseditor";
import KKNewsEditor from "@/app/ui/components/kknewseditor";
import RUNewsEditor from "@/app/ui/components/runewseditor";
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Suspense,useState,useEffect} from "react";
import { fetchCategories,fetchSubCategories,fetchTags,fetchNewsAuthors,type Categories,type SubCategories,type Tags,type NewsAuthors } from "@/app/lib/actions";
import { NewsData } from "@/app/lib/definitions";


const NewsForm = (
  { news, submitText }: {
    news?: NewsData | null;
    submitText: string;
    
  }
) => { //  FC for Functional Component it takes children props automatically
  const [authors,setAuthors] = useState<NewsAuthors[]>([])
  const [selectedAuthorId, setSelectedAuthorId] = useState<string>("")
  const [categories,setCategories] = useState<Categories[]>([])
  const [subcategories,setSubCategories] = useState<SubCategories[]>([])
  const [tags,setTags] = useState<Tags[]>([])
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("")
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<string>("")
  const [selectedTagId, setSelectedTagId] = useState<string>("")
  const [selectedNewsType, setSelectedNewsType] = useState<string>("")

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const {replace} = useRouter();
  
  //const boundNews = publishNews.bind(null,news?.id || null,submitText);
    console.log(`news_title: ${news?.title}`);
    function getFilenameFromUrl(url: string) {
      return url.split('/').pop() || 'uploaded-image';
    }

    useEffect(()=>{
    const loadAuthors = async () => {
        const data = await fetchNewsAuthors();
        setAuthors(data);
    }
    loadAuthors();
  
  },[])

  useEffect(()=>{
    const loadCategories = async () => {
        const data = await fetchCategories();
        setCategories(data);
        setSelectedCategoryId(news?.category_id || '');
    }
    loadCategories();
  
  },[])

  
  useEffect(()=>{
      const loadSubCategories = async () => {
        if (!selectedCategoryId) {
        setSubCategories([])
        setSelectedSubCategoryId(news?.subcategory_id || '')
        return
      }
      try {
        const data = await fetchSubCategories(selectedCategoryId)
        setSubCategories(data)
        setSelectedSubCategoryId(news?.subcategory_id || '') // Reset subcategory selection
      } catch (error) {
        console.error("Error loading subcategories:", error)
        setSubCategories([])
      } 
    }
    loadSubCategories();
        
  },[selectedCategoryId])
  
  useEffect(()=>{
    const loadTags = async () => {
        const data = await fetchTags();
        setTags(data);
        //setSelectedTagId(tags.rows[0].tag_id || '');
    }
    loadTags();
  
  },[])
   // this will throw error of hook orders in which condition should not be outside th hook   
  /*if (loading) {
      return <div>Loading...</div>
    }*/
  
  const setUrlParams = useDebouncedCallback((searchInput: string)=> {
      const params = new URLSearchParams(searchParams);
      if(searchInput) {
        params.set('title',searchInput);
      }
      else {
        params.delete('title');
      }
      //console.log(params);
      replace(`${pathName}?${params.toString()}`);
      //console.log(searchParams);
            
  },300)
  
  const handleContentCheck = async (formData: FormData) => {
    const contentValue = formData.get('content') as string || '';
    const currentContent = contentValue;
    const plainText = currentContent?.replace(/<[^>]*>/g, '').trim();

    const kkcontentValue = formData.get('kkcontent') as string || '';
    const kkcurrentContent = kkcontentValue;
    const kkplainText = kkcurrentContent?.replace(/<[^>]*>/g, '').trim();

    const rucontentValue = formData.get('content') as string || '';
    const rucurrentContent = rucontentValue;
    const ruplainText = rucurrentContent?.replace(/<[^>]*>/g, '').trim();

    if (plainText.length === 0 || kkplainText.length === 0 || ruplainText.length === 0 ) {
      alert("You can't leave empty, Please fill out content field");
      return;
    }
    else {
      await publishNews(news?.id || null,submitText,formData);
      
    }
    
    
  }
  
  const handleChangeAuthor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthorId(e.target.value);
    
  }

  const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryId(e.target.value);
    
  }
  
  const handleChangeSubCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubCategoryId(e.target.value);
  }

  const handleChangeTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTagId(e.target.value);
    
  }
  
  const handleChangeNewsType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedNewsType(e.target.value);
  }
  
  //console.log("child received tags:", news?.newsTags);
  //console.log("DefaultValue tag_ids:", news?.newsTags.map(nTag => nTag.tag_id));
  //console.log("Option values (tags.id):", tags.map(t => t.id));
  
  if (!categories || categories.length === 0) {
    return <p>Loading categories...</p>;
  }
  return (
    <form className="w-[86%]">
        <div className='px-2 py-3 lg:py-12 rounded-lg '>
          <h1 className='mb-5'>Please enter publication data</h1>
          <div className='space-y-3'>
            <h1 className='mb-2 text-center text-2xl'>English Language</h1>
            <hr className="border-2 border-[#00A759]"/>
            <div>
              <label htmlFor="title" className='text-xs font-medium'>News Title</label>
              <div className='relative bg-gray-50'>
                <input id="title" type="text" name='title'  
                defaultValue={news?.title} maxLength={200} required
                placeholder='Enter News Title' onChange={(e)=> setUrlParams(e.target.value)} 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="subtitle" className='text-xs font-medium'>News Sub-title</label>
              <div className='relative bg-gray-50'>
                <input id="subtitle" type="text" name='subtitle'  
                defaultValue={news?.subtitle} maxLength={200} required
                placeholder='Enter News Sub Title' 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="content" className='text-xs font-medium'>News Content</label>
              <Suspense fallback={<div>Loading...</div>}>
                <NewsEditor content = {news?.content}/>
              </Suspense>
            </div>
            <div>
              <label htmlFor="author" className='text-xs font-medium'>Author Name</label>
              <div className='relative bg-gray-50'>
                <select onChange={handleChangeAuthor} id="author" name="author" 
                defaultValue={selectedAuthorId} required 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                  {
                    authors.map((author)=>(
                      <option  key={author.id} value={author.name} selected={news?.author_name === author.name} >{author.name.toString()}</option>
                    ))
                  }
                  
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="category" className='text-xs font-medium'>News Category</label>
              <div className='relative bg-gray-50'>
                <select onChange={handleChangeCategory} id="category" name="category" 
                defaultValue={selectedCategoryId} required 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                  {
                    categories.map((category)=>(
                      <option  key={category.category_id} value={category.category_id} selected={news?.category_id === category.category_id} >{category.category_name.toString()}</option>
                    ))
                  }
                  {/*<option value="informational">Informational</option>*/}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="category" className='text-xs font-medium'>News Sub Category</label>
              <div className='relative bg-gray-50'>
                <select onChange={handleChangeSubCategory} id="subcategory" name="subcategory" 
                defaultValue={selectedSubCategoryId} required 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                  {
                    subcategories.map((subcategory)=>(
                      <option key={subcategory.subcategory_id} value={subcategory.subcategory_id} selected={news?.subcategory_id === subcategory.subcategory_id}>{subcategory.subcategory_name.toString()}</option>
                    ))
                  }
                  {/*<option value="informational">Informational</option>*/}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="media" className='text-xs font-medium'>Select Media Picture/Video</label>
              <div className='relative'>
                <input id="media" type="file" name='media' accept='image/*,video/*' required 
                className='inline-block w-1/3 pl-9 border cursor-pointer border-gray-300 px-2 py-2 bg-[#00A759] text-gray-50 
                hover:text-indigo-700 rounded-md placeholder:text-gray-400 text-sm text-center'/>
                {news?.image_url && (
                <div className="current-file-info">
                  <p>Current image file on server: {getFilenameFromUrl(news.image_url)} 
                  <small> Choose a new file to replace it</small></p>
                  
                </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="tags" className='text-xs font-medium'>News Tag</label>
              <div className='relative bg-gray-50'>
                <select onChange={handleChangeTag} id="tags" name="tags" required 
                multiple defaultValue={news?.newsTags.map(nTag => nTag.tag_id)}
                className='w-full h-32 border border-gray-400 px-1 pl-8 py-2  
                rounded-md placeholder:text-gray-500 text-sm space-y-1'
                >
                  {
                    tags.map((tag)=>(
                      <option  key={tag.id} value={selectedTagId}>{tag.name.toString()}</option>
                    ))
                  }
                                    
                  {/*<option value="informational">Informational</option>*/}
                </select>
              </div>
            </div>
            <div>
              <h1 className='mt-5'>What type of news to display on your Web Application</h1>
            </div>
            <div>
              <label htmlFor="newstype" className='text-xs font-medium'>News Type</label>
              <div className='relative bg-gray-50'>
                <select onChange={handleChangeNewsType} id="newstype" name="newstype" 
                defaultValue={news?.section} required 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                  <option value="Trending Topics" selected={news?.section === selectedNewsType}>Trending Topics</option>
                  <option value="Highlights" selected={news?.section === selectedNewsType}>Highlights</option>
                  <option value="Hero Top News" selected={news?.section === selectedNewsType}>Hero Top News</option>
                  <option value="Top News" selected={news?.section === selectedNewsType}>Top News</option>
                  <option value="Latest News" selected={news?.section === selectedNewsType}>Latest News</option>
                  <option value="Most Read News" selected={news?.section === selectedNewsType}>Most Read News</option>
                  <option value="Categories" selected={news?.section === selectedNewsType}>Categories</option>
                  <option value="Multimedia" selected={news?.section === selectedNewsType}>Multimedia</option>
                  <option value="Interview" selected={news?.section === selectedNewsType}>Interview</option>
                  <option value="Authors" selected={news?.section === selectedNewsType}>Authors</option>
                </select>
              </div>
            </div>
            <h1 className='mb-2 mt-2 text-center text-2xl'>Kazakh Language</h1>
            <hr className="border-2 border-[#00A759]"/>
            <div>
              <label htmlFor="kktitle" className='text-xs font-medium'>News Title</label>
              <div className='relative bg-gray-50'>
                <input id="kktitle" type="text" name='kktitle'  
                defaultValue={news?.kktitle} maxLength={200} required
                placeholder='Enter News Title' onChange={(e)=> setUrlParams(e.target.value)} 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="kksubtitle" className='text-xs font-medium'>News Sub-title</label>
              <div className='relative bg-gray-50'>
                <input id="kksubtitle" type="text" name='kksubtitle'  
                defaultValue={news?.kksubtitle} maxLength={200} required
                placeholder='Enter News Sub Title' 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="kkcontent" className='text-xs font-medium'>News Content</label>
              <Suspense fallback={<div>Loading...</div>}>
                <KKNewsEditor kkcontent = {news?.kkcontent}/>
              </Suspense>
            </div>
            <h1 className='mb-2 mt-2 text-center text-2xl'>Russian Language</h1>
            <hr className="border-2 border-[#00A759]"/>
            <div>
              <label htmlFor="rutitle" className='text-xs font-medium'>News Title</label>
              <div className='relative bg-gray-50'>
                <input id="rutitle" type="text" name='rutitle'  
                defaultValue={news?.rutitle} maxLength={200} required
                placeholder='Enter News Title' onChange={(e)=> setUrlParams(e.target.value)} 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="rusubtitle" className='text-xs font-medium'>News Sub-title</label>
              <div className='relative bg-gray-50'>
                <input id="rusubtitle" type="text" name='rusubtitle'  
                defaultValue={news?.rusubtitle} maxLength={200} required
                placeholder='Enter News Sub Title' 
                className='w-full h-10 border border-gray-400 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="rucontent" className='text-xs font-medium'>News Content</label>
              <Suspense fallback={<div>Loading...</div>}>
                <RUNewsEditor rucontent = {news?.rucontent}/>
              </Suspense>
            </div>
            <hr className="border-2 border-[#00A759]"/>
                        
            <div className="w-full flex flex-rwo justify-end items-center">
              <button type="submit"  
              className="mt-5 w-36 h-10 rounded-lg px-4 py-2 cursor-pointer bg-[#06A35A] hover:bg-[#00A739] hover:border-[#00A739] hover:text-indigo-700 text-white text-center"
              formAction={handleContentCheck}
              >
                {submitText}
              </button>
            </div>
          </div>
        </div>
        
    </form>
  );
}

export default NewsForm;
