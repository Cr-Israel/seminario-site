import Header from "@/components/layout/Header";
import GreenGlassHero from "@/components/ui/GreenGlassHero";
import ConsentSettings from "@/components/lgpd/ConsentSettings";
import { contato } from "@/data/contato";
import { ogMetadata } from "@/lib/seo";

const title = "LGPD e Privacidade | Seminário Simonton";
const description =
  "Como o Seminário Simonton trata os dados pessoais de visitantes e interessados, quais cookies o site usa e como exercer seus direitos, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Título de seção da política — mantém a hierarquia tipográfica da casa. */
function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-28 font-serif text-2xl font-bold text-brand-950"
    >
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-stone-600">{children}</p>
  );
}

/**
 * Cookies e armazenamento local usados pelo site. Os dois primeiros são
 * preferências guardadas no próprio navegador (localStorage), não cookies —
 * a distinção importa porque eles não viajam para servidor nenhum.
 */
const storageItems = [
  {
    name: "theme",
    type: "localStorage · necessário",
    purpose: "Guarda sua escolha de tema claro ou escuro.",
    retention: "Até você limpar os dados do navegador",
  },
  {
    name: "lgpd-consent",
    type: "localStorage · necessário",
    purpose:
      "Registra se você aceitou ou recusou os cookies de análise, para não perguntarmos de novo a cada visita.",
    retention: "Até você limpar os dados do navegador",
  },
  {
    name: "_ga, _ga_*",
    type: "Cookie · análise (opcional)",
    purpose:
      "Google Analytics: distingue visitantes e sessões para medir o uso do site de forma agregada. Só é gravado com o seu aceite.",
    retention: "Até 2 anos",
  },
];

/** Direitos do titular previstos no art. 18 da LGPD. */
const rights = [
  "confirmar que tratamos os seus dados e acessá-los;",
  "corrigir dados incompletos, inexatos ou desatualizados;",
  "pedir a anonimização, o bloqueio ou a eliminação de dados desnecessários ou tratados em desconformidade com a lei;",
  "solicitar a portabilidade dos dados a outro fornecedor de serviço;",
  "pedir a eliminação dos dados tratados com base no seu consentimento;",
  "saber com quais entidades compartilhamos os seus dados;",
  "ser informado sobre a possibilidade de não consentir e as consequências disso;",
  "revogar o consentimento a qualquer momento.",
];

export default function LgpdPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      {/* Intro — fundo verde com efeito de vidro */}
      <GreenGlassHero>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-200/90">
          Privacidade e proteção de dados
        </span>
        <h1 className="mt-4 font-serif text-3xl font-extrabold text-white sm:text-4xl">
          Política de Privacidade e LGPD
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/80">
          O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton
          respeita a privacidade de quem visita este site e trata os dados
          pessoais que recebe em conformidade com a Lei Geral de Proteção de
          Dados (Lei nº 13.709/2018). Esta página explica quais dados
          coletamos, com que finalidade e base legal, quais cookies usamos e
          como você pode exercer seus direitos.
        </p>
      </GreenGlassHero>

      {/* Conteúdo da política */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <H2>Quem trata os seus dados</H2>
          <P>
            O controlador dos dados pessoais coletados neste site é o Seminário
            Teológico Presbiteriano Rev. Ashbel Green Simonton, com sede na{" "}
            {contato.endereco}, instituição de educação teológica jurisdicionada
            à Igreja Presbiteriana do Brasil.
          </P>

          <H2>Quais dados coletamos</H2>
          <P>
            Este site não exige cadastro para navegação. Coletamos dois tipos
            de dados:
          </P>
          <ul className="mt-4 flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-stone-600 marker:text-brand-700">
            <li>
              <strong className="font-semibold text-brand-950">
                Dados que você informa
              </strong>{" "}
              nos formulários de contato, de interesse e de inscrição em
              cursos: nome completo, telefone/WhatsApp, e-mail, curso de
              interesse, cupom de desconto (quando houver) e a mensagem
              enviada.
            </li>
            <li>
              <strong className="font-semibold text-brand-950">
                Dados de navegação
              </strong>{" "}
              coletados pelo Google Analytics — páginas visitadas, tempo de
              visita, origem do acesso, tipo de dispositivo e navegador, e
              localização aproximada (cidade/estado) derivada do endereço IP.
              Esses dados são estatísticos e agregados, e{" "}
              <strong className="font-semibold text-brand-950">
                só são coletados se você aceitar
              </strong>{" "}
              os cookies de análise.
            </li>
          </ul>

          <H2>Para que usamos os dados</H2>
          <P>
            Os dados dos formulários são usados exclusivamente para responder
            ao seu contato, orientar seu interesse em nossos cursos e
            atividades e processar sua inscrição. Os dados de navegação são
            usados para entender como as pessoas encontram e usam o site e
            para melhorá-lo. Não vendemos, alugamos nem compartilhamos seus
            dados com terceiros para fins comerciais ou publicitários, e não
            enviamos comunicações que você não tenha solicitado.
          </P>

          <H2>Bases legais</H2>
          <P>
            O tratamento dos dados dos formulários se apoia no{" "}
            <em>consentimento</em> do titular e na execução de procedimentos
            preliminares relacionados a contrato do qual você é parte, a seu
            pedido (art. 7º, incisos I e V, da LGPD). O tratamento dos dados de
            navegação para fins de análise se apoia exclusivamente no seu{" "}
            <em>consentimento</em> (art. 7º, inciso I), manifestado no banner
            de cookies e revogável a qualquer momento.
          </P>

          <H2 id="cookies">Cookies e armazenamento local</H2>
          <P>
            Cookies estritamente necessários ao funcionamento do site dispensam
            consentimento; os de análise, não — por isso eles só são ativados
            depois do seu aceite. Enquanto você não responde ao banner, ou se
            você recusa, nenhum script de rastreamento é carregado.
          </P>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-brand-900/15">
                  <th className="py-3 pr-4 font-medium text-brand-950">Nome</th>
                  <th className="py-3 pr-4 font-medium text-brand-950">Tipo</th>
                  <th className="py-3 pr-4 font-medium text-brand-950">
                    Finalidade
                  </th>
                  <th className="py-3 font-medium text-brand-950">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-900/10">
                {storageItems.map((item) => (
                  <tr key={item.name} className="align-top">
                    <td className="py-3 pr-4 font-mono text-xs text-brand-800">
                      {item.name}
                    </td>
                    <td className="py-3 pr-4 text-stone-600">{item.type}</td>
                    <td className="py-3 pr-4 leading-relaxed text-stone-600">
                      {item.purpose}
                    </td>
                    <td className="py-3 text-stone-600">{item.retention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <H2 id="preferencias">Suas preferências de cookies</H2>
          <P>
            Você pode mudar de ideia quando quiser. A escolha vale para este
            navegador; ao recusar, os cookies de análise já gravados são
            apagados.
          </P>
          <ConsentSettings />

          <H2>Serviços de terceiros</H2>
          <P>
            Para funcionar, o site se apoia em serviços de terceiros, que
            tratam dados sob suas próprias políticas de privacidade:
          </P>
          <ul className="mt-4 flex list-disc flex-col gap-3 pl-5 text-base leading-relaxed text-stone-600 marker:text-brand-700">
            <li>
              <strong className="font-semibold text-brand-950">
                Google Analytics
              </strong>{" "}
              — medição de audiência, ativado somente com o seu consentimento.
            </li>
            <li>
              <strong className="font-semibold text-brand-950">
                Google Sheets e Google Apps Script
              </strong>{" "}
              — recebem e armazenam os dados enviados pelos formulários, para
              que a secretaria dê andamento ao seu contato ou inscrição.
            </li>
            <li>
              <strong className="font-semibold text-brand-950">
                Google Maps
              </strong>{" "}
              — mapa de localização da sede.
            </li>
            <li>
              <strong className="font-semibold text-brand-950">YouTube</strong>{" "}
              — vídeos incorporados em modo de privacidade ampliada
              (youtube-nocookie), que não registra cookies antes da reprodução.
            </li>
            <li>
              <strong className="font-semibold text-brand-950">WhatsApp</strong>{" "}
              — ao clicar nos botões de contato, a conversa passa a ser regida
              pela política do aplicativo.
            </li>
          </ul>
          <P>
            Alguns desses serviços são operados por empresas sediadas no
            exterior, o que implica transferência internacional de dados, feita
            nos termos dos arts. 33 e seguintes da LGPD.
          </P>

          <H2>Guarda, segurança e prazo</H2>
          <P>
            Os dados recebidos pelos formulários são acessados apenas pela
            equipe da secretaria do Seminário e mantidos pelo tempo necessário
            ao atendimento da sua solicitação e ao cumprimento de obrigações
            legais e acadêmicas, sendo depois eliminados ou anonimizados.
            Adotamos medidas técnicas e administrativas razoáveis para proteger
            os dados contra acesso não autorizado, perda ou alteração.
          </P>

          <H2>Seus direitos</H2>
          <P>
            A LGPD garante a você, titular dos dados, o direito de:
          </P>
          <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-base leading-relaxed text-stone-600 marker:text-brand-700">
            {rights.map((right) => (
              <li key={right}>{right}</li>
            ))}
          </ul>
          <P>
            Para exercer qualquer desses direitos, escreva para{" "}
            <a
              href={`mailto:${contato.email}`}
              className="font-medium text-brand-800 underline underline-offset-4 transition-colors hover:text-brand-900"
            >
              {contato.email}
            </a>{" "}
            ou ligue para {contato.telefone}. Responderemos no menor prazo
            possível.
          </P>

          <H2>Encarregado pelo tratamento de dados</H2>
          {/* TODO(conteúdo): confirmar o nome do encarregado (DPO) e, se
              houver, um e-mail próprio de privacidade — até lá, o canal é o
              da secretaria. */}
          <P>
            Enquanto o Seminário não designa formalmente um encarregado (DPO),
            os pedidos relativos a dados pessoais devem ser dirigidos à
            secretaria, pelos canais indicados acima.
          </P>

          <p className="mt-12 border-t border-brand-900/10 pt-6 text-sm text-stone-500">
            Esta política pode ser atualizada para refletir mudanças no site ou
            na legislação.{" "}
            {/* TODO(conteúdo): validar o texto com a direção/assessoria
                jurídica e fixar a data de vigência oficial. */}
            Última atualização: 27/08/2026.
          </p>
        </div>
      </section>
    </div>
  );
}
