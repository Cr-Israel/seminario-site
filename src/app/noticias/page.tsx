import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Newspaper } from "lucide-react";
import Header from "@/components/layout/Header";
import GreenGlassHero from "@/components/ui/GreenGlassHero";
import ContactCta from "@/components/sections/ContactCta";
import { noticias } from "@/data/noticias";
import { ogMetadata } from "@/lib/seo";

const title = "Notícias e vida acadêmica | Seminário Simonton";
const description =
  "Formaturas, eventos, semana teológica e avisos da secretaria — o que acontece no Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

const dateFormat = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });

/**
 * Listagem de notícias. Enquanto src/data/noticias.ts só tiver itens marcados
 * como `isPlaceholder`, a página entra no ar com o estado "em breve" em vez de
 * publicar texto de exemplo — assim o link do menu nunca cai num vazio nem
 * mostra [PLACEHOLDER] para visitante.
 */
export default function NoticiasPage() {
  const [destaque, ...demais] = noticias;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      <GreenGlassHero>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
          Vida acadêmica
        </p>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Notícias do Seminário
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          Formaturas, eventos, semana teológica e avisos da secretaria — o que
          tem acontecido na casa que forma pastores e líderes para a glória de
          Deus.
        </p>
      </GreenGlassHero>

      {noticias.length === 0 ? (
        <section className="py-24">
          <div className="mx-auto flex max-w-xl flex-col items-center px-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-800">
              <Newspaper size={28} aria-hidden />
            </span>
            <h2 className="mt-6 font-serif text-2xl font-bold text-brand-950">
              Em breve
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-600">
              As primeiras notícias estão sendo preparadas pela secretaria.
              Enquanto isso, acompanhe o Seminário pelas redes sociais ou fale
              com a gente.
            </p>
            <Link
              href="/#contato"
              className="mt-8 rounded-sm bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
            >
              Falar com a secretaria
            </Link>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            {/* Destaque: a mais recente ocupa a largura toda. */}
            <Link
              href={`/noticias/${destaque.slug}`}
              className="group grid gap-8 overflow-hidden rounded-sm border border-brand-900/10 bg-white transition-shadow hover:shadow-lg md:grid-cols-2"
            >
              {destaque.imagem ? (
                <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
                  <Image
                    src={destaque.imagem}
                    alt=""
                    width={960}
                    height={600}
                    priority
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
              ) : (
                <div aria-hidden className="min-h-48 bg-brand-950" />
              )}
              <div className="flex flex-col justify-center p-8 md:py-12 md:pr-12">
                <NoticiaMeta
                  categoria={destaque.categoria}
                  data={destaque.data}
                />
                <h2 className="mt-3 font-serif text-2xl font-extrabold leading-snug text-brand-950 sm:text-3xl">
                  {destaque.titulo}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-600">
                  {destaque.resumo}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-800">
                  Ler notícia
                  <ArrowRight size={16} aria-hidden />
                </span>
              </div>
            </Link>

            {demais.length > 0 && (
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {demais.map((noticia) => (
                  <Link
                    key={noticia.slug}
                    href={`/noticias/${noticia.slug}`}
                    className="group flex flex-col overflow-hidden rounded-sm border border-brand-900/10 bg-white transition-shadow hover:shadow-lg"
                  >
                    {noticia.imagem && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <Image
                          src={noticia.imagem}
                          alt=""
                          width={640}
                          height={360}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-7">
                      <NoticiaMeta
                        categoria={noticia.categoria}
                        data={noticia.data}
                      />
                      <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-brand-950">
                        {noticia.titulo}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                        {noticia.resumo}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-800">
                        Ler mais
                        <ArrowRight size={16} aria-hidden />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <ContactCta />
    </div>
  );
}

/** Categoria + data, o par que abre todo card e o topo da notícia. */
function NoticiaMeta({ categoria, data }: { categoria: string; data: string }) {
  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.15em] text-brand-700">
      <span>{categoria}</span>
      <span aria-hidden className="text-brand-900/25">
        ·
      </span>
      <time dateTime={data} className="text-stone-600">
        {dateFormat.format(new Date(`${data}T12:00:00`))}
      </time>
    </p>
  );
}
