import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import ContactCta from "@/components/sections/ContactCta";
import { noticias, getNoticia } from "@/data/noticias";
import { ogMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

const dateFormat = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });

/**
 * Leitura de uma notícia. Só existem rotas para o que está publicado — os
 * itens `isPlaceholder` de src/data/noticias.ts nem entram na lista, então
 * um slug de exemplo cai no 404 em vez de mostrar texto de exemplo.
 */
export function generateStaticParams() {
  return noticias.map((noticia) => ({ slug: noticia.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) return {};
  const title = `${noticia.titulo} | Seminário Simonton`;
  return {
    title,
    description: noticia.resumo,
    openGraph: {
      ...ogMetadata(title, noticia.resumo),
      type: "article" as const,
      publishedTime: noticia.data,
    },
  };
}

export default async function NoticiaPage({ params }: { params: Params }) {
  const { slug } = await params;
  const noticia = getNoticia(slug);
  if (!noticia) notFound();

  const outras = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      <article>
        <header className="bg-brand-950 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-200/90 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} aria-hidden />
              Todas as notícias
            </Link>
            <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.15em] text-brand-200/90">
              <span>{noticia.categoria}</span>
              <span aria-hidden className="text-white/25">
                ·
              </span>
              <time dateTime={noticia.data}>
                {dateFormat.format(new Date(`${noticia.data}T12:00:00`))}
              </time>
            </p>
            <h1 className="mt-4 font-serif text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
              {noticia.titulo}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-brand-100/80">
              {noticia.resumo}
            </p>
          </div>
        </header>

        {noticia.imagem && (
          <div className="mx-auto max-w-4xl px-6">
            <Image
              src={noticia.imagem}
              alt=""
              width={1280}
              height={720}
              priority
              className="-mt-10 w-full rounded-sm object-cover shadow-xl"
            />
          </div>
        )}

        <div className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            {noticia.corpo.map((paragrafo, i) => (
              <p
                key={i}
                className="mb-6 text-base leading-[1.8] text-stone-600 last:mb-0"
              >
                {paragrafo}
              </p>
            ))}
          </div>
        </div>
      </article>

      {outras.length > 0 && (
        <section className="border-t border-brand-900/10 bg-brand-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif text-2xl font-extrabold text-brand-950">
              Outras notícias
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {outras.map((outra) => (
                <Link
                  key={outra.slug}
                  href={`/noticias/${outra.slug}`}
                  className="group flex flex-col rounded-sm border border-brand-900/10 bg-white p-7 transition-shadow hover:shadow-lg"
                >
                  <time
                    dateTime={outra.data}
                    className="text-xs font-medium uppercase tracking-[0.15em] text-brand-700"
                  >
                    {dateFormat.format(new Date(`${outra.data}T12:00:00`))}
                  </time>
                  <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-brand-950">
                    {outra.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                    {outra.resumo}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors group-hover:text-brand-800">
                    Ler mais
                    <ArrowRight size={16} aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCta />
    </div>
  );
}
