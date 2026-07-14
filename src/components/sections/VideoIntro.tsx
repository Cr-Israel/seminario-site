export default function VideoIntro() {
  return (
    <section className="bg-white py-28">
      {/* Texto à esquerda, vídeo em destaque à direita: a coluna do vídeo é
          maior (3/5) para dar ênfase à apresentação do diretor. */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[2fr_3fr] md:gap-16">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Mensagem do diretor
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Conheça o Seminário Simonton
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Rev. Dr. Sergio Kitagawa, diretor do Seminário, apresenta um pouco
            da história, da identidade confessional e da proposta de formação
            do STPS.
          </p>
          <p className="mt-4 text-sm text-stone-500">
            Rev. Dr. Sergio Kitagawa, diretor do Seminário Simonton
          </p>
        </div>

        <div className="relative">
          {/* Brilho verde suave atrás do vídeo, para destacá-lo do fundo. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-xl bg-brand-400/20 blur-2xl"
          />
          <div className="relative aspect-video overflow-hidden rounded-xl border border-brand-900/10 bg-brand-950 shadow-xl shadow-brand-950/15">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/xbCCjIP_0kE"
              title="Conheça o Seminário Simonton, mensagem do diretor"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
