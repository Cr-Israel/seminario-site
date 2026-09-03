/**
 * "Por que Isabel" — a referência bíblica que dá nome ao projeto. Fundo
 * branco, texto corrido e a passagem em destaque no fim: a casa de Isabel
 * como lugar de acolhimento, que é exatamente o que o projeto quer ser.
 */
export default function CasaDeIsabelNome() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Por que Isabel
        </span>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Uma casa que acolheu quem foi surpreendida pelo chamado
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-stone-600">
            <p>
              Isabel, mulher do sacerdote Zacarias, teve por missão ser esposa,
              mãe e cidadã. Compromissos, expectativas e frustrações, surpresas
              e milagres fizeram parte da vida daquela mulher — e podem fazer
              parte da vida das esposas e futuras esposas dos seminaristas em
              nossos dias.
            </p>
            <p>
              Além disso, a casa de Isabel foi espaço de acolhimento e apoio a
              Maria, quando ela se deparou com as mudanças que o chamado do
              Senhor lhe trouxe. De igual modo, este projeto existe para
              oferecer acolhimento e apoio à mulher cuja vida é diretamente
              afetada por uma vocação pastoral em curso.
            </p>
          </div>

          <figure className="rounded-sm border border-brand-900/10 bg-brand-50/60 p-7 sm:p-8">
            <blockquote className="font-serif text-lg italic leading-relaxed text-brand-900">
              &ldquo;Naqueles dias, levantou-se Maria e foi apressadamente à
              região montanhosa, a uma cidade de Judá; entrou em casa de
              Zacarias e saudou Isabel.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm font-medium text-brand-700">
              Lucas 1:39-40
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
