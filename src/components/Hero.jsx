import { useEffect, useRef } from 'react'

export default function Hero() {
  const orbA = useRef(null)
  const orbB = useRef(null)
  const orbC = useRef(null)

  useEffect(() => {
    const fn = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      ;[orbA, orbB, orbC].forEach((r, i) => {
        if (r.current) r.current.style.transform = `translate(${x*(i+1)*0.55}px,${y*(i+1)*0.55}px)`
      })
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  /* stagger hero items on load */
  useEffect(() => {
    document.querySelectorAll('.hero-reveal').forEach((el, i) => {
      setTimeout(() => { el.style.opacity=1; el.style.transform='translateY(0)' }, 300 + i*160)
    })
  }, [])

  const heroReveal = {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)',
  }

  return (
    <section
      id="hero"
      style={{
        minHeight:'100vh', display:'flex', alignItems:'center',
        position:'relative', overflow:'hidden',
        paddingTop:130, paddingBottom:80,
        background: 'var(--ink)',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position:'absolute', inset:0, zIndex:0,
        backgroundImage:`
          linear-gradient(rgba(200,169,110,0.04) 1px,transparent 1px),
          linear-gradient(90deg,rgba(200,169,110,0.04) 1px,transparent 1px)`,
        backgroundSize:'64px 64px',
      }} />

      {/* Orbs */}
      <div ref={orbA} style={{ position:'absolute', top:'-10%', right:'-8%', width:620, height:620, borderRadius:'50%', background:'radial-gradient(circle,rgba(200,169,110,0.12),transparent 68%)', filter:'blur(70px)', transition:'transform 0.12s linear', zIndex:0, animation:'float-orb 11s ease-in-out infinite alternate' }} />
      <div ref={orbB} style={{ position:'absolute', bottom:'-12%', left:'2%', width:480, height:480, borderRadius:'50%', background:'radial-gradient(circle,rgba(78,205,196,0.09),transparent 68%)', filter:'blur(80px)', transition:'transform 0.12s linear', zIndex:0, animation:'float-orb 14s ease-in-out infinite alternate-reverse' }} />
      <div ref={orbC} style={{ position:'absolute', top:'38%', left:'42%', width:320, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(200,169,110,0.07),transparent 68%)', filter:'blur(60px)', transition:'transform 0.12s linear', zIndex:0, animation:'float-orb 9s ease-in-out infinite alternate' }} />

      <div className="container position-relative" style={{ zIndex:1 }}>
        <div className="row">
          <div className="col-12 col-xl-10">

            {/* Status badge */}
            <div className="hero-reveal d-inline-flex align-items-center gap-2 mb-4" style={{ ...heroReveal, background:'var(--panel)', border:'1px solid var(--rule)', borderRadius:100, padding:'7px 18px', fontFamily:'var(--ff-mono)', fontSize:12.5, color:'var(--text-muted)', letterSpacing:'0.07em' }}>
              <span style={{ width:8, height:8, borderRadius:'50%', background:'var(--teal)', flexShrink:0, animation:'pulse-dot 2s infinite' }} />
              Open to opportunities
            </div>

            {/* Name */}
            <h1 className="hero-reveal mb-3" style={{ ...heroReveal, fontFamily:'var(--ff-display)', fontSize:'clamp(62px,11vw,130px)', fontWeight:900, lineHeight:0.9, letterSpacing:'-3px', color:'var(--text)' }}>
              Prashanth
              <br />
              <span style={{ color:'var(--gold)' }}>R
                <span style={{ color:'var(--teal)', animation:'blink-cursor 1.1s step-start infinite', marginLeft:4 }}>_</span>
              </span>
            </h1>

            {/* Role */}
            <p className="hero-reveal mb-4" style={{ ...heroReveal, fontFamily:'var(--ff-mono)', fontSize:'clamp(12px,1.5vw,15px)', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)' }}>
              MERN Stack &amp; Backend Developer
            </p>

            {/* Sub */}
            <p className="hero-reveal mb-5" style={{ ...heroReveal, fontFamily:'var(--ff-sans)', fontWeight:300, fontSize:'clamp(15px,1.6vw,18px)', color:'var(--text-muted)', maxWidth:540, lineHeight:1.8 }}>
              Building enterprise-grade systems, intelligent web apps and AI-powered experiences — currently an apprentice at <strong style={{ color:'var(--text)', fontWeight:500 }}>HAL, Bengaluru</strong>.
            </p>

            {/* CTAs */}
            <div className="hero-reveal d-flex flex-wrap gap-3 mb-5" style={heroReveal}>
              <a href="#projects" className="btn-gold">View Projects</a>
              <a href="#contact" className="btn-outline-gold">Get in Touch</a>
            </div>

            {/* Stats */}
            <div className="hero-reveal d-flex flex-wrap gap-4 align-items-center" style={heroReveal}>
              {[['2+','Years Coding'],['5+','Tech Stacks'],['HAL','Apprentice'],['2','Live Projects']].map(([n,l],i,arr) => (
                <div key={l} className="d-flex align-items-center gap-4">
                  <div>
                    <div style={{ fontFamily:'var(--ff-display)', fontSize:28, fontWeight:700, color:'var(--gold)', lineHeight:1 }}>{n}</div>
                    <div style={{ fontFamily:'var(--ff-mono)', fontSize:10.5, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.13em', marginTop:4 }}>{l}</div>
                  </div>
                  {i < arr.length-1 && <div style={{ width:1, height:38, background:'var(--rule)' }} />}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8, fontFamily:'var(--ff-mono)', fontSize:10, color:'var(--text-dim)', letterSpacing:'0.2em', textTransform:'uppercase' }}>
        <span>Scroll</span>
        <div style={{ width:1, height:48, background:`linear-gradient(var(--gold),transparent)`, animation:'scroll-indicator 2s ease-in-out infinite' }} />
      </div>
    </section>
  )
}
