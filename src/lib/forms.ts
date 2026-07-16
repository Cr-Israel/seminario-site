/**
 * Ponto único de envio dos formulários do site. O back-end será implementado
 * depois; os componentes já chamam estas funções com payloads tipados, então
 * ligar o envio real é trocar só este arquivo.
 *
 * TODO(backend): implementar envio real (server action / API route) para
 * submitContactForm e submitInterestForm. Por ora, apenas loga e retorna
 * sucesso simulado.
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

/** Formulário "avise-me" da página de Cursos Online. */
export interface InterestFormData {
  name: string;
  phone: string;
  email: string;
  course: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<{ ok: boolean }> {
  console.log("[form] contato", data);
  return { ok: true };
}

export async function submitInterestForm(
  data: InterestFormData,
): Promise<{ ok: boolean }> {
  console.log("[form] interesse cursos online", data);
  return { ok: true };
}
