import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoCheckmarkCircle,
  IoSparklesOutline,
  IoLogoWhatsapp,
  IoDiscOutline,
  IoCubeOutline,
  IoShieldCheckmarkOutline,
  IoGitCommitOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Game Editions & Version Updates | ShirayukinoComp",
  description:
    "Discover the official release editions, physical packages, and version update history (versi pembaruan & patch notes) for 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & the Azure Sanctuary).",
};

const EDITIONS = [
  {
    id: "standard",
    name: "Standard Digital Edition",
    tag: "CORE CAMPAIGN",
    price: "$29.99",
    target: "Full PC / Steam Release",
    badge: "Digital Key",
    featured: false,
    description:
      "The complete visual novel & turn-based tactical JRPG experience. Transfer your WhatsApp Bot prologue choices and secret item code straight into the game.",
    deliverables: [
      "Full 35+ Hour Story Campaign on PC (Steam)",
      "All 8 Playable Heroes and Story Branches",
      "WhatsApp Bot Prologue Progress & Item Transfer",
      "Digital High-Resolution Desktop & Mobile Wallpaper Pack",
      "Full Steam Achievements & Cloud Save Support",
    ],
    ctaLabel: "Coming Soon (In Review)",
    ctaDisabled: true,
  },
  {
    id: "deluxe",
    name: "Deluxe Fan Pack",
    tag: "BEST FOR STORY & MUSIC FANS",
    price: "$49.99",
    target: "Digital Collector's Suite",
    badge: "Most Popular",
    featured: true,
    description:
      "The definitive digital experience. Includes the full game, the complete 45-track orchestral soundtrack vault, and a digital concept artbook.",
    deliverables: [
      "Everything in Standard Digital Edition",
      "Complete 45-Track Original Soundtrack (Lossless FLAC & MP3)",
      "140-Page Digital Artbook & Scenario Commentary",
      "Exclusive In-Game Celestial Relic: 'Starlight Sovereign Brooch'",
      "Special Azure Sanctuary Dynamic Wallpaper Suite",
    ],
    ctaLabel: "Coming Soon (In Review)",
    ctaDisabled: true,
  },
  {
    id: "collector",
    name: "Collector's Physical Sanctuary Box",
    tag: "LIMITED CIRCLE RUN",
    price: "$89.99",
    target: "Limited Physical Production",
    badge: "Limited Run",
    featured: false,
    description:
      "A tangible tribute crafted with love. Features a physical 3-CD digipak OST, acrylic hero standees, and a heavy metal replica of the sanctuary celestial key.",
    deliverables: [
      "Everything in Deluxe Fan Pack (Steam Key + Digital OST)",
      "Physical 3-Disc Digipak Soundtrack with Composer Liner Notes",
      "Complete 8-Piece Acrylic Hero Standee Set",
      "Heavy Zinc-Alloy Replica of the 'Sanctuary Celestial Key'",
      "Silk-Finished Fabric Celestial World Map (A2 Size)",
      "Numbered Collector's Box with Gold Foil Embossing",
    ],
    ctaLabel: "Join Circle Waitlist",
    ctaDisabled: false,
    ctaUrl: "/community",
  },
];

const COMPARISON_ROWS = [
  { feature: "Full 35+ Hour RPG Campaign", standard: true, deluxe: true, collector: true },
  { feature: "WhatsApp Bot Prologue Code Transfer", standard: true, deluxe: true, collector: true },
  { feature: "45-Track Lossless Digital OST Vault", standard: false, deluxe: true, collector: true },
  { feature: "140-Page Digital Artbook & Scenario Lore", standard: false, deluxe: true, collector: true },
  { feature: "Exclusive In-Game Relic 'Starlight Sovereign Brooch'", standard: false, deluxe: true, collector: true },
  { feature: "Physical 3-CD Digipak Soundtrack Box", standard: false, deluxe: false, collector: true },
  { feature: "8-Piece Hero Acrylic Standee Set", standard: false, deluxe: false, collector: true },
  { feature: "Zinc-Alloy Sanctuary Key Replica", standard: false, deluxe: false, collector: true },
  { feature: "Fabric Celestial World Map", standard: false, deluxe: false, collector: true },
];

const VERSION_UPDATES = [
  {
    version: "v1.0.0",
    codename: "Celestial Sea Awakening",
    date: "Target Q4 2026",
    badge: "Upcoming Launch",
    statusColor: "blue",
    description: "The official worldwide release on PC / Steam with full narrative campaign, complete 45-track OST, and dual voice tracks.",
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
    description: "Major battle system tuning introducing timeline queue disruption and elemental catalyst synergies.",
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
    description: "Deployment of the WhatsApp Bot prelude quest, enabling players to play prologue decisions on mobile.",
    highlights: [
      "Interactive story decision engine over WhatsApp Business Webhooks",
      "Cloud state persistence with unique player phone identifier",
      "Companion trust system debut with dynamic dialogue reactions",
      "Early-bird exclusive 'Starlight Sovereign Brooch' item code generation",
    ],
  },
  {
    version: "v0.7.0",
    codename: "Azure Sanctuary & Celestial Haven Prototype",
    date: "July 2026",
    badge: "Alpha Demo",
    statusColor: "gray",
    description: "Initial sandbox build introducing the celestial sanctuary haven, dialogue backlog, and relic synthesis.",
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
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-5 sm:mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
              <IoArrowBackOutline size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">Editions & Versi Pembaruan</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
                <IoCubeOutline className="text-sm text-[#142d55] dark:text-[#E5BA68] shrink-0" />
                <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                  RELEASE TIERS & VERSI PEMBARUAN
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
                Release Editions & Version Roadmap
              </h1>
              <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                Temukan paket edisi rilis resmi dan log versi pembaruan (patch notes) untuk 『星海の白雪と蒼穹の聖域』. Nikmati petualangan orisinal kami, soundtrack vault, hingga pembaruan sistem berkala.
              </p>
            </div>

            {/* Quick Filter / Jump Pills */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs shrink-0">
              <a
                href="#packages"
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456] text-black dark:text-white hover:border-[#142d55] dark:hover:border-[#E5BA68] transition-colors"
              >
                📦 Edisi Rilis
              </a>
              <a
                href="#changelog"
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456] text-black dark:text-white hover:border-[#142d55] dark:hover:border-[#E5BA68] transition-colors"
              >
                ⏱️ Versi Pembaruan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Editions Cards Grid */}
      <div id="packages" className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-5 sm:gap-6 lg:grid-cols-3">
            {EDITIONS.map((ed) => (
              <div
                key={ed.id}
                className={`flex flex-col justify-between rounded-[20px] sm:rounded-[22px] border p-5 sm:p-7 md:p-8 transition-all duration-300 min-w-0 max-w-full overflow-hidden ${
                  ed.featured
                    ? "border-[#142d55] dark:border-[#E5BA68] bg-gradient-to-b from-[#f8faff] to-[#edf3fc] dark:from-[#0f1d33] dark:to-[#08101e] shadow-lg dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] lg:-translate-y-2"
                    : "border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68]">
                      {ed.tag}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider ${
                        ed.featured
                          ? "bg-[#142d55] text-white dark:bg-[#E5BA68] dark:text-[#08101e]"
                          : "bg-white dark:bg-[#15233c] text-gray-700 dark:text-gray-300 border border-[#e7e3df] dark:border-[#1e3456]"
                      }`}
                    >
                      {ed.badge}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
                    {ed.name}
                  </h2>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-semibold font-mono text-black dark:text-white">
                      {ed.price}
                    </span>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      / {ed.target}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300">
                    {ed.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#e2ddd7] dark:border-[#192b45] space-y-2.5">
                    <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68]">
                      ✦ Included Contents
                    </p>
                    <ul className="space-y-2">
                      {ed.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600 dark:text-gray-300">
                          <IoCheckmarkCircle className="text-[#142d55] dark:text-[#E5BA68] shrink-0 mt-0.5 text-sm" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  {ed.ctaDisabled ? (
                    <button
                      type="button"
                      disabled
                      className="w-full py-3.5 px-5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-[#111c30] text-gray-400 dark:text-gray-500 border border-[#e2ddd7] dark:border-[#1e3456] cursor-not-allowed opacity-80"
                    >
                      {ed.ctaLabel}
                    </button>
                  ) : (
                    <Link
                      href={ed.ctaUrl || "/community"}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-[#142d55] hover:bg-[#0c1e3a] text-white dark:bg-[#E5BA68] dark:hover:bg-[#f0c878] dark:text-[#08101e] shadow-sm transition-all"
                    >
                      <span>{ed.ctaLabel}</span>
                      <HiArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className="mt-16 rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-6 sm:p-10">
            <div className="mb-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold flex items-center gap-1.5">
                <IoSparklesOutline />
                PACKAGE MATRIX
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mt-1">
                Compare Included Features
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-[#e7e3df] dark:border-[#1a2840] text-gray-500 dark:text-gray-400">
                    <th className="py-3 pr-4 font-semibold uppercase tracking-wider">Features & Deliverables</th>
                    <th className="py-3 px-3 text-center font-semibold uppercase tracking-wider">Standard</th>
                    <th className="py-3 px-3 text-center font-semibold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68]">Deluxe</th>
                    <th className="py-3 px-3 text-center font-semibold uppercase tracking-wider">Collector's</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e3df] dark:divide-[#1a2840]">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <td className="py-3.5 pr-4 text-black dark:text-white font-sans text-xs sm:text-[13px]">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center">
                        {row.standard ? <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span> : <span className="text-gray-400 dark:text-gray-600">—</span>}
                      </td>
                      <td className="py-3.5 px-3 text-center font-semibold">
                        {row.deluxe ? <span className="text-[#142d55] dark:text-[#E5BA68] font-bold">✓</span> : <span className="text-gray-400 dark:text-gray-600">—</span>}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.collector ? <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span> : <span className="text-gray-400 dark:text-gray-600">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Version Updates & Changelog Section (Versi Pembaruan) */}
          <div id="changelog" className="mt-16 pt-10 border-t border-[#e7e3df] dark:border-[#1a2840]">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold flex items-center gap-1.5">
                  <IoGitCommitOutline className="text-sm" />
                  LOG VERSI PEMBARUAN (ROADMAP & PATCH NOTES)
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white mt-1">
                  Pembaruan Versi & Riwayat Rilis
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                  Ikuti rekam jejak pengembangan dari prototipe sanctum awal hingga rilis penuh ke Steam. Seluruh changelog terverifikasi oleh lingkaran ShirayukinoComp.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] text-xs font-mono text-[#142d55] dark:text-[#8ab4f8] shrink-0">
                <IoTimeOutline size={14} />
                <span>Versi Terkini: v0.9.4 Beta</span>
              </div>
            </div>

            <div className="space-y-6">
              {VERSION_UPDATES.map((ver, vIdx) => (
                <div
                  key={vIdx}
                  className="rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-6 sm:p-8 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg sm:text-xl font-bold text-black dark:text-white">
                        {ver.version}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#142d55] dark:text-[#E5BA68]">
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

                  <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300 mb-5">
                    {ver.description}
                  </p>

                  <div className="pt-4 border-t border-[#e2ddd7] dark:border-[#192b45]">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68] mb-2.5">
                      ✦ Sorotan Pembaruan (Patch Highlights)
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs text-gray-600 dark:text-gray-300">
                      {ver.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <span className="text-[#142d55] dark:text-[#E5BA68] mt-0.5 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Bot Prologue Callout */}
          <div className="mt-14 rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-7 sm:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md">
            <div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                ✦ WHATSAPP QUEST ACTIVE
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold mt-1">
                Claim your early-bird item code before launch
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl">
                Play the WhatsApp interactive prologue to receive an exclusive celestial item code valid across all editions on PC release day.
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>Claim on WhatsApp</span>
              <HiArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
