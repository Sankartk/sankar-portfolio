export default function Navbar() {
  return (
    <nav className="w-full bg-[#faf9f6]/90 backdrop-blur border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-3.5 px-6">

        <a href="/" className="flex items-baseline gap-1.5">
          <span className="text-stone-900 font-bold text-[15px] tracking-tight">Sankar Kalyanakumar</span>
          <span className="text-stone-400 text-xs hidden sm:block">sankartk.dev</span>
        </a>

        <div className="flex items-center gap-5 text-[13px]">
          <a href="/#projects" className="text-stone-500 hover:text-stone-900 transition-colors">Work</a>
          <a href="https://github.com/Sankartk" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/sankartk11" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors hidden sm:block">LinkedIn</a>
          <a href="mailto:karthicks399@gmail.com" className="font-medium text-stone-900 border border-stone-300 hover:border-stone-900 rounded-md px-3 py-1.5 transition-colors">Contact</a>
        </div>

      </div>
    </nav>
  )
}
