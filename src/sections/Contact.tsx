import { ArrowUpRight } from 'lucide-react'
import { CopyEmailButton } from '../components/CopyEmailButton'
import { SocialIcon } from '../components/Icons'
import { MaskedLines, Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { site, socials } from '../config/site'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-28 md:py-40">
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[60%] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgb(139_92_246_/_0.16),transparent)]" />
      <div className="container-x relative">
        <Reveal>
          <SectionLabel index="04" title="Let’s connect" />
        </Reveal>

        <div id="contact-title" className="mt-10">
          <MaskedLines
            lines={site.contact.lines}
            accent={[1]}
            className="font-display text-[clamp(3rem,10vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]"
          />
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">{site.contact.body}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col items-start gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 font-display text-xl font-medium tracking-tight sm:text-2xl md:text-3xl"
                >
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px] break-all">
                    {site.email}
                  </span>
                  <ArrowUpRight className="size-6 shrink-0 text-violet transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <CopyEmailButton email={site.email} />
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.2}>
            <ul className="border-t border-line">
              {socials.map((s) => {
                const external = s.key !== 'email'
                return (
                  <li key={s.key}>
                    <a
                      href={s.href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group relative flex items-center justify-between gap-4 overflow-hidden border-b border-line py-6"
                    >
                      <span aria-hidden="true" className="absolute inset-0 -z-0 origin-left scale-x-0 bg-gradient-to-r from-violet/10 to-transparent transition-transform duration-700 ease-out-expo group-hover:scale-x-100" />
                      <span className="relative flex items-center gap-5">
                        <span className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors duration-300 group-hover:border-violet/50 group-hover:text-ink">
                          <SocialIcon name={s.key} className="size-[18px]" />
                        </span>
                        <span>
                          <span className="block font-display text-xl font-medium tracking-tight md:text-2xl">{s.label}</span>
                          <span className="mt-0.5 block font-mono text-xs text-muted">{s.handle}</span>
                        </span>
                      </span>
                      <ArrowUpRight
                        className="relative size-5 text-muted transition-[transform,color] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
                        aria-hidden="true"
                      />
                      {external && <span className="sr-only">(opens in a new tab)</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
