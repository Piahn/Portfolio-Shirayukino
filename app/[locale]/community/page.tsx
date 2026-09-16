"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoLogoDiscord,
  IoGameControllerOutline,
  IoColorPaletteOutline,
  IoCheckmarkCircle,
  IoSparklesOutline,
} from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { WHATSAPP_BOT_URL } from "@/components/constants";

const CHANNEL_ICONS = {
  discord: IoLogoDiscord,
  whatsapp: IoLogoWhatsapp,
  steam: IoGameControllerOutline,
  "sanctuary-forge": IoColorPaletteOutline,
};

export default function CommunitySanctuaryPage() {
  const { lang } = useLanguage();
  const t = translations[lang].communityPage;

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

      {/* Main Channel Cards Grid */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {t.channels.map((channel) => {
              const Icon =
                CHANNEL_ICONS[channel.id as keyof typeof CHANNEL_ICONS] ||
                IoLogoDiscord;
              const isWhatsapp = channel.id === "whatsapp";
              const targetUrl = isWhatsapp ? WHATSAPP_BOT_URL : channel.actionUrl;

              return (
                <div
                  key={channel.id}
                  className={`rounded-[20px] sm:rounded-[22px] border p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-colors shadow-sm min-w-0 max-w-full overflow-hidden ${
                    channel.featured
                      ? "border-[#142d55]/30 dark:border-[#E5BA68]/40 bg-[#f8faff] dark:bg-[#0c1626]"
                      : "border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] flex items-center justify-center text-xl text-[#142d55] dark:text-[#E5BA68] shadow-sm">
                        <Icon />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        {channel.badge}
                      </span>
                    </div>

                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400 mb-1">
                      {channel.category}
                    </p>
                    <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-3">
                      {channel.title}
                    </h2>
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                      {channel.description}
                    </p>

                    <div className="pt-4 border-t border-[#e2ddd7] dark:border-[#192b45] space-y-2 mb-6">
                      <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68]">
                        {t.keyFeaturesTitle}
                      </p>
                      <ul className="space-y-1.5">
                        {channel.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                          >
                            <IoCheckmarkCircle
                              size={14}
                              className="text-[#142d55] dark:text-[#E5BA68] shrink-0 mt-0.5"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    {channel.isComingSoon ? (
                      <span className="inline-flex items-center justify-center w-full px-5 py-2.5 rounded-full bg-gray-200 dark:bg-[#162133] text-gray-500 dark:text-gray-400 text-xs font-mono font-semibold uppercase tracking-wider cursor-not-allowed">
                        {channel.actionLabel}
                      </span>
                    ) : (
                      <a
                        href={targetUrl}
                        target={channel.actionUrl.startsWith("http") ? "_blank" : undefined}
                        rel={channel.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 sm:py-3 rounded-full text-xs font-mono font-semibold uppercase tracking-wider transition shadow-sm ${
                          channel.featured
                            ? "bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#E5BA68] dark:hover:bg-[#f0c878] text-white dark:text-[#08101d]"
                            : "bg-white hover:bg-gray-100 dark:bg-[#15233c] dark:hover:bg-[#1c3050] text-[#142d55] dark:text-[#E5BA68] border border-[#e7e3df] dark:border-[#1e3456]"
                        }`}
                      >
                        <span>{channel.actionLabel}</span>
                        <HiArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Community Milestones Section */}
          <div className="mt-14 sm:mt-16 rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#fbfaf8] dark:bg-[#0c1524] p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <IoSparklesOutline className="text-[#142d55] dark:text-[#E5BA68] text-lg" />
              <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                {t.milestonesTitle}
              </h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.milestones.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-xl border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#111c30] p-4 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[11px] font-bold text-[#142d55] dark:text-[#E5BA68]">
                        {m.tier}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-[#17253d] text-gray-600 dark:text-gray-300">
                        {m.status}
                      </span>
                    </div>
                    <p className="font-semibold text-black dark:text-white text-sm mb-2">
                      {m.goal}
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 pt-2 border-t border-gray-100 dark:border-[#1a2840]">
                    🎁 {m.reward}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
