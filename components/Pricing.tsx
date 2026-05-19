'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const corridors = [
  {
    name: 'Casual',
    tagline: 'For the occasional transfer.',
    fee: { gbp: '0.99%', usd: '0.99%' },
    cta: 'Send now',
    highlight: false,
    features: [
      'Up to £500 per transfer',
      'Mid-market exchange rate',
      'Bank, wallet or cash payout',
      'Support over WhatsApp',
    ],
  },
  {
    name: 'Family',
    tagline: 'For people sending money home each month.',
    fee: { gbp: '0.5%', usd: '0.5%' },
    cta: 'Set up monthly',
    highlight: true,
    features: [
      'Up to £5,000 per transfer',
      'Mid-market rate, locked in',
      'Recurring schedules',
      'Several saved recipients',
      'Priority support over WhatsApp',
    ],
  },
  {
    name: 'Diaspora',
    tagline: 'For larger senders and community pools.',
    fee: { gbp: 'Custom', usd: 'Custom' },
    cta: 'Talk to us',
    highlight: false,
    features: [
      'Higher transfer limits',
      'Negotiated exchange margin',
      'A named account manager',
      'Bulk recipient uploads',
      'Reporting for compliance',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section id="pricing" className="section relative">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Fees</span>
          <h2 className="heading-2 mt-5 text-gradient-soft">
            Simple, honest fees.
          </h2>
          <p className="lead mt-4">
            We charge a small flat fee and use the same exchange rate you see
            on Google. Nothing hidden.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-ink-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-1 backdrop-blur">
            {(['GBP', 'USD'] as const).map((label) => {
              const isUSD = label === 'USD'
              const active = yearly === isUSD
              return (
                <button
                  key={label}
                  onClick={() => setYearly(isUSD)}
                  className="relative rounded-full px-4 py-1.5 text-sm font-medium"
                >
                  {active && (
                    <motion.span
                      layoutId="pricing-pill"
                      className="absolute inset-0 rounded-full bg-wa-500 shadow-soft"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className={`relative ${active ? 'text-white' : 'text-ink-700 dark:text-ink-200'}`}>
                    Send from {label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {corridors.map((p, i) => {
            const fee = yearly ? p.fee.usd : p.fee.gbp
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  p.highlight
                    ? 'border-transparent bg-gradient-to-b from-wa-600 to-emerald-700 text-white shadow-[0_30px_80px_-20px_rgba(37,211,102,0.55)] lg:scale-[1.02]'
                    : 'border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.02]'
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-wa-700 shadow-soft">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className={`mt-1.5 text-sm ${p.highlight ? 'text-white/80' : 'text-ink-600 dark:text-ink-300'}`}>
                    {p.tagline}
                  </p>
                </div>

                <div className="mt-6">
                  {fee === 'Custom' ? (
                    <p className="font-display text-4xl font-semibold tracking-tight">Custom</p>
                  ) : (
                    <p className="flex items-baseline gap-1.5">
                      <span className="font-display text-5xl font-semibold tracking-tight">
                        {fee}
                      </span>
                      <span className={`text-sm ${p.highlight ? 'text-white/70' : 'text-ink-500 dark:text-ink-400'}`}>
                        fee / transfer
                      </span>
                    </p>
                  )}
                  <p className={`mt-1 text-xs ${p.highlight ? 'text-white/70' : 'text-ink-500 dark:text-ink-400'}`}>
                    At the mid-market rate
                  </p>
                </div>

                <a
                  href="#contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    p.highlight
                      ? 'bg-white text-wa-700 hover:scale-[1.02]'
                      : 'bg-ink-900 text-white dark:bg-white dark:text-ink-900 hover:scale-[1.02]'
                  }`}
                >
                  {p.cta}
                </a>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 grid h-4 w-4 place-items-center rounded-full ${
                          p.highlight ? 'bg-white/20 text-white' : 'bg-wa-500/15 text-wa-600 dark:text-wa-400'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className={p.highlight ? 'text-white/90' : 'text-ink-700 dark:text-ink-200'}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
