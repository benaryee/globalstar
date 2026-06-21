'use client'

import { motion } from 'framer-motion'
import {
  Zap,
  Landmark,
  Smartphone,
  Repeat,
  ShieldCheck,
} from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Fast delivery',
    description:
      'Most transfers settle in under thirty seconds. If something goes wrong, we sort it out so your money does not get stuck.',
    tag: 'Speed',
    span: 'lg:col-span-2',
  },
  {
    icon: Landmark,
    title: 'Bank deposits',
    description:
      'Send straight into 200+ banks across Africa and beyond. We handle the account details for you.',
    tag: 'Bank',
    span: '',
  },
  {
    icon: Smartphone,
    title: 'Mobile wallets',
    description:
      'We support MTN MoMo, AirtelTigo Money, M-Pesa, Orange Money and most of the wallets your family uses.',
    tag: 'Wallet',
    span: '',
  },
  {
    icon: Repeat,
    title: 'Recurring transfers',
    description:
      'Set up rent, school fees or monthly support once and we send the money on the same day each month.',
    tag: 'Recurring',
    span: '',
  },
  {
    icon: ShieldCheck,
    title: 'Strong security',
    description:
      'PIN, device and biometric checks on every transfer. Everything you send is encrypted end-to-end.',
    tag: 'Security',
    span: '',
  },
]

export default function Services() {
  return (
    <section id="features" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-40 mask-fade-radial" />
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            What you can do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="heading-2 mt-5 text-gradient-soft"
          >
            What you can do with Movara.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="lead mt-4"
          >
            A simple chat that covers the ways your family actually receives
            money back home.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`card card-hover group relative overflow-hidden p-6 ${s.span}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-wa-500/20 to-emerald-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-wa-600 dark:text-wa-400" />
                  </span>
                  <span className="rounded-full border border-ink-200/70 dark:border-white/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    {s.tag}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {s.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
