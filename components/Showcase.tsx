'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Send, Inbox, Activity, MessageCircle, CheckCheck } from 'lucide-react'
import { useWhatsAppLink } from '@/lib/whatsapp'

const tabs = [
  {
    id: 'send',
    label: 'Send',
    icon: Send,
    title: 'Send money in a sentence.',
    body: 'Type something like "send £200 to mum" and Movara takes care of the recipient lookup, exchange rate and payout for you.',
    bullets: ['Plain-language amounts', 'Saved recipients', 'Mid-market exchange rate'],
  },
  {
    id: 'receive',
    label: 'Receive',
    icon: Inbox,
    title: 'They get the money the way they want it.',
    body: 'Direct bank deposit, mobile money wallet, or cash pickup at thousands of agent locations across Africa.',
    bullets: ['200+ banks supported', 'MTN MoMo, M-Pesa, Airtel, Orange', 'Cash pickup network'],
  },
  {
    id: 'track',
    label: 'Track',
    icon: Activity,
    title: 'Follow it in the same chat.',
    body: 'You get status updates in WhatsApp as the transfer moves, so you do not need to check email or log in anywhere.',
    bullets: ['Real-time delivery updates', 'Shareable confirmation', 'Refunds in one tap'],
  },
]

export default function Showcase() {
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active)!
  const whatsappHref = useWhatsAppLink()

  return (
    <section id="showcase" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-50" />
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Inside the chat</span>
          <h2 className="heading-2 mt-5 text-gradient-soft">
            The whole transfer happens in one chat.
          </h2>
          <p className="lead mt-4">
            From the moment you type the amount to the moment it lands, everything
            happens in the WhatsApp conversation you already use every day.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap items-center gap-1 rounded-full border border-ink-200/70 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-1 backdrop-blur">
            {tabs.map((t) => {
              const Icon = t.icon
              const isActive = active === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="showcase-pill"
                      className="absolute inset-0 rounded-full bg-wa-500 shadow-soft"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative inline-flex items-center gap-2 ${
                      isActive
                        ? 'text-white'
                        : 'text-ink-700 dark:text-ink-200'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            key={`copy-${current.id}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="heading-3">{current.title}</h3>
            <p className="lead mt-4">{current.body}</p>
            <ul className="mt-6 space-y-2.5">
              {current.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-200"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-wa-500/15 text-wa-600 dark:text-wa-400">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3.5 mt-8 text-white bg-wa-500 hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
              Try it on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            key={`viz-${current.id}`}
            initial={{ opacity: 0, scale: 0.98, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 bg-mesh blur-3xl opacity-70" />
            <div className="rounded-2xl border border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-ink-900/80 backdrop-blur-xl shadow-ring p-5 sm:p-7">
              <ShowcaseViz id={current.id} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ShowcaseViz({ id }: { id: string }) {
  if (id === 'send') {
    return (
      <div>
        <div className="flex items-center justify-between">
          <p className="font-display text-base font-semibold">New transfer</p>
          <span className="rounded-full bg-wa-500/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-wa-600 dark:text-wa-400">Live FX</span>
        </div>
        <div className="mt-5 rounded-xl border border-ink-200/70 dark:border-white/[0.06] p-4">
          <p className="text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">You send</p>
          <div className="mt-1 flex items-baseline justify-between">
            <p className="font-display text-3xl font-semibold tracking-tight">£200.00</p>
            <span className="text-xs text-ink-500 dark:text-ink-400">GBP</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
          <Stat label="Rate" value="1 GBP = 19.00 GHS" />
          <Stat label="Fee" value="Free" tone="text-wa-600 dark:text-wa-400" />
        </div>
        <div className="mt-3 rounded-xl border border-ink-200/70 dark:border-white/[0.06] p-4">
          <p className="text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">Mum receives</p>
          <div className="mt-1 flex items-baseline justify-between">
            <p className="font-display text-2xl font-semibold tracking-tight">GHS 3,800</p>
            <span className="text-xs text-ink-500 dark:text-ink-400">GHS</span>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'receive') {
    const rails = [
      { name: 'GCB Bank · Bank deposit', amt: 'GHS 3,800', s: 'Preferred' },
      { name: 'MTN MoMo · Mobile wallet', amt: 'GHS 3,800', s: 'Available' },
      { name: 'AirtelTigo Money · Wallet', amt: 'GHS 3,800', s: 'Available' },
      { name: 'Agent pickup · Accra', amt: 'Cash · GHS 3,800', s: 'Available' },
    ]
    return (
      <div>
        <div className="flex items-center justify-between">
          <p className="font-display text-base font-semibold">Payout options</p>
          <span className="text-xs text-ink-500 dark:text-ink-400">4 rails</span>
        </div>
        <div className="mt-4 divide-y divide-ink-200/70 dark:divide-white/[0.06]">
          {rails.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa-500/20 to-emerald-500/20 text-xs font-semibold">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-medium">{r.name}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{r.s}</p>
                </div>
              </div>
              <p className="font-mono text-sm">{r.amt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const steps = [
    { label: 'Sent from your bank', t: '00:00', done: true },
    { label: 'Compliance checks', t: '00:04', done: true },
    { label: 'Converted at mid-market FX', t: '00:07', done: true },
    { label: 'Paid to GCB Bank · Mama Akua', t: '00:12', done: true },
  ]
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-ink-500 dark:text-ink-400">Transfer #MV-49217</p>
          <p className="font-display text-2xl font-semibold">Delivered · 12s</p>
        </div>
        <span className="rounded-full bg-wa-500/15 px-2.5 py-1 text-xs font-medium text-wa-600 dark:text-wa-400 inline-flex items-center gap-1">
          <CheckCheck className="h-3 w-3" /> Settled
        </span>
      </div>
      <ol className="mt-6 space-y-3">
        {steps.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-wa-500/15 text-wa-600 dark:text-wa-400">
              <CheckCheck className="h-3.5 w-3.5" />
            </span>
            <div className="flex-1 flex items-center justify-between">
              <p className="text-sm">{s.label}</p>
              <p className="font-mono text-xs text-ink-500 dark:text-ink-400">{s.t}</p>
            </div>
          </motion.li>
        ))}
      </ol>
      <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-ink-200/60 dark:bg-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-wa-400 to-emerald-500"
        />
      </div>
    </div>
  )
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="rounded-xl border border-ink-200/70 dark:border-white/[0.06] p-3">
      <p className="text-[10px] uppercase tracking-wider text-ink-500 dark:text-ink-400">{label}</p>
      <p className={`mt-1 text-sm font-medium ${tone ?? ''}`}>{value}</p>
    </div>
  )
}
