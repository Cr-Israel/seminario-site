"use client";

import { useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import {
  facultyDirectory,
  courseTitleByCode,
  type FacultyMember,
} from "@/data/facultyDirectory";

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

/** Retrato circular — foto do acervo ou tile com as iniciais. */
function Avatar({ member, size }: { member: FacultyMember; size: number }) {
  if (member.photo) {
    return (
      <Image
        src={member.photo}
        alt=""
        width={size * 2}
        height={size * 2}
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full object-cover ring-2 ring-brand-100"
      />
    );
  }
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-100 to-brand-300 font-serif font-bold text-brand-900 ring-2 ring-brand-100"
    >
      {initials(member.name)}
    </span>
  );
}

/** Chips dos cursos em que o docente leciona (códigos, com título no tooltip). */
function CourseChips({ courses }: { courses: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {courses.map((code) => (
        <span
          key={code}
          title={courseTitleByCode[code] ?? code}
          className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-800"
        >
          {code}
        </span>
      ))}
    </div>
  );
}

/**
 * Diretório completo do corpo docente do STPS — Graduação, Pós-graduação e
 * EFAL numa lista só (dados de facultyDirectory). Cada docente é um card
 * clicável que abre um <dialog> nativo com a biografia completa, a função
 * institucional e a lista dos cursos em que leciona (com os nomes por extenso).
 */
export default function FacultyDirectory() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<FacultyMember | null>(null);

  function open(member: FacultyMember) {
    setSelected(member);
    dialogRef.current?.showModal();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) dialogRef.current?.close();
  }

  return (
    <section className="bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ul className="grid items-start gap-6 md:grid-cols-2">
          {facultyDirectory.map((member) => (
            <li key={member.name}>
              <button
                type="button"
                onClick={() => open(member)}
                className="group flex h-full w-full items-center gap-5 rounded-xl border border-brand-900/10 bg-white p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2"
              >
                <Avatar member={member} size={80} />

                <div className="min-w-0 flex-1">
                  <h2 className="font-serif text-lg font-bold leading-snug text-brand-950">
                    {member.name}
                  </h2>
                  {member.role && (
                    <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-brand-700">
                      {member.role}
                    </p>
                  )}
                  {member.credential && (
                    <p className="mt-1 text-sm italic text-stone-500">
                      {member.credential}
                    </p>
                  )}
                  <div className="mt-2">
                    <CourseChips courses={member.courses} />
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-brand-700 opacity-0 transition-opacity group-hover:opacity-100">
                    Ver perfil <ArrowRight size={13} aria-hidden />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Legenda dos códigos de curso usados nos chips. */}
        <dl className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-stone-600">
          {Object.entries(courseTitleByCode).map(([code, title]) => (
            <div key={code} className="flex gap-1.5">
              <dt className="font-semibold uppercase tracking-wider">{code}</dt>
              <dd>— {title}</dd>
            </div>
          ))}
        </dl>
      </div>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        aria-labelledby="docente-dialog-title"
        className="m-auto max-h-[85vh] w-[min(100vw-2rem,40rem)] overflow-y-auto rounded-2xl border border-white/60 bg-white p-0 shadow-2xl backdrop:bg-brand-950/50 backdrop:backdrop-blur-sm"
      >
        {selected && (
          <>
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-900/10 bg-white/90 px-6 py-5 backdrop-blur sm:px-8">
              <div className="flex items-center gap-4">
                <Avatar member={selected} size={64} />
                <div>
                  <h3
                    id="docente-dialog-title"
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
              {selected.credential && (
                <p className="text-sm font-medium text-brand-800">
                  {selected.credential}
                </p>
              )}
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

              <div className="mt-8 border-t border-brand-900/10 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-800">
                  Cursos em que leciona
                </h4>
                <ul className="mt-3 flex flex-col gap-2">
                  {selected.courses.map((code) => (
                    <li
                      key={code}
                      className="flex items-center gap-2.5 text-sm text-stone-700"
                    >
                      <span
                        aria-hidden
                        className="rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-800"
                      >
                        {code}
                      </span>
                      {courseTitleByCode[code] ?? code}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
