type Discipline = { name: string; professor?: string };

/**
 * Bloco "Grade curricular" das páginas de curso — lista numerada das
 * disciplinas, em duas colunas no desktop. Se `professor` estiver presente,
 * mostra o nome abaixo da disciplina (usado na Pós de Gestão Ministerial).
 * Não renderiza nada quando a grade ainda não foi definida.
 */
export default function CourseCurriculum({
  disciplines,
}: {
  disciplines: Discipline[];
}) {
  if (disciplines.length === 0) return null;

  return (
    <div className="mt-12">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-xl font-bold text-brand-950">
          Grade curricular
        </h2>
        <span className="text-xs uppercase tracking-wider text-stone-500">
          {disciplines.length} disciplinas
        </span>
      </div>

      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {disciplines.map((discipline, i) => (
          <li
            key={`${i}-${discipline.name}`}
            className="flex gap-3.5 rounded-sm border border-brand-900/10 bg-white p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 font-serif text-xs font-bold text-brand-800">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-medium leading-snug text-brand-950">
                {discipline.name}
              </p>
              {discipline.professor && (
                <p className="mt-1 text-xs text-brand-700">
                  {discipline.professor}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
