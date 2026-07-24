# Handoff e Código: Tokens, CSS/Tailwind e Implementação Fiel

> Onde o design vira produto. Um design só "existe" quando implementado com
> fidelidade. Esta referência conecta decisões de design a código real.

## Índice
1. Design tokens
2. Do design ao CSS
3. Tailwind na prática
4. Componentes em React
5. Specs de handoff para dev
6. Prototipagem em código
7. Checklist de fidelidade

---

## 1. Design tokens

Tokens são as variáveis do design — a fonte única de verdade para cor, espaço,
tipo, raio, sombra. Permitem trocar tema (claro/escuro/marca) sem tocar em cada
componente. Nomeie por **função (semântico)**, não por valor:

Ruim: `--blue-500`, `--gray-100` usados direto na UI.
Bom: `--color-primary`, `--color-surface`, `--color-text-secondary` — que
*apontam* para a paleta base.

Duas camadas:
- **Primitivos (referência):** `--blue-600: #2563EB`, `--space-4: 16px`.
- **Semânticos (uso):** `--color-action: var(--blue-600)`,
  `--color-border: var(--gray-200)`. Os componentes usam só os semânticos.

Exemplo em CSS custom properties:

```css
:root {
  /* primitivos */
  --blue-600: #2563eb;
  --gray-50: #f9fafb;  --gray-200: #e5e7eb;  --gray-900: #111827;
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px;
  --radius-md: 8px; --radius-lg: 12px;
  --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --shadow-sm: 0 1px 2px rgba(0,0,0,.06);
  --shadow-md: 0 4px 12px rgba(0,0,0,.10);

  /* semânticos */
  --color-bg: #fff;
  --color-surface: var(--gray-50);
  --color-text: var(--gray-900);
  --color-text-muted: #6b7280;
  --color-action: var(--blue-600);
  --color-border: var(--gray-200);
}

[data-theme="dark"] {
  --color-bg: #0f1115;
  --color-surface: #171a21;
  --color-text: rgba(255,255,255,.87);
  --color-border: #2a2f3a;
}
```

---

## 2. Do design ao CSS (traduções corretas)

- **Espaçamento** → use a escala em variáveis, nunca números soltos.
  `padding: var(--space-4)`.
- **Layout** → Flexbox para 1 eixo (barras, listas), Grid para 2 eixos
  (dashboards, galerias). `gap` em vez de margens para espaçar filhos.
- **Tipografia** → defina classes/roles (`.text-h1`, `.text-body`) com tamanho +
  peso + line-height + cor juntos.
- **Estados** → sempre estilize `:hover`, `:focus-visible`, `:active`,
  `:disabled`. Use `:focus-visible` para não mostrar o anel ao clicar com mouse,
  mas mostrar no teclado.
- **Foco acessível** → `outline: 2px solid var(--color-action); outline-offset:
  2px;` — nunca `outline: none` sem substituto.
- **Responsivo** → `clamp()` para tipografia fluida; container queries/media
  queries por ponto de quebra do conteúdo.
- **Movimento** → `transition: 180ms ease-out;` e envolva em
  `@media (prefers-reduced-motion: reduce) { transition: none; }`.

Exemplo de botão fiel ao design:

```css
.btn-primary {
  display: inline-flex; align-items: center; gap: var(--space-2);
  min-height: 44px; padding: 0 var(--space-4);
  background: var(--color-action); color: #fff;
  font: 600 var(--text-base)/1 system-ui, sans-serif;
  border: none; border-radius: var(--radius-md);
  cursor: pointer; transition: filter 160ms ease-out;
}
.btn-primary:hover { filter: brightness(.94); }
.btn-primary:focus-visible { outline: 2px solid var(--color-action); outline-offset: 2px; }
.btn-primary:disabled { opacity: .5; cursor: not-allowed; }
```

---

## 3. Tailwind na prática

- Configure os tokens em `tailwind.config` (theme.extend) para que as utilitárias
  reflitam o design system — não use valores mágicos (`mt-[13px]`).
- Espaçamento do Tailwind já é escala de 4px (`p-4` = 16px). Bom por padrão.
- Extraia componentes repetidos (via `@apply` ou componentes de framework) para
  não colar a mesma sopa de classes 50 vezes.
- Use `focus-visible:` e `disabled:` variants; não esqueça os estados.
- Dark mode: estratégia `class` e tokens semânticos via CSS vars mapeadas no
  config.

```
<button class="inline-flex items-center gap-2 min-h-[44px] px-4
  bg-blue-600 text-white font-semibold rounded-lg
  hover:brightness-95 focus-visible:outline focus-visible:outline-2
  focus-visible:outline-offset-2 disabled:opacity-50">
  Salvar
</button>
```

---

## 4. Componentes em React

- **Props para variantes/estados**, não cópias do componente: `variant`,
  `size`, `disabled`, `loading`.
- Componha sobre HTML semântico (`<button>`, `<a>`, `<label>`), preservando
  acessibilidade nativa e passando `...rest`.
- Estados de loading/disabled tratados no componente, não deixados para o
  chamador esquecer.
- Um componente = uma responsabilidade. Combine para telas.

```jsx
function Button({ variant = "primary", loading, children, ...props }) {
  return (
    <button
      className={`btn btn-${variant}`}
      aria-busy={loading || undefined}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? <Spinner aria-hidden /> : children}
    </button>
  );
}
```

---

## 5. Specs de handoff para dev

Um bom handoff evita 100 perguntas depois. Entregue:
- **Tokens** usados (cores, espaços, tipo) — por nome, não por print.
- **Espaçamentos exatos** entre elementos (na escala) e paddings.
- **Todos os estados**: default, hover, focus, active, disabled, loading, erro,
  vazio.
- **Comportamento responsivo**: o que acontece em cada breakpoint, o que
  colapsa/reflui.
- **Interações**: o que cada ação faz, transições, validações.
- **Regras de conteúdo**: limites de caracteres, truncamento, plurais, estados
  de overflow.
- **Acessibilidade**: ordem de foco, labels/aria, textos alternativos, roles.
- **Casos de borda**: nome muito longo, zero itens, erro de rede, offline.

Entregue como um documento vivo perto do código/protótipo, não um PDF congelado.

---

## 6. Prototipagem em código

Para validar rápido, um protótipo em HTML/CSS ou React vale mais que mil telas
estáticas: mostra interação, responsividade e estados reais. Ao criar mockups
como artefato:
- HTML/CSS num arquivo único para telas simples; React para interação.
- Use os tokens e a escala de espaçamento desde o início (não "arrume depois").
- Inclua os estados (hover, vazio, erro) — é o que diferencia protótipo sério.
- Dados realistas, não "Lorem ipsum" e "Nome Sobrenome" — conteúdo real revela
  problemas de layout (textos longos, números grandes).
- Garanta acessibilidade básica já no protótipo (foco, contraste, semântica).

---

## 7. Checklist de fidelidade (design → implementado)

- [ ] Cores, espaços e tipos vêm de tokens/escala (nada hardcoded avulso)?
- [ ] Todos os estados implementados (hover/focus/active/disabled/loading/erro/vazio)?
- [ ] Foco de teclado visível e ordem lógica?
- [ ] Contraste verificado (AA)?
- [ ] Responsivo real de 320px a telas largas, sem overflow quebrado?
- [ ] Alvos de toque >= 44px em mobile?
- [ ] Movimento com prefers-reduced-motion respeitado?
- [ ] Conteúdo real testado (textos longos, plurais, zero itens)?
- [ ] Semântica HTML correta (button/a/label/nav/main/headings)?