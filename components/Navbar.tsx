"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMenuOutline, IoCloseOutline, IoLogoWhatsapp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi2";
import { ThemeToggle } from "./ThemeToggle";
import { WHATSAPP_BOT_URL } from "./constants";

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
        alt="ShirayukinoComp"
        className={`${imgClassName} w-auto object-contain transition-transform duration-300 group-hover:scale-105 select-none drop-shadow-sm dark:drop-shadow-[0_2px_10px_rgba(255,255,255,0.18)]`}
      />
    </div>
  );
}

const navLinks = [
  { label: "Story & RPG", href: "/#gameplay" },
  { label: "World", href: "/#world" },
  { label: "Editions", href: "/#editions" },
  { label: "Devlog", href: "/devlog" },
  { label: "Community", href: "/#community" },
];

const mobileMenuPrimary = [
  { label: "Story & RPG", href: "/#gameplay" },
  { label: "World", href: "/#world" },
  { label: "Editions", href: "/#editions" },
  { label: "Devlog", href: "/devlog" },
  { label: "Community", href: "/#community" },
];

const mobileMenuSecondary = [
  { label: "Steam Page", href: "https://store.steampowered.com" },
  { label: "Discord Circle", href: "#community" },
  { label: "Soundtrack Vault", href: "#editions" },
  { label: "Home", href: "/" },
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

  // Prevent body scroll when menu overlay is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* 1. Static Top Header (Normal state when at top, scrolls away with content) */}
      <header
        className="w-full h-[68px] sm:h-[90px] bg-white dark:bg-[#070b12] px-3 sm:px-4 md:px-[21px] flex items-center justify-between border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300"
        role="banner"
      >
        {/* Left: Logo & Desktop Links */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="ShirayukinoComp Home"
          >
            <ShirayukinoLogo imgClassName="h-7 sm:h-8 md:h-9" />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className="hidden lg:flex items-center rounded-full shrink-0 bg-[#f1eeea] dark:bg-[#111a2b] px-1.5 py-[3px] gap-1 border border-transparent dark:border-[#1d2c46]"
            aria-label="Desktop navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-[6px] text-[13px] font-mono text-[#444] dark:text-[#94a3b8] hover:text-black dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-[#1a2840] transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Wishlist + Play Demo Button + Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href="#editions"
            className="hidden xl:inline-flex text-[13px] font-mono text-[#444] dark:text-[#94a3b8] hover:text-[#142d55] dark:hover:text-white px-3 py-1.5 transition-colors whitespace-nowrap"
          >
            Wishlist Steam
          </a>
          <a
            href={WHATSAPP_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-medium rounded-full px-4 sm:px-5 py-[7px] sm:py-2 text-[12px] sm:text-[13px] text-gray-800 dark:text-gray-100 bg-[#edf3fc] hover:bg-[#dfeaf8] dark:bg-[#111d33] dark:hover:bg-[#182845] border border-[#cfe0f8] dark:border-[#223859] transition-all whitespace-nowrap shadow-sm font-mono"
          >
            <IoLogoWhatsapp className="text-[#25D366] text-base" />
            <span>Play on WhatsApp</span>
          </a>

          {/* Mobile / Tablet Hamburger Button when at top */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-[#0c1524] border border-[#e8e3dd] dark:border-[#1f304d] hover:bg-gray-100 dark:hover:bg-[#101a2b] text-black dark:text-white transition-colors shrink-0 shadow-sm"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col items-center justify-center gap-[4.5px] w-5 h-5 pointer-events-none">
              <span className="block h-[2.2px] w-[18px] bg-black dark:bg-white rounded-full" />
              <span className="block h-[2.2px] w-[14px] bg-black dark:bg-white rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Floating Controls - Aligned exactly with the 1200px architectural grid lines */}
      <div className="fixed top-3.5 sm:top-5 xl:top-6 inset-x-3 sm:inset-x-4 xl:inset-x-0 mx-auto max-w-[1200px] pointer-events-none z-50">
        <div className="relative w-full">
          {/* Floating Round Button in Top-Right */}
          <div
            className={`absolute right-1 sm:right-3 xl:right-0 top-0 flex items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled || isMenuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
                : "-translate-y-6 opacity-0 pointer-events-none scale-90"
            }`}
          >
            {/* The Iconic Round Circular Menu Button */}
            {/* On mobile & tablet (< 1280px): translate-x-0 stays safely inside screen bounds */}
            {/* On desktop (xl: >=1280px): translate-x-1/2 centered directly on the 1200px grid line */}
            <div className="translate-x-0 xl:translate-x-1/2 pointer-events-auto">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="group flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-[68px] xl:h-[68px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.85)] bg-white dark:bg-[#0c1524] text-black dark:text-white border border-gray-200/90 dark:border-[#1f304d] hover:bg-gray-50 dark:hover:bg-[#101c30]"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <>
                    <IoCloseOutline size={24} className="sm:hidden transition-transform duration-200 group-hover:rotate-90 text-black dark:text-white" />
                    <IoCloseOutline size={28} className="hidden sm:block xl:hidden transition-transform duration-200 group-hover:rotate-90 text-black dark:text-white" />
                    <IoCloseOutline size={32} className="hidden xl:block transition-transform duration-200 group-hover:rotate-90 text-black dark:text-white" />
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-[4px] sm:gap-[5px] xl:gap-[6px] pointer-events-none">
                    <span className="block h-[2.2px] sm:h-[2.6px] xl:h-[3px] w-[18px] sm:w-[22px] xl:w-[26px] bg-black dark:bg-white rounded-full transition-all duration-300 group-hover:w-[26px]" />
                    <span className="block h-[2.2px] sm:h-[2.6px] xl:h-[3px] w-[14px] sm:w-[17px] xl:w-[21px] bg-black dark:bg-white rounded-full transition-all duration-300 group-hover:w-[21px]" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Fullscreen Navigation Overlay (Opens when clicking the round button) */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-[#070b12]/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex h-full flex-col justify-between max-w-[1200px] mx-auto px-4 sm:px-12 py-6 sm:py-12 overflow-y-auto">
          {/* Top of drawer with Logo and ThemeToggle (discreetly accessible inside drawer) */}
          <div className="flex items-center justify-between pr-14 sm:pr-20">
            <ShirayukinoLogo imgClassName="h-7 sm:h-8 md:h-9" />
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-[#0c1424] border border-gray-200 dark:border-[#1f304d]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          {/* Center Navigation Links */}
          <div className="my-auto py-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8f8b86] dark:text-[#7f93b0] mb-6">
              Menu Navigation
            </p>
            <nav className="space-y-4 sm:space-y-6">
              {mobileMenuPrimary.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center gap-4 text-[2.2rem] sm:text-[3.2rem] font-bold text-black dark:text-white hover:text-[#142d55] dark:hover:text-[#68a5e5] transition-colors leading-tight"
                >
                  <span className="font-mono text-[13px] font-normal text-gray-400 group-hover:text-[#142d55] dark:group-hover:text-[#68a5e5] transition-colors">
                    0{idx + 1}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-[#e7e3df] dark:border-[#1a2840]">
              {mobileMenuSecondary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[15px] font-medium text-gray-700 dark:text-gray-300 hover:text-[#142d55] dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Action in Drawer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e7e3df] dark:border-[#1a2840]">
            <p className="font-mono text-[12px] text-gray-500 dark:text-gray-400">
              常闇の女王と秘密の隠れ家 Project © 2026 ShirayukinoComp
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
