'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { Acao } from '@/components/ui/acao'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { linkWhatsapp } from '@/lib/whatsapp'
import type { Peca } from '@/types'

type Props = {
  pecas: Peca[]
  indice: number | null
  aoFechar: () => void
  aoNavegar: (proximoIndice: number) => void
}

export function Visualizador({ pecas, indice, aoFechar, aoNavegar }: Props) {
  const aberto = indice !== null
  const peca = indice !== null ? pecas[indice] : undefined
  const total = pecas.length

  const irPara = useCallback(
    (passo: number) => {
      if (indice === null || total === 0) return
      aoNavegar((indice + passo + total) % total)
    },
    [indice, total, aoNavegar]
  )

  useEffect(() => {
    if (!aberto) return
    const aoTeclar = (evento: KeyboardEvent) => {
      if (evento.key === 'ArrowRight') irPara(1)
      if (evento.key === 'ArrowLeft') irPara(-1)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => window.removeEventListener('keydown', aoTeclar)
  }, [aberto, irPara])

  if (indice === null || !peca) return null

  const mensagem = `Olá! Vim pelo site da My Mimos. Gostei desta peça — ${peca.legenda.toLowerCase()} — e queria um orçamento de algo parecido.`

  return (
    <Dialog.Root open={aberto} onOpenChange={estado => !estado && aoFechar()}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-tinta-forte/88 fixed inset-0 z-[80] backdrop-blur-[3px] data-[state=open]:animate-[fadeIn_220ms_ease-out]" />
        <Dialog.Content className="fixed inset-0 z-[90] flex flex-col items-center justify-center p-4 focus:outline-none sm:p-8">
          <Dialog.Title className="sr-only">{peca.legenda}</Dialog.Title>
          <Dialog.Description className="sr-only">
            Peça {indice + 1} de {total}. Use as setas do teclado para navegar.
          </Dialog.Description>

          <div className="flex max-h-full w-full max-w-4xl flex-col data-[state=open]:animate-[assentar_280ms_var(--ease-assentar)]">
            <div className="bg-creme borda-peca-alta min-h-0 rounded-[var(--radius-peca)] p-2 sm:p-3">
              <Image
                src={peca.imagem}
                alt={peca.alt}
                placeholder="blur"
                sizes="(max-width: 896px) 94vw, 62rem"
                className="max-h-[62vh] w-full rounded-[8px] object-contain sm:max-h-[66vh]"
              />
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="min-w-0">
                <p className="text-creme font-display text-lg leading-tight font-bold sm:text-xl">{peca.legenda}</p>
                <p className="text-creme/55 mt-1 text-sm">
                  {indice + 1} de {total}
                </p>
              </div>
              <Acao href={linkWhatsapp(mensagem)} target="_blank" rel="noopener noreferrer" variante="foil" className="shrink-0">
                <IconeWhatsapp className="size-[18px] shrink-0" aria-hidden="true" />
                Quero algo assim
              </Acao>
            </div>
          </div>

          <button
            type="button"
            onClick={() => irPara(-1)}
            aria-label="Peça anterior"
            className="bg-creme/12 text-creme hover:bg-creme/25 absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center rounded-full backdrop-blur-sm transition-colors sm:left-5"
          >
            <ChevronLeft className="size-7" strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => irPara(1)}
            aria-label="Próxima peça"
            className="bg-creme/12 text-creme hover:bg-creme/25 absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center rounded-full backdrop-blur-sm transition-colors sm:right-5"
          >
            <ChevronRight className="size-7" strokeWidth={2} aria-hidden="true" />
          </button>

          <Dialog.Close
            aria-label="Fechar visualização"
            className="bg-creme/12 text-creme hover:bg-creme/25 absolute top-4 right-4 grid size-12 place-items-center rounded-full backdrop-blur-sm transition-colors"
          >
            <X className="size-6" strokeWidth={2} aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
