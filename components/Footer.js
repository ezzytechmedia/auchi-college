'use client'

import Link from 'next/link'
import { Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accentDark border-t border-gray-700 mt-20">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">ACA Schools</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reborn for excellence. A legendary comeback story transformed into a digital monument.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link href="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/academics" className="hover:text-gold transition-colors">Academics</Link></li>
              <li><Link href="/admissions" className="hover:text-gold transition-colors">Admissions</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/facilities" className="hover:text-gold transition-colors">Facilities</Link></li>
              <li><Link href="/alumni" className="hover:text-gold transition-colors">Alumni</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
              <li><Link href="/news" className="hover:text-gold transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gold">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Auchi, Edo State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+234 (0)XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@acaschools.ng</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} ACA Schools. All rights reserved. | From Ruins to Renaissance
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
