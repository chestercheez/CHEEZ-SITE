import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '$CHEEZ - Every rat\'s got a dream',
  description: 'The most delicious meme coin on Arena. Join the cheez chasers and chase your dreams!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Bar */}
        <nav className="bg-cheez-yellow shadow-lg">
          <div className="container-max px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-black text-cheez-dark">
                🧀 $CHEEZ
              </Link>
              
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-cheez-dark hover:text-gray-700 font-semibold transition-colors">
                  Home
                </Link>
                <Link href="/game" className="text-cheez-dark hover:text-gray-700 font-semibold transition-colors">
                  Game
                </Link>
                <a 
                  href="https://arena.trade/token/0x3d31960bf56e816f42c47607de4432a4c4efac0c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cheez-dark hover:text-gray-700 font-semibold transition-colors"
                >
                  Trade
                </a>
                <a 
                  href="https://arena.social/community/0x3D31960bf56e816F42c47607De4432a4C4EFac0c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cheez-dark hover:text-gray-700 font-semibold transition-colors"
                >
                  Community
                </a>
              </div>

              <div className="flex space-x-3">
                <a 
                  href="https://x.com/cheezchaser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cheez-dark hover:text-gray-700 transition-colors"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
} 