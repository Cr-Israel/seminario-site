import { ArrowRight, PlayCircle } from "lucide-react";

/**
 * Hero da landing do CIT — layout de duas colunas (texto à esquerda, vídeo de
 * apresentação 16:9 ao lado), sobre fundo brand-950. Server Component.
 */
export default function CitHero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
            EFAL · Curso Introdutório de Teologia
          </p>
          <h1 className="mt-6 font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            Dê o seu primeiro passo na teologia reformada.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            Uma formação sólida, 100% online e ao vivo, para líderes e cristãos
            que querem ir além da Escola Dominical, o degrau anterior ao Curso
            Livre de Bacharel em Teologia.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#matricula"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Quero me inscrever <ArrowRight size={16} />
            </a>
            <a
              href="#conteudo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <PlayCircle size={16} /> Ver o conteúdo do curso
            </a>
          </div>
        </div>

        {/* Vídeo de apresentação — player responsivo 16:9 ao lado do texto */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-2xl shadow-brand-950/40">
          <div className="aspect-video">
            {/* TODO: trocar pelo vídeo real de apresentação do CIT */}
            <iframe
              src="https://www.youtube.com/embed/PLACEHOLDER"
              title="Vídeo de apresentação do Curso Introdutório de Teologia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
