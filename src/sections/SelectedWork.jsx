import { useState } from 'react'
import { Container } from '../components/layout/Container.jsx'
import { projects } from '../data/portfolio.js'
import githubIcon from '../assets/images/github-white-icon.svg'

export function SelectedWork() {
  const [openProjects, setOpenProjects] = useState(new Set())

  function toggleProject(title) {
    setOpenProjects((current) => {
      const next = new Set(current)

      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }

      return next
    })
  }

  return (
    <section className="section projects" id="work" aria-labelledby="work-title">
      <Container>
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2 id="work-title">Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const isOpen = openProjects.has(project.title)
            const panelId = `project-details-${project.number}`

            return (
              <article className={`project ${isOpen ? 'project--open' : ''}`} key={project.title}>
                <button
                  className="project__trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(project.title)}
                >
                  <span className="project__meta">
                    <span>{project.number}</span>
                    <span>{project.stack.join(' / ')}</span>
                  </span>
                  <span className="project__body">
                    <span className="project__title-row">
                      <span className="project__title">{project.title}</span>
                      <span className="project__toggle" aria-hidden="true">
                        <span />
                        <span />
                      </span>
                    </span>
                    <span className="project__description">{project.description}</span>
                    <span className="project__hint">
                      {isOpen ? 'Close project' : 'View project details'}
                    </span>
                  </span>
                </button>

                <div className="project__drawer" id={panelId} aria-hidden={!isOpen}>
                  <div className="project__drawer-inner">
                    <div className="project__detail-copy">
                      <p className="section-label">Inside the project</p>
                      <h3>{project.details.heading}</h3>
                      <p>{project.details.body}</p>
                      <ul>
                        {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                      <a
                        className="project__repository-link"
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <img
                          className="project__repository-icon"
                          src={githubIcon}
                          alt=""
                          aria-hidden="true"
                        />
                        <span>View repository</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                    <div className="project__gallery">
                      {project.details.images.map((image, index) => (
                        image.images ? (
                          <figure className="project__image" key={image.caption}>
                            <div className="project__image-stack">
                              {image.images.map((item) => (
                                <div className="project__image-layer" key={item.src}>
                                  <span>{item.label}</span>
                                  <img src={item.src} alt={item.alt} />
                                </div>
                              ))}
                            </div>
                            <figcaption>
                              <span>0{index + 1}</span>
                              <span>{image.caption}</span>
                            </figcaption>
                          </figure>
                        ) : image.src ? (
                          <figure className="project__image" key={image.src}>
                            <img src={image.src} alt={image.alt} />
                            <figcaption>
                              <span>0{index + 1}</span>
                              <span>{image.caption}</span>
                            </figcaption>
                          </figure>
                        ) : (
                          <div className="image-placeholder" key={image.caption}>
                            <span>0{index + 1}</span>
                            <p>{image.caption}</p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
