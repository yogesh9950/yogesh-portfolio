import { useState, useRef, useEffect } from 'react'
import './Projects.css'

const allProjects = [
  {
    id: 1, cat: 'UI',
    title: 'Portfolio Website',
    desc: 'A personal portfolio with modern design, animations, and full responsiveness.',
    tags: ['React.js', 'CSS3', 'JavaScript'],
    icon: '🌐', color: '#6c63ff',
    github: 'https://github.com/yogesh9950',
  },
  {
    id: 2, cat: 'UI',
    title: 'Mobile Store',
    desc: 'Team-built e-commerce store with product listings, cart, and checkout flow.',
    tags: ['HTML','CSS','JavaScript'],
    icon: '📱', color: '#00d4aa',
    github: 'https://github.com/yogesh9950',
  },
  {
    id: 3, cat: 'UX',
    title: 'Library Management',
    desc: 'Python-based system for managing books, members, and borrowing records.',
    tags: ['Python', 'MySQL', 'DBMS'],
    icon: '📚', color: '#f4a261',
    github: 'https://github.com/yogesh9950',
  },
  {
    id: 4, cat: 'UI',
    title: 'Crypto Exchange',
    desc: 'Live price tracking and trade simulation for cryptocurrency pairs.',
    tags: ['JavaScript','REST APIs'],
    icon: '₿', color: '#f7df1e',
    github: 'https://github.com/yogesh9950',
  },
  {
    id: 5, cat: 'UX',
    title: 'ATM System',
    desc: 'Java console-based ATM with deposits, withdrawals, and balance checks.',
    tags: ['Java'],
    icon: '🏧', color: '#68a063',
    github: 'https://github.com/yogesh9950',
  },
]

const cats = ['All', 'UI', 'UX']

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

export default function Projects() {
  const [active, setActive] = useState('All')
  const ref = useReveal()

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.cat === active)

  return (
    <section id="projects" className="projects-section">
      <div className="section-wrap">
        <div className="reveal" ref={ref}>
          <p className="eyebrow2">— What I've built</p>
          <h2 className="section-label">My recent <span>works</span></h2>
        </div>

        <div className="proj-filter">
          {cats.map(c => (
            <button key={c} className={'proj-filter__btn ' + (active === c ? 'active' : '')} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map((p, i) => (
            <div key={p.id} className="proj-card" style={{ animationDelay: `${i * 0.1}s`, '--pc': p.color }}>
              <div className="proj-card__top">
                <div className="proj-icon" style={{ background: `${p.color}18`, color: p.color }}>{p.icon}</div>
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link-icon" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map(t => (
                  <span key={t} className="proj-tag" style={{ color: p.color, borderColor: `${p.color}35`, background: `${p.color}0d` }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
