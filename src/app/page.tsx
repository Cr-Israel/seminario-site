import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import VideoIntro from "@/components/sections/VideoIntro";
import CoursesGrid from "@/components/sections/CoursesGrid";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <Hero />
      <Stats />
      <VideoIntro />
      <CoursesGrid />
      <ContactCta />
      <Footer />
    </div>
  );
}
