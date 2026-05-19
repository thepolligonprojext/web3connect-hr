import { useEffect } from 'react'
import FadeIn from '../components/FadeIn'

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Mission',
    body: 'Connect top talent with teams building the decentralized future — with speed, clarity, and honesty at every step.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    title: 'Approach',
    body: 'Skills-based matching, transparent communication, and a structured hiring process that works for both sides.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Partnerships',
    body: 'We collaborate with accelerators, developer communities, and startup networks across the US, Europe, and Asia.',
  },
]

const TEAM = [
  { name: 'Amara Johnson', role: 'Founder & Head of Talent', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ethan Okoye', role: 'Director, Client Success', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
  { name: 'Priya Nair', role: 'Lead Technical Recruiter', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', imgPos: 'center 25%' },
]

export default function About() {
  useEffect(() => { document.title = 'Web3Connect HR | About' }, [])

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="page-hero-inner">
          <span className="eyebrow">Our Story</span>
          <h1>About Web3Connect HR</h1>
          <p>We are a US-headquartered recruitment partner focused on ethical, skills-first hiring for blockchain and Web3 organizations worldwide.</p>
        </div>
      </section>

      <section>
        <FadeIn>
          <h2 className="section-heading">What Drives Us</h2>
          <p className="section-sub">Three principles that shape every placement we make.</p>
        </FadeIn>
        <div className="grid cards">
          {VALUES.map(({ icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <article className="card">
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section>
        <FadeIn>
          <h2 className="section-heading">Leadership Team</h2>
          <p className="section-sub">The people behind Web3Connect HR.</p>
        </FadeIn>
        <div className="team-grid">
          {TEAM.map(({ name, role, img, imgPos }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <div className="team-card">
                <img src={img} alt={name} style={imgPos ? { objectPosition: imgPos } : undefined} />
                <div className="team-card-body">
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
