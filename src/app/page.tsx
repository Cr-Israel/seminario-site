import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import GraduationHighlight from "@/components/sections/GraduationHighlight";
import VideoIntro from "@/components/sections/VideoIntro";
import OnlineCoursesPreview from "@/components/sections/OnlineCoursesPreview";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />
      <Hero />
      <Stats />
      <GraduationHighlight />
      <VideoIntro />
      <OnlineCoursesPreview />
      <ContactCta />
      <Footer />
    </div>
  );
}
