'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Zap,
  Users,
  TrendingDown,
  Lock,
  Globe2,
} from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Quicker than the app you replaced',
    description:
      'There is nothing to download and no PIN to forget. You just chat with us and the money goes.',
  },
  {
    icon: TrendingDown,
    title: 'The exchange rate you actually expect',
    description:
      'We show the same rate you see on Google, and we show the fee before you confirm.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed and compliant',
    description:
      'We work with FCA-authorised payment institutions and audited payout partners in every country we serve.',
  },
  {
    icon: Globe2,
    title: 'Where your family actually banks',
    description:
      '200+ banks, the major mobile wallets and cash pickup across more than 40 countries.',
  },
  {
    icon: Lock,
    title: 'Encrypted end-to-end',
    description:
      'Your conversations and your transfers are both encrypted, so the details stay between you and us.',
  },
  {
    icon: Users,
    title: 'Support from real people',
    description:
      'When you need help, a real person replies on WhatsApp in the language your family speaks.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section relative">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Movara</span>
          <h2 className="heading-2 mt-5 text-gradient-soft">
            The money transfer app you do not have to install.
          </h2>
          <p className="lead mt-4">
            A few reasons families in more than 40 countries are choosing Movara.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink-200/70 dark:border-white/[0.08] bg-ink-200/70 dark:bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="group relative bg-white dark:bg-ink-950 p-7 transition-colors hover:bg-ink-50/60 dark:hover:bg-white/[0.02]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.04] transition-transform group-hover:-translate-y-0.5">
                  <Icon className="h-5 w-5 text-wa-600 dark:text-wa-400" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {r.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
