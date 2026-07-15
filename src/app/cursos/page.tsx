import Header from "@/components/layout/Header";
import Stats from "@/components/sections/Stats";
import CoursesExplorer from "@/components/sections/CoursesExplorer";
import Faq from "@/components/sections/Faq";

export const metadata = {
  title: "Cursos e formação | Seminário Simonton",
  description:
    "Um caminho de formação para cada etapa do seu chamado — Graduação, EFAL e Pós-graduação no Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton.",
};

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      {/* HERO — proposta de valor institucional */}
      <section className="bg-brand-950 pb-28 pt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
            Formação teológica reformada
          </p>
          <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            Um caminho de formação para
            <br className="hidden sm:block" /> cada etapa do seu chamado
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            Do primeiro contato com a teologia ao aprofundamento acadêmico —
            três trilhas para quem já serve na igreja e para quem está
            começando a caminhada: Graduação, EFAL e Pós-graduação.
          </p>
        </div>
      </section>

      {/* Stats institucionais (sobrepõe o hero, como na Home) */}
      <Stats />

      {/* Explorador de cursos com filtro por trilha */}
      <CoursesExplorer />

      {/* FAQ */}
      <Faq />

    </div>
  );
}
