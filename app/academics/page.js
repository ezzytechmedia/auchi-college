'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'

export default function AcademicsPage() {
  const programs = [
    {
      level: 'Junior Secondary',
      description: 'Grades 7-9',
      subjects: ['Mathematics', 'English', 'Science', 'Social Studies', 'ICT', 'Vocational Skills'],
      features: ['Foundational STEM', 'Digital Literacy', 'Character Development'],
    },
    {
      level: 'Senior Secondary',
      description: 'Grades 10-12',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Economics'],
      features: ['Advanced STEM', 'University Preparation', 'Leadership Training'],
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
            <span className="gradient-text">Academic Excellence</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            ICT-driven education. Science & Technology focus. Future leaders.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-2">{program.level}</h3>
                <p className="text-gold mb-6">{program.description}</p>

                <h4 className="font-bold mb-3 text-lg">Core Subjects</h4>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {program.subjects.map((subject, i) => (
                    <div key={i} className="bg-accentDark rounded px-3 py-2 text-sm">
                      {subject}
                    </div>
                  ))}
                </div>

                <h4 className="font-bold mb-3 text-lg">Program Highlights</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING METHODOLOGY */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader title="Our Approach" subtitle="Modern, Student-Centered Education" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🖥️', title: 'Digital-First', desc: 'Every learner has access to technology and online resources.' },
              { icon: '🔬', title: 'Hands-On Learning', desc: 'Labs and practical experiments for deep understanding.' },
              { icon: '🌐', title: 'Global Perspective', desc: 'Curriculum aligned with international standards.' },
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
    </div>
  )
}
