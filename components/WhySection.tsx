"use client";

import { IoCheckmarkOutline } from "react-icons/io5";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function WhySection() {
  const { lang } = useLanguage();
  const t = translations[lang].why;

  return (
    <section id="world" data-section="world" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-6">
            <div className="pb-10 sm:pb-12 border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
                {t.tag}
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-black dark:text-white max-w-[480px] transition-colors">
                {t.title}
              </h2>
            </div>
            <ul className="flex flex-col">
              {t.items.map((item, index) => (
                <li
                  key={item.title}
                  className={`flex gap-4 py-6 sm:py-7 ${
                    index < t.items.length - 1 ? "border-b border-[#e7e3df] dark:border-[#1a2840]" : ""
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#142d55] bg-[#edf3fc] dark:border-[#E5BA68] dark:bg-[#111e32] transition-colors">
                      <IoCheckmarkOutline size={13} className="text-[#142d55] dark:text-[#E5BA68] stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-black dark:text-white leading-snug transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.55] text-gray-600 dark:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column with Visual Art */}
          <div className="lg:w-1/2">
            <div className="group relative overflow-hidden rounded-[1.5rem] min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] flex flex-col justify-between p-4 sm:p-7 lg:p-9 border border-[#2b4c80] dark:border-[#1e3b68] shadow-md dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all">
              {/* Background Key Visual Artwork */}
              <img
                src="/celestial_whale.jpg"
                alt="星海の白雪と蒼穹の聖域 - Celestial Whale & Sky Sanctuary"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Multi-layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c17]/95 via-[#060c17]/35 to-black/20 pointer-events-none" />

              {/* Floating Top Badge (Compact & Responsive) */}
              <div className="z-10 self-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.14em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5BA68] animate-pulse" />
                  <span className="sm:hidden">KEY VISUAL</span>
                  <span className="hidden sm:inline">KEY VISUAL • CELESTIAL SEA</span>
                </span>
              </div>

              {/* Bottom Content Card with Glassmorphism */}
              <div className="relative z-10 rounded-2xl bg-black/55 backdrop-blur-md p-4 sm:p-6 md:p-7 border border-white/15 text-white transition-colors">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#E5BA68]/20 border border-[#E5BA68]/50 flex items-center justify-center shrink-0">
                    <span className="text-xs text-[#E5BA68]">✦</span>
                  </div>
                  <h4 className="text-base sm:text-xl md:text-2xl font-serif italic text-white tracking-wide truncate">
                    星海の白雪と蒼穹の聖域
                  </h4>
                </div>

                <p className="text-[11px] sm:text-xs md:text-[13px] font-mono text-gray-200 leading-relaxed italic line-clamp-2 sm:line-clamp-none">
                  &ldquo;Beyond the clouds where whales drift in the celestial sea, an ancient sanctuary awaits the brave.&rdquo;
                </p>

                <div className="mt-3.5 sm:mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono">
                  <span className="text-[#E5BA68] font-semibold truncate">
                    Sanctuary &amp; Battle Demo
                  </span>
                  <span className="text-gray-300 shrink-0">
                    ShirayukinoComp Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
