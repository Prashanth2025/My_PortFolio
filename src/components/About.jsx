export default function About() {
  return (
    <section className="section-shell" id="about">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* Left col */}
          <div className="col-12 col-lg-4 reveal">
            <div className="section-eyebrow">01 / About</div>
            <h2 className="section-title">Who<br /><em>I Am</em></h2>

            {/* Avatar card */}
            <div className="pr-card p-4 d-flex align-items-center gap-3">
              <div style={{ position:'relative', flexShrink:0 }}>
                <div style={{
                  width:78, height:78, borderRadius:'50%',
                  background:'linear-gradient(135deg,#1f2c3d,#c8a96e)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'var(--ff-display)', fontSize:26, fontWeight:700, color:'#fff',
                  position:'relative', zIndex:1,
                }}>PR</div>
                <div style={{ position:'absolute', inset:-5, borderRadius:'50%', border:'1px solid rgba(200,169,110,0.3)', animation:'spin-ring 11s linear infinite' }} />
              </div>
              <div>
                <div style={{ fontFamily:'var(--ff-display)', fontSize:17, fontWeight:700 }}>Prashanth R</div>
                <div style={{ fontFamily:'var(--ff-mono)', fontSize:11, color:'var(--gold)', letterSpacing:'0.06em', marginTop:3 }}>Full-Stack Developer</div>
                <div style={{ fontSize:12, color:'var(--text-muted)', marginTop:4 }}>
                  <i className="bi bi-geo-alt-fill me-1" style={{ color:'var(--gold)' }} />
                  Bengaluru, India
                </div>
              </div>
            </div>

            {/* Contact links */}
            <div className="mt-4 d-flex flex-column gap-2">
              {[
                { icon:'bi-envelope-fill', text:'prashanthramesh.02@gmail.com', href:'mailto:prashanthramesh.02@gmail.com' },
                { icon:'bi-telephone-fill', text:'+91 9108289912', href:'tel:+919108289912' },
              ].map(({ icon, text, href }) => (
                <a key={href} href={href}
                  style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'var(--ff-mono)', fontSize:12, color:'var(--text-muted)', transition:'color 0.25s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='var(--gold)'}
                  onMouseLeave={e=>e.currentTarget.style.color='var(--text-muted)'}
                >
                  <i className={`bi ${icon}`} style={{ color:'var(--gold)', fontSize:14 }} />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Right col */}
          <div className="col-12 col-lg-8 reveal">
            <p style={{ fontFamily:'var(--ff-sans)', fontWeight:300, fontSize:17, color:'var(--text-muted)', lineHeight:1.85, marginBottom:22 }}>
              I'm a <strong style={{ color:'var(--text)', fontWeight:600 }}>Full-Stack Developer and Apprentice Trainee</strong> with hands-on experience in MERN stack web development, PL/SQL database programming, .NET application development, and AI/ML integration.
            </p>
            <p style={{ fontFamily:'var(--ff-sans)', fontWeight:300, fontSize:17, color:'var(--text-muted)', lineHeight:1.85, marginBottom:22 }}>
              Currently undergoing apprenticeship training at <strong style={{ color:'var(--gold)', fontWeight:500 }}>Hindustan Aeronautics Limited (HAL)</strong>, Engine Division — contributing to enterprise-grade data entry systems and the official HAL web portal.
            </p>
            <p style={{ fontFamily:'var(--ff-sans)', fontWeight:300, fontSize:17, color:'var(--text-muted)', lineHeight:1.85, marginBottom:32 }}>
              Skilled in RESTful API design, JWT authentication, cloud deployment and data visualisation, with a strong foundation in JavaScript (ES6+), Python, Git, and modern UI/UX tools.
            </p>

            <hr className="gold-rule mb-4" />

            <div className="row g-3">
              {[
                { label:'Degree', value:'Bachelor of Computer Applications' },
                { label:'Institution', value:'East Point College of Higher Education' },
                { label:'Year', value:'2022 – 2025' },
                { label:'Status', value:'Apprentice @ HAL Engine Division' },
              ].map(({ label, value }) => (
                <div key={label} className="col-12 col-sm-6">
                  <div style={{ fontFamily:'var(--ff-mono)', fontSize:10.5, color:'var(--gold)', letterSpacing:'0.14em', textTransform:'uppercase', marginBottom:4 }}>{label}</div>
                  <div style={{ fontSize:14.5, color:'var(--text)', fontWeight:500 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
