"use server";

/**
 * Inscrição de curso (EFAL e Pós) → Google Sheets via Apps Script.
 *
 * São DUAS planilhas, uma por origem: SHEETS_EFAL_WEBHOOK_URL e
 * SHEETS_POS_WEBHOOK_URL (variáveis de ambiente do servidor — nunca
 * NEXT_PUBLIC_, para não expor no cliente). O campo `origem` escolhe a
 * planilha; o campo `codigo` identifica a aba dentro dela (CIT, CAL,
 * POS-…). Ambos vêm padronizados do arquivo de dados de cada curso
 * (src/data/efal.ts e pos.ts).
 *
 * As planilhas e os Apps Scripts são configurados manualmente pelo dono do
 * projeto (GUIA-google-sheets.md); sem a variável de uma origem, o site
 * builda e roda normalmente e o modal daquela origem mostra o erro amigável.
 */
export interface InscricaoPayload {
  /** Nome completo do curso (ex.: "Curso Introdutório de Teologia"). */
  curso: string;
  /** Origem da inscrição — define a planilha (webhook) de destino. */
  origem: "efal" | "pos";
  /** Código/aba na planilha (ex.: "CIT", "CAL", "POS-NOVO-TESTAMENTO"). */
  codigo: string;
  nome: string;
  telefone: string;
  email: string;
  cupom?: string;
  /** Honeypot anti-spam — humanos nunca preenchem. */
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function enviarInscricao(
  payload: InscricaoPayload,
): Promise<{ ok: boolean; error?: string }> {
  // Honeypot preenchido: bot — descarta em silêncio como sucesso.
  if (payload.website) return { ok: true };

  const nome = payload.nome?.trim() ?? "";
  const telefone = payload.telefone?.trim() ?? "";
  const email = payload.email?.trim().toLowerCase() ?? "";

  if (!payload.curso || !payload.codigo || !nome || !telefone || !email) {
    return { ok: false, error: "Preencha todos os campos obrigatórios." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Informe um e-mail válido." };
  }
  if (telefone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Informe um telefone válido com DDD." };
  }

  const urls = {
    efal: process.env.SHEETS_EFAL_WEBHOOK_URL,
    pos: process.env.SHEETS_POS_WEBHOOK_URL,
  } as const;

  const url = urls[payload.origem];
  if (!url) {
    console.error(
      `[inscricao] webhook não configurado para origem "${payload.origem}"`,
    );
    return { ok: false, error: "Configuração pendente" };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        curso: payload.curso,
        codigo: payload.codigo,
        nome,
        telefone,
        email,
        cupom: payload.cupom?.trim() ?? "",
      }),
      // Apps Script responde com redirect 302; seguir redirects é o padrão
      // do fetch.
    });
    return { ok: res.ok };
  } catch (e) {
    console.error("[inscricao] falha no envio", e);
    return { ok: false, error: "Falha no envio" };
  }
}
