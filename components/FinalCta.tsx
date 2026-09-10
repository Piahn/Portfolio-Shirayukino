"use client";

export function FinalCta() {
  return (
    <section id="community" data-section="community" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="grid gap-[13px] lg:grid-cols-[0.58fr_0.42fr]">
          {/* Left Celestial Card */}
          <div className="flex min-h-[390px] flex-col justify-between rounded-[21px] bg-gradient-to-br from-[#122b52] to-[#081326] dark:from-[#0f1e35] dark:to-[#070e1a] px-8 py-8 text-white sm:px-10 lg:px-12 lg:py-10 border border-[#23457a] dark:border-[#1c365d] shadow-sm dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all">
            <div className="flex items-center justify-between gap-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#E5BA68]">
                ✦ Secret Sanctuary
              </p>
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/80 font-mono">
                Circle Community
              </span>
            </div>
            <div>
              <h2 className="max-w-[610px] text-[38px] font-semibold leading-[0.94] tracking-[-0.07em] sm:text-[58px] lg:text-[66px]">
                Step inside the secret hideout.
              </h2>
              <p className="mt-6 max-w-[435px] text-[14px] leading-[1.6] text-white/75">
                Join our private Discord circle. Gain access to work-in-progress demo builds, unreleased OST demos, and vote on upcoming visual novel scenario branches.
              </p>
            </div>
          </div>

          {/* Right White Card with Border */}
          <div className="flex min-h-[390px] flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] px-8 py-8 sm:px-10 lg:py-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                Beta Access & Newsletter
              </p>
              <h3 className="mt-6 max-w-[320px] text-[26px] font-semibold leading-[1.05] tracking-[-0.045em] text-black dark:text-white sm:text-[30px] transition-colors">
                Receive the latest chapter and music updates.
              </h3>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-3">
              <label className="sr-only" htmlFor="fan-email">
                Your email address
              </label>
              <input
                className="h-12 w-full rounded-full border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#08101e] px-5 text-[13px] text-black dark:text-white outline-none transition placeholder:text-[#8f8b86] dark:placeholder:text-[#64748b] focus:border-[#142d55] dark:focus:border-[#E5BA68]"
                id="fan-email"
                placeholder="Enter your email address"
                type="email"
                required
              />
              <button
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1b345b] dark:hover:bg-[#254679] text-[11px] font-semibold uppercase tracking-[0.18em] text-white font-mono transition-all shadow-sm"
                type="submit"
              >
                Join Discord & Beta Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
