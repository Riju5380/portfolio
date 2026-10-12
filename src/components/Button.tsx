import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  external?: boolean
}

const base =
  'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out-expo active:scale-[0.98]'

const variants = {
  primary:
    'bg-ink text-bg hover:bg-white hover:shadow-[0_0_0_6px_rgb(139_92_246_/_0.18),0_10px_40px_-10px_rgb(139_92_246_/_0.7)]',
  ghost: 'border border-line-strong text-ink hover:border-violet/60 hover:bg-violet/10',
}

export function Button({ variant = 'primary', icon, external, className = '', children, ...rest }: Props) {
  const ext = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...ext} {...rest}>
      <span>{children}</span>
      {icon && (
        <span aria-hidden="true" className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
