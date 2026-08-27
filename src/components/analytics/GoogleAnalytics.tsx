"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "@/lib/consent";

/**
 * Google Analytics 4 com carregamento OPT-IN (LGPD, art. 7º, I).
 *
 * O gtag.js só entra na página depois que o visitante aceita os cookies no
 * banner (src/components/layout/CookieBanner.tsx). Enquanto a resposta não
 * vem — ou se ela for "recusar" — este componente não renderiza nada e
 * nenhuma requisição sai para o Google.
 *
 * Sem NEXT_PUBLIC_GA_MEASUREMENT_ID configurada, o Analytics fica desligado e
 * o site builda e roda normalmente (mesmo padrão dos webhooks do Sheets).
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  const consent = useConsent();
  const pathname = usePathname();
  const enabled = Boolean(GA_ID) && consent === "accepted";

  /**
   * O `config` inicial já dispara o primeiro page_view; a partir daí, cada
   * troca de rota do App Router precisa de um evento manual — a navegação é
   * client-side e o gtag não percebe sozinho.
   */
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if (!enabled) {
      lastPath.current = null;
      return;
    }
    if (lastPath.current === null) {
      lastPath.current = pathname; // já contabilizado pelo config
      return;
    }
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/* Snippet padrão do gtag. O GA4 já não registra o IP do visitante
          (o antigo `anonymize_ip` do Universal Analytics é ignorado), então
          não há flag extra a passar aqui. */}
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js',new Date());
gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
