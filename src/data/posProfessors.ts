/**
 * Professores da Pós-graduação do Seminário Simonton.
 * Bios redigidas a partir dos CVs e textos oficiais fornecidos pelo
 * marketing (jul/2026). Fotos em public/images/professores-pos/.
 */
export type PosProfessor = {
  slug: string;
  name: string;
  /** Titulação/credencial principal, exibida abaixo do nome. */
  credential: string;
  bio: string;
  /** Foto oficial; ausente cai no avatar de iniciais no PosFaculty. */
  photo?: string;
  /** Disciplinas da Pós que leciona. TODO: confirmar as que faltam. */
  disciplines?: string[];
};

export const posProfessors: PosProfessor[] = [
  {
    slug: "davi-luna",
    name: "Rev. Davi Luna da Silva",
    credential:
      "Mestre em Educação, Arte e História da Cultura (Mackenzie)",
    bio: "Pastor presbiteriano, plantador e pastor titular da Igreja Presbiteriana Doulos, em São Luís (MA), a partir da qual desenvolveu cinco projetos de plantação de igrejas na cidade. É Secretário Executivo do Plano Missionário Cooperativo (PMC) da IPB, atuando como gestor de projetos, treinador de novos plantadores e desenvolvedor de iniciativas de revitalização de igrejas. Bacharel em Teologia pelo Instituto Superior de Teologia Reformada (INSTER), licenciado em História pela Faculdade Santa Fé, Mestre em Educação, Arte e História da Cultura pela Universidade Presbiteriana Mackenzie e doutorando na mesma área e instituição.",
    photo: "/images/professores-pos/davi-luna.jpg",
  },
  {
    slug: "agemir-dias",
    name: "Rev. Agemir de Carvalho Dias",
    credential: "Doutor em História (UFPR)",
    bio: "Ministro da Igreja Presbiteriana do Brasil desde 1987 e professor do Seminário Presbiteriano do Sul — extensão Curitiba. Doutor em História pela Universidade Federal do Paraná, Mestre em Educação, Arte e História da Cultura pela Universidade Presbiteriana Mackenzie e Mestre em Planejamento e Governança Pública pela UTFPR, com graduações em Teologia e em Ciências Sociais (UFPR). Pesquisador do protestantismo brasileiro e da sociologia da religião, é autor de livros como Sociologia da Religião (Paulinas), O Movimento Ecumênico no Brasil, Calvinismo e Ação Social e A Fé no Cotidiano, além de dezenas de artigos acadêmicos.",
    photo: "/images/professores-pos/agemir-dias.jpg",
  },
  {
    slug: "vinicius-jordao",
    name: "Rev. Vinícius Carvalho Jordão",
    credential:
      "Mestre em Divindade — Teologia Sistemática (CPAJ) e Mestre em Missionalidade (Escola Antioquia)",
    bio: "Pastor da Mosaico Igreja Presbiteriana, em Anápolis (GO), e Diretor de Treinamento da City to City Brasil. Dedica-se à formação de líderes, ao discipulado e ao fortalecimento de iniciativas de plantação e revitalização de igrejas, com ênfase na pregação bíblica, no cuidado pastoral e no desenvolvimento de pessoas e comunidades à luz do evangelho. Graduado em Direito, com pós-graduação em Direito de Família e formação teológica, é Mestre em Missionalidade pela Escola Antioquia e Mestre em Divindade, com ênfase em Teologia Sistemática, pelo Centro Presbiteriano de Pós-Graduação Andrew Jumper (CPAJ). Atualmente é doutorando em Missionalidade pelo Missional Trainer Center (MTC) e em Divindade pelo Seminário Servos de Cristo.",
    photo: "/images/professores-pos/vinicius-jordao.jpg",
  },
  {
    slug: "jeferson-alvarenga",
    name: "Rev. Jeferson Carvalho Alvarenga",
    credential: "Doutor em Engenharia Civil — Gestão (UFF) · PMP",
    bio: "Professor da Pós-graduação em Plantação e Revitalização de Igrejas do Seminário Simonton na área de Planejamento Estratégico Ministerial, onde leciona desde 2018. Doutor e Mestre em Engenharia Civil com ênfase em Gestão pela Universidade Federal Fluminense, Profissional de Gerenciamento de Projetos (PMP) certificado pelo PMI, especialista em Gestão de Pessoas (UNIFEI), Bacharel em Administração (UNIP) e Bacharel em Teologia pela Universidade Presbiteriana Mackenzie e pelo Seminário Presbiteriano do Sul. Pastor plantador do projeto Jardim Aquarius, em São José dos Campos (SP), atua também na gestão de parcerias internacionais do Seminário Martin Bucer e é autor de livro e artigos acadêmicos nas áreas de liderança, gestão ministerial e gerenciamento de projetos.",
    disciplines: ["Planejamento Estratégico Ministerial"],
  },
  {
    slug: "jorge-patrocinio",
    name: "Rev. Jorge Patrocínio",
    credential: "Ph.D. em História Teológica (Seminário Concórdia, EUA)",
    bio: "Natural de São Cristóvão (RJ), é Bacharel em Teologia (Belo Horizonte, 1995), com Mestrado e Doutorado (Ph.D.) em História Teológica pelo Seminário Concórdia, em Saint Louis (EUA), onde residiu por oito anos. Possui pós-graduação em Gestão de Pessoas (FAEL), especialização pela Case Western Reserve University e graduação em Direito pela Faculdade Mackenzie-Rio, com registro ativo na OAB-RJ. Professor e escritor, é fluente em inglês, com ampla experiência internacional — atua ainda hoje como representante do Seminário Calvin no estado americano do Michigan.",
    photo: "/images/professores-pos/jorge-patrocinio.jpg",
  },
  {
    slug: "claudio-goncalves",
    name: "Rev. Cláudio César Gonçalves",
    credential: "Mestre em Ciências da Religião (Mackenzie)",
    bio: "Pastor presbiteriano desde 2002, plantou e pastoreou a Igreja Presbiteriana de Vila Natal, em São Paulo (2002–2015). Missionário enviado pela Agência Presbiteriana de Missões Transculturais (APMT-IPB) para a Nova Zelândia e o Nepal desde 2017, é atualmente Coordenador da Área Oceania pela mesma agência. Mestre em Ciências da Religião pela Universidade Presbiteriana Mackenzie, Bacharel em Teologia pelo Seminário JMC e pela Mackenzie, e Bacharel em Economia pela UFMT. Autor do livro O Uso Social da Riqueza em João Calvino (Editora SEBI), leciona Cosmovisão Cristã em Economia na Pós-graduação do Simonton e Grego e Missões no Seminário Presbiteriano Sempre de Jesus.",
    photo: "/images/professores-pos/claudio-goncalves.jpg",
    disciplines: ["Cosmovisão Cristã em Economia"],
  },
  {
    slug: "joel-theodoro",
    name: "Rev. Joel Theodoro",
    credential: "Doutor em Letras Clássicas (UFRJ) e Doutor em Ministério (RTS/CPAJ)",
    bio: "Doutor em Letras Clássicas pela UFRJ, Doutor em Ministério pelo RTS/CPAJ e Mestre em Ciência da Literatura pela UFRJ, com bacharelados em Letras, Filosofia e Teologia. Atua como docente em seminários teológicos do Brasil e do exterior, além de lecionar em cursos superiores não teológicos. No Seminário Simonton, é professor de Teologia Sistemática e Símbolos de Fé Reformados. Possui formação em Liderança Avançada pelo Haggai Institute (Cingapura) e integra o ministério Charles Simeon Trust no Brasil. Pastor desde 1996, pastoreia a Igreja Presbiteriana de São Cristóvão (Rio de Janeiro, RJ).",
    photo: "/images/professores-pos/joel-theodoro.jpg",
    disciplines: ["Teologia Sistemática", "Símbolos de Fé Reformados"],
  },
  {
    slug: "renato-prates",
    name: "Rev. Renato Prates",
    // TODO: substituir pela bio real assim que o CV for convertido (o .docx
    // recebido não pôde ser lido; aguardando PDF ou texto).
    credential: "A confirmar",
    bio: "Biografia completa em breve.",
    photo: "/images/professores-pos/renato-prates.jpg",
  },
];
