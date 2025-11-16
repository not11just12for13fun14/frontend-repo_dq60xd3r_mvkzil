import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Your Name — Built with love and a sprinkle of motion.
      </footer>
    </div>
  )
}

export default App
