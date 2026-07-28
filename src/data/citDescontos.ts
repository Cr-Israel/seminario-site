/**
 * Política de descontos do CIT, transcrita da página oficial
 * (seminariosimonton.com.br/cit) em 28/07/2026. O valor cheio é o mesmo
 * declarado em efal.ts (`price.installments`): 6x de R$ 159,90.
 *
 * As parcelas com desconto vêm prontas da política em vez de calculadas, para
 * o site nunca divergir do que a secretaria divulga por arredondamento.
 * TODO(secretaria): confirmar se os descontos são cumulativos entre si e se há
 * documentação exigida para comprovar cada categoria — a página oficial não diz.
 */
export type Desconto = {
  /** Quem tem direito. */
  label: string;
  /** Percentual, como divulgado. */
  desconto: string;
  /** Parcela final já com o desconto aplicado. */
  parcela: string;
};

/** Desconto progressivo por grupo da mesma igreja/turma. */
export const descontosPorGrupo: Desconto[] = [
  { label: "3 alunos", desconto: "10%", parcela: "6x R$ 143,91" },
  { label: "4 alunos", desconto: "15%", parcela: "6x R$ 135,92" },
  { label: "5 alunos", desconto: "20%", parcela: "6x R$ 127,92" },
  { label: "6 alunos", desconto: "25%", parcela: "6x R$ 119,93" },
];

/** Regra que estende a tabela acima para grupos maiores. */
export const regraGrupo =
  "A cada aluno a mais do mesmo grupo, acréscimo de 5% de desconto por aluno.";

/** Descontos por perfil do inscrito. */
export const descontosPorCategoria: Desconto[] = [
  {
    label: "Oficiais da IPB (diáconos e presbíteros)",
    desconto: "25%",
    parcela: "6x R$ 119,93",
  },
  { label: "Ex-alunos da EFAL", desconto: "40%", parcela: "6x R$ 95,94" },
  { label: "Mulheres", desconto: "50%", parcela: "6x R$ 79,95" },
];

/** Bolsas integrais vinculadas ao número de matrículas. */
export const bolsaIntegral =
  "A cada 3 alunos matriculados, abre-se 1 bolsa integral (100%) para alunos oriundos de Angola e da Guiné-Bissau.";
