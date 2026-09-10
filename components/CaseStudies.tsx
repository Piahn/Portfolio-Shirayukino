const cases = [
  {
    type: "Chapter I: Prologue",
    problem: "Awakening inside the overgrown ancient sanctuary with fragmented memories.",
    solution: "Master the first celestial catalyst relics and assemble your exploration party.",
    metric: "The Whispering Hideout",
  },
  {
    type: "Chapter II: Mid-Game",
    problem: "The creeping twilight mist threatens the celestial floating archipelago.",
    solution: "Delve into subterranean labyrinth vaults, synthesize high-tier gear, and confront guardian shades.",
    metric: "Trial of the Mist",
  },
  {
    type: "Chapter III: Climax",
    problem: "The queen's true identity is revealed, requiring pivotal moral choices.",
    solution: "Unlock multiple narrative routes and true endings depending on companion trust levels.",
    metric: "Queen of Ever Darkness",
  },
];

export function CaseStudies() {
  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
            Narrative Scenario Arcs
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white transition-colors">
            Major story chapters & exploration arcs
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {cases.map((c) => (
              <article
                key={c.type}
                className="flex min-h-[300px] flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] p-7 transition-all duration-300 hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] font-semibold transition-colors">
                    {c.type}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.6] text-[#4f4a44] dark:text-[#a0aec0] transition-colors">
                    {c.problem}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-black dark:text-white font-medium transition-colors">
                    {c.solution}
                  </p>
                </div>
                <p className="mt-8 border-t border-[#ddd7d0] dark:border-[#1a2840] pt-4 text-[20px] sm:text-[22px] leading-tight tracking-[-0.03em] text-[#142d55] dark:text-[#E5BA68] font-serif italic font-semibold transition-colors">
                  {c.metric}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
