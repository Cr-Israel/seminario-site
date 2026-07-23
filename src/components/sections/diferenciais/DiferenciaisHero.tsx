/**
 * Hero da página /diferenciais — fundo escuro no mesmo padrão do SobreHero
 * (hachura diagonal + orbe), com a tese da página: os diferenciais nascem da
 * confissão, não do mercado.
 */
export default function DiferenciaisHero() {
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
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
          Por que estudar aqui
        </span>
        <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Diferenciais que nascem da nossa confissão
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          O que distingue o Seminário Simonton não foi desenhado para o
          mercado: nasce da confissão que abraçamos, da igreja a que servimos e
          da história que herdamos. São convicções — e é por elas que vale a
          pena estudar aqui.
        </p>
      </div>
    </section>
  );
}
