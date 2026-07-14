import Link from "next/link";
import { ArrowRight, Check, GraduationCap } from "lucide-react";

/**
 * Destaque da Graduação na Home — o Bacharelado em Teologia, formação
 * presencial com ingresso pelo Vestibular Unificado da IPB. Prévia da
 * página /graduacao.
 */
const highlights = [
  "Presencial · Rio de Janeiro",
  "Ingresso pelo Vestibular Unificado da IPB",
  "Currículo aprovado pelo Supremo Concílio da IPB",
];

export default function GraduationHighlight() {
  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Graduação · Presencial
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Bacharelado em Teologia
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            A formação teológica completa do Seminário, para quem foi chamado
            ao ministério pastoral. O ingresso é pelo Vestibular Unificado da
            Igreja Presbiteriana do Brasil.
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-brand-900"
              >
                <Check
                  size={16}
                  strokeWidth={2.25}
                  className="shrink-0 text-brand-700"
                />
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/graduacao"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Conhecer a Graduação <ArrowRight size={16} />
          </Link>
        </div>

        {/* Painel visual em verde institucional, no estilo do cartão de
            citação da página de Graduação. */}
        <div className="relative">
          <div className="aspect-[4/3] w-full rounded-sm bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-10 text-white">
            <GraduationCap
              size={32}
              strokeWidth={1.5}
              className="text-brand-200"
            />
            <p className="mt-8 font-serif text-2xl font-bold leading-snug sm:text-3xl">
              Do vestibular ao ministério pastoral
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-100/80">
              A trilha clássica de quem é vocacionado ao pastorado na IPB:
              estudo presencial das Escrituras, da teologia reformada e da
              prática ministerial, em uma casa com mais de quatro décadas de
              história.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
