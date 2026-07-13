/**
 * Linha do tempo institucional — marcos extraídos da página "Sobre nós" do
 * site antigo (seminariosimonton.com.br/bem-vindo/sobre-nos).
 */
const milestones = [
  {
    year: "1867",
    text: "O Rev. Ashbel Green Simonton, pioneiro do presbiterianismo no Brasil, funda no Rio de Janeiro o “Seminário Primitivo”, dando início à formação teológica presbiteriana no país.",
  },
  {
    year: "1888",
    text: "O Sínodo decide criar um seminário em Nova Friburgo/RJ — transferido para São Paulo dois anos depois.",
  },
  {
    year: "1982",
    text: "Uma extensão do Seminário Presbiteriano do Sul é instalada em Nova Iguaçu/RJ: nasce o embrião do atual Seminário Simonton.",
  },
  {
    year: "1984",
    text: "A extensão transfere-se para a Igreja Presbiteriana do Méier, sob a direção do Rev. Thiago Rodrigues Rocha.",
  },
  {
    year: "1986",
    text: "O Supremo Concílio da IPB a transforma no Seminário Teológico Presbiteriano do Rio de Janeiro.",
  },
  {
    year: "1992",
    text: "O Seminário passa a funcionar na Rua Joaquina Rosa, 199, no Méier, onde realiza seus vestibulares desde então.",
  },
  {
    year: "2006",
    text: "A instituição recebe o nome atual, em homenagem ao Rev. Ashbel Green Simonton.",
  },
  {
    year: "2022",
    text: "Inauguração da nova sede — o Edifício Rev. Roberto Brasileiro Silva, na Rua Isolina, 151, Méier.",
  },
];

export default function SobreHistory() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="max-w-2xl">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
          Nossa história
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
          Mais de um século e meio de formação teológica
        </h2>
        <p className="mt-4 text-base leading-relaxed text-stone-600">
          Estabelecido em 1982 como ramificação do Seminário Presbiteriano do
          Sul, o Simonton é herdeiro de uma trajetória que remonta ao próprio
          fundador do presbiterianismo brasileiro.
        </p>
      </div>

      <ol className="mt-14 space-y-0 border-l-2 border-brand-200/60 pl-8">
        {milestones.map((item) => (
          <li key={item.year} className="relative pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute -left-[2.45rem] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand-700 bg-white"
            />
            <p className="font-serif text-xl font-extrabold text-brand-700">
              {item.year}
            </p>
            <p className="mt-1.5 max-w-2xl text-base leading-relaxed text-stone-600">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
