import { Container } from '../components/layout/Container.jsx'
import { education, skills } from '../data/portfolio.js'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <Container>
        <div className="section-heading">
          <p className="section-label">Background</p>
          <h2 id="about-title">computer science</h2>
        </div>
        <div className="about__grid">
          <div>
            <h3>Education</h3>
            {education.map((item) => (
              <div className="education" key={item.school}>
                <p>{item.school}</p>
                <span>{item.program}</span>
                <span>{item.period}</span>
              </div>
            ))}
          </div>
          <div>
            <h3>Technical toolkit</h3>
            <ul className="skill-list">
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
