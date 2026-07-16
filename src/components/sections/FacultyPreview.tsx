import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { onlineProfessors } from "@/data/professors";

/** Bloco enxuto: 4 docentes com foto, do corpo docente real das grades. */
const preview = onlineProfessors.filter((p) => p.photo).slice(0, 4);

/**
 * Corpo docente na Home — prévia com poucos nomes reais (das grades da EFAL
 * e da Pós) e link para a vitrine completa em /cursos-online#professores.
 */
export default function FacultyPreview() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Corpo docente
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Professores que unem rigor acadêmico e prática pastoral
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {preview.map((professor) => (
            <div
              key={professor.name}
              className="flex flex-col items-center rounded-sm border border-brand-900/10 bg-white p-7 text-center"
            >
              <div className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-brand-900/10">
                <Image
                  src={professor.photo!}
                  alt={professor.name}
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-serif text-base font-bold text-brand-950">
                {professor.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-700">
                {professor.courses.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/cursos-online#professores"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-brand-700"
          >
            Conheça todo o corpo docente <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
