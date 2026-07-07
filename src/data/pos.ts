export type PosCourse = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  audience: string;
  format: string;
  duration: string;
  disciplines: string;
  /**
   * true enquanto o conteúdo real (descrição, disciplinas, professor) não
   * foi definido. Pinta a etiqueta "Conteúdo provisório" e serve de lembrete
   * pra substituir o Lorem Ipsum antes de qualquer divulgação.
   */
  isPlaceholder: boolean;
  /**
   * Link de inscrição. Enquanto o fluxo de matrícula não está definido,
   * aponta para "#" — trocar pelo link real (formulário, WhatsApp da
   * secretaria ou sistema de matrícula) assim que decidido.
   */
  enrollUrl: string;
};

/**
 * ATENÇÃO: os dois cursos abaixo usam só os TÍTULOS reais que já apareciam
 * no site. Todo o restante (descrição, público, duração, disciplinas,
 * professor) é PLACEHOLDER marcado com isPlaceholder: true — precisa ser
 * substituído pelo conteúdo real da Pós antes de publicar/divulgar.
 */
export const posCourses: PosCourse[] = [
  {
    slug: "estudos-biblicos",
    title: "Pós-Graduação em Estudos Bíblicos",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    isPlaceholder: true,
    enrollUrl: "#",
  },
  {
    slug: "novo-testamento",
    title: "Pós-Graduação em Estudos do Novo Testamento",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    audience: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    format: "A definir",
    duration: "A definir",
    disciplines: "A definir",
    isPlaceholder: true,
    enrollUrl: "#",
  },
];

export function getPosCourse(slug: string) {
  return posCourses.find((course) => course.slug === slug);
}
