"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { fotosCampus } from "@/data/campus";

/**
 * Galeria "Nossa casa" — os espaços da nova sede (Edifício Rev. Roberto
 * Brasileiro Silva, 2022) ao lado de registros da antiga sede. Fotos reais do
 * acervo (src/data/campus.ts). Clicar numa foto abre o lightbox: <dialog>
 * nativo (foco preso + Esc), com navegação por setas do teclado e botões.
 */
export default function SobreCampus() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => {
    dialogRef.current?.close();
    setIndex(null);
  };
  const go = (delta: number) =>
    setIndex((i) =>
      i === null ? i : (i + delta + fotosCampus.length) % fotosCampus.length,
    );

  // Setas do teclado navegam entre as fotos enquanto o lightbox está aberto.
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [index]);

  const current = index === null ? null : fotosCampus[index];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Nossa casa
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Espaços que servem à formação
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
          Desde 2022 o Seminário funciona no Edifício Rev. Roberto Brasileiro
          Silva, na Rua Isolina, 151, no Méier — capela, biblioteca e salas de
          aula a serviço da formação teológica. E a memória da antiga sede
          segue fazendo parte da história desta casa.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fotosCampus.map((photo, i) => (
            <figure
              key={photo.src}
              className={photo.wide ? "sm:col-span-2" : undefined}
            >
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`Ampliar foto: ${photo.legenda}`}
                className="group relative block h-64 w-full overflow-hidden rounded-sm border border-brand-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700 sm:h-72"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
              <figcaption className="mt-2.5 text-sm text-stone-500">
                {photo.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Galeria do campus, imagem ampliada"
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="max-h-none max-w-none bg-transparent backdrop:bg-brand-950/80"
      >
        {current && (
          <div className="fixed inset-0 flex flex-col items-center justify-center p-4 sm:p-8">
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} aria-hidden />
            </button>

            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft size={24} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima foto"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight size={24} aria-hidden />
            </button>

            <figure className="flex max-h-full max-w-5xl flex-col items-center">
              <div className="relative h-[75vh] w-[90vw] max-w-5xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm text-brand-100/90">
                {current.legenda}
              </figcaption>
            </figure>
          </div>
        )}
      </dialog>
    </section>
  );
}
