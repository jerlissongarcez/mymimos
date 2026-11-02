import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { pecaPorId } from '@/content/catalogo'
import { linkWhatsapp } from '@/lib/whatsapp'
import type { Categoria } from '@/types'

type Props = {
  categoria: Categoria
}

/**
 * Bloco de categoria: foto grande em cima, texto curto embaixo.
 *
 * Todos os cinco têm a mesma forma e o mesmo tamanho de propósito — quem chega
 * compara as cinco frentes de trabalho de uma vez, e a foto é o que convence.
 * O texto fica no mínimo para que a imagem domine o bloco.
 *
 * Só no celular o bloco vira linha horizontal: empilhado com a foto 4/5 a
 * seção passava de 3.600px de rolagem, e cortar essas fotos verticais num
 * formato deitado estragaria o enquadramento das peças.
 */
export function BlocoCategoria({ categoria }: Props) {
  const capa = pecaPorId(categoria.capaId)
  if (!capa) return null

  const mensagem = `Olá! Vim pelo site da My Mimos e queria saber sobre ${categoria.nome.toLowerCase()}. Pode me passar um orçamento?`

  return (
    <article className="bg-creme borda-peca group flex h-full flex-row overflow-hidden rounded-[var(--radius-peca)] sm:flex-col">
      <div className="relative aspect-square w-[40%] shrink-0 overflow-hidden sm:aspect-[4/5] sm:w-full">
        <Image
          src={capa.imagem}
          alt={capa.alt}
          fill
          sizes="(max-width: 639px) 40vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 19vw"
          placeholder="blur"
          style={{ objectFit: 'cover', objectPosition: capa.foco ?? '50% 50%' }}
          className="transition-transform duration-700 ease-[var(--ease-assentar)] group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-tinta text-[1.08rem] leading-[1.15] font-extrabold text-balance">{categoria.nome}</h3>

        <p className="text-tinta/72 mt-2 text-[0.88rem] leading-relaxed">{categoria.descricao}</p>

        <a
          href={linkWhatsapp(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          className="foco-tinta text-rosa-acao decoration-rosa/35 hover:text-tinta mt-auto inline-flex min-h-11 items-center gap-1.5 self-start rounded pt-3 text-[0.9rem] font-bold underline underline-offset-[5px] transition-colors"
        >
          Pedir esta peça
          <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
          <span className="sr-only">— abre uma conversa no WhatsApp</span>
        </a>
      </div>
    </article>
  )
}
