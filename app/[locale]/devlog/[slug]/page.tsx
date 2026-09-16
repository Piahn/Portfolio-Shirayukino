import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import {
  DEVLOG_ARTICLES_EN,
  getDevlogArticles,
  getDevlogArticle,
} from "@/components/devlogData";
import { WHATSAPP_BOT_URL } from "@/components/constants";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["id", "en"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const article of DEVLOG_ARTICLES_EN) {
      params.push({ locale, slug: article.id });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const lang = locale === "en" ? "en" : "id";
  const article = getDevlogArticle(slug, lang);

  if (!article) {
    return { title: "Article Not Found | ShirayukinoComp" };
  }
  return {
    title: `${article.title} | ShirayukinoComp Devlog`,
    description: article.summary,
  };
}

export default async function DevlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = locale === "en" ? "en" : "id";
  const article = getDevlogArticle(slug, lang);

  if (!article) {
    notFound();
  }

  const articles = getDevlogArticles(lang);
  const currentIndex = articles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1
      ? articles[currentIndex + 1]
      : null;

  return (
    <div className="w-full transition-colors duration-300">
      {/* Top Header & Breadcrumbs */}
      <div className="px-[21px] pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[880px]">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-6"
          >
            <Link
              href={`/${lang}`}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {lang === "id" ? "Beranda" : "Home"}
            </Link>
            <span>/</span>
            <Link
              href={`/${lang}/devlog`}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              Devlog
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold truncate max-w-[200px] sm:max-w-none">
              {article.category}
            </span>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs mb-4">
            <span className="px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#13233c] text-[#142d55] dark:text-[#a0c2f9] border border-[#cfe0f8] dark:border-[#203a63] font-medium">
              {article.category}
            </span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-600 dark:text-gray-400">By {article.author}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400">{article.date}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-[1.15] tracking-[-0.03em] text-black dark:text-white mb-6">
            {article.title}
          </h1>

          {/* Lead Paragraph */}
          <p className="text-base sm:text-lg leading-[1.65] text-gray-700 dark:text-gray-300 font-serif italic border-l-2 border-[#142d55] dark:border-[#E5BA68] pl-4 sm:pl-5 py-1">
            {article.content.lead}
          </p>
        </div>
      </div>

      {/* Main Article Content */}
      <article className="px-[21px] py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-[880px] space-y-10 text-sm sm:text-base leading-[1.8] text-gray-800 dark:text-gray-200">
          {article.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white tracking-[-0.02em] pt-2">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.bulletPoints && (
                <ul className="space-y-2 pt-2">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2.5">
                      <span className="text-[#142d55] dark:text-[#E5BA68] font-bold mt-1">
                        •
                      </span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.callout && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#edf3fc] dark:bg-[#0c1626] border border-[#cfe0f8] dark:border-[#1e3456] text-[#142d55] dark:text-[#a0c2f9] font-mono text-xs sm:text-sm font-medium mt-4">
                  {section.callout}
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      {/* Prev / Next Article Navigation */}
      <div className="px-[21px] py-8 sm:px-8 sm:py-10 border-t border-[#e7e3df] dark:border-[#1a2840] bg-[#faf8f5] dark:bg-[#0a111e]">
        <div className="mx-auto max-w-[880px] flex flex-col sm:flex-row items-stretch justify-between gap-4">
          {prevArticle ? (
            <Link
              href={`/${lang}/devlog/${prevArticle.id}`}
              className="flex-1 p-4 rounded-xl border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40 transition-colors group"
            >
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <IoArrowBackOutline size={12} />
                <span>{lang === "id" ? "Artikel Sebelumnya" : "Previous Article"}</span>
              </span>
              <p className="text-sm font-semibold text-black dark:text-white mt-1 group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors line-clamp-1">
                {prevArticle.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextArticle ? (
            <Link
              href={`/${lang}/devlog/${nextArticle.id}`}
              className="flex-1 p-4 rounded-xl border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40 transition-colors group text-right"
            >
              <span className="text-[10.5px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center justify-end gap-1">
                <span>{lang === "id" ? "Artikel Berikutnya" : "Next Article"}</span>
                <IoArrowForwardOutline size={12} />
              </span>
              <p className="text-sm font-semibold text-black dark:text-white mt-1 group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors line-clamp-1">
                {nextArticle.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </div>
  );
}
