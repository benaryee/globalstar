'use client'

import { motion } from 'framer-motion'

const corridors = [
  '🇬🇧 UK → 🇳🇬 NGN',
  '🇺🇸 USA → 🇰🇪 KES',
  '🇨🇦 Canada → 🇬🇭 GHS',
  '🇪🇺 EU → 🇿🇦 ZAR',
  '🇦🇺 Australia → 🇺🇬 UGX',
  '🇩🇪 Germany → 🇨🇲 XAF',
  '🇫🇷 France → 🇸🇳 XOF',
  '🇮🇪 Ireland → 🇿🇼 ZWL',
  '🇨🇭 Switzerland → 🇪🇹 ETB',
  '🇸🇪 Sweden → 🇹🇿 TZS',
]

export default function TrustedBy() {
  return (
    <section className="relative py-14 border-y border-ink-200/70 dark:border-white/[0.06] bg-ink-50/40 dark:bg-white/[0.015]">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-500 dark:text-ink-400"
        >
          Sending money to more than 40 countries, with more added each month
        </motion.p>

        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white dark:from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white dark:from-ink-950 to-transparent" />

          <div className="flex w-max animate-marquee gap-10 sm:gap-14">
            {[...corridors, ...corridors].map((label, i) => (
              <div
                key={`${label}-${i}`}
                className="flex items-center gap-2 rounded-full border border-ink-200/70 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink-700 dark:text-ink-200 whitespace-nowrap"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
