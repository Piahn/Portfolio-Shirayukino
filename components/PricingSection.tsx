"use client";

import { IoCheckmarkOutline } from "react-icons/io5";
import { useLanguage } from "./LanguageContext";
import { translations } from "@/lib/translations";

const plansData = {
  id: [
    {
      name: "Standard Supporter",
      tagline: "Dukungan Dasar & Demo",
      description: "Tier awal bulanan untuk mendukung circle kami. Akses update build alpha dan kanal diskusi privat.",
      currency: "Rp",
      price: "3k",
      period: "/bulan",
      customNote: null,
      featured: false,
      features: [
        "Akses Story Prologue & Demo Build",
        "Peran Khusus Discord Circle Backer",
        "Monthly Devlog & Concept Art Sneak Peek",
        "Prioritas Akses Closed Beta",
        "Dukungan Langsung via WhatsApp",
      ],
      cta: "Dukung 3k / bln",
      href: "https://wa.me/?text=Halo%20ShirayukinoComp%2C%20saya%20ingin%20berlangganan%20paket%20Standard%20Supporter%20(Rp%203k/bulan)",
    },
    {
      name: "Deluxe Sanctuary Pack",
      tagline: "Paket Petualang Terfavorit",
      description: "Paket bulanan terpopuler dengan reward lengkap, soundtrack FLAC 45 lagu, dan artbook digital.",
      currency: "Rp",
      price: "7k",
      period: "/bulan",
      customNote: null,
      featured: true,
      features: [
        "Semua benefit Standard Supporter",
        "Full Game Access (Visual Novel + JRPG)",
        "45-Track Original Soundtrack (FLAC/MP3)",
        "Digital Artbook 120 Halaman HD",
        "Skin Sanctuary & Kostum Eksklusif",
        "Hak Voting Scenario Branching",
      ],
      cta: "Dukung 7k / bln",
      href: "https://wa.me/?text=Halo%20ShirayukinoComp%2C%20saya%20ingin%20berlangganan%20paket%20Deluxe%20Sanctuary%20(Rp%207k/bulan)",
    },
    {
      name: "Collector's Sound Vault",
      tagline: "Dukungan Kustom untuk Penggemar",
      description: "Untuk patron setia yang ingin berkontribusi lebih besar dengan nominal kustom fleksibel mulai dari 15k.",
      currency: "Rp",
      price: "15k",
      period: "/bulan",
      customNote: "(kustom)",
      featured: false,
      features: [
        "Semua benefit Deluxe Sanctuary Pack",
        "Nominal Kustom (mulai Rp 15.000 / bln)",
        "Nama Tercantum di Special Thanks Credits",
        "Director's Audio Commentary Track",
        "Secret Lore & Mythology Document PDF",
        "Sesi Diskusi Eksklusif Bersama Creator",
      ],
      cta: "Dukung 15k+ (Kustom)",
      href: "https://wa.me/?text=Halo%20ShirayukinoComp%2C%20saya%20ingin%20berlangganan%20paket%20Collector%20Vault%20(Rp%2015k%20custom/bulan)",
    },
  ],
  en: [
    {
      name: "Standard Supporter",
      tagline: "Basic Backer & Alpha Demo",
      description: "Entry-level tier to support our creative circle. Access alpha build updates and private discord channels.",
      currency: "Rp",
      price: "3k",
      period: "/month",
      customNote: null,
      featured: false,
      features: [
        "Story Prologue & Demo Build Access",
        "Exclusive Discord Circle Backer Role",
        "Monthly Devlog & Concept Art Sneak Peek",
        "Priority Closed Beta Invites",
        "Direct Creator Support on WhatsApp",
      ],
      cta: "Support 3k / mo",
      href: "https://wa.me/?text=Hello%20ShirayukinoComp%2C%20I%20would%20like%20to%20subscribe%20to%20Standard%20Supporter%20(Rp%203k/month)",
    },
    {
      name: "Deluxe Sanctuary Pack",
      tagline: "Most Popular Backer Pack",
      description: "Our flagship supporter tier with full rewards, 45-track FLAC OST, and 120-page digital artbook.",
      currency: "Rp",
      price: "7k",
      period: "/month",
      customNote: null,
      featured: true,
      features: [
        "All Standard Supporter Benefits",
        "Full Game Access (Visual Novel + JRPG)",
        "45-Track Original Soundtrack (FLAC/MP3)",
        "120-Page Digital Artbook HD",
        "Exclusive Sanctuary Skin & Party Costumes",
        "Scenario Branching Voting Rights",
      ],
      cta: "Support 7k / mo",
      href: "https://wa.me/?text=Hello%20ShirayukinoComp%2C%20I%20would%20like%20to%20subscribe%20to%20Deluxe%20Sanctuary%20(Rp%207k/month)",
    },
    {
      name: "Collector's Sound Vault",
      tagline: "Custom Patron Tier",
      description: "For dedicated patrons wishing to contribute flexible amounts starting from 15k IDR with special credits.",
      currency: "Rp",
      price: "15k",
      period: "/month",
      customNote: "(custom)",
      featured: false,
      features: [
        "All Deluxe Sanctuary Pack Benefits",
        "Custom Amount (starts at 15,000 IDR / mo)",
        "Name in Special Thanks Game Credits",
        "Director's Audio Commentary Track",
        "Secret Lore & Mythology Document PDF",
        "Exclusive Creator Discussion Sessions",
      ],
      cta: "Support 15k+ (Custom)",
      href: "https://wa.me/?text=Hello%20ShirayukinoComp%2C%20I%20would%20like%20to%20subscribe%20to%20Collector%20Vault%20(Rp%2015k%20custom/month)",
    },
  ],
};

export function PricingSection() {
  const { lang } = useLanguage();
  const t = translations[lang].pricing;
  const plans = plansData[lang];

  return (
    <section id="editions" data-section="editions" className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        {/* Top Header Grid with Vertical Divider Line */}
        <div className="grid pb-[13px] lg:grid-cols-2 pt-6">
          <div className="border-[#e7e3df] dark:border-[#1a2840] lg:border-r lg:pr-[15px] transition-colors">
            <div className="flex min-h-[255px] flex-col justify-between rounded-[21px] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] px-8 py-8 sm:px-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                {t.tag}
              </p>
              <div>
                <h2 className="max-w-[440px] text-[34px] font-semibold leading-[0.98] tracking-[-0.065em] text-black dark:text-white sm:text-[45px] transition-colors">
                  {t.title}
                </h2>
                <p className="mt-5 max-w-[390px] text-[13px] leading-[1.45] text-[#465158] dark:text-[#a0aec0] transition-colors">
                  {t.supportDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-[13px] lg:pl-[14px] lg:pt-0">
            <div className="flex min-h-[255px] flex-col justify-between rounded-[21px] bg-[#f1ece8] dark:bg-[#08101e] border border-transparent dark:border-[#1a2840] px-8 py-8 sm:px-10 transition-colors">
              <p className="max-w-[345px] text-[22px] font-medium leading-[1.05] tracking-[-0.055em] text-black dark:text-white sm:text-[24px] transition-colors">
                {t.sub}
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="border-t border-[#ded8d2] dark:border-[#1a2840] pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6963] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "Pembayaran IDR" : "IDR & Global Pay"}
                </div>
                <div className="border-t border-[#ded8d2] dark:border-[#1a2840] pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6963] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "Akses Build & OST" : "Build & OST Access"}
                </div>
                <div className="border-t border-[#ded8d2] dark:border-[#1a2840] pt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6963] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "Bebas Batal Kapan Saja" : "Cancel Anytime"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid gap-[13px] pt-[13px] lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex min-h-[460px] flex-col justify-between rounded-[21px] border p-6 sm:p-8 transition duration-300 ${
                plan.featured
                  ? "border-[#23457a] dark:border-[#305a96] bg-gradient-to-b from-[#142d55] to-[#0c1b33] dark:from-[#112340] dark:to-[#08111e] text-white shadow-md dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                  : "border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] text-black dark:text-white hover:border-gray-400 dark:hover:border-[#2a456c] shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              }`}
            >
              <div>
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors ${
                    plan.featured ? "text-[#E5BA68] font-semibold" : "text-[#8f8b86] dark:text-[#7f93b0]"
                  }`}
                >
                  {plan.featured ? (lang === "id" ? "✦ PAKET TERREKOMENDASI" : "✦ RECOMMENDED TIER") : plan.tagline}
                </p>
                <h3 className={`mt-2 text-xl font-bold tracking-tight transition-colors ${plan.featured ? "text-white" : "text-black dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p
                  className={`mt-3 max-w-[260px] text-[13px] leading-[1.45] transition-colors ${
                    plan.featured ? "text-white/80" : "text-[#4b5458] dark:text-[#a0aec0]"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-8 flex items-baseline gap-1.5 flex-wrap">
                  <span className={`text-[20px] sm:text-[22px] font-bold font-mono tracking-tight ${plan.featured ? "text-[#E5BA68]" : "text-[#142d55] dark:text-[#E5BA68]"}`}>
                    {plan.currency}
                  </span>
                  <span className="text-[44px] font-semibold leading-none tracking-[-0.06em] sm:text-[52px]">
                    {plan.price}
                  </span>
                  <div className="flex items-center gap-1.5 pb-1">
                    {plan.customNote && (
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold transition-colors ${
                        plan.featured
                          ? "bg-white/20 text-[#E5BA68]"
                          : "bg-[#edf3fc] dark:bg-[#162742] text-[#142d55] dark:text-[#E5BA68] border border-[#cfe0f8] dark:border-[#233f6b]"
                      }`}>
                        {plan.customNote}
                      </span>
                    )}
                    <span
                      className={`text-[14px] sm:text-[15px] font-mono transition-colors ${
                        plan.featured ? "text-white/80" : "text-[#77716b] dark:text-[#7f93b0]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-3.5">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-[13px] leading-snug items-center">
                      <span
                        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full transition-colors ${
                          plan.featured
                            ? "bg-white/20 text-[#E5BA68]"
                            : "bg-[#ececea] dark:bg-[#152338] text-[#696662] dark:text-[#E5BA68]"
                        }`}
                      >
                        <IoCheckmarkOutline size={12} />
                      </span>
                      <span className={plan.featured ? "text-white/95" : "text-[#1d1d1b] dark:text-gray-200 transition-colors"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.href}
                target={plan.href.startsWith("http") ? "_blank" : undefined}
                rel={plan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-10 inline-flex h-12 items-center justify-center rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] transition-all font-mono ${
                  plan.featured
                    ? "bg-[#E5BA68] text-[#142d55] hover:bg-[#d6a852] font-bold shadow-sm"
                    : "bg-[#f1ece8] dark:bg-[#15243a] text-black dark:text-white hover:bg-[#142d55] hover:text-white dark:hover:bg-[#1e3658]"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
