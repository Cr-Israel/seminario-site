/**
 * Tipos dos formulários do site. O envio real é feito pelas server actions
 * em src/app/actions/ (contato.ts — Home e "avise-me" dos Cursos Online;
 * inscricao.ts — inscrições de cursos).
 */

/** Formulário de contato da Home (seção #contato). */
export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  /** Nome do curso de interesse (opções vindas de src/data/cursos.ts). */
  course: string;
  message: string;
}
