import { profile } from '../../data/portfolio.js'
import { Container } from './Container.jsx'

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container>
        <p className="section-label">Contact</p>
        <div className="footer__headline">
          <h2>Let’s build something useful.</h2>
          <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <div className="footer__links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
