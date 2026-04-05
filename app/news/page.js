'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function NewsPage() {
  const news = [
    {
      date: 'April 6, 2026',
      title: 'Official Commissioning: Auchi College Reborn',
      category: 'Major Event',
      excerpt: 'His Excellency Monday Okpebholo officially inaugurates the transformed Auchi College.',
      content: 'In a historic ceremony witnessed by government officials, educators, and alumni, Governor Monday Okpebholo officially commissioned the newly renovated Auchi College...',
    },
    {
      date: 'April 1, 2026',
      title: 'ICT Centre Opens for Student Training',
      category: 'Facilities',
      excerpt: 'State-of-the-art technology hub with 320 computers now operational.',
      content: 'The ICT Centre, equipped with 320 modern computers, high-speed internet, and a digital library, opened its doors this week...',
    },
    {
      date: 'March 25, 2026',
      title: 'Alumni Mobilization: From Vision to Reality',
      category: 'Alumni',
      excerpt: 'The Association of Great Achievers Class of 1991 shares their journey of restoration.',
      content: 'In an exclusive interview, leaders of the Class of 1991 discuss how alumni coordination led to multi-billion Naira investment...',
    },
    {
      date: 'March 15, 2026',
      title: 'Science Labs Ready for Academic Excellence',
      category: 'Academics',
      excerpt: 'Physics, Chemistry, and Biology labs equipped with modern apparatus.',
      content: 'Auchi College is now equipped with fully functional science laboratories meeting international standards...',
    },
    {
      date: 'March 1, 2026',
      title: 'Sports Complex Unveiled',
      category: 'Sports',
      excerpt: 'Synthetic football field and athletic facilities now available.',
      content: 'The new sports complex features a synthetic football field, basketball court, and track facilities...',
    },
    {
      date: 'February 20, 2026',
      title: 'Sustainability Systems Operational',
      category: 'Infrastructure',
      excerpt: '20KVA solar power system and 10,000L borehole ensure 24/7 operations.',
      content: 'The renewable energy infrastructure is now powering campus operations sustainably...',
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
            <span className="gradient-text">News & Updates</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stay informed about the latest developments at ACA Schools.
          </p>
        </div>
      </section>

      {/* NEWS FEED */}
      <section className="py-20">
        <div className="container-custom max-w-3xl">
          <div className="space-y-8">
            {news.map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="card group cursor-pointer hover:border-gold"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block px-3 py-1 bg-gold/20 text-gold rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {article.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4">{article.excerpt}</p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all">
                  Read Full Story <ArrowRight size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE SECTION */}
      <section className="py-20 bg-gradient-to-r from-gold/10 to-gold/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest news and announcements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-darkBg border border-gray-700 focus:border-gold outline-none text-white"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
