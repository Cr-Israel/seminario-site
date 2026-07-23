import { ArrowUpRight, FileText } from "lucide-react";
import {
  ADMISSAO_INSCRICAO_URL,
  MANUAL_CANDIDATO_URL,
} from "@/data/graduacao";

/**
 * CTA final da /graduacao — repete os dois passos reais do processo de
 * admissão 2027 (inscrição na JET e Manual do Candidato).
 */
export default function GraduacaoCtaFinal() {
  return (
    <section id="admissao" className="scroll-mt-24 bg-brand-950 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Dê o próximo passo na sua vocação
          </h2>
          <p className="mt-3 text-base leading-relaxed text-brand-100/80">
            As inscrições para o processo de admissão 2027 são pela JET. Leia o
            Manual do Candidato e faça a sua inscrição.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:items-end">
          <a
            href={ADMISSAO_INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Fazer inscrição — Admissão 2027 <ArrowUpRight size={16} aria-hidden />
          </a>
          <a
            href={MANUAL_CANDIDATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-100/80 transition-colors hover:text-white"
          >
            <FileText size={15} aria-hidden /> Manual do Candidato 2027
          </a>
        </div>
      </div>
    </section>
  );
}
