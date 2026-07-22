import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { ogMetadata } from "@/lib/seo";
import Stats from "@/components/sections/Stats";
import CoursesGateway from "@/components/sections/CoursesGateway";
import VideoIntro from "@/components/sections/VideoIntro";
import Highlights from "@/components/sections/Highlights";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import ContactCta from "@/components/sections/ContactCta";

const title = "Seminário Simonton | Formação Teológica Reformada";
const description =
  "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — Bacharelado presencial, cursos livres da EFAL e pós-graduação online, jurisdicionado à Igreja Presbiteriana do Brasil desde 1986.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Home institucional. Ordem após o topo (Header/Hero/Stats): três portas de
 * entrada para as trilhas de curso, apresentação da casa com a mensagem do
 * diretor (fundo escuro), pilares institucionais, depoimentos, dúvidas
 * frequentes e o contato com formulário e mapa. Fundos alternam claro/escuro
 * para dar ritmo.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <Hero />
      <Stats />
      <CoursesGateway />
      <VideoIntro />
      <Highlights />
      <Testimonials />
      <Faq />
      <ContactCta />
    </div>
  );
}
