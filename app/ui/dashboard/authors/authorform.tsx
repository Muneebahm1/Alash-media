import { addAuthor } from "@/app/lib/actions";
import { AuthorData } from "@/app/lib/definitions";

export default function AuthorForm(
  { author, submitText }: {
  author?: AuthorData | null;
  submitText: string;
}
)

  { //  FC for Functional Component it takes children props automatically
  const boundAuthor = addAuthor.bind(null,author?.id || null,submitText);
  console.log(`author_name: ${author?.name}`);
  function getFilenameFromUrl(url: string) {
    return url.split('/').pop() || 'uploaded-image';
  }
  return (
    <form action={boundAuthor} className="w-[86%]">
        {/*<input type="hidden" name="action_type" value={submitText} />*/}
        <div className='px-2 py-3 lg:py-12 rounded-lg '>
          <h1 className='mb-2'>Please enter author&apos;s data</h1>
          <div className='space-y-3'>
            <div>
              <label htmlFor="author" className='text-xs font-medium'>Author&apos;s Name</label>
              <div className='relative'>
                <input id="author" type="text" name='author' 
                defaultValue = {author?.name} maxLength={32} required
                placeholder="Enter Author's Name" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="email" className='text-xs font-medium'>Author&apos;s Email Address</label>
              <div className='relative'>
                <input id="email" type="email" name='email' 
                defaultValue = {author?.email} maxLength={48} required
                placeholder="Enter Author's Email Address" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="media" className='text-xs font-medium'>Select Author&apos;s Picture</label>
              <div className='relative'>
                <input id="media" type="file" name='media' 
                accept='image/*' required 
                className='inline-block w-1/3 pl-9 border cursor-pointer border-gray-300 px-2 py-2 bg-[#00A759] text-gray-50 
                hover:text-indigo-700 rounded-md placeholder:text-gray-500 text-sm text-center'/>
                {author?.image_url && (
                <div className="current-file-info">
                  <p>Current image file on server: {getFilenameFromUrl(author.image_url)} 
                  <small> Choose a new file to replace it</small></p>
                  
                </div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="biography" className='text-xs font-medium'>Biography</label>
              <div className='relative'>
                <textarea id="biography" name="biography" 
                defaultValue = {author?.biography} maxLength={1000} rows={20} cols={50} required 
                placeholder="Enter Author's biography of 1000 characters " 
                className='w-full h-20 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                </textarea>
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


