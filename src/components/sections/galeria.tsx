import { GaleriaGrade } from '@/components/produtos/galeria-grade'

export function Galeria() {
  return (
    <section id="galeria" className="fibra bg-rosa-tinta scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-[78rem]">
        <div className="max-w-[38ch]">
          <h2 className="text-creme font-display text-[clamp(2.1rem,5.6vw,3.4rem)] leading-[0.98] font-extrabold">
            Trabalhos que já saíram daqui
          </h2>
          <p className="text-creme/75 mt-4 text-[1.05rem] leading-relaxed">
            Peças reais, fotografadas na bancada do ateliê antes da entrega. Toque em qualquer uma para ver de perto.
          </p>
        </div>

        <div className="mt-9">
          <GaleriaGrade />
        </div>
      </div>
    </section>
  )
}
