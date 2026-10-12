import { motion, useReducedMotion } from 'motion/react'
import { MaskedLines, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { site } from '../config/site'

export function AIWorkflow() {
  const reduce = useReducedMotion()
  const steps = site.ai.steps
  return (
    <section aria-labelledby="ai-title" className="relative overflow-hidden border-y border-line bg-bg-2/50 py-28 md:py-36">
      <div aria-hidden="true" className="absolute -left-40 top-10 size-[30rem] rounded-full bg-violet/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel index="++" title="Process" />
            </Reveal>
            <div id="ai-title" className="mt-10">
              <MaskedLines
                lines={site.ai.lines}
                accent={[1]}
                className="font-display text-[clamp(2.4rem,5.4vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.04em]"
              />
            </div>
          </div>
          <Reveal className="self-end lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-base leading-relaxed text-muted md:text-lg">{site.ai.body}</p>
          </Reveal>
        </div>

        <ol className="relative mt-20 grid gap-10 md:grid-cols-5 md:gap-6">
          {/* connecting line: vertical on mobile, horizontal on desktop */}
          <motion.span
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-violet via-violet/60 to-cyan md:hidden"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-gradient-to-r from-violet via-violet/60 to-cyan md:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '0px 0px -20% 0px' }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative pl-10 md:pl-0 md:pt-12"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -20% 0px' }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-0 grid size-[15px] place-items-center rounded-full border bg-bg ${
                  i === steps.length - 1 ? 'border-cyan shadow-[0_0_16px_rgb(34_211_238_/_0.8)]' : 'border-violet'
                }`}
              >
                <span className={`size-[5px] rounded-full ${i === steps.length - 1 ? 'bg-cyan' : 'bg-violet'}`} />
              </span>
              <p className="font-mono text-[11px] text-muted">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-2 flex items-center gap-3 font-display text-2xl font-semibold uppercase tracking-tight md:text-[1.7rem]">
                {step.title}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="font-mono text-sm font-normal text-violet-soft/70 md:hidden">
                    ↓
                  </span>
                )}
              </p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">{step.note}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
