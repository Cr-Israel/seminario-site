import { ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

const steps = [
  {
    title: "Inscrição no Vestibular Unificado",
    text: "O ingresso não é feito diretamente pelo Simonton. Você se inscreve no processo seletivo unificado da Igreja Presbiteriana do Brasil, organizado pela Junta de Educação Teológica (JET).",
  },
  {
    title: "Prova única para toda a denominação",
    text: "É um processo seletivo único, aplicado ao mesmo tempo para todos os seminários da IPB — funciona de forma parecida com um vestibular nacional da denominação.",
  },
  {
    title: "Aprovação e escolha do seminário",
    text: "Aprovado, o candidato fica habilitado a estudar em qualquer seminário da IPB — e pode escolher o Simonton como seu seminário de destino.",
  },
];

export default function AdmissionProcess() {
  return (
    <section id="processo-seletivo" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-start md:gap-20">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Como ingressar
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            O ingresso é pelo processo seletivo da IPB
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Diferente dos cursos online, o Bacharelado não tem matrícula direta.
            A seleção é conduzida pela própria Igreja Presbiteriana do Brasil,
            por meio da Junta de Educação Teológica — um processo único para toda
            a denominação, cuja aprovação habilita o candidato a escolher entre
            os seminários da IPB, incluindo o Simonton.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.ipb.org.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-900 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-950"
            >
              Entenda o processo seletivo <ArrowUpRight size={16} />
            </a>
            <a
              href={whatsappHref(
                "Olá! Gostaria de informações sobre o Bacharelado em Teologia e o processo seletivo da IPB."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-900/20 px-6 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-brand-50"
            >
              <MessageCircle size={16} /> Fale com a secretaria
            </a>
          </div>
        </div>

        <ol className="flex flex-col gap-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-5 rounded-sm border border-brand-900/10 bg-white p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-base font-bold text-brand-800">
                {i + 1}
              </span>
              <div>
                <h3 className="font-serif text-base font-bold text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
