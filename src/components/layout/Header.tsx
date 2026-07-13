"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Graduação", href: "/graduacao" },
  { label: "Cursos Online", href: "/cursos-online" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-brand-50/95 backdrop-blur supports-[backdrop-filter]:bg-brand-50/80 dark:border-brand-900 dark:bg-brand-950/95 dark:supports-[backdrop-filter]:bg-brand-950/80">
      <div className="flex items-center gap-4 py-4 pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16">
        {/* Logo — verde no tema claro, branca no escuro */}
        <a href="/" className="shrink-0" aria-label="Página inicial">
          <Image
            src="/images/logo-verde-trim.png"
            alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
            width={269}
            height={91}
            priority
            className="h-12 w-auto sm:h-14 dark:hidden"
          />
          <Image
            src="/images/logo-branca-trim.png"
            alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
            width={269}
            height={91}
            priority
            className="hidden h-12 w-auto sm:h-14 dark:block"
          />
        </a>

        {/* Navegação central */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-brand-900 transition-colors hover:text-brand-700 dark:text-white/85 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Ações à direita */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/entrar"
            className="rounded-md border border-brand-700 px-5 py-2 text-base font-medium text-brand-800 transition-colors hover:bg-brand-700 hover:text-white dark:border-white/30 dark:text-white dark:hover:bg-white/10"
          >
            Entrar
          </a>
          <a
            href="/cadastro"
            className="rounded-md bg-brand-700 px-5 py-2 text-base font-medium text-white transition-colors hover:bg-brand-800"
          >
            Cadastre-se
          </a>
          <ThemeToggle />
        </div>

        {/* Ações mobile */}
        <div className="ml-auto flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-brand-900 dark:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mx-6 mb-3 flex flex-col gap-1 rounded-md border border-brand-100 bg-brand-50 p-4 shadow-lg md:hidden dark:border-brand-900 dark:bg-brand-950">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-2.5 text-sm font-medium text-brand-900 hover:bg-brand-100 dark:text-white/90 dark:hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/entrar"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md border border-brand-700 px-3 py-2.5 text-center text-sm font-medium text-brand-800 dark:border-white/30 dark:text-white"
          >
            Entrar
          </a>
          <a
            href="/cadastro"
            onClick={() => setMenuOpen(false)}
            className="rounded-md bg-brand-700 px-3 py-2.5 text-center text-sm font-medium text-white"
          >
            Cadastre-se
          </a>
        </div>
      )}
    </header>
  );
}
