"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi2";
import { ThemeToggle } from "./ThemeToggle";

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
  { label: "Story & RPG", href: "#gameplay" },
  { label: "World", href: "#world" },
  { label: "Editions", href: "#editions" },
  { label: "Devlog", href: "#devlog" },
  { label: "Community", href: "#community" },
];

const mobileMenuPrimary = [
  { label: "Story & RPG", href: "#gameplay" },
  { label: "World", href: "#world" },
  { label: "Editions", href: "#editions" },
  { label: "Devlog", href: "#devlog" },
  { label: "Community", href: "#community" },
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
        className="w-full h-[90px] sm:h-[92px] bg-white dark:bg-[#070b12] px-[21px] flex items-center justify-between border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300"
        role="banner"
      >
        {/* Left: Logo & Desktop Links */}
        <div className="flex items-center gap-5 sm:gap-6 shrink-0">
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="ShirayukinoComp Home"
          >
            <ShirayukinoLogo imgClassName="h-8 sm:h-9" />
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

        {/* Right: Theme Toggle + Wishlist + Play Demo Button */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="lg:hidden">
            <ThemeToggle />
          </div>

          <a
            href="#editions"
            className="hidden xl:inline-flex text-[13px] font-mono text-[#444] dark:text-[#94a3b8] hover:text-[#142d55] dark:hover:text-white px-3 py-1.5 transition-colors whitespace-nowrap"
          >
            Wishlist Steam
          </a>
          <a
            href="#gameplay"
            className="inline-flex items-center font-medium rounded-full px-4 sm:px-5 py-[7px] sm:py-2 text-[13px] sm:text-[14px] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-[#223553] hover:bg-gray-50 dark:hover:bg-[#121c2d] transition-all whitespace-nowrap"
          >
            Play Demo
          </a>

          {/* Mobile / Tablet Hamburger Button when at top */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[#e8e3dd] dark:border-[#1f304d] hover:bg-gray-100 dark:hover:bg-[#101a2b] text-black dark:text-white transition-colors shrink-0"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="flex flex-col items-center justify-center gap-1.5 w-5 h-5">
              <span className="block h-[2px] w-4.5 bg-current rounded-full" />
              <span className="block h-[2px] w-4.5 bg-current rounded-full" />
            </div>
          </button>
        </div>
      </header>

      {/* Floating Controls - Aligned exactly with the 1200px architectural grid lines */}
      <div className="fixed top-4 sm:top-6 inset-x-3 sm:inset-x-4 mx-auto max-w-[1200px] pointer-events-none z-50">
        <div className="relative w-full">
          {/* Floating Round Button in Top-Right (Positioned directly on the straight vertical line) */}
          <div
            className={`absolute right-0 top-0 flex items-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isScrolled || isMenuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
                : "-translate-y-6 opacity-0 pointer-events-none scale-90"
            }`}
          >
            {/* Theme Toggle beside the round button - hidden on desktop mode */}
            {!isMenuOpen && (
              <div className="lg:hidden mr-2 sm:mr-3 pointer-events-auto">
                <ThemeToggle />
              </div>
            )}

            {/* The Iconic Round Circular Menu Button centered right on the vertical straight line */}
            <div className="translate-x-0 sm:translate-x-1/2 pointer-events-auto">
              <button
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={`group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_35px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.7)] ${
                  isMenuOpen
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-black border border-neutral-700 dark:border-gray-200"
                    : "bg-white text-black dark:bg-white dark:text-black border border-gray-200/80 dark:border-white/20"
                }`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <IoCloseOutline size={26} className="transition-transform duration-200 group-hover:rotate-90" />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-[5px] w-6 h-6">
                    <span className="block h-[2.2px] w-5 bg-black rounded-full transition-all duration-300 group-hover:w-6" />
                    <span className="block h-[2.2px] w-5 bg-black rounded-full transition-all duration-300 group-hover:w-4" />
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
        <div className="flex h-full flex-col justify-between max-w-[1200px] mx-auto px-6 sm:px-12 py-8 sm:py-12 overflow-y-auto">
          {/* Top of drawer with Logo and ThemeToggle */}
          <div className="flex items-center justify-between">
            <ShirayukinoLogo imgClassName="h-8 sm:h-9" />
            <div className="flex items-center gap-3">
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
              href="#gameplay"
              onClick={closeMenu}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#142d55] dark:bg-[#1a3763] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#0c1e3a] transition-all shadow-md"
            >
              ENTER SECRET HIDEOUT <HiArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
