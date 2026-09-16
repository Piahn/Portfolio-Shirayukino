"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoSearchOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";
import { getDevlogArticles } from "@/components/devlogData";
import { WHATSAPP_BOT_URL } from "@/components/constants";

interface SearchFormInput {
  search: string;
}

export default function DevlogArchivePage() {
  const { lang } = useLanguage();
  const t = translations[lang].devlogPage;
  const articles = useMemo(() => getDevlogArticles(lang), [lang]);

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

  const onFormSubmit = (data: SearchFormInput) => {
    setDebouncedQuery(data.search.trim());
    setIsDebouncing(false);
  };

  const handleClearSearch = () => {
    reset({ search: "" });
    setDebouncedQuery("");
    setIsDebouncing(false);
  };

  // Filter articles by category and debounced search query
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchCategory =
        activeCategory === "All" ||
        activeCategory === "Semua" ||
        article.category.toLowerCase().includes(activeCategory.toLowerCase());

      const query = debouncedQuery.toLowerCase();
      const matchSearch =
        query === "" ||
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.author.toLowerCase().includes(query);

      return matchCategory && matchSearch;
    });
  }, [articles, activeCategory, debouncedQuery]);

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
              {t.title}
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

          {/* Search Bar & Filter Tabs */}
          <div className="mt-8 pt-6 border-t border-[#e7e3df] dark:border-[#1a2840] space-y-4">
            {/* Search Input */}
            <form onSubmit={handleSubmit(onFormSubmit)} className="relative max-w-md">
              <input
                type="text"
                {...register("search")}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-10 py-2.5 rounded-full border border-[#e7e3df] dark:border-[#1e3456] bg-white dark:bg-[#0c1524] text-xs sm:text-sm text-black dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#142d55] dark:focus:border-[#E5BA68] transition-colors font-mono"
              />
              <IoSearchOutline
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none"
                size={16}
              />
              {currentSearchValue && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  aria-label="Clear search"
                >
                  <IoCloseCircleOutline size={16} />
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Articles Feed */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 font-mono text-sm">
                {lang === "id" ? "Tidak ada artikel yang cocok." : "No articles found matching your query."}
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/${lang}/devlog/${article.id}`}
                  className="group rounded-[20px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-5 sm:p-7 flex flex-col justify-between transition-all hover:-translate-y-1 hover:border-[#142d55]/30 dark:hover:border-[#E5BA68]/40 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] font-semibold px-2 py-0.5 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        {article.category}
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">
                        {article.readTime}
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-semibold text-black dark:text-white group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors leading-snug mb-2">
                      {article.title}
                    </h2>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#e2ddd7] dark:border-[#192b45] flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
                    <span>{article.author}</span>
                    <span className="flex items-center gap-1 text-[#142d55] dark:text-[#E5BA68] font-semibold group-hover:translate-x-0.5 transition-transform">
                      <span>{t.readArticle}</span>
                      <HiArrowUpRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
