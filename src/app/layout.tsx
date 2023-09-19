import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LayoutClient } from '../components/layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medis',
  description: 'Medis is a medical record system for doctors and patients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  )
}
