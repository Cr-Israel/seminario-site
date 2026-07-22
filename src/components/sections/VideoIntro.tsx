"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const YOUTUBE_ID = "xbCCjIP_0kE";

/**
 * Apresentação do Seminário + mensagem do diretor, sobre fundo escuro para
 * criar contraste com as seções claras vizinhas. O vídeo do YouTube só carrega
 * ao clicar na capa (performance): antes disso mostramos a foto do diretor com
 * um botão de play.
 */
export default function VideoIntro() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bg-brand-950 py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[2fr_3fr] md:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
            Quem somos
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
            Uma casa de formação teológica reformada
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-100/80">
            O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton é uma
            instituição de ensino teológico e confissão de fé reformada,
            jurisdicionada à Igreja Presbiteriana do Brasil. Formamos pastores
            para o sagrado ministério na IPB e aperfeiçoamos líderes para a
            igreja local.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-100/80">
            Unimos piedade e reflexão acadêmica, sob o referencial da teologia
            reformada, com cuidado pela formação integral de cada aluno e de sua
            família.
          </p>
        </div>

        <div className="relative">
          {/* Brilho verde suave atrás do vídeo, para destacá-lo do fundo. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-xl bg-brand-400/20 blur-2xl"
          />
          <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-brand-950 shadow-xl shadow-black/30">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1`}
                title="Conheça o Seminário Simonton, mensagem do diretor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Reproduzir a mensagem do diretor"
                className="group absolute inset-0 h-full w-full"
              >
                <Image
                  src="/images/rev-sergio-kitagawa.png"
                  alt="Rev. Dr. Sergio Kitagawa, diretor do Seminário Simonton"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-top"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent"
                />
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-900 shadow-lg transition-transform group-hover:scale-110"
                >
                  <Play size={26} className="ml-1 fill-current" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <span className="block font-serif text-base font-bold text-white">
                    Rev. Dr. Sergio Kitagawa
                  </span>
                  <span className="block text-sm text-brand-100/80">
                    Diretor do Seminário Simonton
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
