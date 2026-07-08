export type FacultyMember = {
  name: string;
  role: string;
  /** Área/ênfase de ensino, uma linha curta. */
  focus: string;
};

/**
 * PLACEHOLDER — mesmo padrão dos cursos CFL/CFM/CFC em data/efal.ts.
 * Nomes e cargos são fictícios, só para diagramar a seção de corpo docente.
 * TODO: substituir por professores reais (nome, titulação, foto) antes de
 * publicar. Enquanto isso, os cards mostram um avatar genérico.
 */
export const facultyPlaceholder: FacultyMember[] = [
  {
    name: "Rev. Nome Sobrenome",
    role: "Doutor em Teologia",
    focus: "Antigo Testamento e Hebraico",
  },
  {
    name: "Rev. Nome Sobrenome",
    role: "Doutor em Teologia",
    focus: "Novo Testamento e Grego",
  },
  {
    name: "Rev. Nome Sobrenome",
    role: "Mestre em Teologia",
    focus: "Teologia Sistemática",
  },
  {
    name: "Rev. Nome Sobrenome",
    role: "Mestre em Teologia",
    focus: "Teologia Histórica e Pastoral",
  },
];
