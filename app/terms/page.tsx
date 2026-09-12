import type { Metadata } from "next";
import Link from "next/link";
import { IoArrowBackOutline, IoShieldCheckmarkOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Terms of Use | ShirayukinoComp",
  description:
    "Official Terms of Use and Fan Creation Guidelines for ShirayukinoComp and 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith).",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing the ShirayukinoComp website, playing our interactive WhatsApp Bot prologue, downloading demo builds, or purchasing upcoming game editions of 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith), you agree to be bound by these Terms of Use and all applicable laws and regulations.",
  },
  {
    title: "2. Software & Game License",
    content:
      "ShirayukinoComp grants you a personal, non-exclusive, non-transferable, revocable license to play, stream, and enjoy the software and interactive bot for non-commercial personal entertainment purposes. You may not decompile, reverse engineer, or redistribute internal game assets without explicit written authorization.",
  },
  {
    title: "3. WhatsApp Bot Interactive Service",
    content:
      "The WhatsApp Bot prologue is an official interactive prelude provided free of charge for community members. Message frequency is strictly user-driven based on your in-chat story choices. You may reset or terminate your session at any time by messaging the command '/reset' or by stopping dialogue interaction.",
  },
  {
    title: "4. Streaming & Content Creator Guidelines",
    content:
      "We enthusiastically encourage creators to stream, record playthroughs, and review our game and interactive bot on platforms such as YouTube, Twitch, and Bilibili. You may monetize video content through standard ad revenue platforms. For chapters beyond the public prologue, please display appropriate spoiler warnings in video titles or descriptions.",
  },
  {
    title: "5. Fan Art & Derivative Works Policy",
    content:
      "Non-commercial derivative creations—including fan art, fan fiction, cosplay, and acoustic music covers—are wholeheartedly welcomed and supported. When sharing derivative works online, please tag or credit 『星海の白雪と蒼穹の聖域 / ShirayukinoComp』 so our circle can celebrate your work.",
  },
  {
    title: "6. Intellectual Property Rights",
    content:
      "All characters, scenarios, orchestral musical compositions, environment background illustrations, and logos associated with 『星海の白雪と蒼穹の聖域』 are proprietary creative works of ShirayukinoComp. Unauthorized commercial exploitation of circle assets is strictly prohibited.",
  },
  {
    title: "7. Modifications & Inquiries",
    content:
      "ShirayukinoComp reserves the right to revise these terms at any time. For licensing inquiries, press kits, or circle collaboration proposals, please contact us directly at contact@shirayukinocomp.com.",
  },
];

export default function TermsPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Top Header */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-14 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[880px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-5 sm:mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
              <IoArrowBackOutline size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">Terms of Use</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
            <IoShieldCheckmarkOutline className="text-sm text-[#142d55] dark:text-[#E5BA68] shrink-0" />
            <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
              LEGAL & CIRCLE POLICIES
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
            Terms of Use & Creator Guidelines
          </h1>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-400">
            Last Updated: September 2026 • ShirayukinoComp Creative Circle
          </p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[880px] space-y-6 sm:space-y-10">
          {SECTIONS.map((sec, idx) => (
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

          {/* Contact Box */}
          <div className="p-6 rounded-[20px] border border-[#cfe0f8] dark:border-[#1e3b68] bg-[#edf3fc]/50 dark:bg-[#0c1628] text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-black dark:text-white">Have questions about fan licensing or streaming?</p>
              <p className="text-gray-500 dark:text-gray-400 mt-0.5">Reach out to the circle team anytime.</p>
            </div>
            <a
              href="mailto:contact@shirayukinocomp.com"
              className="px-5 py-2.5 rounded-full bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e] font-semibold uppercase tracking-wider text-xs transition hover:opacity-90 shrink-0"
            >
              Contact Circle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
