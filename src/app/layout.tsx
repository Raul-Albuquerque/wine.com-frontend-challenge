import type { Metadata } from 'next'
import { neoSans } from '@/assets/fonts'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Wine - O maior clube de vinhos do mundo',
  description: 'O maior clube de vinhos do mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={neoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
