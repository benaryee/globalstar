'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  AnimatePresence,
  MotionValue,
} from 'framer-motion'
import {
  MessageCircle,
  CheckCheck,
  Send,
  Banknote,
  User,
  Lock,
} from 'lucide-react'

type Step = {
  id: string
  eyebrow: string
  title: string
  body: string
  icon: typeof MessageCircle
  accent: string
  chat:
    | { kind: 'amount'; from: string; to: string; rate: string }
    | { kind: 'recipient'; name: string; bank: string }
    | { kind: 'confirm'; from: string; to: string; fee: string; rate: string }
    | { kind: 'delivered'; to: string; time: string }
}

const steps: Step[] = [
  {
    id: 'amount',
    eyebrow: '01 · Compose',
    title: 'Tell us how much to send.',
    body:
      'Just type something like "send £200 to mum" and Movara works out the GHS amount for you using the mid-market rate.',
    icon: MessageCircle,
    accent: 'from-wa-500/30 to-emerald-500/0',
    chat: { kind: 'amount', from: '£200.00', to: 'GHS 3,800', rate: '1 GBP = 19.00 GHS' },
  },
  {
    id: 'recipient',
    eyebrow: '02 · Recipient',
    title: 'Pick who gets it.',
    body:
      'Choose from your saved recipients in Ghana, or add a new one with just a name and a phone number.',
    icon: User,
    accent: 'from-emerald-400/30 to-wa-500/0',
    chat: { kind: 'recipient', name: 'Mama Akua', bank: 'GCB Bank · Accra' },
  },
  {
    id: 'confirm',
    eyebrow: '03 · Confirm',
    title: 'Check the rate and confirm.',
    body:
      'You see the exact GHS amount and the fee before you confirm. The rate you see is the rate she gets.',
    icon: Lock,
    accent: 'from-accent-500/30 to-wa-500/0',
    chat: { kind: 'confirm', from: '£200.00', to: 'GHS 3,800', fee: 'Free', rate: '1 GBP = 19.00 GHS' },
  },
  {
    id: 'delivered',
    eyebrow: '04 · Delivered',
    title: 'The money arrives in seconds.',
    body:
      'You get a confirmation in the same chat as soon as the money lands. Most transfers arrive in under a minute.',
    icon: CheckCheck,
    accent: 'from-wa-500/40 to-emerald-500/0',
    chat: { kind: 'delivered', to: 'GHS 3,800', time: '12s' },
  },
]

export default function StackedCards() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)))
    if (idx !== active) setActive(idx)
  })

  return (
    <section
      id="flow"
      ref={ref}
      className="relative"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-50" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-radial-fade opacity-70" />

        <div className="container-wide h-full">
          <div className="grid h-full items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 py-16 md:py-20">
            {/* Left: section heading + stacked cards */}
            <div className="flex h-full flex-col justify-center">
              <div className="hidden lg:block">
                <span className="eyebrow">The flow</span>
                <h2 className="heading-2 mt-5 text-gradient-soft">
                  How a transfer works, step by step.
                </h2>
                <p className="lead mt-4 max-w-xl">
                  Scroll through to see what sending money on Movara actually looks
                  like. The chat on the right updates as you go.
                </p>
              </div>

              {/* Stacked cards container */}
              <div className="relative mt-8 lg:mt-10 h-[360px] sm:h-[400px]">
                {steps.map((step, i) => (
                  <StackCard
                    key={step.id}
                    step={step}
                    index={i}
                    total={steps.length}
                    progress={scrollYProgress}
                    reduce={!!reduce}
                  />
                ))}
              </div>

              {/* Progress dots */}
              <div className="mt-6 flex items-center gap-2">
                {steps.map((s, i) => (
                  <span
                    key={s.id}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === active
                        ? 'w-8 bg-wa-500'
                        : i < active
                          ? 'w-4 bg-wa-500/40'
                          : 'w-4 bg-ink-200 dark:bg-white/10'
                    }`}
                  />
                ))}
                <span className="ml-3 font-mono text-[11px] uppercase tracking-wider text-ink-500 dark:text-ink-400">
                  {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Right: phone with reactive chat */}
            <div className="relative flex h-full items-center justify-center">
              <PhoneChat active={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StackCard({
  step,
  index,
  total,
  progress,
  reduce,
}: {
  step: Step
  index: number
  total: number
  progress: MotionValue<number>
  reduce: boolean
}) {
  const start = index / total
  const end = (index + 1) / total

  const y = useTransform(
    progress,
    [Math.max(0, start - 0.08), start, end, Math.min(1, end + 0.08)],
    [60, 0, 0, -80],
  )
  const scale = useTransform(
    progress,
    [Math.max(0, start - 0.08), start, end, Math.min(1, end + 0.08)],
    [0.94, 1, 1, 0.9],
  )
  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.1), start - 0.02, end + 0.02, Math.min(1, end + 0.1)],
    [0, 1, 1, 0],
  )
  const rotate = useTransform(progress, [start, end + 0.05], [0, -2])

  const Icon = step.icon
  return (
    <motion.article
      style={
        reduce
          ? { zIndex: total - index }
          : { y, scale, opacity, rotate, zIndex: total - index }
      }
      className="absolute inset-x-0 top-0 mx-auto max-w-xl"
    >
      <div className="relative overflow-hidden rounded-3xl border border-ink-200/70 dark:border-white/[0.08] bg-white/90 dark:bg-ink-900/85 backdrop-blur-xl p-7 sm:p-8 shadow-ring">
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${step.accent} blur-3xl`}
        />
        <div className="relative flex items-start justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-wa-500 to-emerald-600 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]">
            <Icon className="h-5 w-5" />
          </span>
          <span className="rounded-full border border-ink-200/70 dark:border-white/[0.08] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-ink-500 dark:text-ink-400">
            {step.eyebrow}
          </span>
        </div>
        <h3 className="relative mt-6 font-display text-2xl sm:text-[28px] font-semibold leading-tight tracking-tight">
          {step.title}
        </h3>
        <p className="relative mt-3 text-sm sm:text-base leading-relaxed text-ink-600 dark:text-ink-300">
          {step.body}
        </p>
        <div className="relative mt-6 text-xs text-ink-500 dark:text-ink-400">
          GBP to GHS at the mid-market rate
        </div>
      </div>
    </motion.article>
  )
}

function PhoneChat({ active }: { active: number }) {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 bg-mesh blur-3xl opacity-70" />
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
                <p className="text-[11px] text-emerald-300/80">typing…</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-white/40">Bot</span>
            </div>

            {/* Chat body — bubbles accumulate as active advances */}
            <div className="flex flex-col gap-2.5 px-3 py-4">
              <Bubble side="left">Hi Bernard, who are you sending to today?</Bubble>

              <AnimatePresence initial={false}>
                {active >= 0 && (
                  <BubbleAnim key="b-amount" side="right">
                    Send £200 to mum in Accra
                  </BubbleAnim>
                )}
                {active >= 1 && (
                  <BubbleAnim key="b-amount-card" side="left" variant="card">
                    <div className="space-y-1.5">
                      <Row k="You send" v="£200.00" mono />
                      <Row k="Rate" v="19.00 GHS" mono />
                      <Row k="Mum gets" v="GHS 3,800" mono accent />
                    </div>
                  </BubbleAnim>
                )}
                {active >= 1 && (
                  <BubbleAnim key="b-recip" side="left">
                    Pick a recipient for Accra:
                  </BubbleAnim>
                )}
                {active >= 1 && (
                  <BubbleAnim key="b-recip-card" side="left" variant="card">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-wa-500/30 text-[11px] font-semibold text-white">
                        MA
                      </span>
                      <div className="flex-1">
                        <p className="text-[12px] font-medium text-white">Mama Akua</p>
                        <p className="text-[10.5px] text-white/60">GCB Bank · Accra</p>
                      </div>
                      <CheckCheck className="h-3.5 w-3.5 text-wa-300" />
                    </div>
                  </BubbleAnim>
                )}
                {active >= 2 && (
                  <BubbleAnim key="b-confirm" side="left" variant="card">
                    <div className="space-y-1.5">
                      <Row k="You send" v="£200.00" mono />
                      <Row k="Fee" v="Free · first transfer" accent />
                      <Row k="They get" v="GHS 3,800" mono accent />
                      <button className="mt-1 w-full rounded-lg bg-wa-500 px-3 py-2 text-[11px] font-semibold text-white">
                        Confirm transfer
                      </button>
                    </div>
                  </BubbleAnim>
                )}
                {active >= 2 && (
                  <BubbleAnim key="b-confirmed" side="right">
                    Yes, confirm
                  </BubbleAnim>
                )}
                {active >= 3 && (
                  <BubbleAnim key="b-delivered" side="left" variant="success">
                    <div className="flex items-center gap-2">
                      <CheckCheck className="h-4 w-4 text-wa-300" />
                      <span className="text-[12px]">Done. Mum has GHS 3,800 in her account.</span>
                    </div>
                  </BubbleAnim>
                )}
              </AnimatePresence>
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

        {/* Floating chip */}
        <motion.div
          aria-hidden
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-3 top-20 hidden md:flex items-center gap-2 rounded-full glass-strong px-3 py-1.5 text-xs shadow-soft"
        >
          <Banknote className="h-3.5 w-3.5 text-wa-500" />
          GBP → GHS
        </motion.div>
      </div>
    </div>
  )
}

function Bubble({
  side,
  variant,
  children,
}: {
  side: 'left' | 'right'
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
    <div className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12.5px] leading-relaxed shadow-sm ${base} ${
          isRight ? 'rounded-br-md' : 'rounded-bl-md'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function BubbleAnim({
  side,
  variant,
  children,
}: {
  side: 'left' | 'right'
  variant?: 'card' | 'success'
  children: React.ReactNode
}) {
  const isRight = side === 'right'
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
      className={`flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <Bubble side={side} variant={variant}>
        {children}
      </Bubble>
    </motion.div>
  )
}

function Row({
  k,
  v,
  mono,
  accent,
}: {
  k: string
  v: string
  mono?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex items-center justify-between text-[11px] text-white/70">
      <span>{k}</span>
      <span
        className={`${mono ? 'font-mono' : 'font-medium'} ${
          accent ? 'text-wa-300' : 'text-white'
        }`}
      >
        {v}
      </span>
    </div>
  )
}
