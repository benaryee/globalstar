'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { useWhatsAppLink, WHATSAPP_DISPLAY } from '@/lib/whatsapp'

export default function Contact() {
  const whatsappHref = useWhatsAppLink()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    corridor: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 700))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', corridor: '', message: '' })
    }, 3500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-30 mask-fade-radial" />
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Copy + meta */}
          <div className="lg:col-span-5">
            <span className="eyebrow">Talk to us</span>
            <h2 className="heading-2 mt-5 text-gradient-soft">
              Send us a message.
            </h2>
            <p className="lead mt-5">
              The quickest way to reach us is the same way you will send money,
              on WhatsApp.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex btn px-6 py-3.5 text-white bg-wa-500 hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
              Message Movara on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>

            <ul className="mt-10 space-y-5">
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                value={WHATSAPP_DISPLAY}
                href={whatsappHref}
              />
              <ContactItem
                icon={Mail}
                label="Email"
                value="info@globalstarsolutions.com"
                href="mailto:info@globalstarsolutions.com"
              />
              <ContactItem
                icon={MapPin}
                label="HQ"
                value="181a North End, Croydon, England, CR0 1TP"
              />
            </ul>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-mesh blur-3xl opacity-60" />
              <div className="card p-6 sm:p-8 shadow-soft">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="grid place-items-center py-16 text-center"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-wa-500/15 text-wa-600 dark:text-wa-400">
                      <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                      Message received
                    </h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-ink-300 max-w-sm">
                      Thanks for reaching out. We will get back to you on
                      WhatsApp shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Bernard A."
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="bernard@email.com"
                      />
                    </div>
                    <Field
                      label="Corridor (optional)"
                      name="corridor"
                      type="text"
                      value={formData.corridor}
                      onChange={handleChange}
                      placeholder="e.g. UK → Ghana"
                    />
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={'Tell us what you are trying to send, or what we could do better.'}
                        className="mt-2 w-full resize-none rounded-xl border border-ink-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] px-4 py-3 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 focus:border-wa-500 focus:ring-2 focus:ring-wa-500/30 outline-none transition"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                      <p className="text-xs text-ink-500 dark:text-ink-400">
                        By submitting, you agree to our terms and privacy policy.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn px-6 py-3.5 text-white bg-wa-500 hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)]"
                      >
                        {isSubmitting ? 'Sending…' : 'Send message'}
                        <Send className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400"
      >
        {label}
      </label>
      <input
        id={props.name}
        {...props}
        className="mt-2 w-full rounded-xl border border-ink-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.02] px-4 py-3 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 focus:border-wa-500 focus:ring-2 focus:ring-wa-500/30 outline-none transition"
      />
    </div>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
}) {
  const Content = (
    <>
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-ink-200/70 dark:border-white/[0.08] bg-white/80 dark:bg-white/[0.04]">
        <Icon className="h-4 w-4 text-wa-600 dark:text-wa-400" />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-ink-800 dark:text-ink-100">
          {value}
        </p>
      </div>
    </>
  )
  return (
    <li>
      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-4 group hover:text-wa-600 dark:hover:text-wa-400 transition-colors"
        >
          {Content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{Content}</div>
      )}
    </li>
  )
}
