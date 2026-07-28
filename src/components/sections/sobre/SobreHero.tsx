import GreenGlassHero from "@/components/ui/GreenGlassHero";

export default function SobreHero() {
  return (
    <GreenGlassHero>
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
        Desde 1986 · Igreja Presbiteriana do Brasil
      </p>
      <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
        Uma história que começa com o pioneiro do presbiterianismo brasileiro
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
        O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton é uma
        instituição cristã de ensino teológico e confissão de fé reformada,
        jurisdicionada à Igreja Presbiteriana do Brasil — formando pastores com
        sólido conhecimento bíblico-teológico e vivência cristã madura.
      </p>
    </GreenGlassHero>
  );
}
