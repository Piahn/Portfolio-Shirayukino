"use client";

import { useState } from "react";

const team = [
  {
    name: "Yukino\nShiraishi",
    role: "Creative Director & Scenario",
    image: "/jack.png",
    bio: "Lead writer and worldbuilder behind '常闇の女王と秘密の隠れ家'. Oversees branching storyline paths and character arcs.",
    experience: "8+ years in fantasy visual novel writing and narrative design.",
  },
  {
    name: "Ren\nKanzaki",
    role: "Battle & Gameplay Engineer",
    image: "/giovan.png",
    bio: "Architect of the turn-based tactical combat engine, catalyst elemental systems, and atelier synthesis crafting.",
    experience: "6+ years in indie JRPG programming and multi-platform engine optimization.",
  },
  {
    name: "Aoi\nMinase",
    role: "Lead Illustrator & Art Director",
    image: "/sofia.png",
    bio: "Character concept designer, event CG illustrator, and scenic backdrop supervisor for the celestial floating isles.",
    experience: "7+ years in circle visual arts, character design, and promotional illustrations.",
  },
];

export function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] py-16 pb-20 sm:pb-24 transition-colors duration-300">
      <div className="px-6 pt-[18px] sm:px-10 lg:px-[22px]">
        <div className="mx-auto max-w-[1226px]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
                Production Circle
              </p>
              <h2 className="text-[28px] font-semibold leading-tight tracking-[-0.045em] text-black dark:text-white sm:text-[30px] transition-colors">
                The creators behind ShirayukinoComp
              </h2>
            </div>
          </div>

          <div className="mt-[50px] grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <article key={member.name} className="group min-w-0">
                  <div className="mb-6 border-t border-[#e7e3df] dark:border-[#1a2840] pt-4 transition-colors">
                    <h3 className="whitespace-pre-line text-[22px] font-semibold leading-[0.95] tracking-[-0.045em] text-black dark:text-white sm:text-[24px] transition-colors">
                      {member.name}
                    </h3>
                    <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                      {member.role}
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[19px] bg-gray-100 dark:bg-[#0c1524] border border-transparent dark:border-[#1a2840] transition-colors">
                    <img
                      src={member.image}
                      alt={`${member.name.replace("\n", " ")} portrait`}
                      className="aspect-[0.86] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                    />

                    <button
                      onClick={() => toggleExpand(index)}
                      aria-label={`Toggle info for ${member.name.replace("\n", " ")}`}
                      className="absolute right-3.5 top-3.5 z-10 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white dark:bg-[#121f35] text-[17px] font-medium leading-none text-black dark:text-[#E5BA68] border border-transparent dark:border-[#263e63] transition duration-300 hover:rotate-90 hover:bg-black hover:text-white dark:hover:bg-[#1c3256] shadow-sm"
                    >
                      {isExpanded ? "✕" : "+"}
                    </button>

                    {/* Expandable bio overlay */}
                    <div
                      className={`absolute inset-0 z-20 flex flex-col justify-between rounded-[19px] bg-[radial-gradient(circle_at_78%_14%,rgba(255,255,255,0.13),transparent_25%),linear-gradient(135deg,#a09891,#807263)] dark:bg-[radial-gradient(circle_at_78%_14%,rgba(255,255,255,0.08),transparent_25%),linear-gradient(135deg,#122035,#09101c)] px-6 py-7 text-black dark:text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isExpanded
                          ? "opacity-100 pointer-events-auto translate-y-0"
                          : "opacity-0 pointer-events-none translate-y-5"
                      }`}
                    >
                      <dl className="space-y-5 pr-7">
                        <div>
                          <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/65 dark:text-[#E5BA68]">
                            Role Focus
                          </dt>
                          <dd className="mt-1 text-[13px] leading-snug text-black dark:text-gray-200">
                            {member.bio}
                          </dd>
                        </div>
                        <div>
                          <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/65 dark:text-[#E5BA68]">
                            Background
                          </dt>
                          <dd className="mt-1 text-[13px] leading-snug text-black dark:text-gray-200">
                            {member.experience}
                          </dd>
                        </div>
                      </dl>

                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-left font-mono text-[10px] uppercase tracking-wider text-black dark:text-[#E5BA68] underline"
                      >
                        Close details
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
