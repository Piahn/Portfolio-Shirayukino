"use client";

import { useState } from "react";
import {
  SiSteam,
  SiSteamdeck,
  SiItchdotio,
  SiGogdotcom,
} from "react-icons/si";
import {
  IoLogoWhatsapp,
  IoLogoDiscord,
  IoStorefront,
  IoCloudDownload,
  IoTimeOutline,
  IoSparklesOutline,
  IoInformationCircleOutline,
  IoCloseOutline,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "@/components/constants";

interface PlatformItem {
  name: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  href: string;
  isComingSoon: boolean;
  tooltipText: string;
  note: string;
}

export function TrustBanner() {
  const [clickedNotice, setClickedNotice] = useState<PlatformItem | null>(null);

  const platforms: PlatformItem[] = [
    {
      name: "Steam",
      label: "STEAM",
      icon: SiSteam,
      color: "text-[#171a21] dark:text-[#66c0f4]",
      href: "https://store.steampowered.com",
      isComingSoon: true,
      tooltipText: "Coming Soon (Q4 2026)",
      note: "Halaman resmi Steam Store sedang dalam tahap review submission. Target rilis penuh Q4 2026.",
    },
    {
      name: "Steam Deck",
      label: "DECK VERIFIED",
      icon: SiSteamdeck,
      color: "text-[#142d55] dark:text-[#E5BA68]",
      href: "https://store.steampowered.com",
      isComingSoon: true,
      tooltipText: "Verified at Launch",
      note: "Optimalisasi resolusi 1280x800, controller native layout, dan frame lock 60 FPS saat rilis.",
    },
    {
      name: "itch.io",
      label: "ITCH.IO",
      icon: SiItchdotio,
      color: "text-[#fa5c5c]",
      href: "https://itch.io",
      isComingSoon: true,
      tooltipText: "Coming Soon",
      note: "Demo build DRM-free untuk itch.io akan dibuka mendekati perilisan beta publik.",
    },
    {
      name: "WhatsApp",
      label: "ORDER & CHAT",
      icon: IoLogoWhatsapp,
      color: "text-[#25D366]",
      href: WHATSAPP_BOT_URL,
      isComingSoon: false,
      tooltipText: "✦ Play Prologue Now",
      note: "Bab pembuka interaktif sudah aktif dan dapat dimainkan langsung sekarang!",
    },
    {
      name: "Booth",
      label: "BOOTH",
      icon: IoStorefront,
      color: "text-[#fc4d50] dark:text-[#ff787b]",
      href: "https://booth.pm",
      isComingSoon: true,
      tooltipText: "Coming Soon (Circle)",
      note: "Merchandise fisik, artbook cetak, dan digital OST vault akan didistribusikan via Booth.",
    },
    {
      name: "DLsite",
      label: "DLSITE",
      icon: IoCloudDownload,
      color: "text-[#1b75bb] dark:text-[#60a5fa]",
      href: "https://dlsite.com",
      isComingSoon: true,
      tooltipText: "Coming Soon",
      note: "Distribusi edisi digital Jepang dengan voice acting orisinal akan hadir di DLsite.",
    },
    {
      name: "GOG",
      label: "DRM-FREE",
      icon: SiGogdotcom,
      color: "text-[#8c52ff] dark:text-[#c084fc]",
      href: "https://gog.com",
      isComingSoon: true,
      tooltipText: "Coming Soon",
      note: "Versi DRM-Free installer mandiri direncanakan rilis setelah peluncuran platform utama.",
    },
    {
      name: "Discord",
      label: "COMMUNITY",
      icon: IoLogoDiscord,
      color: "text-[#5865F2]",
      href: "/community",
      isComingSoon: false,
      tooltipText: "✦ Join Community",
      note: "Bergabunglah dengan circle petualang, berdiskusi teori lore, dan dapatkan update devlog terkini.",
    },
  ];

  const handlePlatformClick = (e: React.MouseEvent<HTMLAnchorElement>, p: PlatformItem) => {
    if (p.isComingSoon) {
      e.preventDefault();
      setClickedNotice(p);
    }
  };

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left Card */}
          <div className="relative flex flex-col justify-between rounded-[1.75rem] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] p-7 sm:p-9 lg:p-10 min-h-[380px] sm:min-h-[440px] transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-3 transition-colors">
                Distribution & Compatibility
              </p>
              <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[1.95rem] font-semibold leading-[1.25] tracking-[-0.01em] text-black dark:text-white max-w-[520px] transition-colors">
                <span className="text-gray-500 dark:text-gray-400">Playable seamlessly across </span>
                <span className="text-black dark:text-white">
                  Steam, Steam Deck, Windows PC, digital circle releases, and WhatsApp direct support.
                </span>
              </h2>
            </div>

            {/* Notification alert banner if user clicked a coming soon card */}
            {clickedNotice && (
              <div className="my-4 p-4 rounded-2xl bg-amber-50 dark:bg-[#1a2216]/60 border border-amber-200 dark:border-amber-700/40 text-amber-900 dark:text-amber-200 text-xs animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <IoInformationCircleOutline className="text-base shrink-0 mt-0.5 text-amber-600 dark:text-[#E5BA68]" />
                    <div>
                      <p className="font-semibold font-mono text-[11px] uppercase tracking-wider text-amber-800 dark:text-[#E5BA68]">
                        {clickedNotice.name} — Sedang Dipersiapkan
                      </p>
                      <p className="mt-1 text-[12px] leading-relaxed text-amber-800/90 dark:text-amber-200/90">
                        {clickedNotice.note}
                      </p>
                      <a
                        href={WHATSAPP_BOT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#142d55] dark:text-[#E5BA68] hover:underline"
                      >
                        <span>Coba prologue gratis di WhatsApp sekarang</span>
                        <IoArrowForwardOutline size={12} />
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => setClickedNotice(null)}
                    className="text-amber-600 dark:text-amber-400 hover:opacity-75 transition shrink-0 p-1"
                    aria-label="Tutup notifikasi"
                  >
                    <IoCloseOutline size={16} />
                  </button>
                </div>
              </div>
            )}

            <p className="mt-6 text-[12px] sm:text-[13px] leading-[1.55] text-gray-500 dark:text-gray-400 max-w-[420px] transition-colors">
              Optimized for controller, mouse & keyboard, portable handheld gaming with 60 FPS full asset fidelity, and direct community messaging.
            </p>
          </div>

          {/* Right Card with Platform Badges */}
          <div className="relative rounded-[1.75rem] bg-[#f2eee9] dark:bg-[#08101e] border border-transparent dark:border-[#1a2840] p-6 sm:p-9 lg:p-10 min-h-[380px] sm:min-h-[440px] flex items-center justify-center transition-colors">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full max-w-[500px]">
              {platforms.map((p) => {
                const Icon = p.icon;

                return (
                  <div key={p.name} className="relative group">
                    {/* Hover Floating Tooltip Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 pointer-events-none transition-all duration-200 z-30 whitespace-nowrap drop-shadow-md">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border ${
                          p.isComingSoon
                            ? "bg-[#142d55] dark:bg-[#E5BA68] text-white dark:text-[#08101e] border-[#254679] dark:border-[#d4a852]"
                            : "bg-[#25D366] text-white border-[#1eb856]"
                        }`}
                      >
                        {p.isComingSoon ? (
                          <IoTimeOutline size={10} className="shrink-0" />
                        ) : (
                          <IoSparklesOutline size={10} className="shrink-0" />
                        )}
                        <span>{p.tooltipText}</span>
                      </span>
                      {/* Triangle pointer */}
                      <span
                        className={`block w-1.5 h-1.5 rotate-45 mx-auto -mt-1 ${
                          p.isComingSoon
                            ? "bg-[#142d55] dark:bg-[#E5BA68]"
                            : "bg-[#25D366]"
                        }`}
                      />
                    </div>

                    {/* The Platform Card Button / Link */}
                    <a
                      href={p.href}
                      onClick={(e) => handlePlatformClick(e, p)}
                      target={!p.isComingSoon && p.href.startsWith("http") ? "_blank" : undefined}
                      rel={!p.isComingSoon && p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`relative flex flex-col items-center justify-center py-4 sm:py-5 px-2.5 sm:px-3 rounded-2xl bg-white dark:bg-[#0e1b30] border transition-all duration-300 text-center w-full overflow-hidden ${
                        p.isComingSoon
                          ? "border-[#e2ddd6] dark:border-[#1e3456] cursor-default hover:border-amber-500/60 dark:hover:border-[#E5BA68]/60 hover:bg-amber-50/30 dark:hover:bg-[#15243d] hover:shadow-sm"
                          : "border-[#e2ddd6] dark:border-[#1e3456] cursor-pointer hover:-translate-y-1 hover:border-[#25D366] dark:hover:border-[#25D366] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] hover:shadow-md"
                      }`}
                      title={p.isComingSoon ? `${p.name} (Coming Soon)` : `Buka ${p.name}`}
                    >
                      {/* Pulsing indicator dot for WhatsApp active */}
                      {p.name === "WhatsApp" && (
                        <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                        </span>
                      )}

                      {/* Icon */}
                      <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 mb-1.5 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={22} className={`${p.color} transition-colors`} />
                      </div>

                      {/* Name */}
                      <span className="text-[12px] sm:text-[13px] font-semibold text-black dark:text-white transition-colors">
                        {p.name}
                      </span>

                      {/* Animated Label: Flips between original label and Coming Soon / Open Now on hover */}
                      <div className="relative h-4 overflow-hidden mt-0.5 w-full flex items-center justify-center">
                        <span className="block text-[8.5px] sm:text-[9px] font-mono text-[#8f8b86] dark:text-[#7f93b0] tracking-wider uppercase transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
                          {p.label}
                        </span>
                        <span
                          className={`absolute inset-0 flex items-center justify-center text-[8px] sm:text-[8.5px] font-mono font-bold tracking-wider uppercase transition-all duration-300 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 ${
                            p.isComingSoon
                              ? "text-amber-600 dark:text-[#E5BA68]"
                              : "text-emerald-600 dark:text-[#25D366]"
                          }`}
                        >
                          {p.isComingSoon ? "Coming Soon" : "Open Link ↗"}
                        </span>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
