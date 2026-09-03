import Image from "next/image";
import GreenGlassHero from "@/components/ui/GreenGlassHero";

/**
 * Hero da página /casa-de-isabel — mesmo vidro verde das demais páginas do
 * Institucional, com a logo do projeto acima do título. O texto situa o
 * projeto onde ele nasce: dentro da capelania, como cuidado que alcança
 * também a família do seminarista.
 */
export default function CasaDeIsabelHero() {
  return (
    <GreenGlassHero>
      {/* A arte é monocromática (verde escuro) sobre fundo transparente, e
          sumiria no verde do hero. `brightness-0 invert` leva todo pixel
          opaco a branco puro preservando o antisserrilhado — evita manter um
          segundo arquivo só para esta versão. Na Home, sobre fundo claro, a
          mesma logo entra sem filtro (EncontroDeMulheres.tsx). */}
      <Image
        src="/images/casa-de-isabel-logo.png"
        alt=""
        width={296}
        height={196}
        className="mx-auto mb-8 h-32 w-auto brightness-0 invert sm:h-40"
      />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
        Capelania · Projeto
      </span>
      <h1 className="mt-4 font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
        Casa de Isabel
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
        A capelania do Seminário Simonton se compromete com a saúde integral de
        quem se prepara para o ministério — e esse cuidado não para no
        seminarista. A Casa de Isabel é o projeto que acolhe as esposas e as
        futuras esposas, cuja vida é diretamente afetada por uma vocação
        pastoral em curso.
      </p>
    </GreenGlassHero>
  );
}
