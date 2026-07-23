import { diferenciais } from "@/data/diferenciais";

/**
 * Faixa-resumo logo abaixo do hero: os seis diferenciais como âncoras rápidas
 * (ícone + rótulo curto) para as seções detalhadas. O scroll suave vem do
 * html.scroll-smooth (com motion-reduce:scroll-auto) definido no layout.
 */
export default function DiferenciaisNav() {
  return (
    <nav
      aria-label="Diferenciais desta página"
      className="border-b border-brand-900/10 bg-white"
    >
      <ul className="mx-auto grid max-w-6xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {diferenciais.map(({ id, icon: Icon, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex h-full flex-col items-center gap-2.5 px-4 py-6 text-center transition-colors hover:bg-brand-50"
            >
              <Icon size={22} className="text-brand-700" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-wider text-brand-900">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
