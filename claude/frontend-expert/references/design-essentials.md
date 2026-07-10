# Design essencial (o mínimo que toda tela precisa acertar)

Isto não é um guia de identidade visual — é o piso de qualidade abaixo do qual uma interface parece descuidada. Aplique sempre, mesmo em tarefas puramente técnicas.

## Tipografia

- No máximo 2 famílias de fonte por projeto: uma para texto, outra (opcional) para títulos/destaque.
- Use uma escala consistente em vez de tamanhos aleatórios: ex. `text-sm` (14px) / `text-base` (16px) / `text-lg` (18px) / `text-xl` a `text-4xl` para títulos, pulando de forma previsível.
- Corpo de texto: `leading-relaxed` (line-height ~1.6) para blocos de texto corrido; títulos podem usar `leading-tight`.
- Comprimento de linha confortável para leitura: em torno de 60-80 caracteres por linha (`max-w-prose` ou `max-w-2xl` costuma acertar isso).

## Cor e contraste

- Contraste mínimo de **4.5:1** entre texto e fundo para texto normal (WCAG AA); **3:1** para texto grande (≥18px bold ou ≥24px regular).
- Não use só cor para transmitir estado (erro, sucesso, obrigatório) — combine com ícone, texto ou padrão, para acessibilidade e para quem tem daltonismo.
- Uma paleta pequena e consistente (cor de marca + neutros + 1-2 cores semânticas para erro/sucesso/aviso) é mais robusta do que várias cores de destaque competindo entre si.

## Espaçamento

- Use uma escala de espaçamento consistente (a escala padrão do Tailwind — múltiplos de 4px — já resolve isso) em vez de valores aleatórios.
- Espaçamento entre seções deve ser visivelmente maior que o espaçamento entre elementos dentro de uma mesma seção — isso é o que cria agrupamento visual sem precisar de bordas ou fundos diferentes em tudo.

## Estados interativos

Todo elemento clicável precisa de pelo menos: `hover`, `focus-visible` (com contorno visível, nunca `outline-none` sem substituto) e, quando aplicável, `disabled`. Um botão sem feedback visual ao passar o mouse ou focar via teclado parece quebrado, mesmo funcionando.

## Quando a tarefa pede uma identidade visual mais elaborada

Para landing pages, telas de marketing ou qualquer entregável onde a direção visual (paleta, tipografia de marca, personalidade) importa de verdade — não só telas internas de produto — vale ir além deste piso básico e pensar em uma direção de design mais intencional e específica para o projeto, em vez de aplicar um estilo genérico.