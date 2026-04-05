'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Our Story', href: '/story' },
    { label: 'Facilities', href: '/facilities' },
    { label: 'Academics', href: '/academics' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'News', href: '/news' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-darkBg/95 backdrop-blur-md border-b border-gray-700 z-50">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold gradient-text">
          ACA Schools
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/admissions" className="btn-primary">
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-accentDark border-t border-gray-700 py-4 px-6">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold transition-colors block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/admissions" className="btn-primary block text-center">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
