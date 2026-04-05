'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'

export default function AlumniPage() {
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
            <span className="gradient-text">Alumni Network</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Once ACA, Always ACA. Connect, lead, and give back to your alma mater.
          </p>
        </div>
      </section>

      {/* ALUMNI FEATURES */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="ACA Alumni Portal" subtitle="Your network. Your platform. Your legacy." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '👥', title: 'Directory', desc: 'Connect with thousands of alumni worldwide' },
              { icon: '🤝', title: 'Networking', desc: 'Events, webinars, and professional meetups' },
              { icon: '💼', title: 'Opportunities', desc: 'Job board and mentorship programs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
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

      {/* NOTABLE ALUMNI */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader title="Notable Alumni" subtitle="Leaders Who Started Here" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Peter Omoh Dunia */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Peter Omoh Dunia</h3>
                  <p className="text-gold font-semibold mb-2">Principal, ACA Schools</p>
                  <p className="text-gray-300 text-sm">
                    A distinguished alumnus who returned to lead the institution through its renaissance. Visionary educator and nation-builder.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Placeholder for more alumni */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Your Name Here?</h3>
                  <p className="text-gold font-semibold mb-2">Alumni Showcase</p>
                  <p className="text-gray-300 text-sm">
                    Is your story worth sharing? Nominate alumni for our hall of fame. Submit your achievements and inspire the next generation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTION SYSTEM */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="Give Back" subtitle="Support Our Mission" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Sponsor a Student', desc: 'Support deserving students through scholarships' },
              { icon: '🏗️', title: 'Fund Projects', desc: 'Contribute to infrastructure and innovation' },
              { icon: '📚', title: 'Mentor', desc: 'Share your expertise with current students' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card text-center cursor-pointer hover:border-gold"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <button className="text-gold font-semibold hover:font-bold transition-all">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Register as Alumni</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with your ACA family. Access alumni resources, job opportunities, and exclusive events.
            </p>
            <button className="btn-primary text-lg">
              Join Alumni Portal
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
