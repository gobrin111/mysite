import { profile } from '../../data/portfolio.js'
import { Container } from './Container.jsx'

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <Container>
        <p className="section-label">Contact</p>
        <div className="footer__headline">
          <h2>Get in touch.</h2>
          <div className="footer__contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email} ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {profile.name}</span>
        </div>
      </Container>
    </footer>
  )
}
