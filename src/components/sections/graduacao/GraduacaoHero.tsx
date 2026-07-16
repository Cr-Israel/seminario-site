import ModalidadeBadge from "@/components/ui/ModalidadeBadge";
import { whatsappHref } from "@/lib/whatsapp";

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
          <ModalidadeBadge nivel="bacharelado" modalidade="presencial" tone="dark" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
            Formação Presbiteriana Reformada · Rio de Janeiro
          </span>
        </div>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Uma formação teológica completa, para quem foi chamado ao ministério
          pastoral
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          O Bacharelado em Teologia é o carro-chefe do Seminário Simonton:
          formação presencial e integral em teologia reformada, seguindo a grade
          curricular aprovada pelo Supremo Concílio da Igreja Presbiteriana do
          Brasil.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#processo-seletivo"
            className="rounded-sm bg-brand-50 px-7 py-3.5 text-center text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Como ingressar
          </a>
          <a
            href={whatsappHref(
              "Olá! Gostaria de informações sobre o Bacharelado em Teologia."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Falar com a secretaria
          </a>
        </div>
      </div>
    </section>
  );
}
