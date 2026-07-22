import { ArrowRight } from "lucide-react";
import { getEfalCourse } from "@/data/efal";
import InscricaoButton from "@/components/inscricao/InscricaoButton";

/**
 * CTA final / matrícula do CIT — faixa centralizada sobre brand-950. Abre o
 * modal de inscrição (Google Sheets, aba CIT). Server Component.
 */
export default function CitEnroll() {
  const course = getEfalCourse("cit");

  return (
    <section id="matricula" className="scroll-mt-24 bg-brand-950">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Pronto para começar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/80">
            Inscreva-se na próxima turma do Curso Introdutório de Teologia e
            dê o primeiro passo na sua formação teológica reformada.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
          {course?.price && (
            <div className="text-left sm:text-right">
              <p className="font-serif text-2xl font-extrabold text-white">
                {course.price.installments}
              </p>
              <p className="mt-0.5 text-sm text-brand-100/70">
                Total: {course.price.total}
              </p>
            </div>
          )}
          <InscricaoButton
            curso={course?.title ?? "Curso Introdutório de Teologia"}
            codigo={course?.codigo ?? "CIT"}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-8 py-4 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Quero me inscrever <ArrowRight size={16} />
          </InscricaoButton>
        </div>
      </div>
    </section>
  );
}
