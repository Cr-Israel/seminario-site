# UI Patterns: Componentes, Design Systems e Microcopy

> Biblioteca de padrões testados. Reutilizar convenções economiza a atenção do
> usuário. Só invente um padrão novo quando os existentes comprovadamente falham.

## Índice
1. Design systems
2. Padrões de componentes
3. Estados obrigatórios (empty, loading, error)
4. Formulários
5. Navegação
6. Microinterações
7. Mobile vs. Web
8. UX writing / microcopy

---

## 1. Design systems

Um design system = tokens + componentes + padrões + diretrizes, versionados e
documentados. Hierarquia (Atomic Design, Brad Frost): átomos (cor, tipo, ícone)
→ moléculas (campo com label) → organismos (formulário) → templates → páginas.

Comece pequeno: tokens (ver handoff-and-code.md) → componentes base (botão,
input, card, modal) → documentação de uso. Cada componente documenta: variantes,
estados, do/don't, e regras de acessibilidade. Referências maduras para se
inspirar: Material Design, Apple HIG, IBM Carbon, Shopify Polaris, Atlassian.

---

## 2. Padrões de componentes

**Botões.** Hierarquia clara: primário (1 por contexto, ação principal),
secundário (contorno/tonal), terciário/ghost (baixa ênfase), destrutivo
(vermelho, com confirmação). Rótulo = verbo + objeto ("Salvar alterações"), não
"OK". Estados: default, hover, active, focus, disabled, loading.

**Inputs.** Sempre com label visível (placeholder NÃO substitui label). Mostre
formato esperado, validação inline após o blur (não a cada tecla), e mensagens
de erro específicas junto ao campo. Agrupe logicamente; um campo por linha em
mobile.

**Seleção.** Radio (uma opção, <=5 visíveis), checkbox (múltipla), select/
dropdown (muitas opções, economiza espaço), toggle (liga/desliga com efeito
imediato). Segmented control para 2-4 opções exclusivas.

**Tabelas de dados.** Alinhe números à direita, texto à esquerda. Cabeçalho
fixo em rolagem. Ordenação e filtro visíveis. Zebra/hover sutil para rastrear
linhas. Em mobile, vire cards ou permita rolagem horizontal com coluna fixa.
Paginação vs. scroll infinito: paginação para dados que se referencia; infinito
para consumo/descoberta.

**Modais e overlays.** Use com moderação — interrompem. Bom para confirmação
crítica ou tarefa focada curta. Sempre: título claro, foco preso dentro, fechar
por Esc/clique fora/botão, retorno de foco ao gatilho. Evite modal sobre modal.
Para ações não-destrutivas rápidas, prefira inline ou toast.

**Feedback.** Toast/snackbar (confirmação passageira, não-crítica), banner/alert
(persistente, contextual), inline (junto ao elemento). Erros críticos nunca só
em toast (some rápido demais).

**Cards.** Agrupam info relacionada de um objeto. Um card = uma entidade. Não
aninhe cards em cards. Ação principal do card clicável por inteiro quando fizer
sentido.

**Navegação.** Ver seção 5.

---

## 3. Estados obrigatórios (o "caminho infeliz")

Designers amadores desenham só a tela cheia e feliz. Um expert desenha os
estados que aparecem na vida real:

- **Empty state.** Primeira vez / sem dados. Não deixe em branco: explique o que
  é, o valor, e ofereça a ação para começar ("Crie seu primeiro projeto"). É uma
  oportunidade de onboarding, não um erro.
- **Loading.** Skeleton screens (contorno do conteúdo) > spinner para percepção
  de rapidez. Para ações, botão em estado loading. Otimista quando seguro
  (mostra o resultado antes de confirmar).
- **Error.** Diga o que houve, por que, e como resolver — em linguagem humana.
  Ofereça retry. Nunca só "Algo deu errado" sem saída.
- **Partial / poucos dados.** Uma linha na tabela não pode parecer bug.
- **Sucesso.** Confirme claramente que a ação funcionou.
- **Overflow.** Textos longos, muitos itens, nomes enormes — trate truncamento,
  wrap e limites.

---

## 4. Formulários (onde mais se perde conversão)

- Peça o mínimo. Cada campo a mais reduz conclusão. Pergunte "precisamos disso
  agora?".
- Um campo por linha (mobile e geralmente desktop). Agrupe por assunto.
- Labels acima do campo (mais rápido de escanear que ao lado).
- Marque o *opcional*, não o obrigatório, se a maioria for obrigatória.
- Validação: inline, após sair do campo; erro específico e próximo. Preserve o
  que o usuário digitou em caso de erro.
- Tipos de teclado corretos em mobile (email, numérico, tel). Autocomplete e
  autofill ativados.
- Botão de submit com rótulo de ação; desabilite/loading durante o envio para
  evitar duplo clique.
- Formulários longos: divida em passos com barra de progresso (efeito Zeigarnik).

---

## 5. Navegação

- **Top bar** — marca + navegação primária + utilitários (busca, conta). Boa
  para poucas seções.
- **Sidebar** — muitas seções, apps/admin. Pode colapsar; agrupe itens.
- **Tab bar (mobile)** — 3-5 destinos principais, sempre visível, ícone + label.
- **Breadcrumbs** — hierarquias profundas; mostram onde se está e permitem subir.
- **Estado ativo sempre visível** — o usuário precisa saber onde está.
- Rótulos claros e do vocabulário do usuário; ícone sozinho (sem label) só para
  os universais (busca, menu, fechar).

---

## 6. Microinterações e movimento

- **Propósito, não enfeite.** Animação deve: orientar (de onde veio/para onde
  foi), dar feedback (confirmar toque), ou mostrar relação/hierarquia.
- **Duração:** 150-250ms para a maioria das transições de UI; entradas um pouco
  mais lentas que saídas. Rápido demais some, lento demais irrita.
- **Easing:** ease-out para elementos entrando; ease-in-out para movimento
  contínuo. Evite linear (parece robótico).
- **Respeite prefers-reduced-motion.** Ofereça alternativa sem parallax/movimento
  intenso.
- Estados de hover/press dão sensação de resposta física e "vivo".

---

## 7. Mobile vs. Web

- **Toque:** alvos >= 44x44px, espaçados; zona do polegar (parte inferior) para
  ações frequentes. Evite hover como única forma de revelar algo.
- **Espaço:** menos espaço, então priorize implacavelmente; revelação
  progressiva, bottom sheets.
- **Gestos** complementam mas precisam de equivalente visível (não esconda a
  função só num swipe).
- **Responsivo:** desenhe mobile-first; defina breakpoints por onde o conteúdo
  quebra, não por dispositivos específicos. Teste 320px → ultrawide.
- **Performance é UX:** peso de imagem, lazy load, resposta imediata ao toque.
- **Plataforma:** respeite convenções de iOS (HIG) e Android (Material) —
  posição de botões, navegação, tipografia do sistema.

---

## 8. UX writing / microcopy

A interface é feita de palavras tanto quanto de pixels. Boa microcopy remove
atrito silenciosamente.

- **Clareza > esperteza.** O usuário está tentando fazer algo, não admirar seu
  texto.
- **Verbos de ação** em botões: "Criar conta", "Enviar", não "Submeter" ou "OK".
- **Concisão.** Corte palavras que não mudam o sentido. Frontload: informação
  importante primeiro.
- **Tom consistente** com a marca, mas sempre humano e respeitoso — nunca culpe
  o usuário ("Você digitou errado" → "Não encontramos essa conta").
- **Erros:** o que aconteceu + como resolver, específico. Sem códigos crus nem
  "erro inesperado".
- **Empty states e onboarding:** explique o valor e o próximo passo.
- **Confirmações destrutivas:** deixe claro o que será perdido e torne
  irreversível óbvio; nomeie o botão pela ação ("Excluir projeto"), não "Sim".
- **Rótulos e placeholders:** label descreve; placeholder exemplifica — não
  duplique nem substitua um pelo outro.