import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Star, Share2 } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Section } from './Section'
import '../../paper-theme.css'

export function ArticleLayout({ children, meta }) {
  const articleRef = useRef(null)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: meta.title,
          text: meta.description,
          url: window.location.href,
        })
      } catch (error) {
        navigator.clipboard.writeText(window.location.href)
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="paper-page dark min-h-screen bg-background flex flex-col" ref={articleRef}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <Link
            to="/"
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Home</span>
          </Link>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <Section size="lg" className="border-b">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Meta badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary">{meta.category}</Badge>
              <Badge variant="outline">{meta.difficulty}</Badge>
              {meta.featured && (
                <Badge className="bg-yellow-500 text-yellow-900">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>

            {/* Title and description */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                {meta.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {meta.description}
              </p>
            </div>

            {/* Article meta */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {meta.duration}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {meta.author}
              </div>
              <div className="text-sm">
                Updated {meta.lastUpdated}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Article Content */}
      <Section size="lg" className="flex-1">
        <div className="max-w-4xl mx-auto">
          <div>
            {children}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container flex items-center justify-center py-6 px-4 md:px-8">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
