'use client'

import { useId, useMemo, useState } from 'react'
import { Acao } from '@/components/ui/acao'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { ocasioes, opcoesDePeca } from '@/content/catalogo'
import { cn } from '@/lib/cn'
import { linkWhatsapp, mensagemDePedido } from '@/lib/whatsapp'

const CHIP_BASE =
  'inline-flex min-h-11 cursor-pointer items-center rounded-full border-2 px-4 py-2.5 text-[0.92rem] font-semibold transition-colors select-none'

export function Orcamento() {
  const idOcasiao = useId()
  const idNome = useId()
  const idTema = useId()
  const idData = useId()

  const [ocasiao, setOcasiao] = useState('')
  const [pecasEscolhidas, setPecasEscolhidas] = useState<string[]>([])
  const [nome, setNome] = useState('')
  const [tema, setTema] = useState('')
  const [data, setData] = useState('')

  const mensagem = useMemo(
    () =>
      mensagemDePedido({
        ocasiao: ocasiao || undefined,
        pecas: pecasEscolhidas,
        nome: nome.trim() || undefined,
        tema: tema.trim() || undefined,
        data: data || undefined,
      }),
    [ocasiao, pecasEscolhidas, nome, tema, data]
  )

  function alternarPeca(peca: string) {
    setPecasEscolhidas(atual => (atual.includes(peca) ? atual.filter(item => item !== peca) : [...atual, peca]))
  }

  return (
    <section id="orcamento" className="bg-creme scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[78rem]">
        <div className="max-w-[40ch]">
          <h2 className="font-display text-rosa-tinta text-[clamp(2.1rem,5.6vw,3.4rem)] leading-[0.98] font-extrabold">
            Monte seu pedido
          </h2>
          <p className="text-tinta/75 mt-4 text-[1.05rem] leading-relaxed">
            Marque o que precisa e a conversa já abre no WhatsApp com tudo escrito. Nada é enviado daqui — você confere a mensagem
            antes.
          </p>
        </div>

        <div className="mt-10 grid gap-7 lg:grid-cols-12 lg:gap-9">
          <div className="space-y-8 lg:col-span-7">
            <fieldset>
              <legend id={idOcasiao} className="font-display text-tinta text-lg font-bold sm:text-xl">
                1. Para qual ocasião?
              </legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {ocasioes.map(item => (
                  <label
                    key={item.id}
                    className={cn(
                      CHIP_BASE,
                      ocasiao === item.rotulo
                        ? 'border-rosa-acao bg-rosa-acao text-white'
                        : 'border-rosa-tinta/25 text-tinta hover:border-rosa-acao hover:text-rosa-acao bg-white'
                    )}
                  >
                    <input
                      type="radio"
                      name="ocasiao"
                      value={item.rotulo}
                      checked={ocasiao === item.rotulo}
                      onChange={evento => setOcasiao(evento.target.value)}
                      className="sr-only"
                    />
                    {item.rotulo}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-tinta text-lg font-bold sm:text-xl">2. O que você precisa?</legend>
              <p className="text-tinta/75 mt-1 text-sm">Pode marcar mais de uma.</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {opcoesDePeca.map(peca => {
                  const marcada = pecasEscolhidas.includes(peca)
                  return (
                    <label
                      key={peca}
                      className={cn(
                        CHIP_BASE,
                        marcada
                          ? 'border-rosa-tinta bg-rosa-tinta text-creme'
                          : 'border-rosa-tinta/25 text-tinta hover:border-rosa-tinta hover:text-rosa-tinta bg-white'
                      )}
                    >
                      <input type="checkbox" checked={marcada} onChange={() => alternarPeca(peca)} className="sr-only" />
                      {peca}
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="font-display text-tinta text-lg font-bold sm:text-xl">
                3. Detalhes <span className="text-tinta/65 font-sans font-normal">(opcional)</span>
              </legend>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={idNome} className="text-tinta/80 block text-sm font-semibold">
                    Nome para personalizar
                  </label>
                  <input
                    id={idNome}
                    type="text"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    placeholder="Ex.: Helena"
                    autoComplete="off"
                    className="border-rosa-tinta/25 text-tinta placeholder:text-tinta/40 focus:border-rosa-acao mt-2 min-h-12 w-full rounded-xl border-2 bg-white px-4 py-3 outline-none"
                  />
                </div>
                <div>
                  <label htmlFor={idData} className="text-tinta/80 block text-sm font-semibold">
                    Data da festa
                  </label>
                  <input
                    id={idData}
                    type="date"
                    value={data}
                    onChange={evento => setData(evento.target.value)}
                    className="border-rosa-tinta/25 text-tinta focus:border-rosa-acao mt-2 min-h-12 w-full rounded-xl border-2 bg-white px-4 py-3 outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor={idTema} className="text-tinta/80 block text-sm font-semibold">
                    Tema de preferência
                  </label>
                  <input
                    id={idTema}
                    type="text"
                    value={tema}
                    onChange={evento => setTema(evento.target.value)}
                    placeholder="Ex.: Bela e a Fera, tons de amarelo e dourado"
                    autoComplete="off"
                    className="border-rosa-tinta/25 text-tinta placeholder:text-tinta/40 focus:border-rosa-acao mt-2 min-h-12 w-full rounded-xl border-2 bg-white px-4 py-3 outline-none"
                  />
                </div>
              </div>
            </fieldset>
          </div>

          {/* Bloco de papel com a mensagem exata que vai ser enviada. */}
          <div className="lg:col-span-5">
            <div className="bg-algodao-claro borda-peca sticky top-24 rounded-[var(--radius-peca)] p-6 sm:p-7">
              <h3 className="font-display text-rosa-tinta text-lg font-bold">Sua mensagem</h3>
              <p className="text-tinta/75 mt-1 text-sm">É exatamente isto que vai abrir no WhatsApp.</p>

              <p
                aria-live="polite"
                className="text-tinta borda-peca mt-4 rounded-xl bg-white p-4 text-[0.95rem] leading-relaxed whitespace-pre-line"
              >
                {mensagem}
              </p>

              <Acao
                href={linkWhatsapp(mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                variante="foil"
                tamanho="lg"
                className="mt-5 w-full"
              >
                <IconeWhatsapp className="size-5 shrink-0" aria-hidden="true" />
                Abrir conversa no WhatsApp
              </Acao>

              <p className="text-tinta/70 mt-3 text-center text-xs leading-relaxed">
                Abre o aplicativo no celular ou o WhatsApp Web no computador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
