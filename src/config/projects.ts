// Add new projects to this array. The first project with `featured: true`
// gets the large case-study layout; every other project renders as a tile.

import splash from '../assets/stocklearn/00-splash.webp'
import dashboard from '../assets/stocklearn/01-dashboard.webp'
import market from '../assets/stocklearn/02-market.webp'
import portfolio from '../assets/stocklearn/03-portfolio.webp'
import history from '../assets/stocklearn/04-history.webp'
import profile from '../assets/stocklearn/05-profile.webp'

export type Screenshot = { src: string; alt: string; label: string }

export type Project = {
  slug: string
  title: string
  tagline: string
  description: string
  tech: string[]
  features?: string[]
  repo?: string
  download?: { href: string; label: string }
  demo?: string
  screenshots?: Screenshot[]
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
  // {
  //   slug: 'next-project',
  //   title: 'Next Project',
  //   tagline: 'One-line summary',
  //   description: 'Short description.',
  //   tech: ['Flutter'],
  //   repo: 'https://github.com/Riju5380/...',
  // },
]
