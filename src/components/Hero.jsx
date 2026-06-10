import { useState, useEffect } from 'react'
import './Hero.css'

const roles = ['MERN Stack Developer', 'React.js Developer', 'Node.js Engineer', 'SEO Optimizer']

function DeveloperIllustration() {
  return (
    <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-illustration">
      {/* Laptop body */}
      <rect x="80" y="160" width="240" height="150" rx="12" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="2"/>
      <rect x="90" y="170" width="220" height="120" rx="6" fill="#0d0d0d"/>
      {/* Screen glow */}
      <rect x="90" y="170" width="220" height="120" rx="6" fill="url(#screenGlow)" opacity="0.6"/>
      {/* Code on screen */}
      <rect x="100" y="182" width="80" height="6" rx="3" fill="#00d4aa" opacity="0.8"/>
      <rect x="100" y="196" width="120" height="6" rx="3" fill="#888" opacity="0.6"/>
      <rect x="108" y="210" width="90" height="6" rx="3" fill="#888" opacity="0.5"/>
      <rect x="108" y="224" width="60" height="6" rx="3" fill="#00d4aa" opacity="0.7"/>
      <rect x="100" y="238" width="140" height="6" rx="3" fill="#888" opacity="0.4"/>
      <rect x="108" y="252" width="100" height="6" rx="3" fill="#888" opacity="0.5"/>
      <rect x="100" y="266" width="70" height="6" rx="3" fill="#00d4aa" opacity="0.6"/>
      {/* Keyboard */}
      <rect x="70" y="312" width="260" height="12" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
      {/* Person body */}
      <ellipse cx="290" cy="140" rx="30" ry="35" fill="#2a2a2a" stroke="#00d4aa" strokeWidth="1.5"/>
      {/* Head */}
      <circle cx="290" cy="80" r="28" fill="#f4a261"/>
      {/* Hair */}
      <path d="M262 72 Q270 45 290 48 Q310 45 318 72" fill="#1a1a1a"/>
      {/* Face */}
      <circle cx="282" cy="78" r="3" fill="#1a1a1a"/>
      <circle cx="298" cy="78" r="3" fill="#1a1a1a"/>
      <path d="M283 88 Q290 94 297 88" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Arms */}
      <path d="M260 145 Q220 170 195 200" stroke="#f4a261" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M320 145 Q340 180 310 210" stroke="#f4a261" strokeWidth="12" strokeLinecap="round" fill="none"/>
      {/* Legs */}
      <path d="M275 175 L265 230" stroke="#2a2a2a" strokeWidth="14" strokeLinecap="round" fill="none"/>
      <path d="M305 175 L315 230" stroke="#2a2a2a" strokeWidth="14" strokeLinecap="round" fill="none"/>
      {/* Shoes */}
      <ellipse cx="262" cy="234" rx="16" ry="8" fill="#1a1a1a"/>
      <ellipse cx="318" cy="234" rx="16" ry="8" fill="#1a1a1a"/>
      {/* Floating elements */}
      <g className="float-1">
        <rect x="30" y="60" width="50" height="32" rx="8" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
        <text x="55" y="81" textAnchor="middle" fontSize="11" fill="#00d4aa" fontFamily="monospace">&lt;/&gt;</text>
      </g>
      <g className="float-2">
        <rect x="330" y="50" width="55" height="32" rx="8" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
        <text x="357" y="71" textAnchor="middle" fontSize="11" fill="#00d4aa" fontFamily="monospace">{ }</text>
      </g>
      <g className="float-3">
        <rect x="340" y="240" width="50" height="32" rx="8" fill="#1e1e1e" stroke="#f4a261" strokeWidth="1.5"/>
        <text x="365" y="261" textAnchor="middle" fontSize="10" fill="#f4a261" fontFamily="monospace">npm</text>
      </g>
      {/* Stars */}
      <circle cx="50" cy="200" r="3" fill="#00d4aa" opacity="0.6" className="star"/>
      <circle cx="370" cy="150" r="3" fill="#00d4aa" opacity="0.5" className="star"/>
      <circle cx="30" cy="280" r="2" fill="#f4a261" opacity="0.6" className="star"/>
      <circle cx="380" cy="290" r="2" fill="#00d4aa" opacity="0.7" className="star"/>
      <defs>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.15"/>
          <stop offset="100%" stopColor="#00d4aa" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[idx]
    let t
    if (typing) {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), 40)
      } else {
        setIdx((idx + 1) % roles.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [text, typing, idx])

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">Yogesh Saini</h1>
        <div className="hero__role">
          <span className="teal-text">{text}</span>
          <span className="cursor-blink">|</span>
        </div>
        <p className="hero__desc">
          MERN Stack Developer & BCA student building scalable web apps.<br />
          Based in Alwar, Rajasthan, India.
        </p>
        <div className="hero__btns">
          <a href="#projects" className="btn-teal" onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View My Work ↗
          </a>
          <a href="/Yogesh_Saini__Resume.pdf" download className="btn-outline-teal">
  Download CV ↓
</a>
        </div>
        <div className="hero__scroll">
          <div className="scroll-line" />
          <span>Scroll Down</span>
        </div>
      </div>

      <div className="hero__visual">
        <div className="hero__illus-wrap">
          <div className="illus-glow" />
          <DeveloperIllustration />
        </div>
      </div>
    </section>
  )
}
