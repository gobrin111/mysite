import { Container } from '../components/layout/Container.jsx'
import { ArrowLink } from '../components/ui/ArrowLink.jsx'
import { profile } from '../data/portfolio.js'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Container className="hero__inner">
        <div className="hero__eyebrow">
          <span>Portfolio / 2026</span>
          <span>Based in {profile.location}</span>
        </div>

        <div className="hero__content">
          <p className="hero__intro">Hello, I’m {profile.name}.</p>
          <h1 id="hero-title">Software engineer</h1>
          <p className="hero__summary">{profile.introduction}</p>
          <ArrowLink href="#work">Explore selected work</ArrowLink>
        </div>

        <div className="hero__footer" aria-hidden="true">
          <span>Scroll to discover</span>
          <span className="hero__line" />
        </div>
      </Container>
    </section>
  )
}
