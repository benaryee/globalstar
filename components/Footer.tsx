'use client'

import { motion } from 'framer-motion'
import {
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Building2,
  MessageCircle,
  Instagram,
} from 'lucide-react'
import { useWhatsAppLink } from '@/lib/whatsapp'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Features', href: '#features' },
      { label: 'Inside the chat', href: '#showcase' },
      { label: 'Fees', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Why Movara', href: '#why-choose-us' },
      { label: 'Stories', href: '#' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'AML & KYC', href: '#' },
      { label: 'Complaints', href: '#' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = useWhatsAppLink()

  return (
    <footer className="relative mt-10 overflow-hidden border-t border-ink-200/70 dark:border-white/[0.06] bg-ink-50/40 dark:bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-wa-500/50 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-wa-500/10 blur-3xl" />

      <div className="container-wide relative py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-wa-500 to-emerald-600 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]">
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} fill="currentColor" fillOpacity={0.15} />
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                Movara
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm text-ink-600 dark:text-ink-300 leading-relaxed">
              Send money home from the chat app you already use. The real
              exchange rate, fast delivery and no separate app to download.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: MessageCircle, href: whatsappHref, label: 'WhatsApp' },
                { Icon: Mail, href: 'mailto:info@globalstarsolutions.com', label: 'Email' },
                { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.03] text-ink-600 dark:text-ink-300 hover:text-white hover:bg-wa-500 hover:border-wa-500 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {c.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-ink-700 dark:text-ink-200 hover:text-wa-600 dark:hover:text-wa-400 transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Address strip */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 rounded-2xl border border-ink-200/70 dark:border-white/[0.08] bg-white/60 dark:bg-white/[0.02] p-5 backdrop-blur">
          <div className="flex items-start gap-3 text-sm">
            <Building2 className="h-4 w-4 mt-0.5 text-wa-600 dark:text-wa-400" />
            <div>
              <p className="font-medium">Movara is the trading name of Global Star Solutions Ltd</p>
              <p className="text-ink-500 dark:text-ink-400 text-xs mt-0.5">
                Registered agent of Glo Remit Ltd, an Authorised Payment Institution by the FCA, supervised by HMRC for AML
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="h-4 w-4 mt-0.5 text-wa-600 dark:text-wa-400" />
            <div>
              <p className="font-medium">181a North End, Croydon, England, CR0 1TP</p>
              <p className="text-ink-500 dark:text-ink-400 text-xs mt-0.5">
                Sending money from the UK to Ghana
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 dark:text-ink-400">
          <p>© {year} Global Star Solutions Ltd. All rights reserved.</p>
          <p>Made for people who send money home.</p>
        </div>
      </div>
    </footer>
  )
}
