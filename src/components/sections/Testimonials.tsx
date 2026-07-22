import { Quote } from "lucide-react";
import { depoimentos, type Depoimento } from "@/data/depoimentos";

type Tone = "light" | "dark";

/**
 * Depoimentos — grid sóbrio que mistura egressos do presencial e alunos
 * online/EFAL na mesma seção (cada um identificado discretamente por curso e
 * modalidade). Reutilizável: as páginas de curso passam `items` com os
 * depoimentos específicos do curso.
 *
 * `tone="dark"` (usado na Home) coloca a seção sobre fundo verde com orbes
 * desfocados, e os cards viram vidro fosco (translúcidos + backdrop-blur) —
 * o efeito só se lê sobre um fundo rico, por isso não existe no tom claro.
 */
export default function Testimonials({
  items = depoimentos,
  title = "Vidas formadas nesta casa",
  kicker = "Depoimentos",
  tone = "light",
}: {
  items?: Depoimento[];
  title?: string;
  kicker?: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";

  return (
    <section
      id="depoimentos"
      className={`relative overflow-hidden py-24 ${
        dark ? "bg-brand-950" : "bg-brand-50/60"
      }`}
    >
      {dark && (
        <>
          {/* Orbes que dão "o que desfocar" atrás do vidro. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-400/20 blur-3xl"
          />
        </>
      )}

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className={`text-xs font-medium uppercase tracking-[0.2em] ${
              dark ? "text-brand-200/90" : "text-brand-700"
            }`}
          >
            {kicker}
          </span>
          <h2
            className={`mt-4 font-serif text-3xl font-extrabold sm:text-4xl ${
              dark ? "text-white" : "text-brand-950"
            }`}
          >
            {title}
          </h2>
        </div>

        <div
          className={`mt-12 grid gap-6 sm:grid-cols-2 ${
            items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {items.map((depoimento) => (
            <figure
              key={depoimento.context}
              className={`flex h-full flex-col rounded-sm p-7 ${
                dark
                  ? "border border-white/15 bg-white/10 shadow-xl shadow-black/20 backdrop-blur-xl"
                  : "border border-brand-900/10 bg-white shadow-sm"
              }`}
            >
              <Quote
                size={22}
                className={dark ? "text-brand-300" : "text-brand-400"}
                aria-hidden
              />
              <blockquote
                className={`mt-4 flex-1 text-sm leading-relaxed ${
                  dark ? "text-brand-100/85" : "text-stone-600"
                }`}
              >
                “{depoimento.text}”
              </blockquote>
              <figcaption
                className={`mt-6 flex items-center gap-3 border-t pt-5 ${
                  dark ? "border-white/15" : "border-brand-900/10"
                }`}
              >
                <span
                  aria-hidden
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-sm font-bold ${
                    dark
                      ? "bg-white/15 text-white"
                      : "bg-brand-100 text-brand-800"
                  }`}
                >
                  {depoimento.initials}
                </span>
                <div>
                  <p
                    className={`text-sm font-bold ${
                      dark ? "text-white" : "text-brand-950"
                    }`}
                  >
                    {depoimento.name}
                  </p>
                  <p
                    className={`text-xs ${
                      dark ? "text-brand-100/70" : "text-stone-500"
                    }`}
                  >
                    {depoimento.context}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
