/**
 * Conteúdos para download do menu "Conteúdos" — a Revista Sementes e os
 * símbolos de fé reformados (PDFs hospedados no Drive). Fonte única para o
 * Header e o Footer. Links externos (http) abrem em nova aba.
 */
export type Conteudo = {
  label: string;
  href: string;
  description?: string;
};

export const conteudos: Conteudo[] = [
  {
    label: "Revista Sementes",
    // TODO(conteúdo): trocar pelo link real da Revista Sementes.
    href: "#",
  },
  {
    label: "Confissão de Westminster",
    href: "https://drive.google.com/file/d/1rIRmo5Cv5-uIq9PvqfBCpiNzfGNay45m/view?usp=sharing",
  },
  {
    label: "Catecismo Maior de Westminster",
    href: "https://drive.google.com/file/d/1i19wdW8B7MKGOdmN2Q0dGBCjS-VcJko0/view?usp=sharing",
  },
  {
    label: "Breve Catecismo de Westminster",
    href: "https://drive.google.com/file/d/1qEVOb6KhJKljYfzp0r4gbkXeABSx6eWL/view?usp=sharing",
  },
  {
    label: "Catecismo de Heidelberg",
    href: "https://drive.google.com/file/d/1FXGFevRgey9ZwVd-3lm3LfLNHStSfW0R/view?usp=sharing",
  },
];
