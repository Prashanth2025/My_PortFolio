const SKILLS = [
  { icon:'bi-layout-text-window-reverse', title:'Frontend', tags:['React.js','JavaScript ES6+','HTML5','CSS3','Bootstrap 5'] },
  { icon:'bi-server',                     title:'Backend',  tags:['Node.js','Express.js','REST APIs','JWT Auth','.NET Framework'] },
  { icon:'bi-database-fill',              title:'Database', tags:['MongoDB','Mongoose','SQL','PL/SQL'] },
  { icon:'bi-tools',                      title:'Tools & Deploy', tags:['Git','GitHub','Postman','Render','Vercel','Thunder Client'] },
  { icon:'bi-cpu-fill',                   title:'AI / ML',  tags:['Python','scikit-learn','Flask','OpenWeatherMap API'] },
  { icon:'bi-vector-pen',                 title:'UI / UX',  tags:['Figma','Canva','Chart.js'] },
]

export default function Skills() {
  return (
    <section className="section-shell alt" id="skills">
      <div className="container">
        <div className="section-eyebrow">02 / Skills</div>
        <h2 className="section-title">Technical<br /><em>Arsenal</em></h2>

        <div className="row g-4">
          {SKILLS.map((sk) => (
            <div key={sk.title} className="col-12 col-md-6 col-lg-4">
              <div className="pr-card reveal h-100 p-4"
                style={{ '--hover-lift':'translateY(-5px)' }}
                onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-5px)' }}
                onMouseLeave={e=>{ e.currentTarget.style.transform='' }}
              >
                {/* top accent bar */}
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, borderRadius:'var(--r-lg) var(--r-lg) 0 0', background:'linear-gradient(90deg,var(--gold),var(--teal))', opacity:0, transition:'opacity 0.3s' }}
                  ref={el => {
                    if (!el) return
                    const card = el.parentElement
                    card.addEventListener('mouseenter',()=>el.style.opacity=1)
                    card.addEventListener('mouseleave',()=>el.style.opacity=0)
                  }}
                />

                <div style={{ position:'relative' }}>
                  <div className="mb-3">
                    <i className={`bi ${sk.icon}`} style={{ fontSize:28, color:'var(--gold)' }} />
                  </div>
                  <h3 style={{ fontFamily:'var(--ff-display)', fontSize:20, fontWeight:700, marginBottom:16 }}>{sk.title}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {sk.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
