'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface ViewAllToggleProps {
    trendingTopics: React.ReactNode; // Pre-rendered HTML for trendingTopics
    otherComponents: React.ReactNode[]; // Pre-rendered HTML for Other Components like Highlights
    allTopics: React.ReactNode; // Pre-rendered HTML for All Topics
}

const ViewAllToggle = ({trendingTopics,otherComponents,allTopics}:ViewAllToggleProps) => {
    const [isViewAllClicked,setIsViewAllClicked] = useState(false);
    const handleGoBackClick = () => {
        setIsViewAllClicked(false);
    };
    return (
    <div>
        {
            isViewAllClicked ? (
                <>{allTopics}
                  <div className='flex justify-end mx-[120px]'>
                    <button onClick={handleGoBackClick} className='cursor-pointer justify-end p-2 font-bold hover:text-[#068509]'>View Current</button>  
                  </div>
                  
                </>
                
            ):
            (
                <>
                    <section className='mx-auto md:mx-[120px] px-4 pt-2 pb-0.5'>
                        <div className='bg-white p-5'>
                            <div className='flex flex-row justify-between mx-auto'>
                                <p className='pb-5 font-bold'>Current Topics</p>
                                <Link href="/" onClick={(e)=> {e.preventDefault(); setIsViewAllClicked(true)}}>
                                    <div className='flex flex-row gap-1 items-center'>
                                        <p className='text-[#068509] font-bold'>View All</p>
                                        <MdKeyboardArrowRight color='#00A759' size={24}/>
                                    </div>
                                </Link>
                            </div>
                            {trendingTopics}
                        </div>
                    </section>
                    {otherComponents}
                </>
                
            )
        }
    </div>
  )
}

export default ViewAllToggle;
