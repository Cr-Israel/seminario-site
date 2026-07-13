"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

const faqItems: FaqItem[] = [
  {
    question: "Preciso ter formação teológica para fazer o CIT?",
    answer:
      "Não. O curso é o primeiro contato com a teologia acadêmica e é aberto a líderes e cristãos em geral, sem exigência de conhecimento prévio.",
  },
  {
    question: "Como funcionam as aulas?",
    answer:
      "São 100% online e ao vivo (remoto), em horário marcado — não são gravações assíncronas.",
  },
  {
    question: "Qual é a duração do curso?",
    answer: "Até 6 meses, distribuídos nas 8 disciplinas.",
  },
  // [CONFIRMAR] certificado — validar com a secretaria
  {
    question: "O curso tem certificado?",
    answer:
      "Sim. Ao concluir, o aluno recebe Certificado de Conclusão emitido pelo Seminário. É um curso livre, com reconhecimento intracorpus sob a autoridade da Junta de Educação Teológica (JET) da Igreja Presbiteriana do Brasil.",
  },
  {
    question: "É reconhecido pelo MEC?",
    answer:
      "O CIT é um curso livre, sem submissão à avaliação do MEC; seu reconhecimento é intracorpus, no âmbito da IPB.",
  },
  // [CONFIRMAR] avaliação — validar com a secretaria
  {
    question: "O curso tem avaliação?",
    answer: "Sim, há avaliações ao longo das disciplinas.",
  },
  // [CONFIRMAR VALOR] valores e matrícula — validar com a secretaria
  {
    question: "Quanto custa e como faço a matrícula?",
    answer:
      "Fale com a secretaria para valores e condições atualizadas e para garantir sua vaga na próxima turma.",
  },
];

/**
 * FAQ do CIT — accordion leve próprio (useState), centralizado e estreito.
 * Client Component por causa da interatividade.
 */
export default function CitFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div>
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
                    aria-hidden="true"
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
