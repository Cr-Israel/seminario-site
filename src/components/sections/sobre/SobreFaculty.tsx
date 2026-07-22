import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Resumo do corpo docente na página Sobre — bloco enxuto que remete à vitrine
 * completa (com fotos reais) em /cursos-online#professores, sem duplicar a
 * listagem.
 */
export default function SobreFaculty() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Corpo docente
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Professores que unem rigor acadêmico e prática pastoral
        </h2>
        <p className="mt-6 text-base leading-relaxed text-stone-600">
          O ensino do Seminário está a cargo de mestres e doutores, muitos deles
          pastores em atuação nas igrejas, comprometidos com a formação integral
          de cada seminarista — piedade e academia lado a lado.
        </p>
        <Link
          href="/cursos-online#professores"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-transform hover:translate-x-0.5"
        >
          Conheça o corpo docente <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
