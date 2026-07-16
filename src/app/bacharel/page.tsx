import { permanentRedirect } from "next/navigation";

/**
 * Rota antiga do Bacharelado — o conteúdo (coordenação, processo seletivo)
 * foi consolidado em /graduacao, a página única do curso ("uma casa só").
 */
export default function BacharelPage() {
  permanentRedirect("/graduacao");
}
