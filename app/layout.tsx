import type { Metadata } from "next";
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "ShirayukinoComp | 常闇の女王と秘密の隠れ家 - Story RPG & Studio",
  description:
    "Official website of ShirayukinoComp. Discover our flagship story RPG & visual novel project '常闇の女王と秘密の隠れ家', tactical combat, original soundtrack, devlogs, and creative works.",
  openGraph: {
    title: "ShirayukinoComp | 常闇の女王と秘密の隠れ家",
    description:
      "A narrative-rich JRPG combining visual novel storytelling, tactical exploration, and celestial fantasy worldbuilding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable}`}
    >
      <head>
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
      </head>
      <body className="min-h-screen bg-white dark:bg-[#070b12] px-3 sm:px-4 font-sans antialiased text-black dark:text-[#e6edf8] transition-colors duration-300">
        <ThemeProvider>
          <div className="mx-auto min-h-screen max-w-[1200px] border-x border-[#d9d4cf] dark:border-[#1a2840] bg-white dark:bg-[#070b12] transition-colors duration-300">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


