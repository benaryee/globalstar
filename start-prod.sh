#!/bin/bash

echo "🌐 Starting Global Star production server on port 3300..."

if [ ! -d ".next" ]; then
    echo "❌ Production build not found. Running build first..."
    npm run build
fi

PORT=3300 npm start
