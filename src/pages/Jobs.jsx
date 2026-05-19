import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/track'
import FadeIn from '../components/FadeIn'
import { FloatingInput, FloatingTextarea, FileUpload } from '../components/FloatingField'

const STEPS = [
  { n: '1', title: 'Share Your Profile', body: 'Upload your CV and include your portfolio, GitHub, or LinkedIn link.' },
  { n: '2', title: 'We Review', body: 'Our recruiters map your background to active hiring mandates across our network.' },
  { n: '3', title: 'We Reach Out', body: 'If you match a role, we contact you directly with next steps and interview prep.' },
]

export default function Jobs() {
  useEffect(() => { document.title = 'Web3Connect HR | Candidate Submission' }, [])

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    trackEvent('form_submit', { form: 'Candidate submission form' })
    setLoading(true)
    setTimeout(() => { setLoading(false); setSuccess(true) }, 1400)
  }

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="page-hero-inner">
          <span className="eyebrow">Candidate Network</span>
          <h1>Submit Your CV and Portfolio</h1>
          <p>We review your profile and reach out directly when a strong match opens with one of our partner companies.</p>
          <div className="cta-row">
            <a className="btn primary" href="#candidate-form"
              onClick={() => trackEvent('cta_click', { target: 'candidate_start_form' })}>Submit Profile</a>
            <Link className="btn secondary" to="/contact"
              onClick={() => trackEvent('cta_click', { target: 'candidate_company_referral' })}>Need to hire talent?</Link>
          </div>
        </div>
      </section>

      <section>
        <FadeIn>
          <h2 className="section-heading">How It Works</h2>
          <p className="section-sub">Three steps from submission to your next opportunity.</p>
        </FadeIn>
        <div className="grid cards">
          {STEPS.map(({ n, title, body }, i) => (
            <FadeIn key={n} delay={i * 100}>
              <article className="step-card">
                <div className="step-number">{n}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <FadeIn>
        <section>
          <h2 className="section-heading">Candidate Submission Form</h2>
          <p className="section-sub">Tell us about yourself and we'll be in touch when the right role opens.</p>

          {success ? (
            <div className="form-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#0ea56e,#12c97a)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem' }}>
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ margin: '0 0 0.5rem' }}>Profile Submitted!</h3>
              <p style={{ color: 'var(--muted)', margin: 0 }}>We'll review your profile and reach out when a strong match opens.</p>
            </div>
          ) : (
            <form id="candidate-form" className="form-card form-grid" aria-label="Candidate submission form" onSubmit={handleSubmit}>
              <FloatingInput id="candidate-name" name="full_name" label="Full Name" autoComplete="name" required />
              <FloatingInput id="candidate-email" name="email" label="Email Address" type="email" autoComplete="email" required />
              <FloatingInput id="candidate-location" name="location" label="Current Location" autoComplete="address-level2" required />
              <FloatingInput id="candidate-role" name="primary_role" label="Primary Role (e.g. Solidity Engineer)" required />
              <FloatingInput id="candidate-portfolio" name="portfolio_url" label="Portfolio / LinkedIn / GitHub (optional)" type="url" />
              <FileUpload id="candidate-resume" name="resume" label="Upload CV" required accept=".pdf,.doc,.docx" />
              <FloatingTextarea id="candidate-note" name="candidate_note" label="Anything we should know?" rows={4} />
              <label className="consent-row" htmlFor="candidate-consent">
                <input id="candidate-consent" name="consent" type="checkbox" required />
                <span>I agree that Web3Connect HR may contact me about relevant roles.</span>
              </label>
              <button
                className={`btn primary${loading ? ' btn--loading' : ''}`}
                type="submit"
                onClick={() => !loading && trackEvent('cta_click', { target: 'candidate_submit_profile' })}
              >
                {loading ? <><span className="spinner" />Submitting…</> : 'Submit Profile'}
              </button>
            </form>
          )}
        </section>
      </FadeIn>
    </>
  )
}
