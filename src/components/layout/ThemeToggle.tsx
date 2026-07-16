"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

/**
 * O tema "de verdade" mora no atributo `data-theme` do <html>, aplicado antes
 * da primeira pintura pelo script inline em layout.tsx (evita flash). O botão
 * lê esse estado externo via useSyncExternalStore: no servidor assume "light"
 * (igual ao SSR) e, no cliente, sincroniza com o DOM sem mismatch de
 * hidratação nem setState em effect.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.getAttribute("data-theme") === "dark";
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next = getSnapshot() ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* localStorage indisponível (modo privado etc.) — ignora */
    }
  }, []);

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Alternar tema claro e escuro"
      onClick={toggle}
      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
        isDark ? "bg-brand-700" : "bg-brand-400"
      }`}
    >
      <span
        className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-800 shadow transition-transform ${
          isDark ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {isDark ? <Moon size={12} /> : <Sun size={12} />}
      </span>
    </button>
  );
}
