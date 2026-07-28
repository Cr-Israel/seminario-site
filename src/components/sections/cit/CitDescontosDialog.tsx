"use client";

import { useId, useRef } from "react";
import { Tag, X } from "lucide-react";
import {
  bolsaIntegral,
  descontosPorCategoria,
  descontosPorGrupo,
  regraGrupo,
  type Desconto,
} from "@/data/citDescontos";

/** Linha "quem tem direito · desconto · parcela final". */
function DescontoRow({ item }: { item: Desconto }) {
  return (
    <li className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-brand-900/10 py-2.5 last:border-0">
      <span className="text-sm text-stone-700">{item.label}</span>
      <span className="flex items-baseline gap-2.5">
        <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-800">
          {item.desconto}
        </span>
        <span className="text-sm font-medium text-brand-950">
          {item.parcela}
        </span>
      </span>
    </li>
  );
}

/**
 * Botão + modal com a política de descontos do CIT, usado nos CTAs da landing.
 * Segue o mesmo padrão do InscricaoButton: <dialog> nativo, que já entrega
 * foco preso, Esc e fechamento por clique no fundo.
 *
 * `className` permite ao CTA escolher a aparência do gatilho (link discreto
 * sobre fundo verde, botão sobre fundo claro etc.).
 */
export default function CitDescontosDialog({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className={className}
      >
        {children ?? (
          <>
            <Tag size={15} aria-hidden="true" />
            Ver política de descontos
          </>
        )}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="m-auto max-h-[85vh] w-[min(92vw,34rem)] overflow-y-auto rounded-sm bg-white p-0 shadow-xl backdrop:bg-brand-950/60"
      >
        <div className="p-7 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2
                id={titleId}
                className="font-serif text-xl font-bold leading-snug text-brand-950"
              >
                Política de descontos
              </h2>
              <p className="mt-1 text-sm text-stone-500">
                Valor cheio: 6x de R$ 159,90
              </p>
            </div>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Fechar"
              className="shrink-0 rounded-sm p-1 text-stone-400 transition-colors hover:text-stone-700"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <section className="mt-7">
            <h3 className="text-xs font-medium uppercase tracking-wider text-brand-700">
              Por grupo de inscritos
            </h3>
            <ul className="mt-2">
              {descontosPorGrupo.map((item) => (
                <DescontoRow key={item.label} item={item} />
              ))}
            </ul>
            <p className="mt-2.5 text-xs leading-relaxed text-stone-500">
              {regraGrupo}
            </p>
          </section>

          <section className="mt-7">
            <h3 className="text-xs font-medium uppercase tracking-wider text-brand-700">
              Por categoria
            </h3>
            <ul className="mt-2">
              {descontosPorCategoria.map((item) => (
                <DescontoRow key={item.label} item={item} />
              ))}
            </ul>
          </section>

          <section className="mt-7 rounded-sm bg-brand-50 p-4">
            <h3 className="text-xs font-medium uppercase tracking-wider text-brand-700">
              Bolsa integral
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-brand-900">
              {bolsaIntegral}
            </p>
          </section>

          <p className="mt-6 text-xs leading-relaxed text-stone-500">
            Informe seu caso no campo de cupom da inscrição ou fale com a
            secretaria: ela confirma o desconto aplicável antes da matrícula.
          </p>
        </div>
      </dialog>
    </>
  );
}
