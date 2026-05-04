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

      {/* STREAMLIT DASHBOARD OUTPUT */}
      <section className="bg-slate-950 py-12 border-y border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-mono text-slate-500 mb-1">// live output</p>
              <h2 className="text-xl font-bold text-white">Streamlit dashboard</h2>
              <p className="text-slate-400 text-sm mt-1">Auto-refreshes every 30s. Four panels: KPIs, run history, pass breakdown, anomaly queue.</p>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"/>
              :8501
            </span>
          </div>

          {/* KPI header */}
          <div className="rounded-t-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
              <span className="text-xs font-mono text-violet-400 font-bold">&#9670; FinFlow &mdash; Reconciliation Dashboard</span>
              <span className="text-[10px] font-mono text-slate-500">&#x21bb; refreshed 3s ago</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-px bg-slate-800">
              {[
                { label: "Match Rate",   value: "94.2%",  color: "#a78bfa", sub: "last run" },
                { label: "Matched",      value: "1,884",  color: "#4ade80", sub: "transactions" },
                { label: "Breaks",       value: "116",    color: "#f87171", sub: "unmatched" },
                { label: "Open Anomaly", value: "3",      color: "#fbbf24", sub: "needs review" },
                { label: "Total Runs",   value: "48",     color: "#94a3b8", sub: "since deploy" },
              ].map(({ label, value, color, sub }) => (
                <div key={label} className="bg-slate-950 p-3 text-center">
                  <p className="text-[8px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                  <p className="text-lg sm:text-2xl font-extrabold leading-none mt-1" style={{ color }}>{value}</p>
                  <p className="text-[8px] text-slate-600 mt-0.5">{sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* run history + pass breakdown */}
          <div className="grid sm:grid-cols-3 gap-0 border-x border-b border-slate-800">
            {/* run history chart */}
            <div className="sm:col-span-2 p-4 border-b sm:border-b-0 sm:border-r border-slate-800">
              <p className="text-[9px] font-mono text-slate-500 mb-3">// match rate trend &mdash; last 10 runs</p>
              <svg viewBox="0 0 300 80" width="100%">
                {[16,32,48,64].map(y => (
                  <line key={y} x1="32" y1={y} x2="300" y2={y} stroke="#1e293b" strokeWidth="0.6"/>
                ))}
                {[["98%",16],["95%",32],["90%",48],["85%",64]].map(([l,y]) => (
                  <text key={String(y)} x="28" y={Number(y)+3} textAnchor="end" fontSize="5" fill="#475569">{l}</text>
                ))}
                {/* area fill */}
                <polygon points="40,52 67,48 94,44 121,56 148,38 175,34 202,28 229,24 256,26 283,20 283,72 256,72 229,72 202,72 175,72 148,72 121,72 94,72 67,72 40,72" fill="#7c3aed" opacity="0.12"/>
                {/* line */}
                <polyline points="40,52 67,48 94,44 121,56 148,38 175,34 202,28 229,24 256,26 283,20" fill="none" stroke="#a78bfa" strokeWidth="1.5"/>
                {/* dots */}
                {[[40,52],[67,48],[94,44],[121,56],[148,38],[175,34],[202,28],[229,24],[256,26],[283,20]].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="2" fill={i === 9 ? "#a78bfa" : "#4c1d95"} stroke="#a78bfa" strokeWidth="0.8"/>
                ))}
                {/* x labels */}
                {["Run 39","","41","","43","","45","","47","Run 48"].map((l,i) => l && (
                  <text key={i} x={40+i*27} y={78} textAnchor="middle" fontSize="4.5" fill="#475569">{l}</text>
                ))}
              </svg>
            </div>

            {/* pass breakdown */}
            <div className="p-4">
              <p className="text-[9px] font-mono text-slate-500 mb-3">// run #48 pass breakdown</p>
              <div className="flex flex-col gap-2">
                {[
                  ["Exact Match",      1243, "#a78bfa", 66],
                  ["Timing Tol.",       389, "#818cf8", 57],
                  ["Fuzzy Ref.",        168, "#6366f1", 42],
                  ["Amt Threshold",      71, "#4f46e5", 22],
                  ["AI Resolution",      13, "#7c3aed",  8],
                ].map(([pass, count, color, pct]) => (
                  <div key={String(pass)}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] font-mono text-slate-400">{pass}</span>
                      <span className="text-[8px] font-mono" style={{ color: String(color) }}>{count}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded overflow-hidden">
                      <div className="h-1.5 rounded" style={{ background: String(color), width: `${Number(pct)}%` }}/>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
                <div className="bg-slate-900 rounded p-2 text-center">
                  <p className="text-[7px] text-slate-600 uppercase tracking-wide">AI used</p>
                  <p className="text-sm font-extrabold text-cyan-400">0.7%</p>
                </div>
                <div className="bg-slate-900 rounded p-2 text-center">
                  <p className="text-[7px] text-slate-600 uppercase tracking-wide">Token cost</p>
                  <p className="text-sm font-extrabold text-emerald-400">$0.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* anomaly queue */}
          <div className="rounded-b-xl border-x border-b border-slate-800 bg-[#0f172a] p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-mono text-slate-500">// open anomalies (3)</p>
              <span className="text-[9px] font-mono text-slate-600">sorted by severity</span>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { type: "volume_spike",         entity: "ENTITY_A", sev: "HIGH",   sevColor: "#f87171", sevBg: "bg-red-900/40",    msg: "Unmatched count 2.3× above 7-day rolling avg (116 vs avg 50). Possible feed interruption from SYSTEM_2 after 14:00 UTC.", similar: 2 },
                { type: "entity_concentration", entity: "ENTITY_B", sev: "MEDIUM", sevColor: "#fbbf24", sevBg: "bg-amber-900/40",  msg: "ENTITY_B accounts for 38% of all breaks this run. Reference format change detected — \"REF-\" prefix dropped in 3 consecutive runs.", similar: 1 },
                { type: "systematic_mismatch",  entity: "SYSTEM_3", sev: "LOW",    sevColor: "#94a3b8", sevBg: "bg-slate-800",     msg: "SYSTEM_3 contributing 17% of unmatched across last 4 runs. Consistent amount delta of $0.01–$0.03 suggests rounding mode change.", similar: 3 },
              ].map(({ type, entity, sev, sevColor, sevBg, msg, similar }) => (
                <div key={type} className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded ${sevBg}`} style={{ color: sevColor }}>{sev}</span>
                    <span className="text-[9px] font-mono text-violet-400 bg-violet-950 px-2 py-0.5 rounded">{type}</span>
                    <span className="text-[9px] font-mono text-cyan-400">{entity}</span>
                    <span className="ml-auto text-[8px] text-slate-500">{similar} similar in history</span>
                  </div>
                  <p className="text-[10px] text-slate-300 leading-relaxed mb-2">{msg}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] text-slate-500 font-mono">&#x1F9E0; Ollama llama3.2 &mdash; embedded to pgvector</span>
                    <button className="ml-auto text-[9px] font-bold bg-violet-700 text-white px-3 py-1 rounded hover:bg-violet-600">Resolve</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* ANOMALY RESOLUTION WORKFLOW */}
      <section className="bg-slate-950 py-12 border-y border-slate-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="text-xs font-mono text-slate-500 mb-1">// agent output</p>
          <h2 className="text-xl font-bold text-white mb-2">Anomaly resolution in practice</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-2xl">
            From raw unmatched transactions to Ollama explanation to pgvector similarity search to analyst resolution &mdash; the full loop.
          </p>
          <div className="grid lg:grid-cols-3 gap-4">

            {/* Step 1 — detection */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                <span className="text-[9px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">step 1</span>
                <span className="text-xs font-mono text-amber-400">detection</span>
              </div>
              <div className="p-4 font-mono text-xs">
                <p className="text-slate-500 mb-2"># anomaly_agent.py polling run #48</p>
                <p className="text-slate-300">unmatched_count = <span className="text-amber-300">116</span></p>
                <p className="text-slate-300">rolling_7d_avg  = <span className="text-cyan-300">50.3</span></p>
                <p className="text-slate-300">ratio = <span className="text-red-400">2.31</span>  <span className="text-slate-600"># {'>'} 2.0 threshold</span></p>
                <div className="mt-3 border-t border-slate-800 pt-3">
                  <p className="text-emerald-400">&#x2714; anomaly detected</p>
                  <p className="text-slate-400">type: <span className="text-amber-300">volume_spike</span></p>
                  <p className="text-slate-400">entity: <span className="text-cyan-300">ENTITY_A</span></p>
                  <p className="text-slate-400">severity: <span className="text-red-400">HIGH</span></p>
                </div>
              </div>
            </div>

            {/* Step 2 — Ollama explanation */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                <span className="text-[9px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">step 2</span>
                <span className="text-xs font-mono text-violet-400">ollama explain</span>
              </div>
              <div className="p-4">
                <p className="text-[9px] font-mono text-slate-500 mb-2">POST http://ollama:11434/api/generate</p>
                <div className="bg-slate-900 border border-slate-800 rounded p-3 mb-3">
                  <p className="text-[9px] font-mono text-slate-500 mb-1">prompt &rarr;</p>
                  <p className="text-[10px] text-slate-300 leading-relaxed">Run #48 has 116 unmatched vs avg 50. Entity ENTITY_A is concentrated. Explain in 2-3 sentences.</p>
                </div>
                <div className="bg-violet-950/40 border border-violet-800/40 rounded p-3">
                  <p className="text-[9px] font-mono text-violet-400 mb-1">llama3.2 &rarr;</p>
                  <p className="text-[10px] text-slate-200 leading-relaxed">ENTITY_A&apos;s transaction volume spiked 2.3× above the 7-day average in run #48, concentrated after 14:00 UTC. This pattern is consistent with a feed interruption or a schema change in the upstream SYSTEM_2 connector. Recommend checking SYSTEM_2 delivery logs for the 13:45–15:00 UTC window.</p>
                </div>
              </div>
            </div>

            {/* Step 3 — pgvector similarity + resolve */}
            <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
              <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center gap-2">
                <span className="text-[9px] font-mono text-slate-500 bg-slate-800 px-1.5 py-0.5 rounded">step 3</span>
                <span className="text-xs font-mono text-emerald-400">pgvector + resolve</span>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <p className="text-[9px] font-mono text-slate-500 mb-2">similar anomalies (cosine &gt; 0.85)</p>
                  {[
                    { run: "#31", score: "0.94", ago: "18d ago", note: "SYSTEM_2 outage" },
                    { run: "#19", score: "0.88", ago: "41d ago", note: "Schema migration" },
                  ].map(({ run, score, ago, note }) => (
                    <div key={run} className="flex items-center gap-2 bg-slate-900 rounded px-2 py-1.5 mb-1">
                      <span className="text-[8px] font-mono text-violet-400 w-8">{run}</span>
                      <span className="text-[8px] font-mono text-emerald-400 w-8">{score}</span>
                      <span className="text-[8px] text-slate-400 flex-1">{note}</span>
                      <span className="text-[8px] text-slate-600">{ago}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-800 pt-3">
                  <p className="text-[9px] font-mono text-slate-500 mb-2">analyst resolves</p>
                  <div className="bg-slate-900 rounded p-2 mb-2">
                    <p className="text-[9px] text-slate-400 font-mono">resolution_note:</p>
                    <p className="text-[10px] text-slate-300">Confirmed SYSTEM_2 connector restart at 13:52 UTC. Replay from offset 41820 initiated.</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-emerald-700 rounded px-3 py-1.5 text-center">
                      <span className="text-[10px] font-bold text-white">&#x2714; Mark Resolved</span>
                    </div>
                    <div className="bg-slate-800 rounded px-3 py-1.5 text-center">
                      <span className="text-[10px] text-slate-400">Snooze 1h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-2">GraphQL API</h2>
        <p className="text-gray-500 text-sm mb-6">
          Strawberry GraphQL at <code className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded">/graphql</code> — playground UI included.
          Typed queries over reconciliation runs, breaks, and anomalies.
        </p>
        <div className="grid lg:grid-cols-2 gap-4">
          {/* query */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
              <span className="w-2 h-2 rounded-full bg-violet-500"/>
              <span className="text-[10px] font-mono text-slate-500">query</span>
            </div>
            <div className="p-5 font-mono text-sm">
              <p className="text-slate-500 mb-3"># open anomalies + pass breakdown for run #48</p>
              <p className="text-violet-400">query {"{"}</p>
              <p className="text-white ml-4">anomalies(status: <span className="text-amber-300">&quot;open&quot;</span>) {"{"}</p>
              <p className="text-cyan-300 ml-8">id  anomalyType  severity</p>
              <p className="text-cyan-300 ml-8">explanation  similarCount  resolvedAt</p>
              <p className="text-white ml-4">{"}"}</p>
              <p className="text-white ml-4">matchBreakdown(runId: <span className="text-amber-300">48</span>) {"{"}</p>
              <p className="text-cyan-300 ml-8">passType  matchedCount  confidence</p>
              <p className="text-white ml-4">{"}"}</p>
              <p className="text-violet-400">{"}"}</p>
            </div>
          </div>
          {/* response */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border-b border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500"/>
              <span className="text-[10px] font-mono text-slate-500">response &mdash; 200 OK &mdash; 42ms</span>
            </div>
            <div className="p-5 font-mono text-xs overflow-auto max-h-80">
              <p className="text-slate-400">{`{"data": {`}</p>
              <p className="text-slate-400 ml-4">{`"anomalies": [`}</p>
              <p className="text-slate-400 ml-8">{"{"}</p>
              <p className="text-slate-300 ml-10">{`"id": `}<span className="text-amber-300">&quot;ANO-0041&quot;</span>,</p>
              <p className="text-slate-300 ml-10">{`"anomalyType": `}<span className="text-cyan-300">&quot;volume_spike&quot;</span>,</p>
              <p className="text-slate-300 ml-10">{`"severity": `}<span className="text-red-400">&quot;HIGH&quot;</span>,</p>
              <p className="text-slate-300 ml-10">{`"explanation": `}<span className="text-emerald-300">&quot;ENTITY_A volume 2.3× above 7d avg...&quot;</span>,</p>
              <p className="text-slate-300 ml-10">{`"similarCount": `}<span className="text-amber-300">2</span>,</p>
              <p className="text-slate-300 ml-10">{`"resolvedAt": `}<span className="text-slate-500">null</span></p>
              <p className="text-slate-400 ml-8">{"}"} ...</p>
              <p className="text-slate-400 ml-4">],</p>
              <p className="text-slate-400 ml-4">{`"matchBreakdown": [`}</p>
              <p className="text-slate-400 ml-8">{`{ "passType": `}<span className="text-cyan-300">&quot;exact_match&quot;</span>{`, "matchedCount": `}<span className="text-amber-300">1243</span>{`, "confidence": `}<span className="text-violet-300">1.0</span>{` },`}</p>
              <p className="text-slate-400 ml-8">{`{ "passType": `}<span className="text-cyan-300">&quot;timing_tolerance&quot;</span>{`, "matchedCount": `}<span className="text-amber-300">389</span>{`, "confidence": `}<span className="text-violet-300">0.95</span>{` },`}</p>
              <p className="text-slate-400 ml-8">{`{ "passType": `}<span className="text-cyan-300">&quot;ai_resolution&quot;</span>{`, "matchedCount": `}<span className="text-amber-300">13</span>{`, "confidence": `}<span className="text-violet-300">0.71</span>{` }`}</p>
              <p className="text-slate-400 ml-4">]</p>
              <p className="text-slate-400">{`}}`}</p>
            </div>
          </div>
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
