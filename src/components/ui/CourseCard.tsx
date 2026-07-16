import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import ModalidadeBadge from "./ModalidadeBadge";
import type { Curso } from "@/data/cursos";

/**
 * Card unificado de curso — o MESMO card em toda parte (Home, listagens),
 * alimentado pela fonte única src/data/cursos.ts. Badges de nível/modalidade
 * no topo, nome em serifada, descrição curta, próxima turma quando houver e
 * CTA "Mais informações" para a página do curso.
 *
 * `featured` destaca o programa carro-chefe (Bacharelado) com borda verde,
 * ocupando a largura da grade em telas maiores.
 */
export default function CourseCard({
  curso,
  featured = false,
}: {
  curso: Curso;
  featured?: boolean;
}) {
  return (
    <Link
      href={curso.href}
      className={`group flex h-full flex-col rounded-sm bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? "border-2 border-brand-700 sm:col-span-2 lg:col-span-3"
          : "border border-brand-900/10"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <ModalidadeBadge nivel={curso.nivel} modalidade={curso.modalidade} />
        {curso.codigo && (
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {curso.codigo}
          </span>
        )}
      </div>

      <h3
        className={`mt-5 font-serif font-bold text-brand-950 ${
          featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {curso.nome}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {curso.descricaoCurta}
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-stone-100 pt-4">
        <span className="flex items-center gap-2 text-xs text-stone-500">
          {curso.proximaTurma && (
            <>
              <CalendarDays size={13} className="shrink-0 text-brand-700" />
              {curso.proximaTurma}
            </>
          )}
        </span>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
          Mais informações <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
