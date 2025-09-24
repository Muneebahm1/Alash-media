import { MdOutlineArticle } from "react-icons/md";

export const Card = ({title,value}:{title: string;value:number})=> {
  return (
    <div className='bg-gradient-to-b from-[#0F5813] to-[#00A759] rounded-xl p-2 lg:py-4 shadow-sm'>
      <div className="flex gap-1 lg:p-4 items-center justify-center mb-2">
        <MdOutlineArticle className="h-5 md:h-5 w-5 md:w-5 text-white" />
        <p className="text-sm lg:text-xl font-semibold lg:font-bold text-white">{title}</p>
      </div>
      <div className="px-5 lg:px-12">
        <p className='bg-white px-1 py-2 lg:px-2 lg:py-5 rounded-full text-center text-3xl font-bold'>{value}</p>
      </div>
      
    </div>
  )
}
