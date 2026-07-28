/**
 * Corpo docente do Curso Livre de Bacharelado em Teologia (STPS) — dados reais
 * da página oficial. `credential` resume a titulação; `role` marca funções
 * institucionais (direção, decanato, coordenação de departamento, capelania).
 *
 * Fotos: reaproveitadas de /public/images quando o docente já tem retrato no
 * acervo; os demais mostram as iniciais até a foto real chegar.
 * TODO(conteúdo): completar as fotos que faltam (marcadas sem `photo`) e
 * preencher a `bio` de cada docente (o modal já está pronto para exibi-la).
 */
export type Docente = {
  name: string;
  /**
   * Titulação/credencial resumida, uma linha. Opcional: docentes recém-entrados
   * no quadro ainda não têm currículo em mãos, e o card cai nas `disciplines`
   * em vez de exibir um "a confirmar".
   */
  credential?: string;
  /** Função institucional em destaque, quando houver. */
  role?: string;
  /** Foto em /public; sem ela o card usa as iniciais. */
  photo?: string;
  /**
   * Biografia completa, exibida no modal ao clicar no professor. Aceita vários
   * parágrafos separados por linha em branco (\n\n). Enquanto não houver, o
   * modal mostra a credencial e um aviso de "biografia em breve".
   */
  bio?: string;
  /**
   * Disciplinas que o docente ministra no Bacharelado, conforme o quadro de
   * horários de 2026 ("Horário 2026.pdf", Secretaria Acadêmica). Séries
   * numeradas aparecem agrupadas ("Grego 1 a 4") para o modal não virar uma
   * lista quilométrica. Precisa ser revisado a cada novo quadro de horários.
   */
  disciplines?: string[];
};

export const docentes: Docente[] = [
  {
    name: "Rev. Sergio Kitagawa",
    credential: "Doutor em História Social (UERJ)",
    role: "Diretor do Seminário",
    photo: "/images/rev-sergio-kitagawa.png",
    disciplines: ["Símbolos de Fé"],
  },
  {
    name: "Rev. João Batista",
    credential: "Decano do corpo docente",
    role: "Coordenador do Dep. de Teologia Pastoral",
    photo: "/images/rev-joao.jpg",
    disciplines: [
      "Metodologia da Pesquisa Científica",
      "Monografia 1 e 2",
      "Poimênica",
      "Aconselhamento 1 e 2",
      "Constituição e Ordem 1 e 2",
      "Prática de Pregação 5",
    ],
  },
  {
    name: "Rev. Junio Cesar",
    credential: "Doutor em História Política (UERJ, 2021)",
    role: "Coordenador do Dep. de Teologia Histórica",
    photo: "/images/rev-junio-cesar.jpeg",
    disciplines: [
      "Educação Cristã",
      "História da IPB",
      "Prática de Ensino",
      "Prática de Pregação 2 e 4",
    ],
  },
  {
    name: "Rev. Carlos Lima",
    credential: "Mestre em Teologia Sistemática (CPAJ)",
    role: "Coordenador do Dep. de Teologia Sistemática",
    disciplines: [
      "Teologia do Culto 1 e 2",
      "Cosmovisão Cristã",
      "Gestão Eclesiástica",
    ],
  },
  {
    name: "Rev. Adelino da Silva",
    credential: "Bacharel em Teologia (Seminário Presbiteriano do Sul)",
    role: "Capelão do STPS",
    photo: "/images/rev-adelino.jpg",
    disciplines: ["Estágio 1 a 4", "Capelania"],
  },
  {
    name: "Profª. Alessandra Viegas",
    credential:
      "Doutora em História Comparada (UFRJ, 2018) e em Teologia (PUC-Rio, 2017)",
    photo: "/images/prof-alessandra-viegas.jpeg",
    disciplines: ["Grego 1 a 4", "Hebraico 1 a 4"],
  },
  {
    // Professora de Música (1º ano, módulo 5) — assumiu a disciplina antes
    // ministrada pelo Prof. Miguel Torres.
    // TODO(conteúdo): confirmar se o mestrado já foi defendido (a ficha
    // cadastral registrava "defesa em setembro") e trocar para "Mestra em
    // Educação Musical"; falta também a foto e a bio.
    name: "Profª. Rafaela Theodoro",
    credential: "Mestranda em Educação Musical",
    disciplines: ["Música"],
  },
  {
    name: "Profª. Simone Bondarzuck",
    credential: "Doutora em Letras Clássicas (2017)",
  },
  {
    name: "Profª. Simone Xavier",
    credential: "Mestra em Educação (UFRJ)",
    role: "Coordenadora do Dep. de Cultura Geral",
    photo: "/images/prof-simone-xavier.png",
    disciplines: ["Português 1 a 4"],
  },
  {
    name: "Profª. Vânia Dutra",
    credential: "Pós-Doutorado em Ciências Humanas (FIOCRUZ, 2021)",
    disciplines: ["Ação Social"],
  },
  {
    name: "Profª. Tânia Brizon",
    credential: "Pós-graduada em Docência no Ensino Superior (Mackenzie, 2022)",
  },
  {
    name: "Profª. Thais da Silva",
    credential: "Pós-graduada em Docência no Ensino Superior",
    disciplines: ["Inglês Instrumental"],
  },
  {
    name: "Rev. André Monteiro",
    credential:
      "Doutorando em Ministério (Servos de Cristo); treinador City to City Brasil",
    photo: "/images/rev-andre-monteiro.jpeg",
    disciplines: ["Plantação e Revitalização de Igrejas (remoto)"],
  },
  {
    name: "Rev. Eduardo Machado",
    credential: "Mestre em Filosofia (UFF)",
    photo: "/images/rev-eduardo.jpg",
    disciplines: [
      "Introdução à Filosofia",
      "História da Filosofia 1 e 2",
      "Sociologia Geral",
      "Antropologia Geral",
      "Antropologia Missionária",
    ],
  },
  {
    name: "Rev. Fabio Quintanilha",
    credential: "Mestre em Missiologia; Bacharel em Teologia (STPS)",
    disciplines: [
      "Teologia de Missões 1 e 2",
      "Missões Urbanas",
      "Evangelização",
      "Plantação e Revitalização de Igrejas",
      "Prática de Pregação 3",
    ],
  },
  {
    name: "Rev. Ivo Mozart",
    credential: "Mestre em Estudos do Novo Testamento; pastor da IP do Méier",
    photo: "/images/rev-ivo-cesar.jpeg",
    disciplines: [
      "História da Igreja 1",
      "História da Igreja Brasileira",
      "Geografia e Arqueologia Bíblica",
    ],
  },
  {
    name: "Rev. Jayro Alves",
    credential: "Doutor e Mestre em Teologia (PUC-Rio)",
    disciplines: [
      "Hermenêutica 1 e 2",
      "História do Pensamento Cristão 1 e 2",
      "Homilética",
      "Teologia Sistemática 3",
      "Religião e Sociedade Pós-Moderna",
    ],
  },
  {
    // "Rev. Jeferson Carvalho Alvarenga" no CV e na Pós; o quadro de horários o
    // registra como "Rev. Jefferson Carvalho".
    name: "Rev. Jeferson Alvarenga",
    credential: "Doutor em Engenharia Civil com ênfase em Gestão (UFF, 2019)",
    photo: "/images/rev-jefferson-alvarenga.jpeg",
    bio: "Professor do módulo de Planejamento Estratégico do Seminário Simonton desde 2018 e, desde 2023, da Pós-graduação em Plantação e Revitalização de Igrejas, na área de Planejamento Estratégico Ministerial. Doutor (2019) e Mestre (2015) em Engenharia Civil com ênfase em Gestão, Produção e Meio Ambiente pela UFF, é Profissional de Gerenciamento de Projetos (PMP) certificado pelo PMI, especialista em Gestão de Pessoas e Projetos Sociais (UNIFEI), Bacharel em Administração (UNIP) e Bacharel em Teologia pela Universidade Presbiteriana Mackenzie e pelo Seminário Presbiteriano do Sul.\n\nPastor plantador do projeto Jardim Aquarius, em São José dos Campos (SP), enviado pela Igreja Presbiteriana de Alphaville. Dirige o programa de Master of Arts in Religion do Puritan Reformed Theological Seminary em parceria com o Seminário Martin Bucer, onde também responde pelas parcerias internacionais. Formado pelo Haggai International (Havaí, 2019) e pela incubadora City to City, é autor de \"Juntos na Jornada com Jesus\" (Heziom, 2025) e de artigos acadêmicos nas áreas de liderança, gestão ministerial e gerenciamento de projetos.",
    disciplines: ["Planejamento Estratégico"],
  },
  {
    // Rev. Jérson Costa Ferreira Neto. TODO(conteúdo): credencial e bio.
    name: "Rev. Jérson Neto",
    photo: "/images/rev-jerson.jpg",
    disciplines: ["Teologia Bíblica do NT", "Exegese do NT 1 a 3"],
  },
  {
    name: "Rev. Joel Theodoro",
    credential:
      "Doutor em Letras Clássicas (UFRJ) e Doutor em Ministério (RTS/CPAJ)",
    photo: "/images/rev-joel-theodoro.jpeg",
    bio: "Doutor em Letras Clássicas pela UFRJ, Doutor em Ministério pelo RTS/CPAJ e Mestre em Ciência da Literatura pela UFRJ, com bacharelados em Letras, Filosofia e Teologia. Atua como docente em seminários teológicos do Brasil e do exterior, além de lecionar em cursos superiores não teológicos. No Seminário Simonton, é professor de Teologia Sistemática e Símbolos de Fé Reformados. Possui formação em Liderança Avançada pelo Haggai Institute (Cingapura) e integra o ministério Charles Simeon Trust no Brasil.\n\nPastor desde 1996, pastoreia a Igreja Presbiteriana de São Cristóvão (Rio de Janeiro, RJ). Casado desde 1992 com Roberta, é pai de Gabriel e Rafaela.",
    disciplines: ["Teologia Sistemática 2 e 7"],
  },
  {
    name: "Rev. Jorge Patrocínio",
    credential: "Doutor em Estudos Reformados (Seminário Concórdia, EUA)",
    photo: "/images/rev-jorge-patrocinio.jpeg",
    bio: "Natural de São Cristóvão (RJ), é Bacharel em Teologia (Belo Horizonte, 1995), com Mestrado e Doutorado (Ph.D.) em História Teológica pelo Seminário Concórdia, em Saint Louis (EUA), onde residiu por oito anos. Possui pós-graduação em Gestão de Pessoas (FAEL), especialização pela Case Western Reserve University e graduação em Direito pela Faculdade Mackenzie-Rio, com registro ativo na OAB-RJ. Professor e escritor, é fluente em inglês, com ampla experiência internacional — atua ainda hoje como representante do Seminário Calvin no estado americano do Michigan.",
    disciplines: ["História da Igreja 2, 3 e 4", "Credos e Confissões"],
  },
  {
    name: "Rev. José Mirabeau",
    credential:
      "Mestre em Teologia Bíblica/AT (PUC-Rio); pastor da IP de Copacabana",
    role: "Coordenador do Dep. de Teologia Exegética",
    photo: "/images/rev-jose-mirabeau.jpeg",
    disciplines: [
      "Introdução ao AT",
      "Teologia Bíblica do AT",
      "Exegese do AT 1 a 3",
      "Metodologia da Pesquisa Exegética",
    ],
  },
  {
    name: "Rev. Leonard Neumann",
    credential: "Mestrando em Estudos Bíblico-Hermenêuticos (CPAJ)",
    disciplines: ["Teologia Sistemática 1 e 6", "Ética Cristã"],
  },
  {
    // TODO(conteúdo): foto, credencial e bio.
    name: "Rev. Leonardo Bessa",
    disciplines: ["Missões Transculturais"],
  },
  {
    // TODO(conteúdo): foto, credencial e bio.
    name: "Rev. Marcelo Uzeda",
    disciplines: ["Introdução ao NT"],
  },
  {
    // Rev. Nilson dos Santos Carneiro. TODO(conteúdo): credencial e bio.
    name: "Rev. Nilson Santos",
    photo: "/images/rev-nilson-carneiro.jpeg",
    disciplines: [
      "Dons e Ministérios",
      "Denominações e Seitas",
      "Teologia Sistemática 4 e 5",
      "Prática de Pregação 1",
    ],
  },
  {
    name: "Rev. Orlando Ferreira",
    credential: "Pós-graduado em Docência do Ensino Superior (Mackenzie)",
    disciplines: [
      "Vocação e Espiritualidade",
      "Psicologia Geral",
      "Psicologia da Religião",
      "Psicopatologia",
    ],
  },
];
