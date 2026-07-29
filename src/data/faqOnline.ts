import type { FaqItem } from "./faq";

/**
 * FAQs das páginas de trilha online — um bloco por núcleo, já que a EFAL
 * (/efal) e a Pós-graduação (/pos-graduacao) têm páginas próprias. O FAQ
 * institucional mais amplo continua em faq.ts.
 */
export const efalFaqItems: FaqItem[] = [
  {
    question: "Preciso fazer vestibular para me inscrever?",
    answer:
      "Não. Os cursos da EFAL têm inscrição direta pelo Simonton — diferente do Bacharelado presencial, que passa pelo processo de admissão unificado da IPB.",
  },
  {
    question: "Os cursos da EFAL dão certificado?",
    answer:
      "Sim. Os cursos da EFAL são certificados pela Junta Regional de Educação Teológica (JURET) da Igreja Presbiteriana do Brasil.",
  },
  {
    question: "Qual a diferença entre a EFAL e o Bacharelado?",
    answer:
      "A EFAL oferece cursos de curta e média duração (6 a 12 meses) para capacitação pontual de líderes já atuantes na igreja local. O Bacharelado é uma formação teológica completa, presencial, que exige aprovação no processo de admissão unificado da IPB.",
  },
  {
    question: "Como funcionam as aulas ao vivo?",
    answer:
      "As aulas acontecem 100% online, com professor ao vivo em horário marcado — não são gravações assíncronas.",
  },
  {
    question: "Quanto tempo tenho para concluir um curso da EFAL?",
    answer:
      "Depende do curso: CIT e CAL têm duração de até 6 meses; CFO e CFP, até 12 meses.",
  },
  {
    question: "Já estudei teologia. A EFAL é o meu lugar?",
    answer:
      "Se você busca aprofundamento acadêmico depois de uma formação anterior, a Pós-graduação é a trilha indicada — são quatro programas 100% online, também com aula ao vivo.",
  },
  // REVISAR COM A SECRETARIA
  {
    question: "Preciso ser membro de uma igreja da IPB para estudar na EFAL?",
    answer:
      "Os cursos são abertos a interessados em teologia reformada; recomendamos confirmar com a secretaria eventuais requisitos específicos de cada curso.",
  },
  // REVISAR COM A SECRETARIA
  {
    question: "Os cursos são pagos? Tem mensalidade?",
    answer:
      "Entre em contato com a secretaria para valores e condições atualizadas de cada curso.",
  },
];

export const posFaqItems: FaqItem[] = [
  {
    question: "Preciso fazer vestibular ou prova de seleção?",
    answer:
      "Não. A inscrição nos programas de pós-graduação é feita direto pelo Simonton, sem vestibular — diferente do Bacharelado presencial, que passa pelo processo de admissão unificado da IPB.",
  },
  {
    question: "Como funcionam as aulas?",
    answer:
      "Os programas são 100% online, com professor ao vivo em horário marcado. Não são aulas gravadas: você acompanha e interage em tempo real, de qualquer lugar do Brasil.",
  },
  {
    question: "Como é a grade dos programas?",
    answer:
      "Cada programa reúne nove disciplinas, incluindo Tópicos de Teologia Reformada — comum a todos — e o projeto de pesquisa para artigo científico, que fecha o curso.",
  },
  {
    question: "Qual o investimento?",
    answer:
      "Os programas são oferecidos em 12 parcelas de R$ 259,90 (total de R$ 3.118,80). Condições e formas de pagamento podem ser confirmadas com a secretaria.",
  },
  // TODO(conteúdo): confirmar requisitos de ingresso com o Núcleo de Pós-graduação.
  {
    question: "Quais são os requisitos para cursar a Pós-graduação?",
    answer:
      "[PLACEHOLDER] Os requisitos de ingresso serão confirmados pelo Núcleo de Pós-graduação. Fale com a coordenação para saber se o seu perfil atende ao programa desejado.",
  },
  // TODO(conteúdo): confirmar duração oficial dos programas.
  {
    question: "Qual a duração dos programas?",
    answer:
      "[PLACEHOLDER] A duração oficial de cada programa será confirmada pelo Núcleo de Pós-graduação.",
  },
  {
    question: "A certificação é reconhecida pelo MEC?",
    answer:
      "O Seminário é uma instituição eclesiástica: a certificação vem da Junta Regional de Educação Teológica (JURET) da IPB, com valor para fins ministeriais e eclesiásticos, e não constitui pós-graduação reconhecida pelo MEC.",
  },
  // REVISAR COM A SECRETARIA
  {
    question: "Preciso ser membro de uma igreja da IPB?",
    answer:
      "Os programas são abertos a interessados em teologia reformada; recomendamos confirmar com a secretaria eventuais requisitos específicos.",
  },
];
