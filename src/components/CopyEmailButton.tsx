import { Check, Copy } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle')

  useEffect(() => {
    if (state === 'idle') return
    const t = setTimeout(() => setState('idle'), 2200)
    return () => clearTimeout(t)
  }, [state])

  async function copy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
      } else {
        // Fallback for non-secure contexts
        const ta = document.createElement('textarea')
        ta.value = email
        ta.setAttribute('readonly', '')
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.select()
        const ok = document.execCommand('copy')
        ta.remove()
        if (!ok) throw new Error('copy failed')
      }
      setState('copied')
    } catch {
      setState('error')
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong px-5 py-3 text-sm text-ink transition-colors duration-300 hover:border-cyan/60 hover:bg-cyan/10"
    >
      {state === 'copied' ? (
        <Check className="size-4 text-emerald-400" aria-hidden="true" />
      ) : (
        <Copy className="size-4 text-muted transition-colors group-hover:text-cyan" aria-hidden="true" />
      )}
      <span>{state === 'copied' ? 'Copied to clipboard' : state === 'error' ? 'Couldn’t copy — select it manually' : 'Copy email'}</span>
      <span className="sr-only" aria-live="polite">
        {state === 'copied' ? `${email} copied to clipboard` : state === 'error' ? 'Copy failed' : ''}
      </span>
    </button>
  )
}
