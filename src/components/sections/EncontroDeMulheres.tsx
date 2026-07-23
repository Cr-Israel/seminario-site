import Image from "next/image";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";

const INSCRICAO_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdmQrxerzFIiSswp7DCT-mLXMcOpeNOR80081tGh1jjycnI7w/viewform";

/**
 * Evento "Encontro de Mulheres" do projeto Casa de Isabel (08/08/2026).
 * Bloco temporário na Home: à esquerda a apresentação com data, horário e o
 * link de inscrição; à direita a programação em card de vidro fosco sobre
 * orbes verdes (versão clara do vidro dos depoimentos). Remover (ou trocar
 * pelo próximo evento) depois que o encontro acontecer.
 */
type Momento = {
  hora: string;
  titulo: string;
  detalhe?: string;
  quem?: string;
  destaque?: boolean;
};

const programacao: Momento[] = [
  { hora: "8h", titulo: "Chegada e credenciamento" },
  { hora: "8h30", titulo: "Abertura" },
  {
    hora: "9h",
    titulo: "Drops 1",
    detalhe: "Palavra sobre a vivência da mulher chamada para servir",
  },
  {
    hora: "9h10",
    titulo: "Palestra 1",
    detalhe: "Graça em ação: a vocação no serviço compartilhado!",
    quem: "Psicóloga Isabela Sena",
    destaque: true,
  },
  { hora: "10h", titulo: "Coffee break" },
  {
    hora: "10h20",
    titulo: "Drops 2",
    detalhe: "Palavra sobre a vivência da mulher chamada para servir",
  },
  {
    hora: "10h30",
    titulo: "Palestra 2",
    detalhe: "Graça em ação: a vocação no serviço compartilhado!",
    quem: "Psicóloga Isabela Sena",
    destaque: true,
  },
  { hora: "11h30", titulo: "Pequenos grupos" },
  { hora: "12h", titulo: "Palavra final" },
];

export default function EncontroDeMulheres() {
  return (
    <section className="relative overflow-hidden bg-brand-50/60 py-24">
      {/* Orbes atrás da programação — dão "o que desfocar" ao vidro do card
          (mesma receita dos depoimentos, em versão clara). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-1/4 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <Image
            src="/images/casa-de-isabel-logo.png"
            alt="Casa de Isabel"
            width={148}
            height={98}
            className="mb-6 h-20 w-auto"
          />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Casa de Isabel · Evento
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Encontro de Mulheres
          </h2>
          <p className="mt-3 font-serif text-lg italic text-brand-800">
            &ldquo;Graça em ação: a vocação no serviço compartilhado&rdquo;
          </p>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Este encontro tem como objetivo promover edificação bíblica e
            encorajar mulheres ao envolvimento na causa do Senhor, por meio de
            momentos de ensino, comunhão e reflexão.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            A programação contará com palestras ministradas pela Psicóloga
            Isabela Sena, além de participações especiais em Drops com irmãs
            que compartilharão reflexões sobre a vivência da mulher chamada
            para servir.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Image
              src="/images/isabela-sena.png"
              alt="Psicóloga Isabela Sena"
              width={164}
              height={164}
              className="h-16 w-16"
            />
            <div>
              <p className="font-serif text-base font-bold text-brand-950">
                Isabela Sena
              </p>
              <p className="text-sm text-stone-600">Psicóloga · IP Gávea</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <p className="flex items-center gap-2.5 text-sm font-medium text-brand-900">
              <CalendarDays size={18} className="text-brand-700" aria-hidden />
              08 de agosto de 2026
            </p>
            <p className="flex items-center gap-2.5 text-sm font-medium text-brand-900">
              <Clock size={18} className="text-brand-700" aria-hidden />
              Das 8h às 12h
            </p>
            <p className="flex items-center gap-2.5 text-sm font-medium text-brand-900">
              <MapPin size={18} className="text-brand-700" aria-hidden />
              Rua Isolina, nº 151 — Méier
            </p>
          </div>

          <a
            href={INSCRICAO_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-brand-900 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand-800"
          >
            Fazer inscrição
            <ArrowRight size={16} aria-hidden />
          </a>
        </div>

        <div className="rounded-sm border border-white/70 bg-white/55 p-7 shadow-xl shadow-brand-900/10 backdrop-blur-xl sm:p-8">
          <h3 className="font-serif text-lg font-bold text-brand-950">
            Programação
          </h3>
          {/* Linha do tempo: trilho vertical contínuo, marcador por momento e
              as duas palestras destacadas em bloco verde-claro. */}
          <ol className="relative mt-6">
            <span
              aria-hidden
              className="absolute bottom-2 left-[5px] top-2 w-px bg-brand-900/15"
            />
            {programacao.map(({ hora, titulo, detalhe, quem, destaque }) => (
              <li
                key={`${hora}-${titulo}`}
                className="relative pb-5 pl-7 last:pb-0"
              >
                <span
                  aria-hidden
                  className={`absolute left-0 top-[5px] h-[11px] w-[11px] rounded-full ${
                    destaque
                      ? "bg-brand-700"
                      : "border-2 border-brand-700/60 bg-white"
                  }`}
                />
                {destaque ? (
                  <div className="-mt-1.5 rounded-sm border border-white/60 bg-brand-600/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                      {hora} · {titulo}
                    </p>
                    <p className="mt-1.5 font-serif text-base font-bold leading-snug text-brand-950">
                      {detalhe}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{quem}</p>
                  </div>
                ) : (
                  <>
                    <p className="text-sm leading-snug text-brand-950">
                      <span className="font-semibold text-brand-700">
                        {hora}
                      </span>
                      <span className="mx-2 text-brand-900/30">·</span>
                      <span className="font-medium">{titulo}</span>
                    </p>
                    {detalhe && (
                      <p className="mt-0.5 text-sm leading-snug text-stone-500">
                        {detalhe}
                      </p>
                    )}
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
