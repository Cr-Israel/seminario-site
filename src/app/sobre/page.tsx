import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import SobreHero from "@/components/sections/sobre/SobreHero";
import SobreHistory from "@/components/sections/sobre/SobreHistory";
import SobreMissionValues from "@/components/sections/sobre/SobreMissionValues";
import SobreDirector from "@/components/sections/sobre/SobreDirector";
import SobreChaplaincy from "@/components/sections/sobre/SobreChaplaincy";

export const metadata = {
  title: "Sobre o Seminário | Seminário Simonton",
  description:
    "Conheça a história do Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — de 1867 aos dias de hoje —, sua direção e o trabalho da capelania.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <SobreHero />
      <About />
      <SobreHistory />
      <SobreMissionValues />
      <SobreDirector />
      <SobreChaplaincy />
    </div>
  );
}
