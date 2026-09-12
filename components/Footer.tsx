"use client";

import Link from "next/link";
import { ShirayukinoLogo } from "./Navbar";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="w-full border-t border-b border-[#e7e3df] dark:border-[#1a2840] px-[21px] py-10 sm:py-12 transition-colors duration-300">
      <div>
        <div className="grid pb-[13px] lg:grid-cols-[0.48fr_0.52fr]">
          {/* Left Brand Card */}
          <div className="border-[#e7e3df] dark:border-[#1a2840] lg:pr-[15px] transition-colors">
            <div className="flex min-h-[335px] flex-col justify-between rounded-[21px] bg-[#f1ece8] dark:bg-[#0c1524] border border-transparent dark:border-[#1a2840] px-8 py-8 sm:px-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <div>
                <ShirayukinoLogo imgClassName="h-10 sm:h-12" />
                <p className="mt-8 max-w-[365px] text-[24px] font-medium leading-[1.05] tracking-[-0.055em] text-black dark:text-white sm:text-[28px] transition-colors">
                  {lang === "id"
                    ? "Di mana keajaiban bintang bertemu petualangan naratif RPG."
                    : "Where celestial wonder meets narrative RPG exploration."}
                </p>
                <p className="mt-3 text-[13px] font-mono text-[#6c6761] dark:text-[#7f93b0] transition-colors">
                  星海の白雪と蒼穹の聖域 Project
                </p>
              </div>
              <Link
                href="/gameplay"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1a355d] dark:hover:bg-[#224477] px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white font-mono transition-all shadow-sm"
              >
                {lang === "id" ? "Jelajahi Elyrith" : "Explore Elyrith"}
              </Link>
            </div>
          </div>

          {/* Right Links Grid */}
          <div className="pt-[13px] lg:pl-[14px] lg:pt-0">
            <div className="grid min-h-[335px] rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] sm:grid-cols-3 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {/* Column 1: Project */}
              <nav aria-label="Project" className="px-8 py-8 sm:px-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "Proyek" : "Project"}
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="/gameplay"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    {lang === "id" ? "Kisah & JRPG" : "Story & JRPG"}
                  </Link>
                  <Link
                    href="/#world"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    {lang === "id" ? "Semesta & Lore" : "World & Lore"}
                  </Link>
                  <Link
                    href="/devlog/music-soundscapes"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Soundtrack Vault
                  </Link>
                  <Link
                    href="/devlog"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    {lang === "id" ? "Catatan Devlog" : "Devlog Notes"}
                  </Link>
                </div>
              </nav>

              {/* Column 2: Updates & Roadmap */}
              <nav
                aria-label="Updates & Roadmap"
                className="px-8 py-8 sm:px-7 border-t border-[#e7e3df] dark:border-[#1a2840] sm:border-l sm:border-t-0 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "Pembaruan" : "Updates & Roadmap"}
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="/editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Patch Notes (v0.9.4)
                  </Link>
                  <Link
                    href="/editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    {lang === "id" ? "Peta Rilis" : "Release Roadmap"}
                  </Link>
                  <Link
                    href="/devlog/music-soundscapes"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Soundtrack Vault
                  </Link>
                  <Link
                    href="/community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Steam Store
                  </Link>
                </div>
              </nav>

              {/* Column 3: Circle & Support */}
              <nav
                aria-label="Circle & Support"
                className="px-8 py-8 sm:px-7 border-t border-[#e7e3df] dark:border-[#1a2840] sm:border-l sm:border-t-0 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  Circle
                </p>
                <div className="mt-8 space-y-4">
                  <Link
                    href="/community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Discord Circle
                  </Link>
                  <Link
                    href="/terms"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Fan Guidelines
                  </Link>
                  <Link
                    href="/community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Staff & Credits
                  </Link>
                  <Link
                    href="/community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Contact / Mail
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright Bar */}
        <div className="grid gap-6 pt-6 text-[11px] leading-[1.45] text-[#74706b] dark:text-[#7f93b0] lg:grid-cols-[0.48fr_0.52fr] transition-colors">
          <p className="max-w-[520px]">
            {lang === "id"
              ? "ShirayukinoComp adalah circle kreatif independen dan studio game naratif RPG. Karakter, semesta, dan musik pengiring adalah karya orisinal circle."
              : "ShirayukinoComp is an independent creative circle and narrative RPG game studio. Characters, universe, and soundtrack are original works of the circle."}
          </p>
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono">
              <Link href="/gameplay" className="transition hover:text-black dark:hover:text-white">
                {lang === "id" ? "Ringkasan Gameplay" : "Gameplay Overview"}
              </Link>
              <Link href="/editions" className="transition hover:text-black dark:hover:text-white">
                Patch Notes
              </Link>
              <Link href="/privacy" className="transition hover:text-black dark:hover:text-white">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="rounded-md border border-[#8f8b86] dark:border-[#7f93b0] px-2.5 py-0.5 text-black dark:text-white transition hover:border-black dark:hover:border-white"
              >
                Terms of Use
              </Link>
            </div>
            <p>© 2026 ShirayukinoComp / 星海の白雪と蒼穹の聖域. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
