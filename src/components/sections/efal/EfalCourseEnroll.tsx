import { ArrowRight } from "lucide-react";
import EfalDescontosDialog from "./EfalDescontosDialog";
import EfalEnrollButton from "./EfalEnrollButton";
import type { EfalCourse } from "@/data/efal";
import type { EfalLanding } from "@/data/efalLandings";

/**
 * CTA final / matrícula — faixa sobre brand-950, com o investimento ao lado do
 * botão. Fecha todas as landings da EFAL. Server Component.
 */
export default function EfalCourseEnroll({
  course,
  landing,
}: {
  course: EfalCourse;
  landing: EfalLanding;
}) {
  return (
    <section id="matricula" className="scroll-mt-24 bg-brand-950">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl font-extrabold text-white sm:text-4xl">
            {landing.enroll.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-100/80">
            {landing.enroll.description}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
          {course.price && (
            <div className="text-left sm:text-right">
              <p className="font-serif text-2xl font-extrabold text-white">
                {course.price.installments}
              </p>
              <p className="mt-0.5 text-sm text-brand-100/70">
                Total: {course.price.total}
              </p>
              {landing.descontos && (
                <EfalDescontosDialog
                  course={course}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-200 underline-offset-4 transition-colors hover:text-white hover:underline"
                />
              )}
            </div>
          )}
          <EfalEnrollButton
            course={course}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-8 py-4 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Quero me inscrever <ArrowRight size={16} />
          </EfalEnrollButton>
        </div>
      </div>
    </section>
  );
}
