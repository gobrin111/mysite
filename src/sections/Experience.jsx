import { Container } from '../components/layout/Container.jsx'
import { experience } from '../data/portfolio.js'

export function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <Container>
        <p className="section-label">Experience</p>
        <div className="experience__grid">
          <div>
            <p className="experience__period">{experience.period}</p>
            <h2 id="experience-title">{experience.role}</h2>
            <p className="experience__company">
              {experience.organization}<br />{experience.location}
            </p>
          </div>
          <div className="experience__details">
            <p className="lead">{experience.summary}</p>
            <ul>
              {experience.achievements.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
