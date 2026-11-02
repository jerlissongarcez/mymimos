import Image from 'next/image'
import logo from '@/assets/catalogo/logo-my-mimos.webp'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type Props = {
  tamanho?: number
  className?: string
  /** No topo da página a marca é decorativa: o h1 já nomeia o ateliê. */
  decorativa?: boolean
}

/** Logo oficial, sempre circular e sem recorte — nunca redesenhada. */
export function Marca({ tamanho = 56, className, decorativa = false }: Props) {
  return (
    <Image
      src={logo}
      alt={decorativa ? '' : `${site.nome} — ${site.tagline}`}
      width={tamanho}
      height={tamanho}
      sizes={`${tamanho}px`}
      className={cn('ring-tinta/10 rounded-full ring-1', className)}
      aria-hidden={decorativa || undefined}
    />
  )
}
