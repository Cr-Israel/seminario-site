import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Hand,
  Shield,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";

type Profile = {
  icon: LucideIcon;
  statement: string;
  course: string;
  href: string;
};

/**
 * Guia por perfil: cada card parte de uma frase de identificação (não da
 * sigla do curso) e leva à página do curso indicado. O último perfil aponta
 * para a âncora #pos, que ativa a aba Pós-graduação do catálogo.
 */
const profiles: Profile[] = [
  {
    icon: Sprout,
    statement: "Nunca estudei teologia e quero começar",
    course: "Curso Introdutório de Teologia (CIT)",
    href: "/cursos-online/cit",
  },
  {
    icon: Shield,
    statement: "Sou presbítero ou diácono (ou aspirante)",
    course: "Curso de Formação de Oficiais (CFO)",
    href: "/cursos-online/cfo",
  },
  {
    icon: BookOpen,
    statement: "Ensino na Escola Dominical",
    course: "Curso de Formação de Professores (CFP)",
    href: "/cursos-online/cfp",
  },
  {
    icon: Users,
    statement: "Lidero ministérios na minha igreja",
    course: "Curso de Aperfeiçoamento de Líderes (CAL)",
    href: "/cursos-online/cal",
  },
  {
    icon: Hand,
    statement: "Quero servir a comunidade surda",
    course: "Curso de Libras",
    href: "/cursos-online/cfl",
  },
  {
    icon: GraduationCap,
    statement: "Já tenho formação e quero me aprofundar",
    course: "Pós-graduação",
    href: "#pos",
  },
];

export default function OnlineProfiles() {
  return (
    <section id="trilhas" className="scroll-mt-24 bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Guia de cursos
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Qual curso é para você?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            Cada chamado tem um ponto de partida. Encontre o seu.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {profiles.map((profile) => {
            const { icon: Icon } = profile;
            return (
              <Link
                key={profile.statement}
                href={profile.href}
                className="group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-700/40 hover:shadow-lg sm:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <p className="mt-4 flex-1 font-serif text-base font-bold leading-snug text-brand-950 sm:text-lg">
                  “{profile.statement}”
                </p>
                <p className="mt-4 border-t border-stone-100 pt-3 text-sm text-stone-600">
                  {profile.course}
                </p>
                <span className="mt-2 flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
                  Ver curso <ArrowRight size={14} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
