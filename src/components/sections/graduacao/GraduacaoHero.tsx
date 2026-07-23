import { ArrowUpRight, FileText } from "lucide-react";
import ModalidadeBadge from "@/components/ui/ModalidadeBadge";
import {
  ADMISSAO_INSCRICAO_URL,
  MANUAL_CANDIDATO_URL,
} from "@/data/graduacao";

/**
 * Hero da /graduacao — Curso Livre de Bacharelado em Teologia. Fundo escuro,
 * badges de natureza (curso livre · presencial) e os dois CTAs reais do
 * processo de admissão 2027 (inscrição na JET e Manual do Candidato).
 */
export default function GraduacaoHero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          <ModalidadeBadge nivel="curso-livre" modalidade="presencial" tone="dark" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
            Formação Presbiteriana Reformada · Rio de Janeiro
          </span>
        </div>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Curso Livre de Bacharelado em Teologia
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          Uma sólida formação na teologia reformada, presencial e integral. O
          currículo reflete o aprovado pela Igreja Presbiteriana do Brasil para
          todos os seus seminários, e o ingresso se dá pelo processo de admissão
          da JET, a Junta de Educação Teológica da IPB.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href={ADMISSAO_INSCRICAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-center text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Fazer inscrição — Admissão 2027 <ArrowUpRight size={16} aria-hidden />
          </a>
          <a
            href={MANUAL_CANDIDATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <FileText size={16} aria-hidden /> Manual do Candidato 2027
          </a>
        </div>
      </div>
    </section>
  );
}
