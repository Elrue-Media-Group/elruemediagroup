# Elrue Media Group

A modern React website for Elrue Media Group, serving as a central hub for profile links and applications.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## ☁️ AWS Deployment

This project is configured for deployment to AWS S3 and CloudFront.

### Prerequisites

- AWS CLI installed and configured
- An S3 bucket created for hosting
- A CloudFront distribution set up pointing to your S3 bucket

### Deployment Steps

1. **Create S3 Bucket** (if not already created):
```bash
aws s3 mb s3://your-bucket-name --region us-east-1
```

2. **Enable Static Website Hosting**:
```bash
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

3. **Set Bucket Policy** (for CloudFront access):
Create a bucket policy that allows CloudFront to access your bucket. You'll need your CloudFront Origin Access Identity (OAI) or Origin Access Control (OAC).

4. **Build and Deploy**:
```bash
# Set environment variables
export S3_BUCKET_NAME=your-bucket-name
export CLOUDFRONT_DISTRIBUTION_ID=your-distribution-id

# Make deploy script executable
chmod +x aws-deploy.sh

# Run deployment
./aws-deploy.sh
```

Or manually:
```bash
npm run build
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id your-distribution-id --paths "/*"
```

### CloudFront Configuration Tips

- Set the default root object to `index.html`
- Configure error pages: 404 and 403 should return `index.html` (for React Router if you add it later)
- Enable compression
- Set appropriate cache behaviors
- Use HTTPS only

## 🎨 Customization

### Adding Links

Edit `src/App.jsx` and update the `links` array:

```jsx
const [links] = useState([
  {
    id: 1,
    title: 'My Profile',
    url: 'https://your-profile-url.com',
    description: 'Learn more about me',
    icon: '👤'
  },
  // Add more links...
])
```

### Adding Images

Images are served from your existing CloudFront S3 setup. To use images:

1. Upload your images to your S3 bucket (the same one used for QA AI Depot)
2. Update `src/config.js` with your CloudFront distribution URL:
```js
export const CLOUDFRONT_URL = 'https://your-cloudfront-url.cloudfront.net'
```

3. Use images in your components:
```jsx
import { getImageUrl } from './config'

// In your component:
<img src={getImageUrl('images/logo.png')} alt="Logo" />
```

The `getImageUrl` helper function automatically constructs the full CloudFront URL for your images.

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`

## 📁 Project Structure

```
elruemediagroup/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   ├── config.js        # CloudFront configuration for images
│   └── index.css        # Global styles
├── dist/                # Build output (generated)
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── aws-deploy.sh        # Deployment script
└── README.md            # This file
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 License

© 2024 Elrue Media Group. All rights reserved.

