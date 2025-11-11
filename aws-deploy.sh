#!/bin/bash

# AWS S3 and CloudFront Deployment Script
# Make sure to set these variables before running:
# - S3_BUCKET_NAME: Your S3 bucket name
# - CLOUDFRONT_DISTRIBUTION_ID: Your CloudFront distribution ID

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building React application...${NC}"
npm run build

if [ -z "$S3_BUCKET_NAME" ]; then
    echo "Error: S3_BUCKET_NAME environment variable is not set"
    exit 1
fi

echo -e "${BLUE}Uploading files to S3 bucket: $S3_BUCKET_NAME${NC}"
aws s3 sync dist/ s3://$S3_BUCKET_NAME --delete --exact-timestamps

if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo -e "${BLUE}Invalidating CloudFront cache...${NC}"
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo -e "${GREEN}CloudFront invalidation created${NC}"
fi

echo -e "${GREEN}Deployment completed successfully!${NC}"

