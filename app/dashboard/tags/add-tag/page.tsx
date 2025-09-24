import { Suspense } from "react"
import TagForm from "@/app/ui/dashboard/tags/tagform"


const page = () => {
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Add new Tag</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <TagForm submitText = {'Add New'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page