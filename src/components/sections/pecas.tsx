import { BlocoCategoria } from '@/components/produtos/bloco-categoria'
import { Revelar } from '@/components/ui/revelar'
import { categorias } from '@/content/catalogo'
import { linkWhatsapp } from '@/lib/whatsapp'

export function Pecas() {
  return (
    <section id="pecas" className="bg-algodao scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-[78rem]">
        <div className="max-w-[34ch]">
          <h2 className="font-display text-rosa-tinta text-[clamp(2.1rem,5.6vw,3.4rem)] leading-[0.98] font-extrabold">
            O que sai do ateliê
          </h2>
          <p className="text-tinta/75 mt-4 text-[1.05rem] leading-relaxed">
            Cinco frentes de trabalho, todas personalizadas peça a peça. Escolha por onde começar — ou mande a foto da inspiração
            que você já tem.
          </p>
        </div>

        {/* Cinco blocos iguais: a comparação entre as frentes é o que a seção faz. */}
        <div className="mt-11 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-5">
          {categorias.map((categoria, indice) => (
            <Revelar key={categoria.id} atraso={indice * 0.06} className="h-full">
              <BlocoCategoria categoria={categoria} />
            </Revelar>
          ))}
        </div>

        <p className="text-tinta/70 border-rosa-tinta/20 mt-9 border-t pt-6 text-[0.98rem] leading-relaxed">
          Também fazemos <strong className="text-tinta font-semibold">cartões personalizados</strong>, tags, rótulos e convites
          sob encomenda — peças que ainda não estão no portfólio do site.{' '}
          <a
            href={linkWhatsapp(
              'Olá! Vim pelo site da My Mimos e queria saber sobre cartões e convites personalizados. Pode me passar um orçamento?'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="foco-tinta text-rosa-tinta decoration-rosa-tinta/45 hover:text-rosa-acao font-bold underline underline-offset-4"
          >
            Pergunte no WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
