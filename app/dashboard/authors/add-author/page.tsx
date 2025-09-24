import { Suspense } from "react"
import AuthorForm from "@/app/ui/dashboard/authors/authorform"

const page = () => {
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Add New Author</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthorForm submitText = {'Add New'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page