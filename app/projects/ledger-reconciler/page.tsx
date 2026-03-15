import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'Ledger Reconciler — Sankar Kalyanakumar',
  description: 'Every bank statement break your team investigates already has a reason. Ledger Reconciler finds it automatically — before a human has to look.',
  openGraph: {
    title: 'Ledger Reconciler',
    description: 'Every bank statement break your team investigates already has a reason. Ledger Reconciler finds it automatically — before a human has to look.',
    url: 'https://sankartk.dev/projects/ledger-reconciler',
    images: [{ url: 'https://sankartk.dev/ledger_reconciler_thumbnail.png', width: 1200, height: 627 }],
  },
}

export default function LedgerReconcilerPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-10">
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-3">
            $ cat projects/ledger-reconciler/README.md
          </p>
          <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors mb-3 inline-block">&larr; Back</a>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Ledger Reconciler
          </h1>
          <p className="text-slate-200 text-lg font-semibold max-w-3xl leading-snug">
            What if every break on your daily recon run already knew why it didn&apos;t match?
          </p>

          {/* Terminal mock showing a classify output */}
          <div className="mt-8 rounded-xl border border-slate-700 bg-black font-mono text-xs overflow-auto">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 border-b border-slate-800">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-70"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-70"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-70"/>
              <span className="ml-2 text-slate-500">BREAK REPORT — ACC-001</span>
            </div>
            <pre className="p-5 leading-6 text-slate-300 whitespace-pre overflow-x-auto">{`09:15:32  INFO  Pass exact          matched  252  | remaining int=108  ext=122
09:15:32  INFO  Pass amount_date    matched   36  | remaining int=72   ext=86
09:15:32  INFO  Pass ref_amount     matched   29  | remaining int=43   ext=57
09:15:32  INFO  Pass fuzzy_amount   matched   18  | remaining int=25   ext=39

Category                  Count   Total Amount   Max Age
-----------------------  ------  -------------  -------
missing_external             25     127,450.00      28d
timing                       18      63,200.00       3d    ← still settling
duplicate_external           12      44,100.00      15d
amount_mismatch               7      19,875.00       8d    ← check FX rate
unresolved                    2       5,200.00       1d`}</pre>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">The Problem</h2>
              <p className="text-gray-800 leading-relaxed mb-4">
                Every bank, fintech, and payment processor runs the same daily process: compare the internal ledger
                to the external bank statement, find anything that doesn&apos;t match, figure out why.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                In practice this means an analyst opens a spreadsheet at 8 AM and works through 60-100 breaks.
                Most of them are the same five patterns — a SWIFT reference that got truncated to 16 characters,
                a transaction that posts a day later on the bank side, a foreign exchange amount rounded to
                2 decimal places differently. Patterns a machine should handle.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                The real breaks — a missing external confirmation, a legitimately mismatched amount — are buried
                in that noise.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { badge: "root cause 1", text: "SWIFT MT103 truncates references to 16 chars. Your internal ref is \"PMT-2026-001928\" — the bank sees \"PMT-2026-00192\". VLOOKUP says no match.", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { badge: "root cause 2", text: "EUR/USD settlement rounds to 2dp differently on each side. €1,234.567 becomes $1,345.93 internally and $1,345.94 externally. One cent. Real break? No.", color: "bg-yellow-50 border-yellow-200 text-yellow-800" },
                { badge: "root cause 3", text: "Banks post on T+1 for certain transaction types. Internal ledger records Tuesday. Statement shows Wednesday. Both are correct. Neither knows about the other.", color: "bg-orange-50 border-orange-200 text-orange-800" },
              ].map(({ badge, text, color }) => (
                <div key={badge} className={`rounded-lg border p-4 ${color}`}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1 opacity-70">{badge}</p>
                  <p className="text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b border-gray-100 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">Architecture</h2>

          {/* Layer 01 — Ingestion */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-white bg-emerald-600 rounded-full w-7 h-7 flex items-center justify-center">01</span>
              <h3 className="text-lg font-bold text-white">Ingestion — Strategy pattern parsers</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
                <p className="text-xs font-mono text-emerald-400 mb-2">CSVFeedParser</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Handles standard bank statement CSV exports. Validates required columns at parse time,
                  normalises signed amounts, upcases currency codes, derives a stable <code className="text-emerald-300 bg-slate-800 px-1 rounded">raw_source_id</code> from
                  the row hash for idempotency.
                </p>
              </div>
              <div className="bg-slate-900 rounded-xl border border-slate-800 p-5">
                <p className="text-xs font-mono text-blue-400 mb-2">JSONFeedParser</p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Open Banking API response format — nested <code className="text-blue-300 bg-slate-800 px-1 rounded">amount.value</code> / <code className="text-blue-300 bg-slate-800 px-1 rounded">amount.currency</code> block.
                  Adding an MT940 or FIX parser is one new class; nothing else changes.
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-xs font-mono mt-4">
              Ingest is idempotent — UNIQUE(side, account_id, raw_source_id) + ON CONFLICT DO NOTHING.
              Re-running the same file is safe.
            </p>
          </div>

          {/* Layer 02 — Matching */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-white bg-blue-600 rounded-full w-7 h-7 flex items-center justify-center">02</span>
              <h3 className="text-lg font-bold text-white">Matching Engine — 4 ordered passes</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  pass: "Pass 1 — Exact",
                  detail: "Amount + value_date + reference all identical. The happy path. ~70% of volume on a typical feed.",
                  border: "border-l-emerald-500",
                  accent: "text-emerald-400",
                },
                {
                  pass: "Pass 2 — Amount + Date",
                  detail: "Amount and value_date match. Reference differs — picks the external transaction whose reference is the longest common prefix of the internal one.",
                  border: "border-l-blue-500",
                  accent: "text-blue-400",
                },
                {
                  pass: "Pass 3 — Reference + Amount",
                  detail: "Reference and amount match. value_date is within a configurable N-day window (default 3). Catches T+1 bank posting lag.",
                  border: "border-l-yellow-500",
                  accent: "text-yellow-400",
                },
                {
                  pass: "Pass 4 — Fuzzy Amount",
                  detail: "Amount within 1% tolerance + date within 2 days. Catches FX rounding differences. Records the exact delta in pips for the audit trail.",
                  border: "border-l-purple-500",
                  accent: "text-purple-400",
                },
              ].map(({ pass, detail, border, accent }) => (
                <div key={pass} className={`bg-slate-900 rounded-xl border border-slate-800 border-l-4 ${border} p-5`}>
                  <p className={`text-xs font-mono font-bold ${accent} mb-2`}>{pass}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs font-mono mt-4">
              Each pass removes matched IDs from the candidate pool before the next runs.
              A transaction can only be matched once. The strictest method that applies wins.
            </p>
          </div>

          {/* Layer 03 — Classification */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-white bg-violet-600 rounded-full w-7 h-7 flex items-center justify-center">03</span>
              <h3 className="text-lg font-bold text-white">Break Classifier — root cause before human review</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { cat: "timing", desc: "Within 3 days of run date — likely still settling", color: "border-blue-700 text-blue-400 bg-slate-900" },
                { cat: "amount_mismatch", desc: "Reference found on both sides; amounts differ", color: "border-yellow-700 text-yellow-400 bg-slate-900" },
                { cat: "missing_external", desc: "On internal ledger; absent from bank statement", color: "border-red-700 text-red-400 bg-slate-900" },
                { cat: "missing_internal", desc: "On bank statement; absent from internal ledger", color: "border-orange-700 text-orange-400 bg-slate-900" },
                { cat: "duplicate_int/ext", desc: "Same amount+date+reference appears twice on one side", color: "border-purple-700 text-purple-400 bg-slate-900" },
                { cat: "unresolved", desc: "None of the above patterns matched — needs analyst", color: "border-slate-600 text-slate-400 bg-slate-900" },
              ].map(({ cat, desc, color }) => (
                <div key={cat} className={`rounded-lg border p-4 ${color}`}>
                  <p className="text-xs font-mono font-bold mb-1">{cat}</p>
                  <p className="text-xs leading-relaxed opacity-75">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Layer 04 — SQL */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold text-white bg-slate-600 rounded-full w-7 h-7 flex items-center justify-center">04</span>
              <h3 className="text-lg font-bold text-white">SQL — analytical patterns without the ORM</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "Window functions", code: "ROW_NUMBER() OVER\n(PARTITION BY side,\n  account_id, amount,\n  value_date, reference)", desc: "Duplicate detection without a self-join" },
                { title: "CTE pivot", code: "WITH daily AS (\n  SELECT value_date,\n    SUM(CASE WHEN\n      side='internal'...)\n  GROUP BY value_date\n)", desc: "Daily internal vs external counts in one pass" },
                { title: "Aging buckets", code: "CASE\n  WHEN aging_days = 0\n    THEN 'same_day'\n  WHEN aging_days <= 3\n    THEN '1_to_3d'\n  ...\nEND", desc: "Aging heatmap without a lookup table" },
              ].map(({ title, code, desc }) => (
                <div key={title} className="bg-slate-900 rounded-xl border border-slate-800 p-4">
                  <p className="text-xs font-bold text-slate-300 mb-2">{title}</p>
                  <pre className="text-xs font-mono text-emerald-300 bg-black rounded p-3 leading-5 mb-2 overflow-auto">{code}</pre>
                  <p className="text-slate-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN DECISIONS */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">Design Decisions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "Why no ORM?",
                a: "The analytical queries — daily pivots, window-function duplicate detection, aging buckets — are most naturally expressed in plain SQL. SQLAlchemy would make ROW_NUMBER() OVER harder, not easier. The repository pattern provides the abstraction without the ORM overhead.",
              },
              {
                q: "Why multi-pass instead of a single JOIN?",
                a: "A single SQL join matches greedily with no priority. A reference+amount match from pass 3 should not consume a transaction that exact-matched in pass 1. Removing matched IDs after each pass ensures the strictest applicable method always wins and every transaction is only consumed once.",
              },
              {
                q: "Why Protocol interfaces for repositories?",
                a: "The concrete repos are SQLite today. Swapping to PostgreSQL means writing one class that satisfies the same Protocol. The engine, orchestrator, classifier, and dashboard are unchanged. No base classes, no inheritance hierarchy, no framework coupling.",
              },
              {
                q: "Why SQLite with WAL mode?",
                a: "For dev and small-scale ops tooling, SQLite with WAL mode is zero-config and gives concurrent read access while the reconciler writes. The DB path is a parameter — pointing it at a PostgreSQL DSN and swapping the connection factory swaps the DB without touching any business logic.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-l-4 border-gray-200 pl-5">
                <p className="font-bold text-gray-900 mb-2">{q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD OUTPUT */}
      <section className="border-b border-gray-100 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Dashboard Output</h2>
          <p className="text-slate-500 text-sm mb-8">Streamlit monitoring dashboard — real data from the ACC-001 reconciliation run.</p>

          {/* Browser chrome wrapper */}
          <div className="rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
            {/* Browser bar */}
            <div className="flex items-center gap-3 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <span className="w-3 h-3 rounded-full bg-red-500 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"/>
              <span className="w-3 h-3 rounded-full bg-emerald-500 opacity-80"/>
              <div className="flex-1 mx-4 bg-slate-700 rounded-md px-3 py-1 text-xs font-mono text-slate-400">localhost:8503</div>
            </div>

            {/* Dashboard body */}
            <div className="bg-[#0f1117] p-5 flex gap-4">
              {/* Sidebar */}
              <div className="w-44 flex-shrink-0 bg-[#161b27] rounded-xl border border-[#1e2535] p-4 flex flex-col gap-3">
                <div>
                  <p className="text-white font-bold text-sm">⚖ Ledger Reconciler</p>
                  <p className="text-[#475569] text-xs font-mono mt-0.5">bank recon engine v0.1</p>
                </div>
                <div className="border-t border-[#1e2535] pt-3">
                  <p className="text-[#475569] text-xs uppercase tracking-widest mb-2">Account</p>
                  <div className="bg-[#1a2035] border border-[#2a3550] rounded px-2 py-1 text-xs text-slate-300 font-mono">ACC-001</div>
                </div>
                <div>
                  <p className="text-[#475569] text-xs uppercase tracking-widest mb-2">Period</p>
                  <p className="text-slate-400 text-xs font-mono">2026-02-07</p>
                  <p className="text-slate-400 text-xs font-mono">→ 2026-03-09</p>
                </div>
                <div className="border-t border-[#1e2535] pt-3">
                  <p className="text-[#475569] text-xs uppercase tracking-widest mb-2">Recent Runs</p>
                  <div className="text-xs space-y-1.5">
                    <div className="text-slate-400 border-b border-[#1e2535] pb-1">
                      <span className="text-emerald-400 font-bold">#1</span> 2026-03-09
                      <div className="text-emerald-400">341 matched</div>
                      <div className="text-red-400">37 breaks</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col gap-4">

                {/* Page title */}
                <div>
                  <p className="text-white font-extrabold text-lg">ACC-001 <span className="text-[#475569] font-normal text-sm font-mono ml-2">2026-02-07 → 2026-03-09</span></p>
                </div>

                {/* KPI row */}
                <div>
                  <p className="text-[#475569] text-xs uppercase tracking-widest font-bold mb-2 pb-1 border-b border-[#1e2535]">Summary</p>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { label: "Total Transactions", value: "720",    sub: "both sides",         color: "#60a5fa" },
                      { label: "Matched",            value: "341",    sub: "across 4 passes",    color: "#34d399" },
                      { label: "Open Breaks",        value: "37",     sub: "need investigation", color: "#f87171" },
                      { label: "Duplicates",         value: "0",      sub: "flagged",            color: "#fbbf24" },
                      { label: "Match Rate",         value: "94.7%",  sub: "$482k total vol",    color: "#a78bfa" },
                    ].map(({ label, value, sub, color }) => (
                      <div key={label} className="bg-[#1a2035] border border-[#2a3550] rounded-xl p-3 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#64748b] mb-1">{label}</p>
                        <p className="text-xl font-extrabold leading-none" style={{ color }}>{value}</p>
                        <p className="text-[10px] text-[#475569] mt-1">{sub}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Charts row */}
                <div>
                  <p className="text-[#475569] text-xs uppercase tracking-widest font-bold mb-2 pb-1 border-b border-[#1e2535]">Trend &amp; Distribution</p>
                  <div className="grid grid-cols-5 gap-3">
                    {/* Line chart */}
                    <div className="col-span-3 bg-[#1a2035] border border-[#2a3550] rounded-xl p-3">
                      <p className="text-[#94a3b8] text-xs font-bold mb-2">Daily Match Rate</p>
                      <svg viewBox="0 0 320 100" width="100%">
                        <defs>
                          <linearGradient id="fill1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25"/>
                            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        {/* 95% target line */}
                        <line x1="0" y1="12" x2="320" y2="12" stroke="#34d399" strokeWidth="1" strokeDasharray="4 3" opacity="0.6"/>
                        <text x="310" y="10" fontSize="7" fill="#34d399" textAnchor="end" opacity="0.8">95%</text>
                        {/* Grid */}
                        {[25,50,75].map(y => (
                          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#1e2535" strokeWidth="1"/>
                        ))}
                        {/* Area fill */}
                        <path d="M0,18 L22,16 L44,14 L66,20 L88,17 L110,15 L132,13 L154,18 L176,16 L198,14 L220,19 L242,15 L264,13 L286,16 L308,14 L320,15 L320,100 L0,100 Z" fill="url(#fill1)"/>
                        {/* Line */}
                        <polyline points="0,18 22,16 44,14 66,20 88,17 110,15 132,13 154,18 176,16 198,14 220,19 242,15 264,13 286,16 308,14 320,15" fill="none" stroke="#60a5fa" strokeWidth="1.8"/>
                        {/* Axis labels */}
                        <text x="0"   y="96" fontSize="6" fill="#475569">Feb 7</text>
                        <text x="130" y="96" fontSize="6" fill="#475569">Feb 21</text>
                        <text x="280" y="96" fontSize="6" fill="#475569">Mar 9</text>
                      </svg>
                    </div>
                    {/* Donut */}
                    <div className="col-span-2 bg-[#1a2035] border border-[#2a3550] rounded-xl p-3">
                      <p className="text-[#94a3b8] text-xs font-bold mb-2">Break Categories</p>
                      <div className="flex items-center gap-3">
                        <svg viewBox="0 0 80 80" width="80" height="80" className="flex-shrink-0">
                          {/* Donut segments — approximate */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#1e2535" strokeWidth="14"/>
                          {/* missing_external ~34% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#fb923c" strokeWidth="14"
                            strokeDasharray="59.7 176" strokeDashoffset="0" transform="rotate(-90 40 40)"/>
                          {/* timing ~24% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#60a5fa" strokeWidth="14"
                            strokeDasharray="42.1 176" strokeDashoffset="-59.7" transform="rotate(-90 40 40)"/>
                          {/* duplicate ~21% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#a78bfa" strokeWidth="14"
                            strokeDasharray="36.8 176" strokeDashoffset="-101.8" transform="rotate(-90 40 40)"/>
                          {/* amount_mismatch ~14% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#fbbf24" strokeWidth="14"
                            strokeDasharray="24.6 176" strokeDashoffset="-138.6" transform="rotate(-90 40 40)"/>
                          {/* unresolved ~7% */}
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#94a3b8" strokeWidth="14"
                            strokeDasharray="12.3 176" strokeDashoffset="-163.2" transform="rotate(-90 40 40)"/>
                          <text x="40" y="37" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#f1f5f9">37</text>
                          <text x="40" y="48" textAnchor="middle" fontSize="6" fill="#64748b">breaks</text>
                        </svg>
                        <div className="flex flex-col gap-1 text-[10px]">
                          {[
                            { label: "missing_ext",  color: "#fb923c", n: "13" },
                            { label: "timing",       color: "#60a5fa", n: "9"  },
                            { label: "duplicate",    color: "#a78bfa", n: "8"  },
                            { label: "amt_mismatch", color: "#fbbf24", n: "5"  },
                            { label: "unresolved",   color: "#94a3b8", n: "2"  },
                          ].map(({ label, color, n }) => (
                            <div key={label} className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: color }}/>
                              <span className="text-[#94a3b8]">{label}</span>
                              <span className="ml-auto font-bold" style={{ color }}>{n}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Methods + Aging row */}
                <div>
                  <p className="text-[#475569] text-xs uppercase tracking-widest font-bold mb-2 pb-1 border-b border-[#1e2535]">Match Methods &amp; Aging</p>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Bar chart */}
                    <div className="bg-[#1a2035] border border-[#2a3550] rounded-xl p-3">
                      <p className="text-[#94a3b8] text-xs font-bold mb-2">Match Method Breakdown</p>
                      <svg viewBox="0 0 220 80" width="100%">
                        {[  
                          { x: 10,  w: 148, label: "exact",       n: "315", color: "#34d399" },
                          { x: 60,  w: 40,  label: "ref_amount",  n: "20",  color: "#fbbf24" },
                          { x: 110, w: 12,  label: "fuzzy_amt",   n: "6",   color: "#a78bfa" },
                        ].map(({ x, w, label, n, color }, i) => (
                          <g key={label}>
                            <rect x={x} y={60 - w * 0.35} width="36" height={w * 0.35} rx="3" fill={color} opacity="0.9"/>
                            <text x={x + 18} y={58 - w * 0.35} textAnchor="middle" fontSize="8" fill="#f1f5f9" fontWeight="bold">{n}</text>
                            <text x={x + 18} y="74" textAnchor="middle" fontSize="6" fill="#64748b">{label}</text>
                          </g>
                        ))}
                        <line x1="8" y1="62" x2="200" y2="62" stroke="#2a3550" strokeWidth="1"/>
                      </svg>
                    </div>
                    {/* Stacked aging bar */}
                    <div className="bg-[#1a2035] border border-[#2a3550] rounded-xl p-3">
                      <p className="text-[#94a3b8] text-xs font-bold mb-2">Break Aging by Category</p>
                      <svg viewBox="0 0 220 80" width="100%">
                        {[
                          { x: 10,  cat: "missing_ext",  same: 0, d1: 2, d4: 3, d7: 8 },
                          { x: 55,  cat: "timing",       same: 4, d1: 5, d4: 0, d7: 0 },
                          { x: 100, cat: "duplicate",    same: 0, d1: 1, d4: 3, d7: 4 },
                          { x: 145, cat: "amt_mismatch", same: 0, d1: 1, d4: 2, d7: 2 },
                        ].map(({ x, cat, same, d1, d4, d7 }) => {
                          const total = same + d1 + d4 + d7
                          const scale = 45 / Math.max(total, 1)
                          const h0 = same * scale, h1 = d1 * scale, h2 = d4 * scale, h3 = d7 * scale
                          return (
                            <g key={cat}>
                              {/* stacked from bottom */}
                              {d7   > 0 && <rect x={x} y={60 - h3}          width="32" height={h3} rx="2" fill="#f87171"/>}
                              {d4   > 0 && <rect x={x} y={60 - h3 - h2}     width="32" height={h2} rx="2" fill="#fbbf24"/>}
                              {d1   > 0 && <rect x={x} y={60 - h3-h2-h1}   width="32" height={h1} rx="2" fill="#60a5fa"/>}
                              {same > 0 && <rect x={x} y={60-h3-h2-h1-h0}  width="32" height={h0} rx="2" fill="#34d399"/>}
                              <text x={x + 16} y="72" textAnchor="middle" fontSize="5.5" fill="#64748b">{cat}</text>
                            </g>
                          )
                        })}
                        <line x1="8" y1="62" x2="200" y2="62" stroke="#2a3550" strokeWidth="1"/>
                        {/* legend */}
                        {[
                          { label: "same day", color: "#34d399", x: 10  },
                          { label: "1–3d",     color: "#60a5fa", x: 60  },
                          { label: "4–7d",     color: "#fbbf24", x: 95  },
                          { label: ">7d",      color: "#f87171", x: 130 },
                        ].map(({ label, color, x }) => (
                          <g key={label}>
                            <rect x={x} y="76" width="6" height="6" rx="1" fill={color}/>
                            <text x={x + 8} y="82" fontSize="5.5" fill="#64748b">{label}</text>
                          </g>
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Open breaks table */}
                <div>
                  <p className="text-[#475569] text-xs uppercase tracking-widest font-bold mb-2 pb-1 border-b border-[#1e2535]">Open Breaks — Drill Down</p>
                  <div className="rounded-lg border border-[#2a3550] overflow-hidden text-xs font-mono">
                    <div className="grid grid-cols-8 bg-[#0f1117] text-[#64748b] text-[10px] uppercase tracking-widest px-3 py-2 border-b border-[#2a3550]">
                      <span>Reference</span><span>Side</span><span>Date</span><span>Ccy</span>
                      <span className="text-right">Amount</span><span>Category</span>
                      <span className="text-right">Age</span><span>Notes</span>
                    </div>
                    {[
                      { ref: "PMT-2026-0087", side: "INT", date: "02-10", ccy: "USD", amt: "−14,250.00", cat: "missing_external",  age: 27, catColor: "#fb923c", ageColor: "#450a0a", ageText: "#fca5a5" },
                      { ref: "PMT-2026-0143", side: "INT", date: "02-14", ccy: "USD", amt: "−8,900.00",  cat: "missing_external",  age: 23, catColor: "#fb923c", ageColor: "#450a0a", ageText: "#fca5a5" },
                      { ref: "PMT-2026-0291", side: "INT", date: "03-07", ccy: "EUR", amt: "−3,120.00",  cat: "timing",            age: 2,  catColor: "#60a5fa", ageColor: "",         ageText: "#60a5fa"  },
                      { ref: "PMT-2026-0308", side: "EXT", date: "03-08", ccy: "USD", amt: "+1,875.50",  cat: "timing",            age: 1,  catColor: "#60a5fa", ageColor: "",         ageText: "#60a5fa"  },
                      { ref: "PMT-2026-0112", side: "INT", date: "02-18", ccy: "USD", amt: "−22,000.00", cat: "duplicate_internal", age: 19, catColor: "#a78bfa", ageColor: "#450a0a", ageText: "#fca5a5" },
                      { ref: "PMT-2026-0204", side: "INT", date: "02-25", ccy: "GBP", amt: "−6,340.00",  cat: "amount_mismatch",   age: 12, catColor: "#fbbf24", ageColor: "#422006", ageText: "#fcd34d" },
                    ].map(({ ref, side, date, ccy, amt, cat, age, catColor, ageColor, ageText }) => (
                      <div key={ref} className="grid grid-cols-8 items-center px-3 py-1.5 border-b border-[#1e2535] hover:bg-[#1a2035] transition-colors text-[11px]">
                        <span className="text-slate-300 truncate">{ref}</span>
                        <span className="text-slate-500">{side}</span>
                        <span className="text-slate-400">{date}</span>
                        <span className="text-slate-500">{ccy}</span>
                        <span className="text-right" style={{ color: amt.startsWith('-') ? '#f87171' : '#34d399' }}>{amt}</span>
                        <span style={{ color: catColor }}>{cat.replace('_', '​_')}</span>
                        <span className="text-right rounded px-1" style={{ background: ageColor, color: ageText }}>{age}d</span>
                        <span className="text-slate-600 truncate text-[10px]">—</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[#475569] text-[10px] mt-1.5 font-mono">37 breaks shown · sorted by aging ↓</p>
                </div>

              </div>{/* end main content */}
            </div>{/* end dashboard body */}
          </div>{/* end browser chrome */}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="border-b border-gray-100 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { layer: "Language", tech: "Python 3.11+", note: "match statement, Protocol typing, tomllib" },
              { layer: "Database", tech: "SQLite / PostgreSQL", note: "WAL mode; swappable via repo pattern" },
              { layer: "Analytics", tech: "pandas", note: "DataFrame work in dashboard layer only" },
              { layer: "Dashboard", tech: "Streamlit", note: "Real-time ops monitoring, no front-end dev" },
              { layer: "Testing", tech: "pytest", note: "Unit + integration; tmp_path fixtures" },
              { layer: "Packaging", tech: "pyproject.toml", note: "PEP 517; editable install" },
              { layer: "Architecture", tech: "Strategy + Repository", note: "SOLID; independently testable layers" },
              { layer: "SQL patterns", tech: "CTEs + window fns", note: "No ORM; expressive analytics" },
            ].map(({ layer, tech, note }) => (
              <div key={layer} className="bg-slate-900 rounded-lg border border-slate-800 p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-1">{layer}</p>
                <p className="text-white font-semibold text-sm mb-1">{tech}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-wrap gap-4">
          <a
            href="https://github.com/Sankartk/ledger-reconciler"
            className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-5 py-3 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub →
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 text-gray-700 text-sm font-bold px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors"
          >
            ← Back to portfolio
          </a>
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
