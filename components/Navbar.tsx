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
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      {/* 1. Static Top Header (Scrolls naturally with content, line never follows) */}
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
          <ThemeToggle />

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

          {/* Mobile / Tablet Hamburger Button */}
          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className={`lg:hidden flex items-center justify-center w-9 h-9 rounded-full border border-[#e8e3dd] dark:border-[#1f304d] transition-colors shrink-0 ${
              isMobileOpen
                ? "bg-[#f3f0ec] dark:bg-[#121d2f] hover:bg-[#ebe6df]"
                : "hover:bg-gray-100 dark:hover:bg-[#101a2b] text-black dark:text-white"
            }`}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? (
              <IoCloseOutline size={22} />
            ) : (
              <IoMenuOutline size={20} />
            )}
          </button>
        </div>
      </header>

      {/* 2. Floating Rounded Pill Navbar (Appears on Scroll, Compact & Capsule Shaped) */}
      <nav
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled && !isMobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto scale-100"
            : "-translate-y-16 opacity-0 pointer-events-none scale-95"
        }`}
        aria-label="Floating navigation"
      >
        <div className="flex items-center justify-between gap-3 sm:gap-5 rounded-full border border-[#e2ddd7] dark:border-[#223552] bg-white/90 dark:bg-[#0c1424]/90 px-3.5 sm:px-5 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          {/* Logo in Pill */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none"
            aria-label="ShirayukinoComp Home"
          >
            <ShirayukinoLogo imgClassName="h-6 sm:h-7" />
          </Link>

          {/* Desktop Links in Pill */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0 pl-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-mono text-[#52525b] dark:text-[#94a3b8] hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions in Pill */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <ThemeToggle />

            <a
              href="#gameplay"
              className="inline-flex items-center px-3.5 sm:px-4 py-1.5 text-[12px] sm:text-[13px] font-medium rounded-full bg-[#142d55] hover:bg-[#0c1e3a] dark:bg-[#203f6f] dark:hover:bg-[#284e88] text-white transition-all shadow-sm whitespace-nowrap"
            >
              Play Demo
            </a>

            {/* Mobile / Tablet Hamburger in Pill */}
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full border border-[#e8e3dd] dark:border-[#1f304d] hover:bg-gray-100 dark:hover:bg-[#101a2b] text-black dark:text-white transition-colors shrink-0"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <IoCloseOutline size={20} />
              ) : (
                <IoMenuOutline size={18} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-x-0 top-0 bottom-0 z-50 mx-auto w-full max-w-[1200px] lg:hidden ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMobileOpen}
      >
        <div
          className={`flex h-full origin-top flex-col justify-between overflow-y-auto bg-white dark:bg-[#070b12] px-[21px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isMobileOpen
              ? "translate-y-0 scale-y-100 opacity-100"
              : "-translate-y-4 scale-y-[0.98] opacity-0"
          }`}
        >
          <div className="pt-6">
            {/* Header inside overlay with close button */}
            <div className="flex items-center justify-between pb-8 border-b border-[#e7e3df] dark:border-[#1a2840]">
              <ShirayukinoLogo imgClassName="h-7" />
              <div className="flex items-center gap-2.5">
                <ThemeToggle />
                <button
                  onClick={closeMobile}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#e8e3dd] dark:border-[#1f304d] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-[#101a2b] transition-colors"
                  aria-label="Close menu"
                >
                  <IoCloseOutline size={22} />
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="mt-8 space-y-3 sm:space-y-4">
              {mobileMenuPrimary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="block text-[2rem] sm:text-[2.6rem] font-bold text-black dark:text-white hover:text-[#142d55] dark:hover:text-[#60a5fa] transition-colors leading-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-10 space-y-2.5">
              {mobileMenuSecondary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="block text-[15px] font-medium text-gray-800 dark:text-gray-300 hover:text-[#142d55] dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pb-8">
            <a
              href="#gameplay"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-[#142d55] dark:bg-[#1a3763] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-[#0c1e3a] transition-colors"
            >
              ENTER SECRET HIDEOUT <HiArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
