'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        const button = document.querySelector('[aria-label="Toggle menu"]')
        if (button && !button.contains(event.target as Node)) {
          setMenuOpen(false)
        }
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Prevent body scroll when menu is open on mobile
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  // Close menu on resize if switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/book-consultation', label: 'Book Consultation', cta: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-border'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16 md:h-20 max-w-full md:max-w-[85%]">
        <div className="playfair-display text-xl sm:text-2xl font-bold">
          <Link href="/" className="text-primary-600 hover:text-primary-700 transition-opacity">
            Legal Excellence
          </Link>
        </div>
        <ul
          ref={menuRef}
          className={`md:flex md:flex-row md:items-center md:static md:w-auto md:bg-transparent md:border-0 md:shadow-none md:opacity-100 md:pointer-events-auto
            fixed top-16 md:top-auto left-0 flex-col w-full bg-white border-t border-border p-8 shadow-large
            transition-all duration-300 ease-in-out
            ${
              menuOpen 
                ? 'left-0 opacity-100 pointer-events-auto' 
                : '-left-full opacity-0 pointer-events-none md:pointer-events-auto'
            }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href} className="md:ml-8 md:my-0 my-4 first:mt-0">
                <Link
                  href={link.href}
                  className={`font-medium text-sm transition-all relative group ${
                    link.cta
                      ? 'bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 hover:shadow-lg inline-block'
                      : `text-text-secondary hover:text-primary-600 ${
                          isActive ? 'text-primary-600 font-semibold' : ''
                        }`
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                  {!link.cta && (
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>
    </header>
  )
}
