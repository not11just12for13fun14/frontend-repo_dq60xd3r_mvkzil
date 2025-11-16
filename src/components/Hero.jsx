import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="backdrop-blur-sm/0">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Hey, I'm <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Your Name</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-lg text-slate-700 max-w-xl">
            Software Engineer crafting delightful, scalable web experiences. I blend solid engineering with playful, modern interfaces.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-sm font-semibold shadow border border-slate-200 hover:bg-white">Get in Touch</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex items-center gap-4 text-slate-600">
            <span className="text-xs uppercase tracking-wider">Featured Stack</span>
            <div className="h-px w-12 bg-slate-200" />
            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 rounded-md bg-white/70 border border-slate-200">React</span>
              <span className="px-2 py-1 rounded-md bg-white/70 border border-slate-200">TypeScript</span>
              <span className="px-2 py-1 rounded-md bg-white/70 border border-slate-200">Node</span>
            </div>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
    </section>
  )
}
