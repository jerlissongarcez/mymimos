<div align="center">

# My Mimos — Landing Page

**Personalizados que transformam momentos em lembranças**

Landing page do ateliê de papelaria personalizada **My Mimos**, em São Luís — MA.
Página única, sem backend, com conversão direta no WhatsApp.

[![Next.js](https://img.shields.io/badge/Next.js-16.4-000?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.3-087ea4?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Biome](https://img.shields.io/badge/Biome-2.6-60a5fa?logo=biome&logoColor=white)](https://biomejs.dev)

</div>

---

## Sobre o projeto

O visitante típico chega pelo celular, à noite, comparando ateliês no Instagram
enquanto organiza um mesversário, chá de bebê ou volta às aulas. A página existe
para resolver esse momento: mostrar trabalho real entregue, deixar claro que a
peça sai com o nome de quem vai receber e levar ao WhatsApp com o pedido já
escrito.

**Decisões de produto que explicam o código:**

- **Sem backend e sem formulário enviado.** O montador de pedido escreve a
  mensagem no cliente e abre a conversa pelo `wa.me`. Nada trafega para um
  servidor próprio, não há banco de dados nem painel administrativo.
- **Nenhum dado comercial inventado.** Preço, prazo, pedido mínimo, e-mail e
  endereço não aparecem porque não foram informados pelo ateliê.
- **Categoria só entra se existir foto real.** As cinco frentes de trabalho da
  navegação saem do acervo fotografado; "cartão personalizado" fica fora e
  aparece apenas como encomenda sob medida no montador.
- **Conteúdo separado de componente.** Nenhum componente tem texto comercial
  cravado — tudo vem de [`src/content`](src/content).

## Funcionalidades

- **Montador de pedido** — ocasião, peças, nome, tema e data viram uma mensagem
  pronta; o visitante confere o texto antes de abrir o WhatsApp.
- **Catálogo em arquivo** — 22 peças reais do ateliê em 5 categorias, com `alt`
  descritivo e legenda, tipadas em TypeScript.
- **Galeria com visualizador** — colunas CSS que preservam a proporção original
  de cada foto, com ampliação em diálogo acessível (Radix).
- **Navegação com seção ativa** — hook de observação de rolagem destaca a seção
  em que o visitante está.
- **Contato unificado** — header, botão flutuante, montador e rodapé passam
  todos por `linkWhatsapp()`.
- **SEO e social** — metadados Open Graph/Twitter, `sitemap.xml` e `robots.txt`
  gerados pelo Next, imagem OG e ícones próprios.
- **Acessibilidade** — contraste 4.5:1 em todo par texto/fundo (auditado com
  axe-core, zero violações), alvos de toque ≥ 24px, link "pular para o
  conteúdo", anel de foco temático e respeito a `prefers-reduced-motion`.

## Stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack, `cacheComponents`)
- **[React 19](https://react.dev)** — Server Components por padrão; `'use client'` só onde há estado
- **[TypeScript 5](https://www.typescriptlang.org)** em modo estrito
- **[Tailwind CSS 4](https://tailwindcss.com)** via `@tailwindcss/turbopack`, com tokens em `globals.css`
- **[Radix UI Dialog](https://www.radix-ui.com)** para o visualizador de fotos
- **[Lucide](https://lucide.dev)** para ícones de interface
- **[Biome 2](https://biomejs.dev)** para lint, formatação e ordem de imports

## Requisitos

- Node.js **20.9** ou superior
- npm (o repositório versiona `package-lock.json`)

## Começando

```bash
git clone <url-do-repositorio>
cd mymimos

npm install
npm run dev      # http://localhost:3000
```

Build e execução em produção:

```bash
npm run build
npm run start
```

## Scripts

| Script             | O que faz                                  |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Servidor de desenvolvimento                |
| `npm run build`    | Build de produção                          |
| `npm run start`    | Serve o build                              |
| `npm run lint`     | Biome: formatação, lint e ordem de imports |
| `npm run lint:fix` | Aplica as correções do Biome               |
| `npm run format`   | Só formatação                              |

> Linter e formatador são o **Biome**. Não há ESLint neste projeto — não
> adicione um.

## Variáveis de ambiente

| Nome                   | Obrigatória | Para quê                                                 |
| ---------------------- | ----------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No deploy   | URL canônica, `sitemap.xml`, `robots.txt` e metadados OG |

Sem ela o build usa `http://localhost:3000`. O build continua válido, mas os
metadados sociais apontam para o endereço local — **defina o domínio real antes
de publicar**.

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
```

## Estrutura

```
src/
  app/              layout, página, estilos globais, ícones, OG, robots, sitemap
  assets/           fotos originais do ateliê (intocadas)
  assets/catalogo/  derivadas: corrigidas, recortadas e em WebP
  components/
    layout/         header, rodapé, botão flutuante
    sections/       hero, peças, ateliê, galeria, orçamento, fechamento
    produtos/       bloco de categoria, grade da galeria, visualizador
    ui/             ação, recorte, revelar, marca, ícones
  content/          site.ts (verdade da marca) e catalogo.ts (peças)
  hooks/            seção ativa na navegação
  lib/              link e mensagem do WhatsApp, utilitário de classes
  types/            tipos compartilhados
```

A página é a composição de seções em [`src/app/page.tsx`](src/app/page.tsx),
intercaladas pelo divisor `Recorte` — cada seção é uma folha de cartolina e o
recorte é a tesoura entre elas.

## Editando o conteúdo

Tudo que muda com o tempo vive em [`src/content`](src/content). Nenhuma dessas
mudanças exige tocar em componente.

**Dados da marca** — [`src/content/site.ts`](src/content/site.ts): nome,
tagline, cidade, Instagram, WhatsApp e itens da navegação.

**Catálogo** — [`src/content/catalogo.ts`](src/content/catalogo.ts): categorias,
peças, ocasiões do montador e opções de peça. Para adicionar uma peça:

1. Coloque a foto original em `src/assets/` e a derivada tratada em
   `src/assets/catalogo/` (WebP).
2. Importe a derivada no topo de `catalogo.ts`.
3. Acrescente a entrada em `pecas` com `id`, `alt` descritivo, `legenda`,
   `categoria` e `imagem` — os tipos estão em [`src/types/index.ts`](src/types/index.ts).

Uma categoria nova precisa de `id` em `CategoriaId`, entrada em `categorias` e um
`capaId` apontando para uma peça existente.

## WhatsApp

Todos os pontos de contato passam por `linkWhatsapp()` em
[`src/lib/whatsapp.ts`](src/lib/whatsapp.ts), então o número existe num lugar só
— em `site.whatsapp.e164`, no formato E.164 exigido pelo `wa.me`.

O montador monta o texto com `mensagemDePedido()` a partir das escolhas do
visitante e abre a conversa pelo `wa.me`, que resolve sozinho entre aplicativo e
WhatsApp Web conforme o dispositivo.

## Imagens

As fotos originais ficam em `src/assets` e **não são alteradas**. As versões
publicadas, em `src/assets/catalogo`, saíram de um tratamento: duas fotos
estavam de cabeça para baixo, doze tinham data gravada pela câmera e uma tinha
adesivo de story. O script usado está descrito em [`DESIGN.md`](DESIGN.md); para
reprocessar, refaça o recorte a partir dos originais.

## Design

[`DESIGN.md`](DESIGN.md) registra o sistema visual: cores e seus papéis,
tipografia, materiais (sombra de papel colado, placa dourada, recorte, fibra),
movimento e regras de composição. Leia antes de alterar aparência — as escolhas
são deliberadas e algumas recusas (fundo creme, serifada romântica, galeria
branca) fazem parte do sistema.

## Deploy

O projeto é um app Next.js padrão, sem dependência de serviço externo além das
fontes do Google. Em qualquer host com Node 20.9+:

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br npm run build
npm run start
```

Em plataformas como a Vercel, basta apontar o repositório e cadastrar
`NEXT_PUBLIC_SITE_URL` nas variáveis de ambiente do projeto.

## Convenções

- **Código e conteúdo em português.** Nomes de componentes, props, tipos e
  arquivos seguem o vocabulário do ateliê (`Peca`, `Recorte`, `Orcamento`).
- **Server Component por padrão.** `'use client'` apenas onde há estado ou
  evento do navegador.
- **Rode `npm run lint` antes de commitar.** O Biome também ordena os imports e
  as classes do Tailwind.
- **Não invente dado comercial.** Preço, prazo, pedido mínimo, endereço, e-mail,
  depoimento ou perfil social fora do `@mymimosslz` não entram na página.
- **Antes de escrever código**, leia o guia relevante em
  `node_modules/next/dist/docs/` — esta versão do Next tem mudanças que não
  batem com convenções mais antigas.

## Licença

Projeto proprietário. O código, as fotografias do acervo e a identidade visual
pertencem ao ateliê My Mimos — uso, cópia ou redistribuição somente com
autorização.

---

<div align="center">

**My Mimos** · São Luís — MA
[Instagram @mymimosslz](https://www.instagram.com/mymimosslz) · [WhatsApp (98) 99158-5447](https://wa.me/5598991585447)

</div>
