const stats = [
  { value: "+40", label: "Anos formando pastores" },
  { value: "7", label: "Cursos na EFAL" },
  { value: "JURET/IPB", label: "Certificação denominacional" },
  { value: "100%", label: "Aulas ao vivo" },
];

/**
 * Barra de estatísticas institucionais — versão estática (sem a animação de
 * contagem do Stats.tsx da Home), porque aqui há valores não numéricos.
 */
export default function OnlineStats() {
  return (
    <section className="relative px-6">
      <div className="mx-auto -mt-14 flex max-w-5xl flex-wrap justify-center rounded-sm bg-white shadow-xl shadow-brand-950/10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-1 basis-40 flex-col items-center px-6 py-6 text-center sm:px-8"
          >
            <span className="font-serif text-3xl font-extrabold text-brand-900 sm:text-4xl">
              {stat.value}
            </span>
            <span className="mt-2 max-w-[11rem] text-sm text-stone-600">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
