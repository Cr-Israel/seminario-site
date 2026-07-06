import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import VideoIntro from "@/components/sections/VideoIntro";
import CoursesGrid from "@/components/sections/CoursesGrid";
import Differentiators from "@/components/sections/Differentiators";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <Hero />
      <Stats />
      <About />
      <VideoIntro />
      <CoursesGrid />
      <Differentiators />
      <ContactCta />
      <Footer />
    </div>
  );
}
