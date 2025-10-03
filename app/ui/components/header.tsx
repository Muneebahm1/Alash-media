'use client';
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic'
import Search from "./search";
import MobileMenu from "./mobile-menu";

const DynamicLocaleSwitcher = dynamic(
  () => import('@/app/ui/components/localeswitcher'), // Adjust path as necessary
  {
    ssr: false, // Prevents server-side rendering of this component
    loading: () => <div className="w-24 h-11 border border-gray-400 rounded-lg animate-pulse"></div>, // Optional loading placeholder
  }
);


const Header = () => {
  const t = useTranslations('Header');
  return (
    <header className='mx-auto h-24 flex flex-row gap-2 items-center justify-between px-4 md:px-20 bg-white'>
        <div className="flex flex-row items-center gap-3">
          <Link href="/">
            <div className="flex flex-row items-center">
              <Image src='/logo.png' alt="Alashmedia Logo" width={36} height={36} />
              <h1 className="pl-2 text-2xl font-bold">{t('logo')}</h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <div className="hidden md:block">
            <Search />
          </div>
          {/* Hide language switcher on mobile; shown on desktop */}
          <header className="hidden md:block">
            <DynamicLocaleSwitcher />
          </header>
          {/* Hide Login on mobile; shown on desktop (Login will appear in mobile menu) */}
          <a href="/login" className="hidden md:block text-gray-800 hover:text-[#00A759]">
            <div className="relative inline-block group">    
              <p className='text-gray-800 hover:text-[#00A759]'>Log In</p>
              <div className="absolute bottom-[-4] left-0 h-1 w-full bg-transparent overflow-hidden">
                <div className="h-full bg-[#D82825] w-0 group-hover:w-full transition-width duration-500 ease-out"></div>
              </div>
            </div>
          </a>
          {/* Mobile hamburger menu on the right */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>   
  )
}

export default Header