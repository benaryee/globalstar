'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'I sent my mum money from London while I was waiting for a bus. It was there in under a minute and she thought I was joking.',
    name: 'Tola Adebayo',
    role: 'Nurse, London to Accra',
  },
  {
    quote:
      'The rate is the same one Google shows me, and the fee is right there before I confirm. That is why I switched from my old app.',
    name: 'Kwame Mensah',
    role: 'Engineer, Toronto to Accra',
  },
  {
    quote:
      'My dad does not use smartphones, but he can pick up cash at the kiosk on his street. It works for the whole family.',
    name: 'Amani Otieno',
    role: 'Designer, Berlin to Nairobi',
  },
  {
    quote:
      'I set up my sister\u2019s rent once in a chat and it has been going through every month since. I do not have to think about it.',
    name: 'Chioma Eze',
    role: 'Product manager, Dublin to Accra',
  },
]

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-radial-fade opacity-60" />
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Families</span>
          <h2 className="heading-2 mt-5 text-gradient-soft">
            What people are saying.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="card p-7 md:p-8"
            >
              <Quote className="h-6 w-6 text-wa-400/70" />
              <blockquote className="mt-4 font-display text-lg sm:text-xl leading-snug tracking-tight text-ink-800 dark:text-ink-100">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-wa-500 to-emerald-600 text-sm font-semibold text-white">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-400">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
