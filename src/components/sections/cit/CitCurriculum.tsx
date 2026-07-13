import CourseCurriculum from "@/components/sections/CourseCurriculum";
import { getEfalCourse } from "@/data/efal";

/**
 * Seção "O conteúdo do curso" — centralizada. Reutiliza o CourseCurriculum com
 * os dados reais do CIT (getEfalCourse("cit")), sem duplicar a grade.
 */
export default function CitCurriculum() {
  const course = getEfalCourse("cit");
  if (!course) return null;

  return (
    <section id="conteudo" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            O conteúdo do curso
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            8 disciplinas para uma base sólida
          </h2>
          <p className="mt-4 text-base text-stone-600">
            8 disciplinas · 32 aulas · professores reverendos
          </p>
        </div>

        {/* Grade real do CIT, com ementa por disciplina (accordion). */}
        <CourseCurriculum disciplines={course.curriculum} />
      </div>
    </section>
  );
}
