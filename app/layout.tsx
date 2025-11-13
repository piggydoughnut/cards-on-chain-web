import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const courierPrime = Courier_Prime({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CARDSONCHAIN - Cyberpunk Tactical Card Battles',
  description: 'Enter the arena for strategic card warfare in this retro cyberpunk card game experience',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased bg-background text-foreground ${courierPrime.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
