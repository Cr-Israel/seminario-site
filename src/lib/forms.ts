/**
 * Tipos e envio dos formulários do site. O formulário de contato da Home já
 * envia de verdade via server action (src/app/actions/contato.ts) — daqui ele
 * usa só o tipo ContactFormData.
 *
 * TODO(backend): implementar envio real para submitInterestForm ("avise-me"
 * dos Cursos Online). Por ora, apenas loga e retorna sucesso simulado.
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

export async function submitInterestForm(
  data: InterestFormData,
): Promise<{ ok: boolean }> {
  console.log("[form] interesse cursos online", data);
  return { ok: true };
}
