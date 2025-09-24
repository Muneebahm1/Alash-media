'use client';
import React from 'react'
import { Link } from '@/i18n/navigation';
import { PiWhatsappLogo, PiInstagramLogo,PiTwitterLogo,PiTelegramLogo } from "react-icons/pi";
import { BiLogoVk } from "react-icons/bi";
import { useTranslations } from 'next-intl';
import { useState,useEffect } from 'react';
import { getWeather } from '@/app/lib/actions';
import type { WeatherData } from '@/app/lib/definitions';

const NavLinks = [
        {
            id: 1,
            name: 'Informational',
            href: '/Informational',
            
        },
        {
            id: 2,
            name: 'Educational',
            href: '/Educational',
        },
        {
            id: 3,
            name: 'Biography',
            href: '/Biography',
        },
        {
            id: 4,
            name: 'Alash',
            href: 'Alash',
        },
        {
            id: 5,
            name: 'Media',
            href: '/Media',
        },
        {
            id: 6,
            name: 'Special Project',
            href: '/specialproject',
        },
        
  ];

  
const Subheader = () => {
  const [selectedCity, setSelectedCity] = useState("Almaty");
  const [weatherData,setWeatherData] = useState<WeatherData | null>(null);
  
  useEffect(() => {
    const fetchDefault = async () => {
      const result = await getWeather(selectedCity);
      if (result.success) {
        setWeatherData(result.data || null);
      }
    };
    fetchDefault();
  }, [selectedCity]);

  const handleChangeCity = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);

    if (city) {
      const result = await getWeather(selectedCity);
      if (result.success) {
        setWeatherData(result.data || null);
      }
    }
    
        
  } 
    
  const t = useTranslations('NavItems');  
    

  return (
    <header className='hidden md:block'>
        <div className='flex flex-col md:flex-row px-20 h-20 bg-white items-center justify-between'>
            <nav className='flex flex-col md:flex-row gap-7  items-center '>
            {
                NavLinks.map((link)=> {
                    return(
                        <Link 
                        key={link.id}
                        //href={link.href}
                        /*href={`/category/?category_name=${link.name}`}*/
                        href={link.name === 'Special Project' ? `/specialproject/?category_name=${link.name}` : `/category/?category_name=${link.name}`}
                        
                        //onClick={handleClickCategory}
                        >
                        <div className="relative inline-block group">    
                        <p className='text-gray-800 hover:text-[#068509]'>{t(link.name)}</p>
                        <div className="absolute bottom-[-4] left-0 h-1 w-full bg-transparent overflow-hidden">
                            <div className="h-full bg-[#D82825] w-0 group-hover:w-full transition-width duration-500 ease-out"></div>
                        </div>
                        </div>
                        </Link>
                        
                    )
                })
            }
            </nav>
                                  
            <div className='flex flex-row gap-2 items-center '>
              <div className='flex flex-row items-center border pr-4 border-l-gray-50 border-t-gray-50 border-b-gray-50 border-r-gray-400'>
                <select onChange={handleChangeCity} id="temp" name="temp" 
                 value = {selectedCity} required 
                className='w-full h-8  px-1 pl-2 py-1 
                rounded-md placeholder:text-gray-500 text-sm'
                >
                  <option value="Almaty">Almaty</option>
                  <option value="Astana">Astana</option>
                  <option value="Shymkent">Shymkent</option>
                  <option value="Karaganda">Karaganda</option>
                  <option value="Turkistan">Turkistan</option>
                  <option value="Moscow">Moscow</option>
                  <option value="Novosibirsk">Novosibirsk</option>
                  <option value="Kazan">Kazan</option>
                  <option value="Samara">Samara</option>
                </select>
                <p className='p-2'>{weatherData?.temperature}&deg;C</p>
              </div>
              <div>
              <div>
                
              </div>
            </div>
              <div className='flex flex-row gap-2'>
                <Link href={'https://www.whatsapp.com/'}>
                    <div className='p-2 rounded-full border border-gray-300'> <PiWhatsappLogo size={32} /> </div>
                </Link>
                <Link href={'https://www.instagram.com/'}>
                    <div className='p-2 rounded-full border border-gray-300'> <PiInstagramLogo size={32} /> </div>
                </Link>
                <Link href={'https://twitter.com/'}>
                    <div className='p-2 rounded-full border border-gray-300'> <PiTwitterLogo size={32} /> </div>
                </Link>
                <Link href={'https://telegram.me/'}>
                    <div className='p-2 rounded-full border border-gray-300'> <PiTelegramLogo size={32} /> </div>
                </Link>
                <Link href={'https://vk.com/'}>
                    <div className='p-2 rounded-full border border-gray-300'> <BiLogoVk size={32} /> </div>
                </Link>
              </div>    
            
            </div>        
        </div>
        
        
    </header>
  )
}

export default Subheader