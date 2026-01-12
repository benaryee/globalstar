'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, TrendingUp, Lock, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Trusted UK-registered company',
      description: 'Officially registered and compliant with UK regulations',
    },
    {
      icon: Zap,
      title: 'Bespoke digital finance strategies',
      description: 'Custom solutions tailored to your unique business needs',
    },
    {
      icon: Lock,
      title: 'Scalable & secure platforms',
      description: 'Enterprise-grade security with room to grow',
    },
    {
      icon: Users,
      title: 'Expert consultancy support',
      description: 'Dedicated team of fintech specialists',
    },
    {
      icon: TrendingUp,
      title: 'Data-driven insights',
      description: 'Make informed decisions with powerful analytics',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here when you need us most',
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose Global Star
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Partner with us for excellence in fintech solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-primary-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border border-transparent hover:border-primary-500 dark:hover:border-primary-400">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-600 dark:bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
