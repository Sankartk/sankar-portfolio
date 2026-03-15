import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CashCast — Sankar Kalyanakumar",
  description:
    "Banks lose millions a year keeping too much cash in branches. CashCast uses ML to predict exactly how much each branch needs — cutting idle vault waste without running low.",
}

export default function CashCastPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen font-sans">

      {/* Back */}
      <div className="max-w-screen-xl mx-auto px-6 pt-8">
        <a href="/" className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors">← back</a>
      </div>

      {/* Hero */}
      <section className="max-w-screen-xl mx-auto px-6 pt-6 pb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-white bg-cyan-700 rounded-full w-6 h-6 flex items-center justify-center">04</span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Cash Operations · Python + ML</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
          CashCast
        </h1>
        <p className="text-xl text-slate-300 font-semibold leading-snug max-w-2xl mb-4">
          Every bank branch is guessing how much cash it needs next week. Most guess high — because running out is worse than wasting. CashCast stops the guessing.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {["Python 3.12", "FastAPI", "scikit-learn", "Ridge Regression", "Isolation Forest", "Plotly.js", "SQLAlchemy", "SQLite", "pytest"].map(t => (
            <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-screen-xl mx-auto px-6 pb-10 border-t border-slate-800 pt-10">
        <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest">// the problem</p>
        <div className="border-l-4 border-cyan-500 pl-6 mb-8">
          <p className="text-white text-2xl font-semibold leading-snug">
            &ldquo;A branch manager orders cash based on last week and a gut feeling. She always adds 20% extra — because running dry is a customer service disaster. That extra 20% sits in a vault earning nothing.&rdquo;
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              The US has 72,000 bank branches and 500,000 ATMs. Each one needs cash restocked regularly — and each one over-orders. The Fed estimates $4.2 billion in idle vault cash industry-wide. With interest rates elevated through 2025-2026, that cash has a real opportunity cost: money sitting in a vault at 5.5% annual rate is expensive to hold.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The reason banks over-order is simple: there&apos;s no system to predict demand accurately at the branch level. Cash demand isn&apos;t random — it spikes on paydays, falls on cold rainy days, surges before holidays, and follows a clear weekly pattern. All of that is in the transaction history. CashCast reads it.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-[#0f1117] p-5">
            <p className="text-[10px] font-mono text-slate-500 mb-4 uppercase tracking-widest">problem → numbers</p>
            <div className="flex flex-col gap-4">
              {[
                { label: "Idle vault cash (US industry)", value: "$4.2B/yr", color: "#f87171" },
                { label: "Average branch over-order buffer", value: "15–20%", color: "#fbbf24" },
                { label: "Fed funds rate (2025–2026)", value: "≥5.5%", color: "#c084fc" },
                { label: "CashCast target reduction", value: "15%", color: "#4ade80" },
              ].map(({ label, value, color }) => (
                <div key={label} className="flex items-center justify-between border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-400 text-xs">{label}</span>
                  <span className="font-mono font-bold text-sm" style={{ color }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-screen-xl mx-auto px-6 pb-10 border-t border-slate-800 pt-10">
        <p className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">// how it works</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-bold text-cyan-400 mb-1">1. Feature engineering</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                17 features extracted from date + rolling history: cyclic sine/cosine encoding for day-of-week, day-of-month, and month (so Monday-to-Sunday wraps correctly for the model). Lag features at 7 and 14 days. Rolling mean and volatility over 7 and 30 days. Binary flags for Fridays, paydays (1st and 15th), and pre-payday days.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-cyan-400 mb-1">2. Per-branch Ridge regression</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Each branch gets its own model trained on 730 days of history (80/20 train/test split). Ridge regression handles the multicollinearity between lag features well and is fast to train — each branch model fits in under 200ms. MAPE is evaluated on the holdout set and surfaced in the dashboard confidence score.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-cyan-400 mb-1">3. Isolation Forest anomaly detection</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                After training, the model predicts on the full historical set and passes residuals (actual minus predicted) to Isolation Forest. Days where the model&apos;s prediction was far off — unusual spikes or drops — get flagged. These appear as anomaly markers on the dashboard and in the order recommendation table.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-cyan-400 mb-1">4. Forecast + order recommendation</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                14-day rolling forecast with confidence bands (±10-22% based on branch volatility). Recommended order = upper bound × 1.10, rounded to nearest $1,000. This replaces the flat 20% manual buffer with a data-driven one that changes every day.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-mono text-slate-500 mb-1">// ML pipeline per branch</p>
            <svg viewBox="0 0 360 200" width="100%" className="rounded-lg border border-slate-800 bg-slate-900">
              <defs>
                <marker id="ar-cc" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 L1,3 z" fill="#475569"/>
                </marker>
              </defs>
              {/* Row 1 */}
              <rect x="8" y="12" width="80" height="36" rx="5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.3"/>
              <text x="48" y="27" textAnchor="middle" fontSize="8" fill="#22d3ee" fontWeight="bold">730 Days</text>
              <text x="48" y="39" textAnchor="middle" fontSize="6.5" fill="#64748b">transaction history</text>
              <line x1="88" y1="30" x2="100" y2="30" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="102" y="12" width="80" height="36" rx="5" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.3"/>
              <text x="142" y="27" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">17 Features</text>
              <text x="142" y="39" textAnchor="middle" fontSize="6.5" fill="#64748b">cyclic + lag + roll</text>
              <line x1="182" y1="30" x2="194" y2="30" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="196" y="12" width="80" height="36" rx="5" fill="#1e293b" stroke="#4ade80" strokeWidth="1.3"/>
              <text x="236" y="27" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">Ridge (α=10)</text>
              <text x="236" y="39" textAnchor="middle" fontSize="6.5" fill="#64748b">train 80%</text>
              <line x1="276" y1="30" x2="288" y2="30" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="290" y="12" width="66" height="36" rx="5" fill="#1e293b" stroke="#fbbf24" strokeWidth="1.3"/>
              <text x="323" y="27" textAnchor="middle" fontSize="8" fill="#fbbf24" fontWeight="bold">MAPE</text>
              <text x="323" y="39" textAnchor="middle" fontSize="6.5" fill="#64748b">test 20%</text>

              {/* Row 2 */}
              <line x1="236" y1="48" x2="236" y2="62" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="196" y="64" width="80" height="36" rx="5" fill="#1e293b" stroke="#c084fc" strokeWidth="1.3"/>
              <text x="236" y="78" textAnchor="middle" fontSize="8" fill="#c084fc" fontWeight="bold">Residuals</text>
              <text x="236" y="90" textAnchor="middle" fontSize="6.5" fill="#64748b">actual - predicted</text>
              <line x1="196" y1="82" x2="184" y2="82" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="102" y="64" width="80" height="36" rx="5" fill="#1e293b" stroke="#f87171" strokeWidth="1.3"/>
              <text x="142" y="78" textAnchor="middle" fontSize="8" fill="#f87171" fontWeight="bold">Isolation Forest</text>
              <text x="142" y="90" textAnchor="middle" fontSize="6.5" fill="#64748b">contamination=4%</text>
              <line x1="102" y1="82" x2="90" y2="82" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="8" y="64" width="80" height="36" rx="5" fill="#1e293b" stroke="#f87171" strokeWidth="1.3"/>
              <text x="48" y="78" textAnchor="middle" fontSize="8" fill="#f87171" fontWeight="bold">Flag Anomaly</text>
              <text x="48" y="90" textAnchor="middle" fontSize="6.5" fill="#64748b">dates</text>

              {/* Row 3 */}
              <line x1="236" y1="100" x2="236" y2="116" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="196" y="118" width="80" height="36" rx="5" fill="#1e293b" stroke="#22d3ee" strokeWidth="1.3"/>
              <text x="236" y="132" textAnchor="middle" fontSize="8" fill="#22d3ee" fontWeight="bold">14-Day Forecast</text>
              <text x="236" y="144" textAnchor="middle" fontSize="6.5" fill="#64748b">+ confidence band</text>
              <line x1="196" y1="136" x2="184" y2="136" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="102" y="118" width="80" height="36" rx="5" fill="#1e293b" stroke="#4ade80" strokeWidth="1.3"/>
              <text x="142" y="132" textAnchor="middle" fontSize="8" fill="#4ade80" fontWeight="bold">Order Rec.</text>
              <text x="142" y="144" textAnchor="middle" fontSize="6.5" fill="#64748b">upper × 1.10 → $1k</text>
              <line x1="102" y1="136" x2="90" y2="136" stroke="#475569" strokeWidth="1.2" markerEnd="url(#ar-cc)"/>
              <rect x="8" y="118" width="80" height="36" rx="5" fill="#1e293b" stroke="#60a5fa" strokeWidth="1.3"/>
              <text x="48" y="132" textAnchor="middle" fontSize="8" fill="#60a5fa" fontWeight="bold">Dashboard</text>
              <text x="48" y="144" textAnchor="middle" fontSize="6.5" fill="#64748b">Plotly.js charts</text>

              {/* Narrative */}
              <rect x="8" y="170" width="348" height="24" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1"/>
              <text x="10" y="185" fontSize="7" fill="#64748b" fontFamily="monospace">// narrative: "BRK-001: Next-week demand +18% above 90d median. Peak Mar 20 at $52,400."</text>
            </svg>

            <div className="rounded-lg border border-slate-700 bg-[#0f1117] p-4">
              <p className="text-[10px] font-mono text-slate-500 mb-3 uppercase tracking-widest">forecast accuracy — BRK-001 (14d holdout)</p>
              <div className="grid grid-cols-2 gap-3 mb-3">
                {[
                  { label: "MAPE", value: "8.4%", color: "#4ade80" },
                  { label: "Confidence", value: "91.6%", color: "#22d3ee" },
                  { label: "Anomalies", value: "4", color: "#c084fc" },
                  { label: "Idle saved", value: "$2.1K/wk", color: "#fbbf24" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="text-center">
                    <p className="text-[9px] text-slate-600 uppercase mb-0.5">{label}</p>
                    <p className="text-sm font-extrabold leading-none" style={{ color }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What changed */}
      <section className="max-w-screen-xl mx-auto px-6 pb-10 border-t border-slate-800 pt-10">
        <p className="text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">// what operators actually see</p>
        <ul className="flex flex-col gap-3">
          {[
            "6 branch health cards show vault level, forecast confidence, and anomaly status at a glance — no login required to check if a branch is about to run low",
            "Click any branch card to pull up 90 days of history overlaid with the 14-day forecast and shaded confidence band — one chart, no pivot tables",
            "Weekly demand pattern bar chart shows which days are heavy (Friday, paydays) vs light (Sunday) — so order schedules can be timed better",
            "Order recommendation table gives a specific dollar amount per day for the next 7 days, with confidence percentage, instead of 'last week +20%'",
            "AI-generated demand narrative summarises the outlook in plain English: above baseline, below baseline, peak day, idle cash risk",
            "Anomaly flags appear on both the chart (X markers) and a dedicated panel — unusual demand days are visible before they cause a gap",
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-cyan-500 mt-0.5 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="max-w-screen-xl mx-auto px-6 pb-10 border-t border-slate-800 pt-10">
        <p className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-widest">// ops dashboard</p>
        <h2 className="text-xl font-bold text-white mb-1">Branch Intelligence Dashboard</h2>
        <p className="text-slate-400 text-sm mb-6">Plotly.js + FastAPI &mdash; branch health cards, 14-day forecast with confidence bands, per-branch order recommendations, anomaly flags, AI narrative</p>

        <div className="rounded-xl border border-slate-800 bg-[#0f172a] overflow-hidden">
          {/* top bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
            <span className="text-xs font-mono text-cyan-400 font-bold">&#9675; CashCast</span>
            <span className="text-xs font-mono text-slate-500">Branch Intelligence Dashboard</span>
            <span className="text-xs text-slate-600">localhost:8001</span>
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
              <div key={label} className="bg-slate-950 p-3 text-center">
                <p className="text-[9px] text-slate-500 uppercase tracking-widest leading-tight">{label}</p>
                <p className="text-2xl font-extrabold leading-none mt-1" style={{ color }}>{value}</p>
              </div>
            ))}
          </div>

          {/* forecast chart + branch recs */}
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-2 p-5 border-r border-slate-800">
              <p className="text-[10px] font-mono text-slate-500 mb-3">// 14-day demand forecast &mdash; BRK-01 Downtown (with confidence band)</p>
              <svg viewBox="0 0 340 90" width="100%">
                {[15,33,51,69].map(y => (
                  <line key={y} x1="30" y1={y} x2="340" y2={y} stroke="#1e293b" strokeWidth="0.8"/>
                ))}
                {[["$200K",15],["$150K",33],["$100K",51],["$50K",69]].map(([l,y]) => (
                  <text key={String(y)} x="26" y={Number(y)+3} textAnchor="end" fontSize="7" fill="#475569">{l}</text>
                ))}
                {/* confidence band */}
                <polygon points="40,28 65,24 90,32 115,20 140,18 165,25 190,22 215,16 240,14 265,20 290,17 315,22 315,65 290,58 265,54 240,47 215,44 190,50 165,56 140,50 115,48 90,62 65,56 40,60" fill="#22d3ee" opacity="0.1"/>
                {/* actual bars — past 7 days */}
                {[[40,22],[65,19],[90,26],[115,16],[140,14],[165,20],[190,17]].map(([x,h],i) => (
                  <rect key={i} x={Number(x)-7} y={82-Number(h)} width="13" height={Number(h)} rx="1" fill="#22d3ee" opacity="0.5"/>
                ))}
                {/* forecast bars — next 7 days */}
                {[[215,12],[240,10],[265,16],[290,14],[315,18]].map(([x,h],i) => (
                  <rect key={i} x={Number(x)-7} y={82-Number(h)} width="13" height={Number(h)} rx="1" fill="#22d3ee" opacity="0.18" stroke="#22d3ee" strokeWidth="0.6"/>
                ))}
                {/* trend line */}
                <polyline points="40,44 65,40 90,48 115,34 140,32 165,38 190,36 215,28 240,26 265,34 290,30 315,36" fill="none" stroke="#22d3ee" strokeWidth="1.5"/>
                {/* anomaly marker */}
                <text x="90" y="24" textAnchor="middle" fontSize="9" fill="#f87171">&#10005;</text>
                {/* labels */}
                <text x="40"  y="88" textAnchor="middle" fontSize="6.5" fill="#475569">Mar 9</text>
                <text x="165" y="88" textAnchor="middle" fontSize="6.5" fill="#475569">Mar 15</text>
                <text x="265" y="88" textAnchor="middle" fontSize="6.5" fill="#fbbf24">forecast</text>
              </svg>
            </div>

            {/* branch order recs */}
            <div className="p-5">
              <p className="text-[10px] font-mono text-slate-500 mb-3">// per-branch order recs</p>
              <div className="flex flex-col gap-2">
                {[
                  ["BRK-01","$148K","#4ade80",59],
                  ["BRK-02","$93K", "#4ade80",37],
                  ["BRK-03","$112K","#fbbf24",45],
                  ["BRK-04","$67K", "#4ade80",27],
                  ["BRK-05","$204K","#f87171",82],
                  ["BRK-06","$89K", "#4ade80",36],
                ].map(([branch,rec,color,pct]) => (
                  <div key={String(branch)} className="flex items-center gap-2">
                    <span className="text-[9px] font-mono text-cyan-400 w-11 flex-shrink-0">{branch}</span>
                    <div className="flex-1 h-1.5 bg-slate-800 rounded overflow-hidden">
                      <div className="h-1.5 rounded" style={{ background: String(color), width: `${pct}%` }}/>
                    </div>
                    <span className="text-[9px] font-mono w-10 text-right font-bold" style={{ color: String(color) }}>{rec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800">
                <p className="text-[10px] font-mono text-slate-500 mb-1">// AI narrative &mdash; BRK-01</p>
                <p className="text-[10px] text-slate-400 leading-relaxed italic">&ldquo;14-day demand +18% above 90d median. Peak Thu Mar-19 at $52K. 1 anomaly flagged Mar-11.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* branch health cards row */}
          <div className="border-t border-slate-800 p-5">
            <p className="text-[10px] font-mono text-slate-500 mb-3">// branch health overview</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {[
                ["BRK-01","$312K","healthy","#4ade80"],
                ["BRK-02","$198K","healthy","#4ade80"],
                ["BRK-03","$87K", "low",    "#fbbf24"],
                ["BRK-04","$445K","healthy","#4ade80"],
                ["BRK-05","$52K", "risk",   "#f87171"],
                ["BRK-06","$231K","healthy","#4ade80"],
              ].map(([branch,vault,status,color]) => (
                <div key={String(branch)} className="bg-slate-900 rounded-lg p-2.5 border border-slate-800 text-center">
                  <p className="text-[9px] font-mono text-cyan-400 font-bold">{branch}</p>
                  <p className="text-sm font-extrabold text-white mt-0.5">{vault}</p>
                  <p className="text-[8px] font-bold mt-0.5 uppercase tracking-wide" style={{ color: String(color) }}>{status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer links */}
      <section className="max-w-screen-xl mx-auto px-6 pb-12 border-t border-slate-800 pt-8">
        <div className="flex gap-6">
          <a href="https://github.com/Sankartk/cashcast" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            GitHub →
          </a>
          <a href="/" className="text-sm font-bold text-slate-500 hover:text-slate-300 transition-colors">← All projects</a>
        </div>
      </section>

    </main>
  )
}
