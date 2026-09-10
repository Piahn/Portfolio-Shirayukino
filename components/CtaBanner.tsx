import { HiArrowUpRight } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io5";
import { WHATSAPP_BOT_URL } from "./constants";

export function CtaBanner() {
  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="px-[21px] py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-[1220px] flex-col items-start justify-between gap-5 rounded-[18px] bg-gradient-to-r from-[#142d55] to-[#0a172c] dark:from-[#0e1c33] dark:to-[#08101e] px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8 border border-[#23457a] dark:border-[#1e3b68] shadow-sm dark:shadow-[0_6px_30px_rgba(0,0,0,0.45)] transition-all">
          <div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#cba052] dark:text-[#e5ba68] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              ✦ INTERACTIVE PROLOGUE QUEST AVAILABLE
            </span>
            <p className="mt-1.5 max-w-[680px] text-[15px] leading-[1.4] tracking-[-0.01em] sm:text-[18px] text-white">
              Coba 3 chapter pertama secara interaktif lewat WhatsApp Bot resmi kami. Dapatkan kode rahasia untuk klaim item eksklusif saat game rilis!
            </p>
          </div>
          <a
            className="inline-flex items-center gap-2.5 rounded-full bg-white dark:bg-[#e5ba68] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#142d55] dark:text-[#081220] transition hover:bg-[#edf3fc] dark:hover:bg-[#f0c878] shrink-0 font-mono shadow-md group"
            href={WHATSAPP_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className="text-[#25D366] text-base transition-transform group-hover:scale-110" />
            <span>MULAI QUEST DI WHATSAPP</span>
            <HiArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
