"use client";

import {
  IoBookOutline,
  IoBrushOutline,
  IoMusicalNotesOutline,
  IoGameControllerOutline,
} from "react-icons/io5";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const stepIcons = [
  IoBookOutline,
  IoBrushOutline,
  IoMusicalNotesOutline,
  IoGameControllerOutline,
];

export function StepsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].steps;

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8c8680] dark:text-[#7f93b0] mb-2 transition-colors">
            {t.tag}
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white transition-colors">
            {t.title}
          </h2>
          <div className="mt-10 divide-y divide-[#e7e3df] dark:divide-[#1a2840] rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#fbfaf8] dark:bg-[#0c1524] transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            {t.steps.map((step, idx) => {
              const Icon = stepIcons[idx] || IoBookOutline;

              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center transition-all duration-300 hover:bg-black/[0.015] dark:hover:bg-white/[0.015]"
                >
                  {/* Left: Number + Title + Description */}
                  <div className="flex gap-4 sm:gap-7 items-start flex-1 min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#142d55] dark:text-[#E5BA68] font-semibold pt-1 shrink-0 transition-colors">
                      {step.number}
                    </p>
                    <div className="space-y-2.5 max-w-[620px]">
                      <h3 className="text-[20px] sm:text-[22px] lg:text-[23px] font-semibold leading-[1.15] tracking-[-0.03em] text-black dark:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#58534d] dark:text-[#a0aec0] transition-colors">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Thematic Desktop Card (Fills Desktop Space) */}
                  <div className="flex items-center gap-3 shrink-0 self-start lg:self-center pl-7 sm:pl-0">
                    <div className="flex items-center gap-4 px-5 py-3.5 rounded-2xl border border-[#e8e4df] dark:border-[#1d304e] bg-white/95 dark:bg-[#0f1c30] shadow-[0_2px_14px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#142d55]/40 dark:group-hover:border-[#E5BA68]/50">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf3fc] dark:bg-[#162742] border border-[#cfe0f8] dark:border-[#233f6b] text-[#142d55] dark:text-[#E5BA68] transition-colors shadow-inner">
                        <Icon size={24} className="stroke-[2]" />
                      </div>
                      <div className="text-left space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-[#142d55] dark:text-[#E5BA68]">✦</span>
                          <span className="font-mono text-[11px] font-semibold tracking-wider uppercase text-black dark:text-white transition-colors">
                            {step.tag}
                          </span>
                          <span className="hidden sm:inline-block font-mono text-[9px] px-2 py-0.5 rounded-full bg-[#f1ece8] dark:bg-[#15243b] text-[#142d55] dark:text-[#E5BA68] font-medium border border-[#e2ddd6] dark:border-[#203657] transition-colors">
                            {step.badge}
                          </span>
                        </div>
                        {/* Desktop Highlight Pills */}
                        <div className="hidden sm:flex items-center gap-1.5 pt-0.5">
                          {step.highlights.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[9px] uppercase tracking-wider text-[#6e6862] dark:text-[#8899b2] bg-[#faf8f5] dark:bg-[#0b1424] px-1.5 py-0.5 rounded border border-[#eae5df] dark:border-[#192b45] transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
