'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-full md:max-w-[85%] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 items-stretch">
          {/* Left – Image panel */}
          <ScrollReveal delay={0} direction="right">
            <div className="h-full">
              <div className="relative h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-lg bg-gradient-to-br from-[#E4D6C6] to-[#DAD0C5]">
                <Image
                  src="/images/contact.jpg"
                  alt="Professional lawyer ready to help"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right – Contact form panel */}
          <ScrollReveal delay={200} direction="left">
            <div className="h-full">
              <div className="h-full rounded-[40px] bg-[#EAF3EC] px-8 md:px-12 py-10 md:py-12 shadow-md">
              <h2 className="font-heading playfair-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-8 leading-tight">
                Get In <span className="text-[#D4AF37]">Touch</span>
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                  Message sent successfully! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                  {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First row: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Second row: Phone and Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="corporate">Corporate Law</option>
                      <option value="ip">Intellectual Property</option>
                      <option value="litigation">Litigation</option>
                      <option value="estate">Estate Planning</option>
                      <option value="family">Family Law</option>
                      <option value="criminal">Criminal Defense</option>
                    </select>
                  </div>
                </div>

                {/* Message textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
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
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
