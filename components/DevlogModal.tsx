"use client";

import { useState, useEffect } from "react";
import { IoCloseOutline, IoArrowBackOutline, IoArrowForwardOutline, IoLogoWhatsapp } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { DEVLOG_ARTICLES, DevlogArticle } from "./devlogData";
import { WHATSAPP_BOT_URL } from "./constants";

interface DevlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialArticleId?: string | null;
}

const CATEGORIES = [
  "All",
  "WhatsApp Bot & Engine",
  "Combat & RPG Systems",
  "Music & Soundscapes",
  "Worldbuilding & Art",
  "Scenario & Mythology",
];

export function DevlogModal({ isOpen, onClose, initialArticleId = null }: DevlogModalProps) {
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(initialArticleId);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Synchronize initial article when modal opens
  useEffect(() => {
    if (isOpen) {
      setSelectedArticleId(initialArticleId);
    }
  }, [isOpen, initialArticleId]);

  // Lock body scroll and listen for ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentArticle = selectedArticleId
    ? DEVLOG_ARTICLES.find((a) => a.id === selectedArticleId) || null
    : null;

  const filteredArticles =
    activeCategory === "All"
      ? DEVLOG_ARTICLES
      : DEVLOG_ARTICLES.filter((a) => a.category === activeCategory);

  // Next / Previous article navigation
  const currentIndex = currentArticle
    ? DEVLOG_ARTICLES.findIndex((a) => a.id === currentArticle.id)
    : -1;
  const prevArticle = currentIndex > 0 ? DEVLOG_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < DEVLOG_ARTICLES.length - 1
      ? DEVLOG_ARTICLES[currentIndex + 1]
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/60 dark:bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Development Archives & Circle Devlogs"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[24px] sm:rounded-[28px] border border-[#e7e3df] dark:border-[#1e3252] bg-white dark:bg-[#0a1322] shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[#e7e3df] dark:border-[#192b45] bg-[#faf8f5] dark:bg-[#0c1626] shrink-0">
          <div className="flex items-center gap-3">
            {currentArticle ? (
              <button
                onClick={() => setSelectedArticleId(null)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#142d55] dark:text-[#E5BA68] hover:underline transition-all"
              >
                <IoArrowBackOutline size={14} />
                <span>All Notes</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#6e6862] dark:text-[#8ba2c4] font-medium">
                  Development Archives
                </span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {currentArticle && (
              <span className="hidden sm:inline-flex text-[11px] font-mono text-gray-500 dark:text-gray-400">
                {currentArticle.date} • {currentArticle.readTime}
              </span>
            )}
            <button
              onClick={onClose}
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#121f33] border border-[#e2ddd7] dark:border-[#223654] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#172842] transition-colors shadow-sm"
              aria-label="Close notes modal"
            >
              <IoCloseOutline size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 md:px-10 py-6 sm:py-8">
          {currentArticle ? (
            /* --- Article Detail Reader View --- */
            <article className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-[11px]">
                <span className="px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#13233c] text-[#142d55] dark:text-[#a0c2f9] border border-[#cfe0f8] dark:border-[#203a63] font-medium">
                  ✦ {currentArticle.category}
                </span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-gray-600 dark:text-gray-400">By {currentArticle.author}</span>
                <span className="text-gray-400 dark:text-gray-500">•</span>
                <span className="text-gray-500 dark:text-gray-400">{currentArticle.date}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-black dark:text-white">
                {currentArticle.title}
              </h1>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg leading-[1.65] text-gray-700 dark:text-gray-300 font-serif italic border-l-2 border-[#142d55] dark:border-[#E5BA68] pl-4 sm:pl-5 py-1">
                {currentArticle.content.lead}
              </p>

              <hr className="border-[#e7e3df] dark:border-[#192b45] my-6" />

              {/* Sections */}
              <div className="space-y-8 text-sm sm:text-[15px] leading-[1.75] text-gray-800 dark:text-gray-200">
                {currentArticle.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-black dark:text-white">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}

                    {section.bulletPoints && (
                      <ul className="space-y-2 pl-5 list-disc marker:text-[#142d55] dark:marker:text-[#E5BA68]">
                        {section.bulletPoints.map((item, bIdx) => (
                          <li key={bIdx} className="pl-1 text-gray-700 dark:text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.callout && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-[#f5f2ed] dark:bg-[#0e1c30] border border-[#e0d9cf] dark:border-[#1f3b61] text-[#142d55] dark:text-[#E5BA68] font-mono text-xs sm:text-[13px] leading-relaxed">
                        {section.callout}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Quest Banner inside Reader */}
              <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#23457a] dark:border-[#1e3b68]">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E5BA68]">
                    ✦ Experience the Story Live
                  </p>
                  <p className="text-sm font-medium mt-1">
                    Play the Interactive Prologue Quest directly in WhatsApp.
                  </p>
                </div>
                <a
                  href={WHATSAPP_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-[11px] font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm"
                >
                  <IoLogoWhatsapp className="text-[#25D366] text-base" />
                  <span>Start on WhatsApp</span>
                </a>
              </div>

              {/* Prev / Next Article Bar */}
              <div className="mt-8 pt-6 border-t border-[#e7e3df] dark:border-[#192b45] flex items-center justify-between gap-4">
                {prevArticle ? (
                  <button
                    onClick={() => setSelectedArticleId(prevArticle.id)}
                    className="flex items-center gap-2 text-left group max-w-[48%]"
                  >
                    <IoArrowBackOutline className="text-gray-400 group-hover:text-black dark:group-hover:text-white shrink-0" />
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Previous Note
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-white line-clamp-1 group-hover:underline">
                        {prevArticle.title}
                      </span>
                    </div>
                  </button>
                ) : <div />}

                {nextArticle ? (
                  <button
                    onClick={() => setSelectedArticleId(nextArticle.id)}
                    className="flex items-center gap-2 text-right group max-w-[48%] ml-auto"
                  >
                    <div>
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Next Note
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-black dark:text-white line-clamp-1 group-hover:underline">
                        {nextArticle.title}
                      </span>
                    </div>
                    <IoArrowForwardOutline className="text-gray-400 group-hover:text-black dark:group-hover:text-white shrink-0" />
                  </button>
                ) : <div />}
              </div>
            </article>
          ) : (
            /* --- Archive List Overview View --- */
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Header inside modal */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white tracking-tight">
                  Production Notes & Circle Devlogs
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  Deep-dive archives into our scenario writing, tactical turn-based combat design, orchestral score composition, and the interactive WhatsApp RPG engine.
                </p>
              </div>

              {/* Category Pills Filter */}
              <div className="flex flex-wrap gap-2 pt-2 border-b border-[#e7e3df] dark:border-[#192b45] pb-4">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[11px] font-mono transition-all ${
                      activeCategory === cat
                        ? "bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e] shadow-sm font-semibold"
                        : "bg-[#f1eeea] dark:bg-[#121e33] text-gray-700 dark:text-gray-300 hover:bg-[#e4ded6] dark:hover:bg-[#1a2b47]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Articles Grid / List */}
              <div className="grid gap-4 sm:gap-5 md:grid-cols-2 pt-2">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => setSelectedArticleId(article.id)}
                    className="cursor-pointer group flex flex-col justify-between p-5 sm:p-6 rounded-[20px] border border-[#e7e3df] dark:border-[#1c2e47] bg-[#faf8f5] dark:bg-[#0d1728] hover:border-[#142d55]/50 dark:hover:border-[#E5BA68]/50 hover:shadow-md transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 font-mono text-[10.5px]">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#edf3fc] dark:bg-[#13233c] text-[#142d55] dark:text-[#a0c2f9] border border-[#cfe0f8] dark:border-[#203a63]">
                          ✦ {article.category}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400">
                          {article.date}
                        </span>
                      </div>
                      <h2 className="mt-3 text-lg font-semibold text-black dark:text-white leading-snug group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-xs sm:text-[13px] leading-[1.6] text-gray-600 dark:text-gray-300 line-clamp-3">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#e7e3df] dark:border-[#192a42] flex items-center justify-between text-[11px] font-mono">
                      <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#142d55] dark:text-[#E5BA68] group-hover:translate-x-0.5 transition-transform">
                        Read Note <HiArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
