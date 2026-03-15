import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
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
                accent: "text-emerald-400",
              },
              {
                icon: "⏸",
                title: "Pause before irreversible",
                body: "Automation is most dangerous right before it does something permanent. Build the gate first — approval, confirmation, timeout — then build the action.",
                accent: "text-blue-400",
              },
              {
                icon: "◎",
                title: "Fail loud, not silent",
                body: "A pipeline that swallows errors and marks rows 'processed' is worse than one that crashes. If something is wrong, scream and stop. Silent failures cost weeks.",
                accent: "text-violet-400",
              },
            ].map(({ icon, title, body, accent }) => (
              <div key={title} className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex flex-col gap-3">
                <span className={`text-2xl font-mono ${accent}`}>{icon}</span>
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-4">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-1">$ ls ~/projects</p>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Open source work</h2>
          </div>
          <a href="https://github.com/Sankartk" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Sankartk</a>
        </div>

        {/* CARD 01 — Ops Copilot */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-6">
          {/* window bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
            <span className="ml-3 text-xs font-mono text-slate-500">ops-copilot-bedrock</span>
          </div>

          <div className="p-7 flex flex-col gap-6">
            {/* header row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">01</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Incident Response · AWS</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <a href="/projects/ops-copilot" className="hover:text-blue-400 transition-colors">Ops Copilot</a>
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {["Python","AWS Bedrock","Step Functions","FAISS"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>

            {/* problem quote */}
            <div className="border-l-4 border-blue-600 pl-5">
              <p className="text-white text-xl font-semibold leading-snug">
                &ldquo;You&apos;re woken at 2am. The service is down. The runbook is 40 pages and somewhere in there is the three-step fix.&rdquo;
              </p>
            </div>

            {/* body — 2 cols */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Ops Copilot answers questions about your own runbooks. Ask what an alarm means, get back the exact section that explains it — with the filename so you can verify it yourself in under a minute.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  When the issue needs action, it proposes a fix — an ECS service rollback, for example — and then <em className="text-blue-400 not-italic font-semibold">stops</em>. An email goes out with an Approve or Reject link. Nothing runs until an operator clicks.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    "Runbooks indexed with FAISS — answer with the exact file + line",
                    "LLM stays grounded: only quotes what it found, never invents",
                    "Step Functions pipeline pauses at the SNS gate every time",
                    "Works with Ollama (local) or Amazon Bedrock — swap one config line",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-2">// ask a question, get the exact runbook section</p>
                  <svg viewBox="0 0 360 52" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                    <defs>
                      <marker id="ar1" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                      </marker>
                    </defs>
                    <rect x="4" y="10" width="64" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                    <text x="36" y="24" textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="bold">Runbooks</text>
                    <text x="36" y="35" textAnchor="middle" fontSize="6.5" fill="#64748b">FAISS index</text>
                    <line x1="68" y1="26" x2="78" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                    <rect x="80" y="10" width="68" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                    <text x="114" y="24" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">Question</text>
                    <text x="114" y="35" textAnchor="middle" fontSize="6.5" fill="#3b82f6">embed + search</text>
                    <line x1="148" y1="26" x2="158" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                    <rect x="160" y="10" width="62" height="32" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                    <text x="191" y="24" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">Top-K</text>
                    <text x="191" y="35" textAnchor="middle" fontSize="6.5" fill="#22c55e">context</text>
                    <line x1="222" y1="26" x2="232" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                    <rect x="234" y="10" width="52" height="32" rx="5" fill="#422006" stroke="#f59e0b" strokeWidth="1.3"/>
                    <text x="260" y="24" textAnchor="middle" fontSize="8" fill="#fbbf24" fontWeight="bold">LLM</text>
                    <text x="260" y="35" textAnchor="middle" fontSize="6.5" fill="#f59e0b">grounded</text>
                    <line x1="286" y1="26" x2="296" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar1)"/>
                    <rect x="298" y="10" width="58" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                    <text x="327" y="24" textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="bold">Answer</text>
                    <text x="327" y="35" textAnchor="middle" fontSize="6.5" fill="#64748b">+ source file</text>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-2">// approval gate — nothing happens until you click</p>
                  <svg viewBox="0 0 360 52" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                    <defs>
                      <marker id="ar2" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                      </marker>
                    </defs>
                    <rect x="4" y="10" width="56" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                    <text x="32" y="24" textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="bold">Alarm</text>
                    <text x="32" y="35" textAnchor="middle" fontSize="6.5" fill="#64748b">CloudWatch</text>
                    <line x1="60" y1="26" x2="70" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                    <rect x="72" y="10" width="60" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                    <text x="102" y="24" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">Triage λ</text>
                    <text x="102" y="35" textAnchor="middle" fontSize="6.5" fill="#3b82f6">classify</text>
                    <line x1="132" y1="26" x2="142" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                    <rect x="144" y="10" width="68" height="32" rx="5" fill="#4a0d25" stroke="#ec4899" strokeWidth="1.3"/>
                    <text x="178" y="22" textAnchor="middle" fontSize="8" fill="#f472b6" fontWeight="bold">⏸ SNS gate</text>
                    <text x="178" y="35" textAnchor="middle" fontSize="6.5" fill="#ec4899">email + PAUSE</text>
                    <line x1="212" y1="26" x2="222" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                    <rect x="224" y="10" width="66" height="32" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                    <text x="257" y="22" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">APPROVE</text>
                    <text x="257" y="35" textAnchor="middle" fontSize="6.5" fill="#22c55e">operator click</text>
                    <line x1="290" y1="26" x2="300" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar2)"/>
                    <rect x="302" y="10" width="54" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                    <text x="329" y="22" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">Rollback</text>
                    <text x="329" y="35" textAnchor="middle" fontSize="6.5" fill="#3b82f6">ECS service</text>
                  </svg>
                </div>
              </div>
            </div>

            {/* footer links */}
            <div className="flex gap-5 pt-2 border-t border-slate-800">
              <a href="/projects/ops-copilot" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">Full write-up →</a>
              <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        </div>

        {/* CARD 02 — Ledger Reconciler */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-6">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
            <span className="ml-3 text-xs font-mono text-slate-500">ledger-reconciler</span>
          </div>

          <div className="p-7 flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">02</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Financial Ops · Python</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <a href="/projects/ledger-reconciler" className="hover:text-emerald-400 transition-colors">Ledger Reconciler</a>
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {["Python","SQLite","pandas","Streamlit"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-emerald-600 pl-5">
              <p className="text-white text-xl font-semibold leading-snug">
                &ldquo;Every break your analyst investigates already has a reason. The problem is they&apos;re buried in 80 rows of noise before anyone can find them.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  Banks and internal systems constantly disagree on small things — a reference that got cut short, a payment that posts a day later, a foreign exchange amount rounded differently on each side. 80% of those are the same five patterns. This engine handles them automatically.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Four match passes run in order from strictest to loosest. The ones that go unmatched aren&apos;t thrown at an analyst as a mystery — they come with a root cause category and an age. The real problems stand out immediately.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    "94.7% match rate across 720 transactions in a 30-day run",
                    "4 ordered passes: exact → amount+date → reference+amount → fuzzy",
                    "Every break classified before a human sees it (timing, missing, mismatch...)",
                    "Streamlit dashboard: daily trend, aging heatmap, open break drill-down",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-2">// 4-pass matching — strictest method wins</p>
                  <svg viewBox="0 0 360 52" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                    <defs>
                      <marker id="ar3" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                      </marker>
                    </defs>
                    <rect x="4" y="10" width="62" height="32" rx="5" fill="#1e293b" stroke="#475569" strokeWidth="1.2"/>
                    <text x="35" y="24" textAnchor="middle" fontSize="7.5" fill="#94a3b8" fontWeight="bold">Ingest</text>
                    <text x="35" y="35" textAnchor="middle" fontSize="6.5" fill="#64748b">CSV / JSON</text>
                    <line x1="66" y1="26" x2="76" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                    <rect x="78" y="10" width="58" height="32" rx="5" fill="#052e16" stroke="#22c55e" strokeWidth="1.3"/>
                    <text x="107" y="23" textAnchor="middle" fontSize="7.5" fill="#4ade80" fontWeight="bold">Pass 1</text>
                    <text x="107" y="35" textAnchor="middle" fontSize="6.5" fill="#22c55e">Exact</text>
                    <line x1="136" y1="26" x2="146" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                    <rect x="148" y="10" width="58" height="32" rx="5" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.3"/>
                    <text x="177" y="23" textAnchor="middle" fontSize="7.5" fill="#60a5fa" fontWeight="bold">Pass 2</text>
                    <text x="177" y="35" textAnchor="middle" fontSize="6.5" fill="#3b82f6">Amt+Date</text>
                    <line x1="206" y1="26" x2="216" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                    <rect x="218" y="10" width="58" height="32" rx="5" fill="#422006" stroke="#f59e0b" strokeWidth="1.3"/>
                    <text x="247" y="23" textAnchor="middle" fontSize="7.5" fill="#fbbf24" fontWeight="bold">Pass 3</text>
                    <text x="247" y="35" textAnchor="middle" fontSize="6.5" fill="#f59e0b">Ref+Amt</text>
                    <line x1="276" y1="26" x2="286" y2="26" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar3)"/>
                    <rect x="288" y="10" width="58" height="32" rx="5" fill="#3b0764" stroke="#a855f7" strokeWidth="1.3"/>
                    <text x="317" y="23" textAnchor="middle" fontSize="7.5" fill="#c084fc" fontWeight="bold">Pass 4</text>
                    <text x="317" y="35" textAnchor="middle" fontSize="6.5" fill="#a855f7">Fuzzy</text>
                  </svg>
                </div>
                <div className="rounded-lg border border-slate-700 bg-[#0f1117] p-4">
                  <p className="text-[10px] font-mono text-slate-500 mb-3 uppercase tracking-widest">one reconciliation run — ACC-001</p>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[
                      { label: "Match Rate", value: "94.7%", color: "#a78bfa" },
                      { label: "Matched",    value: "341",   color: "#34d399" },
                      { label: "Breaks",     value: "37",    color: "#f87171" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="text-center">
                        <p className="text-[9px] text-slate-600 uppercase mb-0.5">{label}</p>
                        <p className="text-base font-extrabold leading-none" style={{ color }}>{value}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] font-mono text-slate-600 mb-1.5">break root causes</p>
                  <div className="flex flex-col gap-1">
                    {[
                      { label: "missing_ext",  pct: 35, n: 13, color: "#fb923c" },
                      { label: "timing",       pct: 24, n: 9,  color: "#60a5fa" },
                      { label: "duplicate",    pct: 22, n: 8,  color: "#a78bfa" },
                      { label: "amt_mismatch", pct: 14, n: 5,  color: "#fbbf24" },
                    ].map(({ label, pct, n, color }) => (
                      <div key={label} className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-slate-500 w-24 flex-shrink-0">{label}</span>
                        <div className="flex-1 bg-slate-800 rounded-full h-1.5">
                          <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: color }}/>
                        </div>
                        <span className="text-[9px] font-bold w-4 text-right" style={{ color }}>{n}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-2 border-t border-slate-800">
              <a href="/projects/ledger-reconciler" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Full write-up →</a>
              <a href="https://github.com/Sankartk/ledger-reconciler" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        </div>

        {/* CARD 03 — FleetPulse */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden mb-6">
          <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
            <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
            <span className="ml-3 text-xs font-mono text-slate-500">fleetpulse</span>
          </div>

          <div className="p-7 flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-orange-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">03</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Fleet Ops · Java</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <a href="/projects/fleetpulse" className="hover:text-orange-400 transition-colors">FleetPulse</a>
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5 justify-end">
                {["Java 21","Spring Boot","PostgreSQL","Flyway"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>

            <div className="border-l-4 border-orange-600 pl-5">
              <p className="text-white text-xl font-semibold leading-snug">
                &ldquo;A truck breaks down on the road. Someone just realized the service was six weeks overdue. The spreadsheet was the last to know.&rdquo;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  FleetPulse gives a fleet dispatcher one place to check on everything — which vehicles are active, which are in the shop, which have maintenance coming up, and which have already gone past their service date.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  A background job runs every hour, finds anything overdue, and raises an alert on the dashboard. The alert fires once — no repeated noise if you&apos;ve already seen it. The dashboard lets you resolve alerts directly, with KPIs refreshing automatically every 60 seconds.
                </p>
                <ul className="flex flex-col gap-2 mt-1">
                  {[
                    "Hourly scheduler detects overdue maintenance before anyone has to check",
                    "Idempotent alerts — same event only notifies once",
                    "Live ops dashboard: click Resolve, KPIs update instantly",
                    "25+ REST endpoints, full Swagger UI, Docker + PostgreSQL ready",
                    "16 tests, zero failures — JUnit 5 + Mockito",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-xs font-mono text-slate-500 mb-2">// 5 entities, one source of truth</p>
                  <svg viewBox="0 0 360 110" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
                    <defs>
                      <marker id="arfp" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                      </marker>
                    </defs>
                    <rect x="8" y="35" width="80" height="40" rx="6" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.3"/>
                    <text x="48" y="51" textAnchor="middle" fontSize="8.5" fill="#60a5fa" fontWeight="bold">Driver</text>
                    <text x="48" y="64" textAnchor="middle" fontSize="6.5" fill="#64748b">employeeId</text>
                    <text x="48" y="74" textAnchor="middle" fontSize="6.5" fill="#64748b">licenseExpiry</text>
                    <line x1="88" y1="55" x2="128" y2="55" stroke="#475569" strokeWidth="1" markerEnd="url(#arfp)"/>
                    <rect x="130" y="25" width="100" height="60" rx="6" fill="#1e293b" stroke="#f97316" strokeWidth="1.5"/>
                    <text x="180" y="45" textAnchor="middle" fontSize="9.5" fill="#f97316" fontWeight="bold">Vehicle</text>
                    <text x="180" y="58" textAnchor="middle" fontSize="6.5" fill="#64748b">registration</text>
                    <text x="180" y="68" textAnchor="middle" fontSize="6.5" fill="#64748b">status · fuelType</text>
                    <text x="180" y="78" textAnchor="middle" fontSize="6.5" fill="#64748b">currentMileage</text>
                    <line x1="230" y1="43" x2="272" y2="20" stroke="#475569" strokeWidth="1" markerEnd="url(#arfp)"/>
                    <line x1="230" y1="55" x2="272" y2="55" stroke="#475569" strokeWidth="1" markerEnd="url(#arfp)"/>
                    <line x1="230" y1="67" x2="272" y2="90" stroke="#475569" strokeWidth="1" markerEnd="url(#arfp)"/>
                    <rect x="274" y="6" width="78" height="28" rx="5" fill="#1e293b" stroke="#4ade80" strokeWidth="1.2"/>
                    <text x="313" y="18" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">Maintenance</text>
                    <text x="313" y="29" textAnchor="middle" fontSize="6" fill="#64748b">type · cost</text>
                    <rect x="274" y="41" width="78" height="28" rx="5" fill="#1e293b" stroke="#a78bfa" strokeWidth="1.2"/>
                    <text x="313" y="53" textAnchor="middle" fontSize="8" fill="#a78bfa" fontWeight="bold">Telematics</text>
                    <text x="313" y="64" textAnchor="middle" fontSize="6" fill="#64748b">mileage · fuel%</text>
                    <rect x="274" y="76" width="78" height="28" rx="5" fill="#1e293b" stroke="#f87171" strokeWidth="1.2"/>
                    <text x="313" y="88" textAnchor="middle" fontSize="8" fill="#f87171" fontWeight="bold">Alert</text>
                    <text x="313" y="99" textAnchor="middle" fontSize="6" fill="#64748b">severity · resolved</text>
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-px bg-slate-800 rounded-lg overflow-hidden border border-slate-800">
                  {[
                    { label: "Active",   value: "5", color: "#4ade80" },
                    { label: "Overdue",  value: "1", color: "#f87171" },
                    { label: "Alerts",   value: "3", color: "#c084fc" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-950 p-3 text-center">
                      <p className="text-[9px] text-slate-600 uppercase tracking-wide">{label}</p>
                      <p className="text-xl font-extrabold leading-none mt-0.5" style={{ color }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900 rounded-lg border border-slate-800 px-4 py-3 font-mono text-xs">
                  <p className="text-slate-500 mb-1">$ mvn clean verify -q</p>
                  <p className="text-emerald-400">✓ BUILD SUCCESS &nbsp;<span className="text-slate-500">Tests: 16, Failures: 0</span></p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-2 border-t border-slate-800">
              <a href="/projects/fleetpulse" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">Full write-up →</a>
              <a href="https://github.com/Sankartk/fleetpulse" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400 border-t border-gray-100">
        <span>Newark, DE &middot; karthicks399@gmail.com</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sankartk11" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sankartk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}
