#!/bin/bash

set -e

echo "🚀 Starting Global Star deployment with PM2..."

if ! command -v pm2 &> /dev/null
then
    echo "❌ PM2 is not installed. Installing PM2 globally..."
    npm install -g pm2
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building production bundle..."
npm run build

echo "🛑 Stopping existing PM2 process (if any)..."
pm2 stop globalstar 2>/dev/null || true
pm2 delete globalstar 2>/dev/null || true

echo "🌐 Starting production server with PM2 on port 3300..."
pm2 start ecosystem.config.js

echo "💾 Saving PM2 process list..."
pm2 save

echo "✅ Deployment complete!"
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "🔗 Application running at: http://localhost:3300"
echo ""
echo "📝 Useful PM2 commands:"
echo "  pm2 logs globalstar    - View logs"
echo "  pm2 restart globalstar - Restart app"
echo "  pm2 stop globalstar    - Stop app"
echo "  pm2 status             - Check status"
