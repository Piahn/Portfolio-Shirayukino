"use client";

import { useLanguage } from "./LanguageContext";
import { IoGlobeOutline } from "react-icons/io5";

export function LanguageToggle({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "inline";
}) {
  const { lang, setLang } = useLanguage();
  const isInline = variant === "inline";

  return (
    <div
      className={
        isInline
          ? `inline-flex items-center gap-1.5 ${className}`
          : `inline-flex items-center rounded-full bg-[#f1eeea] dark:bg-[#0c1524] p-1 border border-[#e7e3df] dark:border-[#1e3456] transition-colors shadow-sm ${className}`
      }
      role="group"
      aria-label="Language Selector"
    >
      <div
        className={`flex items-center ${
          isInline
            ? "px-1 text-gray-400 dark:text-gray-400"
            : "pl-1.5 pr-1 text-gray-400 dark:text-gray-500"
        }`}
      >
        <IoGlobeOutline size={13} className="text-[#142d55] dark:text-[#E5BA68]" />
      </div>

      <div className="flex items-center gap-0.5 font-mono text-[11px] font-semibold">
        {/* Indonesian Button */}
        <button
          type="button"
          onClick={() => setLang("id")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
            lang === "id"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
          aria-pressed={lang === "id"}
          title="Bahasa Indonesia"
        >
          <span>ID</span>
        </button>

        <span className="text-gray-300 dark:text-gray-600 text-[10px] select-none">/</span>

        {/* English Button */}
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
            lang === "en"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
          aria-pressed={lang === "en"}
          title="English"
        >
          <span>EN</span>
        </button>
      </div>
    </div>
  );
}
