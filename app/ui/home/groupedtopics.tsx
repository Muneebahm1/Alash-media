import { fetchAllTopics } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function GroupedTopics() {
    const allTopics = await fetchAllTopics();
    
    // Assuming you have these interfaces defined in types.ts or similar
       
    /*interface GroupedNames {
        [key: string]: string[];
    }*/
    
    interface Topic {
        name: string;
        image_path: string;
    }

    const namesAlphabetically =  ()=> {
           
      const groupedData:{ [key: string]: Topic[] } = {
            A: [],B: [],C: [],D: [],E: [],F: [],G: [],H: [],I: [],J: [],K: [],L: [],M: [],N: [],
            O: [],P: [],Q: [],R: [],S: [],T: [],U: [],V: [],W: [],X: [],Y: [],Z: [],
        }
        
        const sortedData = [...allTopics.rows].sort((a, b) => a.name.localeCompare(b.name));
        /*************************************************/
        // Find the correct group for the current item
      
        /**************** */        
        sortedData.forEach(row => {
          const firstLetter = row.name[0].toUpperCase();  
          if (groupedData[firstLetter as keyof typeof groupedData]) {
            groupedData[firstLetter as keyof typeof groupedData].push({ name: row.name, image_path: row.image_path});
          }
        });
                
        return groupedData;

    }
        
    const groupedData = namesAlphabetically();
    
    return(
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-1">
  {Object.entries(groupedData).map(([letter, tag]) => (
    <div key={letter}>
      <h3 className="pb-2 font-bold">{letter}</h3>
      <hr className="h-1 bg-gray-100 border-none mb-5"/>
      {tag.map((topic, i) => (
        <div key={i} className="flex flex-row gap-1 space-y-5" >
          <Link href={`/trends?tagname=${topic.name}`}>
            <div className="flex flex-row gap-1 space-y-5">
              <p className="text-[#068509]">#</p>
              <Image src={topic.image_path} alt="Image" 
              width={28} height={28}/>
              <p>{topic.name}</p>
            </div>
          </Link>
        </div>
                   
      ))}
    </div>
  ))}
  
</div>
    );
  
}