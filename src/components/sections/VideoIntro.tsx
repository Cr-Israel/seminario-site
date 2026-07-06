export default function VideoIntro() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Mensagem do diretor
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Conheça o Seminário Simonton
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-stone-600">
          Rev. Sérgio Kitagawa, diretor do Seminário, apresenta um pouco da
          história, da identidade confessional e da proposta de formação do
          STPS.
        </p>

        <div className="relative mt-10 aspect-video overflow-hidden rounded-sm border border-brand-900/10 bg-brand-950 shadow-xl shadow-brand-950/10">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube-nocookie.com/embed/xbCCjIP_0kE"
            title="Conheça o Seminário Simonton — mensagem do diretor"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <p className="mt-4 text-sm text-stone-500">
          Rev. Sérgio Kitagawa — Diretor do Seminário Simonton
        </p>
      </div>
    </section>
  );
}
