/**
 * Uma disciplina da grade curricular da EFAL, com o docente responsável e a
 * ementa (tópicos das aulas). Dados extraídos e conferidos do calendário
 * oficial 2026.2 (claude/resources/efal-disciplinas.json / efal.pdf).
 *
 * `docente` pode vir como "Professor" ou "Professor em aberto" quando ainda
 * não há nome definido — a UI exibe esses casos como "Docente a definir".
 */
export type EfalDiscipline = {
  name: string;
  docente: string;
  ementa: string[];
  // Campos opcionais usados pelos níveis do Curso de Libras (cada nível é
  // tratado como uma "disciplina" com dia/horário, início e pré-requisito):
  schedule?: string; // ex.: "Terças-feiras, 19h–21h30"
  start?: string; // ex.: "Início em 04/08/2026"
  prerequisite?: string; // ex.: "Sem pré-requisito"
};

/** Professor(a) de um curso, exibido na seção "Professoras do curso". */
export type EfalProfessor = {
  name: string;
  credential?: string; // ex.: "Intérprete credenciada pela APECOM"
  bio: string;
  photo: string; // caminho em /public
};

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
  /**
   * Grade curricular com docente e ementa por disciplina, na ordem oficial.
   * Vazia enquanto o conteúdo não está definido (cursos placeholder CFL/CFM).
   */
  curriculum: EfalDiscipline[];
  isNew: boolean;
  /**
   * Link de inscrição. Enquanto o formulário/fluxo de matrícula não está
   * pronto, aponta para "#" — trocar pelo link real (formulário, WhatsApp
   * da secretaria, ou sistema de matrícula) assim que definido.
   */
  enrollUrl: string;
  /**
   * Rótulo do item da grade (plural). Default "disciplinas"; o Curso de Libras
   * usa "trilhas" porque a grade lista níveis, não disciplinas.
   */
  curriculumUnit?: string;
  /** Valor do curso (opcional) — exibido perto do CTA quando presente. */
  price?: { installments: string; total: string };
  /** Professoras/professores do curso (opcional) — seção dedicada na página. */
  professors?: EfalProfessor[];
};

/**
 * As 8 disciplinas do Curso Introdutório de Teologia (CIT). O CFO e o CFP são
 * compostos por essas 8 + um programa específico de mais 8 — por isso a grade
 * deles reaproveita esta lista.
 */
const citDisciplines: EfalDiscipline[] = [
  {
    name: "Introdução à Teologia Reformada 1",
    docente: "Rev. Diego Maia",
    ementa: [
      "Aula 1 – O conceito reformado de revelação, revelação geral e especial",
      "Aula 2 – Período Medieval (século X ao XV)",
      "Aula 3 – A Teologia do Pacto",
      "Aula 4 – Os três ofícios de Cristo",
    ],
  },
  {
    name: "Panorama de História da Igreja",
    docente: "Rev. Nilson Santos",
    ementa: [
      "Aula 1 – Patrística (século I ao V)",
      "Aula 2 – A doutrina da Trindade e os atributos comunicáveis e incomunicáveis",
      "Aula 3 – Reformas religiosas e o escolasticismo protestante (séculos XVI a XVIII)",
      "Aula 4 – Período moderno e contemporâneo (séculos XVIII a XXI)",
    ],
  },
  {
    name: "Introdução à Teologia Reformada 2",
    docente: "Rev. Diego Maia",
    ementa: [
      "Aula 1 – A pessoa e a obra do Espírito Santo",
      'Aula 2 – Os "cinco" pontos do calvinismo',
      "Aula 3 – Os sacramentos na visão calvinista",
      "Aula 4 – Introdução às correntes escatológicas",
    ],
  },
  {
    name: "Panorama do Antigo Testamento",
    docente: "Rev. Renato Prates",
    ementa: [
      "Aula 1 – Pentateuco",
      "Aula 2 – Livros Históricos",
      "Aula 3 – Livros Poéticos",
      "Aula 4 – Livros Proféticos",
    ],
  },
  {
    name: "Princípios de Interpretação Bíblica",
    docente: "Rev. Jayro Alves",
    ementa: [
      "Aula 1 – Definição, pressupostos e a interpretação gramatical",
      "Aula 2 – Interpretação Histórica",
      "Aula 3 – Interpretação Teológica",
      "Aula 4 – Interpretação de Profecias e Salmos",
    ],
  },
  {
    name: "Panorama do Novo Testamento",
    docente: "Rev. Leonard Neumann",
    ementa: [
      "Aula 1 – Evangelho e Atos",
      "Aula 2 – As cartas de Paulo 1",
      "Aula 3 – As cartas de Paulo 2",
      "Aula 4 – Cartas Gerais e Apocalipse",
    ],
  },
  {
    name: "Noções de Aconselhamento Cristão",
    docente: "Rev. Orlando Ferreira",
    ementa: [
      "Aula 1 – O que é o Aconselhamento Cristão e qual sua importância",
      "Aula 2 – O Conselheiro e o Aconselhamento",
      "Aula 3 – A capacidade de escuta",
      "Aula 4 – Princípios para intervenção e encaminhamento",
    ],
  },
  {
    name: "Evangelização Prática",
    docente: "Rev. Carlos Vitor",
    ementa: [
      "Aula 1 – Pressupostos do Evangelismo",
      "Aula 2 – Identificação do público-alvo do evangelismo",
      "Aula 3 – Evangelismo como agente gerador de saúde e estudo de caso",
      "Aula 4 – Elaboração de um Projeto Evangelístico",
    ],
  },
];

/** Programa específico do Curso de Formação de Oficiais (soma-se ao CIT). */
const cfoDisciplines: EfalDiscipline[] = [
  {
    name: "Panorama de História da IPB 1",
    docente: "Rev. Sérgio Kitagawa",
    ementa: [
      "Aula 1 – Implantação (1859-1869)",
      "Aula 2 – Consolidação (1869-1888)",
      "Aula 3 – Dissensão (1888-1903)",
      "Aula 4 – Reconstituição (1903-1917)",
    ],
  },
  {
    name: "Fundamentos de Liderança 1",
    docente: "Rev. Ricardo Narciso",
    ementa: [
      "Aula 1 – Teologia Bíblica do Ministério Eclesiástico",
      "Aula 2 – Teologia Bíblica da Vocação",
      "Aula 3 – Uma abordagem sobre Liderança",
      "Aula 4 – Liderança Cristã",
    ],
  },
  {
    name: "Panorama de História da IPB 2",
    docente: "Rev. Sérgio Kitagawa",
    ementa: [
      "Aula 1 – Cooperação (1917-1932)",
      "Aula 2 – Organização (1932-1966)",
      "Aula 3 – Era Boanerges Ribeiro (1966-1982)",
      "Aula 4 – Era contemporânea (1982-2002)",
    ],
  },
  {
    name: "Fundamentos de Liderança 2",
    docente: "Rev. Ricardo Narciso",
    ementa: [
      "Aula 1 – Origens da Liderança",
      "Aula 2 – Qualidades da Liderança",
      "Aula 3 – As Tentações e os problemas da Liderança",
      "Aula 4 – O futuro da liderança",
    ],
  },
  {
    name: "Fundamentos de Constituição e Ordem 1",
    docente: "Rev. João Batista",
    ementa: [
      "Aula 1 – O sistema conciliar da IPB: concílios e ofícios",
      "Aula 2 – O ofício do presbítero",
      "Aula 3 – O ofício do diácono",
      "Aula 4 – O ofício do pastor",
    ],
  },
  {
    name: "Símbolos de Fé da IPB 1",
    docente: "Rev. Wladyslaw Kreinski",
    ementa: [
      "Aula 1 – Introdução: confessionalidade e ortopraxia; breve história dos Símbolos de Fé",
      "Aula 2 – As Escrituras Sagradas e o Deus que se revela Criador e Provedor",
      "Aula 3 – A Teologia Federal",
      "Aula 4 – A Ordem da Salvação",
    ],
  },
  {
    name: "Fundamentos de Constituição e Ordem 2",
    docente: "Rev. João Batista",
    ementa: [
      "Aula 1 – A assembleia da Igreja local (atribuições e procedimentos)",
      "Aula 2 – Como fazer reuniões (Conselho e Junta Diaconal)",
      "Aula 3 – Como fazer documentos (atas, relatórios, credenciais, propostas de resolução)",
      "Aula 4 – Introdução à disciplina eclesiástica (o papel pastoral dos oficiais e tipos de processo)",
    ],
  },
  {
    name: "Símbolos de Fé da IPB 2",
    docente: "Rev. Wladyslaw Kreinski",
    ementa: [
      "Aula 1 – A Igreja e os Sacramentos",
      "Aula 2 – A piedade confessional: introdução aos mandamentos e a oração do Senhor",
      "Aula 3 – O poder da Igreja (concílios) e o poder temporal (o magistrado)",
      "Aula 4 – Escatologia à luz da Confissão",
    ],
  },
];

/** Programa específico do Curso de Formação de Professores (soma-se ao CIT). */
const cfpDisciplines: EfalDiscipline[] = [
  {
    name: "Preparação de Estudos e Mensagens 1",
    docente: "Rev. Adenilson Moura",
    ementa: [
      "Aula 1 – Elementos básicos: observação, interpretação, correlação e aplicação",
      "Aula 2 – Método de análise do versículo no estudo da Bíblia",
      "Aula 3 – Métodos Analítico e Sintético de Estudo da Bíblia",
      "Aula 4 – Métodos Tópico e Biográfico do Estudo da Bíblia",
    ],
  },
  {
    name: "Ferramentas Digitais Aplicadas ao Ensino",
    docente: "Rev. Ailton Ferreira",
    ementa: [
      "Aula 1 – Introdução: refletindo sobre a inovação do ensino Família Google",
      "Aula 2 – Ferramentas Digitais: redes sociais",
      "Aula 3 – Preparando apresentações de Slides",
      "Aula 4 – Ferramentas de transmissão e gravação de aula e Ferramentas Digitais de Edição de Áudio e Vídeo",
    ],
  },
  {
    name: "Preparação de Estudos e Mensagens 2",
    docente: "Rev. Adenilson Moura",
    ementa: [
      "Aula 1 – Introdução à Homilética",
      "Aula 2 – A essência e a classificação dos sermões",
      "Aula 3 – Partes constitutivas do sermão",
      "Aula 4 – Exemplo de preparação de um sermão",
    ],
  },
  {
    name: "Fundamentos de Didática",
    docente: "Profª. Simone Xavier",
    ementa: [
      "Aula 1 – Fundamentos da Educação e seus principais conceitos, autores e obras",
      "Aula 2 – Os quatro pilares da educação: o aprender a conhecer; aprender a fazer; aprender a conviver; aprender a ser",
      "Aula 3 – As sete leis do ensino (Howard Hendricksen)",
      "Aula 4 – Ferramentas para avaliação do ensino-aprendizado",
    ],
  },
  {
    name: "Introdução à Educação Cristã",
    docente: "Professor em aberto",
    ementa: [
      "Aula 1 – Definição de conceitos (educação secular, educação religiosa, educação cristã)",
      "Aula 2 – Fundamentos bíblicos teológicos da Educação Cristã",
      "Aula 3 – Panorama de história da Educação Cristã",
      "Aula 4 – A pedagogia de Jesus",
    ],
  },
  {
    name: "Noções de Psicologia da Educação",
    docente: "Professor em aberto",
    ementa: [
      "Aula 1 – Definição de Psicologia da Educação, síntese das abordagens psicológicas e as 8 fases do desenvolvimento (Erik Erikson)",
      "Aula 2 – Teorias do aprendizado em Rogers e Vygotsky",
      "Aula 3 – Distúrbios no desenvolvimento humano e aprendizado",
      "Aula 4 – Aprendizagem e desenvolvimento: interações sociais",
    ],
  },
  {
    name: "Preparação de Plano de Curso e Plano de Aula",
    docente: "Profª Julimar Ferreira",
    ementa: [
      "Aula 1 – Definição de conceitos: a importância do planejamento escolar e critérios básicos de avaliação do planejamento",
      "Aula 2 – Taxonomia de Bloom e métodos no processo-ensino aprendizagem",
      "Aula 3 – Como elaborar um plano de curso e um plano de aula",
      "Aula 4 – Exemplos de planos de aula por segmento",
    ],
  },
  {
    name: "Noções de Técnicas de Comunicação",
    docente: "Rev. João Batista",
    ementa: [
      "Aula 1 – Introdução às Técnicas de Comunicação",
      "Aula 2 – O público-alvo: conhecendo, conquistando e lidando com o público",
      "Aula 3 – Linguagem corporal",
      "Aula 4 – Planejando e realizando uma apresentação em público",
    ],
  },
];

/** Grade do Curso de Aperfeiçoamento de Líderes (CAL), 8 disciplinas. */
const calDisciplines: EfalDiscipline[] = [
  {
    name: "Preparação de Estudos e Mensagens 1",
    docente: "Rev. Adenilson Moura",
    ementa: [
      "Aula 1 – Elementos básicos: observação, interpretação, correlação e aplicação",
      "Aula 2 – Método de análise do versículo no estudo da Bíblia",
      "Aula 3 – Métodos Analítico e Sintético de Estudo da Bíblia",
      "Aula 4 – Métodos Tópico e Biográfico do Estudo da Bíblia",
    ],
  },
  {
    name: "Fundamentos de Liderança 1",
    docente: "Rev. Ricardo Narciso",
    ementa: [
      "Aula 1 – Teologia Bíblica do Ministério Eclesiástico",
      "Aula 2 – Teologia Bíblica da Vocação",
      "Aula 3 – Uma abordagem sobre Liderança",
      "Aula 4 – Liderança Cristã",
    ],
  },
  {
    name: "Preparação de Estudos e Mensagens 2",
    docente: "Rev. Adenilson Moura",
    ementa: [
      "Aula 1 – Introdução a Homilética",
      "Aula 2 – A essência e a classificação dos sermões",
      "Aula 3 – Partes constitutivas do sermão",
      "Aula 4 – Exemplo de preparação de um sermão",
    ],
  },
  {
    name: "Fundamentos de Liderança 2",
    docente: "Rev. Ricardo Narciso",
    ementa: [
      "Aula 1 – Origens da Liderança",
      "Aula 2 – Qualidades da Liderança",
      "Aula 3 – As Tentações e os problemas da Liderança",
      "Aula 4 – O futuro da liderança",
    ],
  },
  {
    name: "Inclusão na Igreja (Necessidades Especiais)",
    docente: "Profª Arina Martins",
    ementa: [
      "Aula 1 – Introdução ao Tema",
      "Aula 2 – Direito das pessoas com deficiência",
      "Aula 3 – Caracterização das deficiências",
      "Aula 4 – Adaptando-se para acolher",
    ],
  },
  {
    name: "Discipulado",
    docente: "Rev. Carlos Vitor",
    ementa: [
      "Aula 1 – Conceituando Discipulado",
      "Aula 2 – Discipulado como uma ordem vocacional",
      "Aula 3 – Criando a cultura do discipulado",
      "Aula 4 – Ferramentas para prática do discipulado",
    ],
  },
  {
    name: "Cuidando do Ser (Introdução a Capelania e Visitação)",
    docente: "Rev. Bruno Taioli",
    ementa: [
      "Aula 1 – Capelania: definição e sua relevância hoje",
      "Aula 2 – A responsabilidade da igreja na assistência ao enfermo e a criação de uma rede de apoio",
      "Aula 3 – Normas e condutas na visitação (hospitalar e domiciliar)",
      "Aula 4 – Capelania de rua",
    ],
  },
  {
    name: "Princípios Práticos de Liturgia",
    docente: "Rev. Nilson Santos",
    ementa: [
      "Aula 1 – Introdução ao Culto Cristão (ordem e desenvolvimento)",
      "Aula 2 – O Culto Reformado",
      "Aula 3 – Liturgia e direção do culto",
      "Aula 4 – Orientações práticas",
    ],
  },
];

/** Grade do Curso de Capelania (CAP), 9 disciplinas. */
const capDisciplines: EfalDiscipline[] = [
  {
    name: "Introdução a Capelania",
    docente: "Rev. Adelino",
    ementa: [
      "Aula 1 – Definição de Capelania, seus tipos e sua relevância hoje – Parte I",
      "Aula 2 – Definição de Capelania, seus tipos e sua relevância hoje – Parte II",
      "Aula 3 – A responsabilidade da igreja na assistência ao enfermo e a criação de uma rede de apoio",
      "Aula 4 – A Legislação Brasileira acerca do tema; A atuação da IPB e o conselho de capelania",
    ],
  },
  {
    name: "Ética na Capelania",
    docente: "Professor",
    ementa: [
      "Aula 1 – Conceitos gerais e ethos, moral, ética, alteridade",
      "Aula 2 – O evangelismo feito pela capelania e a mensagem a transmitir; O relacionamento do capelão com outros religiosos",
    ],
  },
  {
    name: "Teologia Bíblica da Capelania",
    docente: "Professor",
    ementa: [
      'Aula 1 – A resposta Cristã à existência do sofrimento. Jo 9 – "Quem pecou para que este nascesse cego?"',
      "Aula 2 – A importância do cuidado com o que sofre e o aconselhamento no livro de Jó",
      "Aula 3 – Cuidando do órfão, da viúva e do preso; Jesus e os enfermos e aflitos (Mt 9.35-38)",
      "Aula 4 – O caráter cuidador da redenção de Cristo: Morte e ressurreição; O Espírito Santo como o Consolador: As lágrimas enxugadas hoje",
    ],
  },
  {
    name: "Capelania Hospitalar",
    docente: "Professor",
    ementa: [
      "Aula 1 – A importância da visitação em hospitais e requisitos básicos do visitador",
      "Aula 2 – O relacionamento do capelão com a administração hospitalar, médicos e enfermeiros",
      "Aula 3 – O relacionamento do capelão com os pacientes e seus familiares; A sensibilidade à dor do paciente e da família",
      "Aula 4 – O aconselhamento e a doença; A visão secular da morte",
    ],
  },
  {
    name: "Capelania Prisional",
    docente: "Professor",
    ementa: [
      "Aula 1 – Apresentação e Estatística Carcerária",
      "Aula 2 – O sistema prisional como Campo Missionário I",
      "Aula 3 – O sistema prisional como Campo Missionário II",
      "Aula 4 – Atuação na prática – Atrás e além das grades",
    ],
  },
  {
    name: "Capelania Empresarial",
    docente: "Professor",
    ementa: [
      "Aula 1 – O significado da dor e do sofrimento do trabalho em Gn 3; Burnout, distúrbios laborais e saúde mental no trabalho",
      "Aula 2 – A ressignificação do trabalho na teologia reformada (Cl 4). Construindo um ambiente saudável (Fp 4)",
    ],
  },
  {
    name: "Aconselhamento Cristão",
    docente: "Professor",
    ementa: [
      "Aula 1 – O que é o Aconselhamento Cristão e qual sua importância",
      "Aula 2 – O Conselheiro e o Aconselhamento",
      "Aula 3 – A capacidade de escuta",
      "Aula 4 – Princípios para intervenção e encaminhamento",
    ],
  },
  {
    name: "Capelania Estudantil",
    docente: "Professor",
    ementa: [
      "Aula 1 – Os dramas no processo de aprendizado e o sofrimento na socialização. Dilemas familiares e sua influência no desenvolvimento acadêmico",
      "Aula 2 – Ensino infantil, bullying, acolhimento e gerenciamento de emoções",
      "Aula 3 – O estudante universitário e os desafios do ensino superior",
      "Aula 4 – Docentes, esgotamento mental, conflitos humanos e valorização profissional",
    ],
  },
  {
    name: "Ministério da Misericórdia",
    docente: "Professor",
    ementa: [
      "Aula 1 – O olhar bíblico diante da pobreza, o papel da Igreja diante dos sofrimentos da sociedade e a resposta da dignidade em Cristo",
      "Aula 2 – A leitura dos sofrimentos em seus contextos sociais e identificação dos consolos possíveis. Os princípios bíblicos da atuação diaconal",
    ],
  },
];

/** Os 3 níveis do Curso de Libras, cada um tratado como uma "disciplina"
 *  com sua ementa. Iniciante e Intermediário com ementa aula-a-aula (PDFs
 *  oficiais 2026); Avançado com os principais conteúdos (o PDF do Avançado
 *  não traz a lista aula-a-aula). */
const librasLevels: EfalDiscipline[] = [
  {
    name: "Nível Iniciante",
    docente: "Profª Vívian Vianna Breder",
    schedule: "Terças-feiras, 19h–21h30",
    start: "Início em 04/08/2026",
    prerequisite: "Sem pré-requisito — aberto a quem nunca teve contato com Libras",
    ementa: [
      "Aula 1 – Apresentação do curso; introdução à Língua Brasileira de Sinais (conceitos básicos)",
      "Aula 2 – Introdução à Libras II; alfabeto manual e acentuação; datilologia",
      "Aula 3 – História da língua de sinais e da surdez na sociedade; tipos de números (cardinais, ordinais e quantitativos); idade, dinheiro e operações monetárias",
      "Aula 4 – Os 5 parâmetros; saudações; apresentação pessoal (nome e sinal); estado de espírito; conversação básica entre duas pessoas",
      "Aula 5 – Marcações temporais I: dias da semana, meses do ano e advérbios de tempo I",
      "Aula 6 – Marcações temporais II: horas e advérbios de tempo II",
      "Aula 7 – Inclusão do surdo na igreja (panorama dos surdos no Brasil); por que e como acessibilizar a igreja; sinais cristãos básicos e litúrgicos (Deus, Senhor, Igreja, Ofertório). Avaliação teórica e prática",
      "Aula 8 – Verbos: tipos de verbos em Libras; vocabulário de verbos I",
      "Aula 9 – Pronomes pessoais e de posse; vocabulário de família, estado civil e relações",
      "Aula 10 – Elementos da cultura surda; vocabulário de sentimentos I e adjetivos I",
      "Aula 11 – Formas de negação e sentenças negativas; vocabulário de alimentos I e bebidas",
      "Aula 12 – A profissão do tradutor/intérprete (formação, trabalho e ética); vocabulário de cores, etnias e vestuário",
      "Aula 13 – Pronomes interrogativos; conceito e uso de dêixis; vocabulário de lugares I (estabelecimentos comerciais e locais urbanos)",
      "Aula 14 – Acessibilidade na Igreja Presbiteriana; sinais da estrutura e vivências da IPB; revisão. Avaliação teórica e prática",
      "Aula 15 – Introdução aos classificadores; vocabulário de animais I e de natureza",
      "Aula 16 – Vocabulário de verbos II; conversação",
      "Aula 17 – Onde e como pesquisar sinais (materiais e bibliografias confiáveis); vocabulário de objetos (mobílias, itens de casa e de papelaria)",
      "Aula 18 – Acessibilidade em diversos contextos (lazer, saúde, trabalho); vocabulário de profissões I",
      "Aula 19 – Vocabulário de lugares II (estados do Brasil) e de meios de transporte; revisão",
      "Aula 20 – Ética na interpretação na igreja; princípios da tradução de música; sinais cristãos e litúrgicos II (Glória, fidelidade, diabo). Avaliação teórica e prática",
    ],
  },
  {
    name: "Nível Intermediário",
    docente: "Profª Vívian Vianna Breder",
    schedule: "Segundas-feiras, 19h–21h30",
    start: "Início em 03/08/2026",
    prerequisite: "Conhecimento prévio básico (algumas aulas só em Libras)",
    ementa: [
      "Aula 1 – Apresentação do curso; vocabulário de verbos III; revisão do curso básico",
      "Aula 2 – Ordem nas frases (estruturas frasais da Libras); uso de expressão na ordem das frases; mouthing",
      "Aula 3 – Tipos de texto e sua tonalidade em Libras; texto narrativo",
      "Aula 4 – Vocabulário de sentimentos II e adjetivos II; grau comparativo (mais do que, maior do que)",
      "Aula 5 – Conectivos; revisão de referenciais no espaço; vocabulário de lugares III (países)",
      "Aula 6 – Aspectos da cultura surda I — aula com convidado surdo presbiteriano",
      "Aula 7 – Vocabulário de livros da Bíblia; particularidades da sinalização de textos bíblicos simples. Avaliação teórica e prática",
      "Aula 8 – Tecnologia na acessibilidade; vocabulário de tecnologia, redes sociais e streamings",
      "Aula 9 – Vocabulário de corpo humano e saúde; vestuário II (acessórios)",
      "Aula 10 – História dos surdos: Hellen Keller; vocabulário de alimentos II",
      "Aula 11 – Particularidades da sinalização de músicas simples",
      "Aula 12 – Experiências positivas e negativas do surdo numa sociedade excludente — aula com convidado surdo presbiteriano",
      "Aula 13 – Seminário de História dos Surdos (apresentação dos alunos). Avaliação prática",
      "Aula 14 – Tipos e gêneros de texto (sinopse, diário, injuntivo); vocabulário de termos escolares e de educação",
      "Aula 15 – Metáforas e expressões idiomáticas; gírias na comunidade surda; vocabulário de profissões II",
      "Aula 16 – Vocabulário de animais II; uso de classificadores",
      "Aula 17 – Ordem nas frases (estrutura tópico-frasal); revisão de termos de negação",
      "Aula 18 – Primeiros passos para iniciar ministério com surdos — aula com convidados TILS presbiterianos",
      "Aula 19 – Prática de sinalização de liturgia simples. Avaliação teórica e prática",
    ],
  },
  {
    name: "Nível Avançado",
    docente: "Profª Letícia Muniz Magalhães da Cunha",
    schedule: "Quartas-feiras, 19h–21h30",
    start: "Início em 05/08/2026",
    prerequisite: "Nível intermediário (a maioria das aulas é ministrada só em Libras)",
    ementa: [
      "Consolidação de vocabulário complexo",
      "Construção de histórias e narrativas de gêneros variados, com múltiplos personagens",
      "Estruturas frasais complexas da língua de sinais",
      "Estratégias de tradução e prática de tarefas tradutórias iniciais",
      "Aulas majoritariamente ministradas em Libras (imersão)",
      "Observação: este nível desenvolve fluência em Libras; não substitui a formação profissional de intérprete.",
    ],
  },
];

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
    curriculum: citDisciplines,
    isNew: false,
    enrollUrl: "#",
    price: { installments: "6x de R$ 159,90", total: "R$ 959,40" },
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
    curriculum: calDisciplines,
    isNew: false,
    enrollUrl: "#",
    price: { installments: "6x de R$ 159,90", total: "R$ 959,40" },
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
    curriculum: [...citDisciplines, ...cfoDisciplines],
    isNew: false,
    enrollUrl: "#",
    price: { installments: "12x de R$ 159,90", total: "R$ 1.918,80" },
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
    curriculum: [...citDisciplines, ...cfpDisciplines],
    isNew: false,
    enrollUrl: "#",
    price: { installments: "12x de R$ 159,90", total: "R$ 1.918,80" },
  },
  {
    slug: "cfl",
    code: "Libras",
    title: "Curso de Libras",
    tagline: "Do primeiro sinal à fluência.",
    description:
      "Aprenda Língua Brasileira de Sinais em um ambiente cristão, com foco em acessibilidade na igreja e na sociedade. Uma trilha progressiva completa — Iniciante, Intermediário e Avançado — com conteúdo voltado à atuação religiosa cristã (tradição reformada) e à acessibilidade da igreja. As turmas contam com aulas ministradas por convidados surdos e intérpretes (TILS) presbiterianos, proporcionando vivência real da comunidade surda. É o caminho natural para quem deseja se tornar bilíngue em Libras e usar esse conhecimento na igreja ou na sociedade.",
    audience:
      "Aberto a qualquer pessoa do Brasil, a partir de 15 anos. Cada nível tem seu pré-requisito: o Iniciante não exige conhecimento prévio; o Intermediário exige base (algumas aulas só em Libras); o Avançado exige nível intermediário (maioria das aulas só em Libras).",
    format: "100% online, aulas ao vivo (remoto)",
    duration: "Trilha em 3 níveis · aulas semanais, 19h–21h30",
    disciplines: "3 níveis (Iniciante · Intermediário · Avançado)",
    curriculum: librasLevels,
    curriculumUnit: "trilhas",
    isNew: false,
    enrollUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSfx1TdA9TIl9RKhdwtgnbdYq4cC0Mlc-WRNxpmK_bR7_S6wWg/viewform",
    price: { installments: "6x de R$ 89,90", total: "R$ 539,40" },
    professors: [
      {
        name: "Vívian Vianna Breder",
        credential: "Intérprete credenciada pela APECOM",
        bio: "Intérprete e professora de Libras. Graduada em Letras Libras e graduanda em Letras Inglês. Atuou como intérprete na UFF e, atualmente, na UNIASSELVI. Interpreta há 10 anos na denominação presbiteriana, onde aprendeu Libras.",
        photo: "/images/professoras/foto-prof-vivian.png",
      },
      {
        name: "Letícia Muniz Magalhães da Cunha",
        credential: "Certificada pelo PROLIBRAS (MEC, 2009)",
        bio: "Intérprete e professora de Libras. Pedagoga, com pós-graduações em Tradução, Interpretação e Ensino de Libras e em Libras e Educação de Surdos. Coordenadora das escolas polos bilíngues de surdos da rede municipal de Guarulhos, com mais de 20 anos de experiência na educação e mais de uma década como instrutora e intérprete no SENAI. Idealizadora do 1º Encontro Nacional de Surdos e Intérpretes Presbiterianos (ENSIP, 2025).",
        photo: "/images/professoras/foto-prof-leticia.png",
      },
    ],
  },
  {
    slug: "cfm",
    code: "CFM",
    title: "Curso de Formação Musical",
    tagline: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    curriculum: [],
    isNew: true,
    enrollUrl: "#",
    price: { installments: "6x de R$ 159,90", total: "R$ 959,40" },
  },
  {
    // Slot histórico "CFC" mantido para preservar a URL /cursos-online/cfc. O curso real
    // é o CAP — Curso de Capelania (calendário 2026.2), cuja grade já está
    // definida abaixo. Tagline/descrição/público seguem placeholder até serem
    // fornecidos (não constam no calendário oficial).
    slug: "cfc",
    code: "CAP",
    title: "Curso de Formação em Capelania",
    tagline: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "9 disciplinas",
    curriculum: capDisciplines,
    isNew: true,
    enrollUrl: "#",
    price: { installments: "6x de R$ 159,90", total: "R$ 959,40" },
  },
];

export function getEfalCourse(slug: string) {
  return efalCourses.find((course) => course.slug === slug);
}
