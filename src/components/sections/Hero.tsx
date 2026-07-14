import Image from "next/image";

import { whatsappHref } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 pb-28 pt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl" />

      <Image
        src="/images/icone-stps-branca.png"
        alt=""
        aria-hidden="true"
        width={900}
        height={900}
        priority
        className="pointer-events-none absolute left-[-22%] top-1/2 z-0 h-[135%] w-auto -translate-y-1/2 select-none opacity-[0.14] sm:left-[-16%] sm:opacity-[0.16]"
      />

      {/* Conteúdo à direita, porém alinhado à esquerda internamente: ml-auto
          empurra o bloco para o lado direito, e o texto ganha uma borda
          esquerda reta perto do centro — sem o aspecto "jogado". */}
      <div className="relative z-10 px-6 md:px-10 lg:px-16">
        <div className="ml-auto flex max-w-2xl flex-col items-start text-left md:mr-20 lg:mr-44">
          <p className="mb-6 inline-flex items-center gap-2 self-center rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
            O Seminário Reformado do Rio de Janeiro
          </p>

          <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl">
            Uma casa de ensino e formação, em busca da excelência
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            Há mais de quatro décadas formando pastores e líderes para a glória
            de Deus, com sólido conhecimento bíblico-teológico e compromisso com
            a Confissão de Fé de Westminster.
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#cursos"
              className="w-full rounded-sm bg-brand-50 px-7 py-3.5 text-center text-sm font-medium text-brand-900 transition-colors hover:bg-white sm:w-auto"
            >
              Conheça nossos cursos
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Falar com a secretaria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
