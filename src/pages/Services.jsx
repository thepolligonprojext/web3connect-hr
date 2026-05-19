import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/track'
import FadeIn from '../components/FadeIn'

export default function Services() {
  useEffect(() => { document.title = 'Web3Connect HR | Services' }, [])

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="page-hero-inner">
          <span className="eyebrow">What We Do</span>
          <h1>Services</h1>
          <p>Tailored recruitment support for both candidates and hiring companies across US and international Web3 markets.</p>
        </div>
      </section>

      <section>
        <FadeIn>
          <div className="service-feature">
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" alt="Candidate working on their profile" />
            <div className="service-feature-body">
              <span className="eyebrow eyebrow--dark">Candidates</span>
              <h2>For Job Seekers</h2>
              <ul>
                <li>Career resources &amp; market guidance</li>
                <li>Resume and portfolio optimization</li>
                <li>Interview preparation &amp; coaching</li>
                <li>Salary negotiation guidance</li>
                <li>Direct recruiter introductions</li>
              </ul>
              <div style={{ marginTop: '1.6rem' }}>
                <Link className="btn primary" to="/jobs"
                  onClick={() => trackEvent('cta_click', { target: 'services_submit_cv' })}>
                  Submit Your CV
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="service-feature reverse">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" alt="Business team in a hiring discussion" />
            <div className="service-feature-body">
              <span className="eyebrow eyebrow--dark">Companies</span>
              <h2>For Hiring Teams</h2>
              <ul>
                <li>Talent sourcing across Web3 networks</li>
                <li>Structured candidate vetting</li>
                <li>Organised interview workflows</li>
                <li>Onboarding &amp; post-placement support</li>
                <li>Retained &amp; contingency engagements</li>
              </ul>
              <div style={{ marginTop: '1.6rem' }}>
                <Link className="btn primary" to="/contact"
                  onClick={() => trackEvent('cta_click', { target: 'services_hire_talent' })}>
                  Request Talent
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
