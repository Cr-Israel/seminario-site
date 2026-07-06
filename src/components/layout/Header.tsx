"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Cursos", href: "/#cursos" },
  { label: "EFAL", href: "/efal" },
  { label: "Contato", href: "/#contato" },
];

type HeaderProps = {
  /**
   * "transparent" fica sobre um hero escuro (usado na Home).
   * "solid" fica fixo com fundo verde sólido (usado nas páginas internas
   * que não têm hero escuro atrás, como /efal).
   */
  variant?: "transparent" | "solid";
};

export default function Header({ variant = "transparent" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSolid = variant === "solid";

  return (
    <header
      className={
        isSolid
          ? "sticky top-0 z-30 bg-brand-950 shadow-sm shadow-brand-950/20"
          : "absolute inset-x-0 top-0 z-30"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/">
          <Image
            src="/images/logo-branca.png"
            alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
            width={172}
            height={47}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#cursos"
            className="rounded-sm bg-brand-50 px-5 py-2.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Quero me matricular
          </a>
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-6 mt-2 flex flex-col gap-1 rounded-sm bg-brand-950/95 p-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-2.5 text-sm text-white/90 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#cursos"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-sm bg-brand-50 px-3 py-2.5 text-center text-sm font-medium text-brand-900"
          >
            Quero me matricular
          </a>
        </div>
      )}
    </header>
  );
}
