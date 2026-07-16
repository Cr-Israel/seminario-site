import Image from "next/image";

type CampusPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Ocupa duas colunas na grade (fotos panorâmicas de destaque). */
  wide?: boolean;
};

/**
 * Galeria "Nossa casa" — os espaços da nova sede (Edifício Rev. Roberto
 * Brasileiro Silva, 2022) ao lado de registros da antiga sede, na Rua
 * Joaquina Rosa. Fotos do acervo da instituição.
 */
const photos: CampusPhoto[] = [
  {
    src: "/images/capela.jpeg",
    alt: "Capela da nova sede do Seminário Simonton, com fileiras de poltronas de madeira, púlpito e cruz ao fundo",
    caption: "Capela da nova sede",
    wide: true,
  },
  {
    src: "/images/biblioteca.jpeg",
    alt: "Estantes de madeira repletas de livros na biblioteca do Seminário Simonton",
    caption: "Biblioteca",
  },
  {
    src: "/images/sala-de-aula.jpeg",
    alt: "Sala de aula da nova sede do Seminário Simonton, com carteiras estofadas e janelas amplas",
    caption: "Sala de aula da nova sede",
  },
  {
    src: "/images/frente-antiga-stps.jpeg",
    alt: "Fachada da antiga sede do Seminário Simonton, na Rua Joaquina Rosa, no Méier",
    caption: "Memória: a fachada da antiga sede, na Rua Joaquina Rosa",
  },
  {
    src: "/images/aula-antiga-sede.jpeg",
    alt: "Professor e alunos durante aula em uma sala da antiga sede do Seminário",
    caption: "Memória: aula na antiga sede",
  },
];

export default function SobreCampus() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Nossa casa
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Espaços que servem à formação
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
          Desde 2022 o Seminário funciona no Edifício Rev. Roberto Brasileiro
          Silva, na Rua Isolina, 151, no Méier — capela, biblioteca e salas de
          aula a serviço da formação teológica. E a memória da antiga sede
          segue fazendo parte da história desta casa.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={photo.wide ? "sm:col-span-2" : undefined}
            >
              <div className="relative h-64 overflow-hidden rounded-sm border border-brand-900/10 sm:h-72">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2.5 text-sm text-stone-500">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
