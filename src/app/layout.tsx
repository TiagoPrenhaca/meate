import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Meate',
  description:
    'Meate é uma churrascaria sofisticada e inovadora, dedicada a proporcionar uma experiência gastronômica escaldante para os amantes de carne.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
