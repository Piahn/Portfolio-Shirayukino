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
    alternates: {
      canonical: `/${locale}`,
      languages: {
        id: "/id",
        en: "/en",
      },
    },
    icons: {
      icon: [
        { url: "/icon.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "id_ID",
      url: `https://shirayukinocomp.com/${locale}`,
      siteName: "ShirayukinoComp",
      title: isEn
        ? "ShirayukinoComp | The Celestial Snow & Elyrith"
        : "ShirayukinoComp | 星海の白雪と蒼穹の聖域",
      description: isEn
        ? "Official website of ShirayukinoComp. Discover our flagship story RPG project 'The Celestial Snow & Elyrith'."
        : "Situs resmi ShirayukinoComp. Jelajahi proyek game RPG cerita 'The Celestial Snow & Elyrith'.",
      images: [
        {
          url: "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "ShirayukinoComp Studio & The Celestial Snow & Elyrith Visual",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "ShirayukinoComp | The Celestial Snow & Elyrith",
      description:
        "Official website of ShirayukinoComp. Discover our flagship story RPG & visual novel project.",
      images: ["/twitter-image.jpg"],
    },
  };
}

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
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${geistMono.variable} font-sans antialiased text-[#111] dark:text-[#f3f4f6] bg-[#fbfaf8] dark:bg-[#070b12] min-h-screen selection:bg-[#142d55] selection:text-white dark:selection:bg-[#E5BA68] dark:selection:text-[#08101d]`}
      >
        <ThemeProvider>
          <LanguageProvider initialLang={lang}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
