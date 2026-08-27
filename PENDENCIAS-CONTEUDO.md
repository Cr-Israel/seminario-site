# Pendências de conteúdo

Perguntas em aberto que só a secretaria, a coordenação da EFAL ou o Núcleo de
Pós-graduação podem responder. Enquanto não vierem as respostas, o site usa
texto marcado com `[PLACEHOLDER]` ou `// TODO(conteúdo)` — este arquivo é o
índice dessas pendências.

Ao receber uma resposta: atualize o dado no arquivo indicado, apague o marcador
no código e risque o item aqui.

---

## Aberto nesta rodada (FAQ da EFAL)

- [ ] **Um curso da EFAL adianta alguma coisa no Bacharelado?** Quem conclui CIT,
      CAL, CFO ou CFP consegue aproveitamento de disciplinas no Curso Livre de
      Bacharel em Teologia, ou o curso apenas prepara o candidato para o processo
      de admissão da IPB? — vira um item de `efalFaqItems` em
      `src/data/faqOnline.ts` assim que definido.

- [ ] **JURET ou JET?** `src/data/faqOnline.ts` credita a certificação à *Junta
      Regional de Educação Teológica (JURET)*; `src/components/sections/cit/CitFaq.tsx`
      fala em *Junta de Educação Teológica (JET)*. Qual é a correta para os cursos
      da EFAL — e as duas páginas devem usar a mesma?

- [ ] **Requisitos valem também para a Pós?** A EFAL não exige escolaridade,
      formação anterior nem membresia na IPB (já refletido no FAQ). Para a
      Pós-graduação, o item continua marcado `// REVISAR COM A SECRETARIA` em
      `src/data/faqOnline.ts`.

---

## Pós-graduação — Núcleo de Pós-graduação

- [ ] Descrição oficial e público-alvo dos 4 programas (`src/data/pos.ts`, todos
      com `isPlaceholder: true`). As grades curriculares já são as oficiais.
- [ ] Requisitos de ingresso (`posFaqItems`, `src/data/faqOnline.ts`).
- [ ] Duração oficial dos programas (`posFaqItems`, `src/data/faqOnline.ts` e
      `src/data/faq.ts`).
- [ ] Datas das próximas turmas (`src/data/cursos.ts`).

## EFAL — coordenação

- [ ] Apresentação, descrição e público-alvo do **Curso de Formação Musical (CFM)**
      e do **Curso de Formação em Capelania (CFC)** (`src/data/efal.ts`). As grades
      já estão no ar.
- [ ] Duração oficial do CFM e do CFC (hoje "A definir").
- [ ] **Links de inscrição:** 10 cursos ainda com `enrollUrl: "#"` — só o Libras
      tem link real. Definir formulário, sistema de matrícula ou WhatsApp da
      secretaria para cada um.
- [ ] Bios dos instrutores do CIT (`src/components/sections/cit/CitInstructors.tsx`,
      todos com `BIO_PLACEHOLDER`).

## Privacidade / LGPD — direção e secretaria

- [ ] **ID de medição do Google Analytics 4** (`G-XXXXXXXXXX`): criar a
      propriedade GA4 do site e preencher `NEXT_PUBLIC_GA_MEASUREMENT_ID` no
      ambiente. Sem a variável o site roda normal, apenas sem medição.
- [ ] **Encarregado (DPO):** nome e e-mail oficial de privacidade
      (`src/app/lgpd/page.tsx`). Enquanto não houver, a política aponta para a
      secretaria.
- [ ] **Revisão jurídica da política de privacidade** e definição da data de
      vigência oficial (`src/app/lgpd/page.tsx`, hoje 27/08/2026). O texto foi
      redigido a partir do que o site de fato coleta — formulários para Google
      Sheets, Analytics opt-in, Maps, YouTube nocookie e WhatsApp —, mas
      precisa do aval da direção.
- [ ] **Prazo de guarda dos dados dos formulários:** a política diz "pelo tempo
      necessário ao atendimento"; definir um prazo concreto com a secretaria.

## Graduação / institucional — secretaria

- [ ] Duração oficial do Bacharelado (`src/data/cursos.ts`, `src/data/faq.ts`).
- [ ] Datas do próximo Vestibular Unificado da IPB (`src/data/cursos.ts`).
- [ ] Política oficial de bolsas e descontos (`src/data/faq.ts`).
- [ ] Depoimentos reais de egressos e alunos (`src/data/depoimentos.ts`, 4
      placeholders).
- [ ] Três primeiras notícias reais (`src/data/noticias.ts`); a seção `News` fica
      desligada até lá.
- [ ] Fotos, credenciais e bios que faltam no corpo docente (`src/data/docentes.ts`)
      e fotos dos demais membros da JURET (`src/data/juret.ts`).
- [ ] Canais reais de apoio ao seminarista — PIX e dados bancários
      (`src/components/sections/projetos/ApoieSeminarista.tsx`).
- [ ] Encarregado (DPO), e-mail oficial e data de vigência da política de
      privacidade (`src/app/lgpd/page.tsx`).
- [ ] Domínio oficial do novo site (`src/app/layout.tsx`).
- [ ] Link real do portal do aluno (`src/components/layout/Header.tsx`) e da
      Revista Sementes (`src/data/conteudos.ts`).
