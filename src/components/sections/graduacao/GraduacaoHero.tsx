export default function GraduacaoHero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
          Formação Presbiteriana Reformada · Presencial · Rio de Janeiro
        </p>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Uma formação teológica completa, para quem foi chamado ao ministério
          pastoral
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          O Bacharelado em Teologia é o carro-chefe do Seminário Simonton:
          formação presencial e integral em teologia reformada, seguindo a grade
          curricular aprovada pelo Supremo Concílio da Igreja Presbiteriana do
          Brasil.
        </p>
      </div>
    </section>
  );
}
