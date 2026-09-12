"use client";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { useLanguage } from "./LanguageContext";

const faqsData = {
  id: [
    {
      question: "Gameplay seperti apa yang bisa saya harapkan?",
      answer:
        "Perpaduan mulus antara narasi visual novel yang mendalam dan pertempuran JRPG taktis berbasis giliran. Anda mengumpulkan bahan celestial di reruntuhan alam liar, menempa relik magis di bengkel suaka, dan bertarung dalam formasi tim strategis.",
    },
    {
      question: "Apakah ada percabangan cerita dan berbagai ending?",
      answer:
        "Ya. Cerita memiliki 4 cabang narasi utama dan beragam rute akhir yang ditentukan oleh pilihan dialog serta tingkat kepercayaan rekan petualangan Anda.",
    },
    {
      question: "Apakah game ini kompatibel dengan Steam Deck?",
      answer:
        "Tentu! Engine game mendukung tata letak kontroler penuh, penskalaan resolusi asli Steam Deck (1280x800), kustomisasi tombol, dan performa stabil 60 FPS.",
    },
    {
      question: "Bagaimana cara mendapatkan soundtrack orisinal game?",
      answer:
        "Semua 45+ trek orisinal tersedia dalam format digital FLAC/MP3 berkualitas tinggi melalui Deluxe Sanctuary Pack, atau edisi CD fisik kolektor 3-disc di Sound Vault.",
    },
    {
      question: "Bolehkah kreator konten melakukan streaming dan monetisasi?",
      answer:
        "Sangat boleh! ShirayukinoComp menyambut hangat para VTuber, streamer, dan reviewer. Tersedia opsi 'Mode Ramah Streamer' di menu pengaturan agar bebas dari klaim hak cipta musik.",
    },
  ],
  en: [
    {
      question: "What type of gameplay can I expect?",
      answer:
        "A seamless fusion of visual novel storytelling and strategic turn-based JRPG combat. You gather celestial materials in wilderness ruins, craft celestial relics in your sanctuary forge, and battle in tactical party formations.",
    },
    {
      question: "Are there branching story routes and multiple endings?",
      answer:
        "Yes. The story features 4 main narrative branches and multiple endings determined by your choices during pivotal dialogue scenes and companion trust levels.",
    },
    {
      question: "Will the game be compatible with Steam Deck?",
      answer:
        "Yes! The engine supports full controller layout, native resolution scaling for Steam Deck (1280x800), custom keybindings, and a smooth 60 FPS experience.",
    },
    {
      question: "How can I obtain the original soundtrack?",
      answer:
        "All 45+ original tracks are available digitally in FLAC/MP3 format with the Deluxe Sanctuary Pack, or as a 3-disc physical collector's CD in the Sound Vault edition.",
    },
    {
      question: "Can content creators stream and monetize gameplay?",
      answer:
        "Yes! ShirayukinoComp welcomes VTubers, streamers, and reviewers. A 'Streamer-Friendly Mode' is available in the options to avoid copyright flags on platform streams.",
    },
  ],
};

export function FaqSection() {
  const { lang } = useLanguage();
  const faqs = faqsData[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full border-t border-[#e7e3df] dark:border-[#1a2840] transition-colors duration-300">
      <div className="mx-auto max-w-[1440px] px-[21px] py-16 sm:px-6 lg:px-8">
        <div className="grid items-stretch lg:grid-cols-[0.38fr_0.62fr]">
          {/* Left Column with Vertical Border */}
          <div className="border-[#e7e3df] dark:border-[#1a2840] py-[24px] lg:border-r lg:pr-[15px] transition-colors">
            <div className="flex h-full flex-col justify-between rounded-[21px] bg-[#f1ece8] dark:bg-[#0c1524] border border-transparent dark:border-[#1a2840] px-8 py-8 sm:px-10 transition-colors shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8f8b86] dark:text-[#7f93b0] transition-colors">
                  {lang === "id" ? "FAQ & Panduan Circle" : "FAQ & Circle Guidelines"}
                </p>
                <h2 className="mt-8 max-w-[310px] text-[34px] font-semibold leading-[0.98] tracking-[-0.065em] text-black dark:text-white sm:text-[45px] transition-colors">
                  {lang === "id" ? "Pertanyaan yang Sering Diajukan" : "Frequently asked questions"}
                </h2>
              </div>
              <p className="max-w-[300px] text-[12px] leading-[1.4] text-[#465158] dark:text-[#a0aec0] mt-8 transition-colors">
                {lang === "id"
                  ? "Segala hal yang perlu Anda ketahui mengenai mekanisme gameplay, platform, dan rencana rilis."
                  : "Everything you need to know about gameplay mechanics, platforms, and release plans."}
              </p>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:pl-[30px] flex flex-col justify-center">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[#e7e3df] dark:border-[#1a2840] transition-colors">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between py-6 text-left transition-colors group"
                  >
                    <span className="text-[17px] font-medium text-black dark:text-white group-hover:text-[#142d55] dark:group-hover:text-[#E5BA68] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#e7e3df] dark:border-[#1a2840] bg-white dark:bg-[#0c1524] text-black dark:text-white transition-all duration-300 ${
                        isOpen ? "rotate-45 bg-[#f1ece8] dark:bg-[#162742] text-[#142d55] dark:text-[#E5BA68]" : ""
                      }`}
                    >
                      <IoAddOutline size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pt-1 text-[14px] leading-[1.65] text-[#555] dark:text-[#a0aec0] animate-in fade-in slide-in-from-top-2 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
