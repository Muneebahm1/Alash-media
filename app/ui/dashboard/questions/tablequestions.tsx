import { fetchSearchQuestions} from "@/app/lib/data"
import clsx from "clsx";
import ModelDialog from "../../components/modeldialog";
import TaiPath from "../taipath";
import Update from "@/app/ui/dashboard/update";
import Delete from "@/app/ui/dashboard/delete";

type AuthorProps = {
  tabquery?: string;
  tabcurrentPage?: number;
  pathName?: string;
   
};
export default async function TableQuestions({ tabquery, tabcurrentPage,pathName}: AuthorProps) {
    const questionData = await fetchSearchQuestions(tabquery || '',tabcurrentPage || 1);
    const skipFields = ['id'];
        
    //console.log(latestArticles);
    return (
    questionData.rowCount === 0 ? (
        <ModelDialog />    
    ): 
    (
    <div className="bg-white">
        <TaiPath />
        <table className="table-auto w-full text-[50%] md:text-sm">
            <thead className="bg-gradient-to-b from-indigo-900 to-blue-400 text-white">
                <tr>
                    {
                    questionData.fields.filter(field=> !skipFields.includes(field.name)).map((field)=> ( 
                    <th className="px-3 py-2.5 text-left md:text-[65%] lg:text-sm" key={field.name}>{field.name.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                questionData.rows.map((data)=> (
                <tr className="border-b-2 border-gray-300 md:text-[75%] lg:text-sm" key={data.id}>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['qdetail'] === 'string' && data['qdetail'].includes(tabquery?.toString() || '')})}>
                            {data.qdetail}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['option1'] === 'string' && data['option1'].includes(tabquery?.toString() || '')})}>
                            {data.option1}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['option2'] === 'string' && data['option2'].includes(tabquery?.toString() || '')})}>
                            {data.option2}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['option3'] === 'string' && data['option3'].includes(tabquery?.toString() || '')})}>
                            {data.option3}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['correct'] === 'string' && data['correct'].includes(tabquery?.toString() || '')})}>
                            {data.correct}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['vote'] === 'string' && data['vote'].includes(tabquery?.toString() || '')})}>
                            {data.vote}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/questions') && tabquery?.toString() != '' &&
                            typeof data['date_time'] === 'string' && data['date_time'].includes(tabquery?.toString() || '')})}>
                            {data.date_time}
                        </span>
                    </td>
                    <td className="py-5 flex justify-end gap-2 px-6 text-sm">
                        <Update id={data.id} pathName = {pathName} />
                        <Delete id={data.id} pathName = {pathName} />
                    </td>
                </tr> 
                ))
                }
            </tbody>
        </table>
    </div>
    )
  )
}

