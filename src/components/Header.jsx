import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { trackEvent } from '../utils/track'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/jobs', label: 'Candidates' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  function toggle() {
    const next = !open
    setOpen(next)
    trackEvent('menu_toggle', { expanded: next })
  }

  return (
    <header className="site-header">
      <Link className="logo" to="/" aria-label="Web3Connect HR Home">
        <img src="/logos/39Artboard 1.png" alt="Web3Connect HR logo" />
      </Link>
      <button
        className="menu-btn"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={toggle}
      >
        Menu
      </button>
      <nav id="primary-nav" aria-label="Primary" className={open ? 'open' : undefined}>
        {NAV_LINKS.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={pathname === to ? 'active' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
