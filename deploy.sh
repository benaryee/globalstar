#!/bin/bash

set -e

echo "🚀 Starting Global Star deployment..."

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

echo "✅ Build complete!"

echo "🌐 Starting production server on port 3300..."
PORT=3300 npm run start:prod
