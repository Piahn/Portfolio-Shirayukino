"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoSearchOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { DEVLOG_ARTICLES } from "@/components/devlogData";
import { WHATSAPP_BOT_URL } from "@/components/constants";

interface SearchFormInput {
  search: string;
}

const CATEGORIES = [
  "All",
  "WhatsApp Bot & Engine",
  "Combat & RPG Systems",
  "Music & Soundscapes",
  "Worldbuilding & Art",
  "Scenario & Mythology",
];

export default function DevlogArchivePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const [isDebouncing, setIsDebouncing] = useState<boolean>(false);

  // Setup React Hook Form
  const { register, watch, setValue, handleSubmit, reset } =
    useForm<SearchFormInput>({
      defaultValues: {
        search: "",
      },
    });

  const currentSearchValue = watch("search") ?? "";

  // Debounce effect: triggers only when user stops typing (350ms delay)
  useEffect(() => {
    if (currentSearchValue !== debouncedQuery) {
      setIsDebouncing(true);
    }

    const timer = setTimeout(() => {
      setDebouncedQuery(currentSearchValue.trim());
      setIsDebouncing(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [currentSearchValue, debouncedQuery]);

  // Immediate search on Enter / Form Submit
  const onFormSubmit = (data: SearchFormInput) => {
    setDebouncedQuery(data.search.trim());
    setIsDebouncing(false);
  };

  const handleClearSearch = () => {
    setValue("search", "");
    setDebouncedQuery("");
    setIsDebouncing(false);
  };

  const filteredArticles = DEVLOG_ARTICLES.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    const matchesSearch =
      debouncedQuery === "" ||
      article.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(debouncedQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full transition-colors duration-300">
      {/* Top Breadcrumb & Header */}
      <div className="px-[21px] pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-12 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[1220px]">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
              <IoArrowBackOutline size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">Devlog Archives</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors">
                <span className="w-2 h-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] animate-pulse" />
                <span className="font-mono text-[10.5px] font-semibold tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8]">
                  DEVELOPMENT ARCHIVES
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-[1.05] font-semibold tracking-[-0.03em] text-black dark:text-white">
                Production notes & circle devlogs
              </h1>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                Explore in-depth technical breakdowns, scenario writing chronicles, orchestral compositions, and dev updates for 『常闇の女王と秘密の隠れ家』.
              </p>
            </div>

            {/* Quick Search with React Hook Form & Debounce */}
            <form
              onSubmit={handleSubmit(onFormSubmit)}
              className="relative w-full md:w-80"
              role="search"
            >
              <IoSearchOutline className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
              <input
                type="text"
                placeholder="Search notes..."
                {...register("search")}
                autoComplete="off"
                className="w-full h-11 pl-10 pr-10 rounded-full border border-[#e7e3df] dark:border-[#1e3456] bg-[#f8f5f2] dark:bg-[#0c1524] text-xs font-mono text-black dark:text-white placeholder:text-gray-400 focus:outline-none focus:border-[#142d55] dark:focus:border-[#E5BA68] transition-colors"
              />

              {/* Status indicator: Debouncing spinner or Clear icon */}
              <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                {isDebouncing ? (
                  <span
                    className="w-3.5 h-3.5 border-2 border-gray-300 dark:border-gray-600 border-t-[#142d55] dark:border-t-[#E5BA68] rounded-full animate-spin"
                    title="Filtering..."
                  />
                ) : currentSearchValue ? (
                  <button
                    type="button"
                    onClick={handleClearSearch}
                    className="text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                    title="Clear search"
                    aria-label="Clear search input"
                  >
                    <IoCloseCircleOutline size={18} />
                  </button>
                ) : null}
              </div>
            </form>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-[#e7e3df] dark:border-[#1a2840]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e] font-semibold shadow-sm"
                    : "bg-[#f1eeea] dark:bg-[#111d33] text-gray-700 dark:text-gray-300 hover:bg-[#e4ded6] dark:hover:bg-[#192b47]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <div className="px-[21px] py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[1220px]">
          {/* Active search & filter pill bar */}
          {(debouncedQuery !== "" || activeCategory !== "All") && (
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-500 dark:text-gray-400 pb-4 border-b border-[#e7e3df] dark:border-[#1a2840]">
              <div className="flex items-center gap-2">
                <span>
                  Showing{" "}
                  <strong className="text-black dark:text-white font-semibold">
                    {filteredArticles.length}
                  </strong>{" "}
                  of {DEVLOG_ARTICLES.length} notes
                </span>
                {debouncedQuery !== "" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#edf3fc] dark:bg-[#111c30] text-[#142d55] dark:text-[#E5BA68] font-semibold border border-[#cfe0f8] dark:border-[#1f304f]">
                    &ldquo;{debouncedQuery}&rdquo;
                  </span>
                )}
                {activeCategory !== "All" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f1eeea] dark:bg-[#111d33] text-black dark:text-white font-semibold">
                    {activeCategory}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  handleClearSearch();
                  setActiveCategory("All");
                }}
                className="text-xs font-semibold text-[#142d55] dark:text-[#E5BA68] hover:underline cursor-pointer"
              >
                Clear all filters ✕
              </button>
            </div>
          )}

          {filteredArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/devlog/${article.id}`}
                  className="group flex flex-col justify-between rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-7 transition-all duration-300 hover:border-[#142d55]/60 dark:hover:border-[#E5BA68]/60 hover:shadow-md dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[10.5px]">
                      <span className="font-semibold text-[#142d55] dark:text-[#E5BA68] uppercase tracking-[0.14em]">
                        ✦ {article.category}
                      </span>
                      <span className="text-gray-400 dark:text-gray-500">
                        {article.date}
                      </span>
                    </div>

                    <h2 className="mt-4 text-xl sm:text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-black dark:text-white group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors">
                      {article.title}
                    </h2>

                    <p className="mt-3 text-xs sm:text-[13px] leading-[1.65] text-gray-600 dark:text-gray-300 line-clamp-3">
                      {article.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#e2ddd7] dark:border-[#192b45] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-gray-500 dark:text-gray-400">
                      {article.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[#142d55] dark:text-[#E5BA68] group-hover:translate-x-1 transition-transform">
                      Read note <HiArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
                No devlog notes found matching &ldquo;{debouncedQuery || currentSearchValue}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  handleClearSearch();
                  setActiveCategory("All");
                }}
                className="mt-4 text-xs font-mono font-semibold text-[#142d55] dark:text-[#E5BA68] underline cursor-pointer"
              >
                Reset search & filters
              </button>
            </div>
          )}

          {/* Interactive Quest Banner */}
          <div className="mt-14 rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-7 sm:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                ✦ INTERACTIVE PROLOGUE QUEST AVAILABLE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1">
                Experience the opening chapter directly on WhatsApp
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl">
                Chat with characters, make story decisions, and claim your exclusive early-bird secret item code for the full PC/Steam launch.
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>Start on WhatsApp</span>
              <HiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
