import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="app">
      <div className="page-container">
        <main className="main-content" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div>
            <h1 style={{ fontSize: '6rem', color: '#ffffff', margin: '0 0 1rem 0', fontWeight: 700 }}>404</h1>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.7)', margin: '0 0 2rem 0' }}>
              The page you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                borderRadius: '12px',
                color: '#93c5fd',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default NotFound
