import { fetchSearchTags} from "@/app/lib/data"
import clsx from "clsx";
import ModelDialog from "../../components/modeldialog";
import TaiPath from "../taipath";
import Update from "@/app/ui/dashboard/update";
import Delete from "@/app/ui/dashboard/delete";

type TagProps = {
  tabquery?: string;
  tabcurrentPage?: number;
  pathName?: string;
   
};
export default async function TableTag({ tabquery, tabcurrentPage,pathName}: TagProps) {
    const tagData = await fetchSearchTags(tabquery || '',tabcurrentPage || 1);
    const skipFields = ['id'];
            
    //console.log(`tabletag path: ${pathName}`)
    return (
    tagData.rowCount === 0 ? (
        <ModelDialog />    
    ): 
    (
    <div className="bg-white">
        <TaiPath />
        <table className="table-auto w-full text-[50%] md:text-sm">
            <thead className="bg-gradient-to-b from-indigo-900 to-blue-400 text-white">
                <tr>
                    {
                    tagData.fields.filter(field=> !skipFields.includes(field.name)).map((field)=> ( 
                    <th className="px-3 py-2.5 text-left md:text-[65%] lg:text-sm" key={field.name}>{field.name.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>     
            <tbody>
                {
                tagData.rows.map((data)=> (
                <tr className="border-b-2 border-gray-300 md:text-[75%] lg:text-sm" key={data.id}>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/tags') && tabquery?.toString() != '' &&
                            typeof data['name'] === 'string' && data['name'].includes(tabquery?.toString() || '')})}>
                            {data.name}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/tags') && tabquery?.toString() != '' &&
                            typeof data['image_path'] === 'string' && data['image_path'].includes(tabquery?.toString() || '')})}>
                            {data.image_path}
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

