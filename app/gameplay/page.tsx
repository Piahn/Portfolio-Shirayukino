import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoArrowBackOutline,
  IoLogoWhatsapp,
  IoSparklesOutline,
  IoFlashOutline,
  IoCompassOutline,
  IoFlaskOutline,
  IoGitBranchOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "@/components/constants";

export const metadata: Metadata = {
  title: "Gameplay Overview | ShirayukinoComp",
  description:
    "Explore the combat systems, visual novel branching narrative, and celestial relic synthesis of 『星海の白雪と蒼穹の聖域』 (The Celestial Snow & the Azure Sanctuary).",
};

const GAMEPLAY_PILLARS = [
  {
    icon: IoFlashOutline,
    tag: "COMBAT ENGINE",
    title: "Timeline-Driven Tactical Battles",
    description:
      "A strategic turn-based battle system featuring a dynamic initiative timeline. Manage Action Points (AP), stagger enemy defenses by exploiting elemental affinities, and unleash devastating Celestial Relic Bursts with your four-member active party.",
    features: [
      "Dynamic Turn-Order Timeline with queue disruption tactics",
      "Elemental Catalyst chains (Astral, Pyre, Glacial, Zephyr)",
      "Stagger & Break system for massive critical damage windows",
      "Over 40 unique character skills and cinematic group finishers",
    ],
  },
  {
    icon: IoGitBranchOutline,
    tag: "STORY & VISUAL NOVEL",
    title: "Branching Scenarios & Multiple Endings",
    description:
      "Experience high-stakes choices that determine the fate of the Sovereign of the Celestial Sea and your comrades. Every decision subtly influences companion trust levels, unlocking divergent story chapters and 4 distinct canonical endings.",
    features: [
      "Over 18 major narrative crossroads affecting entire regions",
      "Hero bond events and intimate sanctuary conversations",
      "Richly illustrated story CGs with cinematic scene transitions",
      "Integrated scenario log allowing replay of unlocked story branches",
    ],
  },
  {
    icon: IoFlaskOutline,
    tag: "RELIC SYNTHESIS",
    title: "The Celestial Forge & Sanctuary",
    description:
      "Beneath the floating islands lies your sanctuary. Gather celestial starlight motes, ancient fossils, and mineral catalysts from expeditions to brew potent combat tonics, forge relic accessories, and customize party gear.",
    features: [
      "Grid-based synthesis grid combining catalyst traits and elemental values",
      "Sanctuary upgrades that unlock advanced potion recipes and passive buffs",
      "Custom relic socketing allowing tailored character builds",
      "Cozy sanctuary soundtrack and ambient character interactions",
    ],
  },
  {
    icon: IoCompassOutline,
    tag: "WORLD & SKY VOYAGE",
    title: "The Celestial Sea & Sky Whales",
    description:
      "Take to the skies aboard celestial galleons. Navigate above the clouds to discover mythical floating islands, ancient sky temples, and colossal celestial whales that drift peacefully through the starry atmosphere.",
    features: [
      "Expansive world map spanning cloud archipelagos and sunken ruins",
      "Dynamic weather including starry auroras and celestial storms",
      "Hidden dungeon labyrinths harboring ancient relic bosses",
      "Rich environmental storytelling and localized mythologies",
    ],
  },
];

export default function GameplayOverviewPage() {
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
            <span className="text-[#142d55] dark:text-[#E5BA68] font-semibold">Gameplay Overview</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edf3fc] dark:bg-[#111c30] border border-[#cfe0f8] dark:border-[#1f304f] mb-3 transition-colors max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] animate-pulse shrink-0" />
              <span className="font-mono text-[10px] sm:text-[10.5px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase text-[#142d55] dark:text-[#8ab4f8] truncate">
                SYSTEMS & MECHANICS
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.9rem] leading-[1.1] font-semibold tracking-[-0.03em] text-black dark:text-white break-words">
              Tactical JRPG combat meets branching visual novel
            </h1>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed break-words">
              『星海の白雪と蒼穹の聖域』 fuses turn-based combat depth, cozy sanctuary relic crafting, and deep narrative exploration. Experience the opening chapter now on WhatsApp or prepare for the upcoming full Steam release.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Pillars Section */}
      <div className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-[1220px]">
          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {GAMEPLAY_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] sm:rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-5 sm:p-7 md:p-8 flex flex-col justify-between transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] min-w-0 max-w-full overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-white dark:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] flex items-center justify-center text-xl text-[#142d55] dark:text-[#E5BA68] shadow-sm">
                        <Icon />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#142d55] dark:text-[#E5BA68] font-semibold px-2.5 py-0.5 rounded-full bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        {pillar.tag}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white mb-3">
                      {pillar.title}
                    </h2>
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
                      {pillar.description}
                    </p>

                    <div className="pt-4 border-t border-[#e2ddd7] dark:border-[#192b45] space-y-2">
                      <p className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68]">
                        ✦ Core Features
                      </p>
                      <ul className="space-y-1.5">
                        {pillar.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300">
                            <span className="text-[#142d55] dark:text-[#E5BA68] mt-0.5">•</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* WhatsApp Interactive Prologue Banner */}
          <div className="mt-12 sm:mt-14 rounded-[20px] sm:rounded-[22px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] p-5 sm:p-7 md:p-9 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 border border-[#23457a] dark:border-[#1e3b68] shadow-md min-w-0 max-w-full overflow-hidden">
            <div className="min-w-0 flex-1">
              <span className="font-mono text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                <span>✦ PLAYABLE ON WHATSAPP TODAY</span>
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1.5 break-words">
                Test the prologue battle decisions right on WhatsApp
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/80 max-w-xl break-words">
                Experience the game's branching dialogue engine and unlock early secret items without downloading any client files.
              </p>
            </div>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition hover:bg-gray-100 dark:hover:bg-[#f0c878] shrink-0 shadow-sm group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>Launch Bot Prologue</span>
              <HiArrowUpRight size={14} className="shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
