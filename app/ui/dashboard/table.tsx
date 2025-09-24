import { fetchLatestArticles,fetchSearchArticles} from "@/app/lib/data"
import TaiPath from "@/app/ui/dashboard/taipath";
import clsx from "clsx";
import Update from "@/app/ui/dashboard/update";
import Delete from "@/app/ui/dashboard/delete";

type TableProps = {
  tabquery?: string;
  tabcurrentPage?: number;
  pathName?: string;
};
export default async function Table({ tabquery, tabcurrentPage,pathName }: TableProps) {
        let newsData = await fetchLatestArticles();
        let skipFields = ['news.id'];
        let cname1:string= '',cname2:string='',cname3:string='',cname4:string='',cname5:string='';
        switch(pathName) {
        case '/dashboard':
            newsData = await fetchLatestArticles();
            skipFields = ['id'];
            cname1='author_name';
            cname2='title';
            cname3='section';
            cname4='image_url';
            cname5='date_time';
            break;
        case '/dashboard/news': 
            newsData = await fetchSearchArticles(tabquery || '',tabcurrentPage || 1);
            skipFields = ['id'];
            cname1='author_name';
            cname2='title';
            cname3='section';
            cname4='image_url';
            cname5='date_time';
            break;
    } 
    //console.log(latestArticles);
    if (!newsData || Number(newsData.rowCount) === 0) {
    return (
      <div className=" mt-14 flex flex-row items-center justify-center">
        <div>
          <h2 className='text-3xl font-bold'>No results found for &quot;{tabquery}&quot;</h2>
        </div>
      </div>

    );
    }
    return (
        
        <div className="bg-white">
            <TaiPath />
            <table className="table-auto w-full text-[50%] md:text-sm">
            <thead className="bg-gradient-to-b from-indigo-900 to-blue-400 text-white">
                <tr>
                    {
                    newsData.fields.filter(field=> !skipFields.includes(field.name)).map((field)=> ( 
                    <th className="px-3 py-2.5 text-left md:text-[65%] lg:text-sm" key={field.name}>{field.name.toUpperCase()}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                newsData.rows.map((data)=> (
                //console.log('Debuggin issues'),
                //console.log(data[cname1]),
                <tr className="border-b-2 border-gray-300 md:text-[75%] lg:text-sm" key={data.id}>
                    <td className='px-3 py-5 text-left whitespace-normal break-all text-gray-900'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/news') && tabquery?.toString() != '' &&
                            typeof data[cname1] === 'string' && data[cname1].includes(tabquery?.toString() || '')})}>
                            {data[cname1]}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/news') && tabquery?.toString() != '' &&
                            typeof data[cname2] === 'string' && data[cname2].includes(tabquery?.toString() || '')})}>
                            {data[cname2]}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/news') && tabquery?.toString() != '' &&
                            typeof data[cname3] === 'string' && data[cname3].includes(tabquery?.toString() || '')})}>
                            {data[cname3]}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/news') && tabquery?.toString() != '' &&
                            typeof data[cname4] === 'string' && data[cname4].includes(tabquery?.toString() || '')})}>
                            {data[cname4]}
                        </span>
                    </td>
                    <td className='px-3 py-5 text-left whitespace-normal break-all'>
                        <span className={clsx({'bg-[#00A759] text-white p-1': pathName?.includes('/dashboard/news') && tabquery?.toString() != '' &&
                            typeof data[cname5] === 'string' && data[cname5].includes(tabquery?.toString() || '')})}>
                            {data[cname5]}
                        </span>
                    </td>
                    {pathName === '/dashboard/news' && (
                    <td className="py-5 flex justify-end gap-2 px-6 text-sm">
                        <Update id={data.id} pathName={pathName} />
                        <Delete id={data.id} pathName={pathName} />
                    </td>    
                    )}     
                                
                </tr> 
                ))
                }
            </tbody>
            </table>    
        </div>
        
    
  )
}

