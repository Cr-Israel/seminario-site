import { notFound } from "next/navigation";
import EfalCourseLanding from "@/components/sections/efal/EfalCourseLanding";
import { efalCourses, getEfalCourse } from "@/data/efal";
import { getEfalLanding } from "@/data/efalLandings";
import { ogMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

/**
 * Página de um curso da EFAL. Cada núcleo tem casa própria — /efal e
 * /pos-graduacao —, e o curso mora sob a rota da sua trilha.
 *
 * Os sete cursos compartilham a mesma anatomia de landing (EfalCourseLanding),
 * moldada na página do CIT; o que muda de um para o outro é o conteúdo, que
 * vem de efal.ts (ficha técnica e grade) e de efalLandings.ts (conversão).
 */
export function generateStaticParams() {
  return efalCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const course = getEfalCourse(slug);
  const landing = getEfalLanding(slug);
  if (!course || !landing) return {};

  const title = `${course.title} (${course.code}) — EFAL | Seminário Simonton`;
  // A manchete da landing, e não a tagline de efal.ts: alguns cursos ainda
  // estão com a apresentação oficial pendente na ficha técnica.
  const description = landing.hero.description;
  return {
    title,
    description,
    openGraph: ogMetadata(title, description),
  };
}

export default async function EfalCoursePage({ params }: { params: Params }) {
  const { slug } = await params;
  const course = getEfalCourse(slug);
  const landing = getEfalLanding(slug);
  if (!course || !landing) notFound();

  return <EfalCourseLanding course={course} landing={landing} />;
}
