import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type Variante = 'foil' | 'tinta' | 'contorno' | 'creme'
type Tamanho = 'md' | 'lg'

const BASE =
  'inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-peca)] font-semibold tracking-[-0.01em] transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-assentar)] active:translate-y-px disabled:pointer-events-none disabled:opacity-55'

const VARIANTES: Record<Variante, string> = {
  /* placa de papel espelhado: a mesma peça que o ateliê recorta em dourado */
  foil: 'foco-tinta text-tinta shadow-[var(--shadow-placa)] bg-[linear-gradient(103deg,#f3dc9c_0%,#d9ad4e_34%,#c79a33_58%,#eed08a_100%)] hover:-translate-y-0.5 hover:brightness-[1.06]',
  tinta: 'bg-rosa-acao text-white shadow-[var(--shadow-placa)] hover:-translate-y-0.5 hover:bg-rosa',
  creme: 'bg-creme text-tinta shadow-[var(--shadow-placa)] hover:-translate-y-0.5 hover:bg-white',
  contorno: 'border-2 border-creme/60 text-creme hover:border-creme hover:bg-creme/12 hover:-translate-y-0.5',
}

const TAMANHOS: Record<Tamanho, string> = {
  md: 'min-h-12 px-5 py-3 text-[0.95rem]',
  lg: 'min-h-14 px-7 py-4 text-base sm:text-lg',
}

type Comum = {
  variante?: Variante
  tamanho?: Tamanho
  children: ReactNode
  className?: string
}

type AcaoLinkProps = Comum & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type AcaoBotaoProps = Comum & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

export function Acao({ variante = 'foil', tamanho = 'md', className, children, ...resto }: AcaoLinkProps | AcaoBotaoProps) {
  const classes = cn(BASE, VARIANTES[variante], TAMANHOS[tamanho], className)

  if ('href' in resto && resto.href !== undefined) {
    return (
      <a className={classes} {...(resto as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(resto as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
