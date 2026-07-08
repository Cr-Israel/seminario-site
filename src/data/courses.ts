import type { LucideIcon } from "lucide-react";
import { GraduationCap, MonitorPlay } from "lucide-react";

export type HomeTrack = {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  /** Destaques curtos mostrados como bullets no rodapé do card. */
  highlights: string[];
  cta: string;
  href: string;
};

/**
 * As duas naturezas de formação do Simonton, mostradas lado a lado na Home.
 * Antes o Bacharelado (presencial, ingresso via processo seletivo da IPB) vinha
 * misturado com EFAL/Pós (online, inscrição direta) numa única grade — o que
 * dava a impressão errada de que são produtos equivalentes. Agora cada trilha
 * tem seu próprio caminho.
 */
export const homeTracks: HomeTrack[] = [
  {
    icon: GraduationCap,
    tag: "Graduação · Presencial",
    title: "Bacharelado em Teologia",
    description:
      "A formação teológica completa do Seminário, para quem foi chamado ao ministério pastoral. O ingresso é pelo Vestibular Unificado da Igreja Presbiteriana do Brasil.",
    highlights: ["Presencial · Rio de Janeiro", "Ingresso pelo processo seletivo da IPB"],
    cta: "Conhecer a Graduação",
    href: "/graduacao",
  },
  {
    icon: MonitorPlay,
    tag: "Online · Inscrição direta",
    title: "Cursos Online — EFAL & Pós-graduação",
    description:
      "Sete cursos na EFAL e programas de pós-graduação, de curta e média duração, com inscrição direta pelo Simonton — sem processo seletivo externo.",
    highlights: ["100% online, com aula ao vivo", "Certificação pela JURET/IPB"],
    cta: "Explorar cursos online",
    href: "/cursos-online",
  },
];
