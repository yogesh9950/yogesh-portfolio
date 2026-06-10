import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['Home', 'About', 'Works', 'Skills', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (link) => {
    setMenuOpen(false)
    const id = link === 'Works' ? 'projects' : link.toLowerCase()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket"></span>Yogesh<span className="logo-bracket"></span>
        </div>

        <ul className={`nav__links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}><button onClick={() => go(l)}>{l}</button></li>
          ))}
        </ul>

        <button className={"nav__burger " + (menuOpen ? 'open' : '')} onClick={() => setMenuOpen(v => !v)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
