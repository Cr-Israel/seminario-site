import { GraduationCap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCoordinator from "@/components/sections/CourseCoordinator";
import { coordinators } from "@/data/coordinators";

export const metadata = {
  title: "Bacharelado em Teologia | Seminário Simonton",
  description:
    "Curso Livre de Bacharelado em Teologia do Seminário Simonton — a formação teológica completa, carro-chefe da instituição, com ingresso pelo processo seletivo unificado da IPB.",
};

export default function BacharelPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      {/* HERO */}
      <section className="bg-brand-950 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-100">
              <GraduationCap size={22} strokeWidth={1.75} />
            </div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              Graduação · Carro-chefe
            </span>
          </div>
          <h1 className="mt-5 font-serif text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Curso Livre de Bacharelado em Teologia
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-100/80">
            Nossa formação teológica completa, voltada ao preparo de pastores e
            líderes. O ingresso é feito pelo processo seletivo unificado da
            Igreja Presbiteriana do Brasil, que habilita o candidato a escolher
            entre os seminários da denominação.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <CourseCoordinator coordinator={coordinators.bacharel} />

        {/* TODO: construir aqui o conteúdo completo do Bacharel — passo a passo
            do processo seletivo da IPB, por que estudar no Simonton, corpo
            docente, etc. Por ora, só a coordenação está publicada. */}
        <p className="mt-10 rounded-sm border border-dashed border-brand-900/15 bg-white p-6 text-sm text-stone-500">
          Em breve: passo a passo do processo seletivo, motivos para estudar no
          Simonton e corpo docente.
        </p>
      </section>

      <Footer />
    </div>
  );
}
