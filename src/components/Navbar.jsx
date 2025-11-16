import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600" />
          <span className="font-semibold text-slate-800">Software Engineer</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
          ))}
          <div className="h-6 w-px bg-slate-200" />
          <div className="flex items-center gap-3 text-slate-600">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Linkedin size={18} /></a>
            <a aria-label="Email" href="mailto:hello@example.com" className="hover:text-slate-900"><Mail size={18} /></a>
          </div>
        </div>

        <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            {links.map((l) => (
              <div key={l.href}>
                <NavLink href={l.href} onClick={close}>{l.label}</NavLink>
              </div>
            ))}
            <div className="flex items-center gap-4 pt-2 text-slate-600">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900"><Linkedin size={18} /></a>
              <a aria-label="Email" href="mailto:hello@example.com" className="hover:text-slate-900"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
