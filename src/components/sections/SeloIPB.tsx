import { BadgeCheck, Church, ScrollText, type LucideIcon } from "lucide-react";

type Selo = { icon: LucideIcon; text: string };

const selos: Selo[] = [
  {
    icon: Church,
    text: "Jurisdicionado à Igreja Presbiteriana do Brasil",
  },
  {
    icon: ScrollText,
    text: "Currículo aprovado pelo Supremo Concílio da IPB",
  },
  {
    icon: BadgeCheck,
    text: "Certificação outorgada pela Junta Regional de Educação Teológica (JURET)",
  },
];

/**
 * Faixa de legitimação eclesiástica — ícone + texto, visual discreto (nada de
 * banner publicitário). Costura o institucional aos cursos: aparece na Home
 * junto ao comparador de cursos e nas páginas de curso.
 */
export default function SeloIPB({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto flex max-w-5xl flex-col divide-y divide-brand-900/10 rounded-sm border border-brand-900/10 bg-white sm:flex-row sm:divide-x sm:divide-y-0 ${className}`}
    >
      {selos.map(({ icon: Icon, text }) => (
        <div
          key={text}
          className="flex flex-1 items-center gap-3 px-6 py-5 text-sm text-brand-900"
        >
          <Icon size={18} strokeWidth={1.75} className="shrink-0 text-brand-700" />
          <span className="leading-snug">{text}</span>
        </div>
      ))}
    </div>
  );
}
