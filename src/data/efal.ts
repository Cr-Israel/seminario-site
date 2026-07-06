export type EfalCourse = {
  slug: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  format: string;
  duration: string;
  disciplines: string;
  isNew: boolean;
  /**
   * Link de inscrição. Enquanto o formulário/fluxo de matrícula não está
   * pronto, aponta para "#" — trocar pelo link real (formulário, WhatsApp
   * da secretaria, ou sistema de matrícula) assim que definido.
   */
  enrollUrl: string;
};

export const efalCourses: EfalCourse[] = [
  {
    slug: "cit",
    code: "CIT",
    title: "Curso Introdutório de Teologia",
    tagline: "O primeiro contato com a teologia reformada",
    description:
      "Oferece uma formação sólida em Teologia Reformada, com ênfase na prática, e visa equipar líderes para desempenharem suas funções com excelência. É o primeiro contato do aluno com os conhecimentos produzidos e discutidos no ambiente acadêmico do Seminário — vai além da Escola Dominical local e é o degrau anterior ao Curso Livre de Bacharel em Teologia.",
    audience:
      "Líderes já envolvidos nas igrejas e cristãos em geral interessados em serem capacitados no exercício de seus dons e ministérios.",
    format: "100% online, aulas ao vivo (remoto)",
    duration: "Até 6 meses",
    disciplines: "8 disciplinas",
    isNew: false,
    enrollUrl: "#",
  },
  {
    slug: "cal",
    code: "CAL",
    title: "Curso de Aperfeiçoamento de Líderes",
    tagline: "Fundamentos do exercício ministerial aplicados à prática",
    description:
      "Tem o objetivo de fornecer formação básica para diferentes áreas de atuação ministerial na igreja, apresentando os fundamentos do exercício ministerial aplicados à prática. Inclui disciplinas focadas na prática ministerial, capacitando para o exercício da liderança em diversas áreas da igreja.",
    audience:
      "Professores de Escola Dominical, presbíteros, diáconos, evangelistas, obreiros, diretorias de sociedades internas e outros líderes já envolvidos nas igrejas.",
    format: "100% online, aulas ao vivo (remoto)",
    duration: "Até 6 meses",
    disciplines: "8 disciplinas",
    isNew: false,
    enrollUrl: "#",
  },
  {
    slug: "cfo",
    code: "CFO",
    title: "Curso de Formação de Oficiais",
    tagline: "Capacitação para o exercício consciente do oficialato",
    description:
      "Aborda temas específicos da dinâmica ministerial dos oficiais da igreja. Seu objetivo é proporcionar capacitação para um exercício consciente e bem preparado do oficialato bíblico — o curso é composto pelo CIT somado a um programa específico voltado para presbíteros e diáconos.",
    audience:
      "Aspirantes ao oficialato e oficiais já ordenados (presbíteros e diáconos).",
    format: "100% online, aulas ao vivo (remoto)",
    duration: "Até 12 meses (CIT + programa específico)",
    disciplines: "16 disciplinas",
    isNew: false,
    enrollUrl: "#",
  },
  {
    slug: "cfp",
    code: "CFP",
    title: "Curso de Formação de Professores",
    tagline: "Prática docente à luz da Teologia Reformada",
    description:
      "Unido ao Curso Introdutório de Teologia, oferece uma formação específica para professores, com disciplinas teórico-metodológicas com base na Teologia Reformada. A formação visa promover a reflexão sobre os saberes e práticas docentes que atuam no ensino bíblico local.",
    audience:
      "Professores de Escola Dominical e líderes envolvidos no ensino bíblico nas igrejas locais.",
    format: "100% online, aulas ao vivo (remoto)",
    duration: "Até 12 meses (CIT + programa específico)",
    disciplines: "16 disciplinas",
    isNew: false,
    enrollUrl: "#",
  },
  {
    slug: "cfl",
    code: "CFL",
    title: "Curso de Formação em Libras",
    tagline: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    isNew: true,
    enrollUrl: "#",
  },
  {
    slug: "cfm",
    code: "CFM",
    title: "Curso de Formação em Música",
    tagline: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    isNew: true,
    enrollUrl: "#",
  },
  {
    slug: "cfc",
    code: "CFC",
    title: "Curso de Formação em Capelania",
    tagline: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    isNew: true,
    enrollUrl: "#",
  },
];

export function getEfalCourse(slug: string) {
  return efalCourses.find((course) => course.slug === slug);
}
