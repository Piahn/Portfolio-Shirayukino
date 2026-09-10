import { IoCheckmarkOutline } from "react-icons/io5";

const items = [
  {
    title: "Deep Multi-Route Narrative",
    description:
      "Every dialogue choice echoes through the storyline. Experience branching outcomes, intimate character bonds, and uncover the forgotten truth of the Queen of Ever Darkness.",
  },
  {
    title: "Tactical Party Combat",
    description:
      "Master strategic turn-based battles featuring elemental catalysts, party formation bonuses, and celestial awakening ultimate arts.",
  },
  {
    title: "Relic Synthesis & The Hideout",
    description:
      "Gather rare star crystals and botanical flora across the wilderness to synthesize enchanted gear, battle remedies, and atelier enhancements.",
  },
  {
    title: "Handcrafted Audio-Visual Harmony",
    description:
      "Immerse yourself in lush hand-painted background art and over 45 original orchestral tracks recorded with live acoustic instruments.",
  },
];

export function WhySection() {
  return (
    <section id="world" data-section="world" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 lg:pr-6">
            <div className="pb-10 sm:pb-12 border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
                Gameplay & World
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-black dark:text-white max-w-[480px] transition-colors">
                A story JRPG crafted with wonder and tactical depth
              </h2>
            </div>
            <ul className="flex flex-col">
              {items.map((item, index) => (
                <li
                  key={item.title}
                  className={`flex gap-4 py-6 sm:py-7 ${
                    index < items.length - 1 ? "border-b border-[#e7e3df] dark:border-[#1a2840]" : ""
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#142d55] bg-[#edf3fc] dark:border-[#E5BA68] dark:bg-[#111e32] transition-colors">
                      <IoCheckmarkOutline size={13} className="text-[#142d55] dark:text-[#E5BA68] stroke-[2.5]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-black dark:text-white leading-snug transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.55] text-gray-600 dark:text-gray-300 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column with Visual Art */}
          <div className="lg:w-1/2">
            <div className="group relative overflow-hidden rounded-[1.5rem] aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-full lg:min-h-[600px] flex flex-col justify-end p-6 sm:p-9 border border-[#2b4c80] dark:border-[#1e3b68] shadow-md dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all">
              {/* Background Key Visual Artwork */}
              <img
                src="/celestial_whale.jpg"
                alt="常闇の女王と秘密の隠れ家 - Celestial Whale & Sky Sanctuary"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Multi-layered cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060c17]/95 via-[#060c17]/40 to-black/15 pointer-events-none" />

              {/* Floating Top Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10.5px] font-mono uppercase tracking-[0.14em]">
                  <span className="w-2 h-2 rounded-full bg-[#E5BA68] animate-pulse" />
                  <span>KEY VISUAL • CELESTIAL SEA & WHALE</span>
                </span>
              </div>

              {/* Bottom Content Card with Glassmorphism */}
              <div className="relative z-10 rounded-2xl bg-black/50 backdrop-blur-md p-6 sm:p-7 border border-white/15 text-white transition-colors">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E5BA68]/20 border border-[#E5BA68]/50 flex items-center justify-center shrink-0">
                    <span className="text-sm text-[#E5BA68]">✦</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif italic text-white tracking-wide">
                    常闇の女王と秘密の隠れ家
                  </h4>
                </div>

                <p className="text-xs sm:text-[13px] font-mono text-gray-200 leading-relaxed italic">
                  &ldquo;Beyond the clouds where whales drift in the celestial sea, an ancient sanctuary awaits the brave.&rdquo;
                </p>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E5BA68]/50 bg-[#E5BA68]/15 text-[10.5px] font-mono text-[#E5BA68] font-semibold">
                    <span>Atelier & Tactical Battle Demo</span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-300">
                    ShirayukinoComp Studio
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
