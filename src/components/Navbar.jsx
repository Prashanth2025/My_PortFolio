import { useState, useEffect } from 'react'

const NAV_LINKS = ['About','Skills','Experience','Projects','Resume','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle = {
    background: scrolled ? 'rgba(10,14,23,0.94)' : 'transparent',
    backdropFilter: scrolled ? 'blur(18px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(200,169,110,0.12)' : '1px solid transparent',
    padding: scrolled ? '12px 0' : '22px 0',
    transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
  }

  return (
    <nav style={navStyle}>
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <a href="#hero" style={{ fontFamily:'var(--ff-display)', fontSize:22, fontWeight:700, color:'var(--text)', letterSpacing:'-0.3px' }}>
          Prashanth<span style={{ color:'var(--gold)' }}>.</span>
        </a>

        {/* Desktop links */}
        <ul className="d-none d-lg-flex list-unstyled mb-0 gap-4 align-items-center">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                style={{ fontFamily:'var(--ff-mono)', fontSize:12.5, letterSpacing:'0.1em', color:'var(--text-muted)', textTransform:'uppercase', transition:'color 0.25s' }}
                onMouseEnter={e => e.target.style.color='var(--gold)'}
                onMouseLeave={e => e.target.style.color='var(--text-muted)'}
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="mailto:prashanthramesh.02@gmail.com" className="btn-gold" style={{ padding:'8px 22px', borderRadius:'6px', fontSize:12.5 }}>
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="d-lg-none border-0 bg-transparent p-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          style={{ color:'var(--text)', fontSize:22 }}
        >
          <i className={`bi ${open ? 'bi-x-lg' : 'bi-list'}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div style={{
        background:'var(--ink-2)',
        borderTop:'1px solid var(--rule)',
        maxHeight: open ? '400px' : '0',
        overflow:'hidden',
        transition:'max-height 0.4s var(--ease)',
      }}>
        <ul className="list-unstyled mb-0 py-3 px-4">
          {NAV_LINKS.map(l => (
            <li key={l} className="py-2">
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{ fontFamily:'var(--ff-display)', fontSize:22, fontWeight:600, color:'var(--text)' }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
