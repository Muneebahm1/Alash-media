import { Suspense } from "react"
import QuestionForm from "@/app/ui/dashboard/questions/questionform"
import { fetchQuestionById } from "@/app/lib/data";
import { QuestionData } from "@/app/lib/definitions";

const page = async (props: {params: Promise<{id: string}>}) => {
  const params = await props.params;
    
  const question = await fetchQuestionById(params.id);

  const questionData: QuestionData = {
    id: question.rows[0].id,
    qdetail: question.rows[0].qdetail,
    option1: question.rows[0].option1,
    option2: question.rows[0].option2,
    option3: question.rows[0].option3,
    correct: question.rows[0].correct,
  };

  console.log(`question in edit: ${question.rows[0].qdetail}`)
  return (
    <div className='w-full md:w-[75%] md:h-[86%] mx-auto '>
        <h1 className='pt-4 text-2xl font-bold text-center'>Update Question</h1>
        <div className='w-full flex items-center justify-center'>
          <Suspense fallback={<div>Loading...</div>}>
            <QuestionForm question = {questionData} submitText = {'Update'} />
          </Suspense>
        </div>
    </div>
  )
}

export default page