const steps = [
  {
    number: "1",
    title: "Exploration & Celestial Gathering",
    description:
      "Venture across floating sky archipelagos and ruined temple grounds to harvest rare flora, star crystals, and forgotten relics.",
  },
  {
    number: "2",
    title: "Turn-Based Tactical Battle System",
    description:
      "Command a 4-member battle party. Balance action points, chain elemental catalyst combos, and unleash devastating celestial burst arts.",
  },
  {
    number: "3",
    title: "The Atelier & Secret Sanctuary",
    description:
      "Return to your underground hideout to synthesize battle elixirs, craft enchanted weapons, and customize your party's abilities.",
  },
  {
    number: "4",
    title: "Character Bonds & Branching Paths",
    description:
      "Spend tranquil evenings conversing with companions in the hideout, unlocking special dual-tech skills and altering story outcomes.",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
            Gameplay Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-black dark:text-white mb-10 transition-colors">
            Core gameplay loop & systems
          </h2>
          <div className="space-y-6 divide-y divide-[#e7e3df] dark:divide-[#1a2840]">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-6 py-6 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex-shrink-0 rounded-xl border border-[#cfe0f8] bg-[#edf3fc] text-[#142d55] dark:border-[#1e3456] dark:bg-[#0e1b30] dark:text-[#E5BA68] px-4 py-3 text-center text-lg font-semibold font-mono shadow-sm sm:w-[72px] sm:h-[72px] sm:flex sm:items-center sm:justify-center transition-colors">
                  {step.number}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2.5 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-[#555] dark:text-[#a0aec0] transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="#editions"
              className="inline-flex items-center justify-center rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1a3763] dark:hover:bg-[#234882] px-6 py-3 text-sm font-semibold uppercase tracking-tight font-mono text-white transition-all shadow-sm"
            >
              Experience the gameplay demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
