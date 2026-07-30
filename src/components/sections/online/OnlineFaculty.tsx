"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { courseTitleByCode } from "@/data/facultyDirectory";
import type { OnlineProfessor } from "@/data/professors";

function initials(name: string) {
  const parts = name
    .replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1][0] ?? "") : "";
  return (first + last).toUpperCase() || "?";
}

/** Quantos chips de curso mostrar por card antes do "+n". */
const MAX_CHIPS = 3;

/** Largura do card (w-60 = 240px) + gap (16px), usada no passo das setas. */
const SCROLL_STEP = 256;

const chipClass =
  "rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-800";

/** Seta do carrossel — verde sólido no hover, como os CTAs primários do site. */
const arrowClass =
  "mb-4 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-900/15 bg-white text-brand-800 shadow-sm transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white sm:flex";

type Props = {
  professors: OnlineProfessor[];
  /** Parágrafo de apresentação — cada núcleo fala do seu corpo docente. */
  description: string;
};

/**
 * Vitrine do corpo docente — carrossel horizontal com os docentes das grades
 * do núcleo que renderiza a seção. A ideia é dar rosto aos cursos: o professor
 * é parte do produto. Sem foto cadastrada, o card mostra as iniciais.
 *
 * Em tema claro, no padrão de card do resto do site (branco sobre stone-50):
 * o tratamento escuro anterior brigava com as seções vizinhas.
 */
export default function OnlineFaculty({ professors, description }: Props) {
  const railRef = useRef<HTMLUListElement>(null);

  function scrollRail(direction: 1 | -1) {
    railRef.current?.scrollBy({
      left: direction * SCROLL_STEP * 2,
      behavior: "smooth",
    });
  }

  return (
    <section id="professores" className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          {/* A contagem vive no rótulo: é dado de credibilidade, não controle
              — ao lado das setas ela competia com os botões do carrossel. */}
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Corpo docente · {professors.length} professores
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Conheça quem vai ensinar você
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            {description}
          </p>
        </div>

        {/* Setas e trilho na mesma linha: o trilho é o item flexível e encolhe
            para caber entre elas, então as setas ficam ao lado dos cards em
            qualquer largura, sem nunca cobri-los. O `mb-4` compensa o `pb-4`
            do trilho, para as setas caírem no meio do card. */}
        <div className="mt-10 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => scrollRail(-1)}
            aria-label="Professores anteriores"
            aria-controls="trilho-professores"
            className={arrowClass}
          >
            <ChevronLeft size={18} />
          </button>

          <ul
            id="trilho-professores"
            ref={railRef}
            className="min-w-0 flex-1 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [mask-image:linear-gradient(to_right,#000_calc(100%-5rem),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {professors.map((professor) => (
              <li
                key={professor.name}
                className="flex w-60 shrink-0 snap-start flex-col rounded-sm border border-brand-900/10 bg-white p-6 text-center shadow-[0_2px_16px_rgba(0,65,23,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,65,23,0.16)]"
              >
                <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-brand-100">
                  {professor.photo ? (
                    <Image
                      src={professor.photo}
                      alt={professor.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100 to-brand-200">
                      <span className="font-serif text-2xl font-bold text-brand-900">
                        {initials(professor.name)}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="mt-4 font-serif text-base font-bold leading-snug text-brand-950">
                  {professor.name}
                </h3>
                {professor.credential && (
                  <p className="mt-1 text-xs italic leading-snug text-stone-500">
                    {professor.credential}
                  </p>
                )}

                {/* Empurra os chips para a base: com credencial ou sem ela, as
                  siglas ficam alinhadas entre os cards da fileira. */}
                <div className="mt-3 flex flex-1 flex-wrap content-end justify-center gap-1.5">
                  {professor.courses.slice(0, MAX_CHIPS).map((code) => (
                    <span
                      key={code}
                      title={courseTitleByCode[code] ?? code}
                      className={chipClass}
                    >
                      {code}
                    </span>
                  ))}
                  {professor.courses.length > MAX_CHIPS && (
                    <span
                      title={professor.courses
                        .slice(MAX_CHIPS)
                        .map((code) => courseTitleByCode[code] ?? code)
                        .join(" · ")}
                      className={chipClass}
                    >
                      +{professor.courses.length - MAX_CHIPS}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => scrollRail(1)}
            aria-label="Próximos professores"
            aria-controls="trilho-professores"
            className={arrowClass}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3">
          <p className="text-xs text-stone-500 sm:hidden">
            Deslize para ver todos os professores
          </p>
          <Link
            href="/corpo-docente"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-brand-900"
          >
            Ver o corpo docente completo do Seminário
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
