export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-28 pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
          Tradição Reformada · Igreja Presbiteriana do Brasil
        </p>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl">
          Uma casa de ensino e formação,
          <br className="hidden sm:block" /> em busca da excelência
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          Há mais de quatro décadas formando pastores e líderes para a
          glória de Deus, com sólido conhecimento bíblico-teológico e
          compromisso com a Confissão de Fé de Westminster.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#cursos"
            className="w-full rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white sm:w-auto"
          >
            Conheça nossos cursos
          </a>
          <a
            href="#contato"
            className="w-full rounded-sm border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Falar com a secretaria
          </a>
        </div>
      </div>
    </section>
  );
}
