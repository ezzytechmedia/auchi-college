'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'

export default function AdmissionsPage() {
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
            <span className="gradient-text">Join ACA Schools</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Begin your journey to excellence. Apply now to be part of our renaissance.
          </p>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader title="How to Apply" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { step: '1', title: 'Register', desc: 'Create your account on our portal' },
              { step: '2', title: 'Upload Documents', desc: 'Submit required academic records' },
              { step: '3', title: 'Assessment', desc: 'Complete entrance examination' },
              { step: '4', title: 'Admission', desc: 'Receive your admission letter' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold text-darkBg flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS & INFO */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Requirements</h3>
              <div className="space-y-4">
                {[
                  '✓ Valid birth certificate / ID',
                  '✓ Recent school report card (last 2 years)',
                  '✓ Parent/Guardian contact information',
                  '✓ Medical examination report',
                  '✓ Character reference (optional)',
                ].map((req, idx) => (
                  <div key={idx} className="text-gray-300 text-lg">{req}</div>
                ))}
              </div>
            </motion.div>

            {/* Right: Important Dates */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 text-gold">Important Dates</h3>
              <div className="space-y-4">
                {[
                  { date: 'April 15, 2026', event: 'Application Deadline' },
                  { date: 'April 20, 2026', event: 'Entrance Exam' },
                  { date: 'May 5, 2026', event: 'Results Released' },
                  { date: 'May 20, 2026', event: 'Academic Year Begins' },
                ].map((item, idx) => (
                  <div key={idx} className="border-b border-gray-700 pb-3 last:border-0">
                    <p className="text-gold font-semibold">{item.date}</p>
                    <p className="text-gray-400">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Apply?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your application today. Join hundreds of students transforming their futures at ACA Schools.
            </p>
            <button className="btn-primary text-lg">
              Start Application Portal
            </button>
            <p className="text-gray-400 mt-6 text-sm">
              Questions? Contact us at <span className="text-gold">admissions@acaschools.ng</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
