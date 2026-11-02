import type { StaticImageData } from 'next/image'

export type CategoriaId = 'topos-de-bolo' | 'lembrancinhas' | 'cadernetas' | 'cadernos' | 'decoracao'

/** Uma peca real fotografada no ateliê. */
export type Peca = {
  id: string
  /** O que a foto mostra, em linguagem de alt text. */
  alt: string
  /** Legenda curta exibida na galeria. */
  legenda: string
  categoria: CategoriaId
  imagem: StaticImageData
  /** object-position quando a foto e recortada num card. */
  foco?: string
}

export type Categoria = {
  id: CategoriaId
  nome: string
  /** Frase curta de apresentacao. Nada de prazo, preco ou condicao comercial. */
  descricao: string
  ocasiaoSugerida: string
  /** Peca do acervo usada como capa da categoria. */
  capaId: string
}

export type Ocasiao = {
  id: string
  rotulo: string
}
