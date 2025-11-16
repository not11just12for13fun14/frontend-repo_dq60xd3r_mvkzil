import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collaboration App',
    description: 'Multi-user canvas with presence, comments, and granular permissions.',
    tags: ['React', 'WebSockets', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI-Assisted Code Review',
    description: 'Automated insights for pull requests with inline suggestions.',
    tags: ['FastAPI', 'OpenAI', 'MongoDB'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Design System Starter',
    description: 'Accessible component library with tokens and theming.',
    tags: ['Radix', 'Framer Motion', 'Storybook'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Selected Work</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">A few projects showcasing product sense, performance, and polish.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-slate-800">Work with me</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-blue-100 to-violet-100 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 text-slate-600">
                <a href={p.link} className="inline-flex items-center gap-1 hover:text-slate-900"><ExternalLink size={16}/> Live</a>
                <a href={p.repo} className="inline-flex items-center gap-1 hover:text-slate-900"><Github size={16}/> Code</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
