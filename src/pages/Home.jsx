import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../config'
import { UserCircle, Linkedin, Github, FileText, Code2, ExternalLink } from 'lucide-react'

function Home() {
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

  const projects = [
    {
      title: 'Context Planner',
      url: 'https://contextplanner.com/',
      description: 'AI-powered planning and idea analysis platform',
      poweredBy: 'Powered by AWS & OpenAI',
      logo: 'https://d3tbaba9xfyjnl.cloudfront.net/context-logo3size.png',
      techStack: ['React', 'AWS Lambda', 'AWS API Gateway', 'Amazon DynamoDB', 'Amazon Bedrock', 'AWS Cognito', 'AWS S3', 'AWS CloudFront', 'Amazon SQS'],
      features: [
        'AI-powered idea analysis and planning workflows',
        'Serverless architecture with AWS Lambda',
        'Secure authentication with AWS Cognito',
        'Async processing with Amazon SQS'
      ]
    },
    {
      title: 'ContextStudy',
      url: 'https://contextstudy.com/',
      description: 'AI-powered study companion that transforms any topic into structured, personalized learning experiences',
      poweredBy: 'Powered by AWS & OpenAI',
      logo: 'https://d3tbaba9xfyjnl.cloudfront.net/contextstudy-logo-image3.png',
      subtitle: 'AI Exam Prep',
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
      title: 'Layoff Lens',
      url: 'https://www.layofflens.com/',
      description: 'Tech industry layoff tracking and insights',
      poweredBy: 'Powered by Azure & Open AI',
      logo: 'https://layofflens.blob.core.windows.net/layofflens/logo-redo.png',
      techStack: ['Next.js 15', 'Azure Static Web Apps', 'Azure Functions', 'Azure Table Storage', 'Azure Blob Storage'],
      github: 'https://github.com/Elrue-Media-Group/layofflens',
      features: [
        'Serverless API with Azure Functions',
        'Real-time layoff tracking & insights',
        'Automated CI/CD with GitHub Actions'
      ]
    },
    {
      title: 'Endless Expanse',
      url: 'https://endlessexpanse.net/',
      description: 'Atlas and chronicle of an original space-fantasy universe: an interactive 3D star map plus a reference wiki',
      poweredBy: 'Powered by AWS',
      logo: 'https://endlessexpanse.net/favicon.svg',
      subtitle: 'Space Fantasy',
      techStack: ['React 19', 'TypeScript', 'Vite', 'Three.js', 'React Three Fiber', 'Markdown (remark)', 'S3 + CloudFront', 'GitHub Actions'],
      features: [
        'Interactive 3D star map built with React Three Fiber',
        'Wiki pages generated from Markdown at build time',
        'Automated content checks, unit tests, and Playwright end-to-end tests',
        'Static deploy to S3 + CloudFront from CI'
      ]
    }
  ]

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
          <section className="intro-panel" aria-label="Introduction">
            <img src={getImageUrl('tony.jpeg')} alt="Tony Cerrato" className="intro-photo" />
            <div className="intro-body">
              <p className="intro-lead">
                Technology leader with 30+ years in software quality, cloud engineering, and AI-driven
                automation, with experience at Microsoft, Synopsys, Veracode, and TraceLink.
              </p>
              <p className="intro-text">
                Elrue Media Group is the umbrella for the independent apps below, built hands-on to
                explore AI and modern cloud architecture across AWS and Azure.
              </p>
              <div className="intro-actions">
                <Link to="/bio" className="intro-btn primary">
                  <UserCircle size={16} /> Professional Bio
                </Link>
                <a href="https://www.linkedin.com/in/tony-cerrato-a22a123" target="_blank" rel="noopener noreferrer" className="intro-btn">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://github.com/Elrue-Media-Group" target="_blank" rel="noopener noreferrer" className="intro-btn">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </section>

          <section className="links-section">
            <h2 className="section-title">Technology Projects</h2>
            <p className="section-subtitle">
              Independently built platforms spanning AI, cloud infrastructure, and modern web development
            </p>
            <div className="projects-list">
              {projects.map((link) => (
                <div key={link.title} className="project-item">
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
                      {link.badge && <span className="project-status-badge">{link.badge}</span>}
                    </div>
                    <p className="project-description">{link.description}</p>
                    {link.features && (
                      <ul className="project-features">
                        {link.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    )}
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
                      <div className="publication-icon">{item.icon === 'Code2' ? <Code2 size={24} strokeWidth={1.5} /> : <FileText size={24} strokeWidth={1.5} />}</div>
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
