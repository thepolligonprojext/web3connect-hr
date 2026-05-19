import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCounter } from '../hooks/useCounter'
import { trackEvent } from '../utils/track'
import FadeIn from '../components/FadeIn'

const REVIEWS = [
  '"Web3Connect HR delivered highly relevant candidates in under two weeks."',
  '"The interview prep and recruiter feedback helped me land my first Web3 role."',
  '"The process was fast, transparent, and far more targeted than traditional recruiting channels."',
]

function Counter({ target, suffix = '' }) {
  const { value, ref } = useCounter(target, suffix)
  return <h2 ref={ref} className="counter">{value}</h2>
}

function ReviewSlider() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)

  function stopAutoplay() { if (timerRef.current) clearInterval(timerRef.current) }
  function startAutoplay() {
    stopAutoplay()
    timerRef.current = setInterval(() => setActive(i => (i + 1) % REVIEWS.length), 3500)
  }
  function goTo(index) { setActive(index); startAutoplay() }

  useEffect(() => { startAutoplay(); return stopAutoplay }, [])

  return (
    <>
      <div
        className="reviews-slider"
        aria-label="Candidate and client reviews"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onFocus={stopAutoplay}
        onBlur={startAutoplay}
      >
        <button className="review-nav prev" type="button" aria-label="Previous review"
          onClick={() => goTo((active - 1 + REVIEWS.length) % REVIEWS.length)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14.5 5.5 8 12l6.5 6.5" /></svg>
        </button>
        <div className="review-track">
          {REVIEWS.map((quote, i) => (
            <blockquote key={i} className={`trust-quote review-slide${i === active ? ' is-active' : ''}`}>
              {quote}
            </blockquote>
          ))}
        </div>
        <button className="review-nav next" type="button" aria-label="Next review"
          onClick={() => goTo((active + 1) % REVIEWS.length)}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m9.5 5.5 6.5 6.5-6.5 6.5" /></svg>
        </button>
      </div>
      <div className="review-dots" role="tablist" aria-label="Review slider controls">
        {REVIEWS.map((_, i) => (
          <button key={i} className={`review-dot${i === active ? ' is-active' : ''}`} type="button"
            aria-label={`Show review ${i + 1}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </>
  )
}

export default function Home() {
  useEffect(() => {
    document.title = 'Web3Connect HR | Home'
    document.body.classList.add('home-page')
    return () => document.body.classList.remove('home-page')
  }, [])

  return (
    <>
      <section className="hero home-hero">
        <div className="hero-content">
          <p className="eyebrow">Web3 Recruitment Specialists</p>
          <h1>
            Connecting <span className="gradient-text">Web3 Talent</span><br />
            with Opportunity
          </h1>
          <p>We help blockchain teams hire faster and help skilled professionals get discovered through direct recruiter outreach.</p>
          <div className="cta-row">
            <Link className="btn primary" to="/jobs" onClick={() => trackEvent('cta_click', { target: 'home_submit_cv' })}>
              Submit CV
            </Link>
            <Link className="btn secondary" to="/contact" onClick={() => trackEvent('cta_click', { target: 'home_hire_talent' })}>
              Hire Talent
            </Link>
          </div>
          <div className="hero-stats" aria-label="Placement statistics">
            <article className="stat-item"><Counter target={240} suffix="+" /><p>Successful Placements</p></article>
            <article className="stat-item"><Counter target={95} suffix="%" /><p>Client Retention</p></article>
            <article className="stat-item"><Counter target={18} /><p>Countries Served</p></article>
            <article className="stat-item"><Counter target={14} /><p>Days Avg. Time to Hire</p></article>
          </div>
        </div>
      </section>

      <section className="home-process">
        <FadeIn>
          <h2>How Web3Connect HR Works</h2>
          <p className="process-intro">A focused engagement model built for speed, clarity, and better matches on both candidate and company sides.</p>
        </FadeIn>
        <div className="process-steps">
          <FadeIn delay={0}>
            <article className="process-step">
              <h3>For Candidates</h3>
              <p>Submit your CV and portfolio. We review and contact you when there is a strong role match.</p>
            </article>
          </FadeIn>
          <FadeIn delay={100}>
            <article className="process-step">
              <h3>For Companies</h3>
              <p>Share your hiring needs through our talent request form. We return a targeted shortlist.</p>
            </article>
          </FadeIn>
          <FadeIn delay={200}>
            <article className="process-step">
              <h3>For Both Sides</h3>
              <p>You get a structured and transparent process from screening through interview coordination.</p>
            </article>
          </FadeIn>
        </div>
        <Link className="btn primary process-cta" to="/jobs"
          onClick={() => trackEvent('cta_click', { target: 'home_candidate_flow' })}>
          Submit Your Candidate Profile
        </Link>
      </section>

      <section className="home-trust">
        <FadeIn>
          <h2>Trusted by Teams and Candidates</h2>
        </FadeIn>
        <ReviewSlider />
        <div className="trust-panels">
          <FadeIn delay={0}>
            <article className="trust-panel">
              <h3>Interview Platform</h3>
              <p>Our secure browser-based interview workflow supports scheduling, structured feedback, and transparent candidate communication without software downloads.</p>
            </article>
          </FadeIn>
          <FadeIn delay={120}>
            <article className="trust-panel">
              <h3>Global Reach, US Headquarters</h3>
              <p>Web3Connect HR is headquartered in New York and supports hiring across North America, Europe, Asia, and remote-first teams worldwide.</p>
            </article>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
