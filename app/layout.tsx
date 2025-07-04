import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '$CHEEZ — every rat\'s got a dream',
  description: 'Born in the gutter, raised by cheez. Every day\'s a scam unless you\'re faster. This is $CHEEZ. No rugs. No traps. Just hunger.',
  keywords: ['CHEEZ', 'cryptocurrency', 'meme coin', 'Avalanche', 'trading'],
  authors: [{ name: '$CHEEZ Team' }],
  openGraph: {
    title: '$CHEEZ — every rat\'s got a dream',
    description: 'Born in the gutter, raised by cheez. Every day\'s a scam unless you\'re faster.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '$CHEEZ — every rat\'s got a dream',
    description: 'Born in the gutter, raised by cheez. Every day\'s a scam unless you\'re faster.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-cheez-cream text-cheez-dark font-sans">
        {/* Navigation Bar */}
        <nav className="bg-cheez-dark text-white py-3 px-6 shadow-md">
          <div className="container-max flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-xl font-black text-cheez-yellow hover:text-white transition-colors">
                $CHEEZ
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-cheez-yellow transition-colors">
                  Home
                </Link>
                <Link href="/game" className="hover:text-cheez-yellow transition-colors">
                  Game
                </Link>
                <a 
                  href="https://arena.trade/cheez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cheez-yellow transition-colors"
                >
                  Trade
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://x.com/cheezchaser" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cheez-yellow hover:text-white transition-colors"
              >
                𝕏
              </a>
            </div>
          </div>
        </nav>
        
        {children}
      </body>
    </html>
  )
} 