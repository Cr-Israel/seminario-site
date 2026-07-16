import { Quote } from "lucide-react";
import { depoimentos, type Depoimento } from "@/data/depoimentos";

/**
 * Depoimentos — grid sóbrio que mistura egressos do presencial e alunos
 * online/EFAL na mesma seção (cada um identificado discretamente por curso e
 * modalidade). Reutilizável: as páginas de curso podem passar `items` com os
 * depoimentos específicos do curso.
 */
export default function Testimonials({
  items = depoimentos,
  title = "Vidas formadas nesta casa",
  kicker = "Depoimentos",
}: {
  items?: Depoimento[];
  title?: string;
  kicker?: string;
}) {
  return (
    <section id="depoimentos" className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            {kicker}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((depoimento) => (
            <figure
              key={depoimento.context}
              className="flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm"
            >
              <Quote size={22} className="text-brand-400" aria-hidden />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-stone-600">
                “{depoimento.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-5">
                <span
                  aria-hidden
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 font-serif text-sm font-bold text-brand-800"
                >
                  {depoimento.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-950">
                    {depoimento.name}
                  </p>
                  <p className="text-xs text-stone-500">{depoimento.context}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
