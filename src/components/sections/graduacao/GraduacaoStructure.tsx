import Image from "next/image";
import { estruturaAndares, enderecoStps } from "@/data/graduacao";
import { fotosCampus } from "@/data/campus";

/**
 * "Estrutura" — descrição real do prédio principal (por nível) e galeria com
 * as fotos reais do acervo (fachada, capela, biblioteca, sala de aula).
 * TODO(conteúdo): quando houver mais fotos do campus, salvá-las em
 * /public/images/campus/ e ampliar a galeria abaixo.
 */
export default function GraduacaoStructure() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
              Nossa estrutura
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
              Uma casa própria a serviço da formação
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-100/80">
              Desde 2022, o Seminário tem sede própria: o Edifício Rev. Roberto
              Brasileiro Silva, no Méier. São quatro andares dedicados ao ensino,
              à pesquisa e à vida comunitária.
            </p>

            <dl className="mt-8 space-y-5">
              {estruturaAndares.map(({ nivel, text }) => (
                <div
                  key={nivel}
                  className="border-l-2 border-brand-400/40 pl-5"
                >
                  <dt className="font-serif text-base font-bold text-white">
                    {nivel}
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-brand-100/80">
                    {text}
                  </dd>
                </div>
              ))}
            </dl>

            <address className="mt-8 text-sm not-italic leading-relaxed text-brand-100/70">
              {enderecoStps.logradouro}, {enderecoStps.cidade}
              <br />
              {enderecoStps.cep} · CNPJ {enderecoStps.cnpj}
            </address>
          </div>

          <div className="grid grid-cols-2 gap-4 self-start">
            {fotosCampus.map((foto, i) => (
              <figure
                key={foto.src}
                className={`relative overflow-hidden rounded-sm border border-white/10 ${
                  i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 552px"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-950/80 to-transparent p-3 text-xs font-medium text-white">
                  {foto.legenda}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
