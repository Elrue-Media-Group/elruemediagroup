import React from 'react'

export function Figure({ src, alt, caption }) {
  return (
    <figure className="w-full text-center my-8">
      <img
        src={src}
        alt={alt}
        className="max-w-full h-auto rounded-lg mx-auto"
      />
      {caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
