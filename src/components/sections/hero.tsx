import Image from 'next/image'
import heroImagem from '@/assets/catalogo/bolo-cha-de-bebe-floral-borboletas.webp'
import { Acao } from '@/components/ui/acao'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { site } from '@/content/site'
import { linkWhatsapp } from '@/lib/whatsapp'

export function Hero() {
  return (
    <section
      id="inicio"
      className="fibra bg-rosa-tinta relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 md:min-h-[44rem] md:pb-20 lg:min-h-[50rem] lg:pt-36 lg:pb-24"
    >
      <div className="relative mx-auto max-w-[78rem] px-4 sm:px-6">
        {/*
          Composição de colagem: título grande à esquerda, foto colada à direita
          ocupando o vazio ao lado da última linha. No mobile tudo empilha.
        */}
        <h1 className="text-creme font-display relative z-20 font-medium md:max-w-[58%]">
          <span className="block text-[clamp(1.75rem,5vw,2.9rem)] leading-[1.08]">Criando memórias</span>
          <span className="text-dourado-claro mt-1 block max-w-[8.5ch] text-[clamp(3.1rem,11vw,6rem)] leading-[0.88] font-extrabold">
            em cada peça.
          </span>
        </h1>

        {/* Foto como peça de papel colada por cima do campo rosa. */}
        <div className="relative z-10 mt-10 md:absolute md:top-14 md:right-4 md:mt-0 md:w-[37%] lg:top-16 lg:right-6 lg:w-[35%] xl:top-12 xl:w-[34%]">
          <div className="relative mx-auto w-[min(21rem,86%)] rotate-[-2.4deg] sm:w-[min(25rem,70%)] md:w-full">
            <div className="bg-creme borda-peca-alta rounded-[var(--radius-peca)] p-2.5">
              <Image
                src={heroImagem}
                alt="Bolo de dois andares decorado com flores e borboletas recortadas em papel, com placa personalizada escrita Chá da Isadora"
                preload
                sizes="(max-width: 767px) 86vw, 36vw"
                placeholder="blur"
                className="h-auto w-full rounded-[8px]"
              />
            </div>
            <p className="bg-dourado-claro text-tinta borda-peca absolute -bottom-6 -left-3 max-w-[13rem] rotate-[2.6deg] rounded-[10px] px-3.5 py-2 text-[0.8rem] leading-snug font-semibold sm:-left-6">
              Chá de bebê — flores, borboletas e placa em papel
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-14 md:mt-8 md:max-w-[56%]">
          <p className="text-creme/85 max-w-[44ch] text-[1.07rem] leading-relaxed sm:text-[1.18rem]">
            No ateliê {site.nome}, cada topo de bolo, lembrancinha, caderneta e caderno é recortado e montado à mão — com o nome,
            o tema e a data de quem vai receber.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Acao href={linkWhatsapp()} target="_blank" rel="noopener noreferrer" variante="foil" tamanho="lg">
              <IconeWhatsapp className="size-5 shrink-0" aria-hidden="true" />
              Pedir orçamento no WhatsApp
            </Acao>
            <Acao href="#galeria" variante="contorno" tamanho="lg">
              Ver trabalhos entregues
            </Acao>
          </div>

          <p className="text-creme/60 mt-6 text-sm">
            Ateliê em {site.cidade} — {site.uf}. Encomendas e orçamento direto com quem produz.
          </p>
        </div>
      </div>
    </section>
  )
}
