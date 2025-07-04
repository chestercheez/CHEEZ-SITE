'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText('0x1234...5678')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy address:', err)
    }
  }

  const loreData = [
    {
      text: "born in the gutter…",
      image: "/COCKROACH.png"
    },
    {
      text: "raised by cheez…",
      image: "/HUNGRY FOR IT.png"
    },
    {
      text: "every day's a scam unless you're faster.",
      image: "/TRAP.png"
    },
    {
      text: "he saw the rats with yachts and thought — why not me?",
      image: "/MONEY.PNG"
    },
    {
      text: "this is $CHEEZ. no rugs. no traps. just hunger.",
      image: "/STRONG.png"
    }
  ]

  const galleryImages = [
    "/COCKROACH.png",
    "/ROLLING IN IT.png", 
    "/TRAP.png",
    "/STRONG.png",
    "/HUNGRY FOR IT.png",
    "/DEVVING.PNG",
    "/MONEY.PNG",
    "/MANHOLE.png",
    "/CHART.png"
  ]

  return (
    <div className="min-h-screen bg-cheez-cream text-cheez-dark">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container-max text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            🧀 $CHEEZ 🧀
          </h1>
          <p className="text-2xl md:text-3xl font-bold mb-8">
            Every rat's got a dream
          </p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg md:text-xl mb-6">
              The most delicious meme coin on Arena. Join the cheez chasers and chase your dreams! 
              Top players get airdropped $CHEEZ tokens.
            </p>
            
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold mb-4">📋 Contract Details</h3>
              <div className="text-left space-y-2">
                <p><strong>Contract Address:</strong></p>
                <code className="bg-gray-100 px-3 py-2 rounded text-sm break-all">
                  0x3d31960bf56e816f42c47607de4432a4c4efac0c
                </code>
                <p className="text-sm text-gray-600 mt-2">Network: Arena</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/game"
              className="bg-cheez-yellow text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Chase Cheez
            </Link>
            <div className="text-center">
              <p className="text-sm text-gray-600">⬆ psssst airdrops</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://arena.trade/token/0x3d31960bf56e816f42c47607de4432a4c4efac0c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cheez-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
            >
              🚀 Trade on Arena
            </a>
            <a 
              href="https://arena.social/community/0x3D31960bf56e816F42c47607De4432a4C4EFac0c"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              💬 Join Community
            </a>
            <a 
              href="https://x.com/cheezchaser"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              🐦 Follow on X
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-cheez-light">
        <div className="container-max">
          <h2 className="text-4xl font-black text-center mb-12">🧀 Cheez Gallery 🧀</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/MAIN.png" alt="Cheez Main" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/HUNGRY FOR IT.png" alt="Hungry for it" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/ROLLING IN IT.png" alt="Rolling in it" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/STRONG.png" alt="Strong" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/MONEY.PNG" alt="Money" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/TRAP.png" alt="Trap" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/MANHOLE.png" alt="Manhole" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/COCKROACH.png" alt="Cockroach" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <Image src="/CHART.png" alt="Chart" width={400} height={300} className="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cheez-dark text-white py-8 px-4">
        <div className="container-max text-center">
          <p className="text-lg mb-4">🧀 Chase the cheez, chase your dreams 🐀</p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://arena.trade/token/0x3d31960bf56e816f42c47607de4432a4c4efac0c"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cheez-yellow transition-colors"
            >
              Trade
            </a>
            <a 
              href="https://arena.social/community/0x3D31960bf56e816F42c47607De4432a4C4EFac0c"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cheez-yellow transition-colors"
            >
              Community
            </a>
            <Link href="/game" className="hover:text-cheez-yellow transition-colors">
              Game
            </Link>
            <a 
              href="https://x.com/cheezchaser"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cheez-yellow transition-colors"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 