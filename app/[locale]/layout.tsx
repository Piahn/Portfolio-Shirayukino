import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider, type Lang } from "@/components/LanguageContext";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "id" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    metadataBase: new URL("https://shirayukinocomp.com"),
    title: {
      default: isEn
        ? "ShirayukinoComp | The Celestial Snow & Elyrith - Story RPG & Studio"
        : "ShirayukinoComp | 星海の白雪と蒼穹の聖域 - Story RPG & Studio",
      template: "%s | ShirayukinoComp",
    },
    description: isEn
      ? "Official website of ShirayukinoComp (シラユキノコンプ). Discover our flagship story RPG & visual novel project '星海の白雪と蒼穹の聖域' (The Celestial Snow & Elyrith), tactical combat timeline, 45-track orchestral soundtrack vault, circle devlogs, and community sanctuary."
      : "Situs web resmi ShirayukinoComp (シラユキノコンプ). Jelajahi game RPG cerita & visual novel '星海の白雪と蒼穹の聖域' (The Celestial Snow & Elyrith), pertarungan taktis berbasis giliran, brankas 45 trek orkestra, devlog circle, dan suaka komunitas.",
    keywords: [
      "ShirayukinoComp",
      "シラユキノコンプ",
      "星海の白雪と蒼穹の聖域",
      "The Celestial Snow & Elyrith",
      "JRPG",
      "Story RPG",
      "Visual Novel",
      "Indie Game Studio",
      "Tactical Timeline Battles",
      "Celestial Sea",
      "Soundtrack Vault",
      "Anime Fantasy RPG",
      "Turn-based RPG",
    ],
    authors: [{ name: "ShirayukinoComp Creative Circle" }],
    creator: "ShirayukinoComp",
    publisher: "ShirayukinoComp",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "id_ID",
      alternateLocale: isEn ? ["id_ID", "ja_JP"] : ["en_US", "ja_JP"],
      url: `https://shirayukinocomp.com/${locale}`,
      siteName: "ShirayukinoComp",
      title: isEn
        ? "ShirayukinoComp | The Celestial Snow & Elyrith - Story RPG & Studio"
        : "ShirayukinoComp | 星海の白雪と蒼穹の聖域 - Story RPG & Studio",
      description: isEn
        ? "A narrative-rich JRPG combining visual novel storytelling, tactical timeline battles, 45-track celestial soundtrack, and breathtaking fantasy worldbuilding."
        : "Game RPG cerita orisinal dengan visual novel, linimasa pertarungan taktis, 45 trek orkestra, dan suaka komunitas ShirayukinoComp.",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ShirayukinoComp - 星海の白雪と蒼穹の聖域 Official Key Art",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isEn
        ? "ShirayukinoComp | The Celestial Snow & Elyrith"
        : "ShirayukinoComp | 星海の白雪と蒼穹の聖域",
      description: isEn
        ? "A narrative-rich JRPG combining visual novel storytelling, tactical timeline battles, and celestial fantasy worldbuilding."
        : "Game RPG cerita orisinal dengan visual novel, linimasa pertarungan taktis, dan suaka komunitas.",
      images: ["/og-image.jpg"],
      creator: "@shirayukinocomp",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
      },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shirayukinocomp.com/#organization",
      name: "ShirayukinoComp",
      alternateName: "シラユキノコンプ",
      url: "https://shirayukinocomp.com",
      logo: "https://shirayukinocomp.com/shirayukino.png",
      sameAs: [
        "https://discord.gg/shirayukinocomp",
        "https://store.steampowered.com",
        "https://twitter.com/shirayukinocomp",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://shirayukinocomp.com/#website",
      url: "https://shirayukinocomp.com",
      name: "ShirayukinoComp Official Studio",
      publisher: {
        "@id": "https://shirayukinocomp.com/#organization",
      },
    },
    {
      "@type": "VideoGame",
      "@id": "https://shirayukinocomp.com/#game",
      name: "星海の白雪と蒼穹の聖域",
      alternateName: [
        "The Celestial Snow & Elyrith",
        "Seikai no Shirayuki to Soukyuu no Seiiki",
      ],
      description:
        "A narrative-rich JRPG combining visual novel branching storytelling, tactical timeline initiative battles, and celestial fantasy worldbuilding.",
      genre: ["Story RPG", "Visual Novel", "Tactical Turn-Based RPG"],
      gamePlatform: ["PC", "Steam", "Steam Deck"],
      applicationCategory: "Game",
      operatingSystem: "Windows, SteamOS",
      inLanguage: ["ja", "en", "id"],
      publisher: {
        "@id": "https://shirayukinocomp.com/#organization",
      },
      image: "https://shirayukinocomp.com/og-image.jpg",
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Lang = locale === "en" ? "en" : "id";

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#070b12" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('shirayukino-theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-[#070b12] px-3 sm:px-4 font-sans antialiased text-black dark:text-[#e6edf8] transition-colors duration-300">
        <LanguageProvider initialLang={lang}>
          <ThemeProvider>
            <div className="mx-auto min-h-screen max-w-[1200px] border-x border-[#d9d4cf] dark:border-[#1a2840] bg-white dark:bg-[#070b12] transition-colors duration-300">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
