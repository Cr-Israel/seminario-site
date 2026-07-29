import type { LucideIcon } from "lucide-react";

export type ProofItem = { icon: LucideIcon; title: string; detail: string };

/**
 * Barra de prova das páginas de trilha online — razões de compra estáticas
 * (por que estudar aqui). Cada núcleo passa os seus itens: a EFAL fala de
 * turmas abertas; a Pós, do formato dos programas.
 */
export default function OnlineStats({ items }: { items: ProofItem[] }) {
  return (
    <section className="relative px-6">
      <div className="mx-auto -mt-14 flex max-w-5xl flex-wrap justify-center rounded-sm bg-white shadow-xl shadow-brand-950/10">
        {items.map((item) => {
          const { icon: Icon } = item;
          return (
            <div
              key={item.title}
              className="flex flex-1 basis-40 flex-col items-center px-6 py-6 text-center sm:px-8"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-800">
                <Icon size={19} strokeWidth={1.75} />
              </span>
              <span className="mt-3 font-serif text-base font-bold text-brand-950 sm:text-lg">
                {item.title}
              </span>
              <span className="mt-0.5 max-w-[11rem] text-sm text-stone-600">
                {item.detail}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
