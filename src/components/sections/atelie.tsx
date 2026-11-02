import { CalendarHeart, MessageCircle, PenLine, Scissors } from 'lucide-react'
import Image from 'next/image'
import type { ComponentType } from 'react'
import provaFeitoAMao from '@/assets/catalogo/topo-bolo-ursinhos-baloes-cha-revelacao.webp'
import { Revelar } from '@/components/ui/revelar'
import { site } from '@/content/site'

type Ponto = {
  icone: ComponentType<{ className?: string; strokeWidth?: number }>
  titulo: string
  texto: string
}

/**
 * Só entram aqui afirmações que as próprias fotos do acervo sustentam.
 * Nada de prazo, quantidade mínima, preço ou promessa de entrega.
 */
const PONTOS: Ponto[] = [
  {
    icone: Scissors,
    titulo: 'Montado camada por camada',
    texto:
      'Cada flor, letra e bichinho é recortado separado e colado um sobre o outro. É isso que dá relevo à peça — dá para ver a espessura do papel nas fotos.',
  },
  {
    icone: PenLine,
    titulo: 'Sai com o nome escrito',
    texto: 'Nome, idade, data e tema entram na peça. Nada é feito para estoque: cada encomenda nasce de uma festa específica.',
  },
  {
    icone: MessageCircle,
    titulo: 'Você fala com quem produz',
    texto: 'Sem atendente e sem formulário. A conversa sobre tema, cor e detalhe é direto no WhatsApp com o ateliê.',
  },
  {
    icone: CalendarHeart,
    titulo: 'Do mesversário à formatura',
    texto:
      'Mesversário, chá de bebê, chá revelação, aniversário, chá de panela, formatura e volta às aulas — tudo no mesmo cuidado.',
  },
]

export function Atelie() {
  return (
    <section id="atelie" className="bg-azul scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-[78rem] gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="font-display text-rosa-tinta text-[clamp(2.1rem,5.6vw,3.4rem)] leading-[0.98] font-extrabold">
            Feito à mão quer dizer feito à mão
          </h2>
          <p className="text-tinta/75 mt-4 max-w-[40ch] text-[1.05rem] leading-relaxed">
            {site.nome} é um ateliê de papelaria personalizada em {site.cidade}. As fotos desta página são de peças que já foram
            entregues — fotografadas na própria bancada, antes de sair.
          </p>

          <Revelar lateral={-14} className="mt-8">
            <div className="bg-creme borda-peca-alta relative w-[min(23rem,calc(100%-1.25rem))] rotate-[-1.8deg] rounded-[var(--radius-peca)] p-2.5">
              <Image
                src={provaFeitoAMao}
                alt="Mão segurando dois ursinhos recortados em papel kraft com balões de papel rosa e azul, ainda no ateliê"
                sizes="(max-width: 1023px) 88vw, 24vw"
                placeholder="blur"
                className="h-auto w-full rounded-[8px]"
              />
              <p className="bg-dourado-claro text-tinta borda-peca absolute -right-3 -bottom-4 max-w-[11rem] rotate-[2.2deg] rounded-[10px] px-3 py-1.5 text-[0.78rem] leading-snug font-semibold">
                Peça na mão, ainda na bancada
              </p>
            </div>
          </Revelar>
        </div>

        <ul className="lg:col-span-7 lg:pt-3">
          {PONTOS.map((ponto, indice) => {
            const Icone = ponto.icone
            const primeiro = indice === 0
            return (
              <li key={ponto.titulo} className="border-rosa-tinta/15 border-t py-6 first:border-t-0 first:pt-0 sm:py-7">
                <Revelar atraso={indice * 0.06}>
                  <div className="flex gap-4 sm:gap-5">
                    <span
                      aria-hidden="true"
                      className="bg-rosa-tinta text-creme grid size-11 shrink-0 place-items-center rounded-xl sm:size-12"
                    >
                      <Icone className="size-5 sm:size-[22px]" strokeWidth={2} />
                    </span>
                    <div>
                      <h3
                        className={
                          primeiro
                            ? 'font-display text-tinta text-[1.5rem] leading-tight font-extrabold sm:text-[1.75rem]'
                            : 'font-display text-tinta text-[1.22rem] leading-tight font-bold sm:text-[1.35rem]'
                        }
                      >
                        {ponto.titulo}
                      </h3>
                      <p
                        className={
                          primeiro
                            ? 'text-tinta/75 mt-2 max-w-[56ch] text-[1.04rem] leading-relaxed'
                            : 'text-tinta/70 mt-2 max-w-[56ch] text-[0.98rem] leading-relaxed'
                        }
                      >
                        {ponto.texto}
                      </p>
                    </div>
                  </div>
                </Revelar>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
