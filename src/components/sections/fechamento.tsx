import Image from 'next/image'
import recepcao from '@/assets/catalogo/mulher-apresentando-caixa-bob-esponja.webp'
import { Acao } from '@/components/ui/acao'
import { IconeInstagram } from '@/components/ui/icone-instagram'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { Marca } from '@/components/ui/marca'
import { Revelar } from '@/components/ui/revelar'
import { site } from '@/content/site'
import { linkWhatsapp } from '@/lib/whatsapp'

export function Fechamento() {
  return (
    <section className="fibra bg-rosa-acao relative isolate overflow-hidden px-4 pt-20 sm:px-6 sm:pt-24">
      {/*
        Convite final: o texto chama e a figura recebe. Até lg tudo empilha
        centralizado; a partir daí a ilustração vai para a direita, na altura
        do título. Ela é recorte sem fundo, então não ganha moldura de papel —
        fica apoiada na borda de baixo da cartolina, como peça colada por cima.
      */}
      <div className="relative mx-auto grid max-w-[72rem] items-end gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,auto)] lg:gap-x-10">
        <div className="flex flex-col items-center pb-4 text-center lg:items-start lg:pb-24 lg:text-left">
          <Marca tamanho={92} className="borda-peca-alta" decorativa />

          <h2 className="text-creme font-display mt-7 text-[clamp(2rem,6vw,3.5rem)] leading-[0.98] font-extrabold lg:max-w-[12ch]">
            Me conta como vai ser a festa
          </h2>
          <p className="text-creme/85 mt-4 max-w-[46ch] text-[1.06rem] leading-relaxed">
            Tema, cor, nome e data. A partir daí o ateliê monta a peça — e você acompanha até ficar do jeito que você imaginou.
          </p>

          <Acao href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" variante="foil" tamanho="lg" className="mt-8">
            <IconeWhatsapp className="size-5 shrink-0" aria-hidden="true" />
            Chamar no WhatsApp
          </Acao>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-creme/80 hover:text-creme mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-[0.98rem] font-medium underline decoration-white/35 underline-offset-4 transition-colors"
          >
            <IconeInstagram className="size-[18px] shrink-0" />
            Ver o dia a dia em {site.instagram.usuario}
          </a>
        </div>

        <Revelar lateral={20} className="justify-self-center lg:justify-self-end">
          <div className="relative w-[min(19rem,78vw)] sm:w-[min(21rem,56vw)] lg:w-[27rem] xl:w-[30rem]">
            {/* Clarão de papel atrás do recorte: separa a figura do rosa chapado. */}
            <div
              aria-hidden="true"
              className="absolute inset-x-[-10%] bottom-0 -z-10 aspect-square rounded-full bg-[radial-gradient(circle_at_50%_58%,rgb(251_242_236/0.2),rgb(251_242_236/0.07)_45%,transparent_72%)]"
            />
            {/* Sem placeholder desfocado: o recorte é transparente e o borrão viraria um retângulo. */}
            <Image
              src={recepcao}
              alt="Ilustração de uma mulher sorrindo, apresentando com as duas mãos uma caixinha de lembrancinha personalizada com tema do Bob Esponja"
              sizes="(max-width: 639px) 78vw, (max-width: 1023px) 56vw, (max-width: 1279px) 27rem, 30rem"
              className="h-auto w-full [filter:drop-shadow(5px_8px_0_rgb(58_16_32/0.1))_drop-shadow(12px_22px_38px_rgb(58_16_32/0.34))]"
            />
          </div>
        </Revelar>
      </div>
    </section>
  )
}
