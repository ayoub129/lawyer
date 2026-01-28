 'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

type Testimonial = {
  name: string
  role: string
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Small Business Owner',
    text: 'Anthony was exactly the kind of lawyer I needed—professional, patient, and genuinely invested in my case. He explained every step clearly and made me feel supported throughout a very difficult time.',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'James Chen',
    role: 'Founder, Global Ventures',
    text: 'From the first meeting, I knew I was in capable hands. The strategy, responsiveness, and attention to detail exceeded every expectation and delivered a result that allowed our business to move forward with confidence.',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Executive Director, Heritage Foundation',
    text: 'Calm, thorough, and exceptionally prepared. Anthony handled a complex matter with clarity and focus, always keeping our organization’s best interests at the center of every decision.',
    image: '/images/testimonial-3.jpg',
  },
]

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const current = testimonials[activeIndex]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const initials = current.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full md:max-w-[85%] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.6fr)] gap-12 items-center">
          {/* Left – Heading & controls */}
          <ScrollReveal delay={0}>
            <div className="space-y-10">
              <div>
                <h2 className="font-heading playfair-display text-4xl md:text-5xl font-bold text-text-primary mb-4">
                  Clients <span className="text-[#D4AF37]">Reviews</span>
                </h2>
                <p className="text-text-secondary max-w-md">
                  Real stories from real clients. Here&apos;s what people have to say about working with me.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  <span className="text-lg">{'←'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-primary-50 hover:border-primary-300 transition-colors"
                >
                  <span className="text-lg">{'→'}</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right – Testimonial card */}
          <ScrollReveal delay={200} direction="right">
            <div className="flex flex-col md:flex-row gap-6 items-stretch">
              {/* Avatar / photo */}
              <div className="md:w-1/3">
                <div className="h-full min-h-[240px] rounded-[32px] overflow-hidden bg-[#E4D6C6] flex items-center justify-center shadow-md">
                  {current.image ? (
                    <Image
                      src={current.image}
                      alt={current.name}
                      width={320}
                      height={380}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-primary-700 font-heading text-xl shadow-md">
                      {initials}
                    </div>
                  )}
                </div>
              </div>

              {/* Quote content */}
              <div className="md:w-2/3">
                <div className="h-full rounded-[32px] bg-[#EAF3EC] px-8 py-8 md:px-10 md:py-10 shadow-md flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="text-[#D4AF37] text-4xl leading-none">“</div>
                    <p className="text-text-secondary leading-relaxed">
                      {current.text}
                    </p>
                  </div>
                  <div className="mt-8">
                    <div className="font-heading font-semibold text-text-primary">
                      {current.name}
                    </div>
                    <div className="text-sm text-text-muted">{current.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

