import Image from 'next/image';
import { fetchHighlights } from '@/app/lib/data';
import Link from 'next/link';
//import { fetchSubCategories } from '@/app/lib/actions';

export default async function Highlights({langu}:{langu: string}) {
  const highlights = await fetchHighlights(langu); 
  //const subcategories = await fetchSubCategories('4ff7db1a-30a5-4b45-a051-73130aacbf02');
  return (
    <section className='mx-auto px-4 pt-0.5 pb-0.5'>
     <div className='md:mx-[120px] bg-white p-5'>
      {/*
        subcategories.map((subcategory)=> (
          <div key={subcategory.subcategory_id} >
            {subcategory.subcategory_name}
          </div>
        ))
      */}
      <div className='flex flex-col md:flex-row gap-5 justify-evenly'>
        {
          highlights.rows.map((high)=>(
          <Link key={high.id} href={`/newsdetail/${high.slug}`}>
            <div className="flex flex-row gap-1 items-center">
              <Image src={high.image_url} alt="Highlights" width={96} height={96}
                className="w-24 h-24 rounded-full object-cover border-[3px] border-[#039855] shrink-0"/>
                <p className="text-sm font-semibold">{high.title}</p>
            </div>
          </Link>
          ))
        }
      </div>
     </div>
    </section>
  );
}


