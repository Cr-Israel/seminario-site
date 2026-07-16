"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
];

/**
 * Dropdown "Cursos" — todas as trilhas da casa num lugar só; modalidade é
 * atributo (descrito no item), não uma marca separada no menu.
 */
const courseLinks = [
  {
    label: "Bacharelado em Teologia",
    description: "Graduação presencial · Rio de Janeiro",
    href: "/graduacao",
  },
  {
    label: "Cursos da EFAL",
    description: "Cursos livres · 100% online, ao vivo",
    href: "/cursos-online",
  },
  {
    label: "Pós-graduação",
    description: "Especializações · 100% online, ao vivo",
    href: "/cursos-online#pos",
  },
  {
    label: "Todos os cursos",
    description: "Visão geral das trilhas de formação",
    href: "/cursos",
  },
];

const contactLink = { label: "Contato", href: "/#contato" };

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown com Escape ou clique fora — navegação por teclado ok.
  useEffect(() => {
    if (!coursesOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCoursesOpen(false);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!coursesRef.current?.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [coursesOpen]);

  const navLinkClass =
    "text-base font-medium text-brand-900 transition-colors hover:text-brand-700 dark:text-white/85 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-brand-50/95 backdrop-blur supports-[backdrop-filter]:bg-brand-50/80 dark:border-brand-900 dark:bg-brand-950/95 dark:supports-[backdrop-filter]:bg-brand-950/80">
      <div className="flex items-center gap-4 py-4 pl-6 pr-6 md:pl-10 md:pr-10 lg:pl-16 lg:pr-16">
        {/* Logo — verde no tema claro, branca no escuro */}
        <Link href="/" className="shrink-0" aria-label="Página inicial">
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
        </Link>

        {/* Navegação central */}
        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}

          {/* Dropdown Cursos */}
          <div ref={coursesRef} className="relative">
            <button
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
              aria-haspopup="menu"
              aria-controls="menu-cursos"
              className={`inline-flex items-center gap-1.5 ${navLinkClass}`}
            >
              Cursos
              <ChevronDown
                size={16}
                aria-hidden
                className={`transition-transform ${coursesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {coursesOpen && (
              <div
                id="menu-cursos"
                role="menu"
                aria-label="Cursos"
                className="absolute left-1/2 top-full mt-3 w-80 -translate-x-1/2 rounded-md border border-brand-100 bg-brand-50 p-2 shadow-lg dark:border-brand-900 dark:bg-brand-950"
              >
                {courseLinks.map((link) => (
                  <Link
                    key={link.href}
                    role="menuitem"
                    href={link.href}
                    onClick={() => setCoursesOpen(false)}
                    className="block rounded-sm px-4 py-3 transition-colors hover:bg-brand-100 dark:hover:bg-white/10"
                  >
                    <span className="block text-sm font-medium text-brand-900 dark:text-white/90">
                      {link.label}
                    </span>
                    <span className="mt-0.5 block text-xs text-stone-500 dark:text-white/60">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={contactLink.href} className={navLinkClass}>
            {contactLink.label}
          </Link>
        </nav>

        {/* Ações à direita */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/#contato"
            className="rounded-md bg-brand-700 px-5 py-2 text-base font-medium text-white transition-colors hover:bg-brand-800"
          >
            Quero me matricular
          </Link>
          <ThemeToggle />
        </div>

        {/* Ações mobile */}
        <div className="ml-auto flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="text-brand-900 dark:text-white"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu principal"
          className="mx-6 mb-3 flex flex-col gap-1 rounded-md border border-brand-100 bg-brand-50 p-4 shadow-lg md:hidden dark:border-brand-900 dark:bg-brand-950"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-2.5 text-sm font-medium text-brand-900 hover:bg-brand-100 dark:text-white/90 dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}

          <p className="mt-2 px-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-700 dark:text-white/60">
            Cursos
          </p>
          {courseLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-sm px-3 py-2.5 hover:bg-brand-100 dark:hover:bg-white/10"
            >
              <span className="block text-sm font-medium text-brand-900 dark:text-white/90">
                {link.label}
              </span>
              <span className="mt-0.5 block text-xs text-stone-500 dark:text-white/60">
                {link.description}
              </span>
            </Link>
          ))}

          <Link
            href={contactLink.href}
            onClick={() => setMenuOpen(false)}
            className="mt-1 rounded-sm px-3 py-2.5 text-sm font-medium text-brand-900 hover:bg-brand-100 dark:text-white/90 dark:hover:bg-white/10"
          >
            {contactLink.label}
          </Link>

          <Link
            href="/#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-md bg-brand-700 px-3 py-2.5 text-center text-sm font-medium text-white"
          >
            Quero me matricular
          </Link>
        </nav>
      )}
    </header>
  );
}
