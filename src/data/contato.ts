/** Dados de contato da secretaria — fonte única para ContactCta e Footer. */
export const contato = {
  endereco: "Rua Isolina, nº 151, Méier, Rio de Janeiro, RJ, CEP 20710-080",
  telefone: "(21) 2201-6734",
  email: "secretaria.stps@ipb.org.br",
  horario: "Segunda a sexta-feira, das 13h às 20h",
};

/**
 * Links de mapa/rota para a sede (Edifício Rev. Roberto Brasileiro Silva).
 * `embed` alimenta o <iframe> do Google Maps; `rota` e `waze` abrem a
 * navegação no app do usuário a partir do endereço.
 */
const enderecoQuery =
  "Rua Isolina, 151, Méier, Rio de Janeiro - RJ, 20710-080";

export const mapa = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(
    enderecoQuery,
  )}&output=embed`,
  rota: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    enderecoQuery,
  )}`,
  waze: `https://waze.com/ul?q=${encodeURIComponent(enderecoQuery)}&navigate=yes`,
};
