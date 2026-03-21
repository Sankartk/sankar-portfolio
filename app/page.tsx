import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-2xl mx-auto px-6 pt-12 pb-10">
          <div className="flex items-start gap-4">
            <img src="/profile.jpg" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-slate-700 object-cover flex-shrink-0 mt-1" alt="Sankar" />
            <div className="flex flex-col gap-2 flex-1">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Software &amp; Data Engineer</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none">Sankar Kalyanakumar</h1>
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
        <div className="max-w-screen-2xl mx-auto px-6 py-7">
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
      <section className="max-w-screen-2xl mx-auto px-6 pt-12 pb-10">
        <div className="flex items-baseline justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-mono text-gray-400 mb-1">$ ls ~/projects</p>
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Open source work</h2>
          </div>
          <a href="https://github.com/Sankartk" className="text-xs text-blue-600 hover:underline flex-shrink-0" target="_blank" rel="noopener noreferrer">github.com/Sankartk</a>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              {/* CashCast Dashboard mockup */}
              <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
                {/* top bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 font-bold">&#9675; CashCast</span>
                  <span className="hidden sm:block text-xs font-mono text-slate-500">Branch Cash Intelligence</span>
                  <span className="text-xs text-slate-600">:8001</span>
                </div>
                {/* KPI row */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-slate-800 border-b border-slate-800">
                  {[
                    { label: "Branches",  value: "6",      color: "#22d3ee" },
                    { label: "Avg MAPE",  value: "9.1%",   color: "#4ade80" },
                    { label: "Total Rec", value: "$867K",  color: "#22d3ee" },
                    { label: "Horizon",   value: "14d",    color: "#94a3b8" },
                    { label: "Anomalies", value: "2",      color: "#fbbf24" },
                    { label: "High Risk", value: "1",      color: "#f87171" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-950 p-2.5 text-center">
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                      <p className="text-sm sm:text-lg font-extrabold leading-none mt-0.5" style={{ color }}>{value}</p>
                    </div>
                  ))}
                </div>
                {/* forecast chart + branch rec bars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  {/* forecast — 2/3 */}
                  <div className="sm:col-span-2 p-3 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// 14-day demand forecast &mdash; BRK-01 Downtown</p>
                    <svg viewBox="0 0 260 66" width="100%">
                      {[12,28,44,60].map(y => (
                        <line key={y} x1="26" y1={y} x2="260" y2={y} stroke="#1e293b" strokeWidth="0.7"/>
                      ))}
                      {[["$200K",12],["$150K",28],["$100K",44],["$50K",60]].map(([l,y]) => (
                        <text key={String(y)} x="22" y={Number(y)+3} textAnchor="end" fontSize="5.5" fill="#475569">{l}</text>
                      ))}
                      {/* confidence band */}
                      <polygon points="35,22 55,19 75,26 95,16 115,14 135,20 155,17 175,12 195,10 215,16 235,14 255,18 255,52 235,47 215,50 195,44 175,42 155,48 135,50 115,44 95,46 75,56 55,51 35,54" fill="#22d3ee" opacity="0.08"/>
                      {/* actual bars past 7 */}
                      {[[35,22],[55,19],[75,26],[95,16],[115,14],[135,20],[155,17]].map(([x,h],i) => (
                        <rect key={i} x={Number(x)-6} y={64-Number(h)} width="11" height={Number(h)} rx="1" fill="#22d3ee" opacity="0.45"/>
                      ))}
                      {/* forecast bars next 7 */}
                      {[[175,12],[195,10],[215,16],[235,14],[255,18]].map(([x,h],i) => (
                        <rect key={i} x={Number(x)-6} y={64-Number(h)} width="11" height={Number(h)} rx="1" fill="#22d3ee" opacity="0.18" stroke="#22d3ee" strokeWidth="0.5"/>
                      ))}
                      {/* trend line */}
                      <polyline points="35,38 55,35 75,42 95,30 115,28 135,34 155,32 175,26 195,24 215,30 235,28 255,32" fill="none" stroke="#22d3ee" strokeWidth="1.2"/>
                    </svg>
                  </div>
                  {/* branch order recs — 1/3 */}
                  <div className="p-3">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// order recs</p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        ["BRK-01","$148K","#4ade80",59],
                        ["BRK-02","$93K", "#4ade80",37],
                        ["BRK-03","$112K","#fbbf24",45],
                        ["BRK-04","$67K", "#4ade80",27],
                        ["BRK-05","$204K","#f87171",82],
                        ["BRK-06","$89K", "#4ade80",36],
                      ].map(([branch,rec,color,pct]) => (
                        <div key={String(branch)} className="flex items-center gap-1.5">
                          <span className="text-[8px] font-mono text-cyan-400 w-10 flex-shrink-0">{branch}</span>
                          <div className="flex-1 h-1 bg-slate-800 rounded overflow-hidden">
                            <div className="h-1 rounded" style={{ background: String(color), width: `${pct}%` }}/>
                          </div>
                          <span className="text-[8px] font-mono w-9 text-right" style={{ color: String(color) }}>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              {/* FleetPulse Dashboard mockup */}
              <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                  <span className="text-xs font-mono text-orange-400 font-bold">&#x2B21; FleetPulse</span>
                  <span className="hidden sm:block text-xs font-mono text-slate-500">Operations Dashboard</span>
                  <span className="text-xs text-slate-600">:8080</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800 border-b border-slate-800">
                  {[
                    { label: "Vehicles", value: "8",     color: "#f97316" },
                    { label: "Overdue",  value: "1",     color: "#f87171" },
                    { label: "Alerts",   value: "3",     color: "#c084fc" },
                    { label: "Tests",    value: "16/16", color: "#4ade80" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-950 p-2.5 text-center">
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                      <p className="text-base font-extrabold leading-none mt-0.5" style={{ color }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  <div className="sm:col-span-2 p-3 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// unresolved alerts</p>
                    <div className="rounded border border-slate-800 overflow-hidden">
                      <div className="grid grid-cols-3 bg-slate-900 px-2 py-1">
                        {["Vehicle","Type","Severity"].map(h => (
                          <span key={h} className="text-[8px] font-bold text-slate-600 uppercase">{h}</span>
                        ))}
                      </div>
                      {[
                        ["FP-TRK-003","MAINT_DUE",  "CRITICAL","#f87171"],
                        ["FP-VAN-007","LIC_EXPIRY", "HIGH",    "#fbbf24"],
                        ["FP-SUV-002","FUEL_LOW",   "MEDIUM",  "#60a5fa"],
                      ].map(([v,t,s,c]) => (
                        <div key={String(v)} className="grid grid-cols-3 px-2 py-1 border-t border-slate-800">
                          <span className="text-[9px] font-mono text-orange-400 truncate">{v}</span>
                          <span className="text-[9px] font-mono text-slate-500 truncate">{t}</span>
                          <span className="text-[9px] font-bold" style={{ color: String(c) }}>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// fleet status</p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        ["Active",  "#4ade80", 5, 8],
                        ["In Maint","#fbbf24", 2, 8],
                        ["Retired", "#f87171", 1, 8],
                      ].map(([label,color,n,total]) => (
                        <div key={String(label)} className="flex items-center gap-1.5">
                          <span className="text-[8px] text-slate-400 w-12 flex-shrink-0">{label}</span>
                          <div className="flex-1 h-1.5 bg-slate-800 rounded overflow-hidden">
                            <div className="h-1.5 rounded" style={{ background: String(color), width: `${(Number(n)/Number(total))*100}%` }}/>
                          </div>
                          <span className="text-[8px] font-bold w-3 text-right" style={{ color: String(color) }}>{n}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              {/* Ops Copilot RAG UI mockup */}
              <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                  <span className="text-xs font-mono text-blue-400 font-bold">&#9900; Ops Copilot</span>
                  <span className="hidden sm:block text-xs font-mono text-slate-500">RAG Interface</span>
                  <span className="text-xs text-slate-600">:8501</span>
                </div>
                <div className="p-3 border-b border-slate-800">
                  <p className="text-[9px] font-mono text-slate-500 mb-1.5">// incident query</p>
                  <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded px-3 py-1.5">
                    <span className="text-[10px] font-mono text-slate-300 flex-1">prod-db disk full &mdash; what do I do?</span>
                    <span className="text-[9px] bg-blue-700 text-white px-1.5 py-0.5 rounded font-mono flex-shrink-0">ask</span>
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-2">
                  <p className="text-[9px] font-mono text-slate-500">// answer &mdash; grounded in runbooks</p>
                  <div className="bg-slate-900 rounded border border-slate-800 p-2.5 flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[8px] bg-slate-800 text-blue-300 font-mono px-1.5 py-0.5 rounded flex-shrink-0">runbooks/db.md #L42</span>
                      <span className="text-[8px] text-slate-500">similarity 0.93</span>
                    </div>
                    <p className="text-[10px] text-slate-300 leading-relaxed">Run <code className="text-blue-400 bg-slate-800 px-0.5 rounded text-[9px]">df -h /var/lib/postgresql</code> to confirm. If &gt;90%, execute cleanup as per section 3.2.</p>
                    <div className="flex items-center gap-2 pt-1.5 border-t border-slate-800">
                      <span className="text-[8px] font-mono text-slate-500 flex-1">&#x1F512; remediation pending approval</span>
                      <span className="text-[9px] bg-emerald-700 text-white px-2 py-0.5 rounded font-bold">APPROVE</span>
                      <span className="text-[9px] bg-red-900 text-red-300 px-2 py-0.5 rounded font-bold">REJECT</span>
                    </div>
                  </div>
                </div>
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
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
              {/* Ledger Reconciler Dashboard mockup */}
              <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                  <span className="text-xs font-mono text-emerald-400 font-bold">&#9670; Ledger</span>
                  <span className="hidden sm:block text-xs font-mono text-slate-500">Reconciliation Dashboard</span>
                  <span className="text-xs text-slate-600">:8501</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800 border-b border-slate-800">
                  {[
                    { label: "Match Rate", value: "94.7%", color: "#34d399" },
                    { label: "Matched",    value: "681",   color: "#4ade80" },
                    { label: "Breaks",     value: "39",    color: "#f87171" },
                    { label: "Period",     value: "30d",   color: "#94a3b8" },
                  ].map(({ label, value, color }) => (
                    <div key={label} className="bg-slate-950 p-2.5 text-center">
                      <p className="text-[8px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                      <p className="text-base font-extrabold leading-none mt-0.5" style={{ color }}>{value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
                  <div className="sm:col-span-2 p-3 border-b sm:border-b-0 sm:border-r border-slate-800">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// open breaks</p>
                    <div className="rounded border border-slate-800 overflow-hidden">
                      <div className="grid grid-cols-3 bg-slate-900 px-2 py-1">
                        {["Reference","Category","Amount"].map(h => (
                          <span key={h} className="text-[8px] font-bold text-slate-600 uppercase">{h}</span>
                        ))}
                      </div>
                      {[
                        ["PMT-2026-0087","missing_ext",  "$14,250","#f87171"],
                        ["PMT-2026-0291","timing",       "$3,120", "#60a5fa"],
                        ["PMT-2026-0204","amt_mismatch", "$6,340", "#fbbf24"],
                      ].map(([r,c,a,col]) => (
                        <div key={String(r)} className="grid grid-cols-3 px-2 py-1 border-t border-slate-800">
                          <span className="text-[9px] font-mono text-emerald-400 truncate">{r}</span>
                          <span className="text-[9px] font-mono truncate" style={{ color: String(col) }}>{c}</span>
                          <span className="text-[9px] text-slate-300">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-[9px] font-mono text-slate-500 mb-2">// by category</p>
                    <div className="flex flex-col gap-1.5">
                      {[
                        ["missing_ext",  "#f87171",34],
                        ["timing",       "#60a5fa",23],
                        ["duplicate",    "#a78bfa",21],
                        ["amt_mismatch", "#fbbf24",15],
                        ["unresolved",   "#94a3b8", 7],
                      ].map(([label,color,pct]) => (
                        <div key={String(label)} className="flex items-center gap-1.5">
                          <span className="text-[8px] font-mono text-slate-500 w-16 flex-shrink-0 truncate">{label}</span>
                          <div className="flex-1 h-1.5 bg-slate-800 rounded overflow-hidden">
                            <div className="h-1.5 rounded" style={{ background: String(color), width: `${pct}%` }}/>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 pt-2 border-t border-slate-800 mt-auto">
                <a href="/projects/ledger-reconciler" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors">Full write-up &rarr;</a>
                <a href="https://github.com/Sankartk/ledger-reconciler" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
              </div>
            </div>
          </div>

        </div>{/* end 2x2 grid */}
      </section>

      <footer className="max-w-screen-2xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-400 border-t border-gray-100">
        <span>Newark, DE &middot; karthicks399@gmail.com</span>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sankartk11" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sankartk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </footer>
    </main>
  )
}
