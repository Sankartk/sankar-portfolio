import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'FinFlow — Sankar Kalyanakumar',
  description: 'AI-native financial reconciliation engine. Five-pass matching, Kafka streaming, pgvector anomaly memory, and Ollama-powered break explanation — all free, all local.',
  openGraph: {
    title: 'FinFlow',
    description: 'AI-native financial reconciliation engine with five-pass matching and Ollama-powered anomaly detection.',
    url: 'https://sankartk.dev/projects/finflow',
    images: [{ url: 'https://sankartk.dev/finflow_thumbnail.png', width: 1200, height: 627 }],
  },
}

export default function FinFlow() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">FinFlow</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">Every break has a reason. FinFlow finds it automatically.</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                Five-pass reconciliation engine over Kafka-streamed transactions. Deterministic passes handle 90%+
                of breaks at high confidence. Ollama resolves the rest in plain language.
                pgvector remembers every anomaly so patterns don&apos;t slip through twice.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Python","Apache Kafka","PostgreSQL","pgvector","Ollama","llama3.2","FastAPI","Strawberry GraphQL","Streamlit","Docker Compose","sentence-transformers"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/finflow" className="bg-violet-700 hover:bg-violet-600 text-white font-bold px-4 py-2 rounded-lg text-sm sm:flex-shrink-0 transition-colors sm:mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// recon_run_2024-09-01.log</p>
              <h2 className="text-xl font-bold text-gray-900">The problem</h2>
            </div>
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-sm leading-relaxed border border-slate-800">
              <p className="text-red-400">[BREAK] TXN-8821 — no ledger match</p>
              <p className="text-slate-500 mt-1">amount: $4,217.50 &nbsp; entity: PARTNER_C &nbsp; date: 2024-08-29</p>
              <p className="text-yellow-300 mt-3">analyst: is this a timing issue or a real break?</p>
              <p className="text-slate-500">analyst: pulling ledger export...</p>
              <p className="text-slate-500">analyst: checking VLOOKUP... sorting by date...</p>
              <p className="text-slate-500">analyst: found it — ledger says 2024-09-01</p>
              <p className="text-slate-600 mt-3 italic">46 more breaks in the queue.</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reconciliation breaks are inevitable. Timing drift, reference typos, rounding — they happen every day
              across every payment system. The cost isn&apos;t the break. It&apos;s the analyst spending 20 minutes per break
              ruling out the obvious cases before they can see the real problem.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              I built FinFlow to push the deterministic work into code. Exact matches go instantly.
              Timing gaps get a 3-day tolerance window. Fuzzy references run Levenshtein distance.
              Amount deltas get a 1% threshold pass. Only the truly ambiguous cases ever reach the LLM —
              and the LLM is running locally via Ollama, zero API cost.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The second layer is memory. pgvector stores a 384-dimension embedding of every anomaly explanation.
              When a new anomaly fires, cosine similarity finds past anomalies that looked the same.
              Patterns that recur get caught faster each time.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-violet-100 bg-violet-50 p-5">
              <h4 className="font-bold text-violet-800 text-xs uppercase tracking-wide mb-3">What this solves</h4>
              <ul className="flex flex-col gap-2 text-sm text-violet-900">
                {[
                  "Manual break triage — analysts spending hours on timing and reference noise",
                  "No audit trail — match decisions were undocumented and unreplayable",
                  "Recurring anomalies going unnoticed — no cross-run pattern memory",
                  "AI-or-nothing tradeoffs — LLM only runs when the deterministic stack fails",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-violet-500 mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-bold text-gray-700 text-xs uppercase tracking-wide mb-3">Key metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Match Rate", "94%+"],
                  ["Passes", "5"],
                  ["LLM Cost", "$0 (local)"],
                  ["Latency", "60s cycle"],
                ].map(([label, value]) => (
                  <div key={String(label)} className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wide font-mono">{label}</span>
                    <span className="text-lg font-extrabold text-gray-900 leading-tight">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Architecture</h2>
        <p className="text-gray-500 text-sm mb-8">Four layers, each responsible for one concern, communicating via Kafka and PostgreSQL.</p>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              layer: "01 — Ingestion",
              color: "border-cyan-400",
              label: "bg-cyan-700",
              items: [
                "Producer generates multi-source mock transactions with realistic drift",
                "Consumer reads Kafka, writes to PostgreSQL with checkpoint-based replay",
                "ON CONFLICT DO NOTHING — idempotent, safe to restart anywhere",
              ],
              tech: ["Kafka","asyncpg","confluent-kafka"],
            },
            {
              layer: "02 — Reconciliation",
              color: "border-violet-400",
              label: "bg-violet-700",
              items: [
                "Engine polls every 60s, pulls unreconciled IDs from last 48h",
                "Runs five ordered passes, each narrowing the unmatched set",
                "Writes results and audit trail — every decision is traceable",
              ],
              tech: ["Python","PostgreSQL","Levenshtein"],
            },
            {
              layer: "03 — Agent",
              color: "border-amber-400",
              label: "bg-amber-700",
              items: [
                "Polls completed runs every 90s for four anomaly types",
                "Ollama llama3.2 explains each anomaly in 2–3 sentences",
                "sentence-transformers embeds explanation → pgvector stores it",
              ],
              tech: ["Ollama","pgvector","sentence-transformers"],
            },
            {
              layer: "04 — API + Dashboard",
              color: "border-emerald-400",
              label: "bg-emerald-700",
              items: [
                "FastAPI + Strawberry GraphQL — typed queries with playground UI",
                "REST endpoints for stats, runs, breakdowns, anomaly resolution",
                "Streamlit dashboard: match rate trend, anomaly cards, resolve button",
              ],
              tech: ["FastAPI","GraphQL","Streamlit"],
            },
          ].map(({ layer, color, label, items, tech }) => (
            <div key={layer} className={`rounded-xl border-t-4 ${color} bg-gray-50 p-5 flex flex-col gap-3`}>
              <span className={`text-[10px] font-mono font-bold text-white ${label} px-2 py-0.5 rounded self-start`}>{layer}</span>
              <ul className="flex flex-col gap-1.5">
                {items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                    <span className="text-gray-400 mt-0.5 flex-shrink-0">&#183;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-gray-200">
                {tech.map(t => (
                  <span key={t} className="text-[10px] font-mono bg-white border border-gray-200 text-gray-500 px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FIVE-PASS ENGINE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">The five-pass engine</h2>
        <p className="text-gray-500 text-sm mb-8">
          Each pass takes the transactions left unmatched by the previous one.
          Deterministic before probabilistic — the LLM only sees what nothing else could handle.
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              pass: "Pass 1 — Exact Match",
              confidence: "1.00",
              color: "text-violet-600",
              bar: "bg-violet-500",
              pct: "100%",
              description: "Entity + currency + amount + (transaction ID or reference). Fastest possible match, highest confidence. No tolerance applied.",
            },
            {
              pass: "Pass 2 — Timing Tolerance",
              confidence: "0.95",
              color: "text-indigo-600",
              bar: "bg-indigo-500",
              pct: "95%",
              description: "Same fields, but allows up to 3-day date difference. Catches settlement timing drift between source and ledger.",
            },
            {
              pass: "Pass 3 — Fuzzy Reference",
              confidence: "0.85",
              color: "text-blue-600",
              bar: "bg-blue-500",
              pct: "85%",
              description: "Entity + currency + amount + Levenshtein distance ≤ 4 on reference strings. Catches typos, truncation, and format variants. Confidence decreases 0.02 per distance unit.",
            },
            {
              pass: "Pass 4 — Amount Threshold",
              confidence: "0.80",
              color: "text-sky-600",
              bar: "bg-sky-500",
              pct: "80%",
              description: "Entity + currency + reference + amount within 1%. Catches rounding errors, FX conversion deltas, and small fee variances.",
            },
            {
              pass: "Pass 5 — AI Resolution",
              confidence: "0.60–0.75",
              color: "text-cyan-600",
              bar: "bg-cyan-500",
              pct: "68%",
              description: "Batches of 10 unmatched transactions sent to Ollama llama3.2. Structured JSON response. Used only for true residual breaks that no deterministic pass could handle.",
            },
          ].map(({ pass, confidence, color, bar, pct, description }) => (
            <div key={pass} className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm text-gray-900">{pass}</span>
                  <span className={`text-xs font-mono font-bold ${color}`}>conf {confidence}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
              </div>
              <div className="sm:w-24 flex flex-col gap-1 flex-shrink-0">
                <div className="h-1.5 bg-gray-200 rounded overflow-hidden w-full">
                  <div className={`h-1.5 rounded ${bar}`} style={{ width: pct }}/>
                </div>
                <span className={`text-[10px] font-mono text-right ${color}`}>{pct}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ANOMALY DETECTION */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">AI anomaly detection</h2>
        <p className="text-gray-500 text-sm mb-8">
          The agent runs every 90s after reconciliation completes. It detects four structural anomaly types,
          explains each one in plain language, embeds the explanation, and uses pgvector to find similar past events.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              type: "volume_spike",
              trigger: "Unmatched count &gt; 2× 7-day rolling average",
              color: "border-amber-400 bg-amber-50",
              badge: "bg-amber-100 text-amber-800",
              description: "Sudden surge in unmatched transactions — usually signals a feed interruption or upstream schema change.",
            },
            {
              type: "unusual_break_pattern",
              trigger: "Break rate &gt; 20% of run volume",
              color: "border-orange-400 bg-orange-50",
              badge: "bg-orange-100 text-orange-800",
              description: "The overall ratio of breaks to matched is unusually high for this run — not a volume spike, but a quality signal.",
            },
            {
              type: "entity_concentration",
              trigger: "One entity &gt; 40% of breaks",
              color: "border-red-400 bg-red-50",
              badge: "bg-red-100 text-red-800",
              description: "Breaks are clustering around a single counterparty — likely a formatting change on their side or a new data contract.",
            },
            {
              type: "systematic_mismatch",
              trigger: "One source system &gt; 15% of run unmatched",
              color: "border-rose-400 bg-rose-50",
              badge: "bg-rose-100 text-rose-800",
              description: "A specific source system is consistently failing to match — typically a field mapping regression or deployment artifact.",
            },
          ].map(({ type, trigger, color, badge, description }) => (
            <div key={type} className={`rounded-xl border-l-4 p-5 flex flex-col gap-2 ${color}`}>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${badge}`}>{type}</span>
              </div>
              <p className="text-[11px] font-mono text-gray-500" dangerouslySetInnerHTML={{ __html: trigger }}/>
              <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
              <p className="text-xs text-gray-500 italic">
                Ollama explains in 2–3 sentences &rarr; sentence-transformers embeds &rarr; pgvector finds similar past anomalies (cosine sim &gt; 0.85)
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Design decisions</h2>
        <p className="text-gray-500 text-sm mb-8">The choices that shaped the architecture.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Deterministic before probabilistic",
              body: "Passes 1–4 use exact logic — no LLM involved. This means 90%+ of matches carry confidence ≥ 0.80 with zero token cost. Ollama is reserved for true residual ambiguity, keeping costs at zero and latency predictable.",
            },
            {
              title: "Kafka checkpoint replay",
              body: "The consumer stores (topic, partition, offset) in PostgreSQL. On restart, it replays from the last committed offset. Combined with ON CONFLICT DO NOTHING inserts, the pipeline is fully idempotent — safe to kill and restart at any point.",
            },
            {
              title: "pgvector as anomaly memory",
              body: "Every anomaly explanation is embedded to 384 dimensions via sentence-transformers and indexed with an IVFFlat cosine index. This lets the agent ask 'have we seen something like this before?' across all history in a single SQL query.",
            },
          ].map(({ title, body }) => (
            <div key={title} className="flex flex-col gap-2">
              <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GRAPHQL EXAMPLE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">GraphQL API</h2>
        <p className="text-gray-500 text-sm mb-6">Strawberry GraphQL at <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">/graphql</code> — playground UI included.</p>
        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 font-mono text-sm overflow-x-auto">
          <p className="text-slate-500 mb-3"># fetch the last 5 runs with match breakdown</p>
          <p className="text-violet-400">query {"{"}</p>
          <p className="text-white ml-4">runs(limit: 5) {"{"}</p>
          <p className="text-cyan-300 ml-8">id startedAt matchedCount unmatchedCount</p>
          <p className="text-white ml-4">{"}"}</p>
          <p className="text-white ml-4">anomalies(status: <span className="text-amber-300">&quot;open&quot;</span>) {"{"}</p>
          <p className="text-cyan-300 ml-8">id anomalyType severity explanation resolvedAt</p>
          <p className="text-white ml-4">{"}"}</p>
          <p className="text-violet-400">{"}"}</p>
        </div>
      </section>

      <footer className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-400 border-t border-gray-100">
        <span>Newark, DE &middot; karthicks399@gmail.com</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sankartk11" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sankartk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}
