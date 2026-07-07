import Link from "next/link";
import { ArrowRight, ScrollText } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { posCourses } from "@/data/pos";
import { coordinators } from "@/data/coordinators";

export const metadata = {
  title: "Pós-graduação | Seminário Simonton",
  description:
    "Especializações teológicas do Seminário Simonton — aprofundamento acadêmico em Estudos Bíblicos e Novo Testamento, para quem já concluiu a graduação.",
};

export default function PosPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header variant="solid" />

      {/* HERO */}
      <section className="bg-brand-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
            Especialização
          </p>
          <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            Pós-graduação
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            Para quem já concluiu a graduação e quer aprofundar o estudo das
            Escrituras — especializações acadêmicas que unem rigor exegético e
            teologia reformada.
          </p>
          <p className="mt-6 text-sm text-brand-200/80">
            Coordenação: {coordinators.pos.name} ·{" "}
            <a
              href={`mailto:${coordinators.pos.email}`}
              className="underline decoration-brand-200/40 underline-offset-4 transition-colors hover:text-white"
            >
              {coordinators.pos.email}
            </a>
          </p>
        </div>
      </section>

      {/* GRID DE CURSOS */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {posCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/pos/${course.slug}`}
              className="group flex h-full flex-col rounded-sm border border-brand-900/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                  <ScrollText size={20} strokeWidth={1.75} />
                </div>
                {course.isPlaceholder && (
                  <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
                    Conteúdo provisório
                  </span>
                )}
              </div>
              <h2 className="mt-5 font-serif text-xl font-bold text-brand-950">
                {course.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600">
                {course.tagline}
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-xs text-stone-500">{course.format}</span>
                <span className="flex items-center gap-1 text-sm font-medium text-brand-800 transition-transform group-hover:translate-x-1">
                  Ver curso <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
