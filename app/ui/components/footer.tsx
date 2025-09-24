'use client';
import Link from 'next/link';
import Image from 'next/image';
import { PiWhatsappLogo, PiInstagramLogo,PiTwitterLogo,PiTelegramLogo } from "react-icons/pi";
import { BiLogoVk } from "react-icons/bi";
import { useTranslations } from 'next-intl';


const MainLinks = [
    {
        id: 1,
        name: 'Informational',
        href: '/informational',
        
    },
    {
        id: 2,
        name: 'Educational',
        href: '/educational',
    },
    {
        id: 3,
        name: 'Biography',
        href: '/Biography',
    },
    {
        id: 4,
        name: 'Alash',
        href: '/alash',
    },
    {
        id: 5,
        name: 'Media',
        href: '/media',
    },
    {
        id: 6,
        name: 'Special Project',
        href: '/specialproject',
    },
  ];


const Footer = () => {
  
  const t = useTranslations('Footer');
  return (
    <footer className='mx-auto mt-28 bg-gradient-to-r from-[#0F5813] to-[#00A759] pt-20 pb-5 px-5 text-white'>
        <div className='flex flex-col md:flex-row gap-32'>
            <div className='w-64'>
                <div className='flex flex-row gap-2'>
                    <Image src="/footer-logo.png" alt="Footer Logo" width={33} height={33} />
                    <h1 className='text-2xl font-bold'>Alash Media</h1>   
                </div>
                <p className='pt-4 opacity-75'>{t('FooterNote')}</p>
                <div className='pt-14 flex flex-row gap-2'>
                   <Link href={'https://www.whatsapp.com/'}>
                    <div className='p-2 rounded-full bg-[#27692B]'> <PiWhatsappLogo size={32} /> </div>
                   </Link>
                   <Link href={'https://www.instagram.com/'}>
                    <div className='p-2 rounded-full bg-[#27692B]'> <PiInstagramLogo size={32} /> </div>
                   </Link>
                   <Link href={'https://twitter.com/'}>
                    <div className='p-2 rounded-full bg-[#27692B]'> <PiTwitterLogo size={32} /> </div>
                   </Link>
                   <Link href={'https://telegram.me/'}>
                    <div className='p-2 rounded-full bg-[#27692B]'> <PiTelegramLogo size={32} /> </div>
                   </Link>
                   <Link href={'https://vk.com/'}>
                    <div className='p-2 rounded-full bg-[#27692B]'> <BiLogoVk size={32} /> </div>
                   </Link>
                   
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-[25%_30%_30%] gap-10'>
                <div className='space-y-4'>
                    <h2 className='font-bold'>Category</h2>
                    <div className='flex flex-col space-y-4 pb-4 opacity-75'>
                    {
                        MainLinks.map((link)=> {
                        return(
                            <Link key={link.id} href={link.href}>
                                <p>{t(`HeaderLinks.${link.name}`)}</p>
                            </Link>             
                        )
                    })
                    }
                    </div>
                </div>
                
                <div className='space-y-4'>
                    <h2 className='font-bold'>Contact</h2>
                    <p className='opacity-75'>{t('Contact.Email')}</p>
                    <p className='opacity-75'>{t('Contact.Phone')}</p>
                    <p className='opacity-75'>{t('Contact.Address')}</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='font-bold'>Legal Information</h2>
                    <p className='opacity-75'>{t('Legal-info.Policy')}</p>
                    <p className='opacity-75'>{t('Legal-info.Terms')}</p>
                </div>
            </div>
        </div>
        <p className='text-center text-white pt-24'>{t('Copyright')}</p>
    </footer>
  )
}

export default Footer