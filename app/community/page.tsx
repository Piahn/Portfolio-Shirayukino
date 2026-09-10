import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoLogoDiscord,
  IoGameControllerOutline,
  IoColorPaletteOutline,
  IoCheckmarkCircle,
  IoSparklesOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Community & Guild Sanctuary | ShirayukinoComp",
  description:
    "Join the official ShirayukinoComp community circle. Discover our Discord Sanctuary, WhatsApp bot guild, Steam community discussions, playtest programs, and community milestones.",
};

const COMMUNITY_CHANNELS = [
  {
    id: "discord",
    title: "Official Discord Sanctuary",
    category: "Real-time Hub & Dev AMA",
    badge: "Most Active",
    icon: IoLogoDiscord,
    description:
      "Our main guild hall for visual novel lore theories, battle strategy breakdowns, live dev AMAs, voice playtest streams, and circle announcements.",
    highlights: [
      "Direct discussions with scenario writers and composer",
      "Exclusive Closed Beta playtest roles",
      "Dedicated lore spoilers & theorycrafting rooms",
      "Fan art showcase and soundtrack listening parties",
    ],
    actionLabel: "Join Discord Server",
    actionUrl: "https://discord.gg",
    featured: true,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Adventurer Guild",
    category: "Mobile Bot & Prologue Quests",
    badge: "Live Now",
    icon: IoLogoWhatsapp,
    description:
      "Stay connected on mobile. Receive interactive prologue quest drops, puzzle hints, patch alerts, and secret redemption codes directly on WhatsApp.",
    highlights: [
      "Instant interactive story choices via WhatsApp Bot",
      "Secret early-bird item code drops for Steam launch",
      "Daily hideout dialogue fragments & character lore",
      "Direct feedback line for prologue playtesters",
    ],
    actionLabel: "Enter WhatsApp Guild",
    actionUrl: WHATSAPP_BOT_URL,
    featured: false,
  },
  {
    id: "steam",
    title: "Steam Community & Discussions",
    category: "PC Hub & Playtests",
    badge: "Coming Soon",
    icon: IoGameControllerOutline,
    description:
      "The official Steam store page and community discussions are currently in preparation for the PC release. Play the interactive prologue now on WhatsApp while Steam hub verification is underway.",
    highlights: [
      "Steam store page & community hub in final preparation",
      "Hardware benchmark and Steam Deck compatibility threads",
      "Community gameplay guides and boss fight strategies",
      "Steam community badges and trading card previews",
    ],
    actionLabel: "Coming Soon",
    actionUrl: "#",
    isComingSoon: true,
    featured: false,
  },
  {
    id: "atelier",
    title: "Creative Atelier & Fan Circle",
    category: "Art, Fiction & OST",
    badge: "Spotlight",
    icon: IoColorPaletteOutline,
    description:
      "A dedicated showcase celebrating fan artists, musicians, cosplay creators, and translation contributors from across the globe.",
    highlights: [
      "Monthly featured fan art gallery in devlog articles",
      "High-resolution official character reference sheets",
      "OST remix and arrangement permission guidelines",
      "Community recognition rewards & physical merch drops",
    ],
    actionLabel: "Submit Fan Creation",
    actionUrl: "mailto:contact@shirayukinocomp.com",
    featured: false,
  },
];

const COMMUNITY_MILESTONES = [
  {
    tier: "Tier 1",
    target: "5,000 Prologue Players",
    status: "UNLOCKED",
    completed: true,
    reward: "Digital Wallpaper Pack & Chapter 1 Soundtrack Stems released to community.",
  },
  {
    tier: "Tier 2",
    target: "15,000 Adventurers",
    status: "78% COMPLETED",
    completed: false,
    reward:
      "Exclusive In-Game Celestial Relic 'Starlight Brooch' code redeemed via WhatsApp Bot.",
  },
  {
    tier: "Tier 3",
    target: "30,000 Steam Wishlists",
    status: "IN PROGRESS",
    completed: false,
    reward: "Unlocks 5 additional orchestral choral tracks inside the Sound Vault.",
  },
  {
    tier: "Tier 4",
    target: "50,000 Circle Members",
    status: "STRETCH GOAL",
    completed: false,
    reward:
      "Complimentary bonus side-story chapter DLC: 'Echoes of the Underground Sanctuary'.",
  },
];

const GUIDELINES = [
  {
    title: "Respectful Circle Conduct",
    description:
      "Foster a warm, welcoming environment for players of all backgrounds. Toxicity, harassment, or elitism has zero tolerance in our hideout.",
  },
  {
    title: "Clear Spoiler Tagging",
    description:
      "Always tag visual novel story revelations, end-game celestial boss identities, and secret endings with appropriate spoiler warnings.",
  },
  {
    title: "Constructive Beta Feedback",
    description:
      "When testing combat builds or WhatsApp bot scenarios, detail reproducible steps, device models, and balance impressions constructively.",
  },
  {
    title: "Support Creative Works",
    description:
      "Credit artists and creators when sharing fan works. Non-commercial derivative art, cosplay, and music covers are wholeheartedly celebrated!",
  },
];

export default function CommunityPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden transition-colors duration-300">
      {/* Top Header & Breadcrumb */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-14 border-b border-[#e7e3df] dark:border-[#1a2840]">
        <div className="mx-auto max-w-[1220px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8f8b86] dark:text-[#7f93b0] mb-5 sm:mb-6">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5">
              <IoArrowBackOutline size={13} />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">Community Hub</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                CIRCLE SANCTUARY & COMMUNITY
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
              Connect with fellow adventurers
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
              Step inside the secret hideout circle. Join our active community to discuss visual novel lore, test early turn-based combat builds, claim WhatsApp bot secret item codes, and vote on upcoming development directions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Channel Cards Grid */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8 pb-4 border-b border-[#e7e3df] dark:border-[#1a2840]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0]">
                Official Channels
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-black dark:text-white mt-1 break-words">
                Where our circle gathers
              </h2>
            </div>
            <span className="hidden sm:block font-mono text-xs text-gray-500 dark:text-gray-400 shrink-0">
              4 Active Platforms
            </span>
          </div>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {COMMUNITY_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.id}
                  className={`flex flex-col justify-between rounded-[20px] sm:rounded-[22px] border p-4 sm:p-6 md:p-8 transition-all duration-300 min-w-0 max-w-full overflow-hidden ${
                    channel.featured
                      ? "border-[#142d55] dark:border-[#E5BA68]/50 bg-gradient-to-br from-[#f8faff] to-[#f0f4fc] dark:from-[#0c1628] dark:to-[#08101e] shadow-md dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                      : "border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40"
                  }`}
                >
                  <div>
                    {/* Top Meta Row: Icon + Category on Left, Badge on Right */}
                    <div className="flex items-center justify-between gap-2.5 mb-3.5">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white dark:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] shadow-sm text-base sm:text-lg text-[#142d55] dark:text-[#E5BA68] shrink-0">
                          <Icon />
                        </div>
                        <p className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400 truncate">
                          {channel.category}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider ${
                          channel.isComingSoon
                            ? "bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800/60"
                            : "bg-white dark:bg-[#152540] border border-[#e7e3df] dark:border-[#1e3456] text-[#142d55] dark:text-[#E5BA68]"
                        }`}
                      >
                        {channel.badge}
                      </span>
                    </div>

                    {/* Channel Title: Full Card Width, Natural Word Wrapping without awkward syllable cuts */}
                    <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white leading-snug break-normal tracking-tight">
                      {channel.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300 mt-3 break-normal">
                      {channel.description}
                    </p>

                    <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-[#e2ddd7] dark:border-[#192b45] space-y-1.5 sm:space-y-2">
                      <p className="font-mono text-[10px] sm:text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68]">
                        ✦ Community Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {channel.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300 min-w-0">
                            <IoCheckmarkCircle className="text-[#142d55] dark:text-[#E5BA68] shrink-0 mt-0.5 text-sm" />
                            <span className="break-words">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-7 pt-3 sm:pt-4">
                    {channel.isComingSoon ? (
                      <button
                        type="button"
                        disabled
                        className="inline-flex w-full items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-[#111d33] text-gray-400 dark:text-gray-500 border border-[#e2ddd7] dark:border-[#1e3456] cursor-not-allowed opacity-80"
                      >
                        <span>Coming Soon</span>
                      </button>
                    ) : (
                      <a
                        href={channel.actionUrl}
                        target={channel.actionUrl.startsWith("http") ? "_blank" : undefined}
                        rel={channel.actionUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`inline-flex w-full items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                          channel.featured
                            ? "bg-[#142d55] hover:bg-[#0c1e3a] text-white dark:bg-[#E5BA68] dark:hover:bg-[#f0c878] dark:text-[#08101e] shadow-sm"
                            : "bg-white hover:bg-gray-100 text-[#142d55] dark:bg-[#121f36] dark:hover:bg-[#182b4a] dark:text-white border border-[#e7e3df] dark:border-[#1e3456]"
                        }`}
                      >
                        <span className="truncate">{channel.actionLabel}</span>
                        <HiArrowUpRight size={14} className="shrink-0" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Community Milestones / Stretch Goals */}
          <div className="mt-12 sm:mt-16 rounded-[20px] sm:rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-4 sm:p-7 md:p-10 min-w-0 max-w-full overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#e7e3df] dark:border-[#1a2840]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold flex items-center gap-1.5">
                  <IoSparklesOutline className="text-sm" />
                  SHARED REWARDS ROADMAP
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black dark:text-white mt-1 break-words">
                  Community Milestones & Stretch Goals
                </h3>
              </div>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 max-w-sm">
                Unlock exclusive digital soundtracks, secret relic codes, and DLC side stories as our circle expands.
              </p>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {COMMUNITY_MILESTONES.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between rounded-[16px] sm:rounded-[18px] p-4 sm:p-5 border transition-all min-w-0 max-w-full overflow-hidden ${
                    m.completed
                      ? "border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20"
                      : "border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#08101e]"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-2 font-mono text-[10px]">
                      <span className="font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        {m.tier}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider text-[9.5px] ${
                          m.completed
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300"
                            : "bg-[#edf3fc] text-[#142d55] dark:bg-[#142542] dark:text-[#8ab4f8]"
                        }`}
                      >
                        {m.status}
                      </span>
                    </div>

                    <h4 className="font-semibold text-sm sm:text-base text-black dark:text-white break-words">
                      {m.target}
                    </h4>

                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                      {m.reward}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#e7e3df] dark:border-[#1a2840] flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-gray-400">
                    <IoShieldCheckmarkOutline className={`shrink-0 ${m.completed ? "text-emerald-500" : "text-gray-400"}`} />
                    <span className="truncate">{m.completed ? "Unlocked for all players" : "Next goal unlock"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="mt-12 sm:mt-14">
            <div className="mb-5 sm:mb-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0]">
                Circle Etiquette
              </p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black dark:text-white mt-1 break-words">
                Sanctuary Guidelines & Spoiler Code
              </h3>
            </div>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              {GUIDELINES.map((g, i) => (
                <div
                  key={i}
                  className="rounded-[16px] sm:rounded-[18px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-4 sm:p-5 md:p-6 min-w-0 max-w-full overflow-hidden"
                >
                  <div className="flex items-center gap-2.5 font-mono text-xs font-semibold text-[#142d55] dark:text-[#E5BA68] mb-2">
                    <span className="w-5 h-5 rounded-full bg-white dark:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] flex items-center justify-center text-[10px] shrink-0">
                      {i + 1}
                    </span>
                    <span className="break-words">{g.title}</span>
                  </div>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-gray-600 dark:text-gray-300 break-words">
                    {g.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom WhatsApp CTA Banner */}
          <div className="mt-12 sm:mt-14 rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-5 sm:p-7 md:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md min-w-0 max-w-full overflow-hidden">
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                <span>✦ INTERACTIVE GUILD QUEST READY</span>
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1.5 break-words">
                Ready to play the prologue on WhatsApp?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl break-words">
                Start your journey directly in WhatsApp, explore the first hideout puzzles, and receive your secret community item code for the Steam release.
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group cursor-pointer"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>Launch WhatsApp Bot</span>
              <HiArrowUpRight size={14} className="shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
