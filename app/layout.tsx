// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Homelew | Secure Your Role',
  description: 'Homelew helps professionals land their ideal job with expert guidance, packages, and support.',
  keywords: ['Homelew', 'Career', 'Job Roles', 'Consulting', 'Landing Page'],
  authors: [{ name: 'Homelew Team', url: 'https://homelew.co.uk' }],
  creator: 'Homelew',
  robots: 'index, follow',
  openGraph: {
    title: 'Homelew | Secure Your Role',
    description: 'Find your ideal job role and get expert support from Homelew.',
    url: 'https://homelew.co.uk',
    siteName: 'Homelew',
    locale: 'en_GB',
    type: 'website',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
