const PROJECTS = [
  {
    num:'01',
    title:'ThoughtPal',
    sub:'Full-Stack Notes Application',
    desc:'A secure MERN stack note-taking app with real-time React updates, JWT + bcrypt authentication and email notifications. Deployed on Render for reliable cross-device access.',
    stack:['React.js (Vite)','Node.js','Express.js','MongoDB','JWT','Bootstrap'],
    url:'https://thoughtpal-1.onrender.com/',
    featured: true,
  },
  {
    num:'02',
    title:'FarmerAI',
    sub:'AI-Powered Farming Web Service',
    desc:'An intelligent farming assistant delivering ML-based crop recommendations, live weather data via OpenWeatherMap and market price trend dashboards for data-driven decisions.',
    stack:['Flask','React.js','Python','scikit-learn','Chart.js','OpenWeatherMap API'],
    url:'https://farmer-ai-x2hw.onrender.com',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="section-shell alt" id="projects">
      <div className="container">
        <div className="section-eyebrow">04 / Projects</div>
        <h2 className="section-title">What I've<br /><em>Built</em></h2>

        <div className="row g-4">
          {PROJECTS.map(p => (
            <div key={p.title} className="col-12 col-lg-6">
              <div
                className="pr-card reveal h-100 p-4 p-md-5 d-flex flex-column"
                style={{ position:'relative', overflow:'hidden', ...(p.featured ? { borderColor:'rgba(200,169,110,0.25)' } : {}) }}
                onMouseEnter={e=>e.currentTarget.style.transform='translateY(-6px)'}
                onMouseLeave={e=>e.currentTarget.style.transform=''}
              >
                {/* Featured glow */}
                {p.featured && (
                  <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(200,169,110,0.04),transparent 55%)', pointerEvents:'none' }} />
                )}

                <div className="d-flex justify-content-between align-items-start mb-4">
                  <span style={{ fontFamily:'var(--ff-mono)', fontSize:52, fontWeight:300, color:'var(--text-dim)', lineHeight:1 }}>{p.num}</span>
                  <a href={p.url} target="_blank" rel="noreferrer"
                    style={{ width:40, height:40, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid var(--rule)', borderRadius:8, color:'var(--text-muted)', fontSize:16, transition:'all 0.25s' }}
                    onMouseEnter={e=>{ e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.color='var(--gold)' }}
                    onMouseLeave={e=>{ e.currentTarget.style.borderColor='var(--rule)'; e.currentTarget.style.color='var(--text-muted)' }}
                    title="Live Demo"
                  >
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>

                <h3 style={{ fontFamily:'var(--ff-display)', fontSize:28, fontWeight:700, letterSpacing:'-0.3px', marginBottom:4 }}>{p.title}</h3>
                <p style={{ fontFamily:'var(--ff-mono)', fontSize:11.5, color:'var(--gold)', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:16 }}>{p.sub}</p>
                <p style={{ color:'var(--text-muted)', fontSize:15, lineHeight:1.8, marginBottom:24, flexGrow:1 }}>{p.desc}</p>

                <div className="d-flex flex-wrap gap-2 mb-4">
                  {p.stack.map(s => <span key={s} className="tag-chip">{s}</span>)}
                </div>

                <div>
                  <a href={p.url} target="_blank" rel="noreferrer"
                    style={{ fontFamily:'var(--ff-mono)', fontSize:13, color:'var(--gold)', letterSpacing:'0.06em', display:'inline-flex', alignItems:'center', gap:6, transition:'gap 0.3s' }}
                    onMouseEnter={e=>e.currentTarget.style.gap='14px'}
                    onMouseLeave={e=>e.currentTarget.style.gap='6px'}
                  >
                    View Live Demo <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
