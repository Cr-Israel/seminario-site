import CourseCurriculum from "@/components/sections/CourseCurriculum";
import type { EfalCourse } from "@/data/efal";
import type { EfalLanding } from "@/data/efalLandings";

/**
 * Seção "O conteúdo do curso" — apresentação do curso (a descrição oficial de
 * efal.ts, salvo quando a landing traz um texto próprio) seguida da grade real,
 * com ementa por disciplina (accordion do CourseCurriculum). A grade só é
 * renderizada quando existe; cursos em elaboração ficam só com o texto.
 */
export default function EfalCourseCurriculum({
  course,
  landing,
}: {
  course: EfalCourse;
  landing: EfalLanding;
}) {
  const curriculum = landing.curriculum;
  if (!curriculum) return null;

  return (
    <section id="conteudo" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            {curriculum.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            {curriculum.title}
          </h2>
          <p className="mt-4 text-sm font-medium text-brand-800">
            {curriculum.summary}
          </p>
          <p className="mt-5 text-base leading-relaxed text-stone-600">
            {curriculum.about ?? course.description}
          </p>
        </div>

        <CourseCurriculum
          disciplines={course.curriculum}
          unit={course.curriculumUnit}
        />
      </div>
    </section>
  );
}
