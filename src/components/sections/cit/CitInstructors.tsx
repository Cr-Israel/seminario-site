"use client";

import { useState } from "react";
import Image from "next/image";

type Instructor = {
  name: string;
  role: string;
  discipline: string;
  bio: string;
  /** Caminho em /public — ausente enquanto não temos as fotos reais. */
  photo?: string;
};

// TODO: substituir bios e fotos pelas versões reais dos professores
// (fotos irão para public/images/professores/)
const BIO_PLACEHOLDER =
  "Reverendo da Igreja Presbiteriana do Brasil, com experiência pastoral e docente na formação de líderes. Dedica-se ao ensino teológico reformado e ao discipulado na igreja local. Biografia completa em breve.";

const instructors: Instructor[] = [
  {
    name: "Rev. Diego Maia",
    role: "Professor",
    discipline: "Introdução à Teologia Reformada 1 e 2",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Nilson Santos",
    role: "Professor",
    discipline: "Panorama de História da Igreja",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Renato Prates",
    role: "Professor",
    discipline: "Panorama do Antigo Testamento",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Jayro Alves",
    role: "Professor",
    discipline: "Princípios de Interpretação Bíblica",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Leonard Neumann",
    role: "Professor",
    discipline: "Panorama do Novo Testamento",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Orlando Ferreira",
    role: "Professor",
    discipline: "Noções de Aconselhamento Cristão",
    bio: BIO_PLACEHOLDER,
  },
  {
    name: "Rev. Carlos Vitor",
    role: "Professor",
    discipline: "Evangelização Prática",
    bio: BIO_PLACEHOLDER,
  },
];

function initials(name: string) {
  const parts = name
    .replace(/^Rev\.?\s+/i, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase() || "?";
}

/** Avatar do instrutor — foto real quando houver, iniciais como placeholder. */
function InstructorPhoto({
  person,
  size,
  className,
}: {
  person: Instructor;
  size: number;
  className: string;
}) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt={person.name}
        width={size}
        height={size}
        className={`${className} object-cover`}
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`${className} flex items-center justify-center bg-gradient-to-br from-brand-100 to-brand-50 font-serif font-bold text-brand-800`}
    >
      {initials(person.name)}
    </div>
  );
}

/**
 * "Conheça nossos instrutores" — master-detail interativo: lista rolável de
 * instrutores à esquerda, painel de detalhe (foto grande + bio completa) à
 * direita. No mobile, o detalhe empilha acima da lista. Client Component
 * (useState para a seleção).
 */
export default function CitInstructors() {
  const [selected, setSelected] = useState(0);
  const current = instructors[selected];

  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Quem ensina
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Conheça nossos instrutores
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Reverendos com experiência pastoral e docente conduzem cada
            disciplina do CIT, ao vivo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-10">
          {/* Lista (master) — rolagem independente; abaixo do detalhe no mobile */}
          <div
            role="tablist"
            aria-label="Instrutores do curso"
            aria-orientation="vertical"
            className="order-2 max-h-[560px] space-y-1.5 overflow-y-auto rounded-sm border border-brand-900/10 bg-white p-3 [scrollbar-color:var(--color-brand-200)_transparent] [scrollbar-width:thin] lg:order-1 lg:col-span-2"
          >
            {instructors.map((person, i) => {
              const active = i === selected;
              return (
                <button
                  key={person.name}
                  type="button"
                  role="tab"
                  id={`cit-instructor-tab-${i}`}
                  aria-selected={active}
                  aria-controls="cit-instructor-panel"
                  onClick={() => setSelected(i)}
                  className={`flex w-full items-center gap-3.5 rounded-sm border-l-2 p-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-700 ${
                    active
                      ? "border-brand-700 bg-brand-50"
                      : "border-transparent hover:bg-brand-50/50"
                  }`}
                >
                  <InstructorPhoto
                    person={person}
                    size={48}
                    className="h-12 w-12 shrink-0 rounded-lg text-base"
                  />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-brand-950">
                      {person.name}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-brand-700">
                      {person.discipline}
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-stone-500 line-clamp-1">
                      {person.bio}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detalhe do selecionado — acima da lista no mobile */}
          <div
            role="tabpanel"
            id="cit-instructor-panel"
            aria-labelledby={`cit-instructor-tab-${selected}`}
            className="order-1 flex flex-col items-start gap-6 rounded-sm border border-brand-900/10 bg-white p-6 sm:flex-row sm:gap-8 sm:p-8 lg:order-2 lg:col-span-3"
          >
            {/* Retrato com tamanho próprio (não estica com a altura do card):
                items-start no flex + dimensões fixas w-44/h-55 (proporção 4:5). */}
            <div className="h-55 w-44 shrink-0 overflow-hidden rounded-xl">
              <InstructorPhoto
                person={current}
                size={352}
                className="h-full w-full object-cover text-4xl"
              />
            </div>
            <div className="min-w-0">
              <h3 className="font-serif text-2xl font-bold text-brand-950 sm:text-3xl">
                {current.name}
              </h3>
              <p className="mt-1 text-sm text-stone-500">{current.role}</p>
              <p className="mt-1 text-sm font-medium text-brand-700">
                {current.discipline}
              </p>
              <p className="mt-5 text-base leading-relaxed text-stone-600">
                {current.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
