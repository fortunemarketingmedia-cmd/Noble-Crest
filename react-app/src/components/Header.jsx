import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_ITEMS, PROJECT_LINKS } from '../data/site'
import { EnquireLink } from './EnquireModal'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    if (open && window.innerWidth <= 980) document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])
  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <div className="topbar"><div className="wrap"><span>Private real estate guidance across India &amp; Dubai</span><span>01 — Mumbai &nbsp; 02 — Pune &nbsp; 03 — Dubai</span></div></div>
    <header className="nav"><div className="wrap nav-inner">
      <Link className="brand-logo" to="/" onClick={close} aria-label="Nobelcrest Properties home"><img src="/nobelcrest-logo.png" alt="Nobelcrest Properties LLP" /></Link>
      <button className="burger" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={open ? 'open' : ''} aria-label="Main navigation"><ul>
        {NAV_ITEMS.map((item) => <li className={item.label === 'Projects' ? 'has-menu' : ''} key={item.to}>
          <NavLink to={item.to} end={item.to === '/'} onClick={close}>{item.label}</NavLink>
          {item.label === 'Projects' && <div className="drop mega-menu"><div className="mega-intro"><span>Property discovery</span><h3>Explore by requirement.</h3><p>Five focused ways to begin a clearer property conversation.</p><Link to="/projects" onClick={close}>View all opportunities</Link></div><div className="mega-links">{PROJECT_LINKS.map((p, index) => <Link key={p.to} to={p.to} onClick={close}><span>0{index + 1}</span><div><b>{p.label}</b><small>{p.label === 'Commercial' ? 'Space for business' : p.label === 'Residential' ? 'Homes and residences' : `${p.label} opportunities`}</small></div><i>↗</i></Link>)}</div></div>}
        </li>)}
        <li><EnquireLink className="btn nav-cta">Speak With Our Team</EnquireLink></li>
      </ul></nav>
    </div></header>
  </>
}
