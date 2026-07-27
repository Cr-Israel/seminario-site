import { ArrowUpRight, FileText } from "lucide-react";
import { CONTEUDO_PROGRAMATICO_URL } from "@/data/graduacao";
import DepartmentsGrid from "./DepartmentsGrid";

/**
 * "Sobre o curso" — descrição oficial e os cinco departamentos em que se
 * dividem as disciplinas. O cabeçalho é estático (servidor); o grid de
 * departamentos e o modal com a grade de disciplinas ficam no DepartmentsGrid
 * (client).
 */
export default function GraduacaoAbout() {
  return (
    <section id="sobre-o-curso" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Sobre o curso
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Currículo aprovado pela Igreja Presbiteriana do Brasil
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600">
          Nosso curso busca fornecer aos alunos uma sólida formação na teologia
          reformada. As disciplinas refletem o currículo aprovado pela Igreja
          Presbiteriana do Brasil para todos os seus seminários, divididas em
          cinco departamentos. Clique em um departamento para conhecer o que ele
          estuda, sua coordenação e a grade completa de disciplinas.
        </p>
      </div>

      <div className="mt-14">
        <DepartmentsGrid />
      </div>

      <div className="mt-12 flex flex-col items-center gap-3 text-center">
        <a
          href={CONTEUDO_PROGRAMATICO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
        >
          <FileText size={16} aria-hidden /> Conteúdo programático completo
          <ArrowUpRight size={16} aria-hidden />
        </a>
        <p className="text-xs text-stone-500">
          Ementa oficial da JET, com objetivos e bibliografia de cada
          disciplina.
        </p>
      </div>
    </section>
  );
}
