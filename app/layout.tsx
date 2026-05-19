import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Movara — Send money home. On WhatsApp.',
  description:
    'Movara lets you send money to family and friends across Africa and beyond — right from a WhatsApp chat. Low fees, real-time rates, no app to download.',
  keywords: [
    'WhatsApp remittance',
    'send money via WhatsApp',
    'money transfer Africa',
    'cross-border payments',
    'diaspora remittance',
    'mobile money',
    'instant transfer',
  ],
  authors: [{ name: 'Movara' }],
  openGraph: {
    title: 'Movara — Send money home. On WhatsApp.',
    description:
      'The fastest way to send money to family and friends — over the chat app you already use.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${display.variable}`}>
      <body className="font-sans bg-white dark:bg-ink-950 text-ink-900 dark:text-ink-100 antialiased selection:bg-primary-500/30">
        <Providers>
          <div className="relative isolate">
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
            <BackToTop />
          </div>
        </Providers>
      </body>
    </html>
  )
}
