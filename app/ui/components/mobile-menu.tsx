"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { NavLinks } from "./subheader";
import Search from "./search";
import { getWeather } from "@/app/lib/actions";
import type { WeatherData } from "@/app/lib/definitions";

const DynamicLocaleSwitcher = dynamic(
  () => import("@/app/ui/components/localeswitcher"),
  { ssr: false }
);

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("NavItems");
  const [selectedCity, setSelectedCity] = useState("Almaty");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const loadWeather = async () => {
      const result = await getWeather(selectedCity);
      if (result.success) setWeatherData(result.data || null);
    };
    loadWeather();
  }, [selectedCity]);

  return (
    <div className="md:hidden">
      <button
        aria-label="Open menu"
        className="p-2 rounded border border-gray-300"
        onClick={() => setOpen(true)}
      >
        {/* Hamburger icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6H21" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 12H21" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
          <path d="M3 18H21" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-[#0F5813] to-[#00A759] text-white">
          <div className="flex items-center justify-between p-4 border-b border-white/20">
            <span className="text-lg font-semibold">Menu</span>
            <button
              aria-label="Close menu"
              className="p-2 rounded border border-white/30"
              onClick={() => setOpen(false)}
            >
              {/* X icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                <path d="M18 6L6 18" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* Language small dropdown */}
            <div>
              <label className="block text-sm mb-1 opacity-90">Language</label>
              <div className="bg-white rounded p-2 text-black inline-block">
                <DynamicLocaleSwitcher />
              </div>
            </div>

            {/* Category links styled as rows with chevrons and dividers */}
            <nav className="divide-y divide-white/15 rounded-md overflow-hidden bg-white/0">
              {NavLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.name === 'Special Project' ? `/specialproject/?category_name=${link.name}` : `/category/?category_name=${link.name}`}
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center justify-between py-3 px-2 text-white hover:bg-white/5">
                    <span>{t(link.name)}</span>
                    {/* Chevron right */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                      <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Weather selector (compact) */}
            <div className="bg-white/10 rounded p-3">
              <div className="flex items-center justify-between">
                <label className="text-sm">{selectedCity}: {weatherData?.temperature}\u00B0C</label>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="mt-2 w-full bg-transparent text-white rounded p-2 border border-white/40"
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
            </div>

            {/* Search row - leverage existing Search component with menu styling */}
            <div className="rounded p-2 text-white">
              <Search variant="menu" />
            </div>

            {/* Login link styled as row */}
            <div>
              <Link href="/login" onClick={() => setOpen(false)}>
                <div className="flex items-center justify-between py-3 px-2 text-white border-t border-white/15">
                  <span>Log In</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                    <path d="M9 18L15 12L9 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
