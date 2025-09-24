import { addQuestion } from "@/app/lib/actions";
import { QuestionData } from "@/app/lib/definitions";

export default function QuestionForm(
  { question, submitText }: {
  question?: QuestionData | null;
  submitText: string;
}
)

  { //  FC for Functional Component it takes children props automatically
  const boundQuestion = addQuestion.bind(null,question?.id || null,submitText);
  console.log(`Question: ${question?.qdetail}`);
  return (
    <form action={boundQuestion} className="w-[86%]">
        {/*<input type="hidden" name="action_type" value={submitText} />*/}
        <div className='px-2 py-3 lg:py-12 rounded-lg '>
          <h1 className='mb-2'>Please enter question&apos;s data</h1>
          <div className='space-y-3'>
            <div>
              <label htmlFor="qdetail" className='text-xs font-medium'>Question</label>
              <div className='relative'>
                <input id="qdetail" type="text" name='qdetail' 
                defaultValue = {question?.qdetail} maxLength={114} required
                placeholder="Enter Question" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="option1" className='text-xs font-medium'>Option 1</label>
              <div className='relative'>
                <input id="option1" type="text" name='option1' 
                defaultValue = {question?.option1} maxLength={48} required
                placeholder="Enter First Option" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="option2" className='text-xs font-medium'>Option 2</label>
              <div className='relative'>
                <input id="option2" type="text" name='option2' 
                defaultValue = {question?.option2} maxLength={48} required
                placeholder="Enter Second Option" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="option3" className='text-xs font-medium'>Option 3</label>
              <div className='relative'>
                <input id="option3" type="text" name='option3' 
                defaultValue = {question?.option3} maxLength={48} required
                placeholder="Enter Third Option" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="answer" className='text-xs font-medium'>Correct Answer</label>
              <div className='relative'>
                <input id="answer" type="text" name='answer' 
                defaultValue = {question?.correct} maxLength={48} required
                placeholder="Enter Correct Answer" 
                className='w-full h-10 border border-gray-500 px-1 pl-8 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
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


