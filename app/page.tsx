'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function CheezSite() {
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
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/MAIN.png"
            alt="$CHEEZ Hero"
            fill
            className="object-cover object-top animate-hero-zoom"
            style={{ objectPosition: '10% top' }}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cheez-cream/90 via-cheez-cream/70 to-cheez-cream/80"></div>
        </div>
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-cheez-dark mb-8 text-shadow-lg leading-tight animate-fade-in">
            $CHEEZ
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-cheez-dark mb-12 text-shadow animate-fade-in-delay">
            every rat's got a dream.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
            <a 
              href="#gallery" 
              className="btn-secondary"
            >
              View the Gallery
            </a>
            <a 
              href="/game" 
              className="btn-primary"
            >
              🎮 Chase Cheez
            </a>
          </div>
          <p className="text-sm text-cheez-dark/70 mt-2 animate-fade-in-delay-2">
            psssst airdrops ⬆
          </p>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-cheez-yellow/20 rounded-full animate-bounce-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-cheez-yellow/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-cheez-yellow/25 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        </div>
      </section>

      {/* Lore Section */}
      <section className="section-padding">
        <div className="container-max space-y-24">
          {loreData.map((item, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
              <div className="w-full md:w-1/2">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={item.image}
                    alt="lore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-cheez-light section-padding">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-cheez-dark">
            the mission
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {[
              "🧀 hoard cheez",
              "🧀 sniff out volume", 
              "🧀 never trust the pigeon",
              "🧀 trade on Arena",
              "🧀 every bite counts"
            ].map((mission, index) => (
              <div key={index} className="flex-1 min-w-[280px] max-w-[320px] bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-xl md:text-2xl font-semibold text-cheez-dark text-center">
                  {mission}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Info */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-8 text-cheez-dark">
            Token Info
          </h2>
          <div className="inline-block p-8 border-2 border-cheez-yellow rounded-2xl bg-white/90 backdrop-blur-sm shadow-xl">
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Token:</span>
                <span className="text-xl font-black text-cheez-yellow">$CHEEZ</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Chain:</span>
                <span className="text-xl">Avalanche</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">Address :</span>
                <button
                  onClick={handleCopyAddress}
                  className="text-lg italic text-gray-500 hover:text-cheez-yellow transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                  title="Click to copy address"
                >
                  <span>0x1234...5678</span>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {copied ? '✓ Copied!' : '📋'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-cheez-white section-padding">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-cheez-dark">
            rat art from the trenches
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={image}
                  alt={`rat art ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cheez-dark text-white py-8 px-4">
        <div className="container-max text-center">
          <div className="text-2xl font-black text-cheez-yellow mb-4">
            $CHEEZ
          </div>
          <div className="text-sm italic text-gray-300">
            site by rats, for rats
          </div>
        </div>
      </footer>

    </div>
  )
} 