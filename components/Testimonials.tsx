const testimonials = [
  {
    quote:
      "The combat system has immense tactical depth. Chaining catalyst spells into celestial bursts while listening to the live orchestral score is unforgettable.",
    name: "Kurogane",
    role: "Steam Beta Playtester & Streamer",
    avatar: "/jack.png",
  },
  {
    quote:
      "星海の白雪と蒼穹の聖域 balances cozy sanctuary exploration with high-stakes story revelations. The character banter in the party camp is pure gold.",
    name: "Luna V.",
    role: "Visual Novel & RPG Reviewer",
    avatar: "/sofia.png",
  },
  {
    quote:
      "One of the most promising indie JRPGs in the creative circle scene. The 45-track soundtrack alone is worth experiencing on full speakers.",
    name: "Shun K.",
    role: "JRPG Community Creator",
    avatar: "/giovan.png",
  },
];

export function Testimonials() {
  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
            Early Feedback
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white transition-colors">
            Impressions from the closed playtest
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] p-7 transition-all duration-300 hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#35312d] dark:text-gray-200 transition-colors">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border border-[#e7e3df] dark:border-[#1a2840]"
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-black dark:text-white leading-tight transition-colors">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-[#8f8b86] dark:text-[#7f93b0] leading-tight mt-1 transition-colors">
                      {t.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
