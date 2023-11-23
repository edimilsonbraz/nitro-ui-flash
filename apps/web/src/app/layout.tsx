import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nitro UI Flash Card',
  description: 'Design System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={GeistSans.className} lang="en">
      <body className="antialiased bg-mirage-50 text-mirage-950">{children}</body>
    </html>
  )
}
