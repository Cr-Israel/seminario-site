import { ArrowRight } from "lucide-react";

/**
 * Faixa de CTA intermediária para reforçar a conversão entre as objeções e o
 * conteúdo do curso — texto à esquerda, botão à direita. Server Component.
 */
export default function CitCtaBand() {
  return (
    <section className="bg-brand-900">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-xl font-serif text-2xl font-bold text-white sm:text-3xl">
          Comece sua formação teológica ainda neste semestre.
        </h2>
        <a
          href="#matricula"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
        >
          Quero me inscrever <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
