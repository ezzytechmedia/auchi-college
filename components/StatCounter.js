'use client'

import { useEffect, useState } from 'react'

export default function StatCounter({ end, duration = 2000 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.floor(end * progress))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  return <span className="text-4xl font-bold text-gold">{value.toLocaleString()}</span>
}
