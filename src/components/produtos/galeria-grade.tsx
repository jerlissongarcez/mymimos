'use client'

import { ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Visualizador } from '@/components/produtos/visualizador'
import { categorias, pecas } from '@/content/catalogo'
import { cn } from '@/lib/cn'
import type { CategoriaId } from '@/types'

type Filtro = CategoriaId | 'todas'

const FILTROS: { id: Filtro; rotulo: string }[] = [
  { id: 'todas', rotulo: 'Tudo' },
  ...categorias.map(categoria => ({
    id: categoria.id as Filtro,
    rotulo: categoria.nome,
  })),
]

export function GaleriaGrade() {
  const [filtro, setFiltro] = useState<Filtro>('todas')
  const [aberta, setAberta] = useState<number | null>(null)

  const visiveis = useMemo(() => (filtro === 'todas' ? pecas : pecas.filter(peca => peca.categoria === filtro)), [filtro])

  function trocarFiltro(novo: Filtro) {
    setFiltro(novo)
    setAberta(null)
  }

  return (
    <>
      <fieldset className="flex flex-wrap gap-2">
        <legend className="sr-only">Filtrar trabalhos por tipo de peça</legend>
        {FILTROS.map(item => {
          const ativo = filtro === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => trocarFiltro(item.id)}
              aria-pressed={ativo}
              className={cn(
                'min-h-11 rounded-full px-4 py-2.5 text-[0.9rem] font-semibold transition-colors',
                ativo
                  ? 'foco-tinta bg-dourado-claro text-tinta'
                  : 'text-creme/80 border-creme/25 hover:border-creme/60 hover:text-creme border-2'
              )}
            >
              {item.rotulo}
            </button>
          )
        })}
      </fieldset>

      <p aria-live="polite" className="text-creme/55 mt-4 text-sm">
        {visiveis.length} {visiveis.length === 1 ? 'peça' : 'peças'} em exibição
      </p>

      {/* Colunas preservam a proporção original de cada foto, sem recorte forçado. */}
      <div className="mt-6 gap-3 [column-count:2] sm:gap-4 md:[column-count:3] xl:[column-count:4]">
        {visiveis.map((peca, indice) => (
          <button
            key={peca.id}
            type="button"
            onClick={() => setAberta(indice)}
            className="group foco-tinta bg-creme borda-peca mb-3 block w-full break-inside-avoid rounded-[var(--radius-peca)] p-2 text-left transition-transform duration-300 ease-[var(--ease-assentar)] hover:-translate-y-1 sm:mb-4"
          >
            <span className="relative block overflow-hidden rounded-[8px]">
              <Image
                src={peca.imagem}
                alt={peca.alt}
                placeholder="blur"
                sizes="(max-width: 767px) 46vw, (max-width: 1279px) 31vw, 23vw"
                className="h-auto w-full"
              />
              <span
                aria-hidden="true"
                className="bg-tinta-forte/0 group-hover:bg-tinta-forte/35 absolute inset-0 grid place-items-center transition-colors duration-300"
              >
                <span className="bg-dourado-claro text-tinta grid size-11 scale-75 place-items-center rounded-full opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <ZoomIn className="size-5" strokeWidth={2.2} />
                </span>
              </span>
            </span>
            <span className="text-tinta/80 mt-2 mb-0.5 block px-1 text-[0.86rem] leading-snug font-medium">{peca.legenda}</span>
            <span className="sr-only">Ampliar foto</span>
          </button>
        ))}
      </div>

      <Visualizador pecas={visiveis} indice={aberta} aoFechar={() => setAberta(null)} aoNavegar={setAberta} />
    </>
  )
}
