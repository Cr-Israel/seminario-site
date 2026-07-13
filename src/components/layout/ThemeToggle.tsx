"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";
type Theme = "light" | "dark";

/**
 * Pílula de troca de tema (claro/escuro).
 *
 * O tema "de verdade" mora no atributo `data-theme` do <html>, aplicado antes
 * da primeira pintura pelo script inline em layout.tsx (evita flash). Aqui o
 * estado começa em "light" — igual ao SSR — e sincroniza com o DOM no primeiro
 * effect, então não há mismatch de hidratação; só o botão se ajusta.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light",
    );
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* localStorage indisponível (modo privado etc.) — ignora */
      }
      return next;
    });
  }, []);

  const isDark = theme === "dark";

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
