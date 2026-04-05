'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'

export default function StoryPage() {
  const timeline = [
    {
      year: '2024',
      title: 'The Fall',
      description: 'Auchi College stood abandoned—a symbol of decay. Years of neglect had transformed once-proud halls into ruins.',
      color: 'from-red-600 to-orange-600',
    },
    {
      year: '2024-2025',
      title: 'Intervention',
      description: 'The Association of Great Achievers (Class of 1991) mobilized. Alumni stepped up with a vision: restore the legacy.',
      color: 'from-yellow-600 to-amber-600',
    },
    {
      year: '2025-2026',
      title: 'The Transformation',
      description: 'Multi-billion Naira investment. Modern facilities. World-class infrastructure. A systematic resurrection.',
      color: 'from-blue-600 to-cyan-600',
    },
    {
      year: 'April 6, 2026',
      title: 'The Commissioning',
      description: 'His Excellency Monday Okpebholo inaugurates the new Auchi College. A triumphant moment for education in Nigeria.',
      color: 'from-gold to-yellow-400',
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
            <span className="gradient-text">From Ruins to Renaissance</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The story of how alumni power transformed a fallen institution into a beacon of hope and excellence.
          </p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="The Journey" subtitle="A four-stage transformation" />

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold to-gold/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-start md:items-center`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="text-sm font-bold text-gold uppercase mb-2">{item.year}</div>
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <div className="w-4 h-4 bg-darkBg rounded-full"></div>
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader title="Leadership" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center">
                <span className="text-6xl">👨‍🏫</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Peter Omoh Dunia</h3>
              <p className="text-gold font-semibold mb-4">Principal, ACA Schools</p>
              <p className="text-gray-300">
                Leading the charge in transforming Auchi College into a world-class institution. A visionary in modern education and sustainable development.
              </p>
            </motion.div>

            {/* Governor */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center">
                <span className="text-6xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Monday Okpebholo</h3>
              <p className="text-gold font-semibold mb-4">Governor, Edo State</p>
              <p className="text-gray-300">
                Commissioning partner. Supporting educational excellence and youth development across Edo State. Official inauguration: April 6, 2026.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="The Impact" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Future-Ready Students', desc: 'ICT-driven education preparing learners for global opportunities.' },
              { icon: '💼', title: 'Economic Growth', desc: 'Employment and skills development through vocational training programs.' },
              { icon: '🌍', title: 'National Pride', desc: 'A model public institution showcasing Nigerian excellence.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Renaissance</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether as a student, alumnus, or partner—become part of this transformative journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-primary">
              Apply as Student
            </Link>
            <Link href="/alumni" className="btn-secondary">
              Alumni Portal
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
