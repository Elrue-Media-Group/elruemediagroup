import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../config'
import { UserCircle, Briefcase, Github, ChevronDown, ChevronUp, FileText, Code2, Star, ExternalLink } from 'lucide-react'

function Home() {
  const [expandedCard, setExpandedCard] = useState(null)

  // Publications & Research - Combined white papers and code examples
  const publications = [
    {
      id: 'p1',
      title: 'AI-Powered Exploratory Testing Engine',
      description: 'White paper on leveraging AI for automated exploratory testing and intelligent test case generation',
      url: '/papers/ai-exploratory-testing-engine',
      icon: 'FileText',
      type: 'Research Paper'
    },
    {
      id: 'p2',
      title: 'Test Automation ROI Framework',
      description: 'Strategic guide for measuring and maximizing return on investment in test automation initiatives',
      url: '/papers/test-automation-roi',
      icon: 'FileText',
      type: 'Research Paper'
    },
    {
      id: 'p3',
      title: 'AI Test Explorer',
      description: 'Interactive AI-powered test exploration tool with real-time analysis',
      url: '/examples/ai-test-explorer',
      githubUrl: 'https://github.com/Elrue-Media-Group/aitestexplorer',
      icon: 'Code2',
      type: 'Code Project'
    }
  ]

  const links = [
    {
      id: 1,
      title: 'Professional Bio',
      url: '/bio',
      description: '30+ years in technology leadership, cloud engineering, and quality automation',
      icon: 'UserCircle',
      category: 'internal',
      isInternal: true
    },
    {
      id: 2,
      title: 'Context Planner',
      url: 'https://contextplanner.com/',
      description: 'AI-powered planning and idea analysis platform',
      poweredBy: 'Powered by AWS & OpenAI',
      logo: 'https://d3tbaba9xfyjnl.cloudfront.net/context-logo3size.png',
      category: 'project',
      techStack: ['React', 'AWS Lambda', 'AWS API Gateway', 'Amazon DynamoDB', 'Amazon Bedrock', 'AWS Cognito', 'AWS S3', 'AWS CloudFront', 'Amazon SQS'],
      features: [
        'AI-powered idea analysis and planning workflows',
        'Serverless architecture with AWS Lambda',
        'Secure authentication with AWS Cognito',
        'Async processing with Amazon SQS'
      ]
    },
    {
      id: 3,
      title: 'ContextStudy',
      url: 'https://contextstudy.com/',
      description: 'AI-powered study companion that transforms any topic into structured, personalized learning experiences',
      poweredBy: 'Powered by AWS & OpenAI',
      logo: 'https://d3tbaba9xfyjnl.cloudfront.net/contextstudy-logo-image3.png',
      subtitle: 'AI Exam Prep',
      category: 'project',
      badge: 'Private Beta',
      techStack: ['React', 'TypeScript', 'Vite', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'AWS Cognito', 'S3 + CloudFront', 'OpenAI GPT', 'Zod'],
      features: [
        'AI-generated study plans with custom prompt engineering',
        'Serverless architecture with AWS Lambda & API Gateway',
        'Secure authentication with AWS Cognito',
        'Schema-validated AI outputs with Zod'
      ]
    },
    {
      id: 4,
      title: 'Layoff Lens',
      url: 'https://www.layofflens.com/',
      description: 'Tech industry layoff tracking and insights',
      poweredBy: 'Powered by Azure & Open AI',
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
      id: 5,
      title: 'World of Elrue',
      url: 'https://worldofelrue.com/',
      description: 'Creative projects and multimedia showcase',
      poweredBy: 'Powered by AWS',
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
      id: 6,
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tony-cerrato-a22a123',
      description: 'Connect and view professional experience',
      icon: 'Briefcase',
      category: 'social'
    },
    {
      id: 7,
      title: 'GitHub',
      url: 'https://github.com/Elrue-Media-Group',
      description: 'Explore code and open source projects',
      icon: 'Github',
      category: 'social'
    }
  ]

  const professionalLinks = links.filter(link => link.category === 'internal' || link.category === 'social')
  const projectLinks = links.filter(link => link.category === 'project')

  const getIcon = (iconName, size = 48) => {
    const iconProps = { size, strokeWidth: 1.5 }
    switch(iconName) {
      case 'UserCircle':
        return <UserCircle {...iconProps} />
      case 'Briefcase':
        return <Briefcase {...iconProps} />
      case 'Github':
        return <Github {...iconProps} />
      case 'FileText':
        return <FileText {...iconProps} />
      case 'Code2':
        return <Code2 {...iconProps} />
      case 'Star':
        return <Star {...iconProps} />
      default:
        return null
    }
  }

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="page-container">
        <header className="header">
          <img
            src={getImageUrl('elruemediagroup-logoHD.png')}
            alt="Elrue Media Group"
            className="logo-image"
          />
          <div className="header-text">
            <h1 className="main-title">Tony Cerrato</h1>
            <p className="subtitle">Independent Projects & Continuous Learning</p>
            <p className="tagline">Technology Leader | Cloud Engineering | AI-Driven Quality</p>
          </div>
        </header>

        <main className="main-content" id="main-content">
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
                      {link.poweredBy && <span className="card-badge powered-by-badge">{link.poweredBy}</span>}
                      {link.logo ? (
                        <img src={link.logo} alt={link.title} className="link-logo" />
                      ) : (
                        <div className="link-icon">{getIcon(link.icon)}</div>
                      )}
                      <h2 className="link-title">{link.title}</h2>
                      <p className="link-description">{link.description}</p>
                    </Link>
                  )
                }

                // For external links (LinkedIn, GitHub)
                if (link.category === 'social') {
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`link-card ${link.category}`}
                      aria-label={`${link.title} — ${link.description} (opens in new tab)`}
                    >
                      {link.badge && <span className="card-badge">{link.badge}</span>}
                      {link.poweredBy && <span className="card-badge powered-by-badge">{link.poweredBy}</span>}
                      {link.logo ? (
                        <img src={link.logo} alt={link.title} className="link-logo" />
                      ) : (
                        <div className="link-icon">{getIcon(link.icon)}</div>
                      )}
                      <h2 className="link-title">{link.title}</h2>
                      <p className="link-description">{link.description}</p>
                    </a>
                  )
                }

                return (
                  <div
                    key={link.id}
                    className={`link-card ${link.category} ${isExpanded ? 'expanded' : ''} ${link.disabled ? 'disabled' : ''}`}
                  >
                    {link.badge && <span className="card-badge">{link.badge}</span>}
                    {link.poweredBy && <span className="card-badge powered-by-badge">{link.poweredBy}</span>}

                    {link.disabled ? (
                      <div className="card-content">
                        {link.logo ? (
                          <img src={link.logo} alt={link.title} className="link-logo" />
                        ) : (
                          <div className="link-icon">{getIcon(link.icon)}</div>
                        )}
                        <h2 className="link-title">{link.title}</h2>
                        <p className="link-description">{link.description}</p>
                      </div>
                    ) : (
                      <a
                        href={link.url}
                        target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="card-main-link"
                        aria-label={`Visit ${link.title} (opens in new tab)`}
                      >
                        <div className="card-content">
                          {link.logo ? (
                            <img src={link.logo} alt={link.title} className="link-logo" />
                          ) : (
                            <div className="link-icon">{getIcon(link.icon)}</div>
                          )}
                          <h2 className="link-title">{link.title}</h2>
                          <p className="link-description">{link.description}</p>
                        </div>
                      </a>
                    )}

                    {hasDetails && (
                      <>
                        <button
                          className="expand-button"
                          onClick={() => setExpandedCard(isExpanded ? null : link.id)}
                          aria-label={isExpanded ? 'Show less' : 'Show more'}
                        >
                          {isExpanded ? <><ChevronUp size={16} /> Less</> : <><ChevronDown size={16} /> More</>}
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
                                <Github size={20} className="github-icon" /> View on GitHub
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
            <p className="section-subtitle">
              Independently built platforms spanning AI, cloud infrastructure, and modern web development
            </p>
            <div className="projects-list">
              {projectLinks.map((link) => (
                <div key={link.id} className="project-item">
                  <div className="project-logo-container">
                    {link.subtitle ? (
                      <div className="project-brand">
                        <img src={link.logo} alt={link.title} className="project-brand-icon" />
                        <div className="project-brand-text">
                          <span className="project-brand-name">{link.title}</span>
                          <span className="project-brand-subtitle">{link.subtitle}</span>
                        </div>
                      </div>
                    ) : (
                      link.logo && <img src={link.logo} alt={link.title} className="project-logo" />
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{link.title}</h3>
                      {link.poweredBy && <span className="project-powered-badge">{link.poweredBy}</span>}
                    </div>
                    <p className="project-description">{link.description}</p>
                    {link.techStack && (
                      <div className="project-tech-stack">
                        {link.techStack.map((tech, idx) => (
                          <span key={idx} className="project-tech-badge">{tech}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="project-actions">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      <ExternalLink size={14} /> Visit Site
                    </a>
                    {link.github && (
                      <a
                        href={link.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn secondary"
                      >
                        <Github size={14} /> View Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications & Research Section */}
          <section className="links-section">
            <h2 className="section-title">Publications & Research</h2>
            <p className="section-subtitle">
              Thought leadership in AI-driven quality engineering and test automation
            </p>
            <div className="publication-list">
              {publications.map((item) => (
                <div key={item.id} className="publication-item">
                  <div className="publication-header">
                    <div className="publication-meta">
                      <div className="publication-icon">{getIcon(item.icon, 24)}</div>
                      <span className="publication-type">{item.type}</span>
                      <h3 className="publication-title">{item.title}</h3>
                    </div>
                    <div className="publication-links">
                      <Link
                        to={item.url}
                        className="pub-link-btn primary"
                      >
                        {item.type === 'Code Project' ? (
                          <><ExternalLink size={14} /> Live Demo</>
                        ) : (
                          <><FileText size={14} /> Read Paper</>
                        )}
                      </Link>
                      {item.githubUrl && (
                        <a
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pub-link-btn secondary"
                        >
                          <Github size={14} /> Source
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="publication-description">{item.description}</p>
                </div>
              ))}
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
