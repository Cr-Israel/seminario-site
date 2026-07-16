export type Depoimento = {
  name: string;
  /** Curso e modalidade, identificados discretamente (ex.: "Aluno do CIT, online"). */
  context: string;
  text: string;
  initials: string;
};

/**
 * Depoimentos da instituição — egressos do presencial e alunos online/EFAL
 * INTENCIONALMENTE misturados, sem separar por modalidade ("uma casa só").
 *
 * TODO(conteúdo): substituir por depoimentos reais (coletar com a secretaria).
 * Ao receber os depoimentos, incluir também foto (campo photo + next/image).
 */
export const depoimentos: Depoimento[] = [
  {
    name: "[PLACEHOLDER] Nome do egresso",
    context: "Bacharel em Teologia, turma 2019 · Presencial",
    text: "[PLACEHOLDER] Depoimento de egresso — pastor formado pelo Seminário, contando como a formação presencial o preparou para o ministério.",
    initials: "BT",
  },
  {
    name: "[PLACEHOLDER] Nome da aluna",
    context: "Aluna do CIT, online",
    text: "[PLACEHOLDER] Depoimento de aluna do Curso Introdutório de Teologia sobre o primeiro contato com a teologia reformada nas aulas ao vivo.",
    initials: "CI",
  },
  {
    name: "[PLACEHOLDER] Nome do aluno",
    context: "Curso de Formação de Oficiais (CFO), online",
    text: "[PLACEHOLDER] Depoimento de presbítero ou diácono sobre como o CFO o preparou para o exercício do oficialato na igreja local.",
    initials: "FO",
  },
  {
    name: "[PLACEHOLDER] Nome da aluna",
    context: "Curso de Libras, online",
    text: "[PLACEHOLDER] Depoimento de aluna do Curso de Libras sobre servir a comunidade surda na igreja.",
    initials: "CL",
  },
];
