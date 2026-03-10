import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HERO - dark */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-10">
          <div className="flex items-start gap-5">
            <img src="/profile.jpg" className="w-14 h-14 rounded-full border-2 border-slate-700 object-cover flex-shrink-0 mt-1" alt="Sankar" />
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Software &amp; Data Engineer</p>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">Sankar Kalyanakumar</h1>
              <p className="text-slate-200 text-lg font-semibold leading-snug max-w-2xl mt-1">
                I build systems where bad data can&apos;t hide.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                6 years designing pipelines that validate before they propagate, fail loud instead of silent,
                and let humans approve before anything irreversible runs.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Python","SQL","AWS","Redshift","Glue","DynamoDB","Spring Boot","Terraform","Azure Synapse","Tableau"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
              <div className="flex gap-5 mt-1 text-sm">
                <a href="mailto:karthicks399@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">karthicks399@gmail.com</a>
                <a href="https://linkedin.com/in/sankartk11" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Sankartk" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES STRIP */}
      <section className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-7">
          <p className="text-slate-600 text-xs font-mono mb-5 uppercase tracking-widest">// how I think about engineering</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "◈",
                title: "Validate at the boundary",
                body: "Bad data shouldn't travel far. Catch it at ingestion, log exactly what failed and why, and stop the pipeline before the corruption spreads downstream.",
                accent: "text-emerald-400 border-emerald-800",
              },
              {
                icon: "⏸",
                title: "Pause before irreversible",
                body: "Automation is most dangerous right before it does something permanent. Build the gate first — approval, confirmation, timeout — then build the action.",
                accent: "text-blue-400 border-blue-800",
              },
              {
                icon: "◎",
                title: "Fail loud, not silent",
                body: "A pipeline that swallows errors and marks rows 'processed' is worse than one that crashes. If something is wrong, scream and stop. Silent failures cost weeks.",
                accent: "text-violet-400 border-violet-800",
              },
            ].map(({ icon, title, body, accent }) => (
              <div key={title} className={`bg-slate-800 rounded-xl p-5 border border-slate-700 flex flex-col gap-3`}>
                <span className={`text-2xl font-mono ${accent.split(' ')[0]}`}>{icon}</span>
                <h3 className={`text-sm font-bold text-white`}>{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-10 border-b border-gray-100">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-1">$ ls ~/projects</p>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Open source</h2>
          </div>
          <a href="https://github.com/Sankartk" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Sankartk</a>
        </div>

        {/* Project card — dark terminal style */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
            <span className="ml-3 text-xs font-mono text-slate-500">ops-copilot-bedrock</span>
          </div>

          <div className="grid md:grid-cols-5 gap-0">
            {/* LEFT */}
            <div className="md:col-span-2 p-7 flex flex-col gap-5 border-r border-slate-800">
              <div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <a href="/projects/ops-copilot" className="hover:text-blue-400 transition-colors">Ops Copilot</a>
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-mono">FAISS · sentence-transformers · Ollama · Bedrock · Step Functions · SNS · ECS</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    RAG over Markdown runbooks. Ask it what the alarm means and it quotes the exact runbook section — with the filename, so you can verify in 30 seconds, not 10 minutes.
                  </p>
                </div>
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    For incidents needing action: a Step Functions pipeline proposes an ECS rollback, then <em className="text-emerald-400 not-italic font-semibold">stops</em>. Operator gets an email with Approve/Reject. Nothing runs until someone clicks.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-2">
                <a href="/projects/ops-copilot" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">Full write-up →</a>
                <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-3 p-7 flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono text-slate-500 mb-3">// RAG path</p>
                <svg viewBox="0 0 460 52" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                  <defs>
                    <marker id="ar1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                    </marker>
                  </defs>
                  <rect x="4" y="10" width="80" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                  <text x="44" y="24" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontWeight="bold">Runbooks</text>
                  <text x="44" y="35" textAnchor="middle" fontSize="7" fill="#64748b">FAISS index</text>
                  <line x1="84" y1="26" x2="96" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                  <rect x="98" y="10" width="80" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                  <text x="138" y="24" textAnchor="middle" fontSize="8.5" fill="#60a5fa" fontWeight="bold">Question</text>
                  <text x="138" y="35" textAnchor="middle" fontSize="7" fill="#3b82f6">embed + search</text>
                  <line x1="178" y1="26" x2="190" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                  <rect x="192" y="10" width="80" height="32" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                  <text x="232" y="24" textAnchor="middle" fontSize="8.5" fill="#4ade80" fontWeight="bold">Top-K chunks</text>
                  <text x="232" y="35" textAnchor="middle" fontSize="7" fill="#22c55e">ranked context</text>
                  <line x1="272" y1="26" x2="284" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                  <rect x="286" y="10" width="84" height="32" rx="5" fill="#422006" stroke="#f59e0b" strokeWidth="1.3"/>
                  <text x="328" y="24" textAnchor="middle" fontSize="8.5" fill="#fbbf24" fontWeight="bold">LLM</text>
                  <text x="328" y="35" textAnchor="middle" fontSize="7" fill="#f59e0b">grounded answer</text>
                  <line x1="370" y1="26" x2="382" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                  <rect x="384" y="10" width="72" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                  <text x="420" y="24" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontWeight="bold">Answer</text>
                  <text x="420" y="35" textAnchor="middle" fontSize="7" fill="#64748b">+ source file</text>
                </svg>
              </div>

              <div>
                <p className="text-xs font-mono text-slate-500 mb-3">// Approval-gated remediation</p>
                <svg viewBox="0 0 460 52" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                  <defs>
                    <marker id="ar2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                    </marker>
                  </defs>
                  <rect x="4" y="10" width="72" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                  <text x="40" y="24" textAnchor="middle" fontSize="8.5" fill="#94a3b8" fontWeight="bold">CW Alarm</text>
                  <text x="40" y="35" textAnchor="middle" fontSize="7" fill="#64748b">JSON input</text>
                  <line x1="76" y1="26" x2="88" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                  <rect x="90" y="10" width="76" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                  <text x="128" y="24" textAnchor="middle" fontSize="8.5" fill="#60a5fa" fontWeight="bold">Triage λ</text>
                  <text x="128" y="35" textAnchor="middle" fontSize="7" fill="#3b82f6">classify + context</text>
                  <line x1="166" y1="26" x2="178" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                  <rect x="180" y="10" width="72" height="32" rx="5" fill="#4a0d25" stroke="#ec4899" strokeWidth="1.3"/>
                  <text x="216" y="24" textAnchor="middle" fontSize="8.5" fill="#f472b6" fontWeight="bold">⏸ SNS gate</text>
                  <text x="216" y="35" textAnchor="middle" fontSize="7" fill="#ec4899">PAUSE</text>
                  <line x1="252" y1="26" x2="264" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                  <rect x="266" y="10" width="84" height="32" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                  <text x="308" y="24" textAnchor="middle" fontSize="8.5" fill="#4ade80" fontWeight="bold">API callback</text>
                  <text x="308" y="35" textAnchor="middle" fontSize="7" fill="#22c55e">operator clicks</text>
                  <line x1="350" y1="26" x2="362" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                  <rect x="364" y="10" width="92" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                  <text x="410" y="24" textAnchor="middle" fontSize="8.5" fill="#60a5fa" fontWeight="bold">ECS rollback</text>
                  <text x="410" y="35" textAnchor="middle" fontSize="7" fill="#3b82f6">APPROVE only</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2 — ledger-reconciler */}
      <section className="max-w-5xl mx-auto px-6 pt-8 pb-10 border-b border-gray-100">
        {/* Project card — dark terminal style */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
            <span className="ml-3 text-xs font-mono text-slate-500">ledger-reconciler</span>
          </div>

          <div className="grid md:grid-cols-5 gap-0">
            {/* LEFT */}
            <div className="md:col-span-2 p-7 flex flex-col gap-5 border-r border-slate-800">
              <div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <a href="/projects/ledger-reconciler" className="hover:text-emerald-400 transition-colors">Ledger Reconciler</a>
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-mono">Python · SQLite · pandas · Streamlit · pytest</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-emerald-500 pl-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Multi-pass engine that compares internal ledger exports against bank statement feeds.
                    Four match strategies — exact, amount+date, reference+amount, fuzzy — tackle SWIFT truncation, FX rounding, and posting-day drift in that order.
                  </p>
                </div>
                <div className="border-l-2 border-blue-500 pl-3">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Every unmatched transaction is root-cause classified before a human sees it.
                    Break aging, daily match-rate trends, and open break drill-down in a live Streamlit dashboard.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-auto pt-2">
                <a href="/projects/ledger-reconciler" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Full write-up →</a>
                <a href="https://github.com/Sankartk/ledger-reconciler" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-3 p-7 flex flex-col gap-6">
              <div>
                <p className="text-xs font-mono text-slate-500 mb-3">// 4-pass matching pipeline</p>
                <svg viewBox="0 0 460 64" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                  <defs>
                    <marker id="ar3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                    </marker>
                  </defs>
                  {/* pass boxes */}
                  <rect x="4" y="14" width="84" height="36" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                  <text x="46" y="29" textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="bold">Feed Ingest</text>
                  <text x="46" y="41" textAnchor="middle" fontSize="7" fill="#64748b">CSV / JSON</text>
                  <line x1="88" y1="32" x2="98" y2="32" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                  <rect x="100" y="14" width="72" height="36" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                  <text x="136" y="29" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">Pass 1</text>
                  <text x="136" y="41" textAnchor="middle" fontSize="7" fill="#22c55e">Exact</text>
                  <line x1="172" y1="32" x2="182" y2="32" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                  <rect x="184" y="14" width="72" height="36" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                  <text x="220" y="29" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">Pass 2</text>
                  <text x="220" y="41" textAnchor="middle" fontSize="7" fill="#3b82f6">Amt + Date</text>
                  <line x1="256" y1="32" x2="266" y2="32" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                  <rect x="268" y="14" width="72" height="36" rx="5" fill="#422006" stroke="#f59e0b" strokeWidth="1.3"/>
                  <text x="304" y="29" textAnchor="middle" fontSize="8" fill="#fbbf24" fontWeight="bold">Pass 3</text>
                  <text x="304" y="41" textAnchor="middle" fontSize="7" fill="#f59e0b">Ref + Amt</text>
                  <line x1="340" y1="32" x2="350" y2="32" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                  <rect x="352" y="14" width="72" height="36" rx="5" fill="#3b0764" stroke="#a855f7" strokeWidth="1.3"/>
                  <text x="388" y="29" textAnchor="middle" fontSize="8" fill="#c084fc" fontWeight="bold">Pass 4</text>
                  <text x="388" y="41" textAnchor="middle" fontSize="7" fill="#a855f7">Fuzzy Amt</text>
                  <line x1="424" y1="32" x2="434" y2="32" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                  <rect x="436" y="20" width="20" height="24" rx="3" fill="#4a0d25" stroke="#ec4899" strokeWidth="1.3"/>
                  <text x="446" y="36" textAnchor="middle" fontSize="8" fill="#f472b6" fontWeight="bold">✗</text>
                </svg>
              </div>

              {/* mini dashboard preview */}
              <div>
                <p className="text-xs font-mono text-slate-500 mb-2">// live monitoring dashboard</p>
                <div className="rounded-lg border border-slate-700 bg-[#0f1117] overflow-hidden">
                  {/* mini KPI row */}
                  <div className="grid grid-cols-3 gap-0 border-b border-slate-800">
                    {[
                      { label: "Match Rate", value: "94.7%", color: "#a78bfa" },
                      { label: "Matched",    value: "341",   color: "#34d399" },
                      { label: "Breaks",     value: "37",    color: "#f87171" },
                    ].map(({ label, value, color }, i) => (
                      <div key={label} className={`p-3 text-center ${i < 2 ? "border-r border-slate-800" : ""}`}>
                        <p className="text-[10px] text-slate-600 uppercase tracking-widest">{label}</p>
                        <p className="text-lg font-extrabold leading-none mt-0.5" style={{ color }}>{value}</p>
                      </div>
                    ))}
                  </div>
                  {/* mini sparkline */}
                  <div className="p-3">
                    <p className="text-[10px] font-mono text-slate-600 mb-1.5">daily match rate — 30 days</p>
                    <svg viewBox="0 0 260 44" width="100%">
                      <defs>
                        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="7" x2="260" y2="7" stroke="#34d399" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.5"/>
                      {[25,37].map(y => <line key={y} x1="0" y1={y} x2="260" y2={y} stroke="#1e2535" strokeWidth="0.8"/>)}
                      <path d="M0,14 L18,12 L36,10 L54,16 L72,13 L90,11 L108,9 L126,14 L144,12 L162,10 L180,15 L198,11 L216,9 L234,12 L252,10 L260,11 L260,44 L0,44 Z" fill="url(#sg)"/>
                      <polyline points="0,14 18,12 36,10 54,16 72,13 90,11 108,9 126,14 144,12 162,10 180,15 198,11 216,9 234,12 252,10 260,11" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
                    </svg>
                    {/* break category mini-bars */}
                    <p className="text-[10px] font-mono text-slate-600 mb-1.5 mt-2">open breaks by category</p>
                    <div className="flex flex-col gap-1">
                      {[
                        { label: "missing_ext",  pct: 35, n: "13", color: "#fb923c" },
                        { label: "timing",       pct: 24, n: "9",  color: "#60a5fa" },
                        { label: "duplicate",    pct: 22, n: "8",  color: "#a78bfa" },
                        { label: "amt_mismatch", pct: 14, n: "5",  color: "#fbbf24" },
                      ].map(({ label, pct, n, color }) => (
                        <div key={label} className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-slate-500 w-24 flex-shrink-0">{label}</span>
                          <div className="flex-1 bg-slate-800 rounded-full h-1.5">
                            <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: color }}/>
                          </div>
                          <span className="text-[10px] font-bold w-4 text-right" style={{ color }}>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400">
        <span>Newark, DE &middot; karthicks399@gmail.com</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sankartk11" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sankartk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}
