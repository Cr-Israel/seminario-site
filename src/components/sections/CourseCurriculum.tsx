"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

type Discipline = {
  name: string;
  /** Usado na Pós (Gestão Ministerial): nome do professor sob a disciplina. */
  professor?: string;
  /** Docente responsável (EFAL) — exibido no topo do painel expansível. */
  docente?: string;
  /** Ementa (tópicos das aulas). Quando presente, a disciplina vira acordeão. */
  ementa?: string[];
};

/** "Professor" / "Professor em aberto" ainda sem nome definido no calendário. */
const DOCENTE_INDEFINIDO = new Set(["Professor", "Professor em aberto"]);

function docenteLabel(docente?: string) {
  if (!docente || DOCENTE_INDEFINIDO.has(docente)) return "Docente a definir";
  return docente;
}

/** Balãozinho numerado da disciplina, reutilizado nas duas variantes. */
function NumberBadge({ n }: { n: number }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-xs font-bold text-brand-800">
      {n}
    </span>
  );
}

/**
 * Bloco "Grade curricular" das páginas de curso.
 *
 * - Sem `ementa`: lista numerada estática em duas colunas (Pós). Se houver
 *   `professor`, mostra o nome sob a disciplina.
 * - Com `ementa`: acordeão inline (EFAL). Cada disciplina é um `<button>` que
 *   expande, logo abaixo, um painel com o docente e a ementa. Um aberto por vez.
 *
 * Não renderiza nada quando a grade ainda não foi definida.
 */
export default function CourseCurriculum({
  disciplines,
}: {
  disciplines: Discipline[];
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (disciplines.length === 0) return null;

  const interactive = disciplines.some((d) => (d.ementa?.length ?? 0) > 0);

  return (
    <div className="mt-12">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-xl font-bold text-brand-950">
          Grade curricular
        </h2>
        <span className="text-xs uppercase tracking-wider text-stone-500">
          {disciplines.length} disciplinas
        </span>
      </div>

      {interactive ? (
        <ol className="mt-6 space-y-2.5">
          {disciplines.map((discipline, i) => {
            const open = openIndex === i;
            const headingId = `${baseId}-head-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            const ementa = discipline.ementa ?? [];

            return (
              <li
                key={`${i}-${discipline.name}`}
                className="overflow-hidden rounded-sm border border-brand-900/10 bg-white"
              >
                <h3>
                  <button
                    id={headingId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex min-h-[3.25rem] w-full items-center gap-3.5 p-4 text-left transition-colors hover:bg-brand-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-700"
                  >
                    <NumberBadge n={i + 1} />
                    <span className="min-w-0 flex-1 text-sm font-medium leading-snug text-brand-950">
                      {discipline.name}
                    </span>
                    <ChevronDown
                      size={20}
                      aria-hidden="true"
                      className={`shrink-0 text-brand-700 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>

                {/* Transição de altura suave via grid-template-rows (0fr → 1fr),
                    sem medir a altura em JS e sem "pulo" de layout. */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-brand-900/10 px-4 pb-4 pt-3.5 sm:pl-[3.375rem]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                        Docente
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-brand-800">
                        {docenteLabel(discipline.docente)}
                      </p>

                      <p className="mt-3.5 text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                        Ementa
                      </p>
                      <ul className="mt-2 space-y-2">
                        {ementa.map((aula, j) => (
                          <li
                            key={j}
                            className="flex gap-2.5 text-sm leading-snug text-stone-600"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                            />
                            <span>{aula}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {disciplines.map((discipline, i) => (
            <li
              key={`${i}-${discipline.name}`}
              className="flex gap-3.5 rounded-sm border border-brand-900/10 bg-white p-4"
            >
              <NumberBadge n={i + 1} />
              <div className="min-w-0">
                <p className="text-sm font-medium leading-snug text-brand-950">
                  {discipline.name}
                </p>
                {discipline.professor && (
                  <p className="mt-1 text-xs text-brand-700">
                    {discipline.professor}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
