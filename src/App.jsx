import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Bio from './pages/Bio'
import AiExploratoryTestingEngine from './pages/papers/AiExploratoryTestingEngine'
import TestAutomationROI from './pages/papers/TestAutomationROI'
import AITestExplorerPage from './pages/AITestExplorerPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/papers/ai-exploratory-testing-engine" element={<AiExploratoryTestingEngine />} />
        <Route path="/papers/test-automation-roi" element={<TestAutomationROI />} />
        <Route path="/examples/ai-test-explorer" element={<AITestExplorerPage />} />
      </Routes>
    </Router>
  )
}

export default App

