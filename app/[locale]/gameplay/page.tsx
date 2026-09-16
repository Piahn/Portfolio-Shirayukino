"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoFlashOutline,
  IoCompassOutline,
  IoFlaskOutline,
  IoGitBranchOutline,
} from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { WHATSAPP_BOT_URL } from "@/components/constants";

const PILLAR_ICONS = [
  IoFlashOutline,
  IoGitBranchOutline,
  IoFlaskOutline,
  IoCompassOutline,
];

export default function GameplayOverviewPage() {
  const { lang } = useLanguage();
  const t = translations[lang].gameplayPage;

  return (
    <div className="w-full max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Top Header */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-14 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[1220px]">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-5 sm:mb-6"
          >
            <Link
              href={`/${lang}`}
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <IoArrowBackOutline size={13} />
              <span>{t.backHome}</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">
              {t.breadcrumbCurrent}
            </span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                {t.badge}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
              {t.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
              {t.desc}
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {t.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx] || IoFlashOutline;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] sm:rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] min-w-0 max-w-full overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] flex items-center justify-center text-xl text-[#142d55] dark:text-[#E5BA68] shadow-sm">
                        <Icon />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        {pillar.tag}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-3">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                      {pillar.description}
                    </p>

                    <div className="pt-4 border-t border-[#e2ddd7] dark:border-[#192b45] space-y-2">
                      <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68]">
                        {t.coreFeaturesTitle}
                      </p>
                      <ul className="space-y-1.5">
                        {pillar.features.map((f, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-[#142d55] dark:text-[#E5BA68] mt-0.5">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Interactive Prologue Banner */}
          <div className="mt-12 sm:mt-14 rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-5 sm:p-7 md:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md min-w-0 max-w-full overflow-hidden">
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                <span>{t.banner.badge}</span>
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1.5 break-words">
                {t.banner.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl break-words">
                {t.banner.desc}
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>{t.banner.action}</span>
              <HiArrowUpRight size={14} className="shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
