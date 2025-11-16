import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-gradient-to-br from-blue-50 to-violet-50 p-6 border border-slate-200">
          <div className="aspect-square rounded-xl bg-white/60 border border-slate-200" />
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold text-slate-900">About</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            I'm a product-focused engineer who enjoys building fast, delightful interfaces and robust backend systems. I love working across the stack and sweating details—from accessibility and animations to API performance and DX.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="px-3 py-2 rounded-md bg-slate-100">7+ years experience</li>
            <li className="px-3 py-2 rounded-md bg-slate-100">Led teams of 4-8 engineers</li>
            <li className="px-3 py-2 rounded-md bg-slate-100">Open-source contributor</li>
            <li className="px-3 py-2 rounded-md bg-slate-100">Speaker & mentor</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
