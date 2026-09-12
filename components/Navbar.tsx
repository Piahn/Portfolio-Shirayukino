"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  IoLogoWhatsapp,
  IoPersonOutline,
  IoSparklesOutline,
} from "react-icons/io5";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { WHATSAPP_BOT_URL, DASHBOARD_URL } from "./constants";

export function ShirayukinoLogo({
  className = "",
  imgClassName = "h-8 sm:h-9",
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`flex items-center shrink-0 ${className}`}>
      <img
        src="/shirayukino.png"
        alt="ShirayukinoComp Studio"
        className={`${imgClassName} w-auto object-contain transition-all duration-300 group-hover:scale-105 select-none drop-shadow-sm dark:hidden`}
      />
      <img
        src="/shirayukino-dark.png"
        alt="ShirayukinoComp Studio"
        className={`${imgClassName} w-auto object-contain transition-all duration-300 group-hover:scale-105 select-none hidden dark:block drop-shadow-[0_2px_12px_rgba(229,186,104,0.2)]`}
      />
    </div>
  );
}

const navLinks = [
  { label: "Story & RPG", href: "/gameplay" },
  { label: "World", href: "/#world" },
  { label: "Patch Notes", href: "/editions" },
  { label: "Devlog", href: "/devlog" },
  { label: "Community", href: "/community" },
];

const drawerNavItems = [
  {
    num: "01",
    label: "Story & RPG",
    desc: "Tactical timeline battles & branching scenarios",
    href: "/gameplay",
  },
  {
    num: "02",
    label: "World",
    desc: "The Celestial Sea, sky whales & floating islands",
    href: "/#world",
  },
  {
    num: "03",
    label: "Patch Notes",
    desc: "Versi pembaruan, patch notes & release roadmap",
    href: "/editions",
  },
  {
    num: "04",
    label: "Devlog",
    desc: "Scenario notes, 45-track OST vault & sanctuary insights",
    href: "/devlog",
  },
  {
    num: "05",
    label: "Community",
    desc: "Discord sanctuary, beta playtests & WhatsApp bot",
    href: "/community",
  },
];

const mobileMenuSecondary = [
  { label: "Steam Hub", href: "/community" },
  { label: "Discord Circle", href: "/community" },
  { label: "Soundtrack Vault", href: "/devlog/music-soundscapes" },
  { label: "Terms & Privacy", href: "/terms" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body & html scroll and hide scrollbars when menu overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* 1. Static Top Header (Normal state when at top, scrolls away with content) */}
      <header
        translate="no"
        className="notranslate w-full h-[68px] sm:h-[90px] bg-white dark:bg-[#070b12] px-3 sm:px-4 md:px-[21px] flex items-center justify-between border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300"
        role="banner"
      >
        {/* Left: Logo & Desktop Links */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link
            href="/"
            translate="no"
            className="notranslate flex items-center shrink-0 group focus:outline-none"
            aria-label="ShirayukinoComp Home"
          >
            <ShirayukinoLogo imgClassName="h-7 sm:h-8 md:h-9" />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            translate="no"
            className="notranslate hidden lg:flex items-center rounded-full shrink-0 bg-[#f1eeea] dark:bg-[#111a2b] px-1.5 py-[3px] gap-1 border border-transparent dark:border-[#1d2c46]"
            aria-label="Desktop navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                translate="no"
                className="notranslate px-3.5 py-[6px] text-[13px] font-mono text-[#444] dark:text-[#94a3b8] hover:text-black dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-[#1a2840] transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Portal + Play Demo Button + Mobile Menu Button */}
        <div translate="no" className="notranslate flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Desktop & Tablet Portal Pill Link */}
          <a
            href={DASHBOARD_URL}
            translate="no"
            className="notranslate hidden sm:inline-flex items-center gap-1.5 font-medium rounded-full px-3.5 sm:px-4 py-[7px] sm:py-2 text-[12px] sm:text-[13px] text-gray-800 dark:text-gray-100 bg-white hover:bg-gray-100 dark:bg-[#0c1524] dark:hover:bg-[#15233c] border border-[#e7e3df] dark:border-[#1e3456] transition-all whitespace-nowrap shadow-sm font-mono group"
            aria-label="Portal Dashboard"
            title="Portal Dashboard"
          >
            <IoSparklesOutline className="text-[#142d55] dark:text-[#E5BA68] transition-transform group-hover:rotate-12" />
            <span>Portal</span>
          </a>

          <a
            href={WHATSAPP_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            translate="no"
            className="notranslate hidden sm:inline-flex items-center gap-1.5 font-medium rounded-full px-4 sm:px-5 py-[7px] sm:py-2 text-[12px] sm:text-[13px] text-gray-800 dark:text-gray-100 bg-[#edf3fc] hover:bg-[#dfeaf8] dark:bg-[#111d33] dark:hover:bg-[#182845] border border-[#cfe0f8] dark:border-[#223859] transition-all whitespace-nowrap shadow-sm font-mono"
          >
            <IoLogoWhatsapp className="text-[#25D366] text-base" />
            <span>Play on WhatsApp</span>
          </a>

          {/* Mobile Portal Icon Link (shown only on mobile < 640px) */}
          <a
            href={DASHBOARD_URL}
            translate="no"
            className="notranslate sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#0c1524] border border-[#e8e3dd] dark:border-[#1f304d] hover:bg-gray-100 dark:hover:bg-[#101a2b] text-[#142d55] dark:text-[#E5BA68] transition-colors shrink-0 shadow-sm"
            aria-label="Portal Dashboard"
            title="Portal Dashboard"
          >
            <IoPersonOutline size={18} />
          </a>

          {/* Mobile / Tablet Hamburger Button when at top */}
          <button
            type="button"
            translate="no"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="notranslate lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#0c1524] border border-[#e8e3dd] dark:border-[#1f304d] hover:bg-gray-100 dark:hover:bg-[#101a2b] text-black dark:text-white transition-colors shrink-0 shadow-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative flex items-center justify-center w-6 h-6 pointer-events-none">
              <span
                className={`absolute block h-[2.2px] bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMenuOpen
                    ? "w-[18px] rotate-45 translate-y-0"
                    : "w-[18px] -translate-y-[3.5px]"
                }`}
              />
              <span
                className={`absolute block h-[2.2px] bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isMenuOpen
                    ? "w-[18px] -rotate-45 translate-y-0"
                    : "w-[13px] translate-y-[3.5px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Floating Controls - Aligned exactly with the 1200px architectural grid lines */}
      <div className="fixed top-3.5 sm:top-5 xl:top-6 inset-x-3 sm:inset-x-4 xl:inset-x-0 mx-auto max-w-[1200px] pointer-events-none z-50">
        <div className="relative w-full">
          {/* Floating Round Button & Controls in Top-Right */}
          <div
            className={`absolute right-1 sm:right-3 xl:right-0 top-0 flex items-center gap-2.5 sm:gap-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled || isMenuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto scale-100 visible"
                : "-translate-y-6 opacity-0 pointer-events-none scale-90 invisible"
            }`}
          >
            {/* Theme & Language Controls Pill - perfectly aligned vertically with Close button when Menu is open */}
            {isMenuOpen && (
              <div className="pointer-events-auto flex items-center gap-2 pl-2.5 sm:pl-3 pr-1.5 py-1 sm:py-1.5 rounded-full bg-white/95 dark:bg-[#0c1424]/95 backdrop-blur-xl border border-gray-200/90 dark:border-[#1f304d] shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-all animate-in fade-in zoom-in-95 duration-200 xl:translate-x-[34px]">
                <LanguageToggle />
                <span className="w-[1px] h-3.5 bg-gray-200 dark:bg-[#1f304d]" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400 select-none">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            )}

            {/* The Iconic Round Circular Menu Button with Smooth Morphing Bars to X */}
            {/* Position is permanently locked on the 1200px architectural line (xl:translate-x-1/2) both when closed and open */}
            <div className={`translate-x-0 xl:translate-x-1/2 ${isScrolled || isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                disabled={!isScrolled && !isMenuOpen}
                tabIndex={isScrolled || isMenuOpen ? 0 : -1}
                aria-hidden={!isScrolled && !isMenuOpen}
                className="group flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-[68px] xl:h-[68px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.85)] bg-white dark:bg-[#0c1524] text-black dark:text-white border border-gray-200/90 dark:border-[#1f304d] hover:bg-gray-50 dark:hover:bg-[#101c30] disabled:pointer-events-none disabled:cursor-default"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                <div className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 xl:w-9 xl:h-9 pointer-events-none">
                  <span
                    className={`absolute block bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isMenuOpen
                        ? "w-[20px] sm:w-[24px] xl:w-[28px] h-[2.2px] sm:h-[2.6px] xl:h-[3px] rotate-45 translate-y-0"
                        : "w-[18px] sm:w-[22px] xl:w-[26px] h-[2.2px] sm:h-[2.6px] xl:h-[3px] -translate-y-[3.5px] sm:-translate-y-[4px] xl:-translate-y-[5px]"
                    }`}
                  />
                  <span
                    className={`absolute block bg-black dark:bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isMenuOpen
                        ? "w-[20px] sm:w-[24px] xl:w-[28px] h-[2.2px] sm:h-[2.6px] xl:h-[3px] -rotate-45 translate-y-0"
                        : "w-[13px] sm:w-[16px] xl:w-[20px] h-[2.2px] sm:h-[2.6px] xl:h-[3px] translate-y-[3.5px] sm:translate-y-[4px] xl:translate-y-[5px] group-hover:w-[18px] sm:group-hover:w-[22px] xl:group-hover:w-[26px]"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fullscreen Navigation Overlay (Opens when clicking the round button) */}
      <div
        translate="no"
        className={`notranslate fixed inset-0 z-40 bg-white/95 dark:bg-[#070b12]/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-full flex-col justify-between max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 py-6 sm:py-10 overflow-y-auto no-scrollbar">
          {/* Top of drawer with Logo */}
          <div className="flex items-center justify-between">
            <ShirayukinoLogo imgClassName="h-7 sm:h-8 md:h-9" />
          </div>

          {/* Center Navigation Content - 2-Column Split on Desktop */}
          <div className="my-auto py-6 sm:py-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 xl:gap-20 items-center">
              {/* Left Column: Primary Navigation */}
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8f8b86] dark:text-[#7f93b0] mb-5 sm:mb-7">
                  Menu Navigation
                </p>
                <nav className="space-y-3 sm:space-y-4">
                  {drawerNavItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex flex-col py-1 transition-all"
                    >
                      <div className="flex items-baseline gap-3.5 sm:gap-4">
                        <span className="font-mono text-xs sm:text-sm font-normal text-gray-400 dark:text-gray-500 group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors">
                          {item.num}
                        </span>
                        <span className="text-2xl sm:text-3xl lg:text-[2.4rem] xl:text-[2.75rem] font-bold text-black dark:text-white group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-all group-hover:translate-x-1.5 duration-200 leading-tight">
                          {item.label}
                        </span>
                      </div>
                      <span className="hidden sm:block ml-7 sm:ml-9 text-[11.5px] font-mono text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 pt-6 border-t border-[#e7e3df] dark:border-[#1a2840] font-mono text-xs sm:text-sm">
                  {mobileMenuSecondary.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>


                {/* Member & Studio Portal Banner inside Drawer */}
                <div className="mt-6 p-4 sm:p-5 rounded-[20px] bg-gradient-to-br from-[#f8faff] to-[#edf3fc] dark:from-[#0d1728] dark:to-[#08101d] border border-[#cfe0f8] dark:border-[#1e3456] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                  <div>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] font-semibold flex items-center gap-1.5">
                      <IoSparklesOutline />
                      ✦ MEMBER & STUDIO PORTAL
                    </span>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      Portal Login Pengguna
                    </p>
                  </div>
                  <a
                    href={DASHBOARD_URL}
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#142d55] dark:bg-[#E5BA68] text-white dark:text-[#08101e] text-[11px] font-mono font-semibold uppercase tracking-wider shadow-sm hover:opacity-90 transition shrink-0"
                  >
                    <IoPersonOutline size={13} />
                    <span>Buka Portal</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Desktop Studio Showcase Card & Prologue Teaser (Fills empty desktop void) */}
              <div className="hidden lg:flex flex-col gap-5">
                {/* Project Showcase Card */}
                <div className="rounded-[22px] border border-[#e7e3df] dark:border-[#1a2840] bg-[#f8f5f2] dark:bg-[#0c1524] overflow-hidden shadow-sm dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all">
                  {/* Sanctuary Artwork Container */}
                  <div className="relative h-48 xl:h-52 w-full overflow-hidden">
                    <img
                      src="/secret_hideout.jpg"
                      alt="Elyrith Sanctuary Haven"
                      className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5f2] dark:from-[#0c1524] via-transparent to-black/40" />
                    <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5BA68] animate-pulse" />
                      <span>Celestial Sanctuary</span>
                    </div>
                  </div>

                  {/* Showcase Details */}
                  <div className="p-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#142d55] dark:text-[#E5BA68] font-semibold">
                      星海の白雪と蒼穹の聖域
                    </p>
                    <h4 className="text-lg font-semibold text-black dark:text-white mt-1">
                      The Celestial Snow & Elyrith
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      A fantasy narrative JRPG uniting tactical timeline battles, branching visual novel choices, and an original 45-track orchestral score.
                    </p>

                    {/* Metadata Grid */}
                    <div className="mt-4 pt-4 border-t border-[#e7e3df] dark:border-[#1a2840] grid grid-cols-3 gap-2 text-center font-mono text-[10.5px]">
                      <div className="p-2 rounded-lg bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        <p className="text-gray-400 text-[9px] uppercase">RELEASE</p>
                        <p className="font-semibold text-black dark:text-white mt-0.5">Q4 2026</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        <p className="text-gray-400 text-[9px] uppercase">STATUS</p>
                        <p className="font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">v0.9.4 Beta</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white dark:bg-[#111c30] border border-[#e7e3df] dark:border-[#1e3456]">
                        <p className="text-gray-400 text-[9px] uppercase">SOUND</p>
                        <p className="font-semibold text-[#142d55] dark:text-[#E5BA68] mt-0.5">45 Tracks</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Interactive Prologue Banner */}
                <div className="p-4.5 sm:p-5 rounded-[20px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0f1d33] dark:to-[#08101e] border border-[#23457a] dark:border-[#1e3b68] text-white flex items-center justify-between gap-4 shadow-sm">
                  <div className="min-w-0">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-[#E5BA68] font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span>PROLOGUE QUEST ACTIVE</span>
                    </p>
                    <p className="text-xs text-white/90 mt-0.5 font-medium truncate">
                      Play prologue choices now on WhatsApp
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_BOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white dark:bg-[#E5BA68] text-[#142d55] dark:text-[#08101e] text-[10.5px] font-mono font-semibold uppercase tracking-wider hover:opacity-90 transition shrink-0"
                  >
                    <IoLogoWhatsapp className="text-[#25D366] text-sm" />
                    <span>Play</span>
                    <HiArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action in Drawer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e7e3df] dark:border-[#1a2840]">
            <p className="font-mono text-[12px] text-gray-500 dark:text-gray-400">
              星海の白雪と蒼穹の聖域 Project © 2026 ShirayukinoComp
            </p>
            <a
              href={WHATSAPP_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#1a3763] dark:hover:bg-[#254679] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full transition-all shadow-md font-mono"
            >
              <IoLogoWhatsapp className="text-[#25D366] text-lg" />
              <span>START PROLOGUE ON WHATSAPP</span>
              <HiArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
