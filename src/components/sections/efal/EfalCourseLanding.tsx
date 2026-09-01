import Header from "@/components/layout/Header";
import CourseCoordinator from "@/components/sections/CourseCoordinator";
import SeloIPB from "@/components/sections/SeloIPB";
import EfalCourseAudience from "./EfalCourseAudience";
import EfalCourseCtaBand from "./EfalCourseCtaBand";
import EfalCourseCtaInvite from "./EfalCourseCtaInvite";
import EfalCourseCurriculum from "./EfalCourseCurriculum";
import EfalCourseEnroll from "./EfalCourseEnroll";
import EfalCourseFaq from "./EfalCourseFaq";
import EfalCourseHero from "./EfalCourseHero";
import EfalCourseInstructors from "./EfalCourseInstructors";
import EfalCourseObjections from "./EfalCourseObjections";
import { coordinators } from "@/data/coordinators";
import type { EfalCourse } from "@/data/efal";
import type { EfalLanding } from "@/data/efalLandings";
import { courseInstructors } from "@/data/professors";

/**
 * Anatomia das landings de curso da EFAL — a mesma para os sete cursos, com o
 * conteúdo de cada um vindo de efal.ts (ficha técnica e grade) e de
 * efalLandings.ts (manchete, objeções, perfis, FAQ e textos dos CTAs).
 *
 * A ordem é a do funil: quem é você e por que isso serve → o que se estuda →
 * quem ensina → é para mim? → o que ainda pode travar → quem responde →
 * matrícula. Seções sem conteúdo declarado simplesmente não aparecem, para
 * que um curso em elaboração não exiba texto de espera.
 */
export default function EfalCourseLanding({
  course,
  landing,
}: {
  course: EfalCourse;
  landing: EfalLanding;
}) {
  const instructors = courseInstructors(course);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <EfalCourseHero course={course} landing={landing} />
      <EfalCourseObjections landing={landing} />
      <EfalCourseCtaBand course={course} landing={landing} />
      <EfalCourseCurriculum course={course} landing={landing} />

      {/* Legitimação eclesiástica logo depois da grade: é ali que a pergunta
          "isso vale alguma coisa?" aparece. */}
      <SeloIPB />

      {landing.instructors && (
        <EfalCourseInstructors
          instructors={instructors}
          description={landing.instructors.description}
        />
      )}
      <EfalCourseAudience landing={landing} />
      <EfalCourseCtaInvite course={course} landing={landing} />
      <EfalCourseFaq items={landing.faq} />

      {/* Quem responde pelo curso, entre o FAQ e a matrícula: a última dúvida
          que sobra costuma ser "com quem eu falo?". */}
      <section className="bg-stone-50 pb-24 pt-4">
        <div className="mx-auto max-w-3xl px-6">
          <CourseCoordinator coordinator={coordinators.efal} />
        </div>
      </section>

      <EfalCourseEnroll course={course} landing={landing} />
    </div>
  );
}
