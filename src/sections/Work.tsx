import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import { ArrowUpRight, Download, Info } from 'lucide-react'
import type { PointerEvent } from 'react'
import { Button } from '../components/Button'
import { BrandIcon, GithubIcon } from '../components/Icons'
import { siGoogleplay, techIcons } from '../components/iconData'
import { PhoneFrame } from '../components/PhoneFrame'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { projects, type Project } from '../config/projects'
import { githubUrl } from '../config/site'
import { useFinePointer } from '../hooks/useMediaQuery'

function DeviceStage({ project, index }: { project: Project; index: number }) {
  const shots = project.stage ?? project.screenshots?.slice(0, 3)
  const reduce = useReducedMotion()
  const fine = useFinePointer()
  const active = fine && !reduce
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 120, damping: 20 })
  const sy = useSpring(py, { stiffness: 120, damping: 20 })
  const rotY = useTransform(sx, [-1, 1], [-6, 6])
  const rotX = useTransform(sy, [-1, 1], [5, -5])
  const backX = useTransform(sx, [-1, 1], [-14, 14])
  const backXNeg = useTransform(sx, [-1, 1], [14, -14])
  const glowX = useTransform(sx, [-1, 1], ['30%', '70%'])
  const glowY = useTransform(sy, [-1, 1], ['30%', '70%'])

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (!active) return
    const r = e.currentTarget.getBoundingClientRect()
    px.set(((e.clientX - r.left) / r.width) * 2 - 1)
    py.set(((e.clientY - r.top) / r.height) * 2 - 1)
  }

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={() => {
        px.set(0)
        py.set(0)
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-line bg-bg-2"
      style={{ perspective: 1400 }}
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60" />
      <motion.div
        aria-hidden="true"
        className="absolute size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[90px]"
        style={active ? { left: glowX, top: glowY } : { left: '50%', top: '50%' }}
      />
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-1/3 w-3/4 -translate-x-1/2 rounded-full bg-cyan/10 blur-[80px]" />

      <div className="label absolute left-5 top-5 z-10 flex items-center gap-2 !text-[0.6rem] md:left-7 md:top-7">
        <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true" /> {project.stageNote ?? 'Real app screens'}
      </div>
      <div aria-hidden="true" className="label absolute right-5 top-5 z-10 hidden !text-[0.6rem] sm:block md:right-7 md:top-7">
        Case {String(index + 1).padStart(2, '0')}
      </div>

      {shots && shots.length === 3 && (
      <motion.div
        className="relative flex items-center justify-center px-4 pb-10 pt-20 md:px-10 md:pb-16 md:pt-24"
        style={active ? { rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' } : undefined}
      >
        <motion.div className="relative z-0 -mr-[9%] w-[30%] translate-y-6 -rotate-6 opacity-80 transition-opacity duration-500 group-hover:opacity-100" style={active ? { x: backX } : undefined}>
          <PhoneFrame shot={shots[0]} />
        </motion.div>
        <div className="relative z-10 w-[37%]">
          <PhoneFrame shot={shots[1]} />
        </div>
        <motion.div
          className="relative z-0 -ml-[9%] w-[30%] translate-y-6 rotate-6 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
          style={active ? { x: backXNeg } : undefined}
        >
          <PhoneFrame shot={shots[2]} />
        </motion.div>
      </motion.div>
      )}
    </div>
  )
}

const stripCols: Record<number, string> = { 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5', 6: 'lg:grid-cols-6' }

function ScreenStrip({ project }: { project: Project }) {
  if (!project.screenshots?.length) return null
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between gap-6">
        <p className="label">Screens / {String(project.screenshots.length).padStart(2, '0')}</p>
        <p className="label hidden !text-[0.6rem] sm:block">Scroll →</p>
      </div>
      <ul
        tabIndex={0}
        aria-label={`${project.title} screenshots`}
        className={`mt-6 -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:thin] md:-mx-10 md:scroll-px-10 md:gap-8 md:px-10 lg:mx-0 lg:grid ${stripCols[project.screenshots.length] ?? 'lg:grid-cols-5'} lg:overflow-visible lg:px-0`}
      >
        {project.screenshots.map((shot, i) => (
          <li key={shot.label} className="w-[58vw] max-w-[15rem] shrink-0 snap-start sm:w-[34vw] lg:w-auto lg:max-w-none">
            <Reveal delay={i * 0.06}>
              <div className="transition-transform duration-500 ease-out-expo hover:-translate-y-2">
                <PhoneFrame shot={shot} />
              </div>
              <p className="mt-4 flex items-center justify-between font-mono text-xs text-muted">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span className="text-ink/90">{shot.label}</span>
              </p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <article aria-labelledby={`${project.slug}-title`}>
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className={`min-w-0 lg:col-span-7 ${flip ? 'lg:order-2' : ''}`} y={40}>
          <DeviceStage project={project} index={index} />
        </Reveal>

        <div className={`min-w-0 lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
          <Reveal>
            <div className="flex flex-wrap items-center gap-2">
              {project.tech.map((t) => {
                const icon = t === 'Flutter' ? techIcons.flutter : t === 'Dart' ? techIcons.dart : null
                return (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${
                      t === 'Flutter' ? 'border-sky-400/30 bg-sky-400/10 text-sky-300' : 'border-line text-muted'
                    }`}
                  >
                    {icon && <BrandIcon icon={icon} className="size-3" />}
                    {t}
                  </span>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 id={`${project.slug}-title`} className="mt-6 font-display text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
              {project.title}
            </h3>
            <p className="mt-3 font-display text-xl text-gradient md:text-2xl">{project.tagline}</p>
            {project.credit && <p className="label mt-4 !text-[0.65rem]">{project.credit}</p>}
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted">{project.description}</p>
          </Reveal>

          {project.features && (
            <Reveal delay={0.15}>
              <ul className="mt-8 border-t border-line">
                {project.features.map((f, i) => (
                  <li key={f} className="group flex items-baseline gap-5 border-b border-line py-3.5 text-sm text-ink/90 md:text-[15px]">
                    <span className="font-mono text-[11px] text-violet-soft">{String(i + 1).padStart(2, '0')}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              {project.playStore && (
                <Button href={project.playStore} external icon={<BrandIcon icon={siGoogleplay} className="size-4" />}>
                  Get it on Google Play
                </Button>
              )}
              {project.repo && (
                <Button href={project.repo} external icon={<GithubIcon className="size-4" />}>
                  View on GitHub
                </Button>
              )}
              {project.download && (
                <Button href={project.download.href} external variant="ghost" icon={<Download className="size-4" />}>
                  {project.download.label}
                </Button>
              )}
            </div>
          </Reveal>

          {project.disclaimer && (
            <Reveal delay={0.25}>
              <p className="mt-8 flex gap-3 rounded-xl border border-amber-300/15 bg-amber-300/[0.04] p-4 text-xs leading-relaxed text-muted">
                <Info className="mt-0.5 size-4 shrink-0 text-amber-300/80" aria-hidden="true" />
                <span>{project.disclaimer}</span>
              </p>
            </Reveal>
          )}
        </div>
      </div>

      <ScreenStrip project={project} />
    </article>
  )
}

function ProjectTile({ project }: { project: Project }) {
  const href = project.demo ?? project.repo
  return (
    <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-bg-2/60 p-7 transition-colors duration-500 hover:border-violet/40 hover:bg-bg-2">
      <div>
        <p className="label">{project.tagline}</p>
        <h4 className="mt-4 font-display text-3xl font-semibold tracking-tight">{project.title}</h4>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
              {t}
            </li>
          ))}
        </ul>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-line-strong transition-colors after:absolute after:inset-0 group-hover:border-violet group-hover:bg-violet"
            aria-label={`${project.title} — ${project.demo ? 'live demo' : 'repository'} (opens in a new tab)`}
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}

function ComingSoonTile() {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-line-strong p-7 transition-colors duration-500 hover:border-cyan/50 hover:bg-cyan/[0.03]"
    >
      <div aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full bg-cyan/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div>
        <p className="label flex items-center gap-2">
          <span className="font-mono text-cyan">{'>'}</span> In the workshop
        </p>
        <p className="mt-4 font-display text-3xl font-semibold tracking-tight">
          More experiments
          <br />
          coming soon.
        </p>
      </div>
      <p className="mt-8 flex items-center justify-between text-sm text-muted transition-colors group-hover:text-ink">
        <span className="flex items-center gap-2">
          <GithubIcon className="size-4" /> Follow along on GitHub
        </span>
        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        <span className="sr-only">(opens in a new tab)</span>
      </p>
    </a>
  )
}

export function Work() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="work" aria-labelledby="work-title" className="relative py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionLabel index="02" title="Selected work" />
            <h2 id="work-title" className="sr-only">
              Selected work
            </h2>
          </Reveal>
          <Reveal>
            <p className="label !text-[0.6rem]">{String(featured.length).padStart(2, '0')} case studies · Flutter · Android</p>
          </Reveal>
        </div>

        <div className="mt-12 space-y-32 md:space-y-44">
          {featured.map((p, i) => (
            <FeaturedProject key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-28">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-line pb-5">
              <h3 className="font-display text-2xl font-medium tracking-tight md:text-3xl">More projects</h3>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProjectTile project={p} />
              </Reveal>
            ))}
            <Reveal delay={others.length * 0.06}>
              <ComingSoonTile />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
