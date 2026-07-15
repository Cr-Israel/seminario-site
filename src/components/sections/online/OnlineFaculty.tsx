"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { onlineProfessors } from "@/data/professors";

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

/** Largura do card (w-72 = 288px) + gap (20px), usada no passo das setas. */
const SCROLL_STEP = 308;

/**
 * Vitrine do corpo docente — carrossel horizontal de cards em efeito vidro
 * (glassmorphism) sobre fundo escuro, com todos os docentes das grades da
 * EFAL e da Pós. A ideia é dar rosto aos cursos: o professor é parte do
 * produto. Sem foto cadastrada, o card mostra as iniciais.
 */
export default function OnlineFaculty() {
  const railRef = useRef<HTMLUListElement>(null);

  function scrollRail(direction: 1 | -1) {
    railRef.current?.scrollBy({
      left: direction * SCROLL_STEP * 2,
      behavior: "smooth",
    });
  }

  return (
    <section
      id="professores"
      className="relative overflow-hidden bg-brand-950 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      {/* Orbes de cor atrás dos cards — é o que o vidro desfoca. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-8 h-96 w-96 rounded-full bg-brand-700/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-brand-200/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              Corpo docente
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Conheça quem vai ensinar você
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-100/80">
              Cada disciplina tem um rosto: pastores e professores que unem
              vida, ministério e sala de aula — da EFAL à Pós-graduação.
            </p>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              aria-label="Professores anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollRail(1)}
              aria-label="Próximos professores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <ul
          ref={railRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {onlineProfessors.map((professor) => (
            <li
              key={professor.name}
              className="w-72 shrink-0 snap-start rounded-xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md transition-colors hover:bg-white/15"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-2 ring-white/20">
                {professor.photo ? (
                  <Image
                    src={professor.photo}
                    alt={professor.name}
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-400/50 to-brand-700/70">
                    <span className="font-serif text-3xl font-bold text-white">
                      {initials(professor.name)}
                    </span>
                  </div>
                )}
              </div>

              <h3 className="mt-5 font-serif text-lg font-bold leading-snug text-white">
                {professor.name}
              </h3>
              {professor.credential && (
                <p className="mt-1 text-sm italic text-brand-200/90">
                  {professor.credential}
                </p>
              )}

              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {professor.courses.slice(0, MAX_CHIPS).map((code) => (
                  <span
                    key={code}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-100"
                  >
                    {code}
                  </span>
                ))}
                {professor.courses.length > MAX_CHIPS && (
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-100">
                    +{professor.courses.length - MAX_CHIPS}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-xs text-brand-100/50 sm:hidden">
          Deslize para ver todos os professores
        </p>
      </div>
    </section>
  );
}
