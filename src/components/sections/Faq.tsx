"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-brand-900/10 overflow-hidden rounded-sm border border-brand-900/10 bg-white">
          {faqItems.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-serif text-base font-bold text-brand-950">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-700 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <p className="px-6 pb-6 text-sm leading-relaxed text-stone-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
