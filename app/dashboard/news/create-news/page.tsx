import { Suspense } from "react"
import NewsForm from "@/app/ui/dashboard/news/newsform"


const page = () => {
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Create News</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <NewsForm submitText = {'Publish'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page