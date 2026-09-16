"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoDiscord,
  IoLogoWhatsapp,
  IoSparklesOutline,
  IoCodeSlashOutline,
  IoPeopleOutline,
  IoTerminalOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { WHATSAPP_BOT_URL } from "@/components/constants";

const MEMBER_ICONS = [
  IoCodeSlashOutline,
  IoPeopleOutline,
  IoTerminalOutline,
  IoShieldCheckmarkOutline,
];

export default function StaffAndCreditsPage() {
  const { lang } = useLanguage();
  const t = translations[lang].creditsPage;

  return (
    <div className="w-full max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Top Header & Breadcrumb */}
      <div className="px-3.5 py-7 sm:px-6 sm:py-12 md:px-8 md:py-14 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[1220px]">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-4 sm:mb-6"
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#142d55] dark:bg-[#E5BA68] shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                {t.badge}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
              {t.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
              {t.desc}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3.5 py-7 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px] space-y-12 sm:space-y-18">
          {/* Core Team Section (Optimized for Mobile & Desktop) */}
          <section aria-labelledby="core-team-heading">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#142d55]/20 dark:border-[#E5BA68]/30 mb-6 sm:mb-8">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8f8b86] dark:text-[#7f93b0] block mb-1">
                  01 // PRODUCTION ROSTER
                </span>
                <h2
                  id="core-team-heading"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-black dark:text-white"
                >
                  {t.coreTeamTitle}
                </h2>
              </div>
              <p className="font-mono text-xs text-[#8f8b86] dark:text-[#7f93b0]">
                {t.coreTeamDesc}
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {t.coreMembers.map((member, idx) => {
                const IconComponent = MEMBER_ICONS[idx % MEMBER_ICONS.length];
                const initial = member.name.charAt(0);

                return (
                  <div
                    key={member.name}
                    className="group rounded-[20px] sm:rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#fbfaf8] dark:bg-[#0c1524] p-4 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#142d55]/30 dark:hover:border-[#E5BA68]/40 hover:shadow-sm overflow-hidden"
                  >
                    <div>
                      {/* Top Row: Avatar Initial, Name, Role, Badge */}
                      <div className="flex items-start justify-between gap-2.5 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-white dark:bg-[#14223b] border border-[#e7e3df] dark:border-[#1e3456] flex items-center justify-center font-mono font-bold text-xs sm:text-sm text-[#142d55] dark:text-[#E5BA68] shadow-xs shrink-0">
                            {initial}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white tracking-tight leading-tight truncate">
                              {member.name}
                            </h3>
                            <p className="font-mono text-[11px] sm:text-xs text-[#142d55] dark:text-[#E5BA68] font-semibold leading-tight mt-0.5 truncate">
                              {member.role}
                            </p>
                          </div>
                        </div>

                        {member.badge && (
                          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.14em] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456] text-[#142d55] dark:text-[#E5BA68] font-semibold shadow-xs shrink-0 self-start">
                            {member.badge}
                          </span>
                        )}
                      </div>

                      {/* Sub-role / Division Pill */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#edf3fc] dark:bg-[#132038] text-[10.5px] sm:text-[11px] font-mono text-gray-700 dark:text-gray-300 mb-3 max-w-full">
                        <IconComponent className="text-[#142d55] dark:text-[#E5BA68] shrink-0" size={12} />
                        <span className="truncate">{member.subRole}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300">
                        {member.desc}
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-[#eae5e0] dark:border-[#16253b] flex items-center justify-between text-[10.5px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400">
                      <span>Shirayukino × Yurizaki</span>
                      <span className="text-[#142d55] dark:text-[#E5BA68] font-medium">Circle Team</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Community Acknowledgments & Inspiration (Card with Full Mobile & Desktop Safety) */}
          <section
            aria-labelledby="gratitude-heading"
            className="rounded-[20px] sm:rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#faf8f5] dark:bg-[#0c1524] p-4 sm:p-7 md:p-10 shadow-xs overflow-hidden"
          >
            <div className="max-w-full">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#142d55] dark:text-[#E5BA68] font-semibold block mb-1.5">
                02 // COMMUNITY ACKNOWLEDGMENTS
              </span>
              <h2
                id="gratitude-heading"
                className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight mb-5 sm:mb-6"
              >
                {t.inspirationTitle} &amp; {t.bigThanksTitle}
              </h2>

              {/* Balanced 2-Column Grid on Desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 pb-5 sm:pb-6 border-b border-[#e7e3df] dark:border-[#1a2840]">
                {/* Column 1: Sumber Inspirasi */}
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] flex items-center gap-1.5">
                    <IoSparklesOutline size={13} className="shrink-0" />
                    <span>{t.inspirationTitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {t.inspirationContent}
                  </p>
                </div>

                {/* Column 2: Big Thanks */}
                <div className="space-y-2">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] flex items-center gap-1.5">
                    <IoSparklesOutline size={13} className="shrink-0" />
                    <span>{t.bigThanksTitle}</span>
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {t.bigThanksContent}
                  </p>
                </div>
              </div>

              {/* Bottom Sign-off Line (Mobile & Desktop Overflow Safe) */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs sm:text-sm">
                <p className="font-mono text-[#142d55] dark:text-[#E5BA68] font-semibold break-words">
                  ✦ {t.closingQuote}
                </p>
                <span className="font-mono text-[10.5px] sm:text-xs text-[#8f8b86] dark:text-[#7f93b0] sm:whitespace-nowrap break-words">
                  — ShirayukinoComp &amp; Yurizaki Team
                </span>
              </div>
            </div>
          </section>

          {/* Clean Community CTA */}
          <section className="rounded-[20px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#fbfaf8] dark:bg-[#0c1524] p-5 sm:p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 shadow-xs overflow-hidden">
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] font-semibold block mb-1">
                ✦ {t.banner.badge}
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black dark:text-white mb-2">
                {t.banner.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.banner.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 shrink-0 font-mono text-xs">
              <Link
                href={`/${lang}/community`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#E5BA68] dark:hover:bg-[#f0c878] text-white dark:text-[#08101d] font-semibold uppercase tracking-wider transition shadow-xs"
              >
                <IoLogoDiscord size={15} />
                <span>{t.banner.actionDiscord}</span>
                <HiArrowUpRight size={13} />
              </Link>
              <a
                href={WHATSAPP_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#15233c] hover:bg-gray-50 dark:hover:bg-[#1d3050] text-[#142d55] dark:text-[#E5BA68] border border-[#e7e3df] dark:border-[#1e3456] font-semibold uppercase tracking-wider transition shadow-xs"
              >
                <IoLogoWhatsapp size={15} />
                <span>{t.banner.actionBot}</span>
                <HiArrowUpRight size={13} />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
