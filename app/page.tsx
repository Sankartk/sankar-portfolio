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

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* CARD 01 - CashCast (featured) */}
          <div className="md:col-span-2 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">cashcast</span>
            </div>
            <div className="p-6 flex flex-col gap-5 flex-1">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-white bg-cyan-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">01</span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Cash Ops &middot; Python + ML</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white leading-tight">
                    <a href="/projects/cashcast" className="hover:text-cyan-400 transition-colors">CashCast</a>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Python","FastAPI","Ridge Regression","Isolation Forest","Plotly.js","Swagger"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-l-4 border-cyan-500 pl-5">
                <p className="text-white text-base font-semibold leading-snug">
                  &ldquo;Every bank branch pads its vault order by 15&ndash;20% as a &lsquo;just in case&rsquo; buffer. Across tens of thousands of branches that idle float adds up fast. CashCast uses ML to replace the buffer with a per-branch 14-day forecast.&rdquo;
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="flex flex-col gap-2">
                  {[
                    "Per-branch Ridge regression on 730 days &mdash; avg MAPE under 12% on holdout",
                    "Isolation Forest flags anomalous demand days before vault gaps happen",
                    "14-day forecast with confidence bands + safety-buffered $1K order rec",
                    "AI narrative per branch: peak day, seasonal delta, idle cash risk estimate",
                    "Full OpenAPI/Swagger docs at <code>/docs</code> &mdash; clone, run, explore",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-cyan-500 mt-0.5 flex-shrink-0">&rarr;</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <div className="rounded-lg border border-slate-700 bg-[#0f1117] p-4">
                    <p className="text-[9px] font-mono text-slate-500 mb-3 uppercase tracking-widest">model results &mdash; 6 branches</p>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[
                        { label: "Avg MAPE", value: "9.1%", color: "#4ade80" },
                        { label: "Tests", value: "14 / 14", color: "#22d3ee" },
                        { label: "Idle cut", value: "~15%", color: "#fbbf24" },
                      ].map(({ label, value, color }) => (
                        <div key={label} className="text-center">
                          <p className="text-[9px] text-slate-600 uppercase mb-0.5">{label}</p>
                          <p className="text-sm font-extrabold leading-none" style={{ color }}>{value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-slate-900 rounded px-3 py-2 font-mono text-xs">
                      <p className="text-slate-500 mb-0.5">$ pytest tests/ -v</p>
                      <p className="text-emerald-400">PASSED &mdash; 14 tests in 4.72s</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto flex-wrap">
                <a href="/projects/cashcast" className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/cashcast" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 02 - FleetPulse */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">fleetpulse</span>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-orange-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">02</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Fleet Ops &middot; Java</span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  <a href="/projects/fleetpulse" className="hover:text-orange-400 transition-colors">FleetPulse</a>
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {["Java 21","Spring Boot","PostgreSQL","Flyway"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
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
                  "25+ REST endpoints, 16 tests &mdash; zero failures",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-orange-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="bg-slate-900 rounded px-3 py-2 font-mono text-xs mt-1">
                <p className="text-slate-500 mb-0.5">$ mvn clean verify -q</p>
                <p className="text-emerald-400">PASSED &mdash; Tests: 16, Failures: 0</p>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/fleetpulse" className="text-sm font-bold text-orange-400 hover:text-orange-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/fleetpulse" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 03 - Ops Copilot */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">ops-copilot-bedrock</span>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">03</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Incident Response &middot; AWS</span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  <a href="/projects/ops-copilot" className="hover:text-blue-400 transition-colors">Ops Copilot</a>
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {["Python","AWS Bedrock","Step Functions","FAISS"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
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
                  "FAISS-indexed runbooks &mdash; answer with exact file and line number",
                  "LLM stays grounded: only quotes what it found, never invents",
                  "Step Functions pauses at SNS gate &mdash; nothing runs until approved",
                  "Swap one line to use Ollama locally or Amazon Bedrock in prod",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/ops-copilot" className="text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

          {/* CARD 04 - Ledger Reconciler */}
          <div className="md:col-span-2 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
              <span className="ml-3 text-xs font-mono text-slate-500">ledger-reconciler</span>
            </div>
            <div className="p-6 flex flex-col gap-4 flex-1">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-emerald-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">04</span>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Financial Ops &middot; Python</span>
                </div>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  <a href="/projects/ledger-reconciler" className="hover:text-emerald-400 transition-colors">Ledger Reconciler</a>
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {["Python","SQLite","pandas","Streamlit"].map(t => (
                    <span key={t} className="bg-slate-800 text-slate-400 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
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
                  "94.7% match rate &mdash; 720 transactions, 30-day run",
                  "4 ordered passes: exact &rarr; amount+date &rarr; reference &rarr; fuzzy",
                  "Every break classified with root cause before a human sees it",
                  "Streamlit dashboard: trend, aging heatmap, break drill-down",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">&rarr;</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/ledger-reconciler" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/ledger-reconciler" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

        </div>{/* end bento grid */}
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