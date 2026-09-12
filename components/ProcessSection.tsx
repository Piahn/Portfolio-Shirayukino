"use client";

import { IoLogoWhatsapp } from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "./constants";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

export function ProcessSection() {
  const { lang } = useLanguage();
  const t = translations[lang].process;

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-2 transition-colors">
            {t.tag}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium text-black dark:text-white mb-10 transition-colors">
            {t.title}
          </h2>
          <div className="space-y-6 divide-y divide-[#e7e3df] dark:divide-[#1a2840]">
            {t.steps.map((step) => (
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
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 justify-center rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1a3763] dark:hover:bg-[#234882] px-7 py-3.5 text-sm font-semibold uppercase tracking-tight font-mono text-white transition-all shadow-md group"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg transition-transform group-hover:scale-110" />
              <span>{lang === "id" ? "Mainkan Prologue di WhatsApp Sekarang →" : "Play Prologue on WhatsApp Now →"}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
