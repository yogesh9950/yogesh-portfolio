import { useEffect, useRef } from 'react'
import './About.css'

function WorkingIllustration() {
  return (
    <svg viewBox="0 0 350 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="about-illustration">
      {/* Desk */}
      <rect x="40" y="220" width="270" height="12" rx="4" fill="#1e1e1e" stroke="#333" strokeWidth="1"/>
      <rect x="60" y="232" width="10" height="40" rx="2" fill="#1e1e1e"/>
      <rect x="280" y="232" width="10" height="40" rx="2" fill="#1e1e1e"/>
      {/* Monitor */}
      <rect x="90" y="120" width="170" height="100" rx="8" fill="#141414" stroke="#00d4aa" strokeWidth="1.5"/>
      <rect x="98" y="128" width="154" height="74" rx="4" fill="#0a0a0a"/>
      {/* Code on monitor */}
      <rect x="106" y="136" width="60" height="5" rx="2" fill="#00d4aa" opacity="0.9"/>
      <rect x="106" y="148" width="100" height="5" rx="2" fill="#555"/>
      <rect x="114" y="160" width="70" height="5" rx="2" fill="#555"/>
      <rect x="114" y="172" width="50" height="5" rx="2" fill="#00d4aa" opacity="0.7"/>
      <rect x="106" y="184" width="90" height="5" rx="2" fill="#555"/>
      {/* Monitor stand */}
      <rect x="168" y="220" width="14" height="18" rx="2" fill="#1e1e1e"/>
      <rect x="152" y="236" width="46" height="6" rx="3" fill="#1e1e1e" stroke="#333"/>
      {/* Person sitting */}
      {/* Body */}
      <ellipse cx="290" cy="185" rx="22" ry="28" fill="#2a2a2a" stroke="#00d4aa" strokeWidth="1"/>
      {/* Head */}
      <circle cx="290" cy="145" r="22" fill="#f4a261"/>
      {/* Hair */}
      <path d="M268 138 Q276 118 290 120 Q304 118 312 138" fill="#1a1a1a"/>
      {/* Face */}
      <circle cx="284" cy="143" r="2.5" fill="#1a1a1a"/>
      <circle cx="296" cy="143" r="2.5" fill="#1a1a1a"/>
      <path d="M285 152 Q290 157 295 152" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* Arm reaching to keyboard */}
      <path d="M270 190 Q240 210 210 218" stroke="#f4a261" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Keyboard */}
      <rect x="100" y="215" width="100" height="10" rx="4" fill="#222" stroke="#333"/>
      {/* Coffee mug */}
      <rect x="30" y="200" width="28" height="24" rx="4" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
      <path d="M58 207 Q68 207 68 214 Q68 221 58 221" stroke="#00d4aa" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* Steam */}
      <path d="M38 196 Q41 190 38 184" stroke="#00d4aa" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" className="steam"/>
      <path d="M47 195 Q50 188 47 182" stroke="#00d4aa" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" className="steam"/>
      {/* Floating badge */}
      <g className="badge-float">
        <rect x="10" y="60" width="80" height="36" rx="8" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
        <text x="50" y="83" textAnchor="middle" fontSize="12" fill="#00d4aa" fontFamily="monospace">MERN</text>
      </g>
    </svg>
  )
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('show') }, { threshold: 0.12 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

const highlights = [
  { icon: '⚛', label: 'React.js' },
  { icon: '🟢', label: 'Node.js' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🐍', label: 'Python' },
]

export default function About() {
  const textRef = useReveal()
  const illRef = useReveal()

  return (
    <section id="about" className="about-section">
      <div className="section-wrap">
        <div className="about-grid">
          <div className="reveal-left" ref={illRef}>
            <WorkingIllustration />
          </div>

          <div className="reveal-right" ref={textRef}>
            <p className="about-eyebrow">— Who am I</p>
            <h2 className="section-label">About <span>me</span></h2>
            <p className="about-body">
              I'm <strong style={{color:'#fff'}}>Yogesh Saini</strong>, a passionate MERN Stack Developer and BCA student at
              Jaipur National University (2023–2026). I specialize in building scalable, responsive web applications
              and REST APIs.
            </p>
            <p className="about-body">
              I'm also skilled in <strong style={{color:'var(--teal)'}}>SEO optimization</strong> — from keyword strategy and meta tags to
              backlink building. I love solving real-world problems with clean code and creative thinking.
            </p>

            <div className="about-highlights">
              {highlights.map(h => (
                <div key={h.label} className="highlight-chip">
                  <span>{h.icon}</span> {h.label}
                </div>
              ))}
            </div>

            <div className="about-info">
              <div className="info-row"><span>📍</span><span>Alwar, Rajasthan, India</span></div>
              <div className="info-row"><span>📧</span><a href="mailto:yogeshsaini6367@gmail.com">yogeshsaini6367@gmail.com</a></div>
              <div className="info-row"><span>📱</span><a href="tel:+919772505254">+91 9772505254</a></div>
            </div>

            <a href="#contact" className="btn-teal" style={{display:'inline-flex', marginTop:'10px'}} onClick={e=>{ e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>
              Hire Me →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
