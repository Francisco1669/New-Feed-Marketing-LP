import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL('https://newfeed.com.br'),
  title: 'Agência de Marketing Digital em Uruguaiana | New Feed Marketing 🚀',
  description: 'Ajudamos empresas de Uruguaiana e região a crescer no Instagram, atrair clientes e vender mais. Resultados reais em gestão de redes, tráfego pago e branding.',
  keywords: ['marketing digital Uruguaiana', 'agência de marketing RS', 'tráfego pago', 'gestão de redes sociais', 'branding local', 'instagram marketing'],
  authors: [{ name: 'New Feed Marketing' }],
  openGraph: {
    title: 'Agência de Marketing Digital em Uruguaiana | New Feed Marketing 🚀',
    description: 'Ajudamos empresas de Uruguaiana e região a crescer no Instagram, atrair clientes e vender mais. Resultados reais em gestão de redes, tráfego pago e branding.',
    url: 'https://newfeed.com.br',
    siteName: 'New Feed Marketing',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'New Feed Marketing - Agência de Marketing Digital',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agência de Marketing Digital em Uruguaiana | New Feed Marketing 🚀',
    description: 'Ajudamos empresas de Uruguaiana e região a crescer no Instagram, atrair clientes e vender mais.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'New Feed Marketing',
              image: 'https://newfeed.com.br/logo.png',
              telephone: '+55 55 99994-8112',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Duque de Caxias, 1570 sala 301',
                addressLocality: 'Uruguaiana',
                addressRegion: 'RS',
                addressCountry: 'BR',
              },
              url: 'https://newfeed.com.br',
              sameAs: ['https://www.instagram.com/newfeedmarketing'],
              priceRange: '$$',
              description: 'Agência de marketing digital especializada em gestão de redes sociais, tráfego pago e branding em Uruguaiana - RS',
            }),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
