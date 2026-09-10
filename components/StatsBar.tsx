export function StatsBar() {
  const stats = [
    { label: "Story Pathways", value: "Branching" },
    { label: "Playable Party", value: "8 Heroes" },
    { label: "Original Score", value: "45+ Tracks" },
    { label: "Campaign Scope", value: "35+ Hours" },
  ];

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto grid max-w-[1220px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] px-5 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#142d55]/30 dark:hover:border-[#E5BA68]/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                {item.label}
              </p>
              <p className="mt-3 text-[26px] sm:text-[28px] leading-none tracking-[-0.04em] text-[#142d55] dark:text-[#E5BA68] font-medium font-mono transition-colors">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
