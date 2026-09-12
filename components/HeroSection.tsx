"use client";

import { HiArrowUpRight } from "react-icons/hi2";
import { IoPlayOutline, IoLogoWhatsapp } from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "./constants";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function HeroSection() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="gameplay" data-section="gameplay" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-stretch px-[21px]">
          {/* Left Column */}
          <div className="flex flex-col lg:w-[50%]">
            <div className="flex-1 pt-12 pb-16 pr-0 sm:pt-16 sm:pb-24 lg:pt-[120px] lg:pb-[130px] lg:pr-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-6 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#142d55] dark:text-[#8ab4f8]">
                  INTERACTIVE PROLOGUE ON WHATSAPP • LIVE NOW
                </span>
              </div>
              <h1 className="text-[2.2rem] sm:text-[2.7rem] lg:text-[3rem] leading-[1.08] font-medium text-black dark:text-white tracking-[-0.02em] transition-colors">
                星海の白雪と蒼穹の聖域
                <span className="block text-[1.3rem] sm:text-[1.5rem] lg:text-[1.7rem] text-[#142d55] dark:text-[#E5BA68] font-serif italic font-normal mt-2.5 transition-colors">
                  The Celestial Snow & Elyrith
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-8 sm:mt-11 font-mono tracking-tight">
                <a
                  href={WHATSAPP_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#203f6f] dark:hover:bg-[#284e88] text-white text-[11px] font-semibold uppercase rounded-full transition-all shadow-md group"
                >
                  <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
                  <span>{t.ctaWhatsapp}</span>
                  <HiArrowUpRight size={14} />
                </a>
                <a
                  href="#world"
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-black hover:text-[#142d55] dark:text-gray-200 dark:hover:text-[#a0c2f9] transition-colors"
                >
                  {t.ctaLore}
                  <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full border-[1.5px] border-current bg-[#142d55] dark:bg-[#203f6f]">
                    <IoPlayOutline size={9} className="text-white fill-current ml-0.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom Left Grid Row */}
            <div className="border-t border-[#e7e3df] dark:border-[#1a2840] min-h-[110px] flex flex-col justify-center py-6 pr-0 lg:pr-14 transition-colors">
              <p className="text-[14px] sm:text-[15px] leading-[1.6] text-gray-700 dark:text-gray-300 transition-colors">
                {t.desc}
              </p>
            </div>
          </div>

          {/* Right Column with Vertical Divider Line */}
          <div className="flex flex-col border-[#e7e3df] dark:border-[#1a2840] lg:w-[50%] lg:border-l transition-colors">
            <div className="relative flex-1 flex items-center justify-center overflow-hidden py-10 sm:py-14 lg:py-8 px-4 sm:px-8 bg-gradient-to-b from-[#fbf9f6] to-white dark:from-[#0b121e] dark:to-[#070b12] transition-colors">
              {/* Subtle background glow effect */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e3efff] dark:from-[#162947]/40 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="relative z-10 max-w-[580px] p-2 sm:p-4 text-center">
                <img
                  src="/shirayukino.png"
                  alt="ShirayukinoComp Studio Logo"
                  className="w-full h-auto object-contain drop-shadow-[0_12px_35px_rgba(20,45,85,0.18)] dark:hidden transition-transform duration-500 hover:scale-[1.02]"
                />
                <img
                  src="/shirayukino-dark.png"
                  alt="ShirayukinoComp Studio Logo"
                  className="w-full h-auto object-contain hidden dark:block drop-shadow-[0_12px_45px_rgba(229,186,104,0.3)] transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-mono text-[#62728a] dark:text-[#8c9eb8] tracking-wider uppercase transition-colors">
                  {t.tags.map((tag, idx) => (
                    <span key={tag}>
                      {idx > 0 && <span className="mr-2">•</span>}
                      {idx === 0 ? `✦ ${tag}` : tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Right Grid Row */}
            <div className="border-t border-[#e7e3df] dark:border-[#1a2840] min-h-[110px] flex flex-col justify-center py-6 pl-0 lg:pl-8 transition-colors">
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 dark:text-gray-400 font-normal leading-snug mb-1.5 transition-colors">
                    {t.currentVersionLabel}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[1.25rem] font-medium font-mono text-black dark:text-white tracking-tight transition-colors">
                    {t.currentVersionVal}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 dark:text-gray-400 font-normal leading-snug mb-1.5 transition-colors">
                    {t.originalScoreLabel}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[1.25rem] font-medium font-mono text-black dark:text-white tracking-tight transition-colors">
                    {t.originalScoreVal}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] sm:text-[13px] text-gray-500 dark:text-gray-400 font-normal leading-snug mb-1.5 transition-colors">
                    {t.fullGameTargetLabel}
                  </p>
                  <p className="text-base sm:text-lg lg:text-[1.25rem] font-medium font-mono text-black dark:text-white tracking-tight transition-colors">
                    {t.fullGameTargetVal}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
