import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { courses, type Course } from "@/data/courses";

function CourseCard({ icon: Icon, tag, title, description, meta, href }: Course) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
          {tag}
        </span>
      </div>
      <h3 className="mt-5 font-serif text-xl font-bold text-brand-950">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
        {description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
        <span className="text-xs text-stone-500">{meta}</span>
        <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
          Saiba mais <ArrowRight size={14} />
        </span>
      </div>
    </>
  );

  const className =
    "group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg";

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}

export default function CoursesGrid() {
  return (
    <section id="cursos" className="bg-brand-50/60 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Formação teológica
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Nossos cursos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Do primeiro contato com a teologia reformada à pós-graduação —
            trilhas para quem já serve na igreja e para quem está começando
            a caminhada.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
