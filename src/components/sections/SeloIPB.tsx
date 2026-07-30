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
 * Faixa de legitimação eclesiástica — ícone + texto, no verde institucional:
 * em branco a faixa ficava lavada contra as seções claras e parecia um card
 * solto, não um selo. Costura o institucional aos cursos: aparece na Home
 * junto ao comparador de cursos e nas páginas de curso.
 *
 * O verde escuro (bg-brand-900) é uma das superfícies que o dark mode preserva
 * de propósito, então a faixa é a mesma nos dois temas.
 *
 * A faixa sangra de ponta a ponta: o fundo acompanha a largura do container em
 * que está (a tela inteira, nas páginas de núcleo) e só o conteúdo fica preso
 * ao grid de 6xl. Por isso ela não tem cantos arredondados nem margem própria.
 *
 * As três colunas são um grid de larguras iguais, não flex: com `flex-1` cada
 * selo ficava com uma largura diferente e as quebras de linha não alinhavam.
 * O ícone é ancorado ao topo, para acompanhar a primeira linha do texto.
 */
export default function SeloIPB({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-brand-900 ${className}`}>
      <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-4 px-6 py-6 sm:grid-cols-3">
        {selos.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon
              size={19}
              strokeWidth={1.75}
              className="mt-0.5 shrink-0 text-brand-200"
            />
            <span className="text-sm leading-snug text-white">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
