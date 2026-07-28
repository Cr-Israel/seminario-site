import {
  Bus,
  Car,
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/layout/Header";
import GreenGlassHero from "@/components/ui/GreenGlassHero";
import { contato, mapa } from "@/data/contato";
import { ogMetadata } from "@/lib/seo";

const title = "Como chegar — nossa sede no Méier | Seminário Simonton";
const description =
  "Onde fica o Seminário Simonton e como chegar: endereço no Méier (Rio de Janeiro), mapa, rota no Google Maps e no Waze, estacionamento e transporte público.";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/**
 * Meios de chegar à sede (Edifício Rev. Roberto Brasileiro Silva). O
 * estacionamento no subsolo é do acervo real (ver src/data/graduacao.ts). Os
 * detalhes de transporte público que ainda não foram confirmados ficam como
 * [PLACEHOLDER] com TODO, no padrão da casa.
 */
type Modo = {
  icon: LucideIcon;
  titulo: string;
  texto: string;
};

const modos: Modo[] = [
  {
    icon: Car,
    titulo: "De carro",
    texto:
      "O edifício tem estacionamento próprio no subsolo. A entrada de carro é pela rua ao lado, na Rua Joaquina Rosa, 199.",
  },
  {
    icon: TrainFront,
    titulo: "De trem",
    texto:
      "A sede fica no Méier, bairro atendido pela Estação Méier. Aproximadamente 10 minutos de caminhada da estação até o Seminário.",
  },
  {
    icon: Bus,
    titulo: "De ônibus",
    texto:
      "Diversas linhas municipais atendem o Méier e têm ponto de desembarque mais próximo da Rua Isolina.",
  },
];

export default function ComoChegarPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      {/* Intro — fundo verde com efeito de vidro */}
      <GreenGlassHero>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
          Visite o Seminário
        </span>
        <h1 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
          Como chegar
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80">
          Nossa sede é o edifício Rev. Roberto Brasileiro Silva, no Méier, zona
          norte do Rio de Janeiro. Abaixo você encontra o endereço, o mapa e as
          formas de chegar até nós.
        </p>
      </GreenGlassHero>

      {/* Endereço + mapa */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <MapPin size={22} strokeWidth={1.75} aria-hidden />
              </span>
              <div>
                <h2 className="font-serif text-xl font-bold text-brand-950">
                  Endereço
                </h2>
                <address className="mt-1 not-italic leading-relaxed text-stone-600">
                  {contato.endereco}
                </address>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapa.rota}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-800"
              >
                <Navigation size={16} aria-hidden /> Traçar rota no Google Maps
              </a>
              <a
                href={mapa.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-brand-900/15 bg-white px-6 py-3 text-sm font-medium text-brand-800 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                Abrir no Waze
              </a>
            </div>

            <dl className="mt-8 space-y-4 border-t border-brand-900/10 pt-8">
              <div className="flex items-center gap-3">
                <Clock size={18} className="shrink-0 text-brand-700" aria-hidden />
                <dt className="sr-only">Horário de atendimento</dt>
                <dd className="text-sm text-stone-600">{contato.horario}</dd>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-700" aria-hidden />
                <dt className="sr-only">Telefone</dt>
                <dd className="text-sm text-stone-600">
                  <a
                    href={`tel:${contato.telefone.replace(/\D/g, "")}`}
                    className="transition-colors hover:text-brand-900"
                  >
                    {contato.telefone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-700" aria-hidden />
                <dt className="sr-only">E-mail</dt>
                <dd className="text-sm text-stone-600">
                  <a
                    href={`mailto:${contato.email}`}
                    className="transition-colors hover:text-brand-900"
                  >
                    {contato.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="overflow-hidden rounded-xl border border-brand-900/10 shadow-sm">
            <iframe
              src={mapa.embed}
              title="Mapa: Seminário Simonton, Rua Isolina, 151, Méier, Rio de Janeiro"
              className="h-80 w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Meios de chegar */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
              Como chegar
            </span>
            <h2 className="mt-4 font-serif text-2xl font-extrabold text-brand-950 sm:text-3xl">
              De carro ou de transporte público
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {modos.map(({ icon: Icon, titulo, texto }) => (
              <li
                key={titulo}
                className="rounded-2xl border border-brand-900/10 bg-white p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                  <Icon size={22} strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-5 font-serif text-lg font-bold text-brand-950">
                  {titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
