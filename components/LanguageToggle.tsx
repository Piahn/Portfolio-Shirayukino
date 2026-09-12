"use client";

import { useState, useEffect, useCallback } from "react";
import { IoGlobeOutline } from "react-icons/io5";

type Lang = "id" | "en";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export function LanguageToggle({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "inline";
}) {
  const [currentLang, setCurrentLang] = useState<Lang>("id");
  const [isLoaded, setIsLoaded] = useState(false);

  // Set Google Translate Cookie across domains
  const setTranslateCookie = useCallback((targetLang: Lang) => {
    const val = targetLang === "en" ? "/id/en" : "/id/id";
    const host = window.location.hostname;
    document.cookie = `googtrans=${val}; path=/;`;
    document.cookie = `googtrans=${val}; path=/; domain=${host};`;
    // If hostname has subdomain or is localhost
    if (host.includes(".")) {
      const parts = host.split(".");
      if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join(".");
        document.cookie = `googtrans=${val}; path=/; domain=.${rootDomain};`;
      }
    }
  }, []);

  // Programmatically trigger Google Translate combo box change
  const triggerGoogleTranslate = useCallback(
    (targetLang: Lang) => {
      setTranslateCookie(targetLang);
      localStorage.setItem("shirayukino-lang", targetLang);
      setCurrentLang(targetLang);

      const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (combo) {
        combo.value = targetLang;
        combo.dispatchEvent(new Event("change"));
      } else {
        // Fallback: If combo is not yet in DOM, refresh location to apply cookie
        window.location.reload();
      }
    },
    [setTranslateCookie]
  );

  // Initialize Google Translate Script
  useEffect(() => {
    // Read saved language preference
    const saved = localStorage.getItem("shirayukino-lang") as Lang | null;
    const cookieMatch = document.cookie.match(/googtrans=\/id\/([a-z]{2})/);
    const initialLang: Lang = saved || (cookieMatch?.[1] as Lang) || "id";
    setCurrentLang(initialLang);

    // Setup global callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "id",
            includedLanguages: "id,en",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);

        // Apply initial language if set to English
        if (initialLang === "en") {
          setTimeout(() => {
            const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
            if (combo && combo.value !== "en") {
              combo.value = "en";
              combo.dispatchEvent(new Event("change"));
            }
          }, 300);
        }
      }
    };

    // Ensure anti-highlight styles are appended at the very end of <head>
    const ensureAntiHighlightStyle = () => {
      let styleEl = document.getElementById("anti-google-highlight") as HTMLStyleElement | null;
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "anti-google-highlight";
        document.head.appendChild(styleEl);
      }
      styleEl.innerHTML = `
        html body font.goog-text-highlight,
        html body span.goog-text-highlight,
        html body .goog-text-highlight,
        html body [class*="goog-text-highlight"],
        html body font[style*="background-color"],
        html body span[style*="background-color"],
        html body font:hover,
        html body font font:hover,
        html body span[style*="background-color"]:hover {
          background: transparent !important;
          background-color: transparent !important;
          box-shadow: none !important;
          border: none !important;
          color: inherit !important;
        }
        #goog-gt-tt, #goog-gt-vt, .goog-te-balloon-frame, .goog-tooltip {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
    };
    ensureAntiHighlightStyle();

    // Prevent Google Translate hover listener from setting blue box styles on mouseover
    const onMouseOverCapture = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "FONT" ||
          target.classList?.contains("goog-text-highlight") ||
          target.closest?.(".goog-text-highlight"))
      ) {
        const el = (target.classList?.contains("goog-text-highlight")
          ? target
          : target.closest?.(".goog-text-highlight") || target) as HTMLElement;
        el.classList.remove("goog-text-highlight");
        if (el.style) {
          el.style.backgroundColor = "transparent";
          el.style.boxShadow = "none";
        }
      }
    };
    window.addEventListener("mouseover", onMouseOverCapture, true);

    return () => {
      window.removeEventListener("mouseover", onMouseOverCapture, true);
    };
  }, []);

  const isInline = variant === "inline";

  return (
    <div
      translate="no"
      className={`notranslate ${
        isInline
          ? `inline-flex items-center gap-1.5 ${className}`
          : `inline-flex items-center rounded-full bg-[#f1eeea] dark:bg-[#0c1524] p-1 border border-[#e7e3df] dark:border-[#1e3456] transition-colors shadow-sm ${className}`
      }`}
      role="group"
      aria-label="Language Selector"
    >
      <div className={`flex items-center ${isInline ? "px-1 text-gray-400 dark:text-gray-400" : "pl-1.5 pr-1 text-gray-400 dark:text-gray-500"}`}>
        <IoGlobeOutline size={13} className="text-[#142d55] dark:text-[#E5BA68]" />
      </div>

      <div className="flex items-center gap-0.5 font-mono text-[11px] font-semibold">
        {/* Indonesian Button */}
        <button
          type="button"
          translate="no"
          onClick={() => triggerGoogleTranslate("id")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider notranslate ${
            currentLang === "id"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
          aria-pressed={currentLang === "id"}
          title="Bahasa Indonesia"
        >
          <span translate="no" className="notranslate">ID</span>
        </button>

        <span className="text-gray-300 dark:text-gray-600 text-[10px] select-none">/</span>

        {/* English Button */}
        <button
          type="button"
          translate="no"
          onClick={() => triggerGoogleTranslate("en")}
          className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider notranslate ${
            currentLang === "en"
              ? isInline
                ? "bg-white dark:bg-[#1a2840] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/70 dark:border-[#283d5f]"
                : "bg-white dark:bg-[#15233c] text-black dark:text-[#E5BA68] shadow-xs border border-gray-200/80 dark:border-[#223b63]"
              : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          }`}
          aria-pressed={currentLang === "en"}
          title="English"
        >
          <span translate="no" className="notranslate">EN</span>
        </button>
      </div>
    </div>
  );
}
