import {
  modalidadeLabel,
  nivelLabel,
  type Modalidade,
  type Nivel,
} from "@/data/cursos";

type Tone = "light" | "dark";

const badgeBase =
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider";

const toneClass: Record<Tone, { nivel: string; modalidade: string }> = {
  light: {
    nivel: "border-brand-900/15 bg-white text-brand-800",
    modalidade: "border-transparent bg-brand-50 text-brand-800",
  },
  dark: {
    nivel: "border-white/25 bg-transparent text-brand-100",
    modalidade: "border-transparent bg-white/10 text-brand-100",
  },
};

/**
 * Badge sóbrio de atributos do curso — nível ("Bacharelado", "Curso Livre",
 * "Pós-graduação") e modalidade ("Presencial", "100% Online", "Híbrido").
 * Modalidade é só um atributo do curso, nunca uma marca separada; por isso o
 * badge é discreto e igual em toda parte (cards e heros das páginas de curso).
 */
export default function ModalidadeBadge({
  nivel,
  modalidade,
  tone = "light",
}: {
  nivel?: Nivel;
  modalidade?: Modalidade;
  tone?: Tone;
}) {
  if (!nivel && !modalidade) return null;
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      {nivel && (
        <span className={`${badgeBase} ${toneClass[tone].nivel}`}>
          {nivelLabel[nivel]}
        </span>
      )}
      {modalidade && (
        <span className={`${badgeBase} ${toneClass[tone].modalidade}`}>
          {modalidadeLabel[modalidade]}
        </span>
      )}
    </span>
  );
}
