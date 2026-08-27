"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { useConsent, writeConsent } from "@/lib/consent";

/**
 * Banner de consentimento de cookies (LGPD).
 *
 * Aparece só para quem ainda não respondeu e some assim que a pessoa decide —
 * a decisão fica no localStorage (src/lib/consent.ts) e pode ser mudada
 * depois na página /lgpd. Recusar é tão fácil quanto aceitar: os dois botões
 * têm o mesmo peso, sem "aceitar" destacado e "recusar" escondido num link.
 *
 * No mobile é uma faixa no rodapé; a partir de `sm` vira um cartão no canto
 * inferior esquerdo, longe do botão do WhatsApp e sem cobrir o conteúdo.
 */
export default function CookieBanner() {
  const consent = useConsent();
  const open = consent === "unset";

  /**
   * Marca o <html> enquanto o banner está aberto: no mobile a faixa ocupa o
   * canto do FAB do WhatsApp, que se esconde por uma regra em globals.css.
   */
  useEffect(() => {
    if (!open) return;
    document.documentElement.setAttribute("data-consent-banner", "open");
    return () => document.documentElement.removeAttribute("data-consent-banner");
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-md sm:p-0"
    >
      <div className="rounded-sm border border-brand-900/10 bg-white p-6 shadow-xl shadow-brand-950/10">
        <div className="flex items-center gap-2.5">
          <Cookie size={18} className="shrink-0 text-brand-700" aria-hidden />
          <h2
            id="cookie-banner-title"
            className="font-serif text-base font-bold text-brand-950"
          >
            Sua privacidade
          </h2>
        </div>

        <p
          id="cookie-banner-description"
          className="mt-3 text-sm leading-relaxed text-stone-600"
        >
          Usamos cookies de análise (Google Analytics) para entender como as
          pessoas encontram e usam o site, e assim melhorá-lo. Eles só são
          ativados se você aceitar — nada é rastreado até lá.{" "}
          <Link
            href="/lgpd#cookies"
            className="font-medium text-brand-800 underline underline-offset-4 transition-colors hover:text-brand-900"
          >
            Saiba mais
          </Link>
          .
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => writeConsent("accepted")}
            className="rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 sm:flex-1"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => writeConsent("rejected")}
            className="rounded-sm border border-brand-900/20 px-5 py-2.5 text-sm font-medium text-brand-900 transition-colors hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 focus-visible:ring-offset-2 sm:flex-1"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
