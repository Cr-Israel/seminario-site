export type Coordinator = {
  name: string;
  /** Núcleo/curso que coordena. Ex: "Coordenação da EFAL". */
  role: string;
  email: string;
  /**
   * Caminho da foto em /public (ex: "/images/rev-jerson.jpg"). Se ausente,
   * o componente mostra as iniciais do coordenador.
   */
  photo?: string;
};

/**
 * Coordenador de cada núcleo de curso do Seminário Simonton.
 * Um por trilha — usado nas páginas de curso e nas visões gerais.
 */
export const coordinators = {
  bacharel: {
    name: "Rev. João Batista",
    role: "Coordenação do Bacharelado",
    email: "coordenacao.stps@ipb.org.br",
    photo: "/images/rev-joao.jpg",
  },
  pedagogico: {
    name: "Profª. Simone Xavier",
    role: "Coordenação Pedagógica",
    email: "pedagogico.stps@ipb.org.br",
    photo: "/images/prof-simone-xavier.png",
  },
  efal: {
    name: "Rev. Jerson Neto",
    role: "Coordenação da EFAL",
    email: "efal.stps@ipb.org.br",
    photo: "/images/rev-jerson.jpg",
  },
  pos: {
    name: "Rev. Eduardo Machado",
    role: "Coordenação da Pós-graduação",
    email: "npg.stps@ipb.org.br",
    photo: "/images/rev-eduardo.jpg",
  },
} satisfies Record<string, Coordinator>;
