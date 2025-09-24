import Image from "next/image"
export default async function VerticalAdd() {
  
  return (
    <aside className='bg-white p-5 rounded'>
      <div className="w-full relative">
        <Image src={'/images/banners/1.jpg'} alt="Main News" width={366} height={160} 
        className='w-full h-40 object-conver' />
        <div className='absolute bottom-[30%] left-[18%] z-10'>
          <h1 className='text-xl font-bold p-5'>adds pictures</h1>
        </div>
      </div>       
    </aside>   
  )
}
