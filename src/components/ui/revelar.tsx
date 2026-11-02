'use client'

import { type CSSProperties, type ReactNode, useEffect, useLayoutEffect, useRef } from 'react'

/* useLayoutEffect aplica o estado inicial antes da pintura, sem piscar. */
const useEfeitoDeLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect

type RevelarProps = {
  children: ReactNode
  /** Atraso em segundos, para escalonar peças de um mesmo grupo. */
  atraso?: number
  /** Deslocamento lateral, imitando a camada que assenta no lugar. */
  lateral?: number
  className?: string
}

/**
 * Entrada de uma peça de papel: ela assenta no lugar, não aparece do nada.
 *
 * O conteúdo nasce visível. Só depois que o JS assume é que o elemento recebe
 * o estado escondido — então, sem JavaScript, antes da hidratação ou com
 * `prefers-reduced-motion`, a página continua legível por completo.
 */
export function Revelar({ children, atraso = 0, lateral = 0, className }: RevelarProps) {
  const referencia = useRef<HTMLDivElement>(null)

  useEfeitoDeLayout(() => {
    const no = referencia.current
    if (!no || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    no.dataset.revelar = 'pendente'

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada?.isIntersecting) return
        no.dataset.revelar = 'visivel'
        observador.disconnect()
      },
      { rootMargin: '0px 0px -60px 0px' }
    )

    observador.observe(no)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={referencia}
      className={className}
      style={
        {
          '--revelar-atraso': `${atraso}s`,
          '--revelar-x': `${lateral}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
