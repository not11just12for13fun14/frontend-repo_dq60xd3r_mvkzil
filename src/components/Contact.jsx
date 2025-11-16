import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.')
        e.target.reset()
      } else {
        setStatus(data.detail || 'Something went wrong.')
      }
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="mt-2 text-slate-600">Let’s build something great together.</p>
        </div>

        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid grid-cols-1 gap-4">
          <input name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-200 bg-white/70 p-3" required />
          <input type="email" name="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 bg-white/70 p-3" required />
          <textarea name="message" placeholder="Message" rows="5" className="w-full rounded-lg border border-slate-200 bg-white/70 p-3" required />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800">Send</button>
            {status && <span className="text-sm text-slate-600">{status}</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
