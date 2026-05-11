const EXP = [
  {
    pill:'Current', pillType:'pill-teal',
    date:'Present',
    role:'Apprentice Trainee',
    org:'Hindustan Aeronautics Limited (HAL) · Engine Division · Bengaluru',
    sub:'Roles: Data Entry Operator · PL/SQL Developer · .NET Developer',
    points:[
      'Contributing to the development and maintenance of HAL\'s official website using the .NET framework, ensuring performance, reliability and enterprise compliance.',
      'Writing and optimising PL/SQL queries, stored procedures and database scripts to support data operations within the Engine Division.',
      'Performing structured data entry and data management, maintaining accuracy and integrity of critical operational records.',
      'Gaining experience in enterprise software workflows, version control practices and large-scale organisational IT systems.',
    ],
  },
  {
    pill:'Internship', pillType:'pill-gold',
    date:'Jan 2025 – Feb 2025',
    role:'AI & Python Intern',
    org:'Hope Foundation · Bengaluru',
    cert:'🏆 Certified by Hope Foundation',
    points:[
      'Worked on an AI-powered Farming Web Service, leveraging Machine Learning and Python for agricultural insights.',
      'Developed an ML-based Crop Recommendation System to suggest optimal crops based on soil properties, weather conditions and location.',
      'Integrated OpenWeatherMap API for real-time weather forecasts, assisting farmers in planning irrigation and harvesting.',
      'Designed an interactive market price trends dashboard using Flask, React.js and Chart.js.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section-shell" id="experience">
      <div className="container">
        <div className="section-eyebrow">03 / Experience</div>
        <h2 className="section-title">Where I've<br /><em>Worked</em></h2>

        {/* Timeline */}
        <div style={{ position:'relative', paddingLeft: 28 }}>
          <div style={{ position:'absolute', left:0, top:0, bottom:0, width:1, background:'linear-gradient(var(--gold),var(--teal),transparent)' }} />

          {EXP.map((ex, i) => (
            <div key={ex.role} className="reveal" style={{ position:'relative', marginBottom: i < EXP.length-1 ? 40 : 0 }}>
              {/* Timeline dot */}
              <div style={{ position:'absolute', left:-33, top:28, width:10, height:10, borderRadius:'50%', background:'var(--gold)', border:'2px solid var(--ink)', boxShadow:'0 0 12px rgba(200,169,110,0.7)' }} />

              <div className="pr-card p-4 p-md-5">
                {/* Meta row */}
                <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                  <span className={`pill ${ex.pillType}`}>{ex.pill}</span>
                  <span style={{ fontFamily:'var(--ff-mono)', fontSize:11.5, color:'var(--text-muted)', marginLeft:'auto' }}>
                    <i className="bi bi-calendar3 me-1" />
                    {ex.date}
                  </span>
                </div>

                <h3 style={{ fontFamily:'var(--ff-display)', fontSize:24, fontWeight:700, marginBottom:4 }}>{ex.role}</h3>
                <p style={{ fontFamily:'var(--ff-mono)', fontSize:12.5, color:'var(--gold)', marginBottom:4, letterSpacing:'0.04em' }}>{ex.org}</p>
                {ex.sub && <p style={{ fontFamily:'var(--ff-mono)', fontSize:11.5, color:'var(--text-muted)', marginBottom:20 }}>{ex.sub}</p>}

                <ul className="list-unstyled mb-0">
                  {ex.points.map((pt, j) => (
                    <li key={j} className="d-flex gap-2 mb-2" style={{ color:'var(--text-muted)', fontSize:15, lineHeight:1.75 }}>
                      <i className="bi bi-chevron-right flex-shrink-0 mt-1" style={{ color:'var(--gold)', fontSize:12 }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {ex.cert && (
                  <div className="mt-4 d-inline-flex align-items-center gap-2 pill-gold pill" style={{ borderRadius:8, padding:'8px 16px' }}>
                    {ex.cert}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
