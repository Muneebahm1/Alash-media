import { Suspense } from "react"
import TagForm from "@/app/ui/dashboard/tags/tagform"
import { fetchTagById } from "@/app/lib/data";
import { TagData } from "@/app/lib/definitions";

const page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
    
  const tag = await fetchTagById(params.id);

  const tagData: TagData = {
    id: tag.rows[0].id,
    name: tag.rows[0].name,
    slug: tag.rows[0].slug,
    image_url: tag.rows[0].image_url,
  };

  console.log(`tag in edit: ${tag.rows[0].name}`)
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Update Tag</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <TagForm tag = {tagData} submitText = {'Update'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page
