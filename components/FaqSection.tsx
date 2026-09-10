"use client";

import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const faqs = [
  {
    question: "What type of gameplay can I expect?",
    answer:
      "A seamless fusion of visual novel storytelling and strategic turn-based JRPG combat. You gather celestial materials in wilderness ruins, craft battle relics in your atelier hideout, and battle in tactical party formations.",
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
      "All 45+ original tracks are available digitally in FLAC/MP3 format with the Deluxe Hideout Pack, or as a 3-disc physical collector's CD in the Sound Vault edition.",
  },
  {
    question: "Can content creators stream and monetize gameplay?",
    answer:
      "Yes! ShirayukinoComp welcomes VTubers, streamers, and reviewers. A 'Streamer-Friendly Mode' is available in the options to avoid copyright flags on platform streams.",
  },
];

export function FaqSection() {
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
                  FAQ & Circle Guidelines
                </p>
                <h2 className="mt-8 max-w-[310px] text-[34px] font-semibold leading-[0.98] tracking-[-0.065em] text-black dark:text-white sm:text-[45px] transition-colors">
                  Frequently asked questions
                </h2>
              </div>
              <p className="max-w-[300px] text-[12px] leading-[1.4] text-[#465158] dark:text-[#a0aec0] mt-8 transition-colors">
                Everything you need to know about gameplay mechanics, platforms, and release plans.
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
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-white/20"
                  >
                    <span className="max-w-[610px] text-[17px] font-medium leading-tight tracking-[-0.035em] text-black dark:text-white sm:text-[20px] transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-[#f1ece8] dark:bg-[#152338] text-black dark:text-[#E5BA68] transition-all duration-300 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <IoAddOutline size={16} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-6"
                        : "grid-rows-[0fr] opacity-0 pb-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[640px] text-[13px] leading-[1.55] text-[#465158] dark:text-[#a0aec0] sm:text-[14px] transition-colors">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
