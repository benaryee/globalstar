'use client'

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCheck,
  Send,
  MessageCircle,
} from 'lucide-react'
import { useWhatsAppLink } from '@/lib/whatsapp'

export default function Hero() {
  const reduce = useReducedMotion()
  const whatsappHref = useWhatsAppLink()
  const ref = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -40])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4])

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      ref={ref}
      id="home"
      className="relative isolate overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60 dark:opacity-40" />
      <div className="absolute inset-0 -z-10 bg-mesh opacity-90 dark:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] bg-radial-fade" />

      {/* Parallax aurora blobs */}
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: blob1Y }}
        className="pointer-events-none absolute -top-32 -left-20 h-[420px] w-[420px] rounded-full bg-wa-500/30 blur-[120px] -z-10"
      />
      <motion.div
        aria-hidden
        style={reduce ? undefined : { y: blob2Y }}
        className="pointer-events-none absolute -bottom-32 -right-20 h-[460px] w-[460px] rounded-full bg-accent-500/25 blur-[120px] -z-10"
      />

      <motion.div
        style={reduce ? undefined : { opacity: heroOpacity }}
        className="container-wide relative"
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div {...fade(0)} className="flex justify-center">
            <span className="eyebrow">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wa-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-wa-500" />
              </span>
              Now live: UK → Ghana
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.05)}
            className="heading-1 mt-6 text-gradient-soft"
          >
            Send money home.
            <br className="hidden sm:block" />{' '}
            <span className="text-gradient bg-[length:200%_200%] animate-gradient">
              On WhatsApp.
            </span>
          </motion.h1>

          <motion.p {...fade(0.15)} className="lead mx-auto mt-6 max-w-2xl">
            Send money to family and friends straight from WhatsApp. You get the
            real exchange rate, the transfer is usually there in seconds, and
            there is no separate app to download.
          </motion.p>

          <motion.div
            {...fade(0.25)}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3.5 text-white bg-wa-500 hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_12px_40px_-10px_rgba(37,211,102,0.6)]"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
              Start on WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#how" className="btn-ghost group">
              See how it works
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.p
            {...fade(0.35)}
            className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-ink-500 dark:text-ink-400"
          >
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-wa-500" /> Secure and encrypted</span>
            <span className="opacity-40">·</span>
            <span>No app to download</span>
            <span className="opacity-40">·</span>
            <span>First transfer is free</span>
          </motion.p>
        </div>

        {/* Phone + chat preview */}
        <motion.div
          style={reduce ? undefined : { y: phoneY }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-x-12 -inset-y-8 -z-10 bg-mesh blur-3xl opacity-70" />

          <div className="grid items-center gap-8 lg:grid-cols-[1fr_320px_1fr]">
            {/* Left floating card */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden lg:block justify-self-end glass-strong rounded-2xl p-5 w-[280px] shadow-ring"
            >
              <p className="text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">You send</p>
              <p className="mt-1 font-display text-3xl font-semibold tracking-tight">£200.00</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-ink-500 dark:text-ink-400">Rate</span>
                <span className="font-mono">1 GBP = 19.00 GHS</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-ink-500 dark:text-ink-400">Fee</span>
                <span className="font-medium text-wa-600 dark:text-wa-400">Free on your first transfer</span>
              </div>
              <div className="mt-4 border-t border-ink-200/70 dark:border-white/[0.08] pt-3 flex items-center justify-between">
                <span className="text-xs text-ink-500 dark:text-ink-400">They get</span>
                <span className="font-display text-lg font-semibold">GHS 3,800</span>
              </div>
            </motion.div>

            {/* Phone */}
            <PhoneChat />

            {/* Right floating card */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden lg:block justify-self-start glass-strong rounded-2xl p-5 w-[280px] shadow-ring"
            >
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-wa-500/15 text-wa-600 dark:text-wa-400">
                  <CheckCheck className="h-4 w-4" />
                </span>
                <p className="text-sm font-medium">Delivered in 12s</p>
              </div>
              <div className="mt-4 space-y-2 text-xs">
                <Row label="Sent" value="£200.00" />
                <Row label="Received" value="GHS 3,800" />
                <Row label="To" value="Mama Akua · GCB Bank" />
                <Row label="Status" value="Settled" tone="text-wa-600 dark:text-wa-400" />
              </div>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-ink-200/60 dark:bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.6, delay: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-wa-400 to-emerald-500"
                />
              </div>
            </motion.div>
          </div>

          {/* Floating chips */}
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-2 top-10 hidden md:flex lg:hidden items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs shadow-soft"
          >
            <span className="h-2 w-2 rounded-full bg-wa-500" />
            Authorised payment partners
          </motion.div>
          <motion.div
            aria-hidden
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 bottom-10 hidden md:flex lg:hidden items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs shadow-soft"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-wa-500" />
            End-to-end encrypted
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function Row({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-ink-500 dark:text-ink-400">{label}</span>
      <span className={`font-medium ${tone ?? ''}`}>{value}</span>
    </div>
  )
}

function PhoneChat() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[320px]">
      <div className="relative rounded-[42px] border border-ink-200/70 dark:border-white/[0.1] bg-ink-950 p-2 shadow-ring">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/95" />
        <div className="relative h-[600px] overflow-hidden rounded-[34px] bg-[#0b141a]">
          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#1f2c33] px-4 py-3 pt-7">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-wa-500 to-emerald-600 text-white">
              <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-medium text-white">Movara</p>
              <p className="text-[11px] text-emerald-300/80">online</p>
            </div>
            <span className="text-[10px] uppercase tracking-wider text-white/40">Bot</span>
          </div>

          {/* Chat body */}
          <div className="space-y-2.5 px-3 py-4">
            <Bubble side="left" delay={0.4}>
              Hi Bernard, who are you sending money to today?
            </Bubble>
            <Bubble side="right" delay={0.9}>
              Send £200 to mum in Accra
            </Bubble>
            <Bubble side="left" delay={1.4} variant="card">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>You send</span>
                  <span className="font-mono text-white">£200.00</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>Rate</span>
                  <span className="font-mono text-white">19.00</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>Fee</span>
                  <span className="font-medium text-wa-300">Free</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-[11px] text-white/70">Mum gets</span>
                  <span className="font-display text-sm font-semibold text-white">GHS 3,800</span>
                </div>
                <button className="mt-2 w-full rounded-lg bg-wa-500 px-3 py-2 text-xs font-semibold text-white">
                  Confirm transfer
                </button>
              </div>
            </Bubble>
            <Bubble side="right" delay={2.1}>
              Yes, confirm
            </Bubble>
            <Bubble side="left" delay={2.6} variant="success">
              <div className="flex items-center gap-2">
                <CheckCheck className="h-4 w-4 text-wa-300" />
                <span className="text-[12px]">Done. Mum has GHS 3,800 in her account.</span>
              </div>
            </Bubble>
          </div>

          {/* Input bar */}
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-white/5 bg-[#1f2c33] px-3 py-3">
            <div className="flex-1 rounded-full bg-[#2a3942] px-4 py-2 text-[12px] text-white/40">
              Message
            </div>
            <button className="grid h-9 w-9 place-items-center rounded-full bg-wa-500 text-white">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bubble({
  side,
  delay,
  variant,
  children,
}: {
  side: 'left' | 'right'
  delay: number
  variant?: 'card' | 'success'
  children: React.ReactNode
}) {
  const isRight = side === 'right'
  const base =
    variant === 'card'
      ? 'bg-[#1f2c33] border border-white/[0.06] text-white'
      : variant === 'success'
        ? 'bg-emerald-600/25 border border-emerald-400/30 text-white'
        : isRight
          ? 'bg-[#005c4b] text-white'
          : 'bg-[#1f2c33] text-white'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-[12.5px] leading-relaxed shadow-sm ${base} ${
          isRight ? 'rounded-br-md' : 'rounded-bl-md'
        }`}
      >
        {children}
      </div>
    </motion.div>
  )
}
