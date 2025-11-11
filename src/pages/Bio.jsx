import React from 'react'
import { Link } from 'react-router-dom'
import { getImageUrl } from '../config'

function Bio() {
  return (
    <div className="app bio-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">← Back to Home</Link>
        </nav>

        <header className="bio-header">
          <div className="bio-header-content">
            <img
              src={getImageUrl('tony.jpeg')}
              alt="Tony Cerrato"
              className="profile-image"
            />
            <div className="bio-header-text">
              <h1 className="bio-name">Tony Cerrato</h1>
              <p className="bio-title">Technology Leader | Cloud Engineering | AI-Driven Quality</p>
              <div className="certifications">
                <span className="cert-badge">AWS Solutions Architect</span>
                <span className="cert-badge">AWS AI Practitioner</span>
                <span className="cert-badge">AWS Cloud Practitioner</span>
                <span className="cert-badge">Certified ScrumMaster</span>
              </div>
            </div>
          </div>
        </header>

        <main className="bio-content">
          <section className="bio-section">
            <h2 className="section-title">About</h2>
            <div className="bio-text">
              <p>
                Tony Cerrato is a seasoned technology leader with more than 30 years of experience in
                software quality, cloud engineering, and automation. His career spans some of the most
                innovative names in the industry, including Microsoft, Synopsys, Veracode, and TraceLink,
                where he led global teams delivering reliable, secure, and high-performance software platforms.
              </p>
              <p>
                Tony has spent his career driving the modernization of quality engineering practices across
                complex, cloud-based software platforms. He focuses on integrating AI-driven testing,
                continuous delivery, and advanced analytics to enhance coverage, accelerate feedback cycles,
                and raise the overall standard of software reliability. His leadership style emphasizes
                data-driven decision-making, collaboration, and a culture of innovation and accountability.
              </p>
              <p>
                Throughout his career in high tech, Tony has helped organizations evolve from traditional
                QA models to fully automated, intelligence-assisted quality engineering frameworks. He has
                built and led global teams, defined automation strategies for large-scale SaaS environments,
                and implemented AI-based systems that improve efficiency and insight across development
                lifecycles—from regulated industries to modern cloud-native platforms.
              </p>
            </div>
          </section>

          <section className="bio-section">
            <h2 className="section-title">Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h3>AI-Driven Testing & Automation</h3>
                <p>
                  Leading the integration of artificial intelligence into testing frameworks to enhance
                  coverage, accelerate feedback, and improve software reliability.
                </p>
              </div>
              <div className="expertise-card">
                <h3>Cloud Engineering & Architecture</h3>
                <p>
                  Architecting and implementing cloud-native solutions on AWS, focusing on scalability,
                  security, and performance optimization.
                </p>
              </div>
              <div className="expertise-card">
                <h3>Quality Engineering Leadership</h3>
                <p>
                  Building and leading global teams to transform traditional QA into modern, automated
                  quality engineering practices.
                </p>
              </div>
              <div className="expertise-card">
                <h3>Continuous Delivery & DevOps</h3>
                <p>
                  Implementing CI/CD pipelines and DevOps practices to accelerate delivery while
                  maintaining high quality standards.
                </p>
              </div>
            </div>
          </section>

          <section className="bio-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-list">
              <div className="experience-item">
                <h3>Microsoft</h3>
                <p>
                  Contributed to quality engineering practices at one of the world's leading
                  technology companies.
                </p>
              </div>
              <div className="experience-item">
                <h3>Synopsys</h3>
                <p>
                  Led quality initiatives for enterprise software development and security solutions.
                </p>
              </div>
              <div className="experience-item">
                <h3>Veracode</h3>
                <p>
                  Drove quality engineering for application security testing platforms.
                </p>
              </div>
              <div className="experience-item">
                <h3>TraceLink</h3>
                <p>
                  Led global teams delivering reliable, secure software platforms for regulated industries.
                </p>
              </div>
            </div>
          </section>

          <section className="bio-section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              <div className="education-item">
                <h3>Master of Science in Computer Information Systems (Security)</h3>
                <p className="institution">Boston University</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Science in Business Management (MIS)</h3>
                <p className="institution">University of Massachusetts</p>
              </div>
            </div>
          </section>

          <section className="bio-section mission-section">
            <h2 className="section-title">Mission</h2>
            <div className="mission-card">
              <p className="mission-text">
                Today, Tony applies his experience to <strong>QA AI Depot</strong>, combining decades
                of hands-on engineering with the power of artificial intelligence to transform how teams
                test, analyze, and deliver quality software. His mission is simple: <em>make intelligent,
                automated quality engineering accessible to every development team.</em>
              </p>
            </div>
          </section>
        </main>

        <footer className="footer">
          <img
            src={getImageUrl('elruemediagroup-logoHD.png')}
            alt="Elrue Media Group"
            className="footer-logo"
          />
          <p>&copy; {new Date().getFullYear()} Elrue Media Group. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default Bio
