"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import type { Docente } from "@/data/docentes";

/** Iniciais para o retrato de quem ainda não tem foto no acervo. */
function initials(name: string) {
  return name
    .replace(/^(Rev\.|Profª|Prof\.)\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * Retrato quadrado 4:5 que preenche o topo do card. Com foto, mostra o retrato;
 * sem foto, um tile de gradiente da marca com as iniciais — assim o grid não
 * fica com buracos quando falta imagem.
 */
function Portrait({ docente }: { docente: Docente }) {
  if (docente.photo) {
    return (
      <Image
        src={docente.photo}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }
  return (
    <span
      aria-hidden
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-700 to-brand-950 font-serif text-4xl font-bold text-white/90"
    >
      {initials(docente.name)}
    </span>
  );
}

/** Avatar circular usado no cabeçalho do modal. */
function Avatar({ docente }: { docente: Docente }) {
  if (docente.photo) {
    return (
      <Image
        src={docente.photo}
        alt=""
        width={128}
        height={128}
        className="h-16 w-16 shrink-0 rounded-full object-cover ring-1 ring-brand-900/10"
      />
    );
  }
  return (
    <span
      aria-hidden
      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-700 to-brand-950 font-serif text-lg font-bold text-white/90"
    >
      {initials(docente.name)}
    </span>
  );
}

/**
 * Vitrine do corpo docente: grid de cards-retrato clicáveis. Cada professor é um
 * botão que abre um <dialog> nativo com o perfil completo (foto, função,
 * credencial e bio) — o <dialog> já entrega foco preso, Esc e clique no fundo.
 */
export default function FacultyGrid({ docentes }: { docentes: Docente[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Docente | null>(null);

  function open(docente: Docente) {
    setSelected(docente);
    dialogRef.current?.showModal();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    // Só o clique no próprio backdrop tem o <dialog> como alvo.
    if (event.target === dialogRef.current) dialogRef.current?.close();
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {docentes.map((docente) => (
          <li key={docente.name}>
            <button
              type="button"
              onClick={() => open(docente)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brand-900/10 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-100">
                <Portrait docente={docente} />

                {docente.role && (
                  <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-medium leading-none text-brand-800 shadow-sm backdrop-blur">
                    {docente.role}
                  </span>
                )}

                {/* Scrim + affordance no hover: sinaliza que o card é clicável */}
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-gradient-to-t from-brand-950/80 to-transparent pb-3 pt-10 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ver perfil <ArrowRight size={13} aria-hidden />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <span className="font-serif text-sm font-bold leading-snug text-brand-950 sm:text-base">
                  {docente.name}
                </span>
                <span className="mt-1 line-clamp-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
                  {docente.credential}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby="faculty-dialog-title"
        className="m-auto max-h-[85vh] w-[min(100vw-2rem,40rem)] overflow-y-auto rounded-2xl border border-white/60 bg-white p-0 shadow-2xl backdrop:bg-brand-950/50 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-900/10 bg-white/90 px-6 py-5 backdrop-blur sm:px-8">
              <div className="flex items-center gap-4">
                <Avatar docente={selected} />
                <div>
                  <h3
                    id="faculty-dialog-title"
                    className="font-serif text-xl font-bold text-brand-950"
                  >
                    {selected.name}
                  </h3>
                  {selected.role && (
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-700">
                      {selected.role}
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label={`Fechar perfil de ${selected.name}`}
                className="mt-1 shrink-0 rounded-full p-2 text-stone-500 transition-colors hover:bg-brand-50 hover:text-brand-900"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-6 sm:px-8 sm:py-8">
              <p className="text-sm font-medium text-brand-800">
                {selected.credential}
              </p>
              {selected.bio ? (
                selected.bio.split("\n\n").map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-base leading-relaxed text-stone-600"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="mt-4 text-base italic leading-relaxed text-stone-500">
                  Biografia completa em breve.
                </p>
              )}
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
