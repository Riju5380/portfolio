import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { useFinePointer } from '../hooks/useMediaQuery'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, summary, [data-cursor="hover"]'

/** Soft ring that trails the native cursor on desktop. Never replaces the system cursor. */
export function Cursor() {
  const fine = useFinePointer()
  const reduce = useReducedMotion()
  if (!fine || reduce) return null
  return <CursorRing />
}

function CursorRing() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 })
  const [hover, setHover] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHover(!!(e.target as Element | null)?.closest?.(INTERACTIVE))
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [x, y])

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border mix-blend-difference"
      style={{ x: sx, y: sy }}
      animate={{
        width: hover ? 44 : 22,
        height: hover ? 44 : 22,
        opacity: visible ? 1 : 0,
        borderColor: hover ? 'rgba(34,211,238,0.9)' : 'rgba(244,244,245,0.55)',
        backgroundColor: hover ? 'rgba(34,211,238,0.12)' : 'rgba(0,0,0,0)',
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  )
}
