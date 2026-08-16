export default function Navbar() {
  return (
    <nav className="w-full bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-3 px-6">

        <a href="/" className="flex items-center gap-2 group">
          <span className="w-7 h-7 rounded bg-violet-700 flex items-center justify-center text-white text-xs font-black font-mono group-hover:bg-violet-600 transition-colors">SK</span>
          <span className="text-white font-bold text-sm tracking-wide hidden sm:block">sankartk</span>
          <span className="text-slate-600 text-xs font-mono hidden sm:block">.dev</span>
        </a>

        <div className="flex items-center gap-1">
          <a href="/#projects" className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded hover:bg-slate-800 transition-all">projects</a>
          <a href="https://github.com/Sankartk" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded hover:bg-slate-800 transition-all">github</a>
          <a href="https://linkedin.com/in/sankartk11" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white text-xs font-mono px-3 py-1.5 rounded hover:bg-slate-800 transition-all hidden sm:block">linkedin</a>
          <a href="mailto:karthicks399@gmail.com" className="ml-2 bg-violet-700 hover:bg-violet-600 text-white text-xs font-bold font-mono px-3 py-1.5 rounded transition-colors">contact →</a>
        </div>

      </div>
    </nav>
  )
}