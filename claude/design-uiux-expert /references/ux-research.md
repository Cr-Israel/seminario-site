# UX: Heurísticas, Pesquisa, Estratégia e Acessibilidade

> Como garantir que o design resolve o problema *certo* para pessoas reais — e é
> usável por todas elas.

## Índice
1. 10 Heurísticas de Nielsen
2. Leis de UX
3. Métodos de pesquisa
4. Personas
5. Mapas de jornada
6. Arquitetura de informação
7. Métricas de UX
8. Acessibilidade (WCAG)

---

## 1. As 10 Heurísticas de Nielsen (avaliação heurística)

Use como lente para auditar qualquer interface. Para cada tela, pergunte se ela
respeita cada item:

1. **Visibilidade do status do sistema** — o sistema informa o que está
   acontecendo (loading, salvo, progresso) em tempo hábil.
2. **Correspondência com o mundo real** — linguagem e conceitos do usuário, não
   jargão do sistema. Ordem natural.
3. **Controle e liberdade** — saídas claras, desfazer/refazer, cancelar. "Saída
   de emergência" sempre visível.
4. **Consistência e padrões** — siga convenções da plataforma; mesma palavra =
   mesma coisa.
5. **Prevenção de erros** — melhor evitar o erro (confirmações, restrições,
   defaults sensatos) do que só reportá-lo.
6. **Reconhecer em vez de recordar** — torne opções, ações e info visíveis; não
   exija memória entre telas.
7. **Flexibilidade e eficiência** — atalhos para experts, caminhos simples para
   novatos. Acelere sem excluir.
8. **Estética e design minimalista** — nada de conteúdo irrelevante competindo
   por atenção. Cada elemento a mais enfraquece os demais.
9. **Ajude a reconhecer, diagnosticar e recuperar de erros** — mensagens em
   linguagem clara, apontam o problema e sugerem a solução (sem códigos).
10. **Ajuda e documentação** — quando necessária, fácil de buscar, focada na
    tarefa, com passos concretos.

---

## 2. Leis de UX (princípios de psicologia aplicada)

- **Lei de Hick** — o tempo de decisão cresce com o número/complexidade de
  opções. Reduza escolhas; agrupe; revele progressivamente.
- **Lei de Fitts** — tempo para atingir um alvo depende do tamanho e distância.
  Botões importantes grandes e próximos; alvos de toque >= 44x44px.
- **Lei de Jakob** — usuários passam a maior parte do tempo em *outros* sites.
  Eles esperam que o seu funcione igual. Não reinvente convenções.
- **Lei de Miller** — a memória de trabalho lida com ~5-9 itens. Divida em
  grupos ("chunking"), como números de telefone.
- **Lei de proximidade (Gestalt)** — objetos próximos são percebidos como grupo.
- **Lei de similaridade** — elementos parecidos são vistos como relacionados.
- **Lei de Prägnanz** — o olho simplifica formas complexas nas mais simples
  possíveis.
- **Efeito de posição serial** — lembramos melhor o primeiro e o último item.
  Ponha o crítico nas pontas.
- **Efeito Von Restorff (isolamento)** — o item diferente é lembrado. Use para
  destacar a ação primária.
- **Lei de Tesler (conservação da complexidade)** — toda complexidade é
  irredutível; a questão é quem a carrega — o sistema ou o usuário. Prefira que
  o sistema absorva.
- **Efeito Zeigarnik** — tarefas incompletas ficam na memória. Barras de
  progresso e checklists motivam a conclusão.
- **Efeito de estética-usabilidade** — o que é bonito é *percebido* como mais
  usável. Estética constrói confiança (mas não substitui usabilidade real).
- **Regra do pico-fim** — a experiência é lembrada pelo seu momento mais intenso
  e pelo fim. Capriche nesses pontos.
- **Lei de Postel** — seja tolerante na entrada (aceite formatos variados),
  rigoroso na saída. Ex.: aceite telefone com ou sem parênteses.

---

## 3. Métodos de pesquisa

**Escolha por pergunta:**
- Precisa entender *por quê* / comportamento → qualitativo (entrevistas, testes
  de usabilidade, estudos de campo).
- Precisa saber *quanto* / quantos → quantitativo (analytics, surveys, testes
  A/B).
- Atitudinal (o que dizem) vs. comportamental (o que fazem). Priorize o
  comportamental quando divergirem.

**Entrevistas com usuários** — perguntas abertas, sobre o passado concreto
("conte a última vez que..."), não hipóteses ("você usaria..."). Não induza.
Escute 80%, fale 20%. 5-8 já revelam a maioria dos padrões.

**Teste de usabilidade** — dê *tarefas*, não perguntas. Peça para pensar em voz
alta. Observe onde travam; não ajude. 5 usuários encontram ~85% dos problemas
de usabilidade (Nielsen). Meça: taxa de sucesso, tempo, erros, satisfação.

**Card sorting** — para arquitetura de informação: usuários agrupam/nomeiam
conteúdos. Aberto (eles criam categorias) ou fechado (categorias dadas).

**Survey** — para escala. Perguntas neutras, uma ideia por pergunta, evite
duplas negativas. Boas escalas: SUS (usabilidade), NPS (recomendação, com
cautela), CSAT.

**Teste A/B** — comparação quantitativa de variantes com tráfego real. Exige
volume e uma métrica primária definida antes.

**Análise heurística** — avaliação por especialista usando as 10 heurísticas;
rápida e barata, complementa (não substitui) teste com usuário.

---

## 4. Personas

Representações baseadas em pesquisa (não inventadas) de segmentos de usuário.
Cada persona útil tem: objetivo principal, contexto de uso, frustrações/dores,
nível de habilidade, e uma citação real. Evite personas demográficas vazias
("Maria, 34, gosta de café") — o que importa é comportamento e necessidade.
Alternativa mais enxuta e acionável: **jobs-to-be-done** ("quando [situação],
quero [motivação], para [resultado]").

---

## 5. Mapas de jornada

Visualizam a experiência ponta a ponta ao longo do tempo. Colunas = fases;
linhas típicas: ações do usuário, pensamentos, emoções (curva), pontos de
contato, e **oportunidades/dores**. O valor está em expor os vales emocionais e
as lacunas entre canais. Foque nos momentos de maior atrito e nos "momentos da
verdade". Relacionados: service blueprint (adiciona os bastidores/backstage).

---

## 6. Arquitetura de informação (IA)

- **Organize pelo modelo mental do usuário**, não pelo organograma da empresa.
- Esquemas: por tópico, tarefa, público, ou sequência.
- **Navegação:** global (sempre visível), local (contexto), utilitária (conta,
  busca). Rotule com as palavras do usuário; teste com card sorting/tree test.
- **Profundidade vs. largura:** menus rasos e largos costumam bater fundos e
  estreitos. Regra prática: chegar a qualquer conteúdo em <= 3 cliques *não* é
  lei — cliques certos importam mais que poucos.
- **Findability:** busca boa + navegação boa + breadcrumbs. Se o usuário não
  acha, não existe.

---

## 7. Métricas de UX

- **HEART (Google):** Happiness, Engagement, Adoption, Retention, Task success.
  Para cada, defina Goals-Signals-Metrics.
- **Task success:** taxa de conclusão, tempo na tarefa, taxa de erro.
- **SUS (System Usability Scale):** 10 itens, score 0-100; > 68 é acima da média.
- **Conversão e funil:** onde as pessoas abandonam.
- **Cuidado com métricas de vaidade** (pageviews) — meça o que liga ao objetivo
  do usuário e do negócio.

---

## 8. Acessibilidade (WCAG) — não é opcional

Princípios **POUR**: Perceptível, Operável, Compreensível, Robusto. Meta prática:
WCAG 2.1/2.2 nível **AA**.

**Essenciais que você sempre checa:**
- **Contraste:** texto normal >= 4.5:1; texto grande >= 3:1; UI/ícones >= 3:1.
- **Teclado:** tudo operável só com teclado (Tab/Shift+Tab/Enter/Esc/setas).
  Ordem de foco lógica. **Indicador de foco visível** e com contraste (>= 3:1).
  Nada de "focus trap" acidental.
- **Alvos de toque:** >= 24x24px (AA 2.2); >= 44x44px é a boa prática.
- **Texto alternativo:** imagens informativas têm alt descritivo; decorativas
  têm alt vazio.
- **Semântica/ARIA:** use HTML nativo primeiro (button, a, label, nav, main).
  ARIA só quando o nativo não basta — ARIA errado é pior que nenhum.
- **Formulários:** todo campo tem <label> associado; erros descritos em texto e
  ligados ao campo; não dependa só de cor.
- **Não dependa só de cor** para transmitir significado (erro, status): some
  ícone, texto ou padrão.
- **Movimento:** respeite prefers-reduced-motion; evite piscar (risco de
  convulsão).
- **Estrutura:** headings hierárquicos (h1→h2→h3, sem pular), landmarks, idioma
  da página definido.
- **Zoom/reflow:** utilizável a 200% de zoom sem perda de conteúdo; layout
  responsivo até 320px de largura.
- **Legendas/transcrições** para áudio e vídeo.

**Como testar:** navegue a página só com teclado; rode um leitor de tela
(VoiceOver/NVDA) nos fluxos principais; use verificadores de contraste; audite
com axe/Lighthouse. Ferramenta automática pega ~30-40% — o resto é teste manual.