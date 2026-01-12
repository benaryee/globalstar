'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award } from 'lucide-react'

export default function About() {
  const cards = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be a leading provider of innovative fintech solutions that transform how businesses operate.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Deliver cutting-edge financial technology and strategic consulting to empower businesses of all sizes.',
    },
    {
      icon: Award,
      title: 'Values',
      description: 'Innovation, integrity, excellence, and client-focused solutions drive everything we do.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Global Star
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Global Star Solutions Ltd is an emerging UK-registered company specializing in financial 
              technology-driven business support and consultancy. Founded in 2023, we combine strategic 
              insight with cutting-edge digital solutions to support businesses of all sizes.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="bg-primary-600 dark:bg-primary-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {card.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
