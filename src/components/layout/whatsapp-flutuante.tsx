'use client'

import { useEffect, useState } from 'react'
import { IconeWhatsapp } from '@/components/ui/icone-whatsapp'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'
import { linkWhatsapp } from '@/lib/whatsapp'

/**
 * Atalho permanente para a conversa. Aparece depois do hero e some enquanto o
 * montador de pedido está na tela — lá já existe uma ação maior, e o botão
 * cobriria o formulário.
 *
 * As duas condições são estados separados de propósito: com um só, o evento de
 * scroll sobrescreveria o observer e o botão voltaria a aparecer sobre o
 * montador. Enquanto escondido fica `inert`, então também sai da tabulação.
 */
export function WhatsappFlutuante() {
  const [passouDoHero, setPassouDoHero] = useState(false)
  const [sobreOrcamento, setSobreOrcamento] = useState(false)

  useEffect(() => {
    const aoRolar = () => setPassouDoHero(window.scrollY > 520)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    const alvo = document.getElementById('orcamento')
    if (!alvo) return

    const observador = new IntersectionObserver(([entrada]) => setSobreOrcamento(Boolean(entrada?.isIntersecting)), {
      threshold: 0.18,
    })
    observador.observe(alvo)
    return () => observador.disconnect()
  }, [])

  const visivel = passouDoHero && !sobreOrcamento

  return (
    <div
      inert={!visivel}
      className={cn(
        'fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 transition-all duration-300 ease-[var(--ease-assentar)] sm:right-6 sm:bottom-6',
        visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      )}
    >
      <a
        href={linkWhatsapp()}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-rosa-acao hover:bg-rosa flex items-center gap-2.5 rounded-full py-3.5 pr-5 pl-4 font-semibold text-white shadow-[var(--shadow-peca-alta)] transition-colors"
      >
        <IconeWhatsapp className="size-6 shrink-0" aria-hidden="true" />
        <span className="hidden text-[0.95rem] sm:inline">Falar no WhatsApp</span>
        <span className="sr-only sm:hidden">Falar no WhatsApp: {site.whatsapp.exibicao}</span>
      </a>
    </div>
  )
}
