import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Layers,
  Users,
  Monitor,
} from "lucide-react";
import Header from "@/components/layout/Header";
import CourseCoordinator from "@/components/sections/CourseCoordinator";
import CourseCurriculum from "@/components/sections/CourseCurriculum";
import CourseProfessors from "@/components/sections/CourseProfessors";
import { efalCourses, getEfalCourse } from "@/data/efal";
import { posCourses, getPosCourse } from "@/data/pos";
import { coordinators } from "@/data/coordinators";

type Params = Promise<{ slug: string }>;

/**
 * Página unificada de um curso online. A EFAL e a Pós deixaram de ter páginas
 * próprias (/efal, /pos) — tudo mora sob /cursos-online. Como só pode existir
 * um segmento [slug] por pasta, este template resolve o curso pelo slug,
 * primeiro na EFAL e depois na Pós, e renderiza o layout apropriado.
 *
 * O CIT tem landing dedicada em /cursos-online/cit (rota estática, com
 * precedência sobre este [slug]); por isso é excluído do generateStaticParams.
 */
export function generateStaticParams() {
  return [
    ...efalCourses
      .filter((course) => course.slug !== "cit")
      .map((course) => ({ slug: course.slug })),
    ...posCourses.map((course) => ({ slug: course.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const efalCourse = getEfalCourse(slug);
  if (efalCourse) {
    return {
      title: `${efalCourse.title} (${efalCourse.code}) — EFAL | Seminário Simonton`,
      description: efalCourse.tagline,
    };
  }
  const posCourse = getPosCourse(slug);
  if (posCourse) {
    return {
      title: `${posCourse.title} — Pós-graduação | Seminário Simonton`,
      description: posCourse.tagline,
    };
  }
  return {};
}

function infoItems(course: {
  duration: string;
  disciplines: string;
  format: string;
}) {
  return [
    { icon: Clock, label: "Duração", value: course.duration },
    { icon: Layers, label: "Disciplinas", value: course.disciplines },
    { icon: Monitor, label: "Formato", value: course.format },
  ];
}

export default async function OnlineCoursePage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const efalCourse = getEfalCourse(slug);
  const posCourse = efalCourse ? undefined : getPosCourse(slug);
  const course = efalCourse ?? posCourse;
  if (!course) notFound();

  const isEfal = Boolean(efalCourse);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      {/* HERO */}
      <section className="bg-brand-950 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/cursos-online"
            className="inline-flex items-center gap-2 text-sm text-brand-200 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Voltar para os Cursos Online
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {efalCourse?.isNew && (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-900">
                Novo curso
              </span>
            )}
            {posCourse?.isPlaceholder && (
              <span className="rounded-full bg-brand-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-900">
                Conteúdo provisório
              </span>
            )}
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              {efalCourse ? `EFAL · ${efalCourse.code}` : "Pós-graduação"}
            </span>
          </div>

          <h1 className="mt-4 font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100/80">
            {course.tagline}
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {infoItems(course).map((item) => (
            <div
              key={item.label}
              className="rounded-sm border border-brand-900/10 bg-white p-5"
            >
              <item.icon size={18} className="text-brand-700" />
              <p className="mt-3 text-xs uppercase tracking-wider text-stone-500">
                {item.label}
              </p>
              <p className="mt-1 font-serif text-sm font-bold text-brand-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-xl font-bold text-brand-950">
            Sobre o curso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            {course.description}
          </p>
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-sm border border-stone-100 bg-white p-6">
          <Users size={20} className="mt-0.5 shrink-0 text-brand-700" />
          <div>
            <h3 className="font-serif text-base font-bold text-brand-950">
              Público-alvo
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
              {course.audience}
            </p>
          </div>
        </div>

        {efalCourse ? (
          <CourseCurriculum
            disciplines={efalCourse.curriculum}
            unit={efalCourse.curriculumUnit}
          />
        ) : (
          <CourseCurriculum disciplines={posCourse!.curriculum} />
        )}

        {efalCourse?.professors && (
          <CourseProfessors professors={efalCourse.professors} />
        )}

        <CourseCoordinator
          coordinator={isEfal ? coordinators.efal : coordinators.pos}
        />

        {course.price && (
          <div className="mt-12 rounded-sm border border-brand-900/10 bg-white p-6">
            <p className="text-xs uppercase tracking-wider text-stone-500">
              Investimento
            </p>
            <p className="mt-2 font-serif text-3xl font-bold text-brand-950">
              {course.price.installments}
            </p>
            <p className="mt-1 text-sm text-stone-500">
              Total: {course.price.total}
            </p>
          </div>
        )}

        <div className="mt-12 flex flex-col items-center gap-4 rounded-sm bg-brand-950 p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              {efalCourse
                ? `Pronto para começar o ${efalCourse.code}?`
                : "Quer se especializar?"}
            </h3>
            <p className="mt-1 text-sm text-brand-100/75">
              Garanta sua vaga na próxima turma.
            </p>
          </div>
          <a
            href={course.enrollUrl}
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Quero me inscrever <ArrowRight size={16} />
          </a>
        </div>
      </section>

    </div>
  );
}
