import { site } from '@/content/site'

/** Mensagem padrao de quem chega pelo site sem passar pelo montador. */
const MENSAGEM_PADRAO =
  'Olá! Conheci o trabalho de vocês pelo site e gostaria de saber mais sobre os produtos personalizados. Poderiam me ajudar com informações e um orçamento?'

/**
 * Monta o link oficial de conversa do WhatsApp. O wa.me resolve sozinho entre
 * app e WhatsApp Web conforme o dispositivo, entao nao precisa de deteccao.
 */
export function linkWhatsapp(mensagem: string = MENSAGEM_PADRAO) {
  return `https://wa.me/${site.whatsapp.e164}?text=${encodeURIComponent(mensagem)}`
}

type Pedido = {
  ocasiao?: string
  pecas: string[]
  nome?: string
  tema?: string
  data?: string
}

/** Texto que o montador de pedido envia: especifico, mas sem prometer nada. */
export function mensagemDePedido({ ocasiao, pecas, nome, tema, data }: Pedido) {
  const linhas = ['Olá! Vim pelo site da My Mimos e gostaria de um orçamento.']

  if (ocasiao) linhas.push(`Ocasião: ${ocasiao}`)
  if (pecas.length > 0) linhas.push(`Peças: ${pecas.join(', ')}`)
  if (nome) linhas.push(`Nome para personalizar: ${nome}`)
  if (data) linhas.push(`Data da festa: ${formatarData(data)}`)
  if (tema) linhas.push(`Tema: ${tema}`)

  linhas.push('Pode me ajudar?')

  return linhas.join('\n')
}

/** Converte o yyyy-mm-dd do input nativo para a leitura brasileira. */
function formatarData(iso: string) {
  const [ano, mes, dia] = iso.split('-')
  return ano && mes && dia ? `${dia}/${mes}/${ano}` : iso
}
