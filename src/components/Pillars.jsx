import { Brain, Workflow, Database, Bot, Split, ShieldCheck } from 'lucide-react'

function Item({ icon: Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/7 transition-colors">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-500/20 p-2 text-indigo-300">
          <Icon size={20} />
        </div>
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-white/75 text-sm leading-relaxed">
        {children}
      </p>
    </div>
  )
}

function Pillars() {
  return (
    <section id="pillars" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white">What it means in NLP terms</h2>
        <p className="mt-3 text-center text-white/70 max-w-3xl mx-auto">
          n8n is a visual control plane for LLM systems: orchestrate chains, run agents with tools, and ship production RAG with memory and guardrails.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Item icon={Workflow} title="Orchestration Layer">
            Visual chains replace code: connect prompt templates → models → parsers. Swap models by changing credentials.
          </Item>
          <Item icon={Bot} title="Agentic Workflows">
            An agent node runs ReAct loops, calling your workflow branches as tools via structured function-calling.
          </Item>
          <Item icon={Database} title="RAG Pipeline (ETL)">
            Load documents, split text, embed, and upsert to vector stores like Pinecone, Qdrant, or Supabase. Query via KNN.
          </Item>
          <Item icon={Split} title="Context & Memory">
            Session-aware chat with window buffers and summaries to keep coherence while staying within token limits.
          </Item>
          <Item icon={ShieldCheck} title="Hybrid Logic">
            Blend deterministic guards with probabilistic outputs; enforce JSON schemas for safe downstream actions.
          </Item>
          <Item icon={Brain} title="Evaluation & Routing">
            Branch, compare, and score responses with “LLM-as-a-judge” patterns; route to human when confidence is low.
          </Item>
        </div>
      </div>
    </section>
  )
}

export default Pillars
