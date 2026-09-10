import { ShirayukinoLogo } from "./Navbar";

export function Footer() {
  return (
    <footer className="w-full border-t border-b border-[#e7e3df] dark:border-[#1a2840] px-[21px] py-10 sm:py-12 transition-colors duration-300">
      <div>
        <div className="grid pb-[13px] lg:grid-cols-[0.48fr_0.52fr]">
          {/* Left Brand Card */}
          <div className="border-[#e7e3df] dark:border-[#1a2840] lg:pr-[15px] transition-colors">
            <div className="flex min-h-[335px] flex-col justify-between rounded-[21px] bg-[#f1ece8] dark:bg-[#0c1524] border border-transparent dark:border-[#1a2840] px-8 py-8 sm:px-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <div>
                <ShirayukinoLogo />
                <p className="mt-8 max-w-[365px] text-[24px] font-medium leading-[1.05] tracking-[-0.055em] text-black dark:text-white sm:text-[28px] transition-colors">
                  Where celestial wonder meets narrative RPG exploration.
                </p>
                <p className="mt-3 text-[13px] font-mono text-[#6c6761] dark:text-[#7f93b0] transition-colors">
                  常闇の女王と秘密の隠れ家 Project
                </p>
              </div>
              <a
                href="#gameplay"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1a355d] dark:hover:bg-[#224477] px-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-white font-mono transition-all shadow-sm"
              >
                Enter Secret Hideout
              </a>
            </div>
          </div>

          {/* Right Links Grid */}
          <div className="pt-[13px] lg:pl-[14px] lg:pt-0">
            <div className="grid min-h-[335px] rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] sm:grid-cols-3 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              {/* Column 1: Project */}
              <nav aria-label="Project" className="px-8 py-8 sm:px-7">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  Project
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="#gameplay"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Story & JRPG
                  </a>
                  <a
                    href="#world"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    World & Lore
                  </a>
                  <a
                    href="#editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Soundtrack Vault
                  </a>
                  <a
                    href="#devlog"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Devlog Notes
                  </a>
                </div>
              </nav>

              {/* Column 2: Editions */}
              <nav
                aria-label="Editions"
                className="px-8 py-8 sm:px-7 border-t border-[#e7e3df] dark:border-[#1a2840] sm:border-l sm:border-t-0 transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  Editions
                </p>
                <div className="mt-8 space-y-4">
                  <a
                    href="#editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Standard Digital
                  </a>
                  <a
                    href="#editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Deluxe Fan Pack
                  </a>
                  <a
                    href="#editions"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Soundtrack Disc
                  </a>
                  <a
                    href="https://store.steampowered.com"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Steam Store
                  </a>
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
                  <a
                    href="#community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Discord Circle
                  </a>
                  <a
                    href="#community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Fan Guidelines
                  </a>
                  <a
                    href="#community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Staff & Credits
                  </a>
                  <a
                    href="#community"
                    className="block text-[14px] font-medium leading-none tracking-[-0.02em] text-black dark:text-white transition hover:text-[#142d55] dark:hover:text-[#E5BA68]"
                  >
                    Contact / Mail
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright Bar */}
        <div className="grid gap-6 pt-6 text-[11px] leading-[1.45] text-[#74706b] dark:text-[#7f93b0] lg:grid-cols-[0.48fr_0.52fr] transition-colors">
          <p className="max-w-[520px]">
            ShirayukinoComp is an independent creative circle and narrative RPG game studio. Characters, universe, and soundtrack are original works of the circle.
          </p>
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href="#gameplay" className="transition hover:text-black dark:hover:text-white">
                Gameplay Overview
              </a>
              <a href="#editions" className="transition hover:text-black dark:hover:text-white">
                Editions
              </a>
              <a href="/privacy" className="transition hover:text-black dark:hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="transition hover:text-black dark:hover:text-white">
                Terms of Use
              </a>
            </div>
            <p>© 2026 ShirayukinoComp / 常闇の女王と秘密の隠れ家 Project. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
