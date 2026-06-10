import { useRef, useEffect } from 'react'
import './Education.css'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('show') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const edu = [
  { icon: '🎓', degree: 'BCA – Bachelor of Computer Applications', inst: 'Jaipur National University', year: '2023 – 2026', status: 'Ongoing', color: '#00d4aa' },
  { icon: '📖', degree: '12th – Senior Secondary', inst: 'CBSE Board', year: 'Completed', status: 'Completed', color: '#6c63ff' },
  { icon: '📚', degree: '10th – Secondary', inst: 'CBSE Board', year: 'Completed', status: 'Completed', color: '#f4a261' },
]

const certs = [
  { icon: '🏆', name: 'RS-CIT', issuer: 'Vardhman University', color: '#f7df1e' },
  { icon: '💻', name: 'Full Stack Development', issuer: 'Ongoing Certification', color: '#00d4aa' },
  { icon: '🎯', name: 'CLICK', issuer: 'S.V.G.M.S Reni School', color: '#f4a261' },
]

export default function Education() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()

  return (
    <section id="education" className="edu-section">
      <div className="section-wrap">
        <div className="reveal" ref={r1}>
          <p className="eyebrow">— My background</p>
          <h2 className="section-label">Education & <span>Certs</span></h2>
        </div>

        <div className="edu-layout">
          <div className="reveal-left" ref={r2}>
            <h3 className="edu-col-title">Education</h3>
            <div className="timeline">
              {edu.map((e, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-dot" style={{ background: e.color, boxShadow: `0 0 10px ${e.color}` }} />
                  <div className="tl-card">
                    <div className="tl-icon">{e.icon}</div>
                    <div>
                      <h4>{e.degree}</h4>
                      <p>{e.inst}</p>
                      <div className="tl-foot">
                        <span className="tl-year">{e.year}</span>
                        <span className="tl-badge" style={{ color: e.color, background: `${e.color}15`, border: `1px solid ${e.color}40` }}>{e.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right" ref={r3}>
            <h3 className="edu-col-title">Certifications</h3>
            {certs.map((c, i) => (
              <div key={i} className="cert-item" style={{ '--cc': c.color }}>
                <div className="cert-icon" style={{ background: `${c.color}12`, color: c.color }}>{c.icon}</div>
                <div>
                  <h4>{c.name}</h4>
                  <p>{c.issuer}</p>
                </div>
                <div className="cert-check">✓</div>
              </div>
            ))}

            <div className="strength-box">
              <h4>Core Strengths</h4>
              <div className="strength-list">
                {['Quick Learner','Problem Solving','Team Collaboration','Continuous Learning'].map(s => (
                  <div key={s} className="strength-item">
                    <span className="s-dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
