"use server";

/**
 * Formulário de contato da Home (seção #contato) → Google Sheets via Apps
 * Script, no mesmo padrão do fluxo de inscrições (src/app/actions/inscricao.ts).
 *
 * A URL fica em SHEETS_CONTATO_WEBHOOK_URL — variável PRÓPRIA, de servidor
 * (nunca NEXT_PUBLIC_): a planilha de contatos é separada da de inscrições.
 * Sem a variável, o site builda e roda normalmente e o formulário mostra o
 * estado de erro amigável.
 */
export interface ContatoPayload {
  nome: string;
  telefone: string;
  email: string;
  cursoInteresse: string;
  mensagem?: string;
  /** Honeypot anti-spam — humanos nunca preenchem. */
  website?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function enviarContato(
  payload: ContatoPayload,
): Promise<{ ok: boolean; error?: string }> {
  // Honeypot preenchido: bot — descarta em silêncio como sucesso.
  if (payload.website) return { ok: true };

  const nome = payload.nome?.trim() ?? "";
  const telefone = payload.telefone?.trim() ?? "";
  const email = payload.email?.trim().toLowerCase() ?? "";

  if (!nome || !telefone || !email) {
    return { ok: false, error: "Preencha todos os campos obrigatórios." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Informe um e-mail válido." };
  }
  if (telefone.replace(/\D/g, "").length < 10) {
    return { ok: false, error: "Informe um telefone válido com DDD." };
  }

  const url = process.env.SHEETS_CONTATO_WEBHOOK_URL;
  if (!url) {
    console.error("[contato] SHEETS_CONTATO_WEBHOOK_URL não configurada");
    return { ok: false, error: "Configuração pendente" };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        telefone,
        email,
        cursoInteresse: payload.cursoInteresse,
        mensagem: payload.mensagem?.trim() ?? "",
      }),
      // Apps Script responde com redirect 302; seguir redirects é o padrão
      // do fetch.
    });
    return { ok: res.ok };
  } catch (e) {
    console.error("[contato] falha no envio", e);
    return { ok: false, error: "Falha no envio" };
  }
}
