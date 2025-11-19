import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient halo overlay (does not block pointer) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.20),transparent_55%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Visual Orchestration for LLMs & Agents
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          n8n as your NLP Control Plane
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl mx-auto">
          Build, observe, and iterate LLM pipelines without boilerplate. Drag-and-drop chains, agent tools, and RAG flows—swap models on the fly.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#pillars" className="px-5 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors">Explore capabilities</a>
          <a href="/test" className="px-5 py-2.5 rounded-lg border border-white/15 text-white/90 hover:bg-white/10 transition-colors">Check backend</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
