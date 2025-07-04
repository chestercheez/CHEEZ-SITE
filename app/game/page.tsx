'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CheezGame() {
  const [score, setScore] = useState(0)
  const [clicksPerSecond, setClicksPerSecond] = useState(1)
  const [upgrades, setUpgrades] = useState({
    autoClicker: 0,
    multiplier: 1,
    doubleClick: 0
  })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Airdrop deadline: July 5th, 2025 at 5PM EST (9PM UTC)
  const airdropDeadline = new Date('2025-07-05T21:00:00Z').getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = airdropDeadline - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [airdropDeadline])

  useEffect(() => {
    const autoClicker = setInterval(() => {
      setScore(prev => prev + (upgrades.autoClicker * upgrades.multiplier))
    }, 1000)

    return () => clearInterval(autoClicker)
  }, [upgrades.autoClicker, upgrades.multiplier])

  const handleClick = () => {
    const clickValue = upgrades.multiplier * (upgrades.doubleClick > 0 ? 2 : 1)
    setScore(prev => prev + clickValue)
  }

  const buyUpgrade = (type: string, cost: number) => {
    if (score >= cost) {
      setScore(prev => prev - cost)
      setUpgrades(prev => ({
        ...prev,
        [type]: prev[type as keyof typeof prev] + 1
      }))
    }
  }

  const generateScoreImage = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 1200
    canvas.height = 630

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#f8f3e6')
    gradient.addColorStop(1, '#e0dbd1')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add some decorative elements
    ctx.fillStyle = '#FFD147'
    ctx.globalAlpha = 0.1
    for (let i = 0; i < 5; i++) {
      ctx.beginPath()
      ctx.arc(200 + i * 200, 100 + (i % 2) * 50, 30, 0, 2 * Math.PI)
      ctx.fill()
    }
    ctx.globalAlpha = 1

    // Main title
    ctx.fillStyle = '#4E4E4E'
    ctx.font = 'bold 72px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('$CHEEZ Clicker Game', canvas.width / 2, 150)

    // Score display
    ctx.fillStyle = '#FFD147'
    ctx.font = 'bold 120px Inter, sans-serif'
    ctx.fillText(score.toLocaleString(), canvas.width / 2, 320)

    // Score label
    ctx.fillStyle = '#4E4E4E'
    ctx.font = 'bold 48px Inter, sans-serif'
    ctx.fillText('POINTS', canvas.width / 2, 380)

    // Subtitle
    ctx.font = 'bold 36px Inter, sans-serif'
    ctx.fillText('Can you beat my score?', canvas.width / 2, 450)

    // Footer
    ctx.font = 'bold 24px Inter, sans-serif'
    ctx.fillText('🧀 Every rat\'s got a dream 🐀', canvas.width / 2, 550)

    // Convert to blob and download
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `cheez-score-${score.toLocaleString()}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        // Also open tweet with image
        const text = `I scored ${score.toLocaleString()} points in the $CHEEZ Clicker Game! 🧀🐀 @cheezchaser`
        const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`
        window.open(tweetUrl, '_blank')
      }
    }, 'image/png')
  }

  const getUpgradeCost = (baseCost: number, currentLevel: number) => {
    return Math.floor(baseCost * Math.pow(1.5, currentLevel))
  }

  return (
    <div className="min-h-screen bg-cheez-cream text-cheez-dark">
      {/* Header */}
      <header className="bg-cheez-yellow py-4 px-6 shadow-lg">
        <div className="container-max flex justify-between items-center">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-black">🧀 Clicker Game</h1>
            <p className="text-sm">Top chasers get $CHEEZ airdrop!</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">Score: {score.toLocaleString()}</div>
            <div className="text-sm text-gray-600">+{clicksPerSecond}/sec</div>
          </div>
        </div>
      </header>

      {/* Airdrop Countdown */}
      <section className="bg-cheez-light py-8 px-4">
        <div className="container-max text-center">
          <h2 className="text-2xl font-black mb-4">🎁 $CHEEZ Airdrop Countdown</h2>
          <p className="text-lg mb-6">Top $CHEEZ chasers get airdropped on July 5th, 5PM EST (9PM UTC)</p>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-3xl font-black text-cheez-yellow">{timeLeft.days}</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-3xl font-black text-cheez-yellow">{timeLeft.hours}</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-3xl font-black text-cheez-yellow">{timeLeft.minutes}</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="text-3xl font-black text-cheez-yellow">{timeLeft.seconds}</div>
              <div className="text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Area */}
      <section className="py-12 px-4">
        <div className="container-max max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Clicker Area */}
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Click the Cheez!</h3>
                <button
                  onClick={handleClick}
                  className="w-48 h-48 bg-cheez-yellow rounded-full text-6xl hover:scale-105 active:scale-95 transition-transform duration-100 shadow-2xl hover:shadow-3xl"
                >
                  🧀
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="text-2xl font-bold">Score: {score.toLocaleString()}</div>
                <div className="text-lg text-gray-600">Clicks per second: {clicksPerSecond}</div>
                
                <button
                  onClick={generateScoreImage}
                  className="bg-cheez-dark text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors"
                >
                  🖼️ Generate & Share Score
                </button>
                <p className="text-sm text-gray-600 mt-2">
                  💡 Don't forget to include the generated image in your tweet!
                </p>
              </div>
            </div>

            {/* Upgrades */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Upgrades</h3>
              <div className="space-y-4">
                
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Auto Clicker</h4>
                      <p className="text-sm text-gray-600">Automatically clicks for you</p>
                      <p className="text-xs">Owned: {upgrades.autoClicker}</p>
                    </div>
                    <button
                      onClick={() => buyUpgrade('autoClicker', getUpgradeCost(10, upgrades.autoClicker))}
                      disabled={score < getUpgradeCost(10, upgrades.autoClicker)}
                      className="bg-cheez-yellow text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ${getUpgradeCost(10, upgrades.autoClicker).toLocaleString()}
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Multiplier</h4>
                      <p className="text-sm text-gray-600">Doubles your click value</p>
                      <p className="text-xs">Current: {upgrades.multiplier}x</p>
                    </div>
                    <button
                      onClick={() => buyUpgrade('multiplier', getUpgradeCost(50, upgrades.multiplier - 1))}
                      disabled={score < getUpgradeCost(50, upgrades.multiplier - 1)}
                      className="bg-cheez-yellow text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ${getUpgradeCost(50, upgrades.multiplier - 1).toLocaleString()}
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold">Double Click</h4>
                      <p className="text-sm text-gray-600">Each click counts as 2</p>
                      <p className="text-xs">Owned: {upgrades.doubleClick}</p>
                    </div>
                    <button
                      onClick={() => buyUpgrade('doubleClick', getUpgradeCost(100, upgrades.doubleClick))}
                      disabled={score < getUpgradeCost(100, upgrades.doubleClick)}
                      className="bg-cheez-yellow text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      ${getUpgradeCost(100, upgrades.doubleClick).toLocaleString()}
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
} 