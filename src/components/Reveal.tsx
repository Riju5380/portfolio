import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = { children: ReactNode; delay?: number; y?: number; className?: string }

/** Fades and lifts content in once when it scrolls into view. */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Headline whose lines slide up from behind a mask. `accent` lines get the gradient. */
export function MaskedLines({
  lines,
  accent = [],
  className,
  as: Tag = 'h2',
  delay = 0,
  animateOnMount = false,
}: {
  lines: readonly string[]
  accent?: number[]
  className?: string
  as?: 'h1' | 'h2'
  delay?: number
  animateOnMount?: boolean
}) {
  const reduce = useReducedMotion()
  const trigger = animateOnMount ? { animate: { y: '0%' } } : { whileInView: { y: '0%' } }
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${accent.includes(i) ? 'text-gradient' : ''}`}
            initial={reduce ? false : { y: '110%' }}
            {...trigger}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 1.1, delay: delay + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
