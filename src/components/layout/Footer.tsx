import Image from "next/image";
import Link from "next/link";
import { contato } from "@/data/contato";
import { conteudos } from "@/data/conteudos";

/** Props de nova aba para links externos (http) — undefined para links internos. */
const externalProps = (href: string) =>
  href.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

/**
 * Mapa completo do site no rodapé — espelho enxuto da navegação do Header
 * (src/components/layout/Header.tsx). Ao criar/renomear uma página ou curso,
 * atualizar os dois lugares. Os "#" são páginas ainda não publicadas
 * (TODO(conteúdo), iguais às do Header).
 */
const footerColumns = [
  {
    title: "Institucional",
    links: [
      { label: "Sobre", href: "/sobre" },
      { label: "Nossos diferenciais", href: "/diferenciais" },
      { label: "Docentes", href: "/corpo-docente" },
      { label: "Como chegar", href: "/como-chegar" },
      { label: "JURET-Rio", href: "/juret-rio" },
      { label: "LGPD", href: "/lgpd" },
      { label: "Contato", href: "/#contato" },
    ],
  },
  {
    title: "Cursos",
    links: [
      { label: "Bacharelado em Teologia", href: "/graduacao" },
      { label: "Pós-graduação", href: "/pos-graduacao" },
      { label: "EFAL", href: "/efal" },
    ],
  },
  {
    title: "Pós-graduação",
    links: [
      {
        label: "Plantação e Revitalização de Igreja",
        href: "/pos-graduacao/plantacao-e-revitalizacao",
      },
      {
        label: "Estudos do Novo Testamento",
        href: "/pos-graduacao/novo-testamento",
      },
      {
        label: "Cosmovisão Reformada",
        href: "/pos-graduacao/cosmovisao-reformada",
      },
      { label: "Gestão Ministerial", href: "/pos-graduacao/gestao-ministerial" },
    ],
  },
  {
    title: "EFAL",
    links: [
      { label: "Curso Introdutório de Teologia", href: "/efal/cit" },
      { label: "Aperfeiçoamento de Líderes", href: "/efal/cal" },
      { label: "Formação de Oficiais", href: "/efal/cfo" },
      { label: "Formação de Professores", href: "/efal/cfp" },
      { label: "Formação em Libras", href: "/efal/cfl" },
      { label: "Formação Musical", href: "/efal/cfm" },
      { label: "Formação em Capelania", href: "/efal/cfc" },
    ],
  },
  {
    title: "Projetos",
    links: [
      { label: "Apoie um seminarista", href: "/apoie-um-seminarista" },
      { label: "Casa de Isabel", href: "#" },
      { label: "STPS vai às Igrejas", href: "#" },
      { label: "STPS apoia Missões", href: "#" },
    ],
  },
  {
    title: "Conteúdos",
    links: conteudos.map(({ label, href }) => ({ label, href })),
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/seminariosimonton/",
    // Instagram
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/seminariosimonton",
    // YouTube
    path: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/seminariosimonton/?locale=pt_BR",
    // Facebook
    path: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 py-14">
      <div className="mx-auto max-w-6xl px-6">
        {/* Marca + redes */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/images/logo-branca-trim.png"
            alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
            width={269}
            height={91}
            className="h-16 w-auto opacity-90"
          />
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-100/80 ring-1 ring-white/15 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {social.path}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mapa do site */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/70">
                {column.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...externalProps(link.href)}
                      className="text-sm text-brand-100/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contato */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/70">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-brand-100/80">
              <li>{contato.endereco}</li>
              <li>{contato.telefone}</li>
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contato.email}
                </a>
              </li>
              <li>{contato.horario}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-1 border-t border-white/10 pt-6 text-center text-xs text-brand-200/70">
          <span>
            © {new Date().getFullYear()} Seminário Teológico Presbiteriano
            Rev. Ashbel Green Simonton
          </span>
          <span>Jurisdicionado à Igreja Presbiteriana do Brasil</span>
        </div>
      </div>
    </footer>
  );
}
