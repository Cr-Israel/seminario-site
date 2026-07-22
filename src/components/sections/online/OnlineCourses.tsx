"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock,
  Mail,
  MonitorPlay,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { coordinators, type Coordinator } from "@/data/coordinators";
import { efalCourses, type EfalCourse } from "@/data/efal";
import { posCourses } from "@/data/pos";

type Tab = "EFAL" | "Pós-graduação";

type CourseCard = {
  key: string;
  href: string;
  enrollUrl: string;
  icon: LucideIcon;
  code: string;
  title: string;
  description: string;
  duration?: string;
  format?: string;
  /** Data real de início das turmas (só quando existe no data layer). */
  startInfo?: string;
  price?: string;
  /** Pinta o badge "Matrículas abertas · 2026.2". */
  enrollmentOpen?: boolean;
  isNew?: boolean;
  isPlaceholder?: boolean;
};

/**
 * Extrai das datas de início da grade (campo `start`, ex.: "Início em
 * 04/08/2026") o intervalo real de começo das turmas. Hoje só o Curso de
 * Libras tem essas datas; assume turmas no mesmo mês/ano, como no calendário
 * oficial 2026.2.
 */
function classStartRange(course: EfalCourse): string | undefined {
  const matches = course.curriculum
    .map((d) => d.start?.match(/(\d{2})\/(\d{2}\/\d{4})/))
    .filter((m): m is RegExpMatchArray => Boolean(m));
  if (matches.length === 0) return undefined;
  const days = matches.map((m) => m[1]).sort();
  const monthYear = matches[0][2];
  const first = days[0];
  const last = days[days.length - 1];
  return first === last
    ? `Início em ${first}/${monthYear}`
    : `Turmas de ${first} a ${last}/${monthYear}`;
}

const efalCards: CourseCard[] = efalCourses.map((c) => ({
  key: c.slug,
  href: `/cursos-online/${c.slug}`,
  enrollUrl: c.enrollUrl,
  icon: BookOpen,
  code: c.code,
  title: c.title,
  description: c.tagline,
  duration: c.duration !== "A definir" ? c.duration : undefined,
  format: c.format !== "A definir" ? c.format : undefined,
  startInfo: classStartRange(c),
  price: c.price?.installments,
  // Cursos com grade e apresentação confirmadas estão com matrículas abertas
  // para 2026.2; os marcados isNew ainda estão em estruturação (texto lorem).
  enrollmentOpen: !c.isNew,
  isNew: c.isNew,
}));

const posCards: CourseCard[] = posCourses.map((c) => ({
  key: c.slug,
  href: `/cursos-online/${c.slug}`,
  enrollUrl: c.enrollUrl,
  icon: ScrollText,
  code: "Pós",
  title: c.title,
  description: c.tagline,
  duration: c.duration !== "A definir" ? c.duration : undefined,
  format: c.format,
  price: c.price?.installments,
  isPlaceholder: c.isPlaceholder,
}));

const tabs: { label: Tab; count: number }[] = [
  { label: "EFAL", count: efalCards.length },
  { label: "Pós-graduação", count: posCards.length },
];

const coordinatorByTab: Record<Tab, Coordinator> = {
  EFAL: coordinators.efal,
  "Pós-graduação": coordinators.pos,
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
  const { icon: Icon } = card;
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
 * Card de destaque do CIT — o carro-chefe do catálogo: ocupa a largura da
 * grade, com borda brand-700, badge "Comece por aqui" e CTA duplo.
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

/** Slug do curso destacado como carro-chefe da aba EFAL. */
const FEATURED_SLUG = "cit";

/**
 * `posFaculty` é um slot para a seção "Corpo docente da Pós-graduação",
 * renderizada apenas na aba Pós. Vem como ReactNode do page.tsx para que
 * a seção continue sendo um Server Component dentro deste Client Component.
 */
export default function OnlineCourses({ posFaculty }: { posFaculty?: ReactNode }) {
  const [active, setActive] = useState<Tab>("EFAL");

  // A âncora #pos (usada na seção "Qual curso é para você?") ativa a aba
  // Pós-graduação além de rolar até o catálogo.
  useEffect(() => {
    const syncTabWithHash = () => {
      if (window.location.hash === "#pos") setActive("Pós-graduação");
    };
    syncTabWithHash();
    window.addEventListener("hashchange", syncTabWithHash);
    return () => window.removeEventListener("hashchange", syncTabWithHash);
  }, []);

  const cards = active === "EFAL" ? efalCards : posCards;
  const featured =
    active === "EFAL"
      ? cards.find((card) => card.key === FEATURED_SLUG)
      : undefined;
  const regularCards = featured
    ? cards.filter((card) => card.key !== FEATURED_SLUG)
    : cards;
  const coordinator = coordinatorByTab[active];

  return (
    <section id="cursos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <span id="pos" aria-hidden className="block scroll-mt-24" />
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
        {featured && <FeaturedCard card={featured} />}
        {regularCards.map((card) => (
          <Card key={card.key} card={card} />
        ))}
      </div>

      {active === "Pós-graduação" && posFaculty}

      {/* Coordenador do núcleo ativo — acompanha a aba selecionada. */}
      <div className="mt-10 flex flex-col items-start gap-6 rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          {coordinator.photo && (
            <Image
              src={coordinator.photo}
              alt={coordinator.name}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />
          )}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              {coordinator.role}
            </span>
            <h3 className="mt-1 font-serif text-xl font-bold text-brand-950">
              {coordinator.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">
              Dúvidas sobre {active === "EFAL" ? "os cursos da EFAL" : "a Pós-graduação"}?
              Fale direto com quem coordena o núcleo.
            </p>
          </div>
        </div>
        <a
          href={`mailto:${coordinator.email}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
        >
          <Mail size={15} /> Falar com a coordenação
        </a>
      </div>
    </section>
  );
}
