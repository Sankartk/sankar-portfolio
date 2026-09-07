import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'market-microstructure — Sankar Kalyanakumar',
  description: 'A C++20 limit order book that reads NASDAQ\u2019s real feed format and watches for market manipulation while it works.',
  openGraph: {
    title: 'market-microstructure',
    description: 'What happens inside an exchange between "buy" and "filled"?',
    url: 'https://sankartk.dev/projects/market-microstructure',
  },
}

export default function MarketMicrostructure() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none">market-microstructure</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">What happens inside an exchange between &ldquo;buy&rdquo; and &ldquo;filled&rdquo;?</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                A limit order book in C++20 that ingests NASDAQ&apos;s actual binary feed format (ITCH 5.0),
                keeps the book current in nanoseconds, and detects four kinds of market manipulation in the same process.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["C++20","CMake","ITCH 5.0","Pool allocator","Fixed-point prices","ctest"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/market-microstructure" className="bg-rose-700 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-lg text-sm sm:flex-shrink-0 transition-colors sm:mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// why this exists</p>
              <h2 className="text-xl font-bold text-gray-900">The problem I gave myself</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Most of my work is measured in milliseconds — a slow API call, a lagging pipeline. I wanted to understand
              the world where a microsecond is slow. Where picking the wrong container or calling malloc at the wrong
              moment is the difference between competitive and irrelevant.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              So I chose the hardest self-contained version of that world: rebuild NASDAQ&apos;s order book from the raw
              message feed, then detect spoofing the way an exchange&apos;s surveillance team would. No framework, no
              library doing the interesting part — just the feed, the book, and the detectors.
            </p>
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-sm leading-relaxed border border-slate-800">
              <p className="text-slate-500">$ ./build/benchmark</p>
              <p className="text-slate-400 mt-2">[bench] add_order&nbsp;&nbsp;&nbsp;&nbsp;: 672.7 ns/op&nbsp;&nbsp;(1.5M ops/sec)</p>
              <p className="text-slate-400">[bench] cancel_order : 29.1 ns/op&nbsp;&nbsp;&nbsp;(34.3M ops/sec)</p>
              <p className="text-slate-400">[bench] snapshot&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1.0 ns/op</p>
              <p className="text-emerald-400 mt-2">[test_order_book] all tests passed</p>
              <p className="text-emerald-400">[test_itch_parser] all tests passed</p>
              <p className="text-emerald-400">[test_detector] all tests passed</p>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-rose-100 bg-rose-50 p-5">
              <h4 className="font-bold text-rose-800 text-xs uppercase tracking-wide mb-3">What this shows</h4>
              <ul className="flex flex-col gap-2 text-sm text-rose-900">
                <li>• I can write C++ that holds up under a benchmark, not just compiles</li>
                <li>• I know what a cache line is and why alignas(64) matters</li>
                <li>• I can parse a binary wire protocol byte by byte — and test it byte by byte</li>
                <li>• I understand how exchange matching actually works, not just the theory</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <h4 className="font-bold text-gray-700 text-xs uppercase tracking-wide mb-3">Honest engineering notes</h4>
              <ul className="flex flex-col gap-2 text-sm text-gray-600">
                <li>• First benchmark claimed 45ns/add. Real measured number: 673ns. The map rehashing was invisible until I measured properly — the README tells that story.</li>
                <li>• The parser passed every &ldquo;looks right&rdquo; check and was off by 2 bytes on every field. Byte-level tests caught it.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT DETECTS */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <p className="text-xs font-mono text-gray-400 mb-1">// the surveillance layer</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6">Four manipulation patterns, caught in-process</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "Spoofing", what: "A huge bid appears to fake demand, never trades, and vanishes in under 500ms.", how: "Track each order's size against book depth. Flag oversized cancels inside the time window." },
            { name: "Layering", what: "Four or more orders stacked at adjacent prices on one side, creating fake depth.", how: "Rolling window over open orders per symbol; flag clusters within a few ticks." },
            { name: "Momentum ignition", what: "A burst of aggressive one-sided fills meant to start a price move.", how: "Count same-direction fills in a 2-second sliding window." },
            { name: "Quote stuffing", what: "Flooding the feed with 10,000+ messages a second to slow competitors down.", how: "Message-rate counter per symbol per second. Simple and effective." },
          ].map(({ name, what, how }) => (
            <div key={name} className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 text-sm mb-2">{name}</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-2">{what}</p>
              <p className="text-rose-700 text-xs leading-relaxed font-medium">{how}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <p className="text-xs font-mono text-gray-400 mb-1">// design decisions</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6">The parts I&apos;d defend in a review</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { t: "Pool allocator", d: "Orders live in a pre-allocated flat array with a free list. After warmup, add and cancel never call malloc. The pool doubles if it fills — in practice it doesn't." },
            { t: "Fixed-point prices", d: "All prices are int64 in 1/10000-dollar units, exactly as they arrive on the wire. No floating-point equality bugs in price level lookups." },
            { t: "Cache-line alignment", d: "Order is alignas(64). If this ever goes multi-threaded, two threads on adjacent orders won't invalidate each other's cache lines." },
            { t: "The tests are the spec", d: "14 tests including byte-level parser cases. The off-by-two bug I mentioned above is now a permanent regression test." },
          ].map(({ t, d }) => (
            <div key={t} className="rounded-xl bg-slate-950 p-5 border border-slate-800">
              <h3 className="font-bold text-white text-sm mb-2 font-mono">{t}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex gap-5">
          <a href="https://github.com/Sankartk/market-microstructure" className="text-sm font-bold text-rose-600 hover:text-rose-500 transition-colors" target="_blank" rel="noopener noreferrer">Read the full README on GitHub &rarr;</a>
          <a href="/" className="text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">&larr; Back to all projects</a>
        </div>
      </section>
    </main>
  )
}
