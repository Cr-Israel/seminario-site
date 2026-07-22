import Header from "@/components/layout/Header";
import { ogMetadata } from "@/lib/seo";

const title = "LGPD e Privacidade | Seminário Simonton";
const description =
  "Como o Seminário Simonton trata os dados pessoais de visitantes e interessados, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).";

export const metadata = {
  title,
  description,
  openGraph: ogMetadata(title, description),
};

/** Título de seção da política — mantém a hierarquia tipográfica da casa. */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 font-serif text-2xl font-bold text-brand-950">
      {children}
    </h2>
  );
}

export default function LgpdPage() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      <Header />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-brand-700">
            Privacidade e proteção de dados
          </span>
          <h1 className="mt-4 font-serif text-3xl font-extrabold text-brand-950 sm:text-4xl">
            LGPD — Lei Geral de Proteção de Dados
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            O Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton
            respeita a privacidade de quem visita este site e trata os dados
            pessoais que recebe em conformidade com a Lei Geral de Proteção de
            Dados (Lei nº 13.709/2018). Esta página explica quais dados
            coletamos, para que os usamos e como você pode exercer seus
            direitos.
          </p>

          <H2>Quais dados coletamos</H2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Este site não exige cadastro para navegação. Os únicos dados
            pessoais que coletamos são os informados voluntariamente no
            formulário de contato: nome completo, telefone/WhatsApp, e-mail,
            curso de interesse e a mensagem enviada.
          </p>

          <H2>Para que usamos os dados</H2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            As informações do formulário são usadas exclusivamente para
            responder ao seu contato e orientar seu interesse em nossos cursos
            e atividades. Não vendemos, alugamos nem compartilhamos seus dados
            com terceiros para fins comerciais, e não enviamos comunicações
            que você não tenha solicitado.
          </p>

          <H2>Serviços de terceiros</H2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Algumas páginas incorporam conteúdo de terceiros: o mapa de
            localização (Google Maps) e vídeos (YouTube, em modo de
            privacidade ampliada, que não registra cookies antes da
            reprodução). Ao interagir com esses conteúdos, aplicam-se as
            políticas de privacidade dos respectivos serviços. Este site não
            utiliza ferramentas próprias de rastreamento ou publicidade.
          </p>

          <H2>Guarda e segurança</H2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            Os dados recebidos pelo formulário são acessados apenas pela
            equipe da secretaria do Seminário e mantidos pelo tempo necessário
            ao atendimento da sua solicitação, sendo depois eliminados ou
            anonimizados.
          </p>

          <H2>Seus direitos</H2>
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            A LGPD garante a você, titular dos dados, o direito de confirmar o
            tratamento, acessar, corrigir, atualizar ou solicitar a exclusão
            dos seus dados pessoais, além de revogar consentimentos dados
            anteriormente. Para exercer qualquer desses direitos, basta entrar
            em contato conosco.
          </p>

          <H2>Encarregado pelo tratamento de dados</H2>
          {/* TODO(conteúdo): confirmar o encarregado (DPO) e o e-mail oficial
              de privacidade, e substituir o placeholder. */}
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            [PLACEHOLDER] Nome e e-mail do encarregado pelo tratamento de
            dados pessoais (DPO) do Seminário.
          </p>

          <p className="mt-12 border-t border-brand-900/10 pt-6 text-sm text-stone-500">
            Esta política pode ser atualizada para refletir mudanças no site
            ou na legislação.{" "}
            {/* TODO(conteúdo): confirmar a data de vigência da política. */}
            [PLACEHOLDER] Última atualização.
          </p>
        </div>
      </section>
    </div>
  );
}
