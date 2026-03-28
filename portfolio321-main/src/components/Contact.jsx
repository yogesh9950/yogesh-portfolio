import { useState, useRef, useEffect } from 'react'
import './Contact.css'

function ContactIllustration() {
  return (
    <svg viewBox="0 0 300 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-illus">
      {/* Person waving */}
      {/* Body */}
      <ellipse cx="120" cy="175" rx="30" ry="35" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
      {/* Head */}
      <circle cx="120" cy="130" r="26" fill="#f4a261"/>
      {/* Hair */}
      <path d="M94 122 Q102 102 120 104 Q138 102 146 122" fill="#1a1a1a"/>
      {/* Eyes */}
      <circle cx="113" cy="127" r="2.5" fill="#1a1a1a"/>
      <circle cx="127" cy="127" r="2.5" fill="#1a1a1a"/>
      {/* Smile */}
      <path d="M113 138 Q120 145 127 138" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Wave arm */}
      <path d="M148 165 Q175 140 190 120 Q196 112 200 105" stroke="#f4a261" strokeWidth="10" strokeLinecap="round" fill="none" className="wave-arm"/>
      {/* Hand */}
      <circle cx="202" cy="103" r="9" fill="#f4a261"/>
      {/* Other arm */}
      <path d="M92 165 Q70 185 55 195" stroke="#f4a261" strokeWidth="10" strokeLinecap="round" fill="none"/>
      {/* Legs */}
      <path d="M106 208 L100 248" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M134 208 L140 248" stroke="#1a1a1a" strokeWidth="12" strokeLinecap="round" fill="none"/>
      {/* Chat bubbles */}
      <g className="bubble-1">
        <rect x="185" y="40" width="100" height="48" rx="12" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5"/>
        <path d="M205 88 L200 100 L215 88" fill="#1e1e1e" stroke="#00d4aa" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="210" cy="64" r="5" fill="#00d4aa"/>
        <circle cx="228" cy="64" r="5" fill="#00d4aa" opacity="0.6"/>
        <circle cx="246" cy="64" r="5" fill="#00d4aa" opacity="0.3"/>
      </g>
      <g className="bubble-2">
        <rect x="10" y="70" width="85" height="38" rx="10" fill="#1e1e1e" stroke="#f4a261" strokeWidth="1.5"/>
        <path d="M75 108 L80 120 L65 108" fill="#1e1e1e" stroke="#f4a261" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="22" y="82" width="40" height="5" rx="2" fill="#f4a261" opacity="0.7"/>
        <rect x="22" y="94" width="28" height="5" rx="2" fill="#f4a261" opacity="0.4"/>
      </g>
      {/* Stars */}
      <circle cx="170" cy="190" r="3" fill="#00d4aa" opacity="0.6"/>
      <circle cx="50" cy="45"  r="2" fill="#00d4aa" opacity="0.5"/>
      <circle cx="260" cy="180" r="2" fill="#f4a261" opacity="0.7"/>
    </svg>
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

const contactLinks = [
  { icon: '📧', label: 'Email me', value: 'yogeshsaini6367@gmail.com', href: 'mailto:yogeshsaini6367@gmail.com', color: '#f4a261' },
  { icon: '💼', label: 'LinkedIn', value: 'yogesh-saini-25439126b', href: 'https://linkedin.com/in/yogesh-saini-25439126b', color: '#0077b5' },
  { icon: '🐙', label: 'GitHub', value: 'github.com/yogesh9950', href: 'https://github.com/yogesh9950', color: '#6c63ff' },
  { icon: '📱', label: 'Call me', value: '+91 9772505254', href: 'tel:+919772505254', color: '#00d4aa' },
]

export default function Contact() {
  const r1 = useReveal(), r2 = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="section-wrap">
        <div className="reveal" ref={r1}>
          <p className="eyebrow">— Let's connect</p>
          <h2 className="section-label">Got a project in <span>mind?</span></h2>
        </div>

        <div className="contact-layout">
          <div className="reveal-left" ref={r2}>
            <ContactIllustration />
            <div className="contact-links">
              {contactLinks.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="c-link" style={{ '--lc': c.color }}>
                  <span className="c-link__icon" style={{ background: `${c.color}15`, color: c.color }}>{c.icon}</span>
                  <div>
                    <div className="c-link__label">{c.label}</div>
                    <div className="c-link__value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="form-done">
                <div className="form-done__icon">🎉</div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out, Yogesh will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="cform">
                <h3 className="cform__title">Send Message</h3>
                <div className="cform__row">
                  <div className="cform__group">
                    <label>Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handle} placeholder="Your Name" required />
                  </div>
                  <div className="cform__group">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handle} placeholder="E-mail" required />
                  </div>
                </div>
                <div className="cform__group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handle} placeholder="Tell me about your project..." rows={5} required />
                </div>
                <button type="submit" className="btn-teal" style={{ width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}>
                  Send Message ✈
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
