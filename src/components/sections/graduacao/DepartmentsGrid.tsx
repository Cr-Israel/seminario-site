"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { departamentos, type Coordenador, type Departamento } from "@/data/graduacao";

/** Iniciais para o retrato de quem ainda não tem foto no acervo. */
function initials(nome: string) {
  return nome
    .replace(/^(Rev\.|Profª\.?|Prof\.)\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/** Avatar circular do coordenador — foto do acervo ou tile com as iniciais. */
function CoordAvatar({
  coordenador,
  size = 44,
}: {
  coordenador: Coordenador;
  size?: number;
}) {
  const dimension = { width: size, height: size };
  if (coordenador.foto) {
    return (
      <Image
        src={coordenador.foto}
        alt=""
        width={128}
        height={128}
        style={dimension}
        className="shrink-0 rounded-full object-cover ring-1 ring-brand-900/10"
      />
    );
  }
  return (
    <span
      aria-hidden
      style={dimension}
      className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950 font-serif text-sm font-bold text-white/90"
    >
      {initials(coordenador.nome)}
    </span>
  );
}

/**
 * Vitrine dos cinco departamentos: grid de cards clicáveis. Cada card resume o
 * que o departamento estuda e quem o coordena; ao clicar, abre um <dialog>
 * nativo com a grade completa de disciplinas (obrigatórias e optativas). O
 * <dialog> já entrega foco preso, Esc e clique no fundo para fechar.
 */
export default function DepartmentsGrid() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Departamento | null>(null);

  function open(departamento: Departamento) {
    setSelected(departamento);
    dialogRef.current?.showModal();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    // Só o clique no próprio backdrop tem o <dialog> como alvo.
    if (event.target === dialogRef.current) dialogRef.current?.close();
  }

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {departamentos.map((dep) => {
          const Icon = dep.icon;
          const totalDisciplinas =
            dep.obrigatorias.length + dep.optativas.length;
          return (
            <li key={dep.slug}>
              <button
                type="button"
                onClick={() => open(dep)}
                className="group flex h-full w-full flex-col rounded-2xl border border-brand-900/10 bg-white p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>

                <h3 className="mt-5 font-serif text-lg font-bold text-brand-950">
                  {dep.nome}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                  {dep.resumo}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-brand-900/10 pt-5">
                  <CoordAvatar coordenador={dep.coordenador} />
                  <div className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-wider text-brand-700">
                      Coordenação
                    </span>
                    <span className="block truncate font-serif text-sm font-bold text-brand-950">
                      {dep.coordenador.nome}
                    </span>
                  </div>
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-xs font-medium text-brand-700 transition-colors group-hover:text-brand-900">
                  Ver as {totalDisciplinas} disciplinas
                  <ArrowRight
                    size={13}
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby="dep-dialog-title"
        className="m-auto max-h-[85vh] w-[min(100vw-2rem,42rem)] overflow-y-auto rounded-2xl border border-white/60 bg-white p-0 shadow-2xl backdrop:bg-brand-950/50 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-900/10 bg-white/90 px-6 py-5 backdrop-blur sm:px-8">
              <div className="flex items-center gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800"
                >
                  <selected.icon size={24} strokeWidth={1.75} />
                </span>
                <div>
                  <h3
                    id="dep-dialog-title"
                    className="font-serif text-xl font-bold text-brand-950"
                  >
                    {selected.nome}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-700">
                    Coordenação: {selected.coordenador.nome}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label={`Fechar disciplinas de ${selected.nome}`}
                className="mt-1 shrink-0 rounded-full p-2 text-stone-500 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-sm leading-relaxed text-stone-600">
                {selected.resumo}
              </p>

              <div className="mt-8">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-800">
                  Disciplinas do núcleo comum
                </h4>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {selected.obrigatorias.map((disciplina) => (
                    <li
                      key={disciplina}
                      className="flex gap-2.5 text-sm leading-snug text-stone-700"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                      />
                      {disciplina}
                    </li>
                  ))}
                </ul>
              </div>

              {selected.optativas.length > 0 && (
                <div className="mt-8">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-800">
                    Disciplinas eletivas
                  </h4>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {selected.optativas.map((disciplina) => (
                      <li
                        key={disciplina}
                        className="rounded-full border border-brand-900/10 bg-brand-50/60 px-3 py-1 text-xs font-medium text-brand-800"
                      >
                        {disciplina}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
