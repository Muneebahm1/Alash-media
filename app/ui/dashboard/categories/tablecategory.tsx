import { fetchSearchCategories} from "@/app/lib/data"
import clsx from "clsx";
import ModelDialog from "../../components/modeldialog";
import TaiPath from "../taipath";
import Update from "@/app/ui/dashboard/update";
import Delete from "@/app/ui/dashboard/delete";

type CategoryProps = {
  tabquery?: string;
  tabcurrentPage?: number;
  pathName?: string;
   
};
export default async function TableCategory({ tabquery, tabcurrentPage,pathName}: CategoryProps) {
    const categoryData = await fetchSearchCategories(tabquery || '',tabcurrentPage || 1);
    const skipFields = ['category_id'];        
    //console.log(latestArticles);
    return (
    categoryData.rowCount === 0 ? (
        <ModelDialog />    
    ): 
    (
    <div className="bg-white">
        <TaiPath />
        <table className="table-auto w-full text-[50%] md:text-sm">
            <thead className="bg-gradient-to-b from-indigo-900 to-blue-400 text-white">
                <tr>
                    {
                    categoryData.fields.filter(field=> !skipFields.includes(field.name)).map((field)=> ( 
                    <th className="px-3 py-2.5 text-left md:text-[65%] lg:text-sm" key={field.name}>{field.name.toUpperCase()}</th>
                    ))                
                   }
                </tr>
            </thead>
            <tbody>
                {
                categoryData.rows.map((data)=> (
                <tr className="border-b-2 border-gray-300 md:text-[75%] lg:text-sm" key={data.id}>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/categories') && tabquery?.toString() != '' &&
                            typeof data['category_name'] === 'string' && data['category_name'].includes(tabquery?.toString() || '')})}>
                            {data.category_name}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/categories') && tabquery?.toString() != '' &&
                            typeof data['subcategory_name'] === 'string' && data['subcategory_name'].includes(tabquery?.toString() || '')})}>
                            {data.subcategory_name}
                        </span>
                    </td>
                    <td className="py-5 flex justify-end gap-2 px-6 text-sm">
                        <Update id={data.category_id} pathName = {pathName} />
                        <Delete id={data.category_id} pathName = {pathName} />
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

