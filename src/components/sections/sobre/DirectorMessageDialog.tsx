"use client";

import { useRef, type MouseEvent } from "react";
import { BookOpenText, X } from "lucide-react";

import { directorMessageParagraphs } from "@/data/director-message";

/**
 * Botão "Ler a mensagem do diretor" + modal com o texto integral da palavra
 * do diretor (lida na posse, em 01/12/2022). Substitui a página separada do
 * site antigo. Usa <dialog> nativo: fecha com Esc, prende o foco e permite
 * fechar clicando no fundo escurecido.
 */
export default function DirectorMessageDialog() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    // Cliques no conteúdo têm como alvo os elementos internos; só o clique
    // no backdrop tem o próprio <dialog> como alvo.
    if (event.target === dialogRef.current) dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
      >
        <BookOpenText size={16} /> Ler a mensagem do diretor
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="m-auto max-h-[85vh] w-[min(100vw-2rem,44rem)] overflow-y-auto rounded-xl border border-white/60 bg-white p-0 shadow-2xl backdrop:bg-brand-950/50 backdrop:backdrop-blur-sm"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-900/10 bg-white/90 px-6 py-5 backdrop-blur sm:px-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              Mensagem do diretor
            </span>
            <h3 className="mt-1 font-serif text-xl font-bold text-brand-950 sm:text-2xl">
              Palavra do diretor
            </h3>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Fechar mensagem do diretor"
            className="mt-1 rounded-full p-2 text-stone-500 transition-colors hover:bg-brand-50 hover:text-brand-900"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base font-medium leading-relaxed text-brand-950">
            Amados irmãos,
          </p>
          {directorMessageParagraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="mt-4 text-base leading-relaxed text-stone-600"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-8 text-sm text-stone-500">
            Rio de Janeiro, 01 de dezembro de 2022.
          </p>
          <p className="mt-1 font-serif text-lg font-bold text-brand-950">
            Rev. Sergio Tuguio Ladeira Kitagawa
          </p>
        </div>
      </dialog>
    </>
  );
}
