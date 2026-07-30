"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  MonitorPlay,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import type { CourseCard, CourseCardIcon } from "./courseCards";

const cardIcons: Record<CourseCardIcon, LucideIcon> = {
  book: BookOpen,
  scroll: ScrollText,
};

function CardBadges({ card }: { card: CourseCard }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {card.enrollmentOpen && (
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-800">
          Matrículas abertas · 2026.2
        </span>
      )}
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
  );
}

/** Metadados de decisão do card: duração, formato e data real de início. */
function CardMeta({ card }: { card: CourseCard }) {
  const items = [
    { icon: Clock, text: card.duration },
    { icon: MonitorPlay, text: card.format },
    { icon: CalendarDays, text: card.startInfo },
  ].filter((item): item is { icon: LucideIcon; text: string } =>
    Boolean(item.text),
  );
  if (items.length === 0) return null;
  return (
    <ul className="mt-4 flex flex-col gap-1.5">
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="flex items-center gap-2 text-xs text-stone-600">
          <Icon size={13} className="shrink-0 text-brand-700" />
          {text}
        </li>
      ))}
    </ul>
  );
}

function Card({ card }: { card: CourseCard }) {
  const Icon = cardIcons[card.icon];
  return (
    <Link
      href={card.href}
      className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-700 to-brand-400 transition-transform duration-300 group-hover:scale-x-100"
      />
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <CardBadges card={card} />
      </div>
      <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        {card.description}
      </p>
      <div className="flex-1">
        <CardMeta card={card} />
      </div>
      <div className="mt-5 flex items-end justify-between gap-3 border-t border-stone-100 pt-4">
        <div className="flex flex-col gap-0.5">
          {card.price && (
            <span className="text-sm font-bold text-brand-900">
              {card.price}
            </span>
          )}
        </div>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
          Ver detalhes <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

/**
 * Card de destaque do carro-chefe do catálogo (hoje o CIT, na EFAL): ocupa a
 * largura da grade, com borda brand-700, badge "Comece por aqui" e CTA duplo.
 */
function FeaturedCard({ card }: { card: CourseCard }) {
  return (
    <div className="relative flex flex-col gap-8 rounded-sm border-2 border-brand-700 bg-white p-7 shadow-lg shadow-brand-950/10 sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between lg:p-10">
      <span className="absolute -top-3 left-7 rounded-full bg-brand-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
        Comece por aqui
      </span>
      <div className="max-w-2xl">
        <CardBadges card={card} />
        <h3 className="mt-4 font-serif text-2xl font-bold text-brand-950 sm:text-3xl">
          {card.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-stone-600">
          {card.description}
        </p>
        <CardMeta card={card} />
      </div>
      <div className="flex shrink-0 flex-col gap-3 lg:w-64">
        {card.price && (
          <p className="text-center">
            <span className="font-serif text-2xl font-extrabold text-brand-900">
              {card.price}
            </span>
          </p>
        )}
        <a
          href={card.enrollUrl}
          className="rounded-sm bg-brand-900 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-800"
        >
          Quero me inscrever
        </a>
        <Link
          href={card.href}
          className="rounded-sm border border-brand-900/15 px-7 py-3.5 text-center text-sm font-medium text-brand-800 transition-colors hover:bg-brand-50"
        >
          Ver o curso
        </Link>
      </div>
    </div>
  );
}

const ALL = "Todos os cursos";

type Props = {
  cards: CourseCard[];
  /** Curso destacado no topo da grade (chave = slug), quando houver. */
  featuredKey?: string;
  /**
   * Tópicos da navegação por interesse, na ordem em que aparecem. Sem eles a
   * grade é só a grade — é o caso da Pós-graduação.
   */
  topics?: readonly string[];
};

/**
 * Grade de cards do catálogo, com a navegação por tópicos no topo. O filtro é
 * inclusivo (um curso aparece em todos os tópicos que declara) e o destaque só
 * se mantém enquanto o curso destacado couber no tópico selecionado.
 */
export default function CourseCatalogGrid({
  cards,
  featuredKey,
  topics,
}: Props) {
  const [active, setActive] = useState<string>(ALL);

  // Só mostra o tópico que tem curso — evita filtro que leva a lugar nenhum.
  const usedTopics = (topics ?? []).filter((topic) =>
    cards.some((card) => card.topics?.includes(topic)),
  );
  const hasNav = usedTopics.length > 0;

  const visible =
    !hasNav || active === ALL
      ? cards
      : cards.filter((card) => card.topics?.includes(active));

  const featured =
    featuredKey !== undefined
      ? visible.find((card) => card.key === featuredKey)
      : undefined;
  const regularCards = featured
    ? visible.filter((card) => card.key !== featured.key)
    : visible;

  return (
    <>
      {hasNav && (
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {[ALL, ...usedTopics].map((topic) => {
            const isActive = active === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setActive(topic)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-brand-900 text-white"
                    : "border border-brand-900/15 bg-white text-brand-800 hover:bg-brand-50"
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured && <FeaturedCard card={featured} />}
        {regularCards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </>
  );
}
