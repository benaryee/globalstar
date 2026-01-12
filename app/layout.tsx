import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Global Star – FinTech Solutions | UK',
  description: 'Global Star – empowering businesses with innovative financial technology and expert consulting services. Registered in the UK (No. 14596390).',
  keywords: ['fintech', 'financial technology', 'business consulting', 'UK fintech', 'digital payments', 'financial analytics'],
  authors: [{ name: 'Global Star Solutions Ltd' }],
  openGraph: {
    title: 'Global Star – FinTech Solutions | UK',
    description: 'Empowering businesses with innovative financial technology and expert consulting services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}
