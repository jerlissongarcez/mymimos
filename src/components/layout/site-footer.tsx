import { MapPin } from 'lucide-react'
import { cacheLife } from 'next/cache'
import { IconeInstagram } from '@/components/ui/icone-instagram'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { Marca } from '@/components/ui/marca'
import { navegacao, site } from '@/content/site'
import { linkWhatsapp } from '@/lib/whatsapp'

/*
 * O ano do copyright é a única coisa viva no rodapé. Com Cache Components,
 * `new Date()` não pode rodar no prerender, então o rodapé vira um componente
 * cacheado que se renova uma vez por dia.
 */
export async function SiteFooter() {
  'use cache'
  cacheLife('days')

  const ano = new Date().getFullYear()

  return (
    <footer className="bg-tinta-forte text-creme px-4 pt-14 pb-24 sm:px-6 sm:pb-10">
      <div className="mx-auto max-w-[78rem]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Marca tamanho={56} decorativa />
              <span className="font-display text-2xl font-extrabold tracking-[-0.04em]">My Mimos</span>
            </div>
            <p className="text-creme/75 mt-4 text-[0.98rem] leading-relaxed">
              {site.tagline}. Papelaria personalizada feita à mão, peça por peça, para mesversário, chá de bebê, aniversário,
              formatura e volta às aulas.
            </p>
          </div>

          <nav aria-labelledby="rodape-navegacao">
            <h2 id="rodape-navegacao" className="font-display text-dourado-claro text-sm font-bold tracking-[0.1em] uppercase">
              Navegar
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navegacao.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-creme/75 hover:text-creme inline-flex min-h-9 items-center rounded text-[0.98rem] transition-colors"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-dourado-claro text-sm font-bold tracking-[0.1em] uppercase">Falar com o ateliê</h2>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={linkWhatsapp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creme/85 hover:text-creme inline-flex min-h-10 items-center gap-2.5 rounded text-[0.98rem] transition-colors"
                >
                  <IconeWhatsapp className="text-dourado-claro size-[18px] shrink-0" />
                  {site.whatsapp.exibicao}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-creme/85 hover:text-creme inline-flex min-h-10 items-center gap-2.5 rounded text-[0.98rem] transition-colors"
                >
                  <IconeInstagram className="text-dourado-claro size-[18px] shrink-0" />
                  {site.instagram.usuario}
                </a>
              </li>
              <li className="text-creme/85 inline-flex items-center gap-2.5 text-[0.98rem]">
                <MapPin className="text-dourado-claro size-[18px] shrink-0" strokeWidth={2} aria-hidden="true" />
                {site.cidade} — {site.uf}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-creme/15 text-creme/55 mt-12 flex flex-col gap-2 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <p>Cada peça é produzida sob encomenda e personalizada.</p>
        </div>
      </div>
    </footer>
  )
}
