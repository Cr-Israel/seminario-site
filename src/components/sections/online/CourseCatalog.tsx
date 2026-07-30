import type { ReactNode } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { Coordinator } from "@/data/coordinators";
import CourseCatalogGrid from "./CourseCatalogGrid";
import type { CourseCard } from "./courseCards";

type Props = {
  eyebrow: string;
  title: string;
  /** Linha de apoio sob o título, quando o catálogo precisa se explicar. */
  description?: string;
  cards: CourseCard[];
  coordinator: Coordinator;
  /** Frase do card de coordenação, ex.: "Dúvidas sobre os cursos da EFAL?". */
  coordinatorQuestion: string;
  /** Curso destacado no topo da grade (chave = slug), quando houver. */
  featuredKey?: string;
  /** Tópicos da navegação por interesse; sem eles a grade vem sem filtro. */
  topics?: readonly string[];
  /** Fundo verde-claro de ponta a ponta, para descolar a seção do hero. */
  tinted?: boolean;
  /** Bloco extra entre a grade e a coordenação (ex.: corpo docente da Pós). */
  children?: ReactNode;
};

/**
 * Catálogo de cursos de um núcleo — a grade de cards de /efal e
 * /pos-graduacao. Cada trilha tem sua página, então aqui não há mais abas:
 * a página passa os cards do seu próprio núcleo. A grade em si (com a
 * navegação por tópicos) é client component; o resto renderiza no servidor.
 */
export default function CourseCatalog({
  eyebrow,
  title,
  description,
  cards,
  coordinator,
  coordinatorQuestion,
  featuredKey,
  topics,
  tinted,
  children,
}: Props) {
  return (
    <section
      id="cursos"
      className={`scroll-mt-24 py-24 ${tinted ? "bg-brand-50/60" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base leading-relaxed text-stone-600">
              {description}
            </p>
          )}
        </div>

        <CourseCatalogGrid
          cards={cards}
          featuredKey={featuredKey}
          topics={topics}
        />

        {children}

        {/* Coordenação do núcleo — o rosto de quem responde pelas dúvidas. */}
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
                {coordinatorQuestion} Fale direto com quem coordena o núcleo.
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
      </div>
    </section>
  );
}
