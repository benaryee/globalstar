# Global Star - Deployment Guide

This guide explains how to deploy Global Star to production on port 3300.

## 🚀 Quick Deployment Options

### Option 1: Simple Deployment (Recommended for Testing)

Deploy and start the production server immediately:

```bash
./deploy.sh
```

This will:
- Install all dependencies
- Build the production bundle
- Start the server on port 3300

### Option 2: PM2 Deployment (Recommended for Production)

Deploy with PM2 process manager for production environments:

```bash
./deploy-pm2.sh
```

This will:
- Install PM2 if not present
- Install all dependencies
- Build the production bundle
- Start the app with PM2 on port 3300
- Enable auto-restart and process monitoring

### Option 3: Manual Deployment

If you prefer manual control:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start on port 3300
npm run start:prod
```

Or use the start script:

```bash
./start-prod.sh
```

## 📝 Available NPM Scripts

```bash
npm run dev           # Development server (port 3000)
npm run build         # Build for production
npm run start         # Start production server (default port)
npm run start:prod    # Start production server on port 3300
npm run deploy        # Build and start on port 3300
npm run lint          # Run ESLint
```

## 🔧 PM2 Management

After deploying with PM2, use these commands:

```bash
# View logs
pm2 logs globalstar

# Restart application
pm2 restart globalstar

# Stop application
pm2 stop globalstar

# Delete from PM2
pm2 delete globalstar

# View status
pm2 status

# Monitor resources
pm2 monit
```

## 🌐 Access Application

After deployment, access the application at:

**Local**: http://localhost:3300
**Network**: http://YOUR_SERVER_IP:3300

## 📂 Production Build

The production build is optimized with:
- Minified JavaScript and CSS
- Image optimization
- Static asset caching
- Server-side rendering
- Automatic code splitting

## 🔒 Environment Variables

Create a `.env.local` file for production environment variables:

```bash
# .env.local
NODE_ENV=production
PORT=3300
```

## 🔄 Updating Deployment

To update an existing deployment:

### With PM2:
```bash
git pull origin main
npm install
npm run build
pm2 restart globalstar
```

### Without PM2:
```bash
git pull origin main
./deploy.sh
```

## 📊 Monitoring

### PM2 Logs Location
- Error logs: `./logs/err.log`
- Output logs: `./logs/out.log`
- Combined logs: `./logs/combined.log`

### View Live Logs
```bash
pm2 logs globalstar --lines 100
```

## 🐳 Docker Deployment (Optional)

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3300

CMD ["npm", "run", "start:prod"]
```

Build and run:

```bash
docker build -t globalstar .
docker run -p 3300:3300 globalstar
```

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Find process using port 3300
lsof -i :3300

# Kill the process
kill -9 <PID>
```

### Build Failures
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### PM2 Issues
```bash
# Reset PM2
pm2 kill
pm2 flush
./deploy-pm2.sh
```

## 🔐 Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Configure environment variables in `.env.local`
- [ ] Enable HTTPS with reverse proxy (nginx/apache)
- [ ] Set up firewall rules
- [ ] Configure PM2 startup script: `pm2 startup`
- [ ] Enable log rotation
- [ ] Set up monitoring and alerting
- [ ] Configure backup strategy
- [ ] Test deployment in staging first

## 🌍 Reverse Proxy Setup

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name globalstar.com www.globalstar.com;

    location / {
        proxy_pass http://localhost:3300;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 📈 Performance Optimization

The application is production-ready with:
- Static generation where possible
- Optimized images
- Minimal JavaScript bundle
- CSS minification
- Gzip compression (via Next.js)

## 🆘 Support

For issues or questions:
- Check logs: `pm2 logs globalstar`
- Review build output: `npm run build`
- Verify dependencies: `npm list`

---

**Global Star Solutions Ltd** | Company No. 14596390 | Registered in England
