import Image from "next/image";

/**
 * Apresentação do diretor — conteúdo e foto trazidos da página "Sobre nós"
 * do site antigo.
 */
export default function SobreDirector() {
  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Direção
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Quem dirige o Seminário
        </h2>

        <div className="mt-12 flex flex-col items-start gap-10 rounded-sm border border-brand-900/10 bg-white p-6 sm:p-10 md:flex-row md:gap-14">
          <div className="w-full max-w-[17rem] shrink-0 overflow-hidden rounded-xl md:max-w-[19rem]">
            <Image
              src="/images/rev-sergio-kitagawa.png"
              alt="Rev. Sergio Kitagawa, diretor do Seminário Simonton"
              width={1119}
              height={1233}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h3 className="font-serif text-2xl font-bold text-brand-950 sm:text-3xl">
              Rev. Sergio Kitagawa
            </h3>
            <p className="mt-1 text-sm font-medium text-brand-700">Diretor</p>

            <p className="mt-6 text-base leading-relaxed text-stone-600">
              Ministro da Igreja Presbiteriana do Brasil desde 2010, o Rev.
              Sergio Kitagawa foi pastor auxiliar da 1ª Igreja Presbiteriana de
              Niterói por 14 anos (2009–2024) e atua na Igreja Presbiteriana do
              Sinai.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              É doutor em História Social pela UERJ, graduado em História pela
              UFF e em Teologia pelo próprio Seminário Simonton, com
              pós-graduação e mestrado em Teologia Histórica pelo Centro
              Presbiteriano de Pós-Graduação Andrew Jumper.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Natural de Niterói, é casado com Jessica, pai de Benjamin — e fã
              de ficção científica e literatura de fantasia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
