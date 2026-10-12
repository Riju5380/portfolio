import { Background } from './components/Background'
import { Cursor } from './components/Cursor'
import { Nav } from './components/Nav'
import { About } from './sections/About'
import { AIWorkflow } from './sections/AIWorkflow'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Toolkit } from './sections/Toolkit'
import { Work } from './sections/Work'

export default function App() {
  return (
    <>
      <span id="top-anchor" tabIndex={-1} className="sr-only">
        Top of page
      </span>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Background />
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Work />
        <Toolkit />
        <AIWorkflow />
        <Contact />
      </main>
      <Footer />
      <Cursor />
    </>
  )
}
