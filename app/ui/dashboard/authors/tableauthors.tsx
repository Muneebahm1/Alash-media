import { fetchSearchAuthors} from "@/app/lib/data"
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
export default async function TableAuthors({ tabquery, tabcurrentPage,pathName}: AuthorProps) {
    const authorData = await fetchSearchAuthors(tabquery || '',tabcurrentPage || 1);
    const skipFields = ['id'];
        
    //console.log(latestArticles);
    return (
    authorData.rowCount === 0 ? (
        <ModelDialog />    
    ): 
    (
    <div className="bg-white">
        <TaiPath />
        <table className="table-auto w-full text-[50%] md:text-sm">
            <thead className="bg-gradient-to-b from-indigo-900 to-blue-400 text-white">
                <tr>
                    {
                    authorData.fields.filter(field=> !skipFields.includes(field.name)).map((field)=> ( 
                    <th className="px-3 py-2.5 text-left md:text-[65%] lg:text-sm" key={field.name}>{field.name.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                authorData.rows.map((data)=> (
                <tr className="border-b-2 border-gray-300 md:text-[75%] lg:text-sm" key={data.id}>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/authors') && tabquery?.toString() != '' &&
                            typeof data['name'] === 'string' && data['name'].includes(tabquery?.toString() || '')})}>
                            {data.name}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/authors') && tabquery?.toString() != '' &&
                            typeof data['email'] === 'string' && data['email'].includes(tabquery?.toString() || '')})}>
                            {data.email}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/authors') && tabquery?.toString() != '' &&
                            typeof data['image_url'] === 'string' && data['image_url'].includes(tabquery?.toString() || '')})}>
                            {data.image_url}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/authors') && tabquery?.toString() != '' &&
                            typeof data['biography'] === 'string' && data['biography'].includes(tabquery?.toString() || '')})}>
                            {data.biography}
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

