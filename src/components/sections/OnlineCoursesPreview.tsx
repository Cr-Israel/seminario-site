import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, GraduationCap, MonitorPlay } from "lucide-react";

import { efalCourses } from "@/data/efal";
import { posCourses } from "@/data/pos";

/**
 * Prévia da página /cursos-online na Home: um cartão de vidro para a EFAL e
 * outro para as pós-graduações, listando os cursos disponíveis.
 */
type PreviewCard = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  courses: string[];
};

const cards: PreviewCard[] = [
  {
    icon: MonitorPlay,
    tag: "EFAL · Inscrição direta",
    title: "Escola de Formação e Aperfeiçoamento de Líderes",
    description:
      "Cursos de curta e média duração para capacitar líderes, oficiais, professores e músicos da igreja local.",
    courses: efalCourses.map((course) => course.title),
  },
  {
    icon: GraduationCap,
    tag: "Pós-graduação · Inscrição direta",
    title: "Pós-graduações",
    description:
      "Programas de aprofundamento teológico e ministerial para quem já concluiu a graduação.",
    courses: posCourses.map((course) =>
      course.title.replace("Pós-Graduação em ", ""),
    ),
  },
];

function CourseCard({ icon: Icon, tag, title, description, courses }: PreviewCard) {
  return (
    <Link
      href="/cursos-online"
      // Cartão em vidro fosco, mesmo tratamento dos cartões anteriores da
      // seção: fundo translúcido + backdrop-blur sobre os orbs verdes.
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/60 bg-white/55 p-8 shadow-[0_8px_30px_rgba(0,65,23,0.08)] backdrop-blur-xl transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/90 before:to-transparent hover:-translate-y-1 hover:border-white/80 hover:bg-white/70 hover:shadow-[0_18px_44px_rgba(0,65,23,0.16)] sm:p-10"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/70 text-brand-800 ring-1 ring-brand-900/5 backdrop-blur">
          <Icon size={26} strokeWidth={1.75} />
        </div>
        <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand-700">
          {tag}
        </span>
      </div>

      <h3 className="mt-6 font-serif text-2xl font-bold text-brand-950">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        {description}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {courses.map((course) => (
          <li
            key={course}
            className="flex items-center gap-2.5 text-sm text-brand-900"
          >
            <Check
              size={16}
              strokeWidth={2.25}
              className="shrink-0 text-brand-700"
            />
            {course}
          </li>
        ))}
      </ul>

      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-800 transition-transform group-hover:translate-x-1">
        Explorar cursos online <ArrowRight size={16} />
      </span>
    </Link>
  );
}

export default function OnlineCoursesPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-brand-100 to-brand-50 py-28">
      {/* Orbs verdes desfocados: dão profundidade e cor para o vidro fosco
          dos cartões refratar. Decorativos, escondidos de leitores de tela. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-16 h-80 w-80 rounded-full bg-brand-700/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Cursos Online
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Estude no Simonton de onde estiver
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Aulas 100% online e ao vivo, com inscrição direta pelo Simonton e
            certificação pela JET/IPB. Escolha o curso que corresponde ao seu
            momento e ao seu chamado.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <CourseCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
