import Header from "@/components/layout/Header";
import OnlineHero from "@/components/sections/online/OnlineHero";
import OnlineStats from "@/components/sections/online/OnlineStats";
import OnlineProfiles from "@/components/sections/online/OnlineProfiles";
import OnlineCourses from "@/components/sections/online/OnlineCourses";
import OnlineFaculty from "@/components/sections/online/OnlineFaculty";
import OnlineTestimonials from "@/components/sections/online/OnlineTestimonials";
import OnlineMotto from "@/components/sections/online/OnlineMotto";
import OnlineFaq from "@/components/sections/online/OnlineFaq";
import InterestForm from "@/components/sections/online/InterestForm";

export const metadata = {
  title: "Cursos Online — EFAL & Pós-graduação | Seminário Simonton",
  description:
    "Formação teológica 100% online, com aula ao vivo: 7 cursos na EFAL e programas de pós-graduação do Seminário Simonton, com inscrição direta — sem vestibular — e certificação pela JURET/IPB.",
};

/**
 * Página-marketplace dos cursos online (EFAL + Pós): enquanto o restante do
 * site é institucional e foca o Bacharelado, esta página existe para vender
 * e converter — funil: prova → guia por perfil → catálogo → prova social →
 * FAQ → captura/CTA final.
 */
export default function CursosOnlinePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <OnlineHero />
      <OnlineStats />
      <OnlineProfiles />
      <OnlineCourses />
      <OnlineFaculty />
      <OnlineTestimonials />
      <OnlineMotto />
      <OnlineFaq />
      <InterestForm />
    </div>
  );
}
