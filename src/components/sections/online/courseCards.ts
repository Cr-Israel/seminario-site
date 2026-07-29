import { BookOpen, ScrollText, type LucideIcon } from "lucide-react";
import { efalCourses, type EfalCourse } from "@/data/efal";
import { posCourses } from "@/data/pos";

/** Modelo de exibição de um curso no catálogo (CourseCatalog). */
export type CourseCard = {
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

export const efalCards: CourseCard[] = efalCourses.map((c) => ({
  key: c.slug,
  href: `/efal/${c.slug}`,
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

export const posCards: CourseCard[] = posCourses.map((c) => ({
  key: c.slug,
  href: `/pos-graduacao/${c.slug}`,
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
