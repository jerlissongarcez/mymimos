import { Atelie } from '@/components/sections/atelie'
import { Fechamento } from '@/components/sections/fechamento'
import { Galeria } from '@/components/sections/galeria'
import { Hero } from '@/components/sections/hero'
import { Orcamento } from '@/components/sections/orcamento'
import { Pecas } from '@/components/sections/pecas'
import { CORES_DOBRA as CORES, Recorte } from '@/components/ui/recorte'

export default function Pagina() {
  return (
    <main id="conteudo">
      <Hero />
      <Recorte acima={CORES.rosaTinta} abaixo={CORES.algodao} />

      <Pecas />
      <Recorte acima={CORES.algodao} abaixo={CORES.azul} />

      <Atelie />
      <Recorte acima={CORES.azul} abaixo={CORES.rosaTinta} />

      <Galeria />
      <Recorte acima={CORES.rosaTinta} abaixo={CORES.creme} />

      <Orcamento />
      <Recorte acima={CORES.creme} abaixo={CORES.rosaAcao} />

      {/* Fechamento traz a própria tesoura, por baixo da figura — ver a seção. */}
      <Fechamento />
    </main>
  )
}
