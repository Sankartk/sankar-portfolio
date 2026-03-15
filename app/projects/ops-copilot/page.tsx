import Navbar from "../../../components/Navbar"

export const metadata = {
  title: 'Ops Copilot — Sankar Kalyanakumar',
  description: 'When your service goes down at 2am, Ops Copilot finds the right section of your runbook immediately — then waits for your approval before touching anything.',
  openGraph: {
    title: 'Ops Copilot',
    description: 'When your service goes down at 2am, Ops Copilot finds the right section of your runbook immediately — then waits for your approval before touching anything.',
    url: 'https://sankartk.dev/projects/ops-copilot',
    images: [{ url: 'https://sankartk.dev/ops_copilot_thumbnail.png', width: 1200, height: 627 }],
  },
}

export default function OpsCopilot() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* HEADER */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-screen-xl mx-auto px-6 pt-10 pb-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-slate-500 text-xs hover:text-slate-300 transition-colors">&larr; Back</a>
              <h1 className="text-4xl font-extrabold tracking-tight leading-none">Ops Copilot</h1>
              <p className="text-slate-200 text-base font-semibold mt-1">What if your runbooks could answer the phone at 2am?</p>
              <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                RAG over Markdown runbooks + an approval-gated AWS remediation pipeline.
                Answers cite their source. Nothing touches production without a human in the loop.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["Python","FAISS","sentence-transformers","Streamlit","Ollama","Bedrock","Lambda","Step Functions","SNS","ECS","SAM"].map(t => (
                  <span key={t} className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">{t}</span>
                ))}
              </div>
            </div>
            <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-lg text-sm flex-shrink-0 transition-colors mt-6" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="grid md:grid-cols-5 gap-10">
          {/* problem statement */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">// incident.log — 02:17:43</p>
              <h2 className="text-xl font-bold text-gray-900">The problem</h2>
            </div>
            <div className="bg-slate-950 rounded-xl p-5 font-mono text-sm leading-relaxed border border-slate-800">
              <p className="text-red-400">[ALARM] ALB-5xx-High — ALARM state</p>
              <p className="text-slate-500 mt-1">paging on-call engineer...</p>
              <p className="text-yellow-300 mt-3">you: what does this alarm even mean</p>
              <p className="text-slate-500">you: opening Confluence...</p>
              <p className="text-slate-500">you: searching Slack history...</p>
              <p className="text-slate-500">you: was it the deploy or the traffic spike?</p>
              <p className="text-slate-600 mt-3 italic">10 minutes pass. service still degrading.</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              The runbook exists. The answer is in there. But finding the right section under pressure, at 2am,
              with a degrading service, is its own problem — separate from the technical one.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              I wanted retrieval that&apos;s faster than search. Not an AI that guesses — but one that reads the docs
              your team already wrote and surfaces the exact section that matches the alarm, with the filename attached
              so you can verify in under 30 seconds.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The second half solves a different question: how do you let automation <em>act</em> on a recommendation
              without removing the human from dangerous operations? The answer is a gate that doesn&apos;t close automatically.
              The Step Functions pipeline proposes, pauses, and waits. The ECS rollback only runs if you say so.
            </p>
          </div>

          {/* what it solves / who it fits */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
              <h4 className="font-bold text-blue-800 text-xs uppercase tracking-wide mb-3">What this solves</h4>
              <ul className="flex flex-col gap-2 text-sm text-blue-900">
                {[
                  "The 10-minute context gap every on-call engineer loses at the start of an incident",
                  "Runbooks that exist but are never found under pressure",
                  "Rollbacks that run before anyone has approved them",
                  "Different engineers triaging the same alarm differently",
                  "No paper trail for who approved what at 2am",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
              <h4 className="font-bold text-emerald-800 text-xs uppercase tracking-wide mb-3">Who it fits</h4>
              <ul className="flex flex-col gap-2 text-sm text-emerald-900">
                {[
                  "Teams with Markdown or Confluence runbooks",
                  "ECS services that break under load",
                  "Regulated envs needing approval chains",
                  "On-call rotations with painful handoffs",
                  "Orgs avoiding $$$$ commercial AIOps",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5 flex-shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE PART 1: LOCAL RAG */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">01</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Local RAG pipeline</h2>
            <p className="text-gray-500 text-sm">Offline runbook indexing and retrieval. No external API calls required when running with Ollama.</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {/* Indexing flow */}
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-2">Indexing path</p>
            <svg viewBox="0 0 680 58" width="100%" className="rounded-lg border border-gray-100 bg-gray-50">
              <defs>
                <marker id="arri" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 L1.5,3.5 z" fill="#94a3b8" />
                </marker>
              </defs>
              <rect x="6" y="10" width="88" height="38" rx="7" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="50" y="28" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">data/*.md</text>
              <text x="50" y="41" textAnchor="middle" fontSize="9" fill="#3b82f6">runbook files</text>
              <line x1="94" y1="29" x2="110" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arri)"/>
              <rect x="112" y="10" width="88" height="38" rx="7" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="156" y="28" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="bold">ingest.py</text>
              <text x="156" y="41" textAnchor="middle" fontSize="9" fill="#16a34a">chunk + clean</text>
              <line x1="200" y1="29" x2="216" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arri)"/>
              <rect x="218" y="10" width="100" height="38" rx="7" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5"/>
              <text x="268" y="28" textAnchor="middle" fontSize="10" fill="#a16207" fontWeight="bold">embed_local.py</text>
              <text x="268" y="41" textAnchor="middle" fontSize="9" fill="#ca8a04">sentence-transformers</text>
              <line x1="318" y1="29" x2="334" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arri)"/>
              <rect x="336" y="10" width="100" height="38" rx="7" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
              <text x="386" y="28" textAnchor="middle" fontSize="10" fill="#9d174d" fontWeight="bold">build_index.py</text>
              <text x="386" y="41" textAnchor="middle" fontSize="9" fill="#be185d">FAISS IndexFlatL2</text>
              <line x1="436" y1="29" x2="452" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arri)"/>
              <rect x="454" y="10" width="100" height="38" rx="7" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>
              <text x="504" y="28" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">index/ dir</text>
              <text x="504" y="41" textAnchor="middle" fontSize="9" fill="#475569">.faiss + .pkl</text>
            </svg>
            <p className="text-xs text-gray-400 mt-1">The index binary and chunk pickle are written to disk. Re-run only when runbooks change.</p>
          </div>
          {/* Query flow */}
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-2">Query path</p>
            <svg viewBox="0 0 680 58" width="100%" className="rounded-lg border border-gray-100 bg-gray-50">
              <defs>
                <marker id="arrq" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
                  <path d="M0,0 L7,3.5 L0,7 L1.5,3.5 z" fill="#94a3b8" />
                </marker>
              </defs>
              <rect x="6" y="10" width="96" height="38" rx="7" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
              <text x="54" y="28" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">User question</text>
              <text x="54" y="41" textAnchor="middle" fontSize="9" fill="#3b82f6">Streamlit input</text>
              <line x1="102" y1="29" x2="118" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrq)"/>
              <rect x="120" y="10" width="88" height="38" rx="7" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
              <text x="164" y="28" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="bold">query.py</text>
              <text x="164" y="41" textAnchor="middle" fontSize="9" fill="#16a34a">embed + FAISS</text>
              <line x1="208" y1="29" x2="224" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrq)"/>
              <rect x="226" y="10" width="100" height="38" rx="7" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5"/>
              <text x="276" y="28" textAnchor="middle" fontSize="10" fill="#a16207" fontWeight="bold">Top-K chunks</text>
              <text x="276" y="41" textAnchor="middle" fontSize="9" fill="#ca8a04">ranked by distance</text>
              <line x1="326" y1="29" x2="342" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrq)"/>
              <rect x="344" y="10" width="104" height="38" rx="7" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
              <text x="396" y="28" textAnchor="middle" fontSize="10" fill="#9d174d" fontWeight="bold">llm_generate.py</text>
              <text x="396" y="41" textAnchor="middle" fontSize="9" fill="#be185d">Ollama or Bedrock</text>
              <line x1="448" y1="29" x2="464" y2="29" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrq)"/>
              <rect x="466" y="10" width="108" height="38" rx="7" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>
              <text x="520" y="28" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">Grounded answer</text>
              <text x="520" y="41" textAnchor="middle" fontSize="9" fill="#475569">+ source citations</text>
            </svg>
            <p className="text-xs text-gray-400 mt-1">Answer always includes the runbook filename so engineers can verify the source in under 30 seconds.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-2">
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800">
              <h4 className="font-mono text-blue-400 text-xs mb-3">// indexing</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-300">
                {[
                  ["data/*.md", "Runbooks are plain Markdown files"],
                  ["H2 chunks", "Split on headings to preserve context"],
                  ["all-MiniLM-L6-v2", "384-dim embeddings, local"],
                  ["IndexFlatL2", "Exact L2 search, no approximation"],
                  ["index/ dir", ".faiss + .pkl written to disk"],
                  ["re-index", "Single script call, seconds on typical sets"],
                ].map(([key, val]) => (
                  <li key={key} className="flex gap-2">
                    <code className="text-emerald-400 flex-shrink-0 text-xs">{key}</code>
                    <span className="text-slate-400 text-xs">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-950 rounded-xl p-5 border border-slate-800">
              <h4 className="font-mono text-blue-400 text-xs mb-3">// query</h4>
              <ul className="flex flex-col gap-2">
                {[
                  ["same model", "Encodes question at query time"],
                  ["top-K=5", "Nearest chunks (configurable)"],
                  ["system prompt", "Chunks injected as context"],
                  ["eval harness", "Tests ALB 5xx and RDS CPU scenarios"],
                  ["Titan Express", "Bedrock path model"],
                  ["Ollama", "llama2, mistral — any local model"],
                ].map(([key, val]) => (
                  <li key={key} className="flex gap-2">
                    <code className="text-emerald-400 flex-shrink-0 text-xs">{key}</code>
                    <span className="text-slate-400 text-xs">{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE PART 2: AWS PIPELINE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded font-mono mt-0.5 flex-shrink-0">02</div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">AWS incident pipeline</h2>
            <p className="text-gray-500 text-sm">CloudWatch alarm → ECS rollback, with a mandatory human approval gate between triage and action.</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <svg viewBox="0 0 840 70" width="100%" className="rounded-lg border border-gray-100 bg-gray-50">
            <defs>
              <marker id="arra" markerWidth="7" markerHeight="7" refX="7" refY="3.5" orient="auto">
                <path d="M0,0 L7,3.5 L0,7 L1.5,3.5 z" fill="#94a3b8" />
              </marker>
            </defs>
            <rect x="4" y="12" width="110" height="46" rx="7" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="59" y="32" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">CloudWatch</text>
            <text x="59" y="45" textAnchor="middle" fontSize="9" fill="#3b82f6">Alarm JSON input</text>
            <text x="59" y="56" textAnchor="middle" fontSize="9" fill="#3b82f6">via Step Functions</text>
            <line x1="114" y1="35" x2="130" y2="35" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arra)"/>
            <rect x="132" y="12" width="110" height="46" rx="7" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1.5"/>
            <text x="187" y="32" textAnchor="middle" fontSize="10" fill="#166534" fontWeight="bold">Step Functions</text>
            <text x="187" y="45" textAnchor="middle" fontSize="9" fill="#16a34a">orchestration</text>
            <text x="187" y="56" textAnchor="middle" fontSize="9" fill="#16a34a">state machine</text>
            <line x1="242" y1="35" x2="258" y2="35" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arra)"/>
            <rect x="260" y="12" width="110" height="46" rx="7" fill="#fef9c3" stroke="#eab308" strokeWidth="1.5"/>
            <text x="315" y="32" textAnchor="middle" fontSize="10" fill="#a16207" fontWeight="bold">Triage Lambda</text>
            <text x="315" y="45" textAnchor="middle" fontSize="9" fill="#ca8a04">classify alarm</text>
            <text x="315" y="56" textAnchor="middle" fontSize="9" fill="#ca8a04">extract ECS context</text>
            <line x1="370" y1="35" x2="386" y2="35" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arra)"/>
            <rect x="388" y="12" width="110" height="46" rx="7" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
            <text x="443" y="32" textAnchor="middle" fontSize="10" fill="#9d174d" fontWeight="bold">SNS Gate</text>
            <text x="443" y="45" textAnchor="middle" fontSize="9" fill="#be185d">email approval</text>
            <text x="443" y="56" textAnchor="middle" fontSize="9" fill="#be185d">blocks state machine</text>
            <line x1="498" y1="35" x2="514" y2="35" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arra)"/>
            <rect x="516" y="12" width="110" height="46" rx="7" fill="#f1f5f9" stroke="#64748b" strokeWidth="1.5"/>
            <text x="571" y="32" textAnchor="middle" fontSize="10" fill="#334155" fontWeight="bold">API Callback</text>
            <text x="571" y="45" textAnchor="middle" fontSize="9" fill="#475569">operator clicks link</text>
            <text x="571" y="56" textAnchor="middle" fontSize="9" fill="#475569">API Gateway + Lambda</text>
            <line x1="626" y1="35" x2="642" y2="35" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arra)"/>
            <rect x="644" y="12" width="110" height="46" rx="7" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="699" y="32" textAnchor="middle" fontSize="10" fill="#1e40af" fontWeight="bold">Rollback Lambda</text>
            <text x="699" y="45" textAnchor="middle" fontSize="9" fill="#3b82f6">ECS task def revert</text>
            <text x="699" y="56" textAnchor="middle" fontSize="9" fill="#3b82f6">APPROVE only</text>
          </svg>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Triage Lambda", color: "border-blue-500 bg-blue-50", titleColor: "text-blue-800", items: [
                ["input", "Alarm name + state from Step Functions"],
                ["routing", "ALB/ECS alarms → rollback path"],
                ["context", "Extracts cluster, service, task def ARN"],
                ["output", "Context dict to state machine"],
                ["non-ECS", "Completes without triggering rollback"],
                ["logs", "Structured output every execution"],
              ]},
              { title: "SNS Gate", color: "border-pink-500 bg-pink-50", titleColor: "text-pink-800", items: [
                ["wait", "Pauses at waitForTaskToken"],
                ["email", "APPROVE + REJECT links via SNS"],
                ["callback", "Links hit API Gateway with token"],
                ["resume", "SendTaskSuccess or SendTaskFailure"],
                ["blocking", "State machine frozen until response"],
                ["timeout", "Configurable token expiry"],
              ]},
              { title: "Rollback Lambda", color: "border-emerald-500 bg-emerald-50", titleColor: "text-emerald-800", items: [
                ["input", "Cluster, service, prev task def ARN"],
                ["action", "ECS update_service → prior task def"],
                ["guard", "Exits cleanly if context is missing"],
                ["trigger", "APPROVE signal only"],
                ["trace", "Full execution log in Step Functions"],
                ["iam", "Scoped to target ECS service only"],
              ]},
            ].map(({ title, color, titleColor, items }) => (
              <div key={title} className={`rounded-xl border-l-4 p-5 ${color}`}>
                <h4 className={`font-bold text-sm mb-3 ${titleColor}`}>{title}</h4>
                <ul className="flex flex-col gap-2">
                  {items.map(([key, val]) => (
                    <li key={key} className="flex gap-2 text-xs">
                      <code className="text-gray-500 flex-shrink-0">{key}</code>
                      <span className="text-gray-700">{val}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Deploy with AWS SAM</p>
            <pre className="bg-gray-900 text-green-300 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">
{`# Build and deploy the full stack
sam build
sam deploy --guided

# Parameters prompted:
# ApproverEmail     — SNS subscription address
# TriageFunctionName
# CallbackApiStageName`}
            </pre>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Demo execution</p>
            <pre className="bg-gray-900 text-green-300 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">
{`# Start execution with simulated CloudWatch alarm
aws stepfunctions start-execution \\
  --state-machine-arn arn:aws:states:us-east-1:123456789:stateMachine:IncidentStateMachine \\
  --input '{"alarmName":"ALB-5xx-High","alarmState":"ALARM","cluster":"prod","service":"web-api"}'

# Check execution status
aws stepfunctions describe-execution \\
  --execution-arn <execution-arn>

# Approve rollback via API callback (sent in SNS email)
curl "https://<api-gw-id>.execute-api.us-east-1.amazonaws.com/prod/approve?token=<task-token>&action=APPROVE"`}
            </pre>
          </div>
        </div>
      </section>

      {/* REPO STRUCTURE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Repository structure</h2>
        <pre className="bg-gray-900 text-gray-200 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">
{`ops-copilot-bedrock/
  data/                          # Markdown runbooks (ALB, RDS, ECS)
  src/
    rag/
      ingest.py                  # Load and chunk runbook Markdown files
      embed_local.py             # Embed chunks with sentence-transformers
      build_index.py             # Build and write FAISS index to disk
      query.py                   # Embed question, search index, return top-K chunks
      llm_generate.py            # Build prompt, call Ollama or Bedrock, return answer
    aws/
      triage_lambda/             # Classify alarm, extract ECS context
      callback_lambda/           # Receive API callback, send Step Functions task token
      rollback_lambda/           # Call ECS update_service to revert task definition
  ui/
    app.py                       # Streamlit UI for RAG query interface
  infra/
    template.yaml                # AWS SAM template (Step Functions, Lambda, API GW, SNS)
    state_machine_definition.json
  index/                         # Generated: FAISS binary + chunk pickle (gitignored)
  tests/
    eval_harness.py              # Scenario-based evaluation for ALB 5xx and RDS CPU
  run_all.py                     # One-command local runner (index + Streamlit)
  requirements.txt
  .env.example`}
        </pre>
      </section>

      {/* TECH STACK */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Full tech stack</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-200">
                <th className="text-left font-bold text-blue-800 py-2 pr-6">Component</th>
                <th className="text-left font-bold text-blue-800 py-2 pr-6">Technology</th>
                <th className="text-left font-bold text-blue-800 py-2">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frontend","Streamlit","Conversational query UI, real-time answer streaming"],
                ["Embedding","sentence-transformers all-MiniLM-L6-v2","384-dim local embedding, no API key required"],
                ["Vector store","FAISS IndexFlatL2","Exact nearest-neighbor search over chunked runbooks"],
                ["Local LLM","Ollama","Runs any locally pulled model, fully air-gapped capable"],
                ["Cloud LLM","Amazon Bedrock (Titan)","Cloud inference path for production deployments"],
                ["Orchestration","AWS Step Functions","State machine with waitForTaskToken approval step"],
                ["Triage","AWS Lambda (Python)","Alarm classification and ECS context extraction"],
                ["Approval gate","Amazon SNS","Email with approve/reject links, task token callback"],
                ["Callback","API Gateway + Lambda","Receives operator click, resumes state machine"],
                ["Remediation","AWS Lambda + Amazon ECS","Reverts ECS service to previous task definition"],
                ["IaC","AWS SAM","Single template for all Lambda, Step Functions, API GW, SNS"],
                ["Evaluation","Custom harness (Python)","Scenario-based retrieval and generation quality tests"],
              ].map(([comp, tech, purpose]) => (
                <tr key={comp} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                  <td className="py-2 pr-6 font-semibold text-gray-800">{comp}</td>
                  <td className="py-2 pr-6 text-blue-700 font-medium">{tech}</td>
                  <td className="py-2 text-gray-600">{purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* QUICKSTART */}
      <section className="max-w-screen-xl mx-auto px-6 py-10 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quickstart</h2>
        <pre className="bg-gray-900 text-green-300 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">
{`# Clone and install dependencies
git clone https://github.com/Sankartk/ops-copilot-bedrock
cd ops-copilot-bedrock
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Edit .env:
# LLM_BACKEND=ollama          # or "bedrock"
# OLLAMA_MODEL=mistral        # any model you have pulled
# AWS_REGION=us-east-1
# BEDROCK_MODEL_ID=amazon.titan-text-express-v1

# Add your runbooks to data/ as Markdown files
# then index once:
python src/rag/build_index.py

# Launch the Streamlit UI
python run_all.py             # builds index + starts Streamlit in one command`}
        </pre>
      </section>

      {/* GUARDRAILS / LIMITATIONS / FUTURE */}
      <section className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-950 rounded-xl border border-emerald-900 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400"/>
              <h3 className="font-bold text-emerald-400 text-xs uppercase tracking-widest font-mono">Guardrails</h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                "No rollback without APPROVE click",
                "Full state trace in Step Functions",
                "Lambda exits cleanly on missing context",
                "IAM scoped to target ECS service",
                "Token timeout = safe expiry",
                "RAG answers cite source files",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950 rounded-xl border border-yellow-900 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400"/>
              <h3 className="font-bold text-yellow-400 text-xs uppercase tracking-widest font-mono">Known limits</h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                "FAISS has no incremental index updates",
                "Only ECS rollback implemented",
                "SNS path needs inbound HTTPS",
                "Ollama quality varies — use mistral+",
                "No chunk deduplication across files",
                "Eval harness is scenario-based only",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-yellow-500 mt-0.5 flex-shrink-0">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-950 rounded-xl border border-blue-900 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400"/>
              <h3 className="font-bold text-blue-400 text-xs uppercase tracking-widest font-mono">Next up</h3>
            </div>
            <ul className="flex flex-col gap-2.5">
              {[
                "Slack approval instead of email",
                "RDS + Lambda error routing rules",
                "Persistent audit history export",
                "Chunk overlap + deduplication tuning",
                "Reranker before LLM context window",
                "RAGAS scoring for retrieval quality",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <footer className="max-w-screen-xl mx-auto px-6 py-8 border-t border-gray-100 flex gap-6 text-sm">
        <a href="/" className="text-blue-700 hover:underline">Back to portfolio</a>
        <a href="https://github.com/Sankartk/ops-copilot-bedrock" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">GitHub repo</a>
      </footer>
    </main>
  )
}
