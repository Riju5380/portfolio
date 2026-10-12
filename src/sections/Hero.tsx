import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { PointerEvent } from 'react'
import { Button } from '../components/Button'
import { PhoneFrame } from '../components/PhoneFrame'
import { MaskedLines } from '../components/Reveal'
import { StatusDot } from '../components/StatusDot'
import { stockLearnScreens } from '../config/projects'
import { site } from '../config/site'
import { useFinePointer } from '../hooks/useMediaQuery'

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const parallax = fine && !reduce

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 80, damping: 20 })
  const sy = useSpring(py, { stiffness: 80, damping: 20 })
  const rotY = useTransform(sx, [-1, 1], [-8, 8])
  const rotX = useTransform(sy, [-1, 1], [6, -6])
  const chipX = useTransform(sx, [-1, 1], [-18, 18])
  const chipY = useTransform(sy, [-1, 1], [-12, 12])
  const ringX = useTransform(sx, [-1, 1], [10, -10])
  const ringY = useTransform(sy, [-1, 1], [8, -8])

  function onMove(e: PointerEvent<HTMLElement>) {
    if (!parallax) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width) * 2 - 1)
    py.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }
  function onLeave() {
    px.set(0)
    py.set(0)
  }

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay, ease } }

  return (
    <section
      id="top"
      aria-label="Introduction"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative flex min-h-[100svh] flex-col pt-24 md:pt-28"
    >
      <div className="container-x grid flex-1 items-center gap-14 pb-24 lg:grid-cols-12 lg:gap-8 lg:pb-16">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.p
            {...fadeUp(0.1)}
            className="label inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.02] py-2 pl-3 pr-4 text-ink/80"
          >
            <StatusDot />
            {site.status}
          </motion.p>

          <MaskedLines
            as="h1"
            animateOnMount
            delay={0.2}
            lines={site.hero.lines}
            accent={[1]}
            className="mt-8 font-display text-[clamp(2.9rem,6.7vw,7rem)] font-semibold leading-[0.92] tracking-[-0.045em]"
          />

          <motion.p {...fadeUp(0.65)} className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.hero.intro}
          </motion.p>

          <motion.div {...fadeUp(0.8)} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#work" icon={<ArrowDownRight className="size-4" />}>
              Explore My Work
            </Button>
            <Button href="#contact" variant="ghost" icon={<ArrowUpRight className="size-4" />}>
              Let’s Connect
            </Button>
          </motion.div>

          <motion.dl {...fadeUp(0.95)} className="mt-14 hidden max-w-xl grid-cols-2 gap-6 border-t border-line pt-6 sm:grid">
            <div>
              <dt className="label">Role</dt>
              <dd className="mt-2 text-sm text-ink/90">
                {site.role} @ {site.company}
              </dd>
            </div>
            <div>
              <dt className="label">Focus</dt>
              <dd className="mt-2 text-sm text-ink/90">Flutter · Cross-platform</dd>
            </div>
          </motion.dl>
        </div>

        {/* Visual centerpiece */}
        <motion.div
          className="relative mx-auto w-full max-w-[22rem] lg:col-span-5 lg:max-w-none"
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.35, ease }}
          style={{ perspective: 1200 }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[30rem]">
            {/* orbital rings */}
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full overflow-visible"
              style={parallax ? { x: ringX, y: ringY } : undefined}
            >
              <defs>
                <linearGradient id="orbit" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#22D3EE" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <g className="orbit-spin" style={{ transformOrigin: '200px 250px' }}>
                <ellipse cx="200" cy="250" rx="190" ry="190" fill="none" stroke="url(#orbit)" strokeOpacity="0.35" strokeDasharray="2 7" />
                <circle cx="390" cy="250" r="3.5" fill="#22D3EE" />
              </g>
              <g className="orbit-spin-rev" style={{ transformOrigin: '200px 250px' }}>
                <ellipse cx="200" cy="250" rx="150" ry="230" fill="none" stroke="rgba(255,255,255,0.09)" />
                <circle cx="200" cy="20" r="3" fill="#8B5CF6" />
              </g>
              {/* crosshairs */}
              <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
                <path d="M14 30h14M21 23v14" />
                <path d="M372 470h14M379 463v14" />
              </g>
            </motion.svg>

            {/* glow behind phone */}
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/30 blur-[80px]" />

            {/* phone */}
            <motion.div
              className="absolute left-1/2 top-1/2 w-[58%] -translate-x-1/2 -translate-y-1/2"
              style={parallax ? { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' } : undefined}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PhoneFrame shot={stockLearnScreens.dashboard} eager />
              </motion.div>
            </motion.div>

            {/* technical callouts */}
            <motion.div
              aria-hidden="true"
              className="absolute -left-2 top-[16%] hidden sm:block"
              style={parallax ? { x: chipX, y: chipY } : undefined}
            >
              <div className="rounded-lg border border-line bg-bg-2/80 px-3 py-2 backdrop-blur-md">
                <p className="label !text-[0.6rem]">Built with</p>
                <p className="mt-1 font-mono text-xs text-ink">Flutter · Dart</p>
              </div>
            </motion.div>
            <motion.div
              aria-hidden="true"
              className="absolute -right-2 bottom-[18%] hidden sm:block"
              style={parallax ? { x: chipX, y: chipY } : undefined}
            >
              <div className="rounded-lg border border-line bg-bg-2/80 px-3 py-2 backdrop-blur-md">
                <p className="label !text-[0.6rem]">Featured build</p>
                <p className="mt-1 flex items-center gap-2 font-mono text-xs text-ink">
                  <span className="size-1.5 rounded-full bg-cyan" />
                  StockLearn · Android
                </p>
              </div>
            </motion.div>
            <p aria-hidden="true" className="label absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap !text-[0.6rem] text-muted/70">
              FIG. 01 — Real app screen
            </p>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        className="label group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 hover:text-ink lg:flex"
      >
        Scroll
        <span aria-hidden="true" className="relative h-10 w-px overflow-hidden bg-line-strong">
          <span className="scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-violet" />
        </span>
      </a>
    </section>
  )
}
