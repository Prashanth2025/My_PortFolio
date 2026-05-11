export default function Footer() {
  return (
    <footer style={{ background:'var(--ink-2)', borderTop:'1px solid var(--rule)', padding:'32px 0' }}>
      <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
        <p style={{ fontFamily:'var(--ff-mono)', fontSize:12.5, color:'var(--text-muted)', margin:0 }}>
          © 2025 Prashanth R &nbsp;·&nbsp; Designed &amp; Built with ♥ in Bengaluru
        </p>
        <span style={{ fontFamily:'var(--ff-display)', fontSize:20, fontWeight:700, color:'var(--text)' }}>
          Prashanth<span style={{ color:'var(--gold)' }}>.</span>
        </span>
      </div>
    </footer>
  )
}
