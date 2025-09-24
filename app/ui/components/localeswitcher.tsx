'use client';
import Image from "next/image"
import {usePathname,useRouter} from '@/i18n/navigation';
import { useLocale } from "next-intl";

const LocaleSwitcher = () => {
    const currentLocale = useLocale();
      const pathName = usePathname();
      const router = useRouter();
      
      const localeHandler = (newLocale: string)=> {
        router.push(pathName,{locale:newLocale});
    }
    return (
    <div>
        <div className="w-36 flex flex-row gap-2 items-center justify-between h-11 border border-gray-400 rounded-lg px-2 ">
            <button onClick={()=> localeHandler('en')}
                disabled={currentLocale === 'en'}
                className="cursor-pointer"
            >
                <div className='p-0.5 rounded-full bg-[#01A9BB] cursor-pointer w-7 h-7 text-white'> EN </div>
            </button>
            <p className="text-gray-400">/</p>
            <button onClick={()=> localeHandler('ru')}
                disabled={currentLocale === 'ru'}
                className="cursor-pointer"
            >
                <Image src='/ru.png' alt="Logo" width={28} height={28} className="w-7 h-7" />
            </button>
            <p className="text-gray-400">/</p>
            <button onClick={()=> localeHandler('kk')}
                disabled={currentLocale === 'kk'}
                className="cursor-pointer"
            >
                <Image src='/kz.png' alt="Logo" width={28} height={28} className="w-7 h-7" />
            </button>
        </div>
    </div>
  )
}

export default LocaleSwitcher