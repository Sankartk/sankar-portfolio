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
                icon: "[x]",
                title: "Validate at the boundary",
                body: "Bad data shouldn't travel far. Catch it at ingestion, log exactly what failed and why, and stop the pipeline before the corruption spreads downstream.",
                accent: "text-emerald-400",
              },
              {
                icon: "||",
                title: "Pause before irreversible",
                body: "Automation is most dangerous right before it does something permanent. Build the gate first &mdash; approval, confirmation, timeout &mdash; then build the action.",
                accent: "text-blue-400",
              },
              {
                icon: "(!)",
                title: "Fail loud, not silent",
                body: "A pipeline that swallows errors and marks rows 'processed' is worse than one that crashes. If something is wrong, scream and stop. Silent failures cost weeks.",
                accent: "text-violet-400",
              },
            ].map(({ icon, title, body, accent }) => (
              <div key={title} className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex flex-col gap-3">
                <span className={`text-sm font-mono font-bold ${accent}`}>{icon}</span>
                <h3 className="text-sm font-bold text-white">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-10">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-1">$ ls ~/projects</p>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Open source work</h2>
          </div>
          <a href="https://github.com/Sankartk" className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Sankartk</a>
        </div>

        {/* 2x2 GRID â€” all 4 cards equal width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* CARD 01 â€” CashCast */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">cashcast &mdash; branch cash intelligence</span>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-white bg-cyan-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">01</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Cash Ops &middot; Python + ML</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    <a href="/projects/cashcast" className="hover:text-cyan-400 transition-colors">CashCast</a>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Python","FastAPI","Ridge Regression","Isolation Forest","Plotly.js","Swagger"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  &ldquo;Every branch pads its vault order 15&ndash;20% as a buffer. CashCast forecasts that demand with ML &mdash; the buffer becomes a number, not a guess.&rdquo;
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 flex-1">
                {[
                  "Ridge regression per branch, 730 days &mdash; avg MAPE 9.1%",
                  "Isolation Forest flags demand anomalies before vault gaps occur",
                  "14-day forecast with confidence bands + $1K-rounded order rec",
                  "AI narrative: peak day, seasonal delta, idle cash risk per branch",
                  "Plotly.js ops dashboard: vault status, charts, CSV export",
                  "Swagger at <code>/docs</code> &mdash; 5 tagged endpoints, fully documented",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Avg MAPE", value: "9.1%", c: "text-emerald-400" },
                  { label: "Tests", value: "14 / 14", c: "text-cyan-400" },
                  { label: "Branches", value: "6", c: "text-slate-300" },
                  { label: "Horizon", value: "14 days", c: "text-slate-300" },
                ].map(({ label, value, c }) => (
                  <div key={label} className="bg-slate-900 rounded px-2 py-1.5 text-center">
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wide mb-0.5 truncate">{label}</p>
                    <p className={`text-xs font-extrabold leading-none ${c}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#070c14] rounded-lg px-3 py-2 font-mono text-xs border border-slate-800">
                <p className="text-slate-500 mb-1">$ uvicorn app.main:app --reload --port 8001</p>
                <p className="text-cyan-400">&#x25B6;&nbsp; localhost:8001 &mdash; Plotly dashboard, drill-down, CSV export</p>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/cashcast" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/cashcast" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 02 â€” FleetPulse */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">fleetpulse &mdash; fleet maintenance ops</span>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-white bg-orange-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">02</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Fleet Ops &middot; Java</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    <a href="/projects/fleetpulse" className="hover:text-orange-400 transition-colors">FleetPulse</a>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Java 21","Spring Boot","PostgreSQL","Flyway"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-orange-600 pl-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  &ldquo;A truck breaks down. The service was six weeks overdue. The spreadsheet was the last to know.&rdquo;
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 flex-1">
                {[
                  "Hourly scheduler catches overdue maintenance before anyone checks",
                  "Idempotent alerts &mdash; same event fires once, not on every poll",
                  "Live ops dashboard: resolve alerts, KPIs update every 60s",
                  "25+ REST endpoints, Flyway migrations, role-based access",
                  "16 integration tests &mdash; zero failures across full lifecycle",
                  "PostgreSQL + Spring Data JPA, containerised with Docker Compose",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Endpoints", value: "25+", c: "text-orange-400" },
                  { label: "Tests", value: "16 / 16", c: "text-emerald-400" },
                  { label: "Stack", value: "Java 21", c: "text-slate-300" },
                  { label: "DB", value: "Postgres", c: "text-slate-300" },
                ].map(({ label, value, c }) => (
                  <div key={label} className="bg-slate-900 rounded px-2 py-1.5 text-center">
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wide mb-0.5 truncate">{label}</p>
                    <p className={`text-xs font-extrabold leading-none ${c}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#070c14] rounded-lg px-3 py-2 font-mono text-xs border border-slate-800">
                <p className="text-slate-500 mb-1">$ mvn clean verify -q</p>
                <p className="text-emerald-400">&#x25B6;&nbsp; PASSED &mdash; Tests: 16, Failures: 0, Errors: 0</p>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/fleetpulse" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/fleetpulse" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 03 â€” Ops Copilot */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">ops-copilot-bedrock &mdash; incident AI</span>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-white bg-blue-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">03</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Incident Response &middot; AWS</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    <a href="/projects/ops-copilot" className="hover:text-blue-400 transition-colors">Ops Copilot</a>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Python","AWS Bedrock","Step Functions","FAISS"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  &ldquo;2am. Service is down. The fix is buried somewhere in a 40-page runbook.&rdquo;
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 flex-1">
                {[
                  "FAISS-indexed runbooks &mdash; answers cite exact file and line number",
                  "LLM stays grounded: only quotes what it found, never invents steps",
                  "Step Functions pauses at SNS gate &mdash; nothing runs until approved",
                  "Human-in-the-loop: approve or reject before any remediation fires",
                  "Swap one env var to switch between Ollama (local) and AWS Bedrock",
                  "Modular retriever: swap FAISS for any vector store without rewriting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Vector DB", value: "FAISS", c: "text-blue-400" },
                  { label: "LLM", value: "Bedrock", c: "text-slate-300" },
                  { label: "Gate", value: "SNS", c: "text-slate-300" },
                  { label: "Workflow", value: "StepFn", c: "text-slate-300" },
                ].map(({ label, value, c }) => (
                  <div key={label} className="bg-slate-900 rounded px-2 py-1.5 text-center">
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wide mb-0.5 truncate">{label}</p>
                    <p className={`text-xs font-extrabold leading-none ${c}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#070c14] rounded-lg px-3 py-2 font-mono text-xs border border-slate-800">
                <p className="text-slate-500 mb-1">$ python query.py &quot;prod-db disk full&quot;</p>
                <p className="text-blue-400">&#x25B6;&nbsp; runbooks/db.md#L42 &mdash; awaiting SNS approval</p>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/ops-copilot" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 04 â€” Ledger Reconciler */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">ledger-reconciler &mdash; financial ops</span>
            </div>
            <div className="p-5 flex flex-col gap-4 flex-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-white bg-emerald-700 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">04</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Financial Ops &middot; Python</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white leading-tight">
                    <a href="/projects/ledger-reconciler" className="hover:text-emerald-400 transition-colors">Ledger Reconciler</a>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {["Python","SQLite","pandas","Streamlit"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded text-[10px] font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-emerald-600 pl-4">
                <p className="text-white text-sm font-semibold leading-snug">
                  &ldquo;Every break has a reason. They&apos;re just buried in 80 rows of noise before anyone can dig.&rdquo;
                </p>
              </div>
              <ul className="flex flex-col gap-1.5 flex-1">
                {[
                  "94.7% match rate &mdash; 720 transactions over a 30-day run",
                  "4 ordered passes: exact &rarr; amount+date &rarr; reference &rarr; fuzzy",
                  "Every break classified with root cause before a human sees it",
                  "Streamlit dashboard: trend chart, aging heatmap, break drill-down",
                  "SQLite audit log &mdash; every match decision is traceable and replayable",
                  "Handles timing diffs, format mismatches, and near-duplicate entries",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: "Match rate", value: "94.7%", c: "text-emerald-400" },
                  { label: "Txns", value: "720", c: "text-slate-300" },
                  { label: "Period", value: "30 days", c: "text-slate-300" },
                  { label: "Passes", value: "4", c: "text-slate-300" },
                ].map(({ label, value, c }) => (
                  <div key={label} className="bg-slate-900 rounded px-2 py-1.5 text-center">
                    <p className="text-[9px] font-mono text-slate-600 uppercase tracking-wide mb-0.5 truncate">{label}</p>
                    <p className={`text-xs font-extrabold leading-none ${c}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#070c14] rounded-lg px-3 py-2 font-mono text-xs border border-slate-800">
                <p className="text-slate-500 mb-1">$ python reconcile.py --month 2026-02</p>
                <p className="text-emerald-400">&#x25B6;&nbsp; 681 matched, 39 breaks &mdash; report ready in 1.3s</p>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/ledger-reconciler" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/ledger-reconciler" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

        </div>{/* end 2x2 grid */}
      </section>

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
