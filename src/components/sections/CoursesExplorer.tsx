"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { efalCourses } from "@/data/efal";
import { posCourses } from "@/data/pos";

type Track = "Graduação" | "EFAL" | "Pós-graduação";

type Entry = {
  key: string;
  track: Track;
  icon: LucideIcon;
  code?: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  /** Link para fora do fluxo interno de curso (mailto, site da IPB, etc.). */
  external?: boolean;
  /** Texto do call-to-action no rodapé do card. */
  actionLabel?: string;
  isNew?: boolean;
  isPlaceholder?: boolean;
};

/**
 * Bacharel: o processo seletivo é unificado da IPB (funciona como um "Enem"
 * denominacional) e a inscrição é feita direto no site da IPB, fora do
 * controle do Simonton. O card leva à página interna /bacharel (que hoje traz
 * a coordenação e receberá o passo a passo, docentes, etc.).
 */
const bacharel: Entry = {
  key: "bacharelado",
  track: "Graduação",
  icon: GraduationCap,
  title: "Curso Livre de Bacharelado em Teologia",
  description:
    "Nossa formação teológica completa, o carro-chefe do Seminário. O ingresso é pelo processo seletivo unificado da IPB, que habilita o candidato a escolher entre os seminários da denominação.",
  meta: "Presencial · Rio de Janeiro",
  href: "/bacharel",
};

const efalEntries: Entry[] = efalCourses.map((c) => ({
  key: `efal-${c.slug}`,
  track: "EFAL",
  icon: BookOpen,
  code: c.code,
  title: c.title,
  description: c.tagline,
  meta: c.duration !== "A definir" ? c.duration : c.format,
  href: `/cursos-online/${c.slug}`,
  isNew: c.isNew,
}));

const posEntries: Entry[] = posCourses.map((c) => ({
  key: `pos-${c.slug}`,
  track: "Pós-graduação",
  icon: ScrollText,
  title: c.title,
  description: c.tagline,
  meta: c.format,
  href: `/cursos-online/${c.slug}`,
  isPlaceholder: c.isPlaceholder,
}));

const allEntries: Entry[] = [bacharel, ...efalEntries, ...posEntries];

const filters: { label: string; value: Track | "Todos" }[] = [
  { label: "Todos", value: "Todos" },
  { label: "Graduação", value: "Graduação" },
  { label: "EFAL", value: "EFAL" },
  { label: "Pós-graduação", value: "Pós-graduação" },
];

function CardInner({ entry }: { entry: Entry }) {
  const { icon: Icon } = entry;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-2">
          {entry.isNew && (
            <span className="rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Novo
            </span>
          )}
          {entry.isPlaceholder && (
            <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
              Em breve
            </span>
          )}
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {entry.code ?? entry.track}
          </span>
        </div>
      </div>
      <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
        {entry.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {entry.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
        <span className="text-xs text-stone-500">{entry.meta}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
          {entry.external ? (
            <>
              {entry.actionLabel ?? "Acessar"} <ArrowUpRight size={14} />
            </>
          ) : (
            <>
              Ver curso <ArrowRight size={14} />
            </>
          )}
        </span>
      </div>
    </>
  );
}

export default function CoursesExplorer() {
  const [active, setActive] = useState<Track | "Todos">("Todos");
  const visible =
    active === "Todos"
      ? allEntries
      : allEntries.filter((e) => e.track === active);

  const cardClass =
    "group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg";

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      {/* Filtro por trilha */}
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((f) => {
          const isActive = active === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => setActive(f.value)}
              aria-pressed={isActive}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-900 text-white"
                  : "border border-brand-900/15 bg-white text-brand-800 hover:bg-brand-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((entry) =>
          entry.external ? (
            <a
              key={entry.key}
              href={entry.href}
              target={entry.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={cardClass}
            >
              <CardInner entry={entry} />
            </a>
          ) : (
            <Link key={entry.key} href={entry.href} className={cardClass}>
              <CardInner entry={entry} />
            </Link>
          )
        )}
      </div>
    </section>
  );
}
