# Guia — Ligando os formulários do site ao Google Sheets

O site envia dados de formulários para **duas planilhas separadas** do Google
Sheets, por meio do Google Apps Script (sem servidor próprio):

| Planilha | O que recebe | Variável de ambiente |
| --- | --- | --- |
| **Inscrições** | Botão "Inscrever-se" dos cursos (EFAL e Pós) | `SHEETS_WEBHOOK_URL` |
| **Contatos** | Formulário "Quero receber contato" da Home **e** o "Avise-me" dos Cursos Online | `SHEETS_CONTATO_WEBHOOK_URL` |

O passo a passo é o mesmo para as duas — muda apenas o código do script
(seções 2A e 2B) e a variável de ambiente (seção 4). Faça tudo duas vezes,
uma para cada planilha.

---

## 1. Criar a planilha

1. Acesse [sheets.google.com](https://sheets.google.com) com a conta do
   Seminário e crie uma planilha em branco.
2. Dê um nome claro, por exemplo **"Site — Inscrições"** (ou **"Site —
   Contatos"** na segunda vez).
3. Não é preciso criar abas nem cabeçalhos: o script cria tudo sozinho na
   primeira vez que receber dados.

Na planilha de **inscrições**, cada curso terá a própria aba, criada
automaticamente com o código do curso:

`CIT`, `CAL`, `CFO`, `CFP`, `CFL`, `CFM`, `CFC` (EFAL) e
`POS-PLANTACAO-E-REVITALIZACAO`, `POS-NOVO-TESTAMENTO`,
`POS-COSMOVISAO-REFORMADA`, `POS-GESTAO-MINISTERIAL` (Pós).

*(Esses códigos vêm do campo `codigo` em `src/data/efal.ts` e
`src/data/pos.ts` — se um dia criarem um curso novo, o script cria a aba nova
sozinho.)*

## 2. Criar o Apps Script

Na planilha, abra **Extensões → Apps Script**. Apague o conteúdo do editor e
cole o código da planilha correspondente:

### 2A. Script da planilha de INSCRIÇÕES

```js
const CABECALHO = ["Data/Hora", "Curso", "Nome", "Telefone", "E-mail", "Cupom"];

function doPost(e) {
  const dados = JSON.parse(e.postData.contents);
  const planilha = SpreadsheetApp.getActiveSpreadsheet();

  // Cada curso cai na aba com o seu código (CIT, CAL, POS-…).
  const nomeAba = String(dados.codigo || "SEM-CODIGO");
  let aba = planilha.getSheetByName(nomeAba);
  if (!aba) {
    aba = planilha.insertSheet(nomeAba);
    aba.appendRow(CABECALHO);
    aba.setFrozenRows(1);
  }

  aba.appendRow([
    new Date(),
    String(dados.curso || ""),
    String(dados.nome || ""),
    String(dados.telefone || ""),
    String(dados.email || ""),
    String(dados.cupom || ""),
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### 2B. Script da planilha de CONTATOS

```js
const NOME_ABA = "Contatos";
const CABECALHO = [
  "Data/Hora",
  "Nome",
  "Telefone",
  "E-mail",
  "Curso de interesse",
  "Mensagem",
];

function doPost(e) {
  const dados = JSON.parse(e.postData.contents);
  const planilha = SpreadsheetApp.getActiveSpreadsheet();

  let aba = planilha.getSheetByName(NOME_ABA);
  if (!aba) {
    aba = planilha.insertSheet(NOME_ABA);
    aba.appendRow(CABECALHO);
    aba.setFrozenRows(1);
  }

  aba.appendRow([
    new Date(),
    String(dados.nome || ""),
    String(dados.telefone || ""),
    String(dados.email || ""),
    String(dados.cursoInteresse || ""),
    String(dados.mensagem || ""),
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

*Obs.: os envios do "Avise-me" dos Cursos Online chegam nessa mesma aba, com
a coluna Mensagem preenchida com "Avise-me quando abrirem novas turmas." —
é assim que se distingue a origem.*

Salve (ícone de disquete ou Ctrl+S) e dê um nome ao projeto (ex.: "Webhook
inscrições site").

## 3. Publicar como App da Web

1. No editor do Apps Script, clique em **Implantar → Nova implantação**.
2. Clique na engrenagem ao lado de "Selecionar tipo" e escolha **App da Web**.
3. Preencha:
   - **Executar como**: *Eu* (a sua conta).
   - **Quem pode acessar**: **Qualquer pessoa** ⚠️ — é isso que permite ao
     site enviar dados. A URL é longa e secreta; quem não a tiver não acessa.
4. Clique em **Implantar** e autorize as permissões pedidas (o Google avisa
   que o app não é verificado — clique em "Avançado → Acessar (não seguro)";
   é o seu próprio script).
5. Copie a **URL do app da Web** (termina em `/exec`). É ela que vai na
   variável de ambiente.

> **Se editar o script depois**: a URL só passa a usar o código novo se você
> for em **Implantar → Gerenciar implantações → (lápis) → Versão: Nova
> versão → Implantar**. Só salvar o arquivo não basta.

## 4. Configurar as URLs no site

**Local (desenvolvimento)** — crie/edite o arquivo `.env.local` na raiz do
projeto (use o `.env.example` como modelo):

```
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/AAAA.../exec
SHEETS_CONTATO_WEBHOOK_URL=https://script.google.com/macros/s/BBBB.../exec
```

Reinicie o `npm run dev` depois de editar (variáveis só carregam na
inicialização).

**Produção** — cadastre as duas variáveis no painel da hospedagem (na
Vercel: *Settings → Environment Variables*) e faça novo deploy.

⚠️ Nunca renomeie para `NEXT_PUBLIC_...` e nunca coloque as URLs em arquivos
commitados — elas são secretas e ficam só no servidor. O `.env.local` já é
ignorado pelo git.

## 5. Testar

Sem abrir o site, pelo terminal (troque pela sua URL):

```bash
curl -sL -X POST "https://script.google.com/macros/s/AAAA.../exec" \
  -H "Content-Type: application/json" \
  -d '{"codigo":"CIT","curso":"Curso Introdutório de Teologia","nome":"Teste do Guia","telefone":"(21) 99999-9999","email":"teste@teste.com","cupom":"GUIA"}'
```

Deve responder `{"ok":true}` e a linha aparecer na aba `CIT`. Para a
planilha de contatos, o mesmo com os campos `nome`, `telefone`, `email`,
`cursoInteresse`, `mensagem`.

Depois, teste pelo site (`npm run dev`):

- **Inscrições**: abra um curso (ex.: `/cursos-online/novo-testamento`),
  clique em "Inscrever-se", preencha e envie → linha na aba do curso.
- **Contatos**: formulário no fim da Home (`/#contato`) → linha na aba
  "Contatos". Idem o "Avise-me" em `/cursos-online`.

Sem as variáveis configuradas, os formulários mostram um erro amigável e o
site continua funcionando normalmente — nada quebra.

## Problemas comuns

- **Erro amigável no site + `não configurada` no terminal** — a variável não
  está no `.env.local` (ou o servidor não foi reiniciado após editar).
- **Enviei e não caiu na planilha** — confira se a implantação é a versão
  mais recente (seção 3, observação) e se "Quem pode acessar" está como
  "Qualquer pessoa".
- **Linha caiu na aba `SEM-CODIGO`** — o envio veio sem código de curso;
  verifique o campo `codigo` em `src/data/efal.ts` / `src/data/pos.ts`.
- **Telefone virou número estranho** — formate a coluna como *Texto simples*
  (Formatar → Número → Texto simples); os envios novos já chegam como texto.
