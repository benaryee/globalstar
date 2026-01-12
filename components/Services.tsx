'use client'

import { motion } from 'framer-motion'
import { CreditCard, Building, BarChart3, Code } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: CreditCard,
      title: 'Digital Payments Integration',
      description: 'Seamless payment solutions integrated with modern platforms for secure, fast transactions.',
    },
    {
      icon: Building,
      title: 'Business Account Setup Consulting',
      description: 'Expert guidance on establishing and optimizing business accounts for maximum efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Financial Data Analytics Dashboards',
      description: 'Real-time insights and analytics to drive informed business decisions.',
    },
    {
      icon: Code,
      title: 'Secure API & Platform Solutions',
      description: 'Robust, scalable API integrations and platform development for your business needs.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive fintech solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-primary-600 to-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
