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
    question: "Os cursos têm mensalidade?",
    answer:
      "Os valores variam conforme o curso e a turma. Para informações atualizadas sobre investimento e formas de pagamento, fale com a secretaria.",
  },
  {
    question: "Como funcionam as aulas online ao vivo?",
    answer:
      "Boa parte dos cursos da EFAL é 100% online, com aulas ao vivo (remotas) acompanhadas por um professor. Você participa de onde estiver, com interação em tempo real, sem precisar se deslocar.",
  },
];
