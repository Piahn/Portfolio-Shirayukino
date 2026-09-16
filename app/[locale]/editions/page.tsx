"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoCheckmarkCircle,
  IoLogoWhatsapp,
  IoGitCommitOutline,
  IoTimeOutline,
  IoSparklesOutline,
  IoHardwareChipOutline,
  IoLayersOutline,
} from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { WHATSAPP_BOT_URL } from "@/components/constants";

export default function EditionsPage() {
  const { lang } = useLanguage();
  const t = translations[lang].editionsPage;

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

      {/* Version Roadmap & Patch Notes Feed */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="space-y-6 sm:space-y-8">
            {t.updates.map((item, idx) => {
              const isUpcoming = item.statusColor === "blue";
              const isLatest = item.statusColor === "gold";

              return (
                <div
                  key={idx}
                  className={`rounded-[20px] sm:rounded-[24px] border p-5 sm:p-7 md:p-9 transition-colors shadow-sm min-w-0 max-w-full overflow-hidden ${
                    isLatest
                      ? "border-[#142d55]/40 dark:border-[#E5BA68]/50 bg-[#f8faff] dark:bg-[#0b1424] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                      : isUpcoming
                      ? "border-[#cfe0f8] dark:border-[#1e3456] bg-white dark:bg-[#0c1524]"
                      : "border-[#e7e3df] dark:border-[#1a2840] bg-[#fbfaf8] dark:bg-[#0a111e]"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#e7e3df] dark:border-[#1a2840]">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <span className="font-mono text-base sm:text-lg font-bold text-black dark:text-white">
                        {item.version}
                      </span>
                      <span className="text-gray-400 dark:text-gray-600">•</span>
                      <span className="font-mono text-xs sm:text-sm text-[#142d55] dark:text-[#E5BA68] font-semibold">
                        {item.codename}
                      </span>
                      <span
                        className={`text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full border ${
                          isLatest
                            ? "bg-[#142d55] text-white border-transparent dark:bg-[#E5BA68] dark:text-[#08101d]"
                            : isUpcoming
                            ? "bg-[#edf3fc] text-[#142d55] border-[#cfe0f8] dark:bg-[#13233c] dark:text-[#8ab4f8] dark:border-[#1f375c]"
                            : "bg-gray-100 text-gray-700 border-gray-200 dark:bg-[#131d2e] dark:text-gray-300 dark:border-[#1a2840]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                      <IoTimeOutline size={14} />
                      <span>{item.date}</span>
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#e7e3df]/70 dark:border-[#1a2840]/70">
                    <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68] mb-3">
                      {t.keyHighlightsTitle}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-600 dark:text-gray-300">
                      {item.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-2">
                          <IoCheckmarkCircle
                            size={14}
                            className="text-[#142d55] dark:text-[#E5BA68] shrink-0 mt-0.5"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Playable Callout */}
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
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101d] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
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
