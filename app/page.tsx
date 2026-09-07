import Navbar from "../components/Navbar"

const projects = [
  {
    n: "01",
    name: "FinFlow",
    href: "/projects/finflow",
    github: "https://github.com/Sankartk/finflow",
    domain: "Financial reconciliation · Python",
    spine: "bg-violet-500",
    accent: "text-violet-700",
    hook: "Every reconciliation break has a reason. This finds it automatically.",
    story: "Kafka streams transactions in, five passes match them — exact, timing, fuzzy reference, amount, then a local LLM for the stubborn ones. pgvector remembers past anomalies so the same surprise never happens twice. 94% of breaks resolve without a human.",
    facts: [["auto-matched", "94.2%"], ["LLM cost", "$0"], ["passes", "5"]],
    preview: [
      ["Exact match", "1,243", 66, "#8b5cf6"],
      ["Timing tolerance", "389", 57, "#a78bfa"],
      ["Fuzzy reference", "168", 42, "#c4b5fd"],
      ["Amount threshold", "71", 22, "#ddd6fe"],
      ["AI resolution", "13", 8, "#7c3aed"],
    ],
    previewLabel: "match breakdown, latest run",
  },
  {
    n: "02",
    name: "regwatch",
    href: "/projects/regwatch",
    github: "https://github.com/Sankartk/regwatch",
    domain: "AI compliance · Python + LLM",
    spine: "bg-amber-500",
    accent: "text-amber-700",
    hook: "An AI wrote a trading signal. Who checks it before money moves?",
    story: "A gate between strategy and broker. Five rules — position limits, restricted lists, wash trades, concentration, and EU AI Act human-oversight — check every proposed trade. It also reads new SEC filings and drafts candidate rules for human review. Every check lands in an audit trail that can't be edited.",
    facts: [["rules", "5"], ["EU AI Act", "Art. 14"], ["audit", "immutable"]],
    preview: null,
    previewLabel: null,
  },
  {
    n: "03",
    name: "alpha-engine",
    href: "/projects/alpha-engine",
    github: "https://github.com/Sankartk/alpha-engine",
    domain: "Quant trading · Python",
    spine: "bg-emerald-500",
    accent: "text-emerald-700",
    hook: "Everyone has a strategy that “would have worked.” This tries to prove you wrong first.",
    story: "Signals are shifted a day before touching returns, so lookahead is structurally impossible. Every rebalance pays spread and market impact. Walk-forward validation exposes overfit strategies. Then the same weights go to Alpaca's paper API for real fills — the gap between backtest and paper is itself a measurement.",
    facts: [["strategies", "2"], ["metrics", "13"], ["lookahead", "impossible"]],
    preview: null,
    previewLabel: null,
  },
  {
    n: "04",
    name: "market-microstructure",
    href: "/projects/market-microstructure",
    github: "https://github.com/Sankartk/market-microstructure",
    domain: "Order book engine · C++20",
    spine: "bg-rose-500",
    accent: "text-rose-700",
    hook: "What happens inside an exchange between “buy” and “filled”?",
    story: "A limit order book that reads NASDAQ's real wire format and watches for manipulation in the same process — spoofing, layering, momentum ignition, quote stuffing. My first benchmark claimed 45ns per order; the real measured number was 673ns. Fixing the measurement taught me more than the code.",
    facts: [["add", "673ns"], ["cancel", "29ns"], ["detectors", "4"]],
    preview: null,
    previewLabel: null,
  },
  {
    n: "05",
    name: "CashCast",
    href: "/projects/cashcast",
    github: "https://github.com/Sankartk/cashcast",
    domain: "Cash forecasting · Python + ML",
    spine: "bg-cyan-500",
    accent: "text-cyan-700",
    hook: "Every branch pads its vault order 15–20% as a buffer. This turns the buffer into a number.",
    story: "Ridge regression per branch over 730 days, Isolation Forest to flag demand anomalies, a 14-day horizon with confidence bands. The guess becomes an order recommendation with a reason behind it.",
    facts: [["avg MAPE", "9.1%"], ["tests", "14/14"], ["horizon", "14d"]],
    preview: null,
    previewLabel: null,
  },
  {
    n: "06",
    name: "Ops Copilot",
    href: "/projects/ops-copilot",
    github: "https://github.com/Sankartk/ops-copilot-bedrock",
    domain: "Incident response · AWS",
    spine: "bg-blue-500",
    accent: "text-blue-700",
    hook: "2am. Service is down. The fix is buried in a 40-page runbook.",
    story: "RAG over your own runbooks — answers cite the exact file and line, and the LLM only quotes what it found. Remediation pauses at an SNS approval gate; nothing touches production until a human says so.",
    facts: [["vector db", "FAISS"], ["gate", "SNS"], ["workflow", "StepFn"]],
    preview: null,
    previewLabel: null,
  },
  {
    n: "07",
    name: "FleetPulse",
    href: "/projects/fleetpulse",
    github: "https://github.com/Sankartk/fleetpulse",
    domain: "Fleet ops · Java",
    spine: "bg-orange-500",
    accent: "text-orange-700",
    hook: "A truck breaks down. The service was six weeks overdue. The spreadsheet was the last to know.",
    story: "An hourly scheduler catches overdue maintenance before anyone checks. Alerts are idempotent — the same event fires once, not on every poll. 25+ endpoints, role-based access, 16/16 integration tests.",
    facts: [["endpoints", "25+"], ["tests", "16/16"], ["stack", "Java 21"]],
    preview: null,
    previewLabel: null,
  },
]

export default function Home() {
  return (
    <main className="bg-[#faf9f6] text-stone-900 min-h-screen font-sans">
      <Navbar />

      {/* HERO */}
      <section className="border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 pt-16 pb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/>
            <span className="text-xs font-medium text-emerald-700">Open to senior engineering roles</span>
            <span className="text-stone-300">·</span>
            <span className="text-xs text-stone-500">Newark, DE</span>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-8">
            <img
              src="/profile.jpg"
              className="w-20 h-20 rounded-2xl object-cover border border-stone-200 flex-shrink-0"
              alt="Sankar"
            />
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05] mb-4">
                Sankar Kalyanakumar
              </h1>
              <p className="text-xl text-stone-700 font-medium leading-snug max-w-xl mb-4">
                I build systems where bad data can&apos;t hide.
              </p>
              <p className="text-stone-500 text-[15px] leading-relaxed max-w-xl">
                Six years of data pipelines and backend systems in finance — reconciliation engines,
                forecasting services, the kind of infrastructure nobody notices until it breaks.
                The through-line: I don&apos;t trust my own input. Validate at the boundary,
                fail loud, and never let automation do something irreversible without a gate.
                Below is the work — every project runs, has tests, and has a write-up.
              </p>
              <div className="flex gap-5 mt-6 text-sm">
                <a href="mailto:karthicks399@gmail.com" className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-all">karthicks399@gmail.com</a>
                <a href="https://linkedin.com/in/sankartk11" className="font-medium text-stone-500 hover:text-stone-900 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Sankartk" className="font-medium text-stone-500 hover:text-stone-900 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-stone-200 bg-[#f4f3ef]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Three rules I keep coming back to</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Validate at the boundary",
                body: "I learned this one the hard way: once bad data gets three steps downstream, nobody trusts anything the pipeline produces. So I check at the door — log what failed, say why, stop the line.",
              },
              {
                title: "Pause before irreversible",
                body: "Automation is most dangerous right before it does something permanent. Every automated action I build gets a gate first — approval, confirmation, timeout — and only then the action.",
              },
              {
                title: "Fail loud, not silent",
                body: "The worst pipeline I ever inherited marked broken rows as “processed” and moved on. Weeks of quiet corruption. If something's wrong, my code screams. I'd rather get paged than get surprised.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-bold text-stone-900 text-sm mb-2">{title}</h3>
                <p className="text-stone-500 text-[13px] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400">Selected work</h2>
          <a href="https://github.com/Sankartk" className="text-xs text-stone-400 hover:text-stone-600 transition-colors" target="_blank" rel="noopener noreferrer">all code on GitHub ↗</a>
        </div>

        <div className="flex flex-col">
          {projects.map((p) => (
            <article key={p.n} className="relative pl-6 py-9 border-b border-stone-200 last:border-0 group">
              {/* spine */}
              <span className={`absolute left-0 top-9 bottom-9 w-[3px] rounded-full ${p.spine} opacity-70 group-hover:opacity-100 transition-opacity`}/>

              <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                <span className="font-mono text-xs text-stone-400">{p.n}</span>
                <h3 className="text-2xl font-bold tracking-tight">
                  <a href={p.href} className="hover:underline decoration-stone-300 underline-offset-4">{p.name}</a>
                </h3>
                <span className="text-xs text-stone-400">{p.domain}</span>
              </div>

              <p className={`text-[15px] font-semibold leading-snug max-w-2xl mb-3 ${p.accent}`}>
                {p.hook}
              </p>
              <p className="text-stone-500 text-sm leading-relaxed max-w-2xl mb-4">
                {p.story}
              </p>

              {/* facts */}
              <div className="flex gap-6 mb-4 flex-wrap">
                {p.facts.map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[10px] uppercase tracking-widest text-stone-400">{label}</p>
                    <p className="text-sm font-bold text-stone-800">{value}</p>
                  </div>
                ))}
              </div>

              {/* optional evidence preview */}
              {p.preview && (
                <div className="rounded-lg border border-stone-200 bg-white p-4 max-w-xl mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-3">{p.previewLabel}</p>
                  <div className="flex flex-col gap-2">
                    {p.preview.map(([label, count, pct, color]) => (
                      <div key={String(label)} className="flex items-center gap-3">
                        <span className="text-xs text-stone-500 w-28 flex-shrink-0">{label}</span>
                        <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-1.5 rounded-full" style={{ background: String(color), width: `${Number(pct)}%` }}/>
                        </div>
                        <span className="text-xs font-semibold text-stone-700 w-10 text-right">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-5 text-sm">
                <a href={p.href} className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-900 transition-all">Read the write-up</a>
                <a href={p.github} className="text-stone-400 hover:text-stone-700 transition-colors" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-stone-200 bg-[#f4f3ef]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">What I work with</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { domain: "Data", items: "Kafka, PostgreSQL, pgvector, Redshift, DynamoDB, Airflow, Glue" },
              { domain: "Backend", items: "Java 21, Spring Boot, FastAPI, GraphQL, Docker" },
              { domain: "Cloud & AI", items: "AWS (Bedrock, Step Functions, Lambda), Terraform, Ollama, FAISS" },
              { domain: "Quant & systems", items: "C++20, order books, ITCH 5.0, backtesting, walk-forward" },
            ].map(({ domain, items }) => (
              <div key={domain}>
                <h3 className="font-bold text-stone-900 text-sm mb-1.5">{domain}</h3>
                <p className="text-stone-500 text-[13px] leading-relaxed">{items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-lg mb-4">
            Hiring for this kind of work? I&apos;d like to hear about it.
          </h2>
          <p className="text-stone-500 text-sm max-w-md leading-relaxed mb-6">
            The projects above are the best representation of how I work. If that&apos;s the kind of
            engineer you need, my inbox is open.
          </p>
          <a
            href="mailto:karthicks399@gmail.com"
            className="inline-block bg-stone-900 hover:bg-stone-700 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            karthicks399@gmail.com →
          </a>
        </div>
      </section>

      <footer className="border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-stone-400">
          <span>Sankar Kalyanakumar · Newark, DE</span>
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/sankartk11" className="hover:text-stone-600 transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/Sankartk" className="hover:text-stone-600 transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
