'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: '',
    date: '',
    time: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    const dateInput = document.getElementById('date') as HTMLInputElement
    if (dateInput) {
      dateInput.setAttribute('min', today)
    }
  }, [])

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else {
          delete newErrors.name
        }
        break
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'phone':
        const phoneRegex = /^[\d\s\(\)\-]+$/
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required'
        } else if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
          newErrors.phone = 'Please enter a valid phone number'
        } else {
          delete newErrors.phone
        }
        break
      case 'practiceArea':
        if (!value) {
          newErrors.practiceArea = 'Please select a practice area'
        } else {
          delete newErrors.practiceArea
        }
        break
      case 'date':
        if (!value) {
          newErrors.date = 'Please select a preferred date'
        } else {
          const selectedDate = new Date(value)
          const today = new Date()
          today.setHours(0, 0, 0, 0)
          if (selectedDate < today) {
            newErrors.date = 'Please select a future date'
          } else {
            delete newErrors.date
          }
        }
        break
      case 'time':
        if (!value) {
          newErrors.time = 'Please select a preferred time'
        } else {
          delete newErrors.time
        }
        break
    }
    
    setErrors(newErrors)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      validateField(name, value)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    
    // Validate all fields
    const validationErrors: Record<string, string> = {}
    Object.keys(formData).forEach((key) => {
      if (key !== 'message') {
        const value = formData[key as keyof typeof formData]
        if (!value) {
          validationErrors[key] = 'This field is required'
        }
      }
    })

    // Validate email format
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        validationErrors.email = 'Please enter a valid email address'
      }
    }

    // Validate phone format
    if (formData.phone) {
      const phoneRegex = /^[\d\s\(\)\-]+$/
      if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
        validationErrors.phone = 'Please enter a valid phone number'
      }
    }

    // Validate date
    if (formData.date) {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        validationErrors.date = 'Please select a future date'
      }
    }

    setErrors(validationErrors)

    // Check if there are any errors
    if (Object.keys(validationErrors).length > 0) {
      return
    }

    // Submit form
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit consultation request')
      }

      // Success
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        practiceArea: '',
        date: '',
        time: '',
        message: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Failed to submit consultation request. Please try again later.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
              alt="Legal background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-primary-600/85" />
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEuNSIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-full md:max-w-[85%] mx-auto px-8 text-center pb-16 md:pb-20">
            <ScrollReveal delay={0} direction="fade">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary-700/80 backdrop-blur-sm border border-primary-400/50 rounded-full">
                <i className="fa-solid fa-calendar-check text-[#D4AF37] text-sm" aria-hidden="true" />
                <span className="text-white text-sm font-medium">Get Started</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up">
              <h1 className="font-heading playfair-display text-5xl md:text-6xl lg:text-8xl text-white mb-6 md:mb-8 leading-tight">
                Book a <span className="text-[#D4AF37]">Consultation</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200} direction="up">
              <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Schedule a confidential consultation to discuss your legal needs and explore how we can help achieve your objectives.
              </p>
            </ScrollReveal>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
              <div className="lg:col-span-3">
                <ScrollReveal delay={0}>
                  <div className="inline-block mb-6 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-semibold">
                    Consultation Request
                  </div>
                  <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                    Request Your <span className="text-[#D4AF37]">Consultation</span>
                  </h2>
                  <p className="text-text-secondary mb-8 leading-relaxed text-base md:text-lg">
                    Fill out the form below and we'll contact you within 24 hours to schedule your consultation. All
                    information is kept strictly confidential.
                  </p>

                  {submitted && (
                    <div className="mb-6 p-6 bg-green-50 border-2 border-green-200 rounded-xl">
                      <h3 className="font-semibold text-lg mb-2 text-green-700">Request Submitted Successfully!</h3>
                      <p className="text-green-600">
                        We'll contact you within 24 hours to confirm your consultation.
                      </p>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                      <h3 className="font-semibold text-lg mb-2 text-red-700">Submission Error</h3>
                      <p className="text-red-600">{submitError}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-text-primary font-medium mb-2 text-sm">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.name ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-text-primary font-medium mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-text-primary font-medium mb-2 text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.phone ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label htmlFor="practiceArea" className="block text-text-primary font-medium mb-2 text-sm">
                        Practice Area *
                      </label>
                      <select
                        id="practiceArea"
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.practiceArea ? 'border-red-500' : 'border-border'
                        }`}
                      >
                        <option value="">Select a practice area</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="ip">Intellectual Property</option>
                        <option value="litigation">Litigation</option>
                        <option value="estate">Estate Planning</option>
                        <option value="employment">Employment Law</option>
                        <option value="real-estate">Real Estate Law</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.practiceArea && <p className="text-red-500 text-sm mt-1">{errors.practiceArea}</p>}
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-text-primary font-medium mb-2 text-sm">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.date ? 'border-red-500' : 'border-border'
                        }`}
                      />
                      {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-text-primary font-medium mb-2 text-sm">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all ${
                          errors.time ? 'border-red-500' : 'border-border'
                        }`}
                      >
                        <option value="">Select a time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                      {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-text-primary font-medium mb-2 text-sm">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full bg-white border-2 border-border rounded-xl px-4 py-3.5 text-text-primary focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-y"
                        placeholder="Tell us about your legal needs or any specific questions you have..."
                      />
                    </div>

                    <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#B8941F] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit request
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>
                  </form>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-2">
                <ScrollReveal delay={100}>
                  <div className="space-y-6">
                    {[
                      {
                        icon: (
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        ),
                        title: 'Confidential',
                        description:
                          'All consultations are strictly confidential and protected by attorney-client privilege.',
                      },
                      {
                        icon: (
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                          </svg>
                        ),
                        title: 'Expert Counsel',
                        description: '20+ years of experience providing strategic legal solutions for complex matters.',
                      },
                      {
                        icon: (
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        ),
                        title: 'Quick Response',
                        description: 'We respond to all consultation requests within 24 hours.',
                      },
                    ].map((badge, index) => (
                      <ScrollReveal key={index} delay={200 + index * 100}>
                        <div className="bg-beige-light/60 p-6 md:p-8 rounded-xl md:rounded-2xl border border-border shadow-md text-center hover-lift">
                          <div className="text-primary-600 mb-4 flex justify-center">{badge.icon}</div>
                          <h3 className="font-heading text-xl md:text-2xl mb-2 font-bold text-text-primary">{badge.title}</h3>
                          <p className="text-text-secondary text-sm md:text-base leading-relaxed">{badge.description}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
