const CONTACTS = [
  { icon:'bi-envelope-fill',   label:'Email',    value:'prashanthramesh.02@gmail.com', href:'mailto:prashanthramesh.02@gmail.com' },
  { icon:'bi-telephone-fill',  label:'Phone',    value:'+91 9108289912',              href:'tel:+919108289912' },
  { icon:'bi-linkedin',        label:'LinkedIn', value:'Connect with me',              href:'https://linkedin.com' },
  { icon:'bi-github',          label:'GitHub',   value:'View my code',                href:'https://github.com' },
]

export default function Contact() {
  return (
    <section className="section-shell" id="contact">
      <div className="container">
        <div className="section-eyebrow">07 / Contact</div>
        <h2 className="section-title">Let's Build<br /><em>Together</em></h2>

        <p style={{ fontFamily:'var(--ff-sans)', fontWeight:300, fontSize:18, color:'var(--text-muted)', maxWidth:480, marginBottom:52, marginTop:-36, lineHeight:1.75 }}>
          Open to full-time roles, freelance projects and collaboration opportunities.
        </p>

        <div className="row g-4">
          {CONTACTS.map(c => (
            <div key={c.label} className="col-12 col-sm-6">
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="pr-card reveal d-flex align-items-start gap-4 p-4 h-100"
                style={{ position:'relative', overflow:'hidden', textDecoration:'none' }}
                onMouseEnter={e=>{
                  e.currentTarget.style.transform='translateY(-4px)'
                  e.currentTarget.querySelector('.contact-bar').style.transform='scaleX(1)'
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.transform=''
                  e.currentTarget.querySelector('.contact-bar').style.transform='scaleX(0)'
                }}
              >
                {/* bottom accent bar */}
                <div className="contact-bar" style={{ position:'absolute', bottom:0, left:0, right:0, height:2, background:'linear-gradient(90deg,var(--gold),var(--teal))', transform:'scaleX(0)', transformOrigin:'left', transition:'transform 0.35s var(--ease)' }} />

                <div style={{ width:44, height:44, borderRadius:10, background:'rgba(200,169,110,0.08)', border:'1px solid var(--rule)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <i className={`bi ${c.icon}`} style={{ fontSize:18, color:'var(--gold)' }} />
                </div>
                <div>
                  <div style={{ fontFamily:'var(--ff-mono)', fontSize:10.5, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.14em', marginBottom:5 }}>{c.label}</div>
                  <div style={{ fontFamily:'var(--ff-display)', fontSize:16, fontWeight:600, color:'var(--text)', wordBreak:'break-all' }}>{c.value}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
