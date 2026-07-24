# Visual Design: Tipografia, Cor, Espaço e Marca

> Como fazer algo parecer intencional, hierárquico e profissional. Estética
> serve à clareza — nunca o contrário.

## Índice
1. Tipografia
2. Cor
3. Espaçamento e grid
4. Layout e composição
5. Hierarquia visual
6. Branding e identidade
7. Dark mode
8. Checklist de polimento visual

---

## 1. Tipografia

Tipografia é ~90% do design de interface — a maior parte de uma UI é texto.
Acertar a tipografia resolve metade do trabalho.

**Escala tipográfica.** Use uma escala modular em vez de tamanhos aleatórios.
Base 16px para corpo. Razões comuns: 1.2 (menor, denso), 1.25 (major third,
seguro para UI), 1.333, 1.5. Exemplo com 1.25 a partir de 16:
12 · 14 · 16 · 20 · 25 · 31 · 39 · 49 px. Limite a 5-6 tamanhos no produto todo.

**Pareamento de fontes.** Regra segura: uma família só, usando pesos para
variar (400/500/600/700). Se parear duas, contraste papéis (display serifada +
corpo sem serifa), nunca duas parecidas. Sans neutras confiáveis: Inter, IBM
Plex Sans, Söhne, system-ui. Serifas de leitura: Source Serif, Charter.

**Pesos.** Corpo em 400. Ênfase em 500/600. Títulos em 600/700. Evite 300/light
em texto pequeno — some. Contraste de peso comunica hierarquia melhor que
contraste de tamanho em telas densas.

**Medida de linha (comprimento).** 45-75 caracteres por linha para leitura
confortável (~66 é o ótimo). Texto que atravessa a tela inteira cansa. Limite
com max-width (ex.: 60-70ch).

**Altura de linha (leading).** Corpo: 1.4-1.6. Títulos grandes: 1.1-1.25
(quanto maior a fonte, menor o leading proporcional). UI densa/labels: 1.2-1.4.

**Tracking (letter-spacing).** Títulos grandes: leve negativo (-0.01 a -0.02em).
Texto em CAIXA ALTA: positivo (+0.05 a +0.1em) senão vira bloco ilegível. Corpo:
deixe em 0 (default da fonte).

**Alinhamento.** Texto corrido à esquerda (ragged right). Evite justificado na
web (cria "rios" de espaço). Centralizado só para blocos curtos (títulos, CTAs).
Números em tabelas: alinhe à direita e use tabular-nums.

**Hierarquia de texto.** Estabeleça papéis nomeados: Display, H1, H2, H3, Body,
Body-sm, Caption, Label/Overline. Cada um com tamanho + peso + cor + leading
definidos. Consistência aqui é o que separa "profissional" de "amador".

---

## 2. Cor

**Anatomia de um sistema de cor:**
- **Neutros (cinzas)** — 90% da UI. Precisa de ~10 tons do quase-branco ao
  quase-preto. Cinzas puros parecem mortos; injete um leve matiz (azulado para
  frio/tech, marrom/bege para quente/humano).
- **Primária (brand)** — a cor de ação. 1 matiz, ~5-7 tons (50→900). Usada em
  botões primários, links, foco, seleção. Pouco: se tudo é colorido, nada
  chama atenção.
- **Semânticas** — sucesso (verde), erro/destrutivo (vermelho), aviso
  (âmbar), info (azul). Consistentes em todo o produto.
- **Superfícies** — background, card, elevado, overlay. No claro, use tons de
  cinza; no escuro, evite preto puro (#000).

**Como escolher uma paleta do zero:**
1. Defina o matiz primário (personalidade da marca).
2. Gere a rampa de tons ajustando luminosidade e saturação (satura mais nos
   extremos, menos no meio). Ferramentas mentais: HSL/OKLCH.
3. Construa os neutros com o mesmo matiz sutil.
4. Escolha semânticas que não colidam com a primária.

**Contraste (crítico — acessibilidade e legibilidade):**
- Texto normal: contraste >= 4.5:1 com o fundo (WCAG AA).
- Texto grande (>=24px ou >=19px bold): >= 3:1.
- Componentes/ícones/bordas de foco: >= 3:1.
- Sempre verifique; "parece ok" engana. Não comunique estado só por cor
  (daltônicos): combine cor + ícone + texto.

**Regra 60-30-10.** ~60% superfície neutra dominante, 30% cor secundária/tons,
10% cor de destaque (ações, acentos). Evita a "sopa de cores".

**Teoria rápida.** Análogas (vizinhas na roda) = harmonia calma. Complementares
(opostas) = tensão/destaque. Monocromático = elegante e seguro. Para UI, quase
sempre: neutros + 1 primária + semânticas basta.

---

## 3. Espaçamento e grid

**Escala de espaçamento.** Use uma escala baseada em 4px (ou 8px): 4, 8, 12,
16, 24, 32, 48, 64, 96. Nunca valores arbitrários (13px, 27px). Isso cria ritmo
e faz tudo "encaixar". Espaçamento consistente é o segredo mais barato de um
visual profissional.

**Espaço interno vs. externo.** Padding (interno) e margin/gap (externo)
seguem a mesma escala. Elementos relacionados ficam mais próximos entre si do
que de elementos de outro grupo (proximidade = significado).

**Grid.** Web desktop: 12 colunas, gutter 16-24px, margens laterais generosas.
Defina larguras máximas de conteúdo (ex.: 1200-1280px) para não esticar em
telas largas. Alinhe tudo a uma coluna — desalinhamento é o defeito mais
percebido inconscientemente.

**Densidade.** Escolha uma densidade e mantenha. Ferramenta de dados densa
(planilha, admin) usa espaços menores; produto de consumo respira mais. Não
misture.

---

## 4. Layout e composição

- **Espaço em branco é ativo, não desperdício.** Ele agrupa, separa e dá foco.
  Interfaces "apertadas" parecem baratas e são difíceis de escanear.
- **Alinhamento óptico > matemático** em alguns casos (ícones, texto ao lado de
  formas). Confie no olho para o ajuste final.
- **Padrões de varredura.** Ocidentais leem em "F" (texto denso) ou "Z"
  (páginas visuais). Coloque o mais importante no topo-esquerda e no caminho do
  olho.
- **Agrupamento.** Use espaço e, só se necessário, um card/divisória sutil.
  Prefira separar por espaço antes de adicionar linhas e bordas (menos ruído).
- **Consistência de bordas e raios.** Escolha 1-2 valores de border-radius
  (ex.: 8px componentes, 12px cards) e um estilo de sombra. Repita.

---

## 5. Hierarquia visual

O usuário deve perceber a ordem de importância antes de ler. Ferramentas para
criar hierarquia, em ordem de força:
1. **Tamanho** — maior chama primeiro.
2. **Peso/contraste** — negrito e alto contraste saltam.
3. **Cor** — um acento colorido no meio de neutros domina.
4. **Espaço** — isolamento confere importância.
5. **Posição** — topo e esquerda pesam mais.

Combine no máximo 2-3 por elemento; excesso anula o efeito. Teste o "aperte os
olhos": desfoque a tela mentalmente — o que ainda salta é a hierarquia real.

---

## 6. Branding e identidade

- **Personalidade primeiro.** Defina 3-5 adjetivos (ex.: "confiável, moderno,
  acessível"). Toda escolha visual deve reforçá-los.
- **Elementos de marca:** logo (e suas variações/clear space), paleta,
  tipografia, iconografia, ilustração/foto, tom de voz. Consistência entre eles
  é o que constrói reconhecimento.
- **Tom visual coerente com o tom verbal.** Uma marca séria não usa fontes
  arredondadas e emojis; uma marca lúdica não usa cinzas corporativos.
- **Sistema, não peças soltas.** Documente regras (quando usar cada cor, cada
  peso) — é o que permite escalar sem virar colcha de retalhos.

---

## 7. Dark mode

- Não é só inverter. Fundo: cinza muito escuro (#0B0F14 a #121417), nunca #000
  puro (causa vibração e halo com texto branco).
- Texto: branco quase puro em ~87% de opacidade para corpo, não #FFF a 100%.
- Elevação por *luminosidade*, não sombra: superfícies mais altas ficam mais
  claras. Sombras quase não funcionam no escuro.
- Reduza a saturação das cores vivas — elas "gritam" sobre fundo escuro.
- Reverifique todos os contrastes; o que passa no claro pode falhar no escuro.

---

## 8. Checklist de polimento visual

Antes de considerar pronto:
- [ ] Todos os espaçamentos vêm da escala (4/8px)?
- [ ] No máximo 5-6 tamanhos e 3-4 pesos de fonte?
- [ ] Contraste de texto >= 4.5:1 (>= 3:1 grande)?
- [ ] Uma única ação primária clara por tela?
- [ ] Alinhamento consistente — tudo encaixa numa coluna/grid?
- [ ] Raio de borda e estilo de sombra consistentes?
- [ ] Cor de destaque usada com parcimônia (regra 10%)?
- [ ] Estados hover/focus/active/disabled definidos?
- [ ] Funciona em mobile e em dark (se aplicável)?