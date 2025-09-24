import { Suspense } from "react"
import AuthorForm from "@/app/ui/dashboard/authors/authorform"
import { fetchAuthorById } from "@/app/lib/data";
import { AuthorData } from "@/app/lib/definitions";

const page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
    
  const author = await fetchAuthorById(params.id);

  const authorData: AuthorData = {
    id: author.rows[0].id,
    name: author.rows[0].name,
    email: author.rows[0].email,
    image_url: author.rows[0].image_url,
    biography: author.rows[0].biography,
  };

  console.log(`author in edit: ${author.rows[0].name}`)
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Update Author</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthorForm author = {authorData} submitText = {'Update'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page