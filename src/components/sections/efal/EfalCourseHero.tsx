import { ArrowRight, PlayCircle } from "lucide-react";
import ParallaxOrbs from "@/components/ui/ParallaxOrbs";
import type { EfalCourse } from "@/data/efal";
import {
  EFAL_VIDEO_ID,
  EFAL_VIDEO_TITLE,
  type EfalLanding,
} from "@/data/efalLandings";

/**
 * Hero das landings de curso da EFAL — layout de duas colunas (texto à
 * esquerda, vídeo de apresentação 16:9 ao lado), sobre o mesmo fundo verde da
 * /graduacao: orbs desfocados que acompanham o cursor (ParallaxOrbs).
 * Server Component.
 *
 * O vídeo aparece em TODAS as páginas de curso: é a apresentação da EFAL, e
 * um curso pode trocá-la pela sua declarando `hero.videoId` na landing.
 */
export default function EfalCourseHero({
  course,
  landing,
}: {
  course: EfalCourse;
  landing: EfalLanding;
}) {
  const { hero } = landing;

  return (
    <section className="relative overflow-hidden bg-brand-950 py-24">
      <ParallaxOrbs />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-12">
        {/* Mesma moldura de vidro do GreenGlassHero (topo da /graduacao e das
            páginas institucionais), aqui alinhada à esquerda em vez de
            centralizada, porque o hero divide espaço com o vídeo. O padding é
            mais enxuto que o do GreenGlassHero para não estreitar a linha de
            texto — senão o cartão cresce em altura. */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.06] px-5 py-8 shadow-2xl shadow-black/20 backdrop-blur-xl before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent sm:px-7 sm:py-9 lg:-ml-6 lg:mr-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-brand-200/90">
              EFAL · {course.title}
            </p>
            {course.isNew && (
              <span className="rounded-full bg-brand-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-900">
                Novo curso
              </span>
            )}
          </div>

          <h1 className="mt-6 font-serif text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100/80 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#matricula"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-brand-50 px-7 py-3.5 text-sm font-medium text-brand-900 transition-colors hover:bg-white"
            >
              Quero me inscrever <ArrowRight size={16} />
            </a>
            {/* O atalho só existe quando há grade de verdade para ver — num
                curso em elaboração ele levaria a um "em breve". */}
            {course.curriculum.length > 0 && (
              <a
                href="#conteudo"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                <PlayCircle size={16} /> Ver o conteúdo do curso
              </a>
            )}
          </div>
        </div>

        {/* Vídeo de apresentação — player responsivo 16:9 ao lado do texto */}
        <div className="overflow-hidden rounded-sm border border-white/10 bg-black/30 shadow-2xl shadow-brand-950/40">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${hero.videoId ?? EFAL_VIDEO_ID}`}
              title={hero.videoTitle ?? EFAL_VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
