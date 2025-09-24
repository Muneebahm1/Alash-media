import Image from "next/image"
export default async function HorizontalAdd() {
  
  return (
    <section className='mx-auto px-4 pt-0.5 pb-0.5 '>
      <div className="md:mx-[120px] relative bg-white p-5 rounded">
        <Image src={'/images/banners/1.jpg'} alt="Main News" width={366} height={160} 
        className='w-full h-40 object-conver' />
        <div className='absolute bottom-[32%] left-[42%] z-10'>
          <h1 className='text-xl font-bold p-5'>adds pictures</h1>
        </div>
      </div>       
    </section>   
  )
}
