import { motion } from 'framer-motion'
import { Code, Server, Boxes, Sparkles } from 'lucide-react'

const groups = [
  { title: 'Frontend', icon: Code, items: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { title: 'Backend', icon: Server, items: ['FastAPI', 'Node', 'GraphQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Product', icon: Boxes, items: ['Design Systems', 'A/B Testing', 'Analytics', 'Accessibility'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Skills</h2>
            <p className="mt-2 text-slate-600">A blend of engineering depth and product intuition.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 text-slate-600 text-sm"><Sparkles size={16}/> Always learning</span>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <g.icon className="text-slate-700" />
                <h3 className="text-lg font-semibold text-slate-900">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="px-2 py-1 rounded-md bg-slate-100 text-slate-700 text-xs">{it}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
