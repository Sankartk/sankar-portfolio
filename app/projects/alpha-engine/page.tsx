import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'alpha-engine — Sankar Kalyanakumar',
  description: 'A backtesting framework that tries to prove your trading strategy wrong before the market does — real costs, walk-forward validation, live paper trading.',
  openGraph: {
    title: 'alpha-engine',
    description: 'Everyone has a strategy that "would have worked." This tries to prove you wrong first.',
    url: 'https://sankartk.dev/projects/alpha-engine',
  },
}

export default function AlphaEngine() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">alpha-engine</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">Everyone has a strategy that &ldquo;would have worked.&rdquo; Almost nobody can prove it.</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                A backtesting framework that tries its best to prove your strategy <em>doesn&apos;t</em> work before the market does it for you —
                with real transaction costs, walk-forward validation, and a paper-trading loop against live prices.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Python","pandas","numpy","Almgren impact model","Alpaca API","Streamlit","pytest"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/alpha-engine" className="bg-emerald-700 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-lg text-sm sm:flex-shrink-0 transition-colors sm:mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// why this exists</p>
              <h2 className="text-xl font-bold text-gray-900">Three ways backtests lie</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              I&apos;ve seen too many backtests that were fiction. Someone loops over historical prices, forgets that
              trades cost money, accidentally lets tomorrow&apos;s data leak into today&apos;s decision, and ends up with a
              beautiful equity curve that would have lost money in the real world.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { n: "1", t: "Lookahead bias", d: "Your signal at time t quietly uses information that only exists at t+1. Sometimes it's as subtle as applying today's weight to today's return." },
                { n: "2", t: "Ignored costs", d: "A strategy with 50% daily turnover and a paper Sharpe of 2.0 is often a Sharpe of 0.3 after spread and market impact." },
                { n: "3", t: "Overfitting", d: "Tune parameters on the full dataset and you've built a model of the past, not the future." },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4 rounded-xl border border-gray-200 p-4">
                  <span className="text-emerald-700 font-black font-mono text-lg flex-shrink-0">{n}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wide mb-3">How this engine stops them</h4>
              <ul className="flex flex-col gap-2 text-sm text-emerald-900">
                <li>• Weights are shifted one day before touching returns — the code structurally can&apos;t earn tomorrow&apos;s return on today&apos;s signal</li>
                <li>• Every rebalance pays spread + square-root market impact</li>
                <li>• Walk-forward trains on 504 days, tests on 63, steps forward. Overfit strategies get exposed.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-bold text-gray-700 text-xs uppercase tracking-wide mb-3">The honest part</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                The gap between backtest and live paper trading is itself a measurement. That&apos;s why the same
                weight targets can be sent to Alpaca&apos;s paper API — real fills, real slippage, real answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <p className="text-xs font-mono text-gray-400 mb-1">// what ships with it</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Two strategies, deliberately simple</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-950 p-5 border border-slate-800">
            <p className="text-emerald-400 font-mono text-xs font-bold mb-2">momentum</p>
            <p className="text-slate-300 text-sm font-semibold mb-2">Winners keep winning — for a while.</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              12-1 month cross-sectional momentum: rank stocks by the last year&apos;s return, skip the most recent month,
              scale by inverse volatility, only long names above their 200-day average. Long the top 20%, short the bottom 20%,
              capped at 10% per name.
            </p>
          </div>
          <div className="rounded-xl bg-slate-950 p-5 border border-slate-800">
            <p className="text-emerald-400 font-mono text-xs font-bold mb-2">mean reversion</p>
            <p className="text-slate-300 text-sm font-semibold mb-2">Stretched prices snap back.</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Z-score of the 20-day price against the 60-day mean. Enter past ±2 standard deviations, but only if RSI confirms —
              so you&apos;re not catching falling knives. Exit when the z-score crosses zero.
            </p>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <p className="text-xs font-mono text-gray-400 mb-1">// the report card</p>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Thirteen metrics, because Sharpe alone isn&apos;t enough</h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-6">
          Sharpe, Sortino, Calmar, max drawdown, win rate, profit factor, skew, kurtosis, 95% VaR and CVaR —
          plus daily turnover and total cost drag, because those last two tell you whether the strategy survives
          contact with a broker. The Streamlit dashboard shows the NAV curve, drawdown chart, rolling Sharpe,
          and a weight heatmap of what the strategy actually held.
        </p>
        <div className="flex gap-5">
          <a href="https://github.com/Sankartk/alpha-engine" className="text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors" target="_blank" rel="noopener noreferrer">Read the full README on GitHub &rarr;</a>
          <a href="/" className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">&larr; Back to all projects</a>
        </div>
      </section>
    </main>
  )
}
