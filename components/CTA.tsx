'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { useWhatsAppLink } from '@/lib/whatsapp'

export default function CTA() {
  const whatsappHref = useWhatsAppLink()
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-wa-900 to-ink-900 px-6 py-16 sm:px-12 md:px-16 md:py-20 shadow-ring"
        >
          {/* Mesh + grid background */}
          <div className="pointer-events-none absolute inset-0 bg-mesh opacity-60" />
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.08]" />

          {/* Floating glow */}
          <motion.div
            aria-hidden
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-wa-500/40 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center text-white">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
              Your first transfer is{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-wa-200 via-white to-emerald-200">
                on us
              </span>
              .
            </h2>
            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">
              Open WhatsApp, send us a message and try Movara. You will not pay
              a fee on your first transfer, and you always get the real rate.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-6 py-3.5 bg-wa-500 text-white hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)]"
              >
                <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
                Start on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
