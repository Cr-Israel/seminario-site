import { ArrowRight } from "lucide-react";
import { getEfalCourse } from "@/data/efal";

/**
 * CTA final / matrícula do CIT — faixa centralizada sobre brand-950. Usa o
 * enrollUrl real do curso (getEfalCourse("cit")). Server Component.
 */
export default function CitEnroll() {
  const course = getEfalCourse("cit");
  // TODO: trocar pelo link real de matrícula/secretaria (enrollUrl hoje é "#")
  const enrollUrl = course?.enrollUrl ?? "#";

  return (
    <section id="matricula" className="scroll-mt-24 bg-brand-950">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Pronto para começar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/80">
            Garanta sua vaga na próxima turma do Curso Introdutório de Teologia e
            dê o primeiro passo na sua formação teológica reformada.
          </p>
        </div>
        <a
          href={enrollUrl}
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-50 px-8 py-4 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
        >
          Quero me inscrever <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
