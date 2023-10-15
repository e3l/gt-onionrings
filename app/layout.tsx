import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import FirebaseContext from '../contexts/firebase'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GT Onion Rings',
  description: 'GT Dining Hall Menus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <FirebaseContext>
        <body className={inter.className}>
          {children}
        </body>
      </FirebaseContext>
    </html >
  )
}
