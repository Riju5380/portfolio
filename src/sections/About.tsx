import { motion, useReducedMotion } from 'motion/react'
import { MaskedLines, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { site } from '../config/site'

type Tok = [text: string, kind?: 'kw' | 'str' | 'fn' | 'type' | 'cm' | 'an']

// A small, honest "profile" written as Dart.
const code: Tok[][] = [
  [['// profile.dart', 'cm']],
  [['class ', 'kw'], ['Srijit ', 'type'], ['extends ', 'kw'], ['Developer', 'type'], [' {']],
  [['  final ', 'kw'], ['focus = '], ["'Flutter · cross-platform'", 'str'], [';']],
  [['  final ', 'kw'], ['stack = ['], ["'Dart'", 'str'], [', '], ["'Laravel'", 'str'], [', '], ["'PHP'", 'str'], [', '], ["'C++'", 'str'], ['];']],
  [['  final ', 'kw'], ['offline = ['], ["'photography'", 'str'], [', '], ["'bike rides'", 'str'], ['];']],
  [['']],
  [['  @override', 'an']],
  [['  '], ['Future', 'type'], ['<'], ['App', 'type'], ['> '], ['build', 'fn'], ['('], ['Idea ', 'type'], ['idea) '], ['async ', 'kw'], ['{']],
  [['    final ', 'kw'], ['design = '], ['await ', 'kw'], ['sketch', 'fn'], ['(idea);']],
  [['    return ', 'kw'], ['ship', 'fn'], ['(design, withAI: '], ['true', 'kw'], [');']],
  [['  }']],
  [['}']],
]

const color: Record<string, string> = {
  kw: 'text-violet-soft',
  str: 'text-emerald-300',
  fn: 'text-cyan',
  type: 'text-sky-300',
  cm: 'text-muted/70 italic',
  an: 'text-amber-300/90',
}

function CodePanel() {
  const reduce = useReducedMotion()
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-bg-2/80 shadow-[0_30px_80px_-40px_rgb(139_92_246_/_0.5)] backdrop-blur">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
        </div>
        <figcaption className="label !text-[0.6rem]">lib/profile.dart</figcaption>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[1.8] md:text-[13px]" aria-label="Profile written as a Dart class">
        <code>
          {code.map((line, i) => (
            <motion.span
              key={i}
              className="flex"
              initial={reduce ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '0px 0px -15% 0px' }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
            >
              <span aria-hidden="true" className="mr-5 w-5 shrink-0 select-none text-right text-white/20">
                {i + 1}
              </span>
              <span className="whitespace-pre text-ink/85">
                {line.map(([t, k], j) => (
                  <span key={j} className={k ? color[k] : undefined}>
                    {t}
                  </span>
                ))}
                {i === code.length - 1 && <span aria-hidden="true" className="caret ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-violet" />}
              </span>
            </motion.span>
          ))}
        </code>
      </pre>
    </figure>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="01" title="About" />
        </Reveal>

        <div className="mt-10 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div id="about-title">
              <MaskedLines
                lines={site.about.lines}
                accent={[1]}
                className="font-display text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
              />
            </div>

            <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
              {site.about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <dl className="mt-14 max-w-2xl border-t border-line">
                {site.about.facts.map((f) => (
                  <div
                    key={f.label}
                    className="group grid grid-cols-[8.5rem_1fr] items-baseline gap-4 border-b border-line py-4 transition-colors hover:bg-white/[0.015] sm:grid-cols-[11rem_1fr]"
                  >
                    <dt className="label transition-colors group-hover:text-violet-soft">{f.label}</dt>
                    <dd className="text-sm text-ink md:text-base">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pt-28">
            <Reveal delay={0.15}>
              <CodePanel />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
