import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800">
      <main className="relative flex flex-1 items-center overflow-hidden bg-brand-950 py-24 text-center">
        {/* brilho decorativo ao fundo */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-700/30 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center px-6">
          <Image
            src="/images/logo-branca-trim.png"
            alt="Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton"
            width={269}
            height={91}
            priority
            className="h-20 w-auto opacity-90 sm:h-24"
          />

          <p className="mt-10 font-serif text-7xl font-extrabold tracking-tight text-brand-50 sm:text-8xl">
            404
          </p>

          <h1 className="mt-4 font-serif text-2xl font-bold text-white sm:text-3xl">
            Página não encontrada
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-brand-100/75">
            A página que você procura pode ter sido movida, renomeada ou nunca
            ter existido. Continue navegando para conhecer nossos cursos e
            programas de formação teológica.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              <Home size={16} /> Voltar para o início
            </Link>
            <Link
              href="/cursos"
              className="inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium text-brand-100 ring-1 ring-white/20 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={16} /> Ver nossos cursos
            </Link>
          </div>
        </div>
      </main>

    </div>
  );
}
