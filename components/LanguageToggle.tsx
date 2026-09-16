"use client";

import { useLanguage, type Lang } from "./LanguageContext";
import { IoGlobeOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

export function LanguageToggle({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "inline";
}) {
  const { lang, setLang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname() || "";
  const isInline = variant === "inline";

  const handleLanguageChange = (targetLang: Lang) => {
    if (targetLang === lang) return;

    setLang(targetLang);

    // Calculate new path by swapping or prefixing locale
    let newPath = pathname;
    if (pathname.startsWith("/id") || pathname.startsWith("/en")) {
      newPath = pathname.replace(/^\/(id|en)/, `/${targetLang}`);
    } else {
      newPath = `/${targetLang}${pathname === "/" ? "" : pathname}`;
    }

    // Preserve search params and hash anchor if any
    const search = typeof window !== "undefined" ? window.location.search : "";
    const queryString = search && search.startsWith("?") ? search.slice(1) : search;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const finalUrl = `${newPath}${queryString ? `?${queryString}` : ""}${hash}`;

    router.push(finalUrl, { scroll: false });
  };

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
          onClick={() => handleLanguageChange("id")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
            lang === "id"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
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
          onClick={() => handleLanguageChange("en")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider ${
            lang === "en"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
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
