export function StatusDot({ className = '' }: { className?: string }) {
  return (
    <span className={`relative inline-flex size-2 ${className}`} aria-hidden="true">
      <span className="status-ping absolute inset-0 rounded-full bg-emerald-400" />
      <span className="relative inline-flex size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52_211_153)]" />
    </span>
  )
}
