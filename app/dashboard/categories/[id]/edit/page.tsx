import { Suspense } from "react"
import CategoryForm from "@/app/ui/dashboard/categories/categoryform"
import { fetchCategoryById } from "@/app/lib/data";
import { CategoryData } from "@/app/lib/definitions";

const page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
    
  const category = await fetchCategoryById(params.id);

  const categoryData: CategoryData = {
    category_id: category.rows[0].category_id,
    category_name: category.rows[0].category_name,
    subcategory_name: category.rows[0].subcategory_name,
  };

  //console.log(`category in edit: ${category.rows[0].name}`)
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Update Categories</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <CategoryForm category = {categoryData} submitText = {'Update'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page