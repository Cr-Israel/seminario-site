"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, ScrollText, type LucideIcon } from "lucide-react";
import { efalCourses } from "@/data/efal";
import { posCourses } from "@/data/pos";

type Tab = "EFAL" | "Pós-graduação";

type CourseCard = {
  key: string;
  href: string;
  icon: LucideIcon;
  code: string;
  title: string;
  description: string;
  meta: string;
  isNew?: boolean;
  isPlaceholder?: boolean;
};

const efalCards: CourseCard[] = efalCourses.map((c) => ({
  key: c.slug,
  href: `/efal/${c.slug}`,
  icon: BookOpen,
  code: c.code,
  title: c.title,
  description: c.tagline,
  meta: c.duration !== "A definir" ? c.duration : c.format,
  isNew: c.isNew,
}));

const posCards: CourseCard[] = posCourses.map((c) => ({
  key: c.slug,
  href: `/pos/${c.slug}`,
  icon: ScrollText,
  code: "Pós",
  title: c.title,
  description: c.tagline,
  meta: c.format,
  isPlaceholder: c.isPlaceholder,
}));

const tabs: { label: Tab; count: number }[] = [
  { label: "EFAL", count: efalCards.length },
  { label: "Pós-graduação", count: posCards.length },
];

function Card({ card }: { card: CourseCard }) {
  const { icon: Icon } = card;
  return (
    <Link
      href={card.href}
      className="group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <div className="flex items-center gap-2">
          {card.isNew && (
            <span className="rounded-full bg-brand-700 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              Novo
            </span>
          )}
          {card.isPlaceholder && (
            <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
              Em breve
            </span>
          )}
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {card.code}
          </span>
        </div>
      </div>
      <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
        {card.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {card.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
        <span className="text-xs text-stone-500">{card.meta}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
          Ver curso <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

export default function OnlineCourses() {
  const [active, setActive] = useState<Tab>("EFAL");
  const cards = active === "EFAL" ? efalCards : posCards;

  return (
    <section id="cursos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Nossos cursos online
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Escolha por onde começar
        </h2>
      </div>

      {/* Abas EFAL / Pós-graduação */}
      <div
        role="tablist"
        aria-label="Filtrar cursos por tipo"
        className="mt-10 flex flex-wrap justify-center gap-3"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.label;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.label)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-900 text-white"
                  : "border border-brand-900/15 bg-white text-brand-800 hover:bg-brand-50"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                  isActive ? "bg-white/20 text-white" : "bg-brand-50 text-brand-700"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </section>
  );
}
