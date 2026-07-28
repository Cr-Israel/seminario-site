# Padrões React / Next.js

## Server vs. Client Components (App Router)

Padrão: **Server Component**, a menos que o componente precise de:
- `useState`, `useEffect`, `useReducer` ou qualquer hook com estado/efeito
- Event handlers (`onClick`, `onChange`, etc.)
- APIs de navegador (`window`, `localStorage`, `IntersectionObserver`)
- Bibliotecas que dependem de contexto de cliente (ex: alguns providers de UI)

Quando só uma parte pequena da árvore precisa de interatividade, isole-a em um Client Component pequeno e mantenha o resto como Server Component — não marque a página inteira como `"use client"` por causa de um botão.

```tsx
// page.tsx (Server Component — busca dados direto)
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <div>
      <ProductInfo product={product} />
      <AddToCartButton productId={product.id} /> {/* Client Component isolado */}
    </div>
  );
}
```

## Onde colocar estado

- **Estado local de UI** (aberto/fechado, hover, valor de input não controlado por form library) → `useState` no próprio componente.
- **Estado compartilhado entre poucos componentes irmãos** → subir para o pai comum, passar via props.
- **Estado de servidor** (dados que vêm de uma API/DB) → não duplicar em `useState` global; usar uma lib de data fetching (React Query, SWR, ou `fetch` + Server Components) que já cuida de cache e revalidação.
- **Estado global de UI genuíno** (tema, usuário autenticado, carrinho) → Context API para casos simples; Zustand ou Jotai quando o Context começar a causar re-renders excessivos.

Evite prop drilling além de 2-3 níveis — nesse ponto, composição (passar componentes como children/props) ou um Context resolvem melhor do que continuar empurrando props.

## Composição em vez de props gigantes

Prefira isso:
```tsx
<Card>
  <Card.Header>
    <Card.Title>Título</Card.Title>
  </Card.Header>
  <Card.Body>{children}</Card.Body>
</Card>
```

Em vez de um componente com 15 props booleanas controlando cada variação visual (`showHeader`, `headerTitle`, `hasBorder`, `bodyPadding`...). Props explosivas são sinal de que o componente deveria ser composto, não configurado.

## Formulários

- Para formulários com mais de 2-3 campos ou validação: `react-hook-form` + `zod` para schema de validação. Evita re-render em cada tecla e centraliza as regras de validação.
- Sempre associar `<label>` a `<input>` (via `htmlFor`/`id` ou envolvendo o input).
- Mostrar erro de validação perto do campo, não só num resumo genérico no topo.

## Performance

- `next/image` para qualquer imagem que não seja um ícone SVG inline — resolve lazy loading, tamanhos responsivos e formatos modernos automaticamente.
- `next/dynamic` para componentes pesados que não são necessários no primeiro paint (modais, editores ricos, gráficos).
- Memoização (`useMemo`, `useCallback`, `React.memo`) só quando há um problema de performance real e mensurável — aplicar por padrão em tudo deixa o código mais difícil de ler sem ganho.
- Evitar objetos/arrays literais criados inline em cada render como prop de componentes memoizados (`<Comp options={{a: 1}} />` quebra a memoização).

## Data fetching em Next.js

- Server Components: `fetch` direto no componente, com `cache`/`revalidate` conforme a necessidade de atualização dos dados.
- Mutations (criar, editar, deletar) → Server Actions quando o projeto usa App Router, em vez de criar uma API route só para isso.
- Nunca expor chaves de API ou segredos em Client Components — se precisar de uma chamada de API a partir do cliente, passe por uma Server Action ou API route que segura a credencial no servidor.