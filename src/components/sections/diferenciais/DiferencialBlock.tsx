import Image from "next/image";
import type { Diferencial } from "@/data/diferenciais";

/**
 * Seção detalhada de um diferencial. O `index` controla o ritmo da página:
 * fundos alternam stone-50 (par) / branco (ímpar) e a imagem troca de lado a
 * cada bloco (zigue-zague). Sem imagem, o lado visual vira um painel escuro
 * com o ícone grande — mesmo tom do card de Deuteronômio em Differentiators.
 */
export default function DiferencialBlock({
  item,
  index,
}: {
  item: Diferencial;
  index: number;
}) {
  const { id, icon: Icon, title, paragraphs, image } = item;
  const odd = index % 2 === 1;

  return (
    <section
      id={id}
      className={`scroll-mt-24 ${odd ? "bg-white" : ""}`}
      aria-labelledby={`${id}-titulo`}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:gap-16">
        <div className={odd ? "md:order-2" : ""}>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-800">
            <Icon size={22} strokeWidth={1.75} aria-hidden />
          </span>
          <span className="mt-6 block font-serif text-sm font-bold text-brand-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            id={`${id}-titulo`}
            className="mt-2 font-serif text-2xl font-extrabold text-brand-950 sm:text-3xl"
          >
            {title}
          </h2>
          {paragraphs.map((text) => (
            <p
              key={text.slice(0, 32)}
              className="mt-5 text-base leading-relaxed text-stone-600"
            >
              {text}
            </p>
          ))}
        </div>

        <div className={odd ? "md:order-1" : ""}>
          {image ? (
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-brand-900/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 552px"
                  className="object-cover"
                />
              </div>
              {image.caption && (
                <figcaption className="mt-3 text-sm text-stone-500">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ) : (
            <div
              aria-hidden
              className="flex aspect-[4/3] items-center justify-center rounded-sm bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950"
            >
              <Icon
                size={96}
                strokeWidth={1}
                className="text-brand-200/80"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
