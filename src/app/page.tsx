import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import { ogMetadata } from "@/lib/seo";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import VideoIntro from "@/components/sections/VideoIntro";
import CoursesGrid from "@/components/sections/CoursesGrid";
import ProximasTurmas from "@/components/sections/ProximasTurmas";
import Testimonials from "@/components/sections/Testimonials";
import Differentiators from "@/components/sections/Differentiators";
import FacultyPreview from "@/components/sections/FacultyPreview";
import Faq from "@/components/sections/Faq";
import ContactCta from "@/components/sections/ContactCta";

const title = "Seminário Simonton | Formação Teológica Reformada";
const description =
  "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — Bacharelado presencial, cursos livres da EFAL e pós-graduação online, jurisdicionado à Igreja Presbiteriana do Brasil desde 1982.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Home institucional — "uma casa só": instituição no topo e na base; no meio,
 * todos os cursos num único comparador (modalidade é badge, não marca),
 * costurados pela legitimação eclesiástica (IPB / Supremo Concílio / JURET).
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <Hero />
      <Stats />
      <About />
      <VideoIntro />
      <CoursesGrid />
      <ProximasTurmas />
      <Testimonials />
      <Differentiators />
      <FacultyPreview />
      <Faq />
      <ContactCta />
    </div>
  );
}
