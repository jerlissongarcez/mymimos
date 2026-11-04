/**
 * Verdade da marca. Tudo aqui foi observado na logo oficial ou nas proprias
 * fotos do acervo — nada inventado. Preco, prazo, endereco e e-mail nao
 * existem neste arquivo porque nao foram informados.
 */
export const site = {
  nome: 'My Mimos',
  /** Assinatura que vem impressa na logo oficial. */
  tagline: 'Personalizados que transformam momentos em lembranças',
  /** Quem recorta e monta as pecas, e assina o ateliê. Informado pela dona. */
  artesa: 'Karolyna Marques',
  cidade: 'São Luís',
  uf: 'MA',
  instagram: {
    usuario: '@mymimosslz',
    url: 'https://www.instagram.com/mymimosslz',
  },
  whatsapp: {
    /** E.164 sem simbolos, formato exigido pelo wa.me */
    e164: '5598991585447',
    exibicao: '(98) 99158-5447',
  },
} as const

/** Definido no deploy. Sem dominio confirmado, o fallback mantem o build valido. */
export const urlSite = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const navegacao = [
  { href: '#pecas', rotulo: 'O que fazemos' },
  { href: '#atelie', rotulo: 'O ateliê' },
  { href: '#galeria', rotulo: 'Trabalhos' },
  { href: '#orcamento', rotulo: 'Orçamento' },
] as const
