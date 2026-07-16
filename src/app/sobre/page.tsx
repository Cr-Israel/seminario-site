import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import SobreHero from "@/components/sections/sobre/SobreHero";
import SobreHistory from "@/components/sections/sobre/SobreHistory";
import SobreMissionValues from "@/components/sections/sobre/SobreMissionValues";
import SobreDirector from "@/components/sections/sobre/SobreDirector";
import SobreChaplaincy from "@/components/sections/sobre/SobreChaplaincy";
import { ogMetadata } from "@/lib/seo";

const title = "Sobre o Seminário | Seminário Simonton";
const description =
  "Conheça a história do Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — de 1867 aos dias de hoje —, sua direção e o trabalho da capelania.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
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
