function Summary() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h3 className="text-white text-xl font-semibold">Summary</h3>
          <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-white/80">
            <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <span className="text-white/60">Inference Engine</span>
              <span>Connectors for OpenAI, Anthropic, HuggingFace, Ollama</span>
            </div>
            <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <span className="text-white/60">Agent Framework</span>
              <span>AI Agent node (LangChain-style), tools via function-calling</span>
            </div>
            <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <span className="text-white/60">RAG Pipeline</span>
              <span>Loaders → Text Splitters → Embeddings → Vector Store</span>
            </div>
            <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <span className="text-white/60">Context Window</span>
              <span>Window buffer memory, summaries, Redis-backed chat memory</span>
            </div>
            <div className="grid grid-cols-[180px_1fr] gap-4 items-start">
              <span className="text-white/60">Evaluation</span>
              <span>Branching, scoring, LLM-as-a-judge, human-in-the-loop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Summary
