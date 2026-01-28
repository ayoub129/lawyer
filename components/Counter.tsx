'use client'

import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export default function Counter({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const animateCounter = () => {
      const startTime = Date.now()
      const startValue = 0

      const updateCounter = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = startValue + (end - startValue) * easeOutQuart

        if (decimals > 0) {
          setCount(parseFloat(currentValue.toFixed(decimals)))
        } else {
          setCount(Math.floor(currentValue))
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(updateCounter)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounter()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [hasAnimated, end, duration, decimals])

  const formatNumber = (num: number) => {
    if (decimals > 0) {
      return num.toFixed(decimals)
    }
    return Math.floor(num).toString()
  }

  return (
    <div ref={counterRef}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </div>
  )
}
