"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import {
  IoLogoDiscord,
  IoLogoWhatsapp,
  IoGameControllerOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "./constants";
import { useLanguage } from "./LanguageContext";

export function FinalCta() {
  const { lang } = useLanguage();

  return (
    <section
      id="community"
      data-section="community"
      className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300"
    >
      <div className="mx-auto max-w-[1220px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[#e7e3df] dark:border-[#1a2840]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0]">
              {lang === "id" ? "Suaka Komunitas" : "Circle Sanctuary"}
            </p>
            <h2 className="text-[2rem] sm:text-[2.5rem] leading-[1.02] tracking-[-0.04em] text-black dark:text-white mt-1">
              {lang === "id" ? "Masuk ke dalam Elyrith" : "Step inside Elyrith"}
            </h2>
          </div>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] hover:underline"
          >
            <span>{lang === "id" ? "Lihat pusat komunitas" : "View full community hub"}</span>
            <HiArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.58fr_0.42fr]">
          {/* Left Celestial Guild Card */}
          <div className="flex min-h-[390px] flex-col justify-between rounded-[22px] bg-gradient-to-br from-[#122b52] to-[#081326] dark:from-[#0f1e35] dark:to-[#070e1a] p-8 text-white sm:p-10 border border-[#23457a] dark:border-[#1c365d] shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E5BA68] font-semibold flex items-center gap-1.5">
                  <IoSparklesOutline />
                  ✦ {lang === "id" ? "GUILD RESMI PETUALANG" : "OFFICIAL ADVENTURER GUILD"}
                </span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/80 font-mono">
                  All Platforms
                </span>
              </div>

              <h3 className="mt-6 text-[32px] sm:text-[42px] font-semibold leading-[1.02] tracking-[-0.04em]">
                {lang === "id" ? "Terhubung, uji coba & pengaruhi jalan cerita." : "Connect, playtest & influence the story."}
              </h3>
              <p className="mt-4 text-[13.5px] leading-[1.65] text-white/80 max-w-lg">
                {lang === "id"
                  ? "Bergabunglah bersama para pengembara di circle Discord dan Guild WhatsApp Bot kami. Dapatkan akses pertama ke build playable tertutup, tentukan arah skenario, dan klaim item rahasia eksklusif."
                  : "Join thousands of travelers in our private Discord circle and WhatsApp Bot Guild. Gain first access to closed playable builds, vote on scenario directions, and unlock secret in-game items."}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5BA68] hover:bg-[#f0c878] text-[#08101e] text-xs font-mono font-semibold uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>{lang === "id" ? "Jelajahi Komunitas" : "Explore Community Hub"}</span>
                <HiArrowUpRight size={14} />
              </Link>
              <a
                href={WHATSAPP_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all border border-white/20"
              >
                <IoLogoWhatsapp className="text-[#25D366] text-base" />
                <span>WhatsApp Guild</span>
              </a>
            </div>
          </div>

          {/* Right Fast Access Card */}
          <div className="flex min-h-[390px] flex-col justify-between rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] p-8 sm:p-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0]">
                {lang === "id" ? "Saluran Langsung" : "Quick Channels"}
              </p>
              <h4 className="mt-2 text-xl sm:text-2xl font-semibold text-black dark:text-white tracking-[-0.02em]">
                {lang === "id" ? "Tautan Komunitas" : "Direct Community Links"}
              </h4>
              <p className="mt-2 text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                {lang === "id"
                  ? "Pilih portal favorit Anda untuk mengikuti perkembangan produksi dan reward komunitas."
                  : "Choose your preferred portal to stay updated on production milestones and community rewards."}
              </p>

              <div className="mt-6 space-y-3">
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-[#e7e3df] dark:border-[#1e3456] hover:bg-[#f8f5f2] dark:hover:bg-[#111d33] transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <IoLogoDiscord className="text-xl text-[#5865F2]" />
                    <div>
                      <div className="text-xs font-semibold text-black dark:text-white">Discord Sanctuary</div>
                      <div className="text-[11px] text-gray-500 font-mono">
                        {lang === "id" ? "Tanya Jawab Dev & Teori Cerita" : "Dev AMA & Theorycrafting"}
                      </div>
                    </div>
                  </div>
                  <HiArrowUpRight size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center justify-between p-3.5 rounded-xl border border-[#e7e3df] dark:border-[#1e3456] bg-[#f8f5f2]/60 dark:bg-[#111d33]/50">
                  <div className="flex items-center gap-3">
                    <IoGameControllerOutline className="text-xl text-[#142d55] dark:text-[#E5BA68]" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-black dark:text-white">Steam Community Hub</span>
                        <span className="text-[9px] font-mono font-semibold uppercase px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-800/60">
                          {lang === "id" ? "Segera Hadir" : "Coming Soon"}
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-500 font-mono">
                        {lang === "id" ? "Persiapan Menuju Rilis PC" : "In Preparation for PC Launch"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e7e3df] dark:border-[#1a2840] flex items-center justify-between text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <span>✦ {lang === "id" ? "Reward Milestone Aktif" : "Milestone Rewards Active"}</span>
              <Link href="/community" className="text-[#142d55] dark:text-[#E5BA68] font-semibold hover:underline">
                {lang === "id" ? "Lihat Roadmap →" : "View Roadmap →"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
