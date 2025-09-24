'use client';
import { addVote } from "@/app/lib/actions";
import { QuestionData } from "@/app/lib/definitions";
import { useActionState } from "react";

export default function Questions({latestQuestion}:{latestQuestion: QuestionData}) {
  const initialState = { message: null };
  const [state, formAction] = useActionState(addVote, initialState);
   
  return (
    <aside className='bg-white p-5 rounded'>
      <form action={formAction} className="w-[86%]">
        {/*<input type="hidden" name="action_type" value={submitText} />*/}
        <div className='rounded-lg '>
          <h1 className='text-2xl font-bold'>Questions</h1>
          <div className='space-y-3'>
            <input type="hidden" name="id" value={latestQuestion.id} />
            <p className='pt-2 text-[16px] font-bold w-full'>{latestQuestion.qdetail}</p>
            <div className="flex flex-row gap-2 items-center">
              <input id="option1" type="radio" name='option' required value={latestQuestion.option1}
                className='h-5 border border-gray-500 px-1 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              <label htmlFor="option1" className='text-xs font-medium'>{latestQuestion.option1}</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input id="option2" type="radio" name='option' required value={latestQuestion.option2}
                className='h-5 border border-gray-500 px-1 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              <label htmlFor="option2" className='text-xs font-medium'>{latestQuestion.option2}</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input id="option3" type="radio" name='option' required value={latestQuestion.option3}
                className='h-5 border border-gray-500 px-1 py-1 
                rounded-md placeholder:text-gray-500 text-sm' />
              <label htmlFor="option3" className='text-xs font-medium'>{latestQuestion.option3}</label>
            </div>             
                                          
            <div className="w-full flex flex-rwo justify-center items-center">
              <button type="submit"  
              className="mt-2 w-39 h-10 rounded-xl px-2 py-2 cursor-pointer bg-[#06A35A] hover:bg-[#00A739] hover:border-[#00A739] hover:text-white text-black text-center"
              >
                Submit Answer
              </button>

            </div>
              {state?.message && (
                <p className="text-[#06A35A] text-[14px] font-semibold text-center ">{state.message}</p>
              )}  
          </div>
        </div>
    </form>         
    </aside>   
  )
}
