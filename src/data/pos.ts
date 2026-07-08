export type Discipline = {
  name: string;
  /** Professor responsável, quando informado (ex.: Gestão Ministerial). */
  professor?: string;
};

export type PosCourse = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  format: string;
  duration: string;
  disciplines: string;
  /** Grade curricular (na ordem). */
  curriculum: Discipline[];
  /**
   * true enquanto o conteúdo descritivo real (descrição, público-alvo,
   * duração) não foi confirmado. As GRADES já são reais; o que falta é o
   * texto de apresentação. Pinta a etiqueta "Conteúdo provisório".
   */
  isPlaceholder: boolean;
  /**
   * Link de inscrição. Enquanto o fluxo de matrícula não está definido,
   * aponta para "#" — trocar pelo link real (formulário, WhatsApp da
   * secretaria ou sistema de matrícula) assim que decidido.
   */
  enrollUrl: string;
};

/**
 * Os 4 programas de pós-graduação do Simonton. As GRADES CURRICULARES abaixo
 * são reais (fornecidas pela instituição). Descrição, público-alvo e duração
 * ainda são PLACEHOLDER (isPlaceholder: true) — substituir pelo texto oficial
 * antes de divulgar. Os títulos e as taglines refletem o conteúdo real das
 * disciplinas.
 */
export const posCourses: PosCourse[] = [
  {
    slug: "plantacao-e-revitalizacao",
    title: "Pós-Graduação em Plantação e Revitalização de Igreja",
    tagline:
      "Formação estratégica para plantar e revitalizar igrejas segundo a teologia reformada.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Descrição oficial a confirmar com o Núcleo de Pós-graduação.)",
    audience: "A confirmar com o Núcleo de Pós-graduação.",
    format: "100% online · Ao vivo",
    duration: "A definir",
    disciplines: "9 disciplinas",
    curriculum: [
      { name: "Planejamento Estratégico ministerial" },
      { name: "Filosofia Bíblica do Ministério" },
      { name: "Eclesiologia missional" },
      { name: "Tópicos de Teologia Reformada" },
      { name: "Princípios Estratégicos para a plantação e revitalização de Igrejas" },
      { name: "Excelência da Pregação no contexto contemporâneo" },
      { name: "Parâmetros de uma igreja saudável" },
      { name: "Teologia bíblica da missão" },
      { name: "Projeto de pesquisa para artigo científico" },
    ],
    isPlaceholder: true,
    enrollUrl: "#",
  },
  {
    slug: "novo-testamento",
    title: "Pós-Graduação em Estudos do Novo Testamento",
    tagline:
      "Aprofundamento exegético e teológico do Novo Testamento, à luz da tradição reformada.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Descrição oficial a confirmar com o Núcleo de Pós-graduação.)",
    audience: "A confirmar com o Núcleo de Pós-graduação.",
    format: "100% online · Ao vivo",
    duration: "A definir",
    disciplines: "9 disciplinas",
    curriculum: [
      { name: "Hermenêutica" },
      { name: "Panorama teológico do Antigo Testamento" },
      { name: "História, Cultura e Sociedade do Novo Testamento" },
      { name: "Tópicos de Teologia Reformada" },
      { name: "Panorama exegético dos Sinóticos e de Atos" },
      { name: "Panorama exegético das cartas paulinas" },
      { name: "Panorama exegético da literatura joanina e das cartas gerais" },
      { name: "Temas teológicos do Novo Testamento" },
      { name: "Projeto de pesquisa para artigo científico" },
    ],
    isPlaceholder: true,
    enrollUrl: "#",
  },
  {
    slug: "cosmovisao-reformada",
    title: "Pós-Graduação em Cosmovisão Reformada",
    tagline:
      "O calvinismo aplicado à cultura, à política, à economia e à vida social.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Descrição oficial a confirmar com o Núcleo de Pós-graduação.)",
    audience: "A confirmar com o Núcleo de Pós-graduação.",
    format: "100% online · Ao vivo",
    duration: "A definir",
    disciplines: "9 disciplinas",
    curriculum: [
      { name: "História do movimento reformado" },
      { name: "Calvinismo e Ação social" },
      { name: "Calvinismo e Cultura" },
      { name: "Tópicos de Teologia Reformada" },
      { name: "História do Conceito de Cosmovisão" },
      { name: "Símbolos de fé reformados" },
      { name: "Calvinismo e Política" },
      { name: "Calvinismo e Economia" },
      { name: "Projeto de pesquisa para artigo científico" },
    ],
    isPlaceholder: true,
    enrollUrl: "#",
  },
  {
    slug: "gestao-ministerial",
    title: "Pós-Graduação em Gestão Ministerial",
    tagline:
      "Liderança, gestão e estratégia a serviço do ministério, com professores convidados.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Descrição oficial a confirmar com o Núcleo de Pós-graduação.)",
    audience: "A confirmar com o Núcleo de Pós-graduação.",
    format: "100% online · Ao vivo",
    duration: "A definir",
    disciplines: "9 disciplinas",
    curriculum: [
      { name: "Fundamentos Bíblico-Teológicos", professor: "Rev. Jeferson Alvarenga" },
      { name: "Autoliderança", professor: "Rev. Jeferson Alvarenga" },
      { name: "Liderança Ministerial", professor: "Rev. Robinson Granjeiro" },
      { name: "Gerenciamento de projetos", professor: "Prof. Cláudio Larieira" },
      { name: "Gestão Ministerial", professor: "Rev. Paulo César Diniz de Araújo" },
      { name: "Tópicos de Teologia Reformada", professor: "Rev. Pedro Dulci" },
      { name: "Comunicação e Marketing", professor: "Rev. André Monteiro" },
      { name: "Gestão de Estratégia", professor: "Rev. Paulo César Diniz de Araújo" },
      { name: "Formulação do Projeto de Pesquisa", professor: "Rev. Júnio Cesar" },
    ],
    isPlaceholder: true,
    enrollUrl: "#",
  },
];

export function getPosCourse(slug: string) {
  return posCourses.find((course) => course.slug === slug);
}
