import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Church,
  Clock,
  Compass,
  GraduationCap,
  Hand,
  HeartHandshake,
  Landmark,
  Layers,
  Monitor,
  ScrollText,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import { getEfalCourse, type EfalCourse } from "./efal";

/**
 * Conteúdo de conversão das landings de curso da EFAL — a camada que a ficha
 * técnica de efal.ts não cobre: manchete, quebra de objeções, perfis de
 * público, FAQ e os textos dos CTAs.
 *
 * Uma landing por curso, todas com a mesma anatomia (a do CIT, que serviu de
 * molde). Seções cujo conteúdo ainda não existe ficam ausentes e simplesmente
 * não são renderizadas — é o caso do CFM, cuja grade a coordenação ainda
 * está fechando.
 */

/**
 * Vídeo de apresentação exibido no hero de TODAS as páginas de curso da EFAL.
 * É o mesmo vídeo institucional gravado para o CIT; um curso pode trocá-lo
 * pelo seu, declarando `hero.videoId`.
 */
export const EFAL_VIDEO_ID = "aGtlMolMcnc";

export const EFAL_VIDEO_TITLE = "Vídeo de apresentação da EFAL";

/** Card com ícone das seções de objeções e de público-alvo. */
export type LandingCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type LandingFaqItem = { question: string; answer: string };

export type EfalLanding = {
  hero: {
    title: string;
    description: string;
    /** ID do vídeo no YouTube. Ausente = vídeo institucional da EFAL. */
    videoId?: string;
    videoTitle?: string;
  };
  /** Quebra de objeções. Ausente enquanto o curso não tem conteúdo aprovado. */
  objections?: {
    eyebrow: string;
    title: string;
    items: LandingCard[];
  };
  /** Faixa de CTA intermediária, logo após as objeções. */
  ctaBand: { title: string; description: string };
  /** Apresentação do conteúdo. `about` sobrepõe a descrição oficial de efal.ts. */
  curriculum?: {
    eyebrow: string;
    title: string;
    /** Linha curta de fatos (ex.: "8 disciplinas · 32 aulas"). */
    summary: string;
    about?: string;
  };
  /** Texto de apoio da seção de instrutores (a lista vem das grades). */
  instructors?: { description: string };
  audience?: {
    eyebrow: string;
    title: string;
    intro: string;
    profiles: LandingCard[];
  };
  ctaInvite?: { title: string; description: string };
  faq: LandingFaqItem[];
  enroll: { title: string; description: string };
  /**
   * Política de descontos publicada pela secretaria (src/data/citDescontos.ts).
   * Só o CIT tem a tabela divulgada; os demais cursos não exibem o link até
   * que a secretaria confirme os valores de cada um.
   */
  descontos?: boolean;
};

/* ------------------------------------------------------------------ */
/* Perguntas recorrentes, montadas com os dados reais de cada curso.    */
/* Cada landing escolhe as suas e acrescenta as específicas.            */
/* ------------------------------------------------------------------ */

const faqAulas = (): LandingFaqItem => ({
  question: "Como funcionam as aulas?",
  answer:
    "São 100% online e ao vivo (remoto), em horário marcado, com o professor acompanhando a turma. As aulas também ficam gravadas: se você não puder assistir no dia, revê depois — quantas vezes quiser.",
});

const faqDuracao = (course: EfalCourse): LandingFaqItem => ({
  question: "Qual é a duração do curso?",
  answer: `${course.duration}, distribuídos nas ${course.disciplines}.`,
});

const faqCertificado = (): LandingFaqItem => ({
  question: "O curso tem certificado?",
  answer:
    "Sim. Ao concluir, o aluno recebe Certificado de Conclusão emitido pelo Seminário e certificado pela Junta Regional de Educação Teológica (JURET) da Igreja Presbiteriana do Brasil — na versão digital e na via impressa, entregue no dia da formatura.",
});

const faqMec = (course: EfalCourse): LandingFaqItem => ({
  question: "É reconhecido pelo MEC?",
  answer: `O ${course.code} é um curso livre, sem submissão à avaliação do MEC; seu reconhecimento é intracorpus, no âmbito da IPB.`,
});

const faqAvaliacao = (): LandingFaqItem => ({
  question: "O curso tem avaliação?",
  answer:
    "Sim, há avaliações ao longo das disciplinas, e a frequência nas aulas também conta para a conclusão.",
});

const faqMatricula = (): LandingFaqItem => ({
  question: "Quanto custa e como faço a matrícula?",
  answer:
    "O valor, com parcelas e total, está logo abaixo — nesta mesma página. Para se matricular, a secretaria orienta o passo a passo e solicita os documentos necessários; o pagamento é feito por boleto, enviado para o seu e-mail.",
});

const faqSemPreRequisito = (course: EfalCourse): LandingFaqItem => ({
  question: `Preciso ter formação teológica para fazer o ${course.code}?`,
  answer:
    "Não. Os cursos da EFAL têm inscrição direta, sem vestibular e sem exigência de escolaridade mínima ou de formação teológica anterior. Você também não precisa ser membro de uma igreja da IPB.",
});

/** Curso cujo calendário ainda não foi fechado pela coordenação. */
const faqProximaTurma = (course: EfalCourse): LandingFaqItem => ({
  question: "Quando começa a próxima turma?",
  answer: `O formato e as datas do ${course.code} estão sendo definidos pela coordenação da EFAL. Deixe seus dados na inscrição: a secretaria avisa você assim que a turma for aberta.`,
});

/** Atalho de leitura para os cursos abaixo. */
const cit = getEfalCourse("cit")!;
const cal = getEfalCourse("cal")!;
const cfo = getEfalCourse("cfo")!;
const cfp = getEfalCourse("cfp")!;
const cfl = getEfalCourse("cfl")!;
const cfm = getEfalCourse("cfm")!;
const cfc = getEfalCourse("cfc")!;

export const efalLandings: Record<string, EfalLanding> = {
  /* ------------------------------ CIT ------------------------------ */
  cit: {
    hero: {
      title: "Dê o seu primeiro passo na teologia reformada.",
      description:
        "Uma formação sólida, 100% online e ao vivo, para líderes e cristãos que querem ir além da Escola Dominical, o degrau anterior ao Curso Livre de Bacharel em Teologia.",
      videoTitle:
        "Vídeo de apresentação do Curso Introdutório de Teologia",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem quer começar",
      items: [
        {
          icon: GraduationCap,
          title: "Achei que teologia era só para pastores",
          text: "O CIT é o primeiro contato do aluno com o conhecimento produzido no ambiente acadêmico do Seminário. Vai além da Escola Dominical e não exige nenhuma formação teológica prévia, é feito para líderes já atuantes e para cristãos em geral que querem se aprofundar.",
        },
        {
          icon: Clock,
          title: "Não tenho tempo nem como me deslocar",
          text: "As aulas são 100% online e ao vivo, em horário marcado. Além disso, as aulas ficam gravadas, para que você possa assistir quantas vezes quiser. Você estuda de qualquer lugar do Brasil.",
        },
        {
          icon: Layers,
          title: "Será que é aprofundado o suficiente?",
          text: "São 8 disciplinas e 32 aulas, ministradas por reverendos, cobrindo Antigo e Novo Testamento, teologia reformada, história da Igreja, interpretação bíblica, aconselhamento cristão e evangelismo prático.",
        },
        {
          icon: ArrowUpRight,
          title: "E o que vem depois do curso?",
          text: "O CIT é o degrau anterior ao Curso Livre de Bacharel em Teologia. Ao concluir, você recebe certificado do Seminário e fica preparado para avançar na formação teológica.",
        },
      ],
    },
    ctaBand: {
      title: "Comece agora, sem sair de casa e sem pré-requisito.",
      description:
        "Aula ao vivo com os professores do Seminário e gravada, para você rever quando puder, quantas vezes quiser.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "8 disciplinas para uma base sólida",
      summary: "8 disciplinas · 32 aulas · professores reverendos",
    },
    instructors: {
      description:
        "Reverendos com experiência pastoral e docente conduzem cada disciplina do CIT, ao vivo.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "O CIT não exige formação teológica anterior, pede disposição para estudar as Escrituras com seriedade. Na prática, ele costuma servir a quatro perfis:",
      profiles: [
        {
          icon: Users,
          title: "Líderes de ministério",
          text: "Você já ensina na EBD, conduz um grupo pequeno ou serve na música e no trabalho com jovens e quer fazer isso com base, não só com boa vontade.",
        },
        {
          icon: BookOpen,
          title: "Quem já foi além da EBD",
          text: "As aulas da Escola Dominical deixaram de dar conta das suas perguntas, e você quer estudar num nível mais próximo do acadêmico.",
        },
        {
          icon: Compass,
          title: "Cristãos sem formação teológica",
          text: "Não exige nenhum estudo prévio. É para quem quer entender por que a fé reformada afirma o que afirma, e onde isso está nas Escrituras.",
        },
        {
          icon: GraduationCap,
          title: "Quem pensa no Bacharelado",
          text: "Antes de assumir os anos de um curso completo, conheça por dentro o ambiente acadêmico do Seminário e confirme o chamado.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição leva um minuto e pede só nome, telefone e e-mail. A secretaria entra em contato para concluir a matrícula e tirar as últimas dúvidas antes de você começar.",
    },
    faq: [
      {
        question: "Preciso ter formação teológica para fazer o CIT?",
        answer:
          "Não. O curso é o primeiro contato com a teologia acadêmica e é aberto a líderes e cristãos em geral, sem exigência de conhecimento prévio.",
      },
      faqAulas(),
      faqDuracao(cit),
      {
        question: "O curso tem certificado?",
        answer:
          "Sim. Ao concluir, o aluno recebe Certificado de Conclusão emitido pelo Seminário — na versão digital e na via impressa, entregue no dia da formatura. É um curso livre, com reconhecimento intracorpus sob a autoridade da Junta de Educação Teológica (JET) da Igreja Presbiteriana do Brasil.",
      },
      faqMec(cit),
      faqAvaliacao(),
      faqMatricula(),
    ],
    enroll: {
      title: "Pronto para começar?",
      description:
        "Inscreva-se na próxima turma do Curso Introdutório de Teologia e dê o primeiro passo na sua formação teológica reformada.",
    },
    descontos: true,
  },

  /* ------------------------------ CAL ------------------------------ */
  cal: {
    hero: {
      title: "Sirva com preparo onde você já lidera.",
      description:
        "Formação prática para quem já está à frente de um ministério: 8 disciplinas 100% online e ao vivo, dos fundamentos da liderança à homilética, ao discipulado, à liturgia e ao cuidado com quem sofre.",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem já serve",
      items: [
        {
          icon: Users,
          title: "Já sirvo há anos, ainda preciso de curso?",
          text: "A prática ensina muito, mas não substitui o fundamento. O CAL pega aquilo que você já faz — ensinar, pregar, conduzir o culto, visitar, discipular — e devolve com base bíblica e reformada.",
        },
        {
          icon: Clock,
          title: "Não tenho tempo nem como me deslocar",
          text: "As aulas são 100% online e ao vivo, em horário marcado, e ficam gravadas para você rever quando puder. São até 6 meses de curso, estudando de qualquer lugar do Brasil.",
        },
        {
          icon: Layers,
          title: "É teoria demais para o meu dia a dia?",
          text: "Cada disciplina termina em prática: preparar um estudo e um sermão, dirigir um culto, montar um projeto de discipulado, acolher pessoas com deficiência e visitar o enfermo.",
        },
        {
          icon: GraduationCap,
          title: "Preciso ter estudado teologia antes?",
          text: "Não. O CAL é aberto a líderes já envolvidos nas igrejas, sem exigência de formação teológica anterior e sem processo seletivo — a inscrição é direta.",
        },
      ],
    },
    ctaBand: {
      title: "Liderança também se aprende — e se ensina.",
      description:
        "Aula ao vivo com os professores do Seminário e gravada, para você rever quando puder, quantas vezes quiser.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "8 disciplinas voltadas à prática ministerial",
      summary: "8 disciplinas · 32 aulas · professores com experiência pastoral",
    },
    instructors: {
      description:
        "Pastores e professores com estrada em liderança, ensino e cuidado pastoral conduzem cada disciplina do CAL, ao vivo.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "O CAL não exige formação teológica anterior: ele parte de onde você já serve. Na prática, costuma servir a quatro perfis:",
      profiles: [
        {
          icon: BookOpen,
          title: "Professores de Escola Dominical",
          text: "Você prepara aula toda semana e quer método: como observar o texto, interpretar, correlacionar e aplicar — sem improviso no domingo de manhã.",
        },
        {
          icon: Users,
          title: "Presbíteros e diáconos",
          text: "Você já foi ordenado e quer amadurecer no cuidado com as pessoas, na visitação ao enfermo e na direção do culto.",
        },
        {
          icon: Compass,
          title: "Diretorias das sociedades internas",
          text: "Quem conduz uma sociedade interna precisa de liderança com fundamento — vocação, discipulado e propósito —, não só de agenda cheia.",
        },
        {
          icon: Sprout,
          title: "Evangelistas e obreiros",
          text: "Você está à frente de uma congregação ou de um campo e precisa de base em liturgia, discipulado e cuidado pastoral para sustentar o trabalho.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição leva um minuto e pede só nome, telefone e e-mail. A secretaria entra em contato para concluir a matrícula e tirar as últimas dúvidas antes de você começar.",
    },
    faq: [
      faqSemPreRequisito(cal),
      faqAulas(),
      faqDuracao(cal),
      faqCertificado(),
      faqMec(cal),
      faqAvaliacao(),
      {
        question: "Qual é a diferença entre o CAL e o CIT?",
        answer:
          "O CIT é o primeiro contato com a teologia reformada: panorama bíblico, doutrina, história da Igreja e interpretação. O CAL parte para a prática ministerial — liderança, preparo de estudos e mensagens, discipulado, liturgia, inclusão e visitação. Não há ordem obrigatória entre os dois, e muitos alunos fazem os dois cursos.",
      },
      faqMatricula(),
    ],
    enroll: {
      title: "Pronto para começar?",
      description:
        "Inscreva-se na próxima turma do Curso de Aperfeiçoamento de Líderes e leve mais preparo para o ministério que você já exerce.",
    },
  },

  /* ------------------------------ CFO ------------------------------ */
  cfo: {
    hero: {
      title: "Assuma o oficialato com preparo.",
      description:
        "Formação completa para presbíteros e diáconos: 16 disciplinas 100% online e ao vivo, da Constituição e Ordem da IPB aos Símbolos de Fé, da história da denominação aos fundamentos da liderança cristã.",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem foi chamado ao ofício",
      items: [
        {
          icon: Users,
          title: "Fui eleito e não sei por onde começar",
          text: "O curso trata exatamente do que o ofício exige na prática: o sistema conciliar da IPB, as atribuições de presbíteros e diáconos, como conduzir reuniões do Conselho e da Junta Diaconal e como redigir atas, relatórios e propostas de resolução.",
        },
        {
          icon: Clock,
          title: "Não tenho tempo, já sirvo na igreja",
          text: "As aulas são 100% online e ao vivo, em horário marcado, e todas ficam gravadas. O curso se distribui em até 12 meses, no ritmo de quem já tem uma agenda ministerial cheia.",
        },
        {
          icon: ScrollText,
          title: "Já sou oficial há anos",
          text: "O CFO não é só para quem está começando. Símbolos de Fé, História da IPB e Constituição e Ordem dão o fundamento confessional e a segurança de quem precisa decidir em Conselho.",
        },
        {
          icon: BadgeCheck,
          title: "Isso tem valor dentro da minha igreja?",
          text: "O Seminário é jurisdicionado à Igreja Presbiteriana do Brasil e a certificação é outorgada pela Junta Regional de Educação Teológica (JURET). É um curso livre, com reconhecimento intracorpus.",
        },
      ],
    },
    ctaBand: {
      title: "Prepare-se para o ofício que a igreja lhe confiou.",
      description:
        "Aula ao vivo com os professores do Seminário e gravada, para você rever quando puder, quantas vezes quiser.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "16 disciplinas para o exercício do ofício",
      summary: "16 disciplinas · até 12 meses · professores reverendos",
    },
    instructors: {
      description:
        "Reverendos com experiência de conselho, de concílio e de sala de aula conduzem cada disciplina do CFO, ao vivo.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "O CFO é para quem exerce — ou vai exercer — o oficialato bíblico, e para os conselhos que querem formar a sua liderança. Na prática, costuma servir a quatro perfis:",
      profiles: [
        {
          icon: Compass,
          title: "Aspirantes ao oficialato",
          text: "Você foi sondado pelo Conselho ou sente o chamado e quer chegar preparado à eleição, sabendo o que o ofício realmente pede.",
        },
        {
          icon: Landmark,
          title: "Presbíteros",
          text: "Governo, disciplina e cuidado espiritual pedem conhecimento da Constituição, dos Símbolos de Fé e do funcionamento dos concílios.",
        },
        {
          icon: HeartHandshake,
          title: "Diáconos",
          text: "O ministério da misericórdia tem doutrina, método e ordem: da assistência ao necessitado à documentação da Junta Diaconal.",
        },
        {
          icon: Users,
          title: "Conselhos e juntas diaconais",
          text: "Vários oficiais da mesma igreja podem estudar juntos e formar uma liderança que fala a mesma língua.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição leva um minuto e pede só nome, telefone e e-mail. A secretaria entra em contato para concluir a matrícula e tirar as últimas dúvidas antes de você começar.",
    },
    faq: [
      {
        question: "Preciso já ser oficial ordenado para fazer o CFO?",
        answer:
          "Não. O curso é aberto a oficiais já ordenados — presbíteros e diáconos — e a aspirantes ao oficialato, que ainda não foram eleitos mas querem se preparar.",
      },
      faqAulas(),
      faqDuracao(cfo),
      faqCertificado(),
      faqMec(cfo),
      faqAvaliacao(),
      faqMatricula(),
    ],
    enroll: {
      title: "Pronto para começar?",
      description:
        "Inscreva-se na próxima turma do Curso de Formação de Oficiais e exerça o oficialato com o preparo que a igreja espera.",
    },
  },

  /* ------------------------------ CFP ------------------------------ */
  cfp: {
    hero: {
      title: "Ensinar a Palavra é ofício — e se aprende.",
      description:
        "Formação para quem ensina na igreja local: 16 disciplinas 100% online e ao vivo, da didática e do plano de aula à homilética, à psicologia da educação e às ferramentas digitais.",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem ensina na igreja",
      items: [
        {
          icon: BookOpen,
          title: "Eu só dou aula na Escola Dominical",
          text: "Esse “só” é grande: quem ensina na EBD forma a leitura bíblica de uma igreja inteira. O CFP trata esse trabalho como ofício, com método, planejamento e avaliação.",
        },
        {
          icon: Clock,
          title: "Não tenho tempo para mais um curso",
          text: "As aulas são 100% online e ao vivo, em horário marcado, e ficam gravadas. O curso se distribui em até 12 meses, no ritmo de quem já ensina toda semana.",
        },
        {
          icon: Layers,
          title: "Eu já domino o conteúdo, o que falta?",
          text: "Saber o conteúdo e conseguir ensiná-lo são coisas diferentes. O curso trabalha fundamentos de didática, os quatro pilares da educação, taxonomia de Bloom, plano de curso e de aula, técnicas de comunicação e avaliação do aprendizado.",
        },
        {
          icon: Monitor,
          title: "Não me dou bem com tecnologia",
          text: "Isso não é pré-requisito, é conteúdo: uma disciplina inteira trata das ferramentas digitais aplicadas ao ensino — apresentações, transmissão, gravação e edição de áudio e vídeo.",
        },
      ],
    },
    ctaBand: {
      title: "Dê à sua sala de aula o preparo que ela merece.",
      description:
        "Aula ao vivo com os professores do Seminário e gravada, para você rever quando puder, quantas vezes quiser.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "16 disciplinas para quem ensina",
      summary: "16 disciplinas · até 12 meses · teologia e didática lado a lado",
    },
    instructors: {
      description:
        "Reverendos e professoras com formação pedagógica e experiência de sala de aula conduzem cada disciplina do CFP, ao vivo.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "O CFP é para quem já ensina, ou vai ensinar, na igreja local — sem exigência de formação pedagógica anterior. Na prática, costuma servir a quatro perfis:",
      profiles: [
        {
          icon: BookOpen,
          title: "Professores de Escola Dominical",
          text: "Você quer sair do improviso: preparar o estudo com método, planejar o trimestre e saber se a turma realmente aprendeu.",
        },
        {
          icon: Sprout,
          title: "Quem ensina crianças e adolescentes",
          text: "As fases do desenvolvimento, os distúrbios de aprendizagem e a pedagogia de Jesus mudam a forma de ensinar cada faixa etária.",
        },
        {
          icon: Compass,
          title: "Coordenadores da Escola Dominical",
          text: "Quem organiza a EBD precisa de plano de curso, critérios de avaliação e capacidade de formar os próprios professores.",
        },
        {
          icon: Users,
          title: "Líderes de grupos e discipulado",
          text: "Ensinar em grupo pequeno pede clareza, comunicação e preparo de mensagem — o mesmo ofício, em outra sala.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição leva um minuto e pede só nome, telefone e e-mail. A secretaria entra em contato para concluir a matrícula e tirar as últimas dúvidas antes de você começar.",
    },
    faq: [
      {
        question: "Preciso ser pedagogo ou professor formado?",
        answer:
          "Não. O CFP é aberto a quem já ensina ou pretende ensinar na igreja local, sem exigência de formação pedagógica ou teológica anterior.",
      },
      faqAulas(),
      faqDuracao(cfp),
      faqCertificado(),
      faqMec(cfp),
      faqAvaliacao(),
      faqMatricula(),
    ],
    enroll: {
      title: "Pronto para começar?",
      description:
        "Inscreva-se na próxima turma do Curso de Formação de Professores e ensine a Palavra com método, preparo e propósito.",
    },
  },

  /* ------------------------------ CFL ------------------------------ */
  cfl: {
    hero: {
      title: "Do primeiro sinal à fluência em Libras.",
      description:
        "Uma trilha completa em três níveis — Iniciante, Intermediário e Avançado —, 100% online e ao vivo, com aulas de convidados surdos e intérpretes presbiterianos, voltada à acessibilidade da igreja e da sociedade.",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem quer aprender Libras",
      items: [
        {
          icon: Hand,
          title: "Nunca tive contato com Libras",
          text: "O nível Iniciante não exige conhecimento nenhum: começa no alfabeto manual, nos números e nos cinco parâmetros da língua. Cada nível tem o seu pré-requisito, e você entra por aquele que corresponde à sua base.",
        },
        {
          icon: Monitor,
          title: "Dá para aprender uma língua de sinais online?",
          text: "Dá, quando a aula é ao vivo. As turmas se encontram uma vez por semana, das 19h às 21h30, e a prática de sinalização acontece na própria aula, com a professora corrigindo em tempo real.",
        },
        {
          icon: Church,
          title: "Minha igreja não tem surdos",
          text: "A acessibilidade não começa quando o surdo chega — é ela que permite que ele chegue. O curso trata da inclusão do surdo na igreja, dos sinais cristãos e litúrgicos e dos primeiros passos para iniciar um ministério com surdos.",
        },
        {
          icon: BadgeCheck,
          title: "Vou sair intérprete?",
          text: "Você sai fluente: apto a conversar, sinalizar a liturgia e servir na acessibilidade da sua igreja. A formação profissional de tradutor-intérprete (TILS) é outra trilha — o curso apresenta a profissão, sua ética e sua rotina, mas não a substitui.",
        },
      ],
    },
    ctaBand: {
      title: "Comece pelo nível que corresponde à sua base.",
      description:
        "Aula semanal ao vivo, das 19h às 21h30, com professoras intérpretes e convidados surdos presbiterianos.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "Três níveis, do alfabeto manual à imersão",
      summary: "3 níveis · aulas semanais, 19h–21h30 · turmas com início em agosto",
    },
    instructors: {
      description:
        "Intérpretes e professoras de Libras com atuação na comunidade surda e na denominação presbiteriana conduzem os três níveis, ao vivo.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "O curso é aberto a qualquer pessoa do Brasil, a partir de 15 anos, e cada nível tem o seu pré-requisito. Na prática, costuma servir a quatro perfis:",
      profiles: [
        {
          icon: Church,
          title: "Quem quer acessibilizar a igreja",
          text: "Você quer que o culto, a EBD e a comunhão da sua igreja estejam ao alcance do surdo — e precisa aprender a língua para isso.",
        },
        {
          icon: Hand,
          title: "Voluntários da acessibilidade",
          text: "Você já interpreta como pode, no improviso, e quer base real: estrutura frasal, classificadores, vocabulário bíblico e ética na interpretação.",
        },
        {
          icon: HeartHandshake,
          title: "Familiares, amigos e colegas de surdos",
          text: "Conviver sem língua comum cansa os dois lados. Aqui você aprende a conversar de fato, não a se virar por mímica.",
        },
        {
          icon: Compass,
          title: "Quem quer se tornar bilíngue",
          text: "Educação, saúde, atendimento ao público: a trilha vai até a imersão, com aulas majoritariamente em Libras no nível Avançado.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição é feita pelo formulário do curso e leva poucos minutos. A secretaria entra em contato para confirmar o seu nível e concluir a matrícula.",
    },
    faq: [
      {
        question: "Preciso saber Libras para começar?",
        answer:
          "Para o nível Iniciante, não: ele é aberto a quem nunca teve contato com a língua. O Intermediário exige conhecimento básico (algumas aulas são ministradas só em Libras) e o Avançado exige o nível intermediário, com a maioria das aulas em Libras.",
      },
      {
        question: "Como funcionam as aulas?",
        answer:
          "São 100% online e ao vivo (remoto), uma vez por semana, das 19h às 21h30, em dia fixo por nível. As turmas contam com aulas de convidados surdos e de intérpretes (TILS) presbiterianos, o que dá vivência real da comunidade surda.",
      },
      {
        question: "Sou obrigado a fazer os três níveis?",
        answer:
          "Não. Cada nível é uma etapa da trilha e pode ser cursado isoladamente, respeitando o pré-requisito. Quem quer chegar à fluência percorre os três.",
      },
      {
        question: "Quem pode se inscrever?",
        answer:
          "Qualquer pessoa do Brasil a partir de 15 anos. Não é preciso ser membro de igreja presbiteriana nem ter formação anterior.",
      },
      faqCertificado(),
      faqMec(cfl),
      {
        question: "O curso tem avaliação?",
        answer:
          "Sim. Há avaliações teóricas e práticas ao longo dos níveis — a prática de sinalização faz parte da nota —, e a frequência nas aulas também conta para a conclusão.",
      },
      {
        question: "Quanto custa e como faço a matrícula?",
        answer:
          "O valor, com parcelas e total, está logo abaixo — nesta mesma página. A inscrição é feita pelo formulário do curso; depois dela, a secretaria orienta o passo a passo da matrícula e o pagamento, feito por boleto enviado para o seu e-mail.",
      },
    ],
    enroll: {
      title: "Pronto para aprender Libras?",
      description:
        "Inscreva-se na próxima turma do Curso de Formação em Libras e ajude a sua igreja a falar a língua de quem hoje fica de fora.",
    },
  },

  /* ------------------------------ CFC ------------------------------ */
  cfc: {
    hero: {
      title: "Cuidar de quem sofre também é ministério.",
      description:
        "Formação em capelania para servir onde a dor está: no hospital, no presídio, na empresa, na escola e nas visitas que a igreja faz todas as semanas. Nove disciplinas, da teologia bíblica do sofrimento à prática de cada campo.",
    },
    objections: {
      eyebrow: "Ainda em dúvida?",
      title: "O que costuma frear quem quer servir na capelania",
      items: [
        {
          icon: HeartHandshake,
          title: "Não sou da área da saúde",
          text: "Capelania não é técnica de saúde, é presença cristã qualificada. O curso trabalha a ética do capelão, a capacidade de escuta, o relacionamento com equipes e famílias e os limites da sua atuação.",
        },
        {
          icon: Church,
          title: "A minha igreja já visita os enfermos",
          text: "Visitar é o começo. O curso organiza esse cuidado: normas e condutas na visitação hospitalar e domiciliar, a criação de uma rede de apoio na igreja e a responsabilidade da comunidade diante do enfermo.",
        },
        {
          icon: ScrollText,
          title: "Posso mesmo entrar em hospital e presídio?",
          text: "Uma das aulas trata justamente da legislação brasileira sobre o tema, da atuação da IPB e do seu conselho de capelania — além do trabalho concreto nos sistemas hospitalar e prisional.",
        },
        {
          icon: BookOpen,
          title: "Isso tem base bíblica?",
          text: "Tem uma disciplina inteira: o sofrimento em João 9 e no livro de Jó, o cuidado com o órfão, a viúva e o preso, Jesus diante dos enfermos e o Espírito Santo como Consolador.",
        },
      ],
    },
    ctaBand: {
      title: "Sirva onde a igreja precisa estar presente.",
      description:
        "Nove disciplinas que cobrem a capelania hospitalar, prisional, empresarial e estudantil. A secretaria confirma as datas da próxima turma.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "Nove disciplinas para a prática da capelania",
      summary: "9 disciplinas · grade oficial do calendário 2026.2",
      // TODO(conteúdo): substituir pela apresentação oficial do CFC, quando a
      // coordenação da EFAL enviá-la (efal.ts ainda tem descrição placeholder).
      about:
        "O Curso de Formação em Capelania prepara para o ministério de presença junto a quem sofre. A grade parte da definição e da relevância da capelania hoje, passa pela sua fundamentação bíblica e ética e desce à prática de cada campo — hospitalar, prisional, empresarial e estudantil —, somando aconselhamento cristão e ministério da misericórdia.",
    },
    instructors: {
      description:
        "A grade do CFC é conduzida por reverendos com atuação em capelania; os docentes ainda em aberto no calendário serão anunciados pela coordenação.",
    },
    audience: {
      eyebrow: "Para quem é",
      title: "Esse curso é para mim?",
      intro:
        "A capelania é um ministério de presença: vai aonde a igreja normalmente não chega. Na prática, o curso costuma servir a quatro perfis:",
      profiles: [
        {
          icon: HeartHandshake,
          title: "Diáconos e equipes de visitação",
          text: "Você já visita enfermos e famílias em crise e quer fazer isso com método, ética e uma rede de apoio organizada por trás.",
        },
        {
          icon: Landmark,
          title: "Capelães voluntários",
          text: "Hospital, presídio, empresa ou escola: cada campo tem regras, linguagem e limites próprios — e o curso trata de todos eles.",
        },
        {
          icon: Users,
          title: "Cristãos que trabalham com gente",
          text: "Saúde, educação, recursos humanos, segurança: quem convive com o sofrimento no trabalho aprende a oferecer consolo sem atropelar a sua função.",
        },
        {
          icon: Compass,
          title: "Pastores e obreiros",
          text: "Quem acompanha luto, doença e cárcere na igreja local encontra aqui fundamentação bíblica e prática para esse acompanhamento.",
        },
      ],
    },
    ctaInvite: {
      title: "Se reconheceu em algum desses perfis?",
      description:
        "A inscrição leva um minuto e pede só nome, telefone e e-mail. A secretaria entra em contato com as datas da turma e conclui a matrícula com você.",
    },
    faq: [
      faqSemPreRequisito(cfc),
      faqProximaTurma(cfc),
      faqCertificado(),
      faqMec(cfc),
      faqAvaliacao(),
      faqMatricula(),
    ],
    enroll: {
      title: "Quer servir na capelania?",
      description:
        "Inscreva-se no Curso de Formação em Capelania e prepare-se para estar presente onde a dor está.",
    },
  },

  /* ------------------------------ CFM ------------------------------ */
  // TODO(conteúdo): o CFM ainda não tem grade, calendário nem apresentação
  // oficial (efal.ts está com placeholders). Enquanto isso, a landing fica
  // honesta: hero, chamada de interesse e FAQ, sem seções que dependeriam de
  // conteúdo que ainda não existe (objeções, público-alvo e instrutores).
  cfm: {
    hero: {
      title: "Formação musical a serviço do culto.",
      description:
        "Um novo curso da EFAL para o ministério de música da igreja local. A coordenação está fechando a grade e o calendário — deixe seus dados e a secretaria avisa você assim que a primeira turma abrir.",
    },
    ctaBand: {
      title: "Quer ser avisado quando a primeira turma abrir?",
      description:
        "O Curso de Formação Musical é uma das novidades da EFAL. Ao se inscrever, você entra na lista de interesse e a secretaria fala com você antes da abertura.",
    },
    curriculum: {
      eyebrow: "O conteúdo do curso",
      title: "Grade em elaboração",
      summary: "Conteúdo, formato e calendário a definir pela coordenação da EFAL",
      about:
        "O Curso de Formação Musical está sendo estruturado pela coordenação da EFAL para atender ao ministério de música da igreja local. Assim que a grade e o calendário forem aprovados, esta página traz as disciplinas, os docentes e as datas — e quem já tiver se inscrito é avisado primeiro.",
    },
    faq: [
      faqProximaTurma(cfm),
      {
        question: "Como funcionam os cursos da EFAL?",
        answer:
          "São cursos livres, com inscrição direta — sem vestibular e sem exigência de escolaridade mínima ou formação teológica anterior — e certificação outorgada pela Junta Regional de Educação Teológica (JURET) da IPB. O formato e o calendário específicos do CFM serão divulgados pela coordenação.",
      },
      {
        question: "Quanto custa?",
        answer:
          "O investimento previsto está logo abaixo, nesta mesma página. O valor final e as condições de pagamento são confirmados pela secretaria na abertura da turma.",
      },
      faqMec(cfm),
    ],
    enroll: {
      title: "Quer garantir seu lugar na primeira turma?",
      description:
        "Deixe seus dados no Curso de Formação Musical: a secretaria entra em contato assim que as inscrições forem abertas.",
    },
  },
};

/** Conteúdo de conversão de um curso da EFAL — undefined se ainda não escrito. */
export function getEfalLanding(slug: string): EfalLanding | undefined {
  return efalLandings[slug];
}
