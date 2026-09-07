import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'regwatch — Sankar Kalyanakumar',
  description: 'The compliance gate between an AI trading signal and the broker — five hard rules, an immutable audit trail, and an LLM that reads new SEC filings.',
}

export default function Regwatch() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">regwatch</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">An AI wrote a trading signal. Who checks it before money moves?</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                A compliance gate that sits between a strategy and the broker. Every proposed trade is checked against
                a rule engine before it can execute — and every check, pass or fail, lands in an audit trail that can&apos;t be edited later.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Python","Ollama","SEC EDGAR","SQLite","Streamlit","pytest"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/regwatch" className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-4 py-2 rounded-lg text-sm sm:flex-shrink-0 transition-colors sm:mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// why this exists</p>
              <h2 className="text-xl font-bold text-gray-900">This stopped being hypothetical</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The EU AI Act now requires &ldquo;meaningful human oversight&rdquo; for high-impact AI decisions, and trading is
              explicitly in scope. The SEC has enforcement actions in flight over AI-washing — firms claiming AI-driven
              strategies with no controls to prove it.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Meanwhile, the actual pattern at most shops is: model produces signal → signal goes to broker →
              someone finds out about the problem from the P&amp;L. The missing piece isn&apos;t a report after the fact.
              It&apos;s a gate <em>before</em> execution. That&apos;s what regwatch is.
            </p>
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-sm leading-relaxed border border-slate-800">
              <p className="text-slate-500">$ python scripts/check_trade.py --symbol AAPL --side buy --qty 100 --price 150 \</p>
              <p className="text-slate-500">&nbsp;&nbsp;--rationale &quot;Momentum signal, top decile&quot; --llm-confidence 0.85</p>
              <p className="text-red-400 mt-2">✗ BLOCKED</p>
              <p className="text-slate-400">&nbsp;&nbsp;[HARD] AI Governance: AI-generated trade executed without human approval.</p>
              <p className="text-slate-400">&nbsp;&nbsp;High-impact AI systems require human-in-the-loop per EU AI Act Art. 14.</p>
              <p className="text-slate-600 mt-2">&nbsp;&nbsp;audit_id: 4f2c…91aa — written to the trail either way.</p>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-amber-100 bg-amber-50 p-5">
              <h4 className="font-bold text-amber-800 text-xs uppercase tracking-wide mb-3">What this shows</h4>
              <ul className="flex flex-col gap-2 text-sm text-amber-900">
                <li>• I understand where AI regulation meets running code, not just headlines</li>
                <li>• I design for auditability from the start, not as a bolt-on</li>
                <li>• I know when <em>not</em> to let an LLM act — and can build the gate that enforces it</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-bold text-gray-700 text-xs uppercase tracking-wide mb-3">The part I like most</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                New regulations arrive as 80-page PDFs, not code. So regwatch pulls fresh SEC filings, has a local LLM
                draft candidate rules — and puts them in a review queue. The AI proposes, the compliance officer disposes.
                Which is exactly what the AI governance rule demands of everyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <p className="text-xs font-mono text-gray-400 mb-1">// the gate</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Five rules, two speeds</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "Position limit", sev: "hard block", d: "A trade that would put more than 10% of the book in one name doesn't execute." },
            { name: "Restricted list", sev: "hard block", d: "Securities the firm can't touch — insider windows, underwriting, watchlists." },
            { name: "Wash trade", sev: "hard block", d: "Buy and sell of the same name within five minutes. A classic manipulation pattern." },
            { name: "Concentration", sev: "soft flag", d: "Portfolio-level Herfindahl index or top-5 weight drifting too high. Review, don't block." },
            { name: "AI governance", sev: "hard block", d: "LLM-generated trades need human approval, minimum model confidence, and a written rationale." },
          ].map(({ name, sev, d }) => (
            <div key={name} className="rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{name}</h3>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${sev === "hard block" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}`}>{sev}</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">{d}</p>
            </div>
          ))}
          <div className="rounded-xl bg-slate-950 p-5 border border-slate-800 flex flex-col justify-center">
            <p className="text-slate-300 text-xs leading-relaxed">
              Hard rules run first and short-circuit. Soft rules flag and notify. A broken alert handler can&apos;t crash the engine —
              and a compliance record that can be edited isn&apos;t a compliance record, so every model is frozen.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIT */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <p className="text-xs font-mono text-gray-400 mb-1">// the trail</p>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Six months later, &ldquo;why did this trade go through?&rdquo; is a query, not an archaeology project</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-6">
          Every check writes an append-only row: what was proposed, which rules ran, what they found, when. Indexed by
          decision ID. The Streamlit dashboard browses it — checks by day, violations by rule, the full trail.
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/Sankartk/regwatch" className="text-sm font-bold text-amber-600 hover:text-amber-500 transition-colors" target="_blank" rel="noopener noreferrer">Read the full README on GitHub &rarr;</a>
          <a href="/" className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">&larr; Back to all projects</a>
        </div>
      </section>
    </main>
  )
}
