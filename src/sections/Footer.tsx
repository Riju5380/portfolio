import { ArrowUp } from 'lucide-react'
import { useReducedMotion } from 'motion/react'
import { site } from '../config/site'

const year = new Date().getFullYear()

export function Footer() {
  const reduce = useReducedMotion()
  function toTop() {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    document.querySelector<HTMLElement>('#top-anchor')?.focus({ preventScroll: true })
  }
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <p className="font-mono text-xs text-muted">
          <span className="font-display text-base font-bold text-ink">
            SS<span className="text-violet">.</span>
          </span>
          <span className="ml-3">© {year} {site.name}</span>
        </p>
        <p className="label !tracking-[0.25em]">{site.footer}</p>
        <button
          type="button"
          onClick={toTop}
          className="label group inline-flex items-center gap-3 hover:text-ink"
        >
          Back to top
          <span className="grid size-10 place-items-center rounded-full border border-line-strong transition-colors duration-300 group-hover:border-violet group-hover:bg-violet group-hover:text-white">
            <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </span>
        </button>
      </div>
    </footer>
  )
}
