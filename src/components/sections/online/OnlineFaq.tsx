"use client";

import { useState } from "react";
import { ChevronDown, Clock, MessageCircle, Phone } from "lucide-react";
import type { FaqItem } from "@/data/faq";
import { whatsappHref } from "@/lib/whatsapp";

type Props = {
  items: FaqItem[];
  /** Parágrafo de abertura — cada núcleo fala das suas dúvidas frequentes. */
  description: string;
  /** Mensagem que abre no WhatsApp da secretaria. */
  whatsappMessage: string;
};

export default function OnlineFaq({
  items,
  description,
  whatsappMessage,
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-50/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Alguma dúvida?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
            {description}
          </p>

          <div className="mt-9 rounded-xl bg-brand-950 p-7">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              Central de atendimento
            </span>
            <p className="mt-3 text-sm leading-relaxed text-brand-100/80">
              Estamos aqui para ajudar você a escolher o curso certo.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 text-sm text-brand-100/85">
              <span className="flex items-center gap-2.5">
                <Phone size={15} className="shrink-0 text-brand-200" />
                (21) 2201-6734
              </span>
              <span className="flex items-center gap-2.5">
                <Clock size={15} className="shrink-0 text-brand-200" />
                Segunda a sexta, das 13h às 20h
              </span>
            </div>
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-6 py-3 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              <MessageCircle size={16} /> Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="divide-y divide-brand-900/10 self-start overflow-hidden rounded-sm border border-brand-900/10 bg-white">
          {items.map((item, index) => {
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
