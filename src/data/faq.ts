export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * RASCUNHO — revisar com a secretaria/direção antes de publicar.
 * As respostas foram redigidas com base no que já se sabe (EFAL online ao
 * vivo, certificação pela JURET, Bacharel via processo seletivo da IPB),
 * mas precisam de conferência oficial, especialmente valores e prazos.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Preciso ser membro da Igreja Presbiteriana do Brasil para estudar aqui?",
    answer:
      "Não necessariamente. Os cursos da EFAL são abertos a todo cristão interessado em se capacitar para servir. Já o Curso Livre de Bacharelado em Teologia segue as normas do processo seletivo da IPB — confira os requisitos junto à secretaria.",
  },
  {
    question: "Os cursos da EFAL dão certificado?",
    answer:
      "Sim. Ao concluir um curso da EFAL o aluno recebe certificado, com a chancela da Junta Regional de Educação Teológica (JURET) da IPB.",
  },
  {
    question: "Os cursos são reconhecidos pelo MEC?",
    answer:
      "O Seminário é uma instituição eclesiástica: o currículo é aprovado pelo Supremo Concílio da IPB e a certificação vem da Junta Regional de Educação Teológica (JURET). É um reconhecimento da própria Igreja, para fins ministeriais e eclesiásticos. Os cursos livres da EFAL e o Bacharelado em Teologia não constituem graduação reconhecida pelo MEC — a formação é confessional, voltada ao preparo para o ministério e para o serviço na igreja local.",
  },
  {
    question: "Qual a diferença entre a EFAL e o Bacharelado em Teologia?",
    answer:
      "A EFAL oferece cursos de curta e média duração para capacitar líderes da igreja local (presbíteros, diáconos, professores, etc.). O Bacharelado é a formação teológica completa e mais longa, voltada principalmente ao preparo pastoral, e ingressa-se nele pelo processo seletivo unificado da IPB.",
  },
  {
    question: "Como ingresso no Bacharelado em Teologia?",
    answer:
      "O ingresso é feito por um processo seletivo unificado da Igreja Presbiteriana do Brasil — uma prova que habilita o candidato a escolher entre os seminários da IPB, incluindo o Simonton. A inscrição é feita diretamente pela IPB; acompanhe as datas no site oficial da denominação.",
  },
  {
    question: "Qual a duração dos cursos?",
    answer:
      "Os cursos da EFAL duram de 6 a 12 meses, conforme o curso; o Curso de Libras é uma trilha em 3 níveis, com aulas semanais. [PLACEHOLDER] A duração do Bacharelado e das pós-graduações será confirmada pela secretaria.",
    // TODO(conteúdo): confirmar duração oficial do Bacharelado e da Pós.
  },
  {
    question: "Os cursos têm mensalidade?",
    answer:
      "Os valores variam conforme o curso e a turma. Para informações atualizadas sobre investimento e formas de pagamento, fale com a secretaria.",
  },
  {
    question: "Existem bolsas de estudo ou descontos?",
    answer:
      "[PLACEHOLDER] A política de bolsas e descontos está em consolidação. Fale com a secretaria para conhecer as condições vigentes para cada curso.",
    // TODO(conteúdo): confirmar política oficial de bolsas/descontos com a secretaria.
  },
  {
    question: "Como funcionam as aulas online ao vivo?",
    answer:
      "Boa parte dos cursos da EFAL é 100% online, com aulas ao vivo (remotas) acompanhadas por um professor. Você participa de onde estiver, com interação em tempo real, sem precisar se deslocar.",
  },
];
