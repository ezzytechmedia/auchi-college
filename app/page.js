'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import StatCounter from '@/components/StatCounter'
import SectionHeader from '@/components/SectionHeader'
import { ArrowRight, BookOpen, Users, Zap, Shield } from 'lucide-react'

export default function HomePage() {
  const stats = [
    { label: 'Computers (ICT)', value: 320, icon: '💻' },
    { label: 'Event Centre Capacity', value: 1000, icon: '🏢' },
    { label: 'Solar Street Lights', value: 40, icon: '⚡' },
    { label: 'CCTV Cameras', value: 6, icon: '📹' },
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-30"></div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Auchi College
              <br />
              <span className="gradient-text">Reborn for Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A legacy restored by the power of its people. <br />
              <span className="text-gold font-bold">From Ruins to Renaissance</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/story" className="btn-primary flex items-center justify-center gap-2">
                Explore Our Story <ArrowRight size={20} />
              </Link>
              <Link href="/admissions" className="btn-secondary">
                Apply Now
              </Link>
              <Link href="/alumni" className="btn-secondary">
                Join Alumni
              </Link>
            </div>

            {/* Subheading */}
            <p className="text-sm text-gray-400 uppercase tracking-widest">
              The Digital Monument of a Legendary Comeback
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <motion.div className="w-1 h-3 bg-gold rounded-full mt-2"></motion.div>
          </div>
        </motion.div>
      </section>

      {/* IMPACT STATS SECTION */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader
            title="The Transformation by Numbers"
            subtitle="A multi-billion Naira investment in excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <StatCounter end={stat.value} />
                <p className="text-gray-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK ACCESS SECTION */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="Explore Everything" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Academics', href: '/academics', icon: BookOpen },
              { label: 'Admissions', href: '/admissions', icon: Users },
              { label: 'Alumni Network', href: '/alumni', icon: Zap },
              { label: 'Facilities', href: '/facilities', icon: Shield },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ translateY: -5 }}
                >
                  <Link href={item.href}>
                    <div className="card text-center cursor-pointer h-full flex flex-col items-center justify-center py-12">
                      <Icon size={40} className="text-gold mb-4" />
                      <h3 className="text-xl font-bold">{item.label}</h3>
                      <p className="text-gray-400 mt-2 text-sm">Explore →</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Be Part of Our Legacy</h2>
            <p className="text-gray-300 mb-12 text-xl max-w-2xl mx-auto">
              Join the ACA School family and become part of a transformative educational journey.
            </p>
            <Link href="/admissions" className="btn-primary text-lg">
              Start Your Application Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
