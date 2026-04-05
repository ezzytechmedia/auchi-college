'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-xl text-gray-300">{subtitle}</p>}
    </motion.div>
  )
}
