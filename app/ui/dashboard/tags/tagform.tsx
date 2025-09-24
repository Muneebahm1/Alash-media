import { addTag } from "@/app/lib/actions";
import { TagData } from "@/app/lib/definitions";

export default function TagForm(
  { tag, submitText }: {
    tag?: TagData | null;
    submitText: string;
  }
) { //  FC for Functional Component it takes children props automatically
  
  const boundTag = addTag.bind(null,tag?.id || null,submitText);
    console.log(`tag_name: ${tag?.name}`);
    function getFilenameFromUrl(url: string) {
      return url.split('/').pop() || 'uploaded-image';
    }
  return (
    <form action={boundTag} className="w-[86%]">
        <div className='px-2 py-3 lg:py-12 rounded-lg '>
          <h1 className='mb-2'>Please enter news tag</h1>
          <div className='space-y-3'>
            <div>
              <label htmlFor="author" className='text-xs font-medium'>Tag Name</label>
              <div className='relative'>
                <input id="name" type="text" name='name' 
                defaultValue={tag?.name} maxLength={32} required
                placeholder="Enter Tag" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="media" className='text-xs font-medium'>Select Tag&apos;s Picture</label>
              <div className='relative'>
                <input id="media" type="file" name='media' accept='image/*' required 
                className='inline-block w-1/3 pl-9 border cursor-pointer border-gray-300 px-2 py-2 bg-[#00A759] text-gray-50 
                hover:text-indigo-700 rounded-md placeholder:text-gray-500 text-sm text-center'/>
                {tag?.image_url && (
                <div className="current-file-info">
                  <p>Current image file on server: {getFilenameFromUrl(tag.image_url)} 
                  <small> Choose a new file to replace it</small></p>
                  
                </div>
                )}
              </div>
            </div>
            <div className="w-full flex flex-rwo justify-end items-center">
              <button type="submit"  
              className="mt-5 w-32 h-10 rounded-lg px-4 py-2 cursor-pointer bg-[#06A35A] hover:bg-[#00A739] hover:border-[#00A739] hover:text-indigo-700 text-white text-center"
              >
                {submitText}
              </button>
            </div>
          </div>
        </div>
        
    </form>
  );
}


