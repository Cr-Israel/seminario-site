import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { noticias } from "@/data/noticias";

/**
 * Notícias e vida acadêmica. Fica oculta até existir conteúdo real em
 * src/data/noticias.ts — vire a chave abaixo para publicar.
 */
// TODO(conteúdo): ligar quando houver notícias reais.
const SHOW_NEWS = false;

const dateFormat = new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" });

export default function News() {
  if (!SHOW_NEWS) return null;

  return (
    <section className="bg-brand-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Vida acadêmica
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Notícias e eventos
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {noticias.map((noticia) => (
            <Link
              key={noticia.titulo}
              href={noticia.href}
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
                <time
                  dateTime={noticia.data}
                  className="text-xs font-medium uppercase tracking-[0.15em] text-brand-700"
                >
                  {dateFormat.format(new Date(`${noticia.data}T12:00:00`))}
                </time>
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
      </div>
    </section>
  );
}
