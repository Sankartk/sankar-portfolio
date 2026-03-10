export default function ProjectCard() {
  return (
    <a
      href="/projects/ops-copilot"
      className="group bg-neutral-900 border-2 border-blue-700 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src="/rag.png"
          alt="Ops Copilot preview"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 to-transparent" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-2xl font-bold text-blue-400 mb-2">Ops Copilot</h3>
        <p className="text-neutral-300 mb-4">
          AI assistant that retrieves operational runbooks during production incidents using Retrieval-Augmented Generation (RAG).
        </p>
        <span className="inline-block bg-blue-700/80 text-white text-xs font-semibold px-3 py-1 rounded-full self-start">AI / Data Engineering</span>
      </div>
    </a>
  )
}
