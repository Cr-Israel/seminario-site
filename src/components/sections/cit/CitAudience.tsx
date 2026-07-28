import {
  BookOpen,
  Compass,
  GraduationCap,
  Users,
  type LucideIcon,
} from "lucide-react";

type Profile = {
  icon: LucideIcon;
  title: string;
  text: string;
};

/**
 * Os quatro perfis derivam do público declarado do CIT em efal.ts ("líderes já
 * envolvidos nas igrejas e cristãos em geral") e da posição do curso na trilha:
 * acima da Escola Dominical, abaixo do Bacharelado.
 */
const profiles: Profile[] = [
  {
    icon: Users,
    title: "Líderes de ministério",
    text: "Você já ensina na EBD, conduz um grupo pequeno ou serve na música e no trabalho com jovens e quer fazer isso com base, não só com boa vontade.",
  },
  {
    icon: BookOpen,
    title: "Quem já foi além da EBD",
    text: "As aulas da Escola Dominical deixaram de dar conta das suas perguntas, e você quer estudar num nível mais próximo do acadêmico.",
  },
  {
    icon: Compass,
    title: "Cristãos sem formação teológica",
    text: "Não exige nenhum estudo prévio. É para quem quer entender por que a fé reformada afirma o que afirma, e onde isso está nas Escrituras.",
  },
  {
    icon: GraduationCap,
    title: "Quem pensa no Bacharelado",
    text: "Antes de assumir os anos de um curso completo, conheça por dentro o ambiente acadêmico do Seminário e confirme o chamado.",
  },
];

/**
 * "Esse curso é para mim?" — cabeçalho em duas colunas (pergunta à esquerda,
 * resposta corrida à direita) e uma faixa de quatro perfis. Fica depois dos
 * instrutores e antes do FAQ: quem chegou até aqui já conhece o conteúdo e
 * quem ensina, e a dúvida que sobra é se o curso serve para ele.
 * Server Component.
 */
export default function CitAudience() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Para quem é
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            Esse curso é para mim?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            O CIT não exige formação teológica anterior, pede disposição para
            estudar as Escrituras com seriedade. Na prática, ele costuma servir
            a quatro perfis:
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <li
              key={profile.title}
              className="flex flex-col rounded-sm bg-brand-800 p-7 transition-colors hover:bg-brand-700"
            >
              <profile.icon
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-brand-200"
              />
              <h3 className="mt-6 font-serif text-lg font-bold text-white">
                {profile.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100/85">
                {profile.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
