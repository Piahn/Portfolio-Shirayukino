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
      setIsScrolled(window.scrollY > 20);
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

  const isFloating = isScrolled && !isMobileOpen;

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-500 ease-out ${
          isFloating
            ? "h-[74px] sm:h-[78px] bg-transparent px-3 pt-3 sm:px-4 pointer-events-none"
            : "h-[90px] sm:h-[92px] bg-white dark:bg-[#070b12] px-0 pt-0 border-b border-[#e7e3df] dark:border-[#1a2840]"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isFloating
              ? "pointer-events-auto mx-auto h-[52px] sm:h-[54px] w-full rounded-full border border-[#e8e3dd] dark:border-[#1f304d] bg-white/90 dark:bg-[#0c1424]/90 px-3 sm:px-5 shadow-[0_18px_55px_rgba(17,17,17,0.08)] dark:shadow-[0_18px_55px_rgba(0,0,0,0.5)] backdrop-blur-3xl"
              : "h-[90px] sm:h-[92px] w-full bg-white dark:bg-[#070b12] px-[21px]"
          }`}
        >
          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-5 sm:gap-6 shrink-0">
            <Link
              href="/"
              className="flex items-center shrink-0 group focus:outline-none"
              aria-label="ShirayukinoComp Home"
            >
              <ShirayukinoLogo />
            </Link>

            {/* Desktop Nav Links */}
            <div
              className={`hidden lg:flex items-center transition-all duration-500 ease-out rounded-full shrink-0 ${
                isFloating
                  ? "bg-transparent px-0 py-0 gap-4 xl:gap-7 ml-1"
                  : "bg-[#f1eeea] dark:bg-[#111a2b] px-1.5 py-[3px] gap-1 border border-transparent dark:border-[#1d2c46]"
              }`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[13px] font-mono transition-all duration-200 whitespace-nowrap ${
                    isFloating
                      ? "text-[#52525b] dark:text-[#94a3b8] hover:text-black dark:hover:text-white"
                      : "px-3.5 py-[6px] text-[#444] dark:text-[#94a3b8] hover:text-black dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-[#1a2840]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Theme Toggle + Wishlist + Play Demo Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            <a
              href="#editions"
              className={`hidden xl:inline-flex text-[13px] font-mono transition-colors whitespace-nowrap ${
                isFloating
                  ? "text-[#52525b] dark:text-[#94a3b8] hover:text-[#142d55] dark:hover:text-white px-1.5 py-1"
                  : "text-[#444] dark:text-[#94a3b8] hover:text-[#142d55] dark:hover:text-white px-3 py-1.5"
              }`}
            >
              Wishlist Steam
            </a>
            <a
              href="#gameplay"
              className={`inline-flex items-center font-medium rounded-full transition-all whitespace-nowrap ${
                isFloating
                  ? "px-4 sm:px-5 py-1.5 text-[13px] text-neutral-800 dark:text-gray-200 border border-[#d6d1ca] dark:border-[#2a3f63] hover:bg-[#142d55] dark:hover:bg-[#1d3760] hover:text-white hover:border-[#142d55]"
                  : "px-4 sm:px-5 py-[7px] sm:py-2 text-[13px] sm:text-[14px] text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-[#223553] hover:bg-gray-50 dark:hover:bg-[#121c2d]"
              }`}
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
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`fixed top-[92px] bottom-0 inset-x-0 z-40 mx-auto w-[calc(100%-24px)] max-w-[1200px] border-x border-[#e7e3df] dark:border-[#1a2840] sm:w-[calc(100%-32px)] lg:hidden ${
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
          <div className="pt-16 sm:pt-20">
            <nav className="space-y-3 sm:space-y-4">
              {mobileMenuPrimary.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="block text-[2.2rem] sm:text-[2.8rem] font-bold text-black dark:text-white hover:text-[#142d55] dark:hover:text-[#60a5fa] transition-colors leading-tight"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-12 space-y-2.5">
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
          <div className="mt-8 -mx-[21px]">
            <a
              href="#gameplay"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2.5 w-full py-5 bg-[#142d55] dark:bg-[#1a3763] text-white text-[11px] font-semibold tracking-[0.2em] uppercase rounded-t-2xl hover:bg-[#0c1e3a] transition-colors"
            >
              ENTER SECRET HIDEOUT <HiArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
