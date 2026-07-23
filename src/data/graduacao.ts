import {
  Award,
  BookMarked,
  CalendarDays,
  FileText,
  HandHelping,
  Laptop,
  type LucideIcon,
} from "lucide-react";

/**
 * Conteúdo real do Curso Livre de Bacharelado em Teologia (STPS), extraído da
 * página oficial seminariosimonton.com.br/curso-livre-de-bacharelado-em-teologia.
 * Centralizado aqui para que os componentes de /graduacao apenas apresentem.
 *
 * Natureza: é CURSO LIVRE (não graduação reconhecida pelo MEC). O currículo
 * reflete o aprovado pela IPB para todos os seus seminários. Ingresso pelo
 * processo de admissão da JET (Junta de Educação Teológica da IPB).
 */

/** CTAs oficiais do processo de admissão 2027 — links reais, abrir em nova aba. */
export const ADMISSAO_INSCRICAO_URL =
  "https://web3.mackenzie.br/inscricao/jet/processo/admissao-2027";
export const MANUAL_CANDIDATO_URL =
  "https://www.ipb.org.br/content/Downloads/manual_aspirante_2027_4v.pdf";

/** Os cinco departamentos em que se dividem as disciplinas do currículo. */
export const departamentos = [
  "Teologia Exegética",
  "Teologia Histórica",
  "Teologia Sistemática",
  "Teologia Pastoral",
  "Cultura Geral",
];

export type Beneficio = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/** Bloco "Você terá acesso a:" — seis itens da página oficial. */
export const beneficios: Beneficio[] = [
  {
    icon: BookMarked,
    title: "Biblioteca",
    text: "Acesso a uma biblioteca com mais de 18 mil títulos, oferecendo suporte para estudos, pesquisa e aprofundamento teológico.",
  },
  {
    icon: CalendarDays,
    title: "Semanas Teológicas",
    text: "Eventos acadêmicos de aprofundamento, com palestras e conferências que ampliam a formação para além da grade regular.",
  },
  {
    icon: Award,
    title: "Certificado",
    text: "Ao final do curso, o aluno recebe o certificado de conclusão, comprovando sua formação no Bacharelado em Teologia.",
  },
  {
    icon: HandHelping,
    title: "Estágio Supervisionado",
    text: "Atividades nas igrejas, com vivência prática do ministério, sob supervisão e orientação do seminário.",
  },
  {
    icon: Laptop,
    title: "Salas de Estudo",
    text: "Salas de estudo e de informática equipadas para pesquisa e desenvolvimento acadêmico.",
  },
  {
    icon: FileText,
    title: "Monografia",
    text: "Ao final, o aluno elabora uma monografia, apresentada e defendida perante banca avaliadora.",
  },
];

/**
 * Estrutura da sede (Edifício Rev. Roberto Brasileiro Silva) — descrição real
 * do prédio, organizada por nível.
 */
export const estruturaAndares = [
  {
    nivel: "Andar administrativo",
    text: "Sala de reuniões, sala de professores, copa, direção, capelania, administração e coordenação.",
  },
  {
    nivel: "Térreo",
    text: "Biblioteca com mais de 18 mil exemplares, sala de estudos com computadores, cantina, espaço de convivência e capela para 120 pessoas.",
  },
  {
    nivel: "Andares superiores",
    text: "8 salas de aula, 2 salas de informática, 2 salas de música e 1 auditório para cerca de 150 pessoas (ou 2 grandes salas com divisória acústica).",
  },
  {
    nivel: "Subsolo",
    text: "Amplo estacionamento.",
  },
];

/** Endereço e registro da instituição. */
export const enderecoStps = {
  logradouro: "Rua Isolina, nº 151, Méier",
  cidade: "Rio de Janeiro – RJ",
  cep: "CEP 20710-080",
  cnpj: "00.118.331/0011-00",
};
