import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import TestimonialsSlider from '@/components/TestimonialsSlider'
import ContactForm from '@/components/ContactForm'
import Counter from '@/components/Counter'

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Split Design */}
        <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden pt-20 md:bg-[#DAD0C5]">
          {/* Left Section - Dark Green (larger panel) */}
          <div className="w-full md:w-[70%] bg-primary-600 relative flex items-center justify-center p-8 md:p-12 lg:p-16 md:rounded-r-[120px] md:overflow-hidden">
            {/* Blurred background image overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
                alt="Legal background"
                fill
                className="object-cover blur-sm"
              />
            </div>
            
            {/* Content */}
            <div className="relative z-10 ml-0 md:ml-[9%] w-full">
              {/* Badge with Gavel Icon */}
              <ScrollReveal delay={0} direction="fade">
                <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary-700 border border-primary-400 rounded-full">
                  <i className="fa-solid fa-gavel text-[#D4AF37] text-sm" aria-hidden="true" />
                  <span className="text-white text-sm font-medium">Justice, Expertise, Results</span>
                </div>
              </ScrollReveal>

              {/* Main Headline */}
              <ScrollReveal delay={100} direction="up">
                <h2 className="font-heading playfair-display text-4xl md:text-5xl lg:text-8xl text-white mb-6 leading-tight ">
                  Your Trusted Partner
                  For Legal Solutions
                </h2>
              </ScrollReveal>
              
              {/* Description */}
              <ScrollReveal delay={200} direction="up">
                <p className="text-white/90 md:max-w-[50%] text-base md:text-lg mb-10 leading-relaxed">
                  Expert legal guidance for your personal and business needs. Let's build your strongest case together.
                </p>
              </ScrollReveal>
              
              {/* CTA Buttons */}
              <ScrollReveal delay={300} direction="up">
                <div className="flex flex-row  gap-4">
                <Link
                  href="/book-consultation"
                  className="group inline-flex items-center justify-center gap-2 bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-700 transition-all duration-300 shadow-lg border border-accent-600 hover:border-accent-700 hover:text-accent-700"
                >
                  Contact now
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/book-consultation"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-text-primary px-6 py-3 rounded-lg font-semibold  transition-all duration-300 hover:bg-accent-700 "
                >
                  Free consultation
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Section - Light Beige with Lawyer (smaller panel) */}
          <div className="w-full md:flex md:w-[30%] bg-[#e4d6c6] relative items-center justify-center overflow-hidden">
            {/* Blurred background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/lawyer_back.png"
                alt="Lawyer background"
                fill
                className="object-cover blur-sm"
                priority
              />
            </div>
            {/* Solid beige color overlay to remove grey cast */}
            <div className="absolute inset-0 z-[1] bg-[#e4d6c6]/70" />
            <div className="relative max-w-[50%] mx-auto pt-8 w-full z-20 flex md:hidden">

            <Image
                  src="/images/lawyer.webp"
                  alt="Professional Lawyer"
                  width={800}
                  height={1000}
                  className="object-contain w-full h-auto"
                  priority
                  />
                  </div>
          </div>
          {/* Lawyer Portrait */}
            <div className="hidden md:flex absolute bottom-0 right-[15%]   items-end justify-end w-full h-full ">
              <div className="relative max-w-[30%] w-full z-20">
                <ScrollReveal delay={200} direction="fade">
                <Image
                  src="/images/lawyer.webp"
                  alt="Professional Lawyer"
                  width={800}
                  height={1000}
                  className="object-contain w-full h-auto"
                  priority
                  />
                  </ScrollReveal>
              </div>
            </div>

        </section>

        {/* About / Experience Highlight Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 items-stretch">
              {/* Left – Portrait card */}
              <ScrollReveal>
                <div className="h-full">
                  <div className="relative h-full min-h-[320px] rounded-[40px] overflow-hidden shadow-lg bg-gray-100">
                    <Image
                      src="/images/about.jpg"
                      alt="Experienced lawyer reviewing case files"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollReveal>

              {/* Right – Text & stats card */}
              <ScrollReveal>
                <div className="h-full">
                <div className="h-full rounded-[40px] bg-[#EAF3EC] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-between shadow-md">
                  <div>
                    <h2 className="font-heading playfair-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                      Your Advocate. Your Voice.
                      <br />
                      <span className="text-[#D4AF37]">Your Legal Ally</span>
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                    With over 20 years of legal experience, I am dedicated to helping individuals and families navigate the legal system with clarity, confidence, and peace of mind. I take the time to understand each client’s unique situation and provide clear, honest guidance at every stage of the process.

My practice is built on strong advocacy, strategic thinking, and personal attention to detail. From the initial consultation through final resolution, I remain fully committed to protecting your rights and achieving the best possible outcome for your case. Clients can expect transparency, responsiveness, and a results-driven approach tailored to their specific legal needs.                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <ScrollReveal delay={100}>
                      <div>
                        <div className="font-heading playfair-display text-3xl md:text-4xl font-bold text-text-primary mb-1">
                          <Counter end={20} suffix="+" />
                        </div>
                        <div className="text-sm text-text-secondary uppercase tracking-wide">
                          Years of experience
                        </div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                      <div>
                        <div className="font-heading playfair-display text-3xl md:text-4xl font-bold text-text-primary mb-1">
                          <Counter end={500} suffix="+" />
                        </div>
                        <div className="text-sm text-text-secondary uppercase tracking-wide">
                          Successful cases
                        </div>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={300}>
                      <div>
                        <div className="font-heading playfair-display text-3xl md:text-4xl font-bold text-text-primary mb-1">
                          <Counter end={98} suffix="%" />
                        </div>
                        <div className="text-sm text-text-secondary uppercase tracking-wide">
                          Client satisfaction
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Areas of Expertise Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                  My Areas of <span className="text-[#D4AF37]">Expertise</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Focused legal representation across key practice areas to protect your interests.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                  title: 'Corporate Law',
                  description:
                    'Strategic counsel for complex business transactions, mergers, and corporate governance matters.',
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  title: 'Intellectual Property',
                  description: 'Protecting innovation through patents, trademarks, and comprehensive IP strategy.',
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: 'Litigation',
                  description:
                    'Aggressive representation in high-stakes disputes with a proven track record of favorable outcomes.',
                },
                {
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: 'Estate Planning',
                  description:
                    'Comprehensive estate planning to protect and preserve your legacy for future generations.',
                },
              ].map((highlight, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Link href="/practice-areas" className="block group">
                    <div className="bg-beige-light/60 hover:bg-white p-8 rounded-2xl border border-border hover-lift cursor-pointer transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="text-primary-600">{highlight.icon}</div>
                        <svg
                          className="w-4 h-4 text-text-muted group-hover:text-primary-600 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
                        </svg>
                      </div>
                      <h3 className="font-heading text-xl mb-3 font-bold text-text-primary">
                        {highlight.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-sm">{highlight.description}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-beige">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                  Why Choose  <span className="text-[#D4AF37]">Me</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Experience the difference of working with a firm that truly understands your needs
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Strategic Approach',
                  description: 'We don\'t just handle cases—we develop comprehensive strategies tailored to your unique situation and long-term goals.',
                },
                {
                  title: 'Rapid Response',
                  description: 'Time-sensitive matters require immediate attention. We respond to all inquiries within 24 hours, ensuring you\'re never left waiting.',
                },
                {
                  title: 'Client-First Philosophy',
                  description: 'Your success is our success. We build lasting relationships based on trust, transparency, and exceptional results.',
                },
                {
                  title: 'Clear Communication',
                  description: 'We explain your options in plain language, keeping you informed and confident at every stage of your case.',
                },
                {
                  title: 'Tailored Solutions',
                  description: 'No two matters are alike. We craft solutions that reflect your specific goals, risks, and timelines.',
                },
                {
                  title: 'Trusted Reputation',
                  description: 'A history of successful outcomes and long-term client relationships built on integrity and results.',
                },
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded border border-border hover-lift">
                    <div className="w-12 h-12 rounded bg-primary-100 flex items-center justify-center mb-6">
                      <div className="w-2 h-2 rounded-full bg-primary-600" />
                    </div>
                    <h3 className="font-heading text-2xl mb-4 font-bold text-text-primary">{feature.title}</h3>
                    <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsSlider />

        {/* Contact Us Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
