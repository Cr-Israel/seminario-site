import { Baby, HandHeart, Handshake } from "lucide-react";

/**
 * As três frentes de cooperação que a capelania abre a quem é de fora do
 * projeto. Faixa escura para separar do bloco de encontros e fechar a página
 * com o convite — em tom de convite mesmo, sem apelo de campanha.
 */
const frentes = [
  {
    icon: HandHeart,
    titulo: "Oração",
    texto:
      "A frente mais simples e a mais decisiva: interceder pelas irmãs, pelos casais e pelo ministério que se prepara em cada casa.",
  },
  {
    icon: Baby,
    titulo: "Atenção às crianças",
    texto:
      "Cuidar dos filhos durante as programações é o que permite às mães estarem inteiras no encontro. Sempre faltam mãos para isso.",
  },
  {
    icon: Handshake,
    titulo: "Campanhas de contribuição",
    texto:
      "De tempos em tempos o projeto abre campanhas específicas, com uma necessidade nomeada e um prazo. Quem quiser ser avisado, é só falar com a capelania.",
  },
];

export default function CasaDeIsabelApoio() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-brand-800/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
          Como cooperar
        </span>
        <h2 className="mt-4 max-w-3xl font-serif text-3xl font-extrabold text-white sm:text-4xl">
          O apoio de fora soma muito aos nossos propósitos
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80">
          Por isso pedimos que você nos ofereça os olhos e o coração para
          cooperar conosco. São três as frentes abertas hoje.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {frentes.map(({ icon: Icon, titulo, texto }) => (
            <li
              key={titulo}
              className="rounded-sm border border-white/15 bg-white/[0.06] p-7 backdrop-blur-xl"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-200"
                aria-hidden
              >
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-bold text-white">
                {titulo}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-100/80">
                {texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
