'use client'

import { useEffect, useState } from 'react'

/**
 * Marca na navegação a seção que está sendo lida. A faixa de observação fica
 * logo abaixo do header fixo, então a seção só vira ativa quando realmente
 * ocupa a área visível de leitura.
 */
export function useSecaoAtiva(ids: readonly string[]) {
  const [ativa, setAtiva] = useState<string | null>(null)

  useEffect(() => {
    const alvos = ids.map(id => document.getElementById(id)).filter((no): no is HTMLElement => no !== null)

    if (alvos.length === 0) return

    const observador = new IntersectionObserver(
      entradas => {
        const visivel = entradas
          .filter(entrada => entrada.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visivel) setAtiva(visivel.target.id)
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: [0.05, 0.3, 0.6] }
    )

    for (const alvo of alvos) observador.observe(alvo)
    return () => observador.disconnect()
  }, [ids])

  return ativa
}
