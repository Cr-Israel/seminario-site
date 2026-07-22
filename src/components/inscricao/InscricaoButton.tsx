"use client";

import { useId, useRef, useState } from "react";
import { LoaderCircle, X } from "lucide-react";
import { enviarInscricao } from "@/app/actions/inscricao";

type Props = {
  /** Nome completo do curso — título do modal e coluna na planilha. */
  curso: string;
  /** Origem (campo `origem` em src/data/efal.ts | pos.ts) — define a planilha. */
  origem: "efal" | "pos";
  /** Código/aba na planilha (campo `codigo` em src/data/efal.ts | pos.ts). */
  codigo: string;
  className?: string;
  children?: React.ReactNode;
};

type Status = "idle" | "sending" | "success" | "error";

const emptyForm = { nome: "", telefone: "", email: "", cupom: "", website: "" };

/** Máscara BR progressiva: (21) 99999-9999. */
function maskPhone(value: string) {
  const d = value.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10)
    return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const inputClass =
  "w-full rounded-sm border border-stone-300 bg-white px-3.5 py-2.5 text-sm text-stone-800 outline-none transition-colors placeholder:text-stone-400 focus:border-brand-700";

/**
 * Botão "Inscrever-se" + modal de inscrição (EFAL e Pós). Envia para o
 * Google Sheets via server action (src/app/actions/inscricao.ts).
 */
export default function InscricaoButton({
  curso,
  origem,
  codigo,
  className,
  children,
}: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>("idle");

  const open = () => dialogRef.current?.showModal();
  const close = () => {
    dialogRef.current?.close();
    // Sucesso consumido: próxima abertura começa limpa. Erro mantém os dados.
    if (status === "success") {
      setForm(emptyForm);
      setStatus("idle");
    }
  };

  const set =
    (field: keyof typeof emptyForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({
        ...f,
        [field]:
          field === "telefone" ? maskPhone(e.target.value) : e.target.value,
      }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const result = await enviarInscricao({
      curso,
      origem,
      codigo,
      nome: form.nome,
      telefone: form.telefone,
      email: form.email,
      cupom: form.cupom || undefined,
      website: form.website || undefined,
    });
    setStatus(result.ok ? "success" : "error");
  };

  return (
    <>
      <button type="button" onClick={open} className={className}>
        {children ?? "Inscrever-se"}
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        onCancel={close}
        className="m-auto w-[min(92vw,28rem)] rounded-sm bg-white p-0 shadow-xl backdrop:bg-brand-950/60"
      >
        <div className="p-7">
          <div className="flex items-start justify-between gap-4">
            <h2
              id={titleId}
              className="font-serif text-xl font-bold leading-snug text-brand-950"
            >
              Inscrição — {curso}
            </h2>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="shrink-0 rounded-sm p-1 text-stone-400 transition-colors hover:text-stone-700"
            >
              <X size={20} aria-hidden />
            </button>
          </div>

          {status === "success" ? (
            <div className="mt-6">
              <p className="rounded-sm bg-brand-50 p-4 text-sm leading-relaxed text-brand-900">
                Inscrição recebida! A secretaria entrará em contato.
              </p>
              <button
                type="button"
                onClick={close}
                className="mt-5 w-full rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                Fechar
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label
                  htmlFor={`${titleId}-nome`}
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
                >
                  Nome completo
                </label>
                <input
                  id={`${titleId}-nome`}
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={set("nome")}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor={`${titleId}-telefone`}
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
                >
                  Telefone / WhatsApp
                </label>
                <input
                  id={`${titleId}-telefone`}
                  type="tel"
                  required
                  minLength={14}
                  autoComplete="tel"
                  placeholder="(21) 99999-9999"
                  value={form.telefone}
                  onChange={set("telefone")}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor={`${titleId}-email`}
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
                >
                  E-mail
                </label>
                <input
                  id={`${titleId}-email`}
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@email.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor={`${titleId}-cupom`}
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-stone-500"
                >
                  Código de cupom{" "}
                  <span className="normal-case text-stone-400">(opcional)</span>
                </label>
                <input
                  id={`${titleId}-cupom`}
                  type="text"
                  autoComplete="off"
                  value={form.cupom}
                  onChange={set("cupom")}
                  className={inputClass}
                />
              </div>

              {/* Honeypot anti-spam: invisível e fora do fluxo de teclado. */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={form.website}
                onChange={set("website")}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              {status === "error" && (
                <p role="alert" className="text-sm text-red-700">
                  Não foi possível enviar sua inscrição. Tente novamente em
                  instantes ou fale com a secretaria.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" && (
                  <LoaderCircle size={16} className="animate-spin" aria-hidden />
                )}
                {status === "sending" ? "Enviando…" : "Enviar inscrição"}
              </button>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
