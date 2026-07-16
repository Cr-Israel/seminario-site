import Header from "@/components/layout/Header";
import OnlineHero from "@/components/sections/online/OnlineHero";
import OnlineStats from "@/components/sections/online/OnlineStats";
import OnlineProfiles from "@/components/sections/online/OnlineProfiles";
import OnlineCourses from "@/components/sections/online/OnlineCourses";
import OnlineFaculty from "@/components/sections/online/OnlineFaculty";
import Testimonials from "@/components/sections/Testimonials";
import OnlineMotto from "@/components/sections/online/OnlineMotto";
import OnlineFaq from "@/components/sections/online/OnlineFaq";
import InterestForm from "@/components/sections/online/InterestForm";
import SeloIPB from "@/components/sections/SeloIPB";
import { depoimentos } from "@/data/depoimentos";
import { ogMetadata } from "@/lib/seo";

const title = "Cursos Online — EFAL & Pós-graduação | Seminário Simonton";
const description =
  "Formação teológica 100% online, com aula ao vivo: 7 cursos na EFAL e programas de pós-graduação do Seminário Simonton, com inscrição direta — sem vestibular — e certificação pela JURET/IPB.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Depoimentos de alunos dos cursos online/EFAL (placeholders por ora). */
const depoimentosOnline = depoimentos.filter(
  (d) => !d.context.startsWith("Bacharel"),
);

/**
 * Página dos cursos online (EFAL + Pós) — funil claro (guia por perfil →
 * catálogo → docentes → depoimentos → FAQ → contato), mas dentro da mesma
 * casa institucional: mesmos selos, mesmo tom vocacional, sem urgência
 * artificial.
 */
export default function CursosOnlinePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <OnlineHero />
      <OnlineStats />
      <OnlineProfiles />
      <OnlineCourses />

      {/* Legitimação eclesiástica logo abaixo do catálogo, como na Home. */}
      <section className="px-6 pb-20">
        <SeloIPB />
      </section>

      <OnlineFaculty />
      <Testimonials
        items={depoimentosOnline}
        title="Quem estudou, recomenda"
      />
      <OnlineMotto />
      <OnlineFaq />
      <InterestForm />
    </div>
  );
}
