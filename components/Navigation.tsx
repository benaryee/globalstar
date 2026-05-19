'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X, Moon, Sun, MessageCircle } from 'lucide-react'
import { useTheme } from 'next-themes'

const navLinks = [
  { href: '#how', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Fees' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentTheme = resolvedTheme ?? theme

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:pt-4"
      >
        <div
          className={`relative w-full max-w-6xl transition-all duration-500 ${
            isScrolled
              ? 'rounded-2xl glass-strong shadow-soft'
              : 'rounded-2xl bg-transparent border border-transparent'
          }`}
        >
          <div className="flex h-14 items-center justify-between px-3 sm:px-5">
            {/* Brand */}
            <a href="#home" className="group flex items-center gap-2.5">
              <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-wa-500 to-emerald-600 text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]">
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} fill="currentColor" fillOpacity={0.15} />
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">
                Movara
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-ink-200/70 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-1 backdrop-blur">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-1.5 text-[13px] font-medium text-ink-700 dark:text-ink-200 hover:text-ink-900 dark:hover:text-white transition-colors"
                >
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {mounted && (
                <button
                  onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                  className="hidden sm:grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 dark:border-white/10 text-ink-700 dark:text-ink-200 hover:bg-ink-50 dark:hover:bg-white/[0.06] transition-colors"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currentTheme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {currentTheme === 'dark' ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              )}
              <a href="#contact" className="hidden sm:inline-flex btn px-5 py-2.5 text-white bg-wa-500 hover:bg-wa-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]">
                <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
                Send via WhatsApp
              </a>
              <button
                onClick={() => setIsOpen((v) => !v)}
                className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-ink-200/70 dark:border-white/10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Scroll progress bar */}
          <motion.div
            style={{ scaleX: progress, transformOrigin: '0% 50%' }}
            className="absolute inset-x-3 bottom-0 h-px rounded-full bg-gradient-to-r from-wa-500 via-emerald-500 to-accent-500 opacity-80"
          />

          {/* Mobile menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mx-2 mb-2 overflow-hidden rounded-xl glass-strong"
              >
                <div className="flex flex-col p-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-4 py-2.5 text-sm font-medium text-ink-700 dark:text-ink-200 hover:bg-ink-50 dark:hover:bg-white/[0.05]"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div className="mt-2 flex items-center gap-2 p-1">
                    {mounted && (
                      <button
                        onClick={() =>
                          setTheme(currentTheme === 'dark' ? 'light' : 'dark')
                        }
                        className="grid h-10 w-10 place-items-center rounded-full border border-ink-200/70 dark:border-white/10"
                        aria-label="Toggle theme"
                      >
                        {currentTheme === 'dark' ? (
                          <Sun className="h-4 w-4" />
                        ) : (
                          <Moon className="h-4 w-4" />
                        )}
                      </button>
                    )}
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="btn flex-1 justify-center px-5 py-3 text-white bg-wa-500 hover:bg-wa-600 shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)]"
                    >
                      <MessageCircle className="h-4 w-4" fill="currentColor" fillOpacity={0.2} />
                      Send via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}
