'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need to download an app?',
    a: 'No. Movara works entirely inside WhatsApp. You tap our link or scan a QR code and you are chatting with us in a few seconds. There is no install and no separate account to set up.',
  },
  {
    q: 'How does Movara make money if the rate is mid-market?',
    a: 'We charge a small fee on each transfer, and we show it to you before you confirm. We do not add a markup on the exchange rate, so the amount you see is the amount your family gets.',
  },
  {
    q: 'How quickly does the money arrive?',
    a: 'Most transfers go through in under a minute. Bank deposits and mobile wallets are usually instant, and cash pickup is normally ready within a few minutes of confirmation.',
  },
  {
    q: 'Is Movara safe and licensed?',
    a: 'Yes. We work with FCA-authorised payment institutions and licensed payout partners in every country we serve, and every transfer is encrypted end-to-end.',
  },
  {
    q: 'Which countries can I send to?',
    a: 'We currently send to more than 40 countries across Africa, with growing coverage in South Asia and Latin America. You can send to bank accounts, mobile wallets such as MTN MoMo, M-Pesa, Airtel and Orange, or cash pickup.',
  },
  {
    q: 'What happens if a transfer fails?',
    a: 'You get a full refund back to your funding source, usually within a few minutes. We tell you in the same WhatsApp chat and you can retry with one tap.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section relative">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="heading-2 mt-5 text-gradient-soft">
            Questions people ask us.
          </h2>
          <p className="lead mt-4">
            A few things worth knowing before your first transfer. If something
            is not covered here,{' '}
            <a href="#contact" className="text-wa-600 dark:text-wa-400 hover:text-wa-500 font-medium">
              message us
            </a>
            .
          </p>
        </div>

        <div className="mt-12 divide-y divide-ink-200/70 dark:divide-white/[0.06] rounded-2xl border border-ink-200/70 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] backdrop-blur">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold tracking-tight">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.04] text-ink-600 dark:text-ink-200"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
