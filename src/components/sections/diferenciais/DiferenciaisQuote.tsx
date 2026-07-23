/**
 * Pull quote confessional — respiro escuro no meio da página, no padrão do
 * card de Deuteronômio 31:6 usado em Differentiators, aqui em faixa completa.
 */
export default function DiferenciaisQuote() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />
      <figure className="relative mx-auto max-w-3xl px-6 text-center">
        <blockquote className="font-serif text-2xl italic leading-snug text-white sm:text-3xl">
          &ldquo;Procura apresentar-te a Deus aprovado, como obreiro que não
          tem de que se envergonhar, que maneja bem a palavra da
          verdade.&rdquo;
        </blockquote>
        <figcaption className="mt-6 text-sm text-brand-200/70">
          2 Timóteo 2:15
        </figcaption>
      </figure>
    </section>
  );
}
