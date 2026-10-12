import { Mail } from 'lucide-react'
import type { SocialKey } from '../config/site'
import { linkedin, siGithub, siInstagram, type IconData } from './iconData'

export function BrandIcon({ icon, className = 'size-5' }: { icon: IconData; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d={icon.path} />
    </svg>
  )
}

export function GithubIcon({ className }: { className?: string }) {
  return <BrandIcon icon={siGithub} className={className} />
}

export function SocialIcon({ name, className = 'size-5' }: { name: SocialKey; className?: string }) {
  switch (name) {
    case 'email':
      return <Mail className={className} strokeWidth={1.6} aria-hidden="true" />
    case 'github':
      return <BrandIcon icon={siGithub} className={className} />
    case 'linkedin':
      return <BrandIcon icon={linkedin} className={className} />
    case 'instagram':
      return <BrandIcon icon={siInstagram} className={className} />
  }
}
