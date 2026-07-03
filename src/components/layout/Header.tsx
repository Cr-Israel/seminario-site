"use client";

import { useState } from "react";
import { ScrollText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Cursos", href: "#cursos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
            <ScrollText size={18} strokeWidth={1.75} />
          </div>
          <div className="leading-tight text-white">
            <p className="font-serif text-sm font-semibold tracking-wide">
              SEMINÁRIO SIMONTON
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
              Rev. Ashbel Green Simonton
            </p>
          </div>
        </div>

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
            href="#cursos"
            className="rounded-sm bg-accent-500 px-5 py-2.5 text-sm font-medium text-brand-950 transition-colors hover:bg-accent-400"
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
            href="#cursos"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-sm bg-accent-500 px-3 py-2.5 text-center text-sm font-medium text-brand-950"
          >
            Quero me matricular
          </a>
        </div>
      )}
    </header>
  );
}
