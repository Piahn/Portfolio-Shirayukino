"use client";

import { useTheme } from "./ThemeProvider";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      className={`relative flex items-center justify-center w-8 h-8 sm:w-[34px] sm:h-[34px] rounded-full border transition-all duration-300 focus:outline-none ${
        isDark
          ? "border-[#25395c] bg-[#101c30] text-[#E5BA68] hover:bg-[#152542] hover:border-[#385485] shadow-[0_0_12px_rgba(229,186,104,0.18)]"
          : "border-[#d8d3cd] bg-white/90 text-gray-700 hover:bg-gray-50 hover:text-black shadow-sm"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode (Ever Darkness)"}
      title={isDark ? "Light Mode" : "Dark Mode (常闇)"}
    >
      {/* Sun Icon */}
      <span
        className={`absolute transition-all duration-500 ease-out transform ${
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
      >
        <IoSunnyOutline size={17} className="stroke-[2.2]" />
      </span>

      {/* Moon Icon with Celestial Star Sparkle */}
      <span
        className={`absolute transition-all duration-500 ease-out transform ${
          isDark
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
        }`}
      >
        <IoMoonOutline size={16} className="stroke-[2.2]" />
      </span>
    </button>
  );
}
