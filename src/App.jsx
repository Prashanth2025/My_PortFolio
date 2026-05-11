import { useEffect } from 'react'
import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import About    from './components/About.jsx'
import Skills   from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Resume   from './components/Resume.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

export default function App() {
  /* Scroll-reveal observer */
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const siblings = Array.from(entry.target.parentElement.children)
          const delay = Math.min(siblings.indexOf(entry.target) * 90, 450)
          setTimeout(() => entry.target.classList.add('visible'), delay)
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -48px 0px' }
    )
    const t = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    }, 120)
    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
