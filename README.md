# My Mimos — landing page

Landing page do ateliê **My Mimos**, papelaria personalizada em São Luís — MA.
Página única, estática, com conversão direta no WhatsApp e sem backend.

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

Produção:

```bash
npm run build
npm run start
```

## Scripts

| Script             | O que faz                                  |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Servidor de desenvolvimento                |
| `npm run build`    | Build de produção (gera a página estática) |
| `npm run start`    | Serve o build                              |
| `npm run lint`     | Biome: formatação, lint e ordem de imports |
| `npm run lint:fix` | Aplica as correções do Biome               |
| `npm run format`   | Só formatação                              |

Linter e formatador são o **Biome** — não há ESLint neste projeto.

## Variável de ambiente

| Nome                   | Obrigatória | Para quê                                                  |
| ---------------------- | ----------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No deploy   | URL canônica, `sitemap.xml`, `robots.txt` e metadados OG. |

Sem ela o build usa `http://localhost:3000`, o que mantém o build válido mas
deixa os metadados sociais apontando para o endereço local. Defina o domínio
real antes de publicar.

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

Conteúdo que muda com o tempo — telefone, Instagram, categorias, peças, textos
das peças — vive em [`src/content`](src/content). Nenhum componente tem texto
comercial cravado.

## WhatsApp

Todos os pontos de contato passam por `linkWhatsapp()` em
[`src/lib/whatsapp.ts`](src/lib/whatsapp.ts), então o número existe num lugar só.
O montador de pedido escreve a mensagem a partir das escolhas do visitante e
abre a conversa pelo `wa.me`, que resolve sozinho entre aplicativo e WhatsApp
Web conforme o dispositivo.

## Imagens

As fotos originais ficam em `src/assets` e não são alteradas. As versões
publicadas, em `src/assets/catalogo`, saíram de um tratamento: duas fotos
estavam de cabeça para baixo, doze tinham data gravada pela câmera e uma tinha
adesivo de story. O script usado está descrito em `DESIGN.md`; para reprocessar,
refaça o recorte a partir dos originais.

## Design

[`DESIGN.md`](DESIGN.md) registra o sistema visual: cores, tipografia,
materiais, movimento e regras de composição.
