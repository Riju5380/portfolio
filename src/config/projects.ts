// Add new projects to this array. Projects with `featured: true` get the large
// case-study layout (Case 01, 02, …); every other project renders as a tile.

import splash from '../assets/stocklearn/00-splash.webp'
import dashboard from '../assets/stocklearn/01-dashboard.webp'
import market from '../assets/stocklearn/02-market.webp'
import portfolio from '../assets/stocklearn/03-portfolio.webp'
import history from '../assets/stocklearn/04-history.webp'
import profile from '../assets/stocklearn/05-profile.webp'
import skAttendance from '../assets/sigmakey/01-attendance.webp'
import skCalendar from '../assets/sigmakey/02-calendar.webp'
import skSwitcher from '../assets/sigmakey/03-switcher.webp'
import skNotices from '../assets/sigmakey/04-notices.webp'
import skProfile from '../assets/sigmakey/05-profile.webp'
import skSettings from '../assets/sigmakey/06-settings.webp'

export type Screenshot = { src: string; alt: string; label: string }

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tech: string[]
  features?: string[]
  /** Who built it / who published it — shown under the title */
  credit?: string
  repo?: string
  download?: { href: string; label: string }
  playStore?: string
  demo?: string
  screenshots?: Screenshot[]
  /** Three screens for the case-study stage: [left, center, right] */
  stage?: [Screenshot, Screenshot, Screenshot]
  /** Small label on the stage, e.g. "Real app screens · simulated data" */
  stageNote?: string
  disclaimer?: string
  featured?: boolean
}

export const stockLearnScreens = {
  splash: { src: splash, alt: 'StockLearn splash screen reading “StockLearn Simulator — Virtual stock market simulator”', label: 'Splash' },
  dashboard: { src: dashboard, alt: 'StockLearn dashboard showing virtual balance, portfolio value, daily profit and loss, and quick actions', label: 'Dashboard' },
  market: { src: market, alt: 'StockLearn market screen with search, market sentiment card, sector filters, and a stock listing', label: 'Market' },
  portfolio: { src: portfolio, alt: 'StockLearn portfolio screen with total invested, current value, overall profit and loss, and an allocation donut chart', label: 'Portfolio' },
  history: { src: history, alt: 'StockLearn trade history with total, winning and losing trades, best trade, and a list of simulated buy and sell orders', label: 'History' },
  profile: { src: profile, alt: 'StockLearn profile screen with virtual wallet balance, top-up button, and preference settings', label: 'Profile' },
} satisfies Record<string, Screenshot>

// Captured from a demo account. Student, guardian and school names, email and
// phone number were replaced with fictional ones before adding these files.
export const sigmaKeyScreens = {
  attendance: { src: skAttendance, alt: 'Parent app attendance screen with the selected student, overall and monthly attendance, and today’s record', label: 'Attendance' },
  calendar: { src: skCalendar, alt: 'Academic calendar marking present, absent and holiday days for the month', label: 'Calendar' },
  switcher: { src: skSwitcher, alt: 'Student switcher sheet listing two children on one guardian account', label: 'Switch student' },
  notices: { src: skNotices, alt: 'Notice board with Academic, Events and Emergency filters and an illustrated empty state', label: 'Notices' },
  profile: { src: skProfile, alt: 'Profile screen with guardian contact details and the student’s class, section and roll number', label: 'Profile' },
  settings: { src: skSettings, alt: 'Settings with switch student, theme mode, change password, privacy policy and log out', label: 'Settings' },
} satisfies Record<string, Screenshot>

export const projects: Project[] = [
  {
    slug: 'stocklearn',
    title: 'StockLearn',
    tagline: 'Virtual Stock Market Simulator',
    description:
      'A Flutter app for learning how the stock market works without risking real money. Start with a virtual balance, browse the market, build a portfolio, and see how simulated trades play out.',
    tech: ['Flutter', 'Dart', 'Android'],
    features: [
      'Portfolio dashboard with a virtual balance',
      'Market browsing with sectors and sentiment',
      'Portfolio allocation & analytics',
      'Simulated trading history',
      'Profit / loss summaries',
    ],
    repo: 'https://github.com/Riju5380/Stock_learn_app',
    download: { href: 'https://github.com/Riju5380/Stock_learn_app/releases/latest', label: 'Download APK' },
    stage: [stockLearnScreens.market, stockLearnScreens.dashboard, stockLearnScreens.portfolio],
    stageNote: 'Real app screens · simulated data',
    screenshots: [
      stockLearnScreens.dashboard,
      stockLearnScreens.market,
      stockLearnScreens.portfolio,
      stockLearnScreens.history,
      stockLearnScreens.profile,
    ],
    disclaimer:
      'StockLearn is a learning and demonstration project. It is not a real trading or investment platform, and figures shown in the app are simulated.',
    featured: true,
  },
  {
    slug: 'sigma-key-tech',
    title: 'SIGMA KEY TECH',
    tagline: 'School Parent App · Live on Google Play',
    description:
      'A parent-facing app for schools using RFID gates. Parents get real-time alerts when their child enters or leaves the school gate, follow attendance through the year, and stay up to date with notices from the school.',
    credit: 'Built at Astfast Infotech · Published by SIGMAKEY',
    tech: ['Flutter', 'Dart', 'Android'],
    features: [
      'Real-time gate entry / exit alerts from RFID taps',
      'Yearly and monthly attendance overview',
      'Academic calendar with present, absent and holidays',
      'Notice board with Academic, Events and Emergency filters',
      'Multiple children under one guardian account',
    ],
    playStore: 'https://play.google.com/store/apps/details?id=com.school.parent.parent_app',
    stage: [sigmaKeyScreens.calendar, sigmaKeyScreens.attendance, sigmaKeyScreens.profile],
    stageNote: 'Live app · demo account, names changed',
    screenshots: [
      sigmaKeyScreens.attendance,
      sigmaKeyScreens.calendar,
      sigmaKeyScreens.switcher,
      sigmaKeyScreens.notices,
      sigmaKeyScreens.profile,
      sigmaKeyScreens.settings,
    ],
    disclaimer:
      'Screenshots are from a demo account. Student, guardian and school names have been replaced and contact details blurred to protect privacy.',
    featured: true,
  },
  // {
  //   slug: 'next-project',
  //   title: 'Next Project',
  //   tagline: 'One-line summary',
  //   description: 'Short description.',
  //   tech: ['Flutter'],
  //   repo: 'https://github.com/Riju5380/...',
  // },
]
