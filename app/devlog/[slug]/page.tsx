import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoArrowBackOutline, IoArrowForwardOutline, IoLogoWhatsapp } from "react-icons/io5";
import { DEVLOG_ARTICLES } from "@/components/devlogData";
import { WHATSAPP_BOT_URL } from "@/components/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEVLOG_ARTICLES.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = DEVLOG_ARTICLES.find((a) => a.id === slug);
  if (!article) {
    return { title: "Article Not Found | ShirayukinoComp" };
  }
  return {
    title: `${article.title} | ShirayukinoComp Devlog`,
    description: article.summary,
  };
}

export default async function DevlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = DEVLOG_ARTICLES.find((a) => a.id === slug);

  if (!article) {
    notFound();
  }

  const currentIndex = DEVLOG_ARTICLES.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? DEVLOG_ARTICLES[currentIndex - 1] : null;
  const nextArticle =
    currentIndex >= 0 && currentIndex < DEVLOG_ARTICLES.length - 1
      ? DEVLOG_ARTICLES[currentIndex + 1]
      : null;

  return (
    <div className="w-full transition-colors duration-300">
      {/* Top Header & Breadcrumbs */}
      <div className="px-[21px] pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[880px]">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/devlog" className="hover:text-black dark:hover:text-white transition-colors">
              Devlog
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold truncate max-w-[200px] sm:max-w-none">
              {article.category}
            </span>
          </nav>

          {/* Back to All Notes Button */}
          <Link
            href="/devlog"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#142d55] dark:text-[#E5BA68] hover:underline mb-4 transition-all"
          >
            <IoArrowBackOutline size={14} />
            <span>Back to all notes</span>
          </Link>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] mb-4">
            <span className="px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#13233c] text-[#142d55] dark:text-[#a0c2f9] border border-[#cfe0f8] dark:border-[#203a63] font-medium">
              ✦ {article.category}
            </span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-600 dark:text-gray-400">By {article.author}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400">{article.date}</span>
            <span className="text-gray-400 dark:text-gray-500">•</span>
            <span className="text-gray-500 dark:text-gray-400">{article.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-black dark:text-white">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Main Article Body */}
      <article className="px-[21px] py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[880px] space-y-8">
          {/* Lead Quote Paragraph */}
          <p className="text-base sm:text-xl leading-[1.68] text-gray-700 dark:text-gray-300 font-serif italic border-l-2 border-[#142d55] dark:border-[#E5BA68] pl-5 sm:pl-6 py-2">
            {article.content.lead}
          </p>

          <hr className="border-[#e7e3df] dark:border-[#1a2840]" />

          {/* Structured Sections */}
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.8] text-gray-800 dark:text-gray-200">
            {article.content.sections.map((section, sIdx) => (
              <section key={sIdx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black dark:text-white">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {section.bulletPoints && (
                  <ul className="space-y-2.5 pl-5 list-disc marker:text-[#142d55] dark:marker:text-[#E5BA68]">
                    {section.bulletPoints.map((item, bIdx) => (
                      <li key={bIdx} className="pl-1 text-gray-700 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="my-4 p-5 rounded-2xl bg-[#f5f2ed] dark:bg-[#0e1c30] border border-[#e0d9cf] dark:border-[#1f3b61] text-[#142d55] dark:text-[#E5BA68] font-mono text-xs sm:text-[13px] leading-relaxed shadow-sm">
                    {section.callout}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Interactive Quest Banner */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-[#23457a] dark:border-[#1e3b68] shadow-md">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E5BA68] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                ✦ INTERACTIVE PROLOGUE QUEST
              </p>
              <h3 className="text-lg sm:text-xl font-semibold mt-1">
                Experience this story right now on WhatsApp
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80">
                Play the prologue quest and unlock early-bird secret rewards for the PC/Steam release.
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>Play on WhatsApp</span>
              <HiArrowUpRight size={13} />
            </a>
          </div>

          {/* Previous / Next Article Navigation Bar */}
          <div className="mt-12 pt-8 border-t border-[#e7e3df] dark:border-[#1a2840] flex items-center justify-between gap-4">
            {prevArticle ? (
              <Link
                href={`/devlog/${prevArticle.id}`}
                className="flex items-center gap-3 text-left group max-w-[48%]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e2ddd7] dark:border-[#1e3250] bg-[#f8f5f2] dark:bg-[#0d1728] shrink-0 group-hover:border-[#142d55] dark:group-hover:border-[#E5BA68] transition-colors">
                  <IoArrowBackOutline className="text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Previous Note
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-black dark:text-white line-clamp-1 group-hover:underline">
                    {prevArticle.title}
                  </span>
                </div>
              </Link>
            ) : <div />}

            {nextArticle ? (
              <Link
                href={`/devlog/${nextArticle.id}`}
                className="flex items-center gap-3 text-right group max-w-[48%] ml-auto"
              >
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Next Note
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-black dark:text-white line-clamp-1 group-hover:underline">
                    {nextArticle.title}
                  </span>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#e2ddd7] dark:border-[#1e3250] bg-[#f8f5f2] dark:bg-[#0d1728] shrink-0 group-hover:border-[#142d55] dark:group-hover:border-[#E5BA68] transition-colors">
                  <IoArrowForwardOutline className="text-gray-500 group-hover:text-black dark:group-hover:text-white" />
                </div>
              </Link>
            ) : <div />}
          </div>

          {/* Bottom Back Button */}
          <div className="text-center pt-8">
            <Link
              href="/devlog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] text-xs font-mono font-semibold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] hover:bg-gray-100 dark:hover:bg-[#121e33] transition-colors shadow-sm"
            >
              <IoArrowBackOutline size={14} />
              <span>Back to all development notes</span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
