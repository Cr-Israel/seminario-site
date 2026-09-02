import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Imagem de compartilhamento (WhatsApp, Instagram, Facebook, X) do site
 * inteiro. Por ser metadata baseada em arquivo na raiz do app, o Next aplica
 * em TODAS as rotas e ela tem prioridade sobre o `openGraph.images` do objeto
 * `metadata` — por isso src/lib/seo.ts não define imagem.
 *
 * Antes daqui o preview usava a logo solta (269×91), que o WhatsApp recortava
 * num quadrado minúsculo. Agora é uma peça 1200×630 desenhada para o formato.
 *
 * Para uma rota ter imagem própria, basta criar outro opengraph-image no
 * diretório dela — o mais específico vence.
 */
export const alt =
  "Seminário Teológico Presbiteriano Rev. Ashbel Green Simonton — formação teológica reformada desde 1986";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function OpengraphImage() {
  // process.cwd() é a raiz do projeto. A logo entra como data URI porque o
  // satori não resolve caminhos relativos do /public.
  const logo = await readFile(
    join(process.cwd(), "public/images/logo-branca-trim.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // brand-950, com o mesmo brilho verde dos heros do site
          background:
            "radial-gradient(circle at 22% 18%, #00521c 0%, #002d10 58%)",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={430} height={146} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Formação teológica reformada
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 30,
              color: "#c2d8ca",
              lineHeight: 1.35,
            }}
          >
            Bacharelado presencial, cursos livres da EFAL e pós-graduação
            online.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            borderTop: "2px solid rgba(255,255,255,0.18)",
            paddingTop: 28,
            fontSize: 24,
            color: "#7baa8c",
          }}
        >
          <div style={{ display: "flex" }}>Rio de Janeiro · desde 1986</div>
          <div style={{ display: "flex", color: "rgba(255,255,255,0.25)" }}>
            |
          </div>
          <div style={{ display: "flex" }}>Igreja Presbiteriana do Brasil</div>
        </div>
      </div>
    ),
    size,
  );
}
