import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, Users, Church, ScrollText } from "lucide-react";

export type Course = {
  slug: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  meta: string;
  /** Se definido, o card vira um link para essa rota (ex: página já pronta da EFAL). */
  href?: string;
};

export const courses: Course[] = [
  {
    slug: "bacharelado-em-teologia",
    icon: GraduationCap,
    tag: "Graduação",
    title: "Curso Livre de Bacharelado em Teologia",
    description:
      "Formação sólida em teologia reformada, seguindo a grade curricular aprovada pelo Supremo Concílio da Igreja Presbiteriana do Brasil.",
    meta: "Presencial · Rio de Janeiro",
  },
  {
    slug: "curso-introdutorio-de-teologia",
    icon: BookOpen,
    tag: "EFAL",
    title: "Curso Introdutório de Teologia",
    description:
      "8 disciplinas em formato remoto ao vivo, com certificado outorgado pela Junta Regional de Educação Teológica da IPB.",
    meta: "100% online · Até 6 meses",
    href: "/efal/cit",
  },
  {
    slug: "formacao-de-oficiais",
    icon: Users,
    tag: "EFAL",
    title: "Curso de Formação de Oficiais",
    description:
      "Capacita aspirantes ao oficialato e oficiais já ordenados para o exercício consciente e bem preparado de suas funções.",
    meta: "100% online · Ao vivo",
    href: "/efal/cfo",
  },
  {
    slug: "pos-graduacao-estudos-biblicos",
    icon: ScrollText,
    tag: "Pós-graduação",
    title: "Pós-Graduação em Estudos Bíblicos",
    description:
      "Especialização acadêmica 100% EAD, aprovada pela JURET-Rio, aprofundando exegese e teologia sistemática.",
    meta: "100% online",
  },
  {
    slug: "pos-graduacao-novo-testamento",
    icon: BookOpen,
    tag: "Pós-graduação",
    title: "Pós-Graduação em Estudos do Novo Testamento",
    description:
      "Panorama exegético dos evangelhos, cartas paulinas e literatura joanina, com foco em temas teológicos do Novo Testamento.",
    meta: "100% online",
  },
  {
    slug: "formacao-de-professores",
    icon: Church,
    tag: "EFAL",
    title: "Curso de Formação de Professores",
    description:
      "Capacitação de líderes para o ensino bíblico local, unindo fundamentos teológicos à prática pedagógica na igreja.",
    meta: "100% online · Ao vivo",
    href: "/efal/cfp",
  },
];
