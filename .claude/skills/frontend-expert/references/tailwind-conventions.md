# Convenções Tailwind CSS

## Use os tokens do tema, não valores mágicos

Prefira `p-4`, `gap-6`, `text-slate-600` (escala do tema) a valores arbitrários como `p-[17px]` ou `text-[#5a5a5a]`. Valores arbitrários devem ser exceção — quando o design realmente exige um número que não existe na escala — não o padrão. Se estiver usando arbitrário com frequência para a mesma medida, é sinal de que vale estender o `tailwind.config` com um novo token em vez de repetir o valor mágico em vários lugares.

## Ordem de classes

Mantenha uma ordem consistente para não perder tempo procurando uma classe no meio de uma string longa. Ordem sugerida: **layout** (`flex`, `grid`, `block`) → **posicionamento** (`relative`, `absolute`, `inset-*`) → **box model** (`w-*`, `h-*`, `p-*`, `m-*`) → **tipografia** (`text-*`, `font-*`) → **cor/fundo** (`bg-*`, `text-color`, `border-color`) → **efeitos** (`shadow-*`, `rounded-*`, `opacity-*`) → **estados** (`hover:`, `focus:`, `disabled:`) → **responsivo** (`sm:`, `md:`, `lg:`). Se o projeto já usa o plugin `prettier-plugin-tailwindcss`, confie nele para ordenar automaticamente em vez de fazer isso manualmente.

## Responsividade mobile-first

Tailwind é mobile-first: classes sem prefixo se aplicam a todas as telas, e prefixos (`sm:`, `md:`, `lg:`, `xl:`) sobrescrevem a partir daquele breakpoint. Escreva o layout mobile primeiro, depois adicione os prefixos para as adaptações maiores — não o contrário.

```tsx
// Mobile-first correto
<div className="flex flex-col gap-4 md:flex-row md:gap-8">
```

## Extraia componentes, não classes

Quando uma combinação de classes se repete em vários lugares (ex: o estilo de um botão primário), não crie uma classe custom com `@apply` como primeira opção — extraia um componente React (`<Button variant="primary">`) que encapsula essas classes. Isso mantém a composição no lugar certo (JSX) e evita duas fontes de verdade para estilo.

## Dark mode

Se o projeto suporta dark mode, use o prefixo `dark:` consistentemente desde o primeiro componente (`bg-white dark:bg-slate-900`), em vez de adicionar depois — retrofitting dark mode em uma tela inteira é bem mais caro que já nascer com ele.

## Evite classes condicionais frágeis

Para classes condicionais, use uma utilidade como `clsx` ou `cn` (comum em projetos com shadcn/ui) em vez de concatenação manual de strings ou ternários aninhados direto no `className`:

```tsx
// Prefira isso
<button className={cn("px-4 py-2 rounded-md", isActive && "bg-blue-600 text-white")}>

// Evite isso
<button className={"px-4 py-2 rounded-md " + (isActive ? "bg-blue-600 text-white" : "")}>
```