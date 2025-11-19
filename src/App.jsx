import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Summary from './components/Summary'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* subtle vignette background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(79,70,229,0.15),transparent_70%)]" />

      <header className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-6 py-5">
        <a href="/" className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Flames" className="h-8 w-8" />
          <span className="text-white/90 font-medium">Flames Blue</span>
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-white/70">
          <a href="#pillars" className="hover:text-white">Capabilities</a>
          <a href="/test" className="hover:text-white">Backend Test</a>
          <a href="https://n8n.io" target="_blank" rel="noreferrer" className="hover:text-white">n8n</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Pillars />
        <Summary />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/60 text-sm">
          Built with a 3D Spline aura and Tailwind styling.
        </div>
      </footer>
    </div>
  )
}

export default App
