import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../config'

function Home() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [links] = useState([
    {
      id: 1,
      title: 'Professional Bio',
      url: '/bio',
      description: '30+ years in technology leadership, cloud engineering, and quality automation',
      icon: '👤',
      category: 'internal',
      isInternal: true
    },
    {
      id: 2,
      title: 'QA AI Depot',
      url: 'https://qaaidepot.com',
      description: 'Intelligent, automated quality engineering for modern teams',
      badge: 'Coming Soon',
      logo: getImageUrl('qaaidepo-logo1.png'),
      category: 'project',
      techStack: ['React', 'Node.js', 'AWS CloudFront', 'AWS S3', 'AI/ML'],
      features: [
        'AI-powered test generation',
        'Automated quality analysis',
        'Cloud-native AWS architecture'
      ]
    },
    {
      id: 3,
      title: 'Layoff Lens',
      url: 'https://www.layofflens.com/',
      description: 'Tech industry layoff tracking and insights',
      logo: 'https://layofflens.blob.core.windows.net/layofflens/logo-redo.png',
      category: 'project',
      techStack: ['Next.js 15', 'Azure Static Web Apps', 'Azure Functions', 'Azure Table Storage', 'Azure Blob Storage'],
      github: 'https://github.com/Elrue-Media-Group/layofflens',
      features: [
        'Serverless API with Azure Functions',
        'Real-time layoff tracking & insights',
        'Automated CI/CD with GitHub Actions'
      ]
    },
    {
      id: 4,
      title: 'World of Elrue',
      url: 'https://worldofelrue.com/',
      description: 'Creative projects and multimedia showcase',
      logo: 'https://d9amq8b4jzm6k.cloudfront.net/elrueai.png',
      category: 'project',
      techStack: ['React', 'AWS CloudFront', 'AWS S3', 'Three.js'],
      features: [
        'Interactive 3D experiences',
        'Multimedia gallery',
        'High-performance CDN delivery'
      ]
    },
    {
      id: 5,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tony-cerrato-a22a123',
      description: 'Connect and view professional experience',
      icon: '💼',
      category: 'social'
    },
    {
      id: 6,
      title: 'GitHub',
      url: 'https://github.com/Elrue-Media-Group',
      description: 'Explore code and open source projects',
      icon: '💻',
      category: 'social'
    }
  ])

  const professionalLinks = links.filter(link => link.category === 'internal' || link.category === 'social')
  const projectLinks = links.filter(link => link.category === 'project')

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <img
            src={getImageUrl('elruemediagroup-logoHD.png')}
            alt="Elrue Media Group"
            className="logo-image"
          />
          <div className="header-text">
            <h1 className="main-title">Tony Cerrato</h1>
            <p className="tagline">Technology Leader | Cloud Engineering | AI-Driven Quality</p>
          </div>
        </header>

        <main className="main-content">
          <section className="links-section">
            <h2 className="section-title">Professional Information</h2>
            <div className="links-grid">
              {professionalLinks.map((link) => {
                const isExpanded = expandedCard === link.id
                const hasDetails = link.techStack || link.github || link.features

                if (link.isInternal) {
                  return (
                    <Link
                      key={link.id}
                      to={link.url}
                      className={`link-card ${link.category}`}
                    >
                      {link.badge && <span className="card-badge">{link.badge}</span>}
                      {link.logo ? (
                        <img src={link.logo} alt={link.title} className="link-logo" />
                      ) : (
                        <div className="link-icon">{link.icon}</div>
                      )}
                      <h2 className="link-title">{link.title}</h2>
                      <p className="link-description">{link.description}</p>
                    </Link>
                  )
                }

                return (
                  <div
                    key={link.id}
                    className={`link-card ${link.category} ${isExpanded ? 'expanded' : ''}`}
                  >
                    {link.badge && <span className="card-badge">{link.badge}</span>}

                    <a
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="card-main-link"
                    >
                      <div className="card-content">
                        {link.logo ? (
                          <img src={link.logo} alt={link.title} className="link-logo" />
                        ) : (
                          <div className="link-icon">{link.icon}</div>
                        )}
                        <h2 className="link-title">{link.title}</h2>
                        <p className="link-description">{link.description}</p>
                      </div>
                    </a>

                    {hasDetails && (
                      <>
                        <button
                          className="expand-button"
                          onClick={() => setExpandedCard(isExpanded ? null : link.id)}
                          aria-label={isExpanded ? 'Show less' : 'Show more'}
                        >
                          {isExpanded ? '▲ Less' : '▼ More'}
                        </button>

                        {isExpanded && (
                          <div className="card-details">
                            {link.techStack && (
                              <div className="detail-section">
                                <h3>Tech Stack</h3>
                                <div className="tech-badges">
                                  {link.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {link.features && (
                              <div className="detail-section">
                                <h3>Features</h3>
                                <ul className="feature-list">
                                  {link.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {link.github && (
                              <a
                                href={link.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                              >
                                <span className="github-icon">💻</span> View on GitHub
                              </a>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          <section className="links-section">
            <h2 className="section-title">Technology Projects</h2>
            <div className="links-grid">
              {projectLinks.map((link) => {
                const isExpanded = expandedCard === link.id
                const hasDetails = link.techStack || link.github || link.features

                if (link.isInternal) {
                  return (
                    <Link
                      key={link.id}
                      to={link.url}
                      className={`link-card ${link.category}`}
                    >
                      {link.badge && <span className="card-badge">{link.badge}</span>}
                      {link.logo ? (
                        <img src={link.logo} alt={link.title} className="link-logo" />
                      ) : (
                        <div className="link-icon">{link.icon}</div>
                      )}
                      <h2 className="link-title">{link.title}</h2>
                      <p className="link-description">{link.description}</p>
                    </Link>
                  )
                }

                return (
                  <div
                    key={link.id}
                    className={`link-card ${link.category} ${isExpanded ? 'expanded' : ''}`}
                  >
                    {link.badge && <span className="card-badge">{link.badge}</span>}

                    <a
                      href={link.url}
                      target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="card-main-link"
                    >
                      <div className="card-content">
                        {link.logo ? (
                          <img src={link.logo} alt={link.title} className="link-logo" />
                        ) : (
                          <div className="link-icon">{link.icon}</div>
                        )}
                        <h2 className="link-title">{link.title}</h2>
                        <p className="link-description">{link.description}</p>
                      </div>
                    </a>

                    {hasDetails && (
                      <>
                        <button
                          className="expand-button"
                          onClick={() => setExpandedCard(isExpanded ? null : link.id)}
                          aria-label={isExpanded ? 'Show less' : 'Show more'}
                        >
                          {isExpanded ? '▲ Less' : '▼ More'}
                        </button>

                        {isExpanded && (
                          <div className="card-details">
                            {link.techStack && (
                              <div className="detail-section">
                                <h3>Tech Stack</h3>
                                <div className="tech-badges">
                                  {link.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {link.features && (
                              <div className="detail-section">
                                <h3>Features</h3>
                                <ul className="feature-list">
                                  {link.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {link.github && (
                              <a
                                href={link.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-link"
                              >
                                <span className="github-icon">💻</span> View on GitHub
                              </a>
                            )}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </section>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Elrue Media Group. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default Home
