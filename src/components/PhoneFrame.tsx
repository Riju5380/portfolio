import type { Screenshot } from '../config/projects'

type Props = { shot: Screenshot; className?: string; eager?: boolean }

/** Device frame around a real app screenshot. Width is controlled by the parent via className. */
export function PhoneFrame({ shot, className = '', eager = false }: Props) {
  return (
    <figure className={`relative ${className}`}>
      <div className="relative rounded-[2.4rem] bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-800 p-[3px] shadow-[0_40px_80px_-30px_rgb(0_0_0_/_0.9),0_0_0_1px_rgb(255_255_255_/_0.06)]">
        <div className="rounded-[2.25rem] bg-[#050507] p-[7px]">
          <div className="relative overflow-hidden rounded-[1.85rem] bg-[#F8FAFC]">
            {/* status bar area with punch-hole camera */}
            <div className="relative flex h-6 items-center justify-between px-5 text-[9px] font-semibold text-slate-800" aria-hidden="true">
              <span>9:41</span>
              <span className="absolute left-1/2 top-1/2 size-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#050507]" />
              <span className="flex items-center gap-1">
                <span className="h-[7px] w-3 rounded-[2px] border border-slate-700" />
              </span>
            </div>
            <img
              src={shot.src}
              alt={shot.alt}
              width={728}
              height={1520}
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
      {/* side buttons */}
      <span aria-hidden="true" className="absolute -right-[2px] top-[22%] h-12 w-[3px] rounded-r bg-zinc-700" />
      <span aria-hidden="true" className="absolute -left-[2px] top-[18%] h-8 w-[3px] rounded-l bg-zinc-700" />
      <span aria-hidden="true" className="absolute -left-[2px] top-[27%] h-8 w-[3px] rounded-l bg-zinc-700" />
    </figure>
  )
}
