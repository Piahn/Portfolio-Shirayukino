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

          {/* Right Column with Image */}
          <div className="lg:w-1/2">
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:h-full lg:min-h-[600px] bg-gradient-to-br from-[#122b52] to-[#081326] dark:from-[#0d182b] dark:to-[#050b14] flex items-center justify-center p-8 border border-[#2b4c80] dark:border-[#1e3b68] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
              <div className="text-center max-w-[420px] text-white">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="text-2xl text-[#E5BA68]">✦</span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-serif italic text-white mb-3">
                  常闇の女王と秘密の隠れ家
                </h4>
                <p className="text-sm font-mono text-gray-300 leading-relaxed">
                  "Beyond the clouds where whales drift in the celestial sea, an ancient sanctuary awaits the brave."
                </p>
                <div className="mt-8 inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#E5BA68]/40 bg-[#E5BA68]/10 text-xs font-mono text-[#E5BA68]">
                  <span>Atelier & Tactical Battle Demo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
