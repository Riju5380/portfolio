import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { githubUrl, nav, site, socials } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { GithubIcon } from './Icons'

const ids = nav.map((n) => n.id)

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const reduce = useReducedMotion()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: lock scroll, close on Esc, keep focus inside, restore focus on close.
  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key !== 'Tab' || !panelRef.current) return
      const focusables = [toggle, ...panelRef.current.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[]
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      toggle?.focus()
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled || open ? 'border-b border-line bg-bg/70 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between md:h-[4.5rem]">
        <a href="#top" className="font-display text-xl font-bold tracking-tight" aria-label={`${site.name} — back to top`}>
          SS<span className="text-violet">.</span>
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block px-4 py-2 text-sm transition-colors duration-300 ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-violet to-cyan"
                        transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <span aria-hidden="true" className="mx-2 hidden h-5 w-px bg-line-strong md:block" />

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
            className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-white/5 hover:text-ink"
          >
            <GithubIcon className="size-[18px]" />
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="grid size-10 place-items-center rounded-full text-ink hover:bg-white/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>

    {/* Rendered outside <header>: its backdrop-filter would otherwise become the containing block for this fixed panel */}
    <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-8 md:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <li key={item.id} className="border-b border-line">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 font-display text-4xl font-medium tracking-tight"
                  >
                    {item.label}
                    <span className="label">0{i + 1}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-10 grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    {...(s.key === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    className="label block rounded-full border border-line px-4 py-3 text-center hover:text-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
    </AnimatePresence>
    </>
  )
}
