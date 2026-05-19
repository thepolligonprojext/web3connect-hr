import { useEffect } from 'react'
import FadeIn from '../components/FadeIn'

const POSTS = [
  {
    tag: 'Compensation',
    title: '2026 Web3 Salary Guide',
    body: 'Compensation benchmarks across engineering, product, and growth roles in the current market.',
    img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=700&q=80',
    alt: 'Financial data and charts',
  },
  {
    tag: 'Candidates',
    title: 'How to Stand Out in Technical Interviews',
    body: 'What hiring teams evaluate beyond coding ability — and how to show up prepared for both.',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=700&q=80',
    alt: 'Professional in an interview setting',
  },
  {
    tag: 'Hiring',
    title: 'Hiring for Protocol Security Roles',
    body: 'Profiles and competencies companies prioritise when building risk-sensitive security teams.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80',
    alt: 'Code and security lock on screen',
  },
]

export default function Blog() {
  useEffect(() => { document.title = 'Web3Connect HR | Insights' }, [])

  return (
    <>
      <section
        className="page-hero"
        style={{ '--hero-image': 'url(https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1800&q=80)' }}
      >
        <div className="page-hero-inner">
          <span className="eyebrow">Knowledge Hub</span>
          <h1>Insights</h1>
          <p>Web3 hiring trends, salary guides, interview strategy, and industry updates from our team.</p>
        </div>
      </section>

      <section>
        <FadeIn>
          <h2 className="section-heading">Latest Articles</h2>
          <p className="section-sub">Fresh thinking from the Web3Connect HR team.</p>
        </FadeIn>
        <div className="blog-grid">
          {POSTS.map(({ tag, title, body, img, alt }, i) => (
            <FadeIn key={title} delay={i * 100}>
              <article className="blog-card">
                <img src={img} alt={alt} />
                <div className="blog-card-body">
                  <span className="blog-tag">{tag}</span>
                  <h2>{title}</h2>
                  <p>{body}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
