import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Hanken_Grotesk } from 'next/font/google'
import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { WhatsappFlutuante } from '@/components/layout/whatsapp-flutuante'
import { site, urlSite } from '@/content/site'
import './globals.css'

/*
 * Voz de display: recortada e encorpada, como letra de papel montada em camadas.
 * O eixo `opsz` custa ~35KB e vale: sem ele o título de 96px abre e perde o
 * aperto que faz a primeira dobra funcionar.
 */
const display = Bricolage_Grotesque({
  variable: '--fonte-display',
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz'],
})

const texto = Hanken_Grotesk({
  variable: '--fonte-texto',
  subsets: ['latin'],
  display: 'swap',
})

const DESCRICAO =
  'Ateliê de papelaria personalizada em São Luís — MA. Topo de bolo, lembrancinha, caderneta, livro do bebê, caderno e decoração de festa recortados e montados à mão, com o nome e o tema de quem vai receber. Orçamento pelo WhatsApp.'

export const metadata: Metadata = {
  metadataBase: new URL(urlSite),
  title: {
    default: `${site.nome} — Personalizados feitos à mão em ${site.cidade}`,
    template: `%s | ${site.nome}`,
  },
  description: DESCRICAO,
  applicationName: site.nome,
  keywords: [
    'topo de bolo personalizado',
    'lembrancinha personalizada',
    'caderneta de vacinação personalizada',
    'livro do bebê',
    'caderno personalizado',
    'papelaria personalizada',
    'mesversário',
    'chá de bebê',
    `${site.cidade} ${site.uf}`,
  ],
  authors: [{ name: site.nome }],
  creator: site.nome,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: site.nome,
    title: `${site.nome} — Personalizados feitos à mão`,
    description: DESCRICAO,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.nome} — Personalizados feitos à mão`,
    description: DESCRICAO,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'shopping',
}

export const viewport: Viewport = {
  themeColor: '#8e0f45',
  colorScheme: 'light',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${texto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#conteudo"
          className="bg-dourado-claro text-tinta sr-only rounded-xl px-5 py-3 font-semibold focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100]"
        >
          Pular para o conteúdo
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappFlutuante />
      </body>
    </html>
  )
}
