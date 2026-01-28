import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function PracticeAreas() {
  const practiceAreas = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: 'Corporate Law',
      description:
        'Strategic counsel for complex business transactions, including mergers and acquisitions, corporate governance, securities compliance, and strategic partnerships. We help businesses navigate regulatory landscapes and structure deals that maximize value and minimize risk.',
      services: [
        'Mergers & Acquisitions',
        'Corporate Governance',
        'Securities Compliance',
        'Business Formation',
        'Contract Negotiation',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: 'Intellectual Property',
      description:
        'Comprehensive protection and enforcement of intellectual property rights. From patent prosecution to trademark registration and IP litigation, we safeguard innovation and creative works that drive competitive advantage.',
      services: [
        'Patent Prosecution & Litigation',
        'Trademark Registration',
        'Copyright Protection',
        'IP Licensing',
        'Trade Secret Protection',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: 'Litigation',
      description:
        'Aggressive representation in high-stakes disputes across commercial, employment, and complex civil litigation. Our strategic approach combines thorough preparation with innovative tactics to achieve favorable outcomes.',
      services: [
        'Commercial Litigation',
        'Employment Disputes',
        'Contract Disputes',
        'Appellate Practice',
        'Alternative Dispute Resolution',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Estate Planning',
      description:
        'Comprehensive estate planning strategies to protect and preserve wealth for future generations. We design customized plans that minimize tax exposure while ensuring your legacy is managed according to your wishes.',
      services: ['Wills & Trusts', 'Estate Administration', 'Tax Planning', 'Asset Protection', 'Charitable Giving Strategies'],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: 'Employment Law',
      description:
        'Strategic counsel for employers and executives on employment agreements, workplace policies, discrimination claims, and executive compensation. We help navigate complex employment relationships while protecting business interests.',
      services: [
        'Employment Agreements',
        'Executive Compensation',
        'Workplace Policies',
        'Discrimination Defense',
        'Non-Compete Agreements',
      ],
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: 'Real Estate Law',
      description:
        'Comprehensive real estate legal services for commercial and residential transactions, development projects, and property disputes. We handle complex deals with precision and protect client interests throughout the process.',
      services: [
        'Commercial Real Estate',
        'Residential Transactions',
        'Development Projects',
        'Lease Negotiations',
        'Property Disputes',
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
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
                <span className="text-white text-sm font-medium">Our Services</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="up">
              <h1 className="font-heading playfair-display text-5xl md:text-6xl lg:text-8xl text-white mb-6 leading-tight">
                Practice <span className="text-[#D4AF37]">Areas</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={200} direction="up">
              <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Comprehensive legal expertise across specialized practice areas to protect your interests and achieve your objectives.
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

        {/* Practice Areas Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-full md:max-w-[85%] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {practiceAreas.map((area, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-[40px] border border-border hover-lift shadow-md relative overflow-hidden h-full flex flex-col">
                    {/* Decorative background element */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-primary-50 rounded-full -mr-16 md:-mr-20 -mt-16 md:-mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary-100 text-primary-600 mb-6 relative z-10 w-fit">
                      {area.icon}
                    </div>
                    
                    {/* Title */}
                    <h2 className="font-heading playfair-display text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-text-primary relative z-10">
                      {area.title}
                    </h2>
                    
                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base relative z-10 flex-grow">
                      {area.description}
                    </p>
                    
                    {/* Services List */}
                    <ul className="space-y-2 md:space-y-3 relative z-10">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-text-secondary pl-5 md:pl-6 relative flex items-start text-sm md:text-base">
                          <span className="absolute left-0 text-primary-600 font-bold text-lg md:text-xl top-0">→</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
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
                Ready to Discuss Your Legal Needs?
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
