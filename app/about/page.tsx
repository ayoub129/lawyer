import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Counter from '@/components/Counter'

export default function About() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section - Centered with Background */}
        <section className="relative min-h-[85vh] flex items-center justify-center pt-32 md:pt-40 overflow-hidden">
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
          <div className="relative z-10 max-w-full md:max-w-[85%] mx-auto px-8 text-center">
            <ScrollReveal delay={0} direction="fade">
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-primary-700/80 backdrop-blur-sm border border-primary-400/50 rounded-full">
                <i className="fa-solid fa-gavel text-[#D4AF37] text-sm" aria-hidden="true" />
                <span className="text-white text-sm font-medium">Our Story, Your Success</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up">
              <h1 className="font-heading playfair-display text-5xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight">
                About <span className="text-[#D4AF37]">Us</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200} direction="up">
              <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Excellence forged through experience, integrity, and unwavering commitment to achieving the best possible outcomes for our clients.
              </p>
            </ScrollReveal>

            {/* Stats Row */}
            <ScrollReveal delay={300} direction="up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className="font-heading playfair-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                    <Counter end={20} suffix="+" />
                  </div>
                  <div className="text-white/90 text-sm md:text-base uppercase tracking-wide">
                    Years of Experience
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className="font-heading playfair-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                    <Counter end={500} suffix="+" />
                  </div>
                  <div className="text-white/90 text-sm md:text-base uppercase tracking-wide">
                    Successful Cases
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
                  <div className="font-heading playfair-display text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
                    <Counter end={98} suffix="%" />
                  </div>
                  <div className="text-white/90 text-sm md:text-base uppercase tracking-wide">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={400} direction="up">
              <Link
                href="/book-consultation"
                className="group inline-flex items-center justify-center gap-2 bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent-700 transition-all duration-300 shadow-xl border border-accent-500 hover:border-accent-600 hover:scale-105"
              >
                Book a Consultation
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>

          {/* Decorative bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg className="w-full h-20 md:h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-10 items-stretch">
              {/* Left – Portrait card */}
              <ScrollReveal delay={0}>
                <div className="h-full">
                  <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-[40px] overflow-hidden shadow-lg bg-gray-100">
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
              <ScrollReveal delay={100}>
                <div className="h-full">
                  <div className="h-full rounded-[40px] bg-[#EAF3EC] px-8 md:px-12 py-10 md:py-12 flex flex-col justify-between shadow-md">
                    <div>
                      <div className="inline-block mb-6 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-semibold">
                        Our Legacy
                      </div>
                      <h2 className="font-heading playfair-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
                        A Legacy of <span className="text-[#D4AF37]">Excellence</span>
                      </h2>
                      <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                        With over 20 years of dedicated practice, we have built a reputation for delivering exceptional legal representation that goes beyond conventional service. Our approach is rooted in deep expertise, strategic thinking, and an unwavering commitment to achieving the best possible outcomes for our clients.
                      </p>
                      <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
                        We understand that legal challenges are often deeply personal and business-critical. That's why we combine rigorous legal analysis with genuine care for our clients' objectives, ensuring every strategy is tailored to their unique circumstances and goals. From the initial consultation through final resolution, we remain fully committed to protecting your rights and achieving the best possible outcome.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      <ScrollReveal delay={200}>
                        <div>
                          <div className="font-heading playfair-display text-3xl md:text-4xl font-bold text-text-primary mb-1">
                            <Counter end={20} suffix="+" />
                          </div>
                          <div className="text-sm text-text-secondary uppercase tracking-wide">
                            Years of experience
                          </div>
                        </div>
                      </ScrollReveal>
                      <ScrollReveal delay={300}>
                        <div>
                          <div className="font-heading playfair-display text-3xl md:text-4xl font-bold text-text-primary mb-1">
                            <Counter end={500} suffix="+" />
                          </div>
                          <div className="text-sm text-text-secondary uppercase tracking-wide">
                            Successful cases
                          </div>
                        </div>
                      </ScrollReveal>
                      <ScrollReveal delay={400}>
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

        {/* Core Values Section */}
        <section className="py-24 bg-beige">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <ScrollReveal delay={0}>
              <div className="text-center mb-16">
                <div className="inline-block mb-6 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-semibold">
                  Our Foundation
                </div>
                <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                  Our Core <span className="text-[#D4AF37]">Values</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  The principles that guide every decision and action in our practice
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: '01',
                  title: 'Integrity',
                  description:
                    'Uncompromising ethical standards in every interaction, ensuring trust and transparency with our clients at all times.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  number: '02',
                  title: 'Excellence',
                  description:
                    'Relentless pursuit of the highest quality in legal strategy, preparation, and execution for every case.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ),
                },
                {
                  number: '03',
                  title: 'Strategic Thinking',
                  description:
                    'Forward-looking counsel that anticipates challenges and positions clients for long-term success.',
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                },
                {
                  number: '04',
                  title: 'Client Focus',
                  description:
                    "Dedicated attention to understanding and achieving each client's unique objectives and priorities.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-white p-8 rounded-2xl border border-border hover-lift shadow-md group">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-primary-600">{value.icon}</div>
                      <div className="font-heading playfair-display text-2xl font-bold text-primary-600/20">
                        {value.number}
                      </div>
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl mb-4 font-bold text-text-primary">{value.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-sm md:text-base">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <ScrollReveal delay={0}>
              <div className="text-center mb-16">
                <div className="inline-block mb-6 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-semibold">
                  Our Journey
                </div>
                <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                  Experience & <span className="text-[#D4AF37]">Achievements</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Milestones in our journey of legal excellence and client success
                </p>
              </div>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto relative pl-4 md:pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent rounded-full" />
              {[
                {
                  year: '2004',
                  title: 'Foundation',
                  description:
                    'Established with a vision to provide premium legal services that combine expertise with exceptional client care. Started as a solo practice focused on corporate law and intellectual property.',
                },
                {
                  year: '2010',
                  title: 'Recognition',
                  description:
                    'Recognized as a leading firm in corporate law and intellectual property, with multiple high-profile case victories. Achieved landmark settlements in complex business disputes.',
                },
                {
                  year: '2015',
                  title: 'Expansion',
                  description:
                    'Expanded practice areas to include comprehensive estate planning and advanced litigation strategies. Opened new offices and built a team of specialized legal professionals.',
                },
                {
                  year: '2020',
                  title: 'Innovation',
                  description:
                    'Pioneered digital transformation in legal services, implementing cutting-edge case management systems and virtual consultation capabilities to better serve clients.',
                },
                {
                  year: '2024',
                  title: 'Excellence',
                  description:
                    'Continuing to set new standards in legal representation, with over 500 successful cases and $50M+ recovered for clients. Maintaining 98% client satisfaction rate.',
                },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="relative pl-8 md:pl-12 mb-12 md:mb-16">
                    <div className="absolute -left-2 md:-left-3 top-0 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 border-2 md:border-4 border-white shadow-medium" />
                    <div className="font-heading playfair-display text-2xl md:text-3xl text-primary-600 mb-2 md:mb-3 font-bold">{item.year}</div>
                    <h3 className="font-heading text-2xl md:text-3xl mb-3 font-bold text-text-primary">{item.title}</h3>
                    <p className="text-text-secondary leading-relaxed text-sm md:text-base lg:text-lg">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Credentials Section */}
        <section className="py-24 bg-[#EAF3EC]">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <ScrollReveal delay={0}>
              <div className="text-center mb-16">
                <div className="inline-block mb-6 px-4 py-2 bg-primary-100 border border-primary-300 rounded-full text-primary-700 text-sm font-semibold">
                  Qualifications
                </div>
                <h2 className="font-heading playfair-display text-4xl md:text-5xl mb-4 font-bold text-text-primary">
                  Education & <span className="text-[#D4AF37]">Credentials</span>
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Comprehensive legal education and professional credentials that form the foundation of our expertise
                </p>
              </div>
            </ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  ),
                  text: (
                    <>
                      <strong className="text-text-primary">Juris Doctor</strong> - Top Tier Law School, Magna Cum Laude, Class of 2003
                    </>
                  ),
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-8.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" />
                    </svg>
                  ),
                  text: (
                    <>
                      <strong className="text-text-primary">Bar Admissions</strong> - State Bar Association, Federal District Courts, U.S. Court of Appeals, U.S. Supreme Court
                    </>
                  ),
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ),
                  text: (
                    <>
                      <strong className="text-text-primary">Professional Memberships</strong> - American Bar Association, State Bar Association, Intellectual Property Law Association, Corporate Counsel Association
                    </>
                  ),
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  ),
                  text: (
                    <>
                      <strong className="text-text-primary">Certifications & Awards</strong> - Board Certified in Corporate Law, "Lawyer of the Year" recognition (2018, 2021), Martindale-Hubbell AV Preeminent Rating
                    </>
                  ),
                },
              ].map((credential, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="flex gap-4 p-6 md:p-8 bg-white rounded-xl md:rounded-2xl border border-border shadow-md hover-lift">
                    <div className="text-primary-600 flex-shrink-0 mt-0.5">{credential.icon}</div>
                    <div className="text-text-secondary leading-relaxed text-sm md:text-base">{credential.text}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
              alt="Legal background"
              fill
              className="object-cover blur-sm"
            />
          </div>
          <div className="max-w-full md:max-w-[85%] mx-auto px-8 text-center relative z-10">
            <ScrollReveal delay={0}>
              <h2 className="font-heading playfair-display text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-white">
                Let's Discuss Your Legal Needs
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Schedule a confidential consultation to explore how we can help achieve your objectives and protect your interests.
              </p>
              <Link
                href="/book-consultation"
                className="group inline-flex items-center justify-center gap-2 bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-accent-700 transition-all duration-300 border border-accent-600 hover:border-accent-700"
              >
                Book a Consultation
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
