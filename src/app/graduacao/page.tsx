import Header from "@/components/layout/Header";
import GraduacaoHero from "@/components/sections/graduacao/GraduacaoHero";
import AdmissionProcess from "@/components/sections/graduacao/AdmissionProcess";
import Differentiators from "@/components/sections/Differentiators";
import Faculty from "@/components/sections/graduacao/Faculty";

export const metadata = {
  title: "Bacharelado em Teologia — Graduação Presencial | Seminário Simonton",
  description:
    "O Bacharelado em Teologia do Seminário Simonton é a formação presencial completa em teologia reformada. O ingresso é pelo Vestibular Unificado da Igreja Presbiteriana do Brasil, organizado pela JET.",
};

export default function GraduacaoPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <GraduacaoHero />
      <AdmissionProcess />
      <Differentiators />
      <Faculty />
    </div>
  );
}
