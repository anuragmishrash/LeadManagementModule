# 🚀 Deployment Guide

This guide covers different deployment options for the Lead Management CRM System.

## 📋 Table of Contents
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Production Deployment](#production-deployment)
- [Docker Deployment](#docker-deployment)
- [Cloud Deployment](#cloud-deployment)

## 🔧 Environment Variables

### Backend (.env)
```bash
# Server Configuration
PORT=5000
NODE_ENV=production

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/leadManagementDB?retryWrites=true&w=majority

# Security (Optional)
JWT_SECRET=your-jwt-secret-key
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env)
```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Lead Management CRM
```

## 💻 Local Development

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB Atlas account

### Setup Steps
```bash
# 1. Clone repository
git clone https://github.com/anuragmishrash/LeadManagementModule.git
cd LeadManagementModule

# 2. Install dependencies
npm install
cd server && npm install && cd ..

# 3. Setup environment
cp .env.example .env
cp server/.env.example server/.env

# 4. Configure MongoDB URI in server/.env
# MONGODB_URI=your-mongodb-connection-string

# 5. Start development servers
npm run dev:full
```

## 🌐 Production Deployment

### Build for Production
```bash
# Build frontend
npm run build

# The built files will be in the 'dist' directory
```

### Production Server Setup
```bash
# Install production dependencies only
npm ci --only=production
cd server && npm ci --only=production

# Start production server
cd server && npm start
```

### Serve Frontend
You can serve the built frontend using:
- **Nginx** (recommended)
- **Apache**
- **Express static files**
- **CDN** (Cloudflare, AWS CloudFront)

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    # Frontend
    location / {
        root /path/to/your/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🐳 Docker Deployment

### Dockerfile (Frontend)
```dockerfile
# Frontend Dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Dockerfile (Backend)
```dockerfile
# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY server/package*.json ./
RUN npm ci --only=production

COPY server/ .
EXPOSE 5000
CMD ["npm", "start"]
```

### Docker Compose
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "3000:80"
    depends_on:
      - backend

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGODB_URI=${MONGODB_URI}
    depends_on:
      - mongodb

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
```

### Run with Docker
```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## ☁️ Cloud Deployment

### Vercel (Frontend)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Heroku (Backend)
```bash
# Install Heroku CLI
# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your-mongodb-uri
heroku config:set NODE_ENV=production

# Deploy
git subtree push --prefix server heroku main
```

### Railway (Full Stack)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### AWS EC2
```bash
# Connect to EC2 instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup project
git clone https://github.com/anuragmishrash/LeadManagementModule.git
cd LeadManagementModule
npm install
cd server && npm install

# Install PM2 for process management
sudo npm install -g pm2

# Start backend with PM2
cd server
pm2 start server.js --name "lead-crm-backend"

# Setup Nginx for frontend
sudo apt install nginx
sudo cp /path/to/nginx.conf /etc/nginx/sites-available/default
sudo systemctl restart nginx
```

## 🔒 Security Considerations

### Production Checklist
- [ ] Use HTTPS (SSL/TLS certificates)
- [ ] Set secure environment variables
- [ ] Enable CORS with specific origins
- [ ] Use strong MongoDB passwords
- [ ] Implement rate limiting
- [ ] Add security headers
- [ ] Regular security updates
- [ ] Monitor application logs

### Security Headers (Express)
```javascript
// Add to server.js
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});
```

## 📊 Monitoring & Logging

### Application Monitoring
- **PM2 Monitoring**: `pm2 monit`
- **Logs**: `pm2 logs`
- **Health Check**: GET `/api/health`

### Database Monitoring
- MongoDB Atlas built-in monitoring
- Connection pool monitoring
- Query performance tracking

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: |
        npm install
        cd server && npm install
        
    - name: Build frontend
      run: npm run build
      
    - name: Deploy to server
      # Add your deployment steps here
```

## 🆘 Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in environment variables
2. **MongoDB connection**: Check connection string and network access
3. **CORS errors**: Configure CORS origins properly
4. **Build failures**: Check Node.js version compatibility
5. **Memory issues**: Increase server memory allocation

### Debug Commands
```bash
# Check running processes
ps aux | grep node

# Check port usage
netstat -tulpn | grep :5000

# View application logs
tail -f /var/log/nginx/error.log
pm2 logs lead-crm-backend
```

## 📞 Support

For deployment issues:
- Create a GitHub issue
- Check existing documentation
- Contact: anurag@leadcrm.com

---

Happy deploying! 🚀