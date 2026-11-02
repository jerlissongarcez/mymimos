import { Atelie } from '@/components/sections/atelie'
import { Fechamento } from '@/components/sections/fechamento'
import { Galeria } from '@/components/sections/galeria'
import { Hero } from '@/components/sections/hero'
import { Orcamento } from '@/components/sections/orcamento'
import { Pecas } from '@/components/sections/pecas'
import { Recorte } from '@/components/ui/recorte'

/* Cada seção é uma folha de cartolina; o recorte é a tesoura entre elas. */
const CORES = {
  rosaTinta: '#8e0f45',
  algodao: '#f9c9da',
  azul: '#bfdce6',
  creme: '#fbf2ec',
  rosaAcao: '#d11f62',
  tintaForte: '#260a15',
} as const

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

      <Fechamento />
      <Recorte acima={CORES.rosaAcao} abaixo={CORES.tintaForte} />
    </main>
  )
}
