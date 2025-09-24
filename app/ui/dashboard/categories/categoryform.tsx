import { addCategory } from "@/app/lib/actions";
import { CategoryData } from "@/app/lib/definitions";

export default function CategoryForm(
  { category, submitText }: {
    category?: CategoryData | null;
    submitText: string;
  }
) { //  FC for Functional Component it takes children props automatically
  const boundCategory = addCategory.bind(null,category?.category_id || null,submitText);
  return (
    <form action={boundCategory} className="w-[86%]">
        <div className='px-2 py-3 lg:py-12 rounded-lg '>
          <h1 className='mb-2'>Please enter news category</h1>
          <div className='space-y-3'>
            <div>
              <label htmlFor="author" className='text-xs font-medium'>Category Name</label>
              <div className='relative'>
                <input id="category" type="text" name='category' 
                defaultValue={category?.category_name}  maxLength={48} required
                placeholder="Enter Category Name" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="subcategory" className='text-xs font-medium'>Sub-category Name</label>
              <div className='relative'>
                <input id="subcategory" type="text" name='subcategory' 
                defaultValue={category?.subcategory_name} maxLength={48} required
                placeholder="Enter Subcategory Name" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div className="w-full flex flex-rwo justify-end items-center">
              <button type="submit"  
              className="mt-5 w-36 h-10 rounded-lg px-4 py-2 cursor-pointer bg-[#06A35A] hover:bg-[#00A739] hover:border-[#00A739] hover:text-indigo-700 text-white text-center"
              >
                {submitText}
              </button>
            </div>
          </div>
        </div>
        
    </form>
  );
}


