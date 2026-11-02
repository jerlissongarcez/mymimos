'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Acao } from '@/components/ui/acao'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { Marca } from '@/components/ui/marca'
import { navegacao, site } from '@/content/site'
import { useSecaoAtiva } from '@/hooks/use-secao-ativa'
import { cn } from '@/lib/cn'
import { linkWhatsapp } from '@/lib/whatsapp'

const IDS = navegacao.map(item => item.href.slice(1))

export function SiteHeader() {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const secaoAtiva = useSecaoAtiva(IDS)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,padding] duration-300 ease-[var(--ease-assentar)]',
        rolou ? 'bg-creme py-2 shadow-[0_6px_18px_-10px_rgba(58,16,32,0.5)]' : 'bg-transparent py-3.5'
      )}
    >
      <div className="mx-auto flex max-w-[78rem] items-center gap-4 px-4 sm:px-6">
        <a href="#inicio" className={cn('flex min-h-11 shrink-0 items-center gap-2.5 rounded-full py-1', rolou && 'foco-tinta')}>
          <Marca tamanho={rolou ? 40 : 46} className="transition-all duration-300" decorativa />
          <span
            className={cn(
              'font-display text-lg leading-none font-extrabold tracking-[-0.04em] transition-colors sm:text-xl',
              rolou ? 'text-rosa-tinta' : 'text-creme'
            )}
          >
            My Mimos
          </span>
        </a>

        <nav aria-label="Seções do site" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map(item => {
              const ativa = secaoAtiva === item.href.slice(1)
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={ativa ? 'true' : undefined}
                    className={cn(
                      'relative rounded-lg px-3 py-2 text-[0.94rem] font-medium transition-colors',
                      rolou ? 'foco-tinta' : '',
                      rolou
                        ? ativa
                          ? 'text-rosa-acao'
                          : 'text-tinta/70 hover:text-tinta'
                        : ativa
                          ? 'text-dourado-claro'
                          : 'text-creme/80 hover:text-creme'
                    )}
                  >
                    {item.rotulo}
                    {ativa && (
                      <span
                        aria-hidden="true"
                        className={cn(
                          'absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full',
                          rolou ? 'bg-rosa-acao' : 'bg-dourado-claro'
                        )}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <Acao
          href={linkWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          variante="foil"
          className="ml-auto hidden px-4 text-sm sm:inline-flex lg:ml-4"
        >
          <IconeWhatsapp className="size-[18px]" />
          Pedir orçamento
        </Acao>

        <Dialog.Root open={menuAberto} onOpenChange={setMenuAberto}>
          <Dialog.Trigger
            aria-label="Abrir menu de navegação"
            className={cn(
              'ml-auto grid size-11 place-items-center rounded-xl transition-colors sm:ml-0 lg:hidden',
              rolou ? 'foco-tinta bg-rosa-tinta/10 text-rosa-tinta' : 'bg-creme/15 text-creme'
            )}
          >
            <Menu className="size-6" strokeWidth={2} aria-hidden="true" />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-tinta-forte/70 fixed inset-0 z-[60] backdrop-blur-[2px] data-[state=closed]:animate-[fadeIn_150ms_ease-in_reverse] data-[state=open]:animate-[fadeIn_200ms_ease-out]" />
            <Dialog.Content className="bg-creme fixed inset-y-0 right-0 z-[70] flex w-[min(21rem,88vw)] flex-col px-6 pt-5 pb-8 shadow-[var(--shadow-peca-alta)] focus:outline-none data-[state=open]:animate-[deslizarDaDireita_280ms_var(--ease-assentar)]">
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-rosa-tinta text-xl font-extrabold">Navegar</Dialog.Title>
                <Dialog.Close
                  aria-label="Fechar menu"
                  className="foco-tinta bg-rosa-tinta/10 text-rosa-tinta grid size-11 place-items-center rounded-xl"
                >
                  <X className="size-6" strokeWidth={2} aria-hidden="true" />
                </Dialog.Close>
              </div>
              <Dialog.Description className="sr-only">Links para as seções da página e contato pelo WhatsApp.</Dialog.Description>

              <nav aria-label="Seções do site" className="mt-7">
                <ul className="flex flex-col gap-1">
                  {navegacao.map(item => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setMenuAberto(false)}
                        className="foco-tinta font-display text-tinta hover:bg-algodao-claro hover:text-rosa-acao block rounded-xl px-3 py-3.5 text-[1.35rem] font-bold transition-colors"
                      >
                        {item.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-auto space-y-3 pt-8">
                <Acao
                  href={linkWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variante="foil"
                  tamanho="lg"
                  className="w-full"
                  onClick={() => setMenuAberto(false)}
                >
                  <IconeWhatsapp className="size-5" />
                  Pedir orçamento
                </Acao>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foco-tinta text-tinta/70 decoration-rosa/40 hover:text-rosa-acao block rounded-lg px-1 py-1 text-center text-sm font-medium underline underline-offset-4"
                >
                  {site.instagram.usuario} no Instagram
                </a>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
