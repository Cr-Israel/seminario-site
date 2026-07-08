"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

const faqItems: FaqItem[] = [
  {
    question: "Os cursos da EFAL dão certificado?",
    answer:
      "Sim. Os cursos da EFAL são certificados pela Junta Regional de Educação Teológica (JURET) da Igreja Presbiteriana do Brasil.",
  },
  {
    question: "Qual a diferença entre a EFAL e o Bacharelado?",
    answer:
      "A EFAL oferece cursos de curta e média duração (6 a 12 meses) para capacitação pontual de líderes já atuantes na igreja local. O Bacharelado é uma formação teológica completa, presencial, que exige aprovação no processo seletivo unificado da IPB.",
  },
  {
    question: "Como funcionam as aulas ao vivo?",
    answer:
      "As aulas da EFAL e da Pós-graduação acontecem 100% online, com professor ao vivo em horário marcado — não são gravações assíncronas.",
  },
  {
    question: "Quanto tempo tenho para concluir um curso da EFAL?",
    answer:
      "Depende do curso: CIT e CAL têm duração de até 6 meses; CFO e CFP, até 12 meses.",
  },
  // REVISAR COM A SECRETARIA
  {
    question:
      "Preciso ser membro de uma igreja da IPB para estudar na EFAL ou na Pós-graduação?",
    answer:
      "Os cursos são abertos a interessados em teologia reformada; recomendamos confirmar com a secretaria eventuais requisitos específicos de cada curso.",
  },
  // REVISAR COM A SECRETARIA
  {
    question: "Os cursos são pagos? Tem mensalidade?",
    answer:
      "Entre em contato com a secretaria para valores e condições atualizadas de cada curso.",
  },
];

export default function OnlineFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-50/60 py-24">
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
