import InscricaoButton from "@/components/inscricao/InscricaoButton";
import type { EfalCourse } from "@/data/efal";

/**
 * CTA de inscrição de um curso da EFAL, usado em todos os pontos de conversão
 * da landing. Encapsula a única diferença entre os cursos: quem tem formulário
 * externo próprio (hoje o Curso de Formação em Libras) abre o link; os demais
 * abrem o modal de inscrição, que grava na planilha do curso.
 */
export default function EfalEnrollButton({
  course,
  className,
  children,
}: {
  course: EfalCourse;
  className?: string;
  children: React.ReactNode;
}) {
  if (course.enrollUrl !== "#") {
    return (
      <a
        href={course.enrollUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <InscricaoButton
      curso={course.title}
      origem={course.origem}
      codigo={course.codigo}
      className={className}
    >
      {children}
    </InscricaoButton>
  );
}
