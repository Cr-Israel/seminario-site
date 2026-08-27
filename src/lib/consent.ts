import { useSyncExternalStore } from "react";

/**
 * Consentimento de cookies/rastreamento (LGPD, art. 7º, I).
 *
 * O modelo é OPT-IN ESTRITO: enquanto o visitante não clicar em "Aceitar",
 * nenhum script do Google Analytics é carregado e nenhum cookie de análise é
 * gravado. A decisão fica no localStorage — não em cookie —, porque é uma
 * preferência do navegador que o servidor não precisa ler.
 *
 * O estado é lido com useSyncExternalStore (mesmo padrão do ThemeToggle):
 * quem escreve dispara um evento próprio, e o banner, a página da LGPD e o
 * componente do Analytics reagem juntos, inclusive entre abas.
 *
 * Este módulo só é importado por client components — os hooks abaixo já
 * rodam dentro dessa fronteira.
 */

/** "accepted" libera o Analytics; "rejected" o mantém desligado. */
export type ConsentStatus = "accepted" | "rejected";

/**
 * Estado observável do consentimento:
 * - "unknown": ainda renderizando no servidor, onde não dá para ler o
 *   navegador. Nada de banner no HTML — evita o flash para quem já respondeu.
 * - "unset": já no cliente, e o visitante ainda não decidiu → mostra o banner.
 */
export type ConsentState = ConsentStatus | "unset" | "unknown";

export const CONSENT_STORAGE_KEY = "lgpd-consent";

/** Evento disparado na própria aba — o `storage` só avisa as OUTRAS abas. */
const CONSENT_EVENT = "lgpd-consent-change";

function isStatus(value: unknown): value is ConsentStatus {
  return value === "accepted" || value === "rejected";
}

/** Decisão já registrada, ou "unset" enquanto o visitante não respondeu. */
export function readConsent(): ConsentStatus | "unset" {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return isStatus(stored) ? stored : "unset";
  } catch {
    /* localStorage indisponível (modo privado etc.) — trata como sem decisão */
    return "unset";
  }
}

/** Grava a decisão e avisa banner, Analytics e a página da LGPD. */
export function writeConsent(status: ConsentStatus) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    /* sem localStorage a decisão vale só para esta navegação */
  }
  // Revogar o consentimento tem de apagar o que já foi gravado, não só parar
  // de gravar dali em diante.
  if (status === "rejected") clearAnalyticsCookies();
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/** Volta ao estado "ainda não respondeu" — reabre o banner. */
export function resetConsent() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    /* nada a remover */
  }
  clearAnalyticsCookies();
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/**
 * Apaga os cookies do Google Analytics (`_ga`, `_ga_<id>`, `_gid`, `_gat*`).
 * O GA grava no domínio registrável, então a remoção é tentada no host atual
 * e em cada sufixo com ponto (".seminariosimonton.com.br"), que é onde o
 * cookie de fato mora.
 */
export function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0]?.trim())
    .filter(
      (name): name is string =>
        Boolean(name) && /^(_ga|_gid$|_gat)/.test(name),
    );
  if (names.length === 0) return;

  const parts = location.hostname.split(".");
  const domains = ["", location.hostname];
  for (let i = 0; i < parts.length - 1; i++) {
    domains.push(`.${parts.slice(i).join(".")}`);
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT${
        domain ? `; domain=${domain}` : ""
      }`;
    }
  }
}

/** Assina mudanças da decisão — nesta aba (evento próprio) e nas outras. */
function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getServerSnapshot(): ConsentState {
  return "unknown";
}

/** Estado atual do consentimento, sincronizado com o localStorage. */
export function useConsent(): ConsentState {
  return useSyncExternalStore(subscribe, readConsent, getServerSnapshot);
}
