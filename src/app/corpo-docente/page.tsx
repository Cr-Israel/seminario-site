import Header from "@/components/layout/Header";
import FacultyDirectory from "@/components/sections/docentes/FacultyDirectory";
import ParallaxOrbs from "@/components/ui/ParallaxOrbs";
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
        <ParallaxOrbs />

        <div className="relative mx-auto max-w-4xl px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] px-6 py-12 text-center shadow-2xl shadow-black/20 backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent sm:px-12 sm:py-16">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
              Graduação · Pós-graduação · EFAL
            </p>
            <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
              Corpo docente do STPS
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
              O ensino do Seminário está a cargo de doutores, mestres e
              professores, comprometidos com a formação integral de cada
              seminarista. Clique em um docente para ver a biografia e os cursos
              em que leciona.
            </p>
          </div>
        </div>
      </section>

      <FacultyDirectory />
    </div>
  );
}
