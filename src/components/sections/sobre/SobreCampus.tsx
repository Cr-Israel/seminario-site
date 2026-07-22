"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { fotosCampus } from "@/data/campus";

/**
 * Galeria "Nossa casa" — os espaços da sede (Edifício Rev. Roberto Brasileiro
 * Silva, 2022), sobre fundo verde. Mosaico com a fachada em destaque e os
 * demais ambientes em grade; legenda sobreposta a cada foto. Clicar abre o
 * lightbox: <dialog> nativo (foco preso + Esc), com navegação por setas e
 * botões. Fotos reais do acervo (src/data/campus.ts).
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
  const [featured, ...rest] = fotosCampus;

  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      {/* Orb verde desfocado para dar profundidade ao fundo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-32 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
          Nossa casa
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
          Espaços que servem à formação
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-100/80">
          Desde 2022 o Seminário funciona no Edifício Rev. Roberto Brasileiro
          Silva, na Rua Isolina, 151, no Méier — capela, biblioteca e salas de
          aula a serviço da formação teológica.
        </p>

        <div className="mt-12 grid gap-5">
          {/* Fachada em destaque */}
          <GalleryTile
            photo={featured}
            onOpen={() => open(0)}
            className="h-72 sm:h-[26rem]"
            sizes="(max-width: 1024px) 100vw, 1152px"
            priority
          />

          {/* Demais ambientes */}
          <div className="grid gap-5 sm:grid-cols-3">
            {rest.map((photo, i) => (
              <GalleryTile
                key={photo.src}
                photo={photo}
                onOpen={() => open(i + 1)}
                className="h-56 sm:h-60"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            ))}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        aria-label="Galeria do campus, imagem ampliada"
        onClose={close}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="max-h-none max-w-none bg-transparent backdrop:bg-brand-950/90"
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

function GalleryTile({
  photo,
  onOpen,
  className,
  sizes,
  priority,
}: {
  photo: { src: string; alt: string; legenda: string };
  onOpen: () => void;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ampliar foto: ${photo.legenda}`}
      className={`group relative block w-full overflow-hidden rounded-lg ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${className ?? ""}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradiente para legibilidade da legenda + ícone de ampliar no hover. */}
      <span
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent"
      />
      <span
        aria-hidden
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
      >
        <Expand size={16} />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-4 text-left font-medium text-white">
        {photo.legenda}
      </span>
    </button>
  );
}
