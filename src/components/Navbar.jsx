import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Courses', '#courses'],
  ['Internships', '#internships'], ['Our Team', '#team'], ['Contact', '#contact']
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav container">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          {/* <span className="brand-mark"><Code2 size={22}/></span> */}
          <span className="brand-mark">
            <img src="/logo3.png" alt="Logo" />
          </span>
          <span className="manbow">INDEXI<span className="brand-accent">LIENCE</span><small>Development & Solutions Partner</small></span>
        </a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Enquire now <span>↗</span></a>
        </div>
      </nav>
    </header>
  )
}