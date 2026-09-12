import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoCheckmarkCircle,
  IoLogoWhatsapp,
  IoGitCommitOutline,
  IoTimeOutline,
  IoSparklesOutline,
  IoHardwareChipOutline,
  IoLayersOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Versi Pembaruan & Patch Notes | ShirayukinoComp",
  description:
    "Ikuti rekam jejak riwayat versi pembaruan (patch notes & release roadmap) untuk 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & Elyrith).",
};

const VERSION_UPDATES = [
  {
    version: "v1.0.0",
    codename: "Celestial Sea Awakening",
    date: "Target Q4 2026",
    badge: "Upcoming Launch",
    statusColor: "blue",
    description:
      "The official worldwide release on PC / Steam with full narrative campaign, complete 45-track OST, and dual voice tracks.",
    highlights: [
      "All 5 story chapters and 4 divergent canonical endings",
      "Full 45-track orchestral soundtrack vault integration",
      "Steam Achievements, Cloud Saves, and Trading Cards",
      "WhatsApp Bot Prologue save transfer & relic code redemption",
    ],
  },
  {
    version: "v0.9.4",
    codename: "Tactical Stagger & AP Overhaul",
    date: "September 2026",
    badge: "Latest Patch",
    statusColor: "gold",
    description:
      "Major battle system tuning introducing timeline queue disruption and elemental catalyst synergies.",
    highlights: [
      "Dynamic initiative turn timeline with interrupt actions",
      "Elemental Catalyst chains: Astral, Pyre, Glacial, Zephyr",
      "Sanctuary Forge celestial relic recipe expansion (+12 items)",
      "Performance optimization for VFX with silky 60fps frame timing",
    ],
  },
  {
    version: "v0.8.2",
    codename: "Interactive Prologue & Cloud Sync",
    date: "August 2026",
    badge: "Public Milestone",
    statusColor: "emerald",
    description:
      "Deployment of the WhatsApp Bot prelude quest, enabling players to play prologue decisions on mobile.",
    highlights: [
      "Interactive story decision engine over WhatsApp Business Webhooks",
      "Cloud state persistence with unique player phone identifier",
      "Companion trust system debut with dynamic dialogue reactions",
      "Early-bird exclusive 'Starlight Sovereign Brooch' item code generation",
    ],
  },
  {
    version: "v0.7.0",
    codename: "Elyrith Haven & Celestial Prototype",
    date: "July 2026",
    badge: "Alpha Demo",
    statusColor: "gray",
    description:
      "Initial sandbox build introducing the celestial sanctuary haven, dialogue backlog, and relic synthesis.",
    highlights: [
      "Grid-based synthesis catalyst placement engine",
      "Atmospheric sanctuary interior rendering with dynamic lighting",
      "Original background music drafts by ShirayukinoComp sound circle",
    ],
  },
];

export default function EditionsPage() {
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
              href="/"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5"
            >
              <IoArrowBackOutline size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">
              Versi Pembaruan & Patch Notes
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
                <IoGitCommitOutline className="text-sm text-[#142d55] dark:text-[#E5BA68] shrink-0" />
                <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                  CHANGELOG & RELEASE ROADMAP
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
                Versi Pembaruan & Patch Notes
              </h1>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                Ikuti rekam jejak pengembangan 『星海の白雪と蒼穹の聖域』 dari prototipe awal hingga rilis penuh ke Steam. Seluruh changelog terverifikasi oleh lingkaran ShirayukinoComp.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456] text-xs font-mono text-[#142d55] dark:text-[#8ab4f8] shrink-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-black dark:text-white font-semibold">Versi Terkini:</span>
              <span className="text-[#142d55] dark:text-[#E5BA68]">v0.9.4 Beta</span>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-8 pt-6 border-t border-[#e7e3df] dark:border-[#1a2840] grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3.5 rounded-xl bg-[#f8f5f2] dark:bg-[#0c1524] border border-[#e7e3df] dark:border-[#1a2840]">
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase">
                <IoTimeOutline size={13} />
                <span>Target Rilis</span>
              </div>
              <p className="text-sm font-semibold text-black dark:text-white mt-1">Q4 2026</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f5f2] dark:bg-[#0c1524] border border-[#e7e3df] dark:border-[#1a2840]">
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase">
                <IoSparklesOutline size={13} />
                <span>Build Status</span>
              </div>
              <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">Closed Beta</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f5f2] dark:bg-[#0c1524] border border-[#e7e3df] dark:border-[#1a2840]">
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase">
                <IoHardwareChipOutline size={13} />
                <span>Platform</span>
              </div>
              <p className="text-sm font-semibold text-black dark:text-white mt-1">PC / Steam + WA</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[#f8f5f2] dark:bg-[#0c1524] border border-[#e7e3df] dark:border-[#1a2840]">
              <div className="flex items-center gap-1.5 text-gray-400 text-[10px] uppercase">
                <IoLayersOutline size={13} />
                <span>Patch Entries</span>
              </div>
              <p className="text-sm font-semibold text-[#142d55] dark:text-[#E5BA68] mt-1">4 Milestones</p>
            </div>
          </div>
        </div>
      </div>

      {/* Version Updates List */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="space-y-6 sm:space-y-8">
            {VERSION_UPDATES.map((ver, vIdx) => (
              <div
                key={vIdx}
                className="rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-6 sm:p-8 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="font-mono text-xl sm:text-2xl font-bold text-black dark:text-white">
                      {ver.version}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-[#142d55] dark:text-[#E5BA68]">
                      — {ver.codename}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-white dark:bg-[#15233c] text-gray-600 dark:text-gray-300 border border-[#e7e3df] dark:border-[#1e3456]">
                      {ver.date}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-semibold uppercase tracking-wider ${
                        ver.badge.includes("Latest")
                          ? "bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e]"
                          : ver.badge.includes("Upcoming")
                          ? "bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                          : "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                      }`}
                    >
                      {ver.badge}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-gray-600 dark:text-gray-300 mb-5">
                  {ver.description}
                </p>

                <div className="pt-4 border-t border-[#e2ddd7] dark:border-[#192b45]">
                  <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68] mb-3 flex items-center gap-1.5">
                    <IoSparklesOutline />
                    <span>Sorotan Pembaruan (Patch Highlights)</span>
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-[13px] text-gray-600 dark:text-gray-300">
                    {ver.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <IoCheckmarkCircle className="text-[#142d55] dark:text-[#E5BA68] shrink-0 mt-0.5 text-sm" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp Bot Prologue Callout */}
          <div className="mt-12 sm:mt-16 rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-7 sm:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                ✦ WHATSAPP QUEST ACTIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1">
                Uji Coba Bab Pembuka Sekarang
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                Nikmati gameplay naratif visual novel dan klaim item eksklusif langsung melalui WhatsApp Bot sebelum rilis resmi di Steam.
              </p>
            </div>

            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-5 sm:px-6 py-3 sm:py-3.5 font-mono text-xs font-semibold uppercase tracking-wider transition-transform active:scale-95 shadow-md shrink-0"
            >
              <IoLogoWhatsapp size={16} />
              <span>Mainkan di WhatsApp</span>
              <HiArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
