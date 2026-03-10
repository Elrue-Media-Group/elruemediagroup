import React from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Home,
  Github,
  ExternalLink,
  Brain,
  Eye,
  Zap,
  FileText,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card'
import { Section } from '../components/layout/Section'
import { PageHeader } from '../components/layout/PageHeader'
import '../paper-theme.css'

export default function AITestExplorerPage() {
  return (
    <div className="paper-page dark min-h-screen bg-background flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/Elrue-Media-Group/aitestexplorer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
      {/* Breadcrumb Navigation */}
      <Section className="py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="flex items-center hover:text-foreground transition-colors">
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">AI Test Explorer</span>
          </nav>
        </div>
      </Section>

      <Section>
        <PageHeader
          badge="No-Code AI Testing"
          heading="AI Test Explorer"
          text="A no-code AI exploratory testing engine powered by GPT-5.1 and AI Vision technology"
        />
      </Section>

      {/* Overview */}
      <Section size="lg">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              The AI Test Explorer is an autonomous testing engine that performs exploratory testing without requiring any test code.
              Using GPT-5.1's advanced reasoning capabilities and AI Vision technology, it can navigate websites, understand user
              interfaces visually, generate test cases in real-time, and produce detailed reasoning logs.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100">Related White Paper</h3>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                    Learn more about the architecture and concepts behind this engine in the{' '}
                    <Link to="/papers/ai-exploratory-testing-engine" className="text-blue-600 hover:underline font-medium">
                      AI Exploratory Testing Engine white paper
                    </Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Repository Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Github className="h-6 w-6 text-foreground flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Repository</h3>
                  <p className="text-muted-foreground mb-4">
                    The AI Test Explorer is available as an open-source project on GitHub. Clone the repository to get started
                    with autonomous AI-powered exploratory testing.
                  </p>
                  <Button asChild variant="outline">
                    <a
                      href="https://github.com/Elrue-Media-Group/aitestexplorer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-purple-500" />
                    AI Vision Understanding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Uses GPT-5.1's vision capabilities to understand UI elements visually, enabling tests that adapt to
                    design changes without breaking.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    Autonomous Reasoning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    AI decides what to test based on learned patterns, generates test cases in real-time, and adapts
                    exploration strategy based on discoveries.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-500" />
                    No Code Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Performs exploratory testing without writing or maintaining test scripts. Simply point it at your
                    application and let it explore.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-green-500" />
                    Detailed Reasoning Logs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Produces comprehensive logs documenting the AI's cognitive process, decisions, and discoveries
                    during exploration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Getting Started */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">Prerequisites</h3>
                  <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1 list-disc list-inside mt-1">
                    <li>Node.js &gt;= 18.0.0</li>
                    <li>OpenAI API key (for GPT-5.1 access)</li>
                    <li>Basic understanding of exploratory testing concepts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Installation</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Clone the repository and install dependencies:
              </p>
              <pre className="text-sm overflow-x-auto bg-background p-3 rounded">
{`git clone https://github.com/Elrue-Media-Group/aitestexplorer.git
cd aitestexplorer
npm install`}
              </pre>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Configuration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Set up your environment variables:
              </p>
              <pre className="text-sm overflow-x-auto bg-background p-3 rounded">
{`# Create .env file
echo "OPENAI_API_KEY=your-api-key-here" > .env`}
              </pre>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Running an Exploration</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Start an exploratory testing session:
              </p>
              <pre className="text-sm overflow-x-auto bg-background p-3 rounded">
{`npm start -- --url https://your-app.com`}
              </pre>
            </div>
          </div>

          {/* What You Get */}
          <div>
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Semantic Understanding</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-generated description of your application's purpose, architecture, and user flows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Vision-Based Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Visual understanding of UI elements, layouts, and design patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Generated Test Cases</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatically created and executed test scenarios based on exploration
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">UX &amp; Accessibility Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Actionable recommendations for improving user experience and accessibility
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Reasoning Logs</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete documentation of the AI's decision-making process and discoveries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button variant="outline" asChild>
              <Link to="/">
                Back to Home
              </Link>
            </Button>
            <Button asChild>
              <a
                href="https://github.com/Elrue-Media-Group/aitestexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/papers/ai-exploratory-testing-engine" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Read White Paper
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex items-center justify-center py-6 px-4 md:px-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>·</span>
            <Link to="/papers/ai-exploratory-testing-engine" className="hover:text-foreground transition-colors">
              White Paper
            </Link>
            <span>·</span>
            <a
              href="https://github.com/Elrue-Media-Group/aitestexplorer"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
