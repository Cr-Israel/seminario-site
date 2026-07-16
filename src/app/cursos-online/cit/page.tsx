import Header from "@/components/layout/Header";
import CitHero from "@/components/sections/cit/CitHero";
import CitObjections from "@/components/sections/cit/CitObjections";
import CitCtaBand from "@/components/sections/cit/CitCtaBand";
import CitCurriculum from "@/components/sections/cit/CitCurriculum";
import CitInstructors from "@/components/sections/cit/CitInstructors";
import CitFaq from "@/components/sections/cit/CitFaq";
import CitEnroll from "@/components/sections/cit/CitEnroll";
import { ogMetadata } from "@/lib/seo";

const title =
  "Curso Introdutório de Teologia (CIT) — EFAL | Seminário Simonton";
const description =
  "Formação teológica reformada 100% online e ao vivo: 8 disciplinas, 32 aulas com reverendos. O primeiro passo além da Escola Dominical e o degrau anterior ao Curso Livre de Bacharel em Teologia.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Landing page dedicada do CIT (curso carro-chefe da EFAL), voltada à conversão.
 * Rota estática que tem precedência sobre cursos-online/[slug]; o `cit` foi
 * removido do generateStaticParams do template genérico para evitar conflito.
 */
export default function CitLandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <CitHero />
      <CitObjections />
      <CitCtaBand />
      <CitCurriculum />
      <CitInstructors />
      <CitFaq />
      <CitEnroll />
    </div>
  );
}
