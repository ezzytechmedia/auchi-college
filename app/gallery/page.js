'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/SectionHeader'
import { useState } from 'react'

export default function GalleryPage() {
  const [filter, setFilter] = useState('all')

  // Gallery items linked to your image assets
  const galleryItems = [
    { category: 'before-after', title: 'Campus Transformation', image: '/images/after renovation.jpg' },
    { category: 'before-after', title: 'From Ruins to Modern', image: '/images/Before (abandoned, broken).jpg' },
    { category: 'facilities', title: 'ICT Center', image: '/images/Computers (ICT Center).jpg' },
    { category: 'facilities', title: 'Event Centre', image: '/images/Capacity Event Centre.jpg' },
    { category: 'sports', title: 'Football Pitch', image: '/images/football pitch.jpg' },
    { category: 'facilities', title: 'Security System', image: '/images/CCTV Surveillance.jpg' },
    { category: 'infrastructure', title: 'Solar Lights', image: '/images/Solar Street Lights.jpg' },
    { category: 'infrastructure', title: 'New Admin Block', image: '/images/new admin block.jpg' },
  ]

  const categories = ['all', 'before-after', 'facilities', 'sports', 'infrastructure']

  const filtered = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

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
            <span className="gradient-text">Gallery</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Visual testimony of our resurrection. From abandonment to excellence.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-12 bg-accentDark sticky top-20 z-40">
        <div className="container-custom flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === cat
                  ? 'bg-gold text-darkBg'
                  : 'bg-gray-700 text-white hover:bg-gray-600'
              }`}
            >
              {cat === 'all' ? 'All' : cat.split('-').join(' ').toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
              >
                <div
                  className="w-full h-full bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>
                  <div className="relative z-10 text-center text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-20 bg-accentDark">
        <div className="container-custom">
          <SectionHeader title="Cinematic Journey" subtitle="Drone footage & multimedia content" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Campus Overview I', file: 'auchi drone.mp4' },
              { title: 'Campus Overview II', file: 'auchi drone 2.mp4' },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card p-0 overflow-hidden"
              >
                <div className="h-64 bg-gray-800 flex items-center justify-center relative">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/images/after renovation 3.jpg"
                  >
                    <source src={`/videos/${video.file}`} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{video.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">Drone footage of the transformed campus</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
