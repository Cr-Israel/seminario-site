"use client";

import { useConsent, writeConsent } from "@/lib/consent";

/**
 * Painel "suas preferências de cookies" da página /lgpd — o lugar onde o
 * visitante revê ou revoga a decisão tomada no banner, como exige o art. 8º,
 * §5º da LGPD (o consentimento pode ser revogado a qualquer momento).
 *
 * Recusar aqui também apaga os cookies do Google Analytics já gravados
 * (ver clearAnalyticsCookies em src/lib/consent.ts).
 */
const statusText: Record<string, string> = {
  accepted:
    "Neste navegador, você aceitou os cookies de análise. Podemos medir visitas e navegação de forma agregada.",
  rejected:
    "Neste navegador, você recusou os cookies de análise. Nenhum script de rastreamento é carregado.",
  unset:
    "Neste navegador, você ainda não respondeu ao aviso de cookies. Enquanto isso, nenhum script de rastreamento é carregado.",
  unknown: "Carregando suas preferências neste navegador…",
};

export default function ConsentSettings() {
  const consent = useConsent();

  const buttonBase =
    "rounded-sm px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2";

  return (
    <div className="mt-6 rounded-sm border border-brand-900/10 bg-stone-50 p-6">
      <p aria-live="polite" className="text-sm leading-relaxed text-stone-600">
        {statusText[consent]}
      </p>

      {consent !== "unknown" && (
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          {consent !== "accepted" && (
            <button
              type="button"
              onClick={() => writeConsent("accepted")}
              className={`${buttonBase} bg-brand-700 text-white hover:bg-brand-800`}
            >
              Aceitar cookies de análise
            </button>
          )}
          {consent !== "rejected" && (
            <button
              type="button"
              onClick={() => writeConsent("rejected")}
              className={`${buttonBase} border border-brand-900/20 text-brand-900 hover:bg-stone-100`}
            >
              {consent === "accepted"
                ? "Revogar consentimento"
                : "Recusar cookies de análise"}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
