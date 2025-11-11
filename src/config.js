// CloudFront configuration for images
export const CLOUDFRONT_URL = 'https://d3tbaba9xfyjnl.cloudfront.net'

// Helper function to get full image URL
export const getImageUrl = (imagePath) => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  return `${CLOUDFRONT_URL}/${cleanPath}`
}

