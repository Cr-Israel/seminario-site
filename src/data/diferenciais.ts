import {
  BadgeCheck,
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Landmark,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

/**
 * Os seis diferenciais reais do Seminário Simonton — base da página
 * /diferenciais. Textos consolidados a partir de About, Differentiators,
 * SobreConfession e SobreHistory; editar aqui reflete na página inteira.
 *
 * Fatos institucionais (não alterar sem confirmação): fundação = 1986 pelo
 * Supremo Concílio (1982 é o embrião, a extensão de Nova Iguaçu); certificação
 * = JURET; vestibular unificado = JET; reconhecimento eclesiástico ≠
 * credenciamento MEC.
 */
export type Diferencial = {
  /** Âncora da seção detalhada (ex.: "#confissao"). */
  id: string;
  icon: LucideIcon;
  /** Rótulo curto da faixa de âncoras. */
  label: string;
  title: string;
  paragraphs: string[];
  image?: { src: string; alt: string; caption?: string };
};

export const diferenciais: Diferencial[] = [
  {
    id: "confissao",
    icon: BookOpen,
    label: "Confissão reformada",
    title: "Identidade confessional reformada",
    paragraphs: [
      "Cremos que as Escrituras Sagradas são a nossa única e infalível regra de fé e prática. Como instituição da Igreja Presbiteriana do Brasil, adotamos os Símbolos de Fé de Westminster, a Confissão de Fé e os Catecismos Maior e Breve, como fiéis expressões do ensino bíblico.",
      "Aqui não se ensina teologia genérica: cada disciplina, das línguas originais à teologia pastoral, é lecionada sob o referencial da teologia reformada, com zelo confessional e honestidade acadêmica. Esse é o diferencial do qual todos os outros decorrem.",
    ],
    image: {
      src: "/images/biblioteca.jpeg",
      alt: "Estantes da biblioteca do Seminário Simonton, com acervo de teologia",
      caption: "A biblioteca do Seminário, no Méier",
    },
  },
  {
    id: "ipb",
    icon: BadgeCheck,
    label: "Reconhecimento IPB",
    title: "Vínculo e reconhecimento na IPB",
    paragraphs: [
      "O Simonton é jurisdicionado à Igreja Presbiteriana do Brasil: o currículo do Bacharelado é aprovado pelo Supremo Concílio da IPB e a certificação é outorgada pela JURET, a Junta Regional de Educação Teológica. O ingresso se dá pelo Vestibular Unificado da IPB, organizado pela JET.",
      "Trata-se de reconhecimento eclesiástico, não de credenciamento junto ao MEC, e o afirmamos com transparência: é a chancela que importa para quem se prepara para o sagrado ministério na IPB e para o serviço na igreja local.",
    ],
    image: {
      src: "/images/formatura-2025.jpeg",
      alt: "Formandos do Seminário Simonton de beca e capelo, erguendo seus diplomas durante o culto de formatura",
      caption: "Culto de formatura da turma de 2025",
    },
  },
  {
    id: "tradicao",
    icon: Landmark,
    label: "Herança e tradição",
    title: "Uma herança que remonta a Simonton",
    paragraphs: [
      "Fundado em 1986 pelo Supremo Concílio da IPB, a partir da extensão do Seminário Presbiteriano do Sul instalada no Rio de Janeiro em 1982, o STPS é herdeiro de uma trajetória que remonta ao Rev. Ashbel Green Simonton, o pioneiro do presbiterianismo brasileiro.",
      "Desde 2022 essa história tem sede própria: o Edifício Rev. Roberto Brasileiro Silva, na Rua Isolina, 151, no Méier, com salas de aula, biblioteca e capela a serviço da formação teológica no Rio de Janeiro.",
    ],
    image: {
      src: "/images/seminario-frente.jpeg",
      alt: "Fachada de vidro da sede do Seminário Simonton, o Edifício Rev. Roberto Brasileiro Silva",
      caption: "O Edifício Rev. Roberto Brasileiro Silva, sede própria desde 2022",
    },
  },
  {
    id: "docentes",
    icon: GraduationCap,
    label: "Docentes pastores",
    title: "Corpo docente pastoral",
    paragraphs: [
      "O ensino está a cargo de mestres e doutores, muitos deles pastores em atuação nas igrejas: o rigor acadêmico anda junto com a experiência ministerial. Quem ensina exegese também prega; quem ensina teologia pastoral também pastoreia.",
      "A sala de aula reflete essa dupla vocação: o aluno aprende a manejar bem a Palavra com quem a maneja, semana após semana, no púlpito e no aconselhamento.",
    ],
    image: {
      src: "/images/sala-de-aula.jpeg",
      alt: "Professor lecionando para seminaristas em sala de aula do Seminário Simonton",
      caption: "Aula no campus do Méier",
    },
  },
  {
    id: "acompanhamento",
    icon: MonitorSmartphone,
    label: "Acompanhamento real",
    title: "Flexibilidade com acompanhamento real",
    paragraphs: [
      "Oferecemos formação presencial e cursos online, da EFAL à pós-graduação, sempre com interação real entre aluno e professor. Nada de aula gravada sem suporte: há encontros, correção e orientação de quem conhece o aluno pelo nome.",
      "A flexibilidade serve à vocação, não o contrário: cada modalidade preserva o acompanhamento que uma formação teológica séria exige.",
    ],
  },
  {
    id: "formacao-integral",
    icon: HeartHandshake,
    label: "Formação integral",
    title: "Formação integral: piedade e academia",
    paragraphs: [
      "Sem devoção, não há formação. Unimos piedade à reflexão acadêmica, reconhecendo que o temor do Senhor é o princípio da sabedoria, e cuidamos da vida espiritual de cada aluno, e também de sua família.",
      "Esse cuidado toma forma concreta na capelania e em iniciativas como o projeto Casa de Isabel, além do acompanhamento pastoral dos seminaristas ao longo de todo o curso.",
    ],
    image: {
      src: "/images/capela.jpeg",
      alt: "Capela do Seminário Simonton com bancos de madeira e púlpito",
      caption: "A capela do Seminário",
    },
  },
];
