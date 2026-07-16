import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  GraduationCap,
  MonitorPlay,
  ScrollText,
  type LucideIcon,
} from "lucide-react";
import { getCurso } from "@/data/cursos";

type Ingresso = {
  icon: LucideIcon;
  nivel: string;
  title: string;
  text: string;
  date: string;
  href: string;
  cta: string;
};

// A data real de agosto/2026 vem do calendário oficial (grade do Curso de
// Libras em src/data/efal.ts, via cursos.ts); o restante é 2026.2.
const librasTurma = getCurso("cfl")?.proximaTurma;

const ingressos: Ingresso[] = [
  {
    icon: GraduationCap,
    nivel: "Bacharelado · Presencial",
    title: "Vestibular Unificado da IPB",
    text: "O ingresso no Bacharelado em Teologia é pelo processo seletivo unificado da Igreja Presbiteriana do Brasil, organizado pela Junta de Educação Teológica (JET).",
    // TODO(conteúdo): confirmar as datas do próximo Vestibular Unificado (JET).
    date: "[PLACEHOLDER] Datas do próximo vestibular a confirmar",
    href: "/graduacao#processo-seletivo",
    cta: "Como ingressar",
  },
  {
    icon: MonitorPlay,
    nivel: "Cursos livres · Online",
    title: "Matrícula na EFAL",
    text: "Os cursos da EFAL têm inscrição direta pelo Seminário, sem vestibular. As turmas do calendário 2026.2 estão com matrículas abertas.",
    date: librasTurma
      ? `Turmas 2026.2 · Libras a partir de ${librasTurma}`
      : "Turmas 2026.2",
    href: "/cursos-online",
    cta: "Conhecer os cursos da EFAL",
  },
  {
    icon: ScrollText,
    nivel: "Pós-graduação · Online",
    title: "Inscrição na Pós-graduação",
    text: "Os programas de pós-graduação também têm inscrição direta pelo Seminário, para quem já concluiu a graduação.",
    // TODO(conteúdo): confirmar datas das turmas com o Núcleo de Pós-graduação.
    date: "[PLACEHOLDER] Datas das próximas turmas a confirmar",
    href: "/cursos-online#pos",
    cta: "Conhecer a Pós-graduação",
  },
];

/**
 * Ingresso e matrícula — as formas de entrar em cada trilha da casa, com as
 * datas conhecidas. Tom vocacional, sem urgência artificial.
 */
export default function ProximasTurmas() {
  return (
    <section id="ingresso" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Ingresso e matrícula
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Como dar o próximo passo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Cada trilha tem sua porta de entrada — do vestibular unificado da
            IPB à matrícula direta nos cursos online.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ingressos.map((item) => {
            const { icon: Icon } = item;
            return (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="text-right text-xs font-medium uppercase tracking-wider text-brand-700">
                    {item.nivel}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                  {item.text}
                </p>
                <p className="mt-4 flex items-start gap-2 text-xs text-stone-500">
                  <CalendarDays size={14} className="mt-0.5 shrink-0 text-brand-700" />
                  {item.date}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 border-t border-stone-100 pt-4 text-sm font-medium text-brand-800 transition-colors hover:text-brand-700"
                >
                  {item.cta} <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
