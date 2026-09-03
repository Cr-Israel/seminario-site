import { CalendarDays, Users, Video } from "lucide-react";

/**
 * A agenda do projeto. Os encontros mensais são a base do programa (um
 * presencial e um virtual, por mês); o Congresso de Casais e o Encontro de
 * Mulheres são os dois eventos maiores do calendário.
 *
 * TODO(conteúdo): confirmar com a capelania o dia/horário fixo dos encontros
 * mensais e como a irmã interessada entra no grupo, e trocar os placeholders.
 */
type Encontro = {
  icon: typeof Users;
  frequencia: string;
  titulo: string;
  descricao: string;
  detalhe?: string;
};

const encontros: Encontro[] = [
  {
    icon: Users,
    frequencia: "Mensal · presencial",
    titulo: "Encontro presencial",
    descricao:
      "A base do programa. Um encontro por mês na sede do Seminário, com interação, partilha, escuta, oração e encorajamento entre as irmãs.",
    detalhe: "[PLACEHOLDER] Dia do mês e horário.",
  },
  {
    icon: Video,
    frequencia: "Mensal · on-line",
    titulo: "Encontro virtual",
    descricao:
      "O segundo encontro do mês acontece on-line, para alcançar quem mora longe ou não consegue estar presente na sede naquela semana.",
    detalhe: "[PLACEHOLDER] Dia do mês, horário e plataforma.",
  },
  {
    icon: CalendarDays,
    frequencia: "Anual",
    titulo: "Congresso de Casais",
    descricao:
      "Uma vez por ano, o cuidado se estende ao casal: um congresso dedicado à vida a dois em meio ao preparo e ao exercício do ministério.",
    detalhe: "[PLACEHOLDER] Data da próxima edição.",
  },
];

export default function CasaDeIsabelEncontros() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          O que acontece
        </span>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Encontros que sustentam ao longo do ano
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-600">
          O projeto se sustenta no encontro constante — não em eventos
          isolados. São dois por mês, um presencial e um virtual, somados aos
          dois eventos maiores do calendário.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {encontros.map(({ icon: Icon, frequencia, titulo, descricao, detalhe }) => (
            <li
              key={titulo}
              className="flex flex-col rounded-sm border border-brand-900/10 bg-white p-7"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-900"
                aria-hidden
              >
                <Icon size={20} />
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                {frequencia}
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold text-brand-950">
                {titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-stone-600">
                {descricao}
              </p>
              {detalhe && (
                <p className="mt-4 text-sm font-medium text-stone-500">
                  {detalhe}
                </p>
              )}
            </li>
          ))}
        </ul>

        {/* O Encontro de Mulheres é o único aberto a quem não é esposa de
            seminarista — por isso ganha destaque próprio, fora da grade. */}
        <div className="mt-6 rounded-sm border border-brand-900/10 bg-brand-50/60 p-7 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
            Anual · desde 2026 · aberto a todas
          </p>
          <h3 className="mt-2 font-serif text-xl font-bold text-brand-950">
            Encontro de Mulheres
          </h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-stone-600">
            Criado em 2026 e realizado uma vez por ano, este é o encontro com
            as portas mais abertas do projeto: recebe irmãs de qualquer igreja,
            sejam ou não esposas de seminaristas, para edificação bíblica,
            comunhão e reflexão.
          </p>
          {/* TODO(conteúdo): confirmar a data da edição de 2027 e, quando as
              inscrições abrirem, apontar este bloco para o formulário. */}
          <p className="mt-4 text-sm font-medium text-stone-500">
            [PLACEHOLDER] Data da próxima edição e inscrições.
          </p>
        </div>
      </div>
    </section>
  );
}
