"use server";

/**
 * Inscrição de curso (EFAL e Pós) → Google Sheets via Apps Script.
 *
 * A URL do webhook fica em SHEETS_WEBHOOK_URL (variável de ambiente do
 * servidor — nunca NEXT_PUBLIC_, para não expor no cliente). O campo `codigo`
 * identifica a aba da planilha que recebe a inscrição (CIT, CAL, POS-…),
 * padronizado no arquivo de dados de cada curso (src/data/efal.ts e pos.ts).
 *
 * A planilha e o Apps Script são configurados manualmente pelo dono do
 * projeto (guia próprio); sem a variável, o site builda e roda normalmente e
 * o modal mostra o estado de erro amigável.
 */
export interface InscricaoPayload {
  /** Nome completo do curso (ex.: "Curso Introdutório de Teologia"). */
  curso: string;
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

  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) {
    console.error("[inscricao] SHEETS_WEBHOOK_URL não configurada");
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
