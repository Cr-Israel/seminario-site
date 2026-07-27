import {
  Award,
  BookMarked,
  CalendarDays,
  FileText,
  HandHelping,
  HeartHandshake,
  Landmark,
  Laptop,
  Layers,
  PencilRuler,
  ScrollText,
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

/** Conteúdo Programático Curricular completo da JET (2ª ed., 2018), no Drive. */
export const CONTEUDO_PROGRAMATICO_URL =
  "https://drive.google.com/file/d/1JarlB5DTPIopa5bOkj8Dkmhfz5jcz10S/view?usp=sharing";

export type Coordenador = {
  nome: string;
  credencial: string;
  /** Retrato em /public; sem ela o card mostra as iniciais. */
  foto?: string;
};

export type Departamento = {
  /** Slug estável para chaves e âncoras. */
  slug: string;
  nome: string;
  icon: LucideIcon;
  /** Uma frase: o que este departamento estuda. */
  resumo: string;
  coordenador: Coordenador;
  /** Disciplinas do núcleo comum, na ordem do currículo da JET. */
  obrigatorias: string[];
  /** Disciplinas eletivas (códigos 51+ no currículo da JET). */
  optativas: string[];
};

/**
 * Os cinco departamentos em que se dividem as disciplinas do Bacharelado. As
 * disciplinas reproduzem o "Conteúdo Programático Curricular dos Seminários
 * Teológicos da IPB" (JET, 2ª ed. 2018): obrigatórias = núcleo comum;
 * optativas = eletivas (códigos 51+). Coordenadores confirmados pela direção.
 */
export const departamentos: Departamento[] = [
  {
    slug: "exegetica",
    nome: "Teologia Exegética",
    icon: ScrollText,
    resumo:
      "O estudo das Escrituras em suas línguas originais — hebraico e grego, hermenêutica e exegese do Antigo e do Novo Testamento. É o alicerce sobre o qual toda a teologia se levanta.",
    coordenador: {
      nome: "Rev. José Mirabeau",
      credencial: "Mestre em Teologia Bíblica/AT (PUC-Rio)",
      foto: "/images/rev-jose-mirabeau.jpeg",
    },
    obrigatorias: [
      "Introdução ao Antigo Testamento",
      "Introdução ao Novo Testamento",
      "Geografia e Arqueologia Bíblica",
      "Hebraico 1",
      "Hebraico 2",
      "Hebraico 3",
      "Hebraico 4",
      "Grego 1",
      "Grego 2",
      "Grego 3",
      "Grego 4",
      "Hermenêutica 1",
      "Hermenêutica 2",
      "Teologia Bíblica do Antigo Testamento",
      "Teologia Bíblica do Novo Testamento",
      "Metodologia da Pesquisa Exegética",
      "Exegese do Antigo Testamento 1",
      "Exegese do Antigo Testamento 2",
      "Exegese do Antigo Testamento 3",
      "Exegese do Novo Testamento 1",
      "Exegese do Novo Testamento 2",
      "Exegese do Novo Testamento 3",
    ],
    optativas: [
      "Cultura Semítica e Helênica",
      "Manuscritologia",
      "Exegese do Antigo Testamento 4",
      "Exegese do Novo Testamento 4",
      "Estudo da Teologia Apocalíptica",
    ],
  },
  {
    slug: "historica",
    nome: "Teologia Histórica",
    icon: Landmark,
    resumo:
      "A caminhada da Igreja ao longo dos séculos: dos pais da Igreja à Reforma, do pensamento cristão à formação da Igreja Presbiteriana do Brasil.",
    coordenador: {
      nome: "Rev. Junio Cesar",
      credencial: "Doutor em História Política (UERJ, 2021)",
      foto: "/images/rev-junio-cesar.jpeg",
    },
    obrigatorias: [
      "História da Igreja 1",
      "História da Igreja 2",
      "História da Igreja 3",
      "História da Igreja 4",
      "História da Igreja Brasileira",
      "História da IPB",
      "História do Pensamento Cristão 1",
      "História do Pensamento Cristão 2",
    ],
    optativas: [
      "História Prática das Missões",
      "Desafios Missionários Contemporâneos",
    ],
  },
  {
    slug: "sistematica",
    nome: "Teologia Sistemática",
    icon: Layers,
    resumo:
      "A articulação ordenada da doutrina cristã — de Deus à salvação, da Igreja às últimas coisas — à luz da fé reformada e dos Símbolos de Fé da IPB.",
    coordenador: {
      nome: "Rev. Carlos Lima",
      credencial: "Mestre em Teologia Sistemática (CPAJ)",
    },
    obrigatorias: [
      "Teologia Sistemática 1 — Prolegômenos, Bibliologia e Teontologia",
      "Teologia Sistemática 2 — Antropologia",
      "Teologia Sistemática 3 — Cristologia",
      "Teologia Sistemática 4 — Soteriologia",
      "Teologia Sistemática 5 — Pneumatologia",
      "Teologia Sistemática 6 — Eclesiologia",
      "Teologia Sistemática 7 — Escatologia",
      "Teologia do Culto 1",
      "Teologia do Culto 2",
      "Ética Cristã",
      "Símbolos de Fé da IPB",
      "Cosmovisão Calvinista",
    ],
    optativas: [
      "Apologética",
      "Catolicismo Popular e Culto Afro-Brasileiro",
      "Credos e Confissões",
      "Religião e Sociedade Pós-Moderna",
      "Apologética Avançada",
    ],
  },
  {
    slug: "pastoral",
    nome: "Teologia Pastoral",
    icon: HeartHandshake,
    resumo:
      "A formação para o cuidado do rebanho: pregação, aconselhamento, liderança, missões e o estágio supervisionado que leva o seminarista à prática do ministério.",
    coordenador: {
      nome: "Rev. João Batista",
      credencial: "Decano do corpo docente",
      foto: "/images/rev-joao.jpg",
    },
    obrigatorias: [
      "Vocação e Espiritualidade",
      "Poimênica",
      "Aconselhamento 1",
      "Aconselhamento 2",
      "Liderança",
      "Gestão Eclesiástica",
      "Teologia de Missões 1",
      "Teologia de Missões 2",
      "Evangelização",
      "Educação Cristã",
      "Prática de Ensino",
      "Constituição e Ordem 1",
      "Constituição e Ordem 2",
      "Homilética",
      "Prática de Pregação 1 (Narrativas)",
      "Prática de Pregação 2 (Evangelhos)",
      "Prática de Pregação 3 (Epístolas)",
      "Prática de Pregação 4 (Poéticos)",
      "Prática de Pregação 5 (Proféticos)",
      "Plantação e Revitalização de Igrejas",
      "Estágio 1",
      "Estágio 2",
      "Estágio 3",
      "Estágio 4",
      "Missões Transculturais",
      "Missões Urbanas",
      "Antropologia Missionária",
    ],
    optativas: [
      "Acampamentos e Retiros Espirituais",
      "Ação Social",
      "Administração de Conflitos na Igreja",
      "Capelania",
      "Comunicação Social",
      "Denominações e Seitas",
      "Dons e Ministérios",
      "Técnicas de Comunicação",
      "Discipulamento",
      "Estratégia Missionária",
    ],
  },
  {
    slug: "cultura-geral",
    nome: "Cultura Geral",
    icon: PencilRuler,
    resumo:
      "As ferramentas para pensar e comunicar com excelência: língua, filosofia, história das ideias, metodologia da pesquisa e a monografia de conclusão.",
    coordenador: {
      nome: "Profª. Simone Xavier",
      credencial: "Mestra em Educação (UFRJ)",
      foto: "/images/prof-simone-xavier.png",
    },
    obrigatorias: [
      "Português 1",
      "Português 2",
      "Português 3",
      "Português 4",
      "Inglês Instrumental",
      "Metodologia da Pesquisa Científica",
      "Psicologia Geral",
      "Introdução à Filosofia",
      "História da Filosofia 1",
      "Sociologia Geral",
      "Antropologia Geral e da Religião",
      "Monografia 1",
      "Monografia 2",
    ],
    optativas: [
      "Andragogia",
      "Didática",
      "Elaboração e Sustentabilidade de Projetos",
      "Espanhol",
      "Gestão do Terceiro Setor",
      "Inglês 2",
      "Latim",
      "Lógica",
      "Música",
      "Oratória",
      "Planejamento Estratégico",
      "Psicologia da Religião",
      "Realidades Regionais",
      "Psicopatologia",
      "História da Filosofia 2",
      "Introdução à Linguística Aplicada",
      "Comunicação Transcultural",
    ],
  },
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
