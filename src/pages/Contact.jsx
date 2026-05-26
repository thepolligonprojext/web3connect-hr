import { useState, useEffect } from 'react'
import { trackEvent } from '../utils/track'
import FadeIn from '../components/FadeIn'
import { FloatingInput, FloatingTextarea, FloatingSelect, FileUpload } from '../components/FloatingField'

const INFO = [
  {
    label: 'Email', value: 'hello@web3connecthr.com',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  },
  {
    label: 'Phone', value: '+1 (646) 555-0193',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
  {
    label: 'Address', value: '145 Hudson Street, New York, NY 10013',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  },
  {
    label: 'Global Hubs', value: 'New York · London · Singapore',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
]

export default function Contact() {
  useEffect(() => { document.title = 'Web3Connect HR | Contact' }, [])

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    trackEvent('form_submit', { form: 'Company talent request form' })
    setLoading(true)
    setTimeout(() => { setLoading(false); setSuccess(true) }, 1400)
  }

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="page-hero-inner">
          <span className="eyebrow">Get In Touch</span>
          <h1>Request Talent</h1>
          <p>Tell us what kind of people you need. Our team reviews your request and reaches out within one business day.</p>
        </div>
      </section>

      <section className="split">
        <FadeIn>
          {success ? (
            <div className="form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#0ea56e,#12c97a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ margin: '0 0 0.5rem' }}>Request Received!</h3>
              <p style={{ color: 'var(--muted)', margin: 0 }}>We'll review your needs and reach out within one business day.</p>
            </div>
          ) : (
            <form className="form-card form-grid" aria-label="Company talent request form" onSubmit={handleSubmit}>
              <FloatingInput id="contact-name" name="full_name" label="Your Name" autoComplete="name" required />
              <FloatingInput id="contact-email" name="email" label="Work Email" type="email" autoComplete="email" required />
              <FloatingInput id="contact-company" name="company_name" label="Company Name" required />
              <FloatingInput id="contact-website" name="company_website" label="Company Website" type="url" />
              <FloatingSelect id="contact-region" name="hiring_region" label="Hiring Region" required>
                <option value=""> </option>
                <option>United States</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Global Remote</option>
              </FloatingSelect>
              <FloatingTextarea id="contact-message" name="hiring_requirements" label="Roles You Need Help Filling" rows={5} required />
              <FileUpload id="contact-jd" name="job_description_file" label="Attach Job Description (optional)" accept=".pdf,.doc,.docx" />
              <button
                className={`btn primary${loading ? ' btn--loading' : ''}`}
                type="submit"
                onClick={() => !loading && trackEvent('cta_click', { target: 'company_submit_request' })}
              >
                {loading ? <><span className="spinner" />Submitting…</> : 'Submit Talent Request'}
              </button>
            </form>
          )}
        </FadeIn>

        <FadeIn delay={150}>
          <div className="contact-info-card">
            <span className="eyebrow" style={{ color: 'rgba(140,170,255,0.7)', marginBottom: '0.5rem', display: 'block' }}>Reach Us</span>
            <h2>We're here<br />to help</h2>
            {INFO.map(({ label, value, icon }) => (
              <div className="contact-info-item" key={label}>
                <div className="contact-info-icon">{icon}</div>
                <div className="contact-info-text">
                  <p className="contact-info-label">{label}</p>
                  <p className="contact-info-value">{value}</p>
                </div>
              </div>
            ))}
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div className="contact-info-text">
                <p className="contact-info-label">Social</p>
                <div className="social-links">
                  <a className="social-link" href="https://www.linkedin.com/company/web3connecthr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="social-link" href="https://x.com/web3connecthr" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">X</a>
                  <a className="social-link" href="#" aria-label="Telegram">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
