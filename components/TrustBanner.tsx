import {
  SiSteam,
  SiSteamdeck,
  SiItchdotio,
  SiGogdotcom,
} from "react-icons/si";
import {
  IoLogoWhatsapp,
  IoLogoDiscord,
  IoStorefront,
  IoCloudDownload,
} from "react-icons/io5";

export function TrustBanner() {
  const platforms = [
    {
      name: "Steam",
      label: "STEAM",
      icon: SiSteam,
      color: "text-[#171a21] dark:text-[#66c0f4]",
      href: "https://store.steampowered.com",
    },
    {
      name: "Steam Deck",
      label: "DECK VERIFIED",
      icon: SiSteamdeck,
      color: "text-[#142d55] dark:text-[#E5BA68]",
      href: "https://store.steampowered.com",
    },
    {
      name: "itch.io",
      label: "ITCH.IO",
      icon: SiItchdotio,
      color: "text-[#fa5c5c]",
      href: "https://itch.io",
    },
    {
      name: "WhatsApp",
      label: "ORDER & CHAT",
      icon: IoLogoWhatsapp,
      color: "text-[#25D366]",
      href: "https://wa.me/?text=Halo%20ShirayukinoComp%2C%20saya%20tertarik%20dengan%20game%20ini",
    },
    {
      name: "Booth",
      label: "BOOTH",
      icon: IoStorefront,
      color: "text-[#fc4d50] dark:text-[#ff787b]",
      href: "https://booth.pm",
    },
    {
      name: "DLsite",
      label: "DLSITE",
      icon: IoCloudDownload,
      color: "text-[#1b75bb] dark:text-[#60a5fa]",
      href: "https://dlsite.com",
    },
    {
      name: "GOG",
      label: "DRM-FREE",
      icon: SiGogdotcom,
      color: "text-[#8c52ff] dark:text-[#c084fc]",
      href: "https://gog.com",
    },
    {
      name: "Discord",
      label: "COMMUNITY",
      icon: IoLogoDiscord,
      color: "text-[#5865F2]",
      href: "#community",
    },
  ];

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left Card */}
          <div className="relative flex flex-col justify-between rounded-[1.75rem] border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] p-7 sm:p-9 lg:p-10 min-h-[380px] sm:min-h-[440px] transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] mb-3 transition-colors">
                Distribution & Compatibility
              </p>
              <h2 className="text-[1.5rem] sm:text-[1.75rem] lg:text-[1.95rem] font-semibold leading-[1.25] tracking-[-0.01em] text-black dark:text-white max-w-[520px] transition-colors">
                <span className="text-gray-500 dark:text-gray-400">Playable seamlessly across </span>
                <span className="text-black dark:text-white">
                  Steam, Steam Deck, Windows PC, digital circle releases, and WhatsApp direct support.
                </span>
              </h2>
            </div>
            <p className="mt-10 text-[12px] sm:text-[13px] leading-[1.55] text-gray-500 dark:text-gray-400 max-w-[420px] transition-colors">
              Optimized for controller, mouse & keyboard, portable handheld gaming with 60 FPS full asset fidelity, and direct community messaging.
            </p>
          </div>

          {/* Right Card with Platform Badges */}
          <div className="rounded-[1.75rem] bg-[#f2eee9] dark:bg-[#08101e] border border-transparent dark:border-[#1a2840] p-6 sm:p-9 lg:p-10 min-h-[380px] sm:min-h-[440px] flex items-center justify-center transition-colors">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5 w-full max-w-[500px]">
              {platforms.map((p) => {
                const Icon = p.icon;

                return (
                  <a
                    key={p.name}
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group relative flex flex-col items-center justify-center py-4 sm:py-5 px-2.5 sm:px-3 rounded-2xl bg-white dark:bg-[#0e1b30] border border-[#e2ddd6] dark:border-[#1e3456] shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#142d55]/40 dark:hover:border-[#E5BA68]/50 hover:shadow-md"
                    title={`Open ${p.name}`}
                  >
                    {/* Pulsing indicator dot for WhatsApp */}
                    {p.name === "WhatsApp" && (
                      <span className="absolute top-2.5 right-2.5 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                      </span>
                    )}

                    <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 mb-1.5 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={22} className={`${p.color} transition-colors`} />
                    </div>
                    <span className="text-[12px] sm:text-[13px] font-semibold text-black dark:text-white transition-colors">
                      {p.name}
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-mono text-[#8f8b86] dark:text-[#7f93b0] tracking-wider mt-0.5 uppercase transition-colors">
                      {p.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
