import { useEffect, useRef } from 'react'
import './Skills.css'

const techStack = [
  { name: 'React.js', level: 85, color: '#61dafb' },
  { name: 'Node.js', level: 78, color: '#68a063' },
  { name: 'JavaScript', level: 82, color: '#f7df1e' },
  { name: 'MongoDB', level: 75, color: '#4DB33D' },
  { name: 'HTML/CSS', level: 90, color: '#00d4aa' },
  { name: 'Python', level: 70, color: '#3572A5' },
  { name: 'MySQL', level: 68, color: '#00758F' },
  { name: 'Express.js', level: 76, color: '#ff6b35' },
]

const tools = ['Git', 'GitHub', 'REST APIs', 'DSA', 'OOP', 'DBMS']
const seo   = ['Keyword Optimization', 'Meta Tags', 'URL Structure', 'Internal Linking', 'Backlink Building', 'Guest Posting']

function Bar({ name, level, color }) {
  const barRef = useRef(null)
  useEffect(() => {
    const el = barRef.current
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = level + '%' }
    }, { threshold: 0.5 })
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [level])
  return (
    <div className="skill-row">
      <div className="skill-row__top">
        <span>{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div ref={barRef} className="skill-fill" style={{ '--sc': color, width: '0%' }} />
      </div>
    </div>
  )
}

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

export default function Skills() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal()
  return (
    <section id="skills" className="skills-section">
      <div className="section-wrap">
        <div className="reveal" ref={r1}>
          <p className="eyebrow">— What I know</p>
          <h2 className="section-label">Technical <span>Skills</span></h2>
        </div>

        <div className="skills-layout">
          <div className="reveal-left" ref={r2}>
            <h3 className="skills-sub">Core Tech Stack</h3>
            {techStack.map(s => <Bar key={s.name} {...s} />)}
          </div>

          <div className="reveal-right" ref={r3}>
            <h3 className="skills-sub">Tools & Concepts</h3>
            <div className="tag-list">
              {tools.map(t => <span key={t} className="tag tag--blue">{t}</span>)}
            </div>
            <h3 className="skills-sub" style={{marginTop:'28px'}}>SEO Skills</h3>
            <div className="tag-list">
              {seo.map(t => <span key={t} className="tag tag--teal">{t}</span>)}
            </div>
            <div className="skills-note">
              <span>🔍</span>
              <p>Knowledge of On-Page & Off-Page SEO optimization for better organic reach and rankings.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
