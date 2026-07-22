import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import SobreHero from "@/components/sections/sobre/SobreHero";
import SobreHistory from "@/components/sections/sobre/SobreHistory";
import SobreCampus from "@/components/sections/sobre/SobreCampus";
import SobreMissionValues from "@/components/sections/sobre/SobreMissionValues";
import SobreConfession from "@/components/sections/sobre/SobreConfession";
import SobreDirector from "@/components/sections/sobre/SobreDirector";
import SobreFaculty from "@/components/sections/sobre/SobreFaculty";
import SobreChaplaincy from "@/components/sections/sobre/SobreChaplaincy";
import { ogMetadata } from "@/lib/seo";

const title = "Sobre o Seminário | Seminário Simonton";
const description =
  "Conheça o Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — sua história, o campus no Méier, a confissão de fé reformada, a direção e o corpo docente.";

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
      <SobreCampus />
      <SobreMissionValues />
      <SobreConfession />
      <SobreDirector />
      <SobreFaculty />
      <SobreChaplaincy />
    </div>
  );
}
