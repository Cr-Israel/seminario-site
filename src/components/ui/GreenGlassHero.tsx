import type { ReactNode } from "react";
import ParallaxOrbs from "./ParallaxOrbs";

/**
 * Hero de fundo verde com efeito de vidro — o mesmo padrão do topo da
 * /graduacao: orbs verdes desfocados que acompanham o cursor (ParallaxOrbs) e
 * o conteúdo sobre um cartão de vidro fosco (backdrop-blur). Reúne o visual
 * num só lugar para as páginas do Institucional e o CIT compartilharem.
 *
 * O conteúdo (`children`) é centralizado; passe eyebrow, título e texto —
 * o componente cuida da moldura de vidro e do fundo.
 */
export default function GreenGlassHero({ children }: { children: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <ParallaxOrbs />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] px-6 py-12 text-center shadow-2xl shadow-black/20 backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent sm:px-12 sm:py-16">
          {children}
        </div>
      </div>
    </section>
  );
}
