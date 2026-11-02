# DESIGN.md — My Mimos

Sistema visual da landing page do ateliê. Escrito a partir do que foi construído,
não antes dele.

## Mundo: cartolina empilhada

A My Mimos trabalha empilhando papel colorido recortado e colado em camadas. A
página segue a mesma regra de montagem: cada seção é uma folha de cartolina em
cor cheia, as folhas se sucedem de cima para baixo e o limite entre elas é um
recorte de tesoura, nunca uma linha reta.

O que o sistema recusa, de propósito: fundo creme com serifada romântica (o
template de ateliê que todo site do ramo usa), grade de cards iguais como
estrutura de página, e galeria branca neutra. Creme existe aqui só como papel de
peça — cartão, etiqueta, moldura de foto — nunca como fundo de página.

## Cores

As cores saem do acervo real: o pink da logo oficial e os papéis que o ateliê
usa nas peças fotografadas.

| Token                   | Valor     | Papel no sistema                                   |
| ----------------------- | --------- | -------------------------------------------------- |
| `--color-rosa-tinta`    | `#8e0f45` | Fundo do hero e da galeria. Cor âncora da marca.   |
| `--color-rosa`          | `#e12a6e` | Pink da logo. Hover, scrollbar, seleção de texto.  |
| `--color-rosa-acao`     | `#d11f62` | Fundo de ação sólida e seção de fechamento.        |
| `--color-algodao`       | `#f9c9da` | Fundo da seção de peças.                           |
| `--color-algodao-claro` | `#fde7ef` | Painel da mensagem no montador de pedido.          |
| `--color-azul`          | `#bfdce6` | Fundo da seção do ateliê. Papel azul-bebê real.    |
| `--color-menta`         | `#cbdfc8` | Reserva de papel, do kit em verde do acervo.       |
| `--color-kraft`         | `#d3b08c` | Reserva de papel, dos ursinhos em kraft.           |
| `--color-creme`         | `#fbf2ec` | Papel de peça: cards, fundo do montador, molduras. |
| `--color-dourado`       | `#b8862f` | Papel espelhado em área pequena.                   |
| `--color-dourado-claro` | `#e3c06a` | Etiquetas, destaque do título, anel de foco.       |
| `--color-tinta`         | `#3a1020` | Texto sobre fundo claro.                           |
| `--color-tinta-forte`   | `#260a15` | Rodapé e fundo de overlay.                         |

Estratégia: **cor comprometida em escala de página**. Cada seção é um campo
chapado inteiro, não um neutro com detalhe colorido. A sequência alterna
densidade: rosa-tinta → algodão → azul → rosa-tinta → creme → rosa-ação → tinta.

Todo par texto/fundo usado passa em 4.5:1 (auditado com axe-core, zero
violações). O dourado só recebe texto escuro — branco sobre dourado não passa.

## Tipografia

- **Display — Bricolage Grotesque** (`--fonte-display`). Encorpada e levemente
  irregular, como letra montada em camadas de papel. Entressinhada em `-0.03em`.
  Atenção: o `Q` maiúsculo tem cauda longa que parece sublinhado de link em
  corpos pequenos — evite começar rótulos curtos com `Q`.
- **Texto — Hanken Grotesk** (`--fonte-texto`). Legível em corpo pequeno e em
  tela de celular.

Nenhuma script na página: a logo já carrega a dela, e repetir seria o clichê da
categoria. Títulos usam `text-wrap: balance`; parágrafos usam `pretty`.
Numerais são tabulares.

Escala de display: `clamp(3.1rem, 11vw, 6rem)` no h1, `clamp(2.1rem, 5.6vw, 3.4rem)`
nos h2. Medida de texto entre 44 e 56 caracteres.

## Materiais

- **Sombra de papel colado** (`--shadow-peca`, `--shadow-peca-alta`): deslocamento
  curto somado a blur curto. Nunca halo sem deslocamento, nunca sombra dura.
- **Placa de papel espelhado** (`--shadow-placa` + gradiente dourado): a ação
  primária é a mesma plaquinha que o ateliê recorta em dourado. Texto sempre em
  tinta.
- **Recorte** (`Recorte`): ladrilho SVG repetido em X, 56×18px. Mantém o mesmo
  tamanho de festão em qualquer largura de tela, sem esticar.
- **Fibra** (`.fibra`): ruído radial de 4px, bem sutil, só nos campos rosa.
- **Rotação**: só em peças soltas — foto do hero (−2,4°), foto do ateliê (−1,8°),
  etiquetas (+2,2° a +2,6°). Nunca em elementos de grade. Elemento rotacionado
  precisa de folga lateral, senão estoura a largura no mobile.

## Movimento

Um único gesto autoral: a peça **assenta** no lugar (sobe 22px e aparece), com
`cubic-bezier(0.16, 1, 0.3, 1)` e escalonamento de 0,06–0,07s entre irmãs.

O estado escondido só é aplicado pelo JavaScript, depois da montagem. Sem JS,
antes da hidratação ou com `prefers-reduced-motion`, a página nasce inteira e
visível. Isso é requisito do sistema, não detalhe de implementação.

## Superfícies do navegador

Seleção de texto, barra de rolagem e anel de foco são temáticos. O foco é
dourado-claro por padrão e vira tinta (`.foco-tinta`) onde o fundo é dourado ou
claro demais para o anel aparecer.

## Regras de composição

- Alvo de toque mínimo de 24px (WCAG 2.5.8); ações principais com 44px.
- Blocos de categoria esticam até a altura da linha do grid (`h-full`), senão a
  grade abre buracos.
- Os cinco blocos de categoria são iguais em forma e tamanho, de propósito: a
  seção existe para comparar as cinco frentes de trabalho, e a foto é o que
  convence. O texto fica no mínimo (nome, uma frase, o link) para que a imagem
  domine o bloco.
- Grade: 1 coluna no celular, 2 a partir de 640px, 3 a partir de 768px e 5 a
  partir de 1280px. Só no celular o bloco vira linha horizontal — empilhado com
  a foto 4/5 a seção passava de 3.600px de rolagem, e cortar fotos verticais num
  formato deitado estragaria o enquadramento das peças.
- A galeria preserva a proporção original de cada foto (colunas CSS), porque
  recorte forçado desfigura peça de papel.
- O botão flutuante some sobre o montador de pedido, onde já existe ação maior.
