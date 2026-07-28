import GreenGlassHero from "@/components/ui/GreenGlassHero";

/**
 * Hero da página /diferenciais — mesmo fundo verde com efeito de vidro do topo
 * da /graduacao (GreenGlassHero), com a tese da página: os diferenciais nascem
 * da confissão, não do mercado.
 */
export default function DiferenciaisHero() {
  return (
    <GreenGlassHero>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
        Por que estudar aqui
      </span>
      <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
        Diferenciais que nascem da nossa confissão
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
        O que distingue o Seminário Simonton não foi desenhado para o mercado:
        nasce da confissão que abraçamos, da igreja a que servimos e da história
        que herdamos. São convicções, e é por elas que vale a pena estudar aqui.
      </p>
    </GreenGlassHero>
  );
}
