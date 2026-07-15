import Header from "@/components/layout/Header";
import OnlineHero from "@/components/sections/online/OnlineHero";
import OnlineStats from "@/components/sections/online/OnlineStats";
import OnlineCourses from "@/components/sections/online/OnlineCourses";
import OnlineFaculty from "@/components/sections/online/OnlineFaculty";
import OnlineMotto from "@/components/sections/online/OnlineMotto";
import OnlineFaq from "@/components/sections/online/OnlineFaq";
import InterestForm from "@/components/sections/online/InterestForm";

export const metadata = {
  title: "Cursos Online — EFAL & Pós-graduação | Seminário Simonton",
  description:
    "Formação teológica 100% online, com aula ao vivo: 7 cursos na EFAL e programas de pós-graduação do Seminário Simonton, com inscrição direta e certificação pela JET/IPB.",
};

export default function CursosOnlinePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <OnlineHero />
      <OnlineStats />
      <OnlineCourses />
      <OnlineFaculty />
      <OnlineMotto />
      <OnlineFaq />
      <InterestForm />
    </div>
  );
}
