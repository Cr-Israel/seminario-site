import { whatsappHref } from "@/lib/whatsapp";

export default function OnlineHero() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
          Formação Teológica Online
        </p>
        <h1 className="font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
          Um caminho de formação para cada etapa do seu chamado
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
          São 7 cursos na EFAL e programas de pós-graduação, 100% online e com
          aula ao vivo, professor em tempo real, não gravação assíncrona. Da
          primeira formação de líderes ao aprofundamento acadêmico, com
          inscrição direta pelo Simonton.
        </p>

        <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#cursos"
            className="rounded-sm bg-brand-50 px-7 py-3.5 text-center text-sm font-medium text-brand-900 transition-colors hover:bg-white"
          >
            Encontre o seu curso
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-white/25 px-7 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Falar com a secretaria
          </a>
        </div>
      </div>
    </section>
  );
}
