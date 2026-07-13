import { Container } from './Container.jsx'
import { profile } from '../../data/portfolio.js'

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a className="wordmark" href="#top" aria-label="Home">
          {profile.initials}<span className="wordmark__mark" aria-hidden="true" />
        </a>

        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
