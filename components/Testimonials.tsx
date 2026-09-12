"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function Testimonials() {
  const { lang } = useLanguage();
  const t = translations[lang].testimonials;

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1220px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
            {t.tag}
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white transition-colors">
            {t.title}
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {t.list.map((item) => (
              <article
                key={item.name}
                className="flex flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] p-7 transition-all duration-300 hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/40 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#35312d] dark:text-gray-200 transition-colors">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover border border-[#e7e3df] dark:border-[#1a2840]"
                  />
                  <div>
                    <p className="text-[14px] font-semibold text-black dark:text-white leading-tight transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[12px] text-[#8f8b86] dark:text-[#7f93b0] leading-tight mt-1 transition-colors">
                      {item.role}
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
