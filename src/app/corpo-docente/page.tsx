import Header from "@/components/layout/Header";
import FacultyDirectory from "@/components/sections/docentes/FacultyDirectory";
import { ogMetadata } from "@/lib/seo";

const title = "Corpo docente do STPS | Seminário Simonton";
const description =
  "Conheça o corpo docente do Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — os professores de todos os cursos, os cursos em que lecionam e suas biografias.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

export default function CorpoDocentePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      <section className="relative overflow-hidden bg-brand-950 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
            Graduação · Pós-graduação · EFAL
          </p>
          <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            Corpo docente do STPS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            O ensino do Seminário está a cargo de doutores, mestres e
            professores, comprometidos com a formação integral de cada
            seminarista.
          </p>
        </div>
      </section>

      <FacultyDirectory />
    </div>
  );
}
