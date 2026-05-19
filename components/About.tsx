'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Send, CheckCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Open a WhatsApp chat',
    description:
      'Tap the Movara link or scan a QR code. You will be talking to us in your normal WhatsApp inbox.',
  },
  {
    icon: Send,
    title: 'Tell us who and how much',
    description:
      'Type the amount and pick the recipient. We show you the rate and the fee before anything happens.',
  },
  {
    icon: CheckCheck,
    title: 'They get the money quickly',
    description:
      'Funds go to their bank account, mobile wallet or a cash pickup location, usually within a minute.',
  },
]

export default function About() {
  return (
    <section id="how" className="section relative">
      <div className="container-wide">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <span className="eyebrow">How it works</span>
            <h2 className="heading-2 mt-5 text-gradient-soft">
              How it works.
            </h2>
            <p className="lead mt-5">
              Movara lives inside WhatsApp, so there is nothing new to learn.
              You open a chat, tell us who to pay, and the money goes through.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: '40+', v: 'Countries we send to' },
                { k: '< 30s', v: 'Average delivery time' },
                { k: '£0', v: 'Fee on your first transfer' },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl border border-ink-200/70 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] p-4"
                >
                  <dt className="font-display text-xl font-semibold tracking-tight">{s.k}</dt>
                  <dd className="mt-1 text-xs text-ink-500 dark:text-ink-400">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="md:col-span-7 grid gap-5">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="card card-hover flex items-start gap-5 p-6"
                >
                  <div className="relative flex-shrink-0">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-wa-500 to-emerald-600 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="absolute -top-2 -right-2 grid h-5 w-5 place-items-center rounded-full bg-white dark:bg-ink-900 border border-ink-200/70 dark:border-white/[0.08] text-[10px] font-semibold">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
