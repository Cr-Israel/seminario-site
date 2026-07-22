"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

import ThemeToggle from "./ThemeToggle";

type MenuItem = {
  label: string;
  href: string;
  description?: string;
};

type MenuGroup = {
  /** Título da coluna (ex.: "Pós-graduação"); quando tem href, o título linka pra trilha. */
  label?: string;
  href?: string;
  items: MenuItem[];
};

type NavEntry = {
  label: string;
  /** Link direto (sem dropdown). */
  href?: string;
  /** Dropdown: um grupo = lista simples; vários grupos = painel em colunas. */
  groups?: MenuGroup[];
};

/**
 * Navegação principal: institucional | teologia | cursos | conteúdos | projetos.
 *
 * Os itens de curso são um espelho enxuto (rótulo + slug) de src/data/pos.ts e
 * src/data/efal.ts — importar os arquivos inteiros puxaria todo o conteúdo
 * descritivo pro bundle do client. Ao criar/renomear um curso, atualizar aqui.
 */
const navEntries: NavEntry[] = [
  {
    label: "Institucional",
    groups: [
      {
        items: [
          { label: "Sobre", href: "/sobre" },
          { label: "Nossos diferenciais", href: "/#diferenciais" },
          { label: "Docentes", href: "/cursos-online#professores" },
          { label: "Como chegar", href: "/#contato" },
          { label: "JURET-Rio", href: "/juret-rio" },
          {
            label: "LGPD",
            description: "Lei Geral de Proteção de Dados",
            href: "/lgpd",
          },
        ],
      },
    ],
  },
  { label: "Teologia", href: "/graduacao" },
  {
    label: "Cursos",
    groups: [
      {
        label: "Pós-graduação",
        href: "/cursos-online#pos",
        items: [
          {
            label: "Plantação e Revitalização de Igreja",
            href: "/cursos-online/plantacao-e-revitalizacao",
          },
          {
            label: "Estudos do Novo Testamento",
            href: "/cursos-online/novo-testamento",
          },
          {
            label: "Cosmovisão Reformada",
            href: "/cursos-online/cosmovisao-reformada",
          },
          {
            label: "Gestão Ministerial",
            href: "/cursos-online/gestao-ministerial",
          },
        ],
      },
      {
        label: "EFAL",
        href: "/cursos-online",
        items: [
          { label: "Curso Introdutório de Teologia", href: "/cursos-online/cit" },
          { label: "Aperfeiçoamento de Líderes", href: "/cursos-online/cal" },
          { label: "Formação de Oficiais", href: "/cursos-online/cfo" },
          { label: "Formação de Professores", href: "/cursos-online/cfp" },
          { label: "Curso de Libras", href: "/cursos-online/cfl" },
          { label: "Formação Musical", href: "/cursos-online/cfm" },
          { label: "Formação em Capelania", href: "/cursos-online/cfc" },
        ],
      },
    ],
  },
  {
    label: "Conteúdos",
    groups: [
      {
        items: [
          {
            label: "Revista Sementes",
            description: "A revista do seminário · materiais para baixar",
            // TODO(conteúdo): trocar pelo link real da Revista Sementes.
            href: "#",
          },
        ],
      },
    ],
  },
  {
    label: "Projetos",
    groups: [
      {
        // TODO(conteúdo): criar as páginas dos demais projetos e trocar os "#".
        items: [
          { label: "Apoie um seminarista", href: "/apoie-um-seminarista" },
          { label: "Casa de Isabel", href: "#" },
          { label: "STPS vai às Igrejas", href: "#" },
          { label: "STPS apoia Missões", href: "#" },
        ],
      },
    ],
  },
];

const menuId = (label: string) =>
  `menu-${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  // Submenu lateral aberto dentro do dropdown (ex.: "EFAL" dentro de Cursos).
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Abre no hover (estilo FTSA); o pequeno atraso pra fechar evita que o menu
  // suma ao atravessar o vão entre o botão e o painel.
  const openOnHover = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
    setOpenGroup(null);
  };
  const closeOnLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenGroup(null);
    }, 150);
  };

  // Fecha o dropdown com Escape ou clique fora — navegação por teclado ok.
  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  const navLinkClass =
    "text-base font-medium text-brand-900 transition-colors hover:text-brand-700 dark:text-white/85 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-brand-50/95 backdrop-blur supports-[backdrop-filter]:bg-brand-50/80 dark:border-brand-900 dark:bg-brand-950/95 dark:supports-[backdrop-filter]:bg-brand-950/80">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
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
        <nav
          ref={navRef}
          className="hidden flex-1 items-center justify-center gap-7 md:flex"
        >
          {navEntries.map((entry) =>
            entry.href ? (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={() => setOpenMenu(null)}
                className={navLinkClass}
              >
                {entry.label}
              </Link>
            ) : (
              <div
                key={entry.label}
                className="relative"
                onMouseEnter={() => openOnHover(entry.label)}
                onMouseLeave={closeOnLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenMenu((v) => (v === entry.label ? null : entry.label))
                  }
                  aria-expanded={openMenu === entry.label}
                  aria-haspopup="menu"
                  aria-controls={menuId(entry.label)}
                  className={`inline-flex items-center gap-1.5 ${navLinkClass}`}
                >
                  {entry.label}
                  <ChevronDown
                    size={16}
                    aria-hidden
                    className={`transition-transform ${openMenu === entry.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openMenu === entry.label && (
                  // Ponte invisível até a base do header (folga da logo h-14 +
                  // py-4 + borda) — hover contínuo e painel colado, estilo FTSA.
                  <div className="absolute left-0 top-full z-50 pt-[33px]">
                    <div
                      id={menuId(entry.label)}
                      role="menu"
                      aria-label={entry.label}
                      className="w-72 border border-brand-100 bg-white py-2 shadow-lg dark:border-brand-900 dark:bg-brand-950"
                    >
                      {entry.groups!.map((group, i) =>
                        group.label ? (
                          // Grupo com submenu: linha com seta que revela o
                          // painel lateral no hover, estilo FTSA.
                          <div
                            key={group.label}
                            className="relative"
                            onMouseEnter={() => setOpenGroup(group.label!)}
                          >
                            {group.href ? (
                              <Link
                                role="menuitem"
                                aria-haspopup="menu"
                                aria-expanded={openGroup === group.label}
                                href={group.href}
                                onClick={() => setOpenMenu(null)}
                                className="flex items-center justify-between gap-2 px-5 py-2.5 text-sm font-medium text-brand-900 transition-colors hover:bg-brand-100 dark:text-white/90 dark:hover:bg-white/10"
                              >
                                {group.label}
                                <ChevronRight size={16} aria-hidden />
                              </Link>
                            ) : (
                              <p className="flex items-center justify-between gap-2 px-5 py-2.5 text-sm font-medium text-brand-900 dark:text-white/90">
                                {group.label}
                                <ChevronRight size={16} aria-hidden />
                              </p>
                            )}
                            {openGroup === group.label && (
                              <div
                                role="menu"
                                aria-label={group.label}
                                className="absolute left-full top-0 w-80 border border-brand-100 bg-white py-2 shadow-lg dark:border-brand-900 dark:bg-brand-950"
                              >
                                {group.items.map((item) => (
                                  <Link
                                    key={item.label}
                                    role="menuitem"
                                    href={item.href}
                                    onClick={() => setOpenMenu(null)}
                                    className="block px-5 py-2.5 transition-colors hover:bg-brand-100 dark:hover:bg-white/10"
                                  >
                                    <span className="block text-sm font-medium text-brand-900 dark:text-white/90">
                                      {item.label}
                                    </span>
                                    {item.description && (
                                      <span className="mt-0.5 block text-xs text-stone-500 dark:text-white/60">
                                        {item.description}
                                      </span>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          // Grupo simples: itens direto no painel.
                          <div key={i} onMouseEnter={() => setOpenGroup(null)}>
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                role="menuitem"
                                href={item.href}
                                onClick={() => setOpenMenu(null)}
                                className="block px-5 py-2.5 transition-colors hover:bg-brand-100 dark:hover:bg-white/10"
                              >
                                <span className="block text-sm font-medium text-brand-900 dark:text-white/90">
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="mt-0.5 block text-xs text-stone-500 dark:text-white/60">
                                    {item.description}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            ),
          )}
        </nav>

        {/* Ações à direita */}
        <div className="hidden items-center gap-3 md:flex">
          {/* TODO(conteúdo): trocar pelo link real do portal do aluno. */}
          <Link
            href="#"
            className="rounded-md bg-brand-700 px-5 py-2 text-base font-medium text-white transition-colors hover:bg-brand-800"
          >
            Área do aluno
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
          className="mx-6 mb-3 flex max-h-[calc(100dvh-7rem)] flex-col gap-1 overflow-y-auto rounded-md border border-brand-100 bg-brand-50 p-4 shadow-lg md:hidden dark:border-brand-900 dark:bg-brand-950"
        >
          {navEntries.map((entry) =>
            entry.href ? (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-sm px-3 py-2.5 text-sm font-medium text-brand-900 hover:bg-brand-100 dark:text-white/90 dark:hover:bg-white/10"
              >
                {entry.label}
              </Link>
            ) : (
              <div key={entry.label} className="flex flex-col gap-1">
                {entry.groups!.map((group, i) => (
                  <div key={group.label ?? i} className="flex flex-col gap-1">
                    <p className="mt-2 px-3 text-xs font-medium uppercase tracking-[0.18em] text-brand-700 dark:text-white/60">
                      {group.label ? `${entry.label} · ${group.label}` : entry.label}
                    </p>
                    {group.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-sm px-3 py-2 hover:bg-brand-100 dark:hover:bg-white/10"
                      >
                        <span className="block text-sm font-medium text-brand-900 dark:text-white/90">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs text-stone-500 dark:text-white/60">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ),
          )}

          {/* TODO(conteúdo): trocar pelo link real do portal do aluno. */}
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="mt-3 rounded-md bg-brand-700 px-3 py-2.5 text-center text-sm font-medium text-white"
          >
            Área do aluno
          </Link>
        </nav>
      )}
    </header>
  );
}
