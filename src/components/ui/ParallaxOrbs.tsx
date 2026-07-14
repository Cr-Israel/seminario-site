"use client";

import { useEffect, useRef } from "react";

/**
 * Orbs verdes desfocados que se movem acompanhando o cursor (parallax),
 * como no fundo animado do site do NestJS. Deve ser filho direto de uma
 * seção `relative`: o listener de mouse é anexado ao elemento pai, então
 * o fundo reage mesmo quando o cursor está sobre o cartão de vidro.
 *
 * Cada orb se desloca numa direção diferente, o que dá sensação de
 * profundidade atrás do vidro. O movimento usa CSS custom properties e
 * transform, sem re-render do React.
 */
export default function ParallaxOrbs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    function onPointerMove(event: PointerEvent) {
      if (!el || !section) return;
      const rect = section.getBoundingClientRect();
      // Posição do cursor normalizada para -0.5..0.5 a partir do centro.
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--par-x", String(x));
      el.style.setProperty("--par-y", String(y));
    }

    function onPointerLeave() {
      if (!el) return;
      el.style.setProperty("--par-x", "0");
      el.style.setProperty("--par-y", "0");
    }

    section.addEventListener("pointermove", onPointerMove);
    section.addEventListener("pointerleave", onPointerLeave);
    return () => {
      section.removeEventListener("pointermove", onPointerMove);
      section.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-brand-400/50 blur-3xl transition-transform duration-500 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--par-x, 0) * 90px), calc(var(--par-y, 0) * 90px), 0)",
        }}
      />
      <div
        className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-brand-700/30 blur-3xl transition-transform duration-500 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--par-x, 0) * -120px), calc(var(--par-y, 0) * -120px), 0)",
        }}
      />
    </div>
  );
}
