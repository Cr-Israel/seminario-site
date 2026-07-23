/**
 * Corpo docente do Curso Livre de Bacharelado em Teologia (STPS) — dados reais
 * da página oficial. `credential` resume a titulação; `role` marca funções
 * institucionais (direção, decanato, coordenação de departamento, capelania).
 *
 * Fotos: reaproveitadas de /public/images quando o docente já tem retrato no
 * acervo; os demais mostram as iniciais até a foto real chegar.
 * TODO(conteúdo): completar as fotos que faltam (marcadas sem `photo`) e, se
 * quisermos "Ler mais", acrescentar a bio completa (hoje só o resumo).
 */
export type Docente = {
  name: string;
  /** Titulação/credencial resumida, uma linha. */
  credential: string;
  /** Função institucional em destaque, quando houver. */
  role?: string;
  /** Foto em /public; sem ela o card usa as iniciais. */
  photo?: string;
};

export const docentes: Docente[] = [
  {
    name: "Rev. Sergio Kitagawa",
    credential: "Doutor em História Social (UERJ)",
    role: "Diretor do Seminário",
    photo: "/images/rev-sergio-kitagawa.png",
  },
  {
    name: "Rev. João Batista Borges",
    credential: "Decano do corpo docente",
    role: "Coordenador do Dep. de Cultura Geral",
    photo: "/images/rev-joao.jpg",
  },
  {
    name: "Rev. Junio Cesar Lima",
    credential: "Doutor em História Política (UERJ, 2021)",
    role: "Coordenador do Dep. de Teologia Histórica",
    photo: "/images/rev-junio-cesar.jpeg",
  },
  {
    name: "Rev. Carlos Antônio",
    credential: "Mestre em Teologia Sistemática (CPAJ)",
    role: "Coordenador do Dep. de Teologia Pastoral",
  },
  {
    name: "Rev. Adelino da Silva",
    credential: "Bacharel em Teologia (Seminário Presbiteriano do Sul)",
    role: "Capelão do STPS",
    photo: "/images/rev-adelino.jpg",
  },
  {
    name: "Prof. Miguel Torres",
    credential: "Bacharel em Regência pela Escola de Música da UFRJ",
  },
  {
    name: "Profª Alessandra Serra Viegas",
    credential:
      "Doutora em História Comparada (UFRJ, 2018) e em Teologia (PUC-Rio, 2017)",
    photo: "/images/prof-alessandra-viegas.jpeg",
  },
  {
    name: "Profª Simone Bondarzuck",
    credential: "Doutora em Letras Clássicas (2017)",
  },
  {
    name: "Profª Simone Xavier",
    credential: "Mestra em Educação (UFRJ)",
    photo: "/images/prof-simone-xavier.png",
  },
  {
    name: "Profª Vânia Dutra",
    credential: "Pós-Doutorado em Ciências Humanas (FIOCRUZ, 2021)",
  },
  {
    name: "Profª Tânia Brizon",
    credential: "Pós-graduada em Docência no Ensino Superior (Mackenzie, 2022)",
  },
  {
    name: "Profª Thais da Silva",
    credential: "Pós-graduada em Docência no Ensino Superior",
  },
  {
    name: "Rev. André Monteiro",
    credential:
      "Doutorando em Ministério (Servos de Cristo); treinador City to City Brasil",
    photo: "/images/rev-andre-monteiro.jpeg",
  },
  {
    name: "Rev. Eduardo Machado",
    credential: "Mestre em Filosofia (UFF)",
    photo: "/images/rev-eduardo.jpg",
  },
  {
    name: "Rev. Ely Costa Júnior",
    credential: "Magister Divinitatis (MDiv), Antigo Testamento (CPAJ)",
  },
  {
    name: "Rev. Fabio Quintanilha",
    credential: "Mestre em Missiologia; Bacharel em Teologia (STPS)",
  },
  {
    name: "Rev. Ivo Mozart",
    credential: "Mestre em Estudos do Novo Testamento; pastor da IP do Méier",
    photo: "/images/rev-ivo-cesar.jpeg",
  },
  {
    name: "Rev. Jayro Alves",
    credential: "Doutor e Mestre em Teologia (PUC-Rio)",
  },
  {
    name: "Rev. Jeferson Alvarenga",
    credential: "Doutor em Engenharia Civil (UFF)",
    photo: "/images/rev-jeferson-alvarenga.jpeg",
  },
  {
    name: "Rev. Jorge Luiz Patrocinio",
    credential: "Doutor em Estudos Reformados (Seminário Concórdia, EUA)",
  },
  {
    name: "Rev. José Mirabeau",
    credential:
      "Mestre em Teologia Bíblica/AT (PUC-Rio); pastor da IP de Copacabana",
    photo: "/images/rev-jose-mirabeau.jpeg",
  },
  {
    name: "Rev. Leonard Neumann",
    credential: "Mestrando em Estudos Bíblico-Hermenêuticos (CPAJ)",
  },
  {
    name: "Rev. Orlando Ferreira",
    credential: "Pós-graduado em Docência do Ensino Superior (Mackenzie)",
  },
  {
    name: "Rev. Stefano dos Santos",
    credential: "Pós-doutorando em Letras (Mackenzie); Doutor em Letras (UFPB)",
  },
];
