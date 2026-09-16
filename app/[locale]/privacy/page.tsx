"use client";

import Link from "next/link";
import { IoArrowBackOutline, IoLockClosedOutline } from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const t = translations[lang].privacyPage;

  return (
    <div className="w-full max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Top Header */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-14 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[880px]">
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

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
            <IoLockClosedOutline className="text-sm text-[#142d55] dark:text-[#E5BA68] shrink-0" />
            <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
              {t.badge}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
            {t.title}
          </h1>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400">
            {t.lastUpdated} • ShirayukinoComp Creative Circle
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[880px] space-y-6 sm:space-y-10">
          {t.sections.map((sec, idx) => (
            <section
              key={idx}
              className="p-6 sm:p-8 rounded-[20px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                {sec.title}
              </h2>
              <p className="mt-3 text-sm sm:text-[14.5px] leading-[1.7] text-gray-600 dark:text-gray-300">
                {sec.content}
              </p>
            </section>
          ))}

          {/* Privacy Note Box */}
          <div className="p-6 rounded-[20px] border border-[#cfe0f8] dark:border-[#1e3b68] bg-[#edf3fc]/50 dark:bg-[#0c1628] text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-black dark:text-white">
                {lang === "id"
                  ? "Ingin data prolog bot Anda dihapus?"
                  : "Need your bot quest data erased?"}
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-0.5">
                {lang === "id"
                  ? "Cukup kirim pesan '/clear' langsung ke bot WhatsApp kami atau hubungi tim privasi."
                  : "Simply send '/clear' directly to our WhatsApp bot or contact our team."}
              </p>
            </div>
            <a
              href="mailto:privacy@shirayukino.eu.cc"
              className="px-5 py-2.5 rounded-full bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e] font-semibold uppercase tracking-wider text-xs transition hover:opacity-90 shrink-0"
            >
              {lang === "id" ? "Kirim Surel Privasi" : "Email Privacy Team"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
