import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Averia_Serif_Libre } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const averia = Averia_Serif_Libre({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-averia',
  weight: '400', // specify the weights you plan to use

})

export const metadata: Metadata = {
  title: 'Aseem Ratha',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${averia.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
