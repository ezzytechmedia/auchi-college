'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { Zap, Monitor, Flask, Trophy, Building2, Lock } from 'lucide-react'

export default function FacilitiesPage() {
  const facilities = [
    {
      icon: Monitor,
      title: 'ICT / CBT Centre',
      specs: ['320 Computers', 'Digital Library', 'High-speed Internet', 'Video conferencing'],
      description: 'State-of-the-art technology hub for digital learning and skill development.',
    },
    {
      icon: Flask,
      title: 'Science Laboratories',
      specs: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Modern Equipment'],
      description: 'Fully equipped laboratories for hands-on scientific experimentation.',
    },
    {
      icon: Trophy,
      title: 'Sports Complex',
      specs: ['Synthetic Football Field', 'Basketball Court', 'Volleyball Court', 'Track & Field'],
      description: 'World-class sports facilities developing athletic excellence.',
    },
    {
      icon: Building2,
      title: 'Event Centre',
      specs: ['1000-Capacity Hall', 'Modern Acoustics', 'Professional Stage', 'Multi-function'],
      description: 'Premier venue for ceremonies, conferences, and cultural events.',
    },
    {
      icon: Zap,
      title: 'Sustainability Systems',
      specs: ['20KVA Solar Power', '10,000L Borehole', 'Street Lighting', '24/7 Power'],
      description: 'Green energy infrastructure ensuring continuous, eco-friendly operations.',
    },
    {
      icon: Lock,
      title: 'Security Infrastructure',
      specs: ['6 CCTV Cameras', 'Perimeter Fencing', 'Gatehouse', '24/7 Monitoring'],
      description: 'Advanced surveillance ensuring safety and security across campus.',
    },
  ]

  return (
    <div>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accentDark to-darkBg">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="gradient-text">World-Class Facilities</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built to international standards. Designed for excellence. Ready for the future.
          </p>
        </div>
      </section>

      {/* FACILITIES GRID */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card group cursor-pointer"
                >
                  <div className="mb-4">
                    <Icon size={48} className="text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-gray-300 mb-6">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.specs.map((spec, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SHOWCASE SECTION */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader title="Campus Highlights" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-6">Built for Tomorrow</h3>
              <p className="text-gray-300 mb-4">
                Every facility at Auchi College reflects a commitment to excellence and sustainability. From the ICT centre housing 320 computers to the solar-powered infrastructure, we've invested in infrastructure that will serve generations of learners.
              </p>
              <p className="text-gray-300 mb-6">
                Our 1000-capacity event centre has already hosted national conferences and is positioned as a hub for educational and cultural events in Edo State.
              </p>
              <ul className="space-y-3">
                {['💡 Energy-efficient systems', '🔒 Advanced security', '📱 Digital-first infrastructure', '🌱 Sustainable design'].map((item, idx) => (
                  <li key={idx} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Stats Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h4 className="text-2xl font-bold mb-8 text-gold">Investment Highlights</h4>
              <div className="space-y-6">
                {[
                  { label: 'Campus Size', value: 'Multi-hectare' },
                  { label: 'Total Investment', value: 'Multi-Billion Naira' },
                  { label: 'Tech Integration', value: '100%' },
                  { label: 'Green Energy', value: '20KVA Solar' },
                ].map((stat, idx) => (
                  <div key={idx} className="border-b border-gray-700 pb-4 last:border-0">
                    <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-gold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
