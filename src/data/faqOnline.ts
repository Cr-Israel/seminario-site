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
    question: "Quais são os requisitos para entrar?",
    answer:
      "Nenhum. Não há exigência de escolaridade mínima, formação teológica anterior nem carta de indicação da igreja: basta o interesse em estudar teologia reformada. Você também não precisa ser membro de uma igreja da IPB.",
  },
  {
    question: "Quando abrem as turmas? Posso me inscrever a qualquer momento?",
    answer:
      "As turmas abrem por semestre — duas entradas por ano. Quem perde a data de início entra na turma seguinte; a secretaria avisa quando as inscrições são abertas.",
  },
  {
    question: "Como funcionam as aulas ao vivo?",
    answer:
      "As aulas acontecem 100% online pelo Google Meet, com professor ao vivo em horário marcado — não são gravações assíncronas. O ritmo é de duas disciplinas por semana.",
  },
  {
    question: "Se eu perder uma aula ao vivo, ela fica gravada?",
    answer:
      "Sim. As aulas ficam gravadas: se você não puder assistir no dia, revê a gravação depois, no seu horário.",
  },
  {
    question: "Tem prova? Como sou avaliado?",
    answer:
      "Há avaliações ao longo das disciplinas, e a frequência nas aulas também conta. Os dois critérios juntos definem a conclusão do curso.",
  },
  {
    question: "Os cursos da EFAL dão certificado?",
    answer:
      "Sim. Os cursos da EFAL são certificados pela Junta Regional de Educação Teológica (JURET) da Igreja Presbiteriana do Brasil. Você recebe o certificado digital e a via impressa, entregue no dia da formatura.",
  },
  {
    question: "Quanto custa e como faço a matrícula?",
    answer:
      "O valor de cada curso, com número de parcelas e total, está na própria página do curso. Para se matricular, a secretaria orienta o passo a passo e solicita os documentos necessários; o pagamento é feito por boleto, enviado para o seu e-mail.",
  },
  {
    question: "Quanto tempo tenho para concluir um curso da EFAL?",
    answer:
      "Depende do curso: CIT e CAL têm duração de até 6 meses; CFO e CFP, até 12 meses.",
  },
  {
    question: "E se eu não conseguir acompanhar? Posso trancar?",
    answer:
      "Pode. Se a vida apertar no meio do caminho, é possível trancar e retomar o curso numa turma seguinte — fale com a secretaria para organizar isso.",
  },
  {
    question: "Qual a diferença entre a EFAL e o Bacharelado?",
    answer:
      "A EFAL oferece cursos de curta e média duração (6 a 12 meses) para capacitação pontual de líderes já atuantes na igreja local. O Bacharelado é uma formação teológica completa, presencial, que exige aprovação no processo de admissão unificado da IPB.",
  },
  {
    question: "Já estudei teologia. A EFAL é o meu lugar?",
    answer:
      "Se você busca aprofundamento acadêmico depois de uma formação anterior, a Pós-graduação é a trilha indicada — são quatro programas 100% online, também com aula ao vivo.",
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
