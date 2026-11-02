import { Acao } from '@/components/ui/acao'
import { IconeInstagram } from '@/components/ui/icone-instagram'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { Marca } from '@/components/ui/marca'
import { site } from '@/content/site'
import { linkWhatsapp } from '@/lib/whatsapp'

export function Fechamento() {
  return (
    <section className="fibra bg-rosa-acao relative px-4 py-20 text-center sm:px-6 sm:py-24">
      <div className="relative mx-auto flex max-w-[52rem] flex-col items-center">
        <Marca tamanho={92} className="borda-peca-alta" decorativa />

        <h2 className="text-creme font-display mt-7 text-[clamp(2rem,6vw,3.5rem)] leading-[0.98] font-extrabold">
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
    </section>
  )
}
