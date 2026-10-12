import { BrandIcon } from '../components/Icons'
import { techIcons } from '../components/iconData'
import { MaskedLines, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { stack } from '../config/site'

// Running item number across groups (01–05)
const offsets = stack.map((_, gi) => stack.slice(0, gi).reduce((sum, g) => sum + g.items.length, 0))

export function Toolkit() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="relative py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="03" title="Toolkit" />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div id="stack-title" className="lg:col-span-7">
            <MaskedLines
              lines={['The tools I reach for', 'when I build.']}
              accent={[1]}
              className="font-display text-[clamp(2.2rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em]"
            />
          </div>
          <Reveal className="self-end lg:col-span-5" delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-muted">
              A focused stack: Flutter and Dart for the apps themselves, Laravel and PHP for the services behind them, and C++ for sharpening fundamentals.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid border-t border-line md:grid-cols-3">
          {stack.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.08} className={`border-line ${gi > 0 ? 'md:border-l' : ''}`}>
              <div className="flex h-full flex-col border-b border-line md:border-b-0">
                <div className="flex items-baseline justify-between px-1 py-5 md:px-7">
                  <h3 className="label text-ink/80">{group.group}</h3>
                  <span className="font-mono text-[10px] text-muted/70">
                    {group.code}/{String(gi + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="flex-1">
                  {group.items.map((item, ii) => {
                    const icon = techIcons[item.id]
                    return (
                      <li
                        key={item.id}
                        className="group relative border-t border-line px-1 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:px-7"
                        style={{ ['--brand' as string]: `#${icon.hex}` }}
                      >
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-0 h-px w-0 bg-gradient-to-r from-violet to-cyan transition-[width] duration-700 ease-out-expo group-hover:w-full"
                        />
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <span className="grid size-12 place-items-center rounded-xl border border-line bg-bg-2 text-ink/70 transition-[color,border-color,box-shadow] duration-500 group-hover:border-[color:var(--brand)]/40 group-hover:text-[color:var(--brand)] group-hover:shadow-[0_0_30px_-8px_var(--brand)]">
                              <BrandIcon icon={icon} className="size-6" />
                            </span>
                            <span className="font-display text-3xl font-medium tracking-tight md:text-[2.1rem]">{item.name}</span>
                          </div>
                          <span className="font-mono text-[10px] text-muted/70">{String(offsets[gi] + ii + 1).padStart(2, '0')}</span>
                        </div>
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-ink/85">
                          {item.description}
                        </p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
