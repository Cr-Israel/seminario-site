"use client";

import { useState } from "react";
import { ChevronDown, Clock, MessageCircle, Phone } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

type FaqItem = { question: string; answer: string };

const faqItems: FaqItem[] = [
  {
    question: "Preciso fazer vestibular para me inscrever?",
    answer:
      "Não. Os cursos online da EFAL e a Pós-graduação têm inscrição direta pelo Simonton — diferente do Bacharelado presencial, que passa pelo processo seletivo unificado da IPB.",
  },
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
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Dúvidas frequentes
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Alguma dúvida?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-stone-600">
            Reunimos aqui as perguntas mais comuns sobre a EFAL e a
            Pós-graduação. Não achou a sua? A secretaria responde direto no
            WhatsApp.
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
              href={whatsappHref(
                "Olá! Tenho uma dúvida sobre os cursos online do Seminário Simonton.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-brand-50 px-6 py-3 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              <MessageCircle size={16} /> Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="divide-y divide-brand-900/10 self-start overflow-hidden rounded-sm border border-brand-900/10 bg-white">
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
