# CorteQS - Coolify Deployment Guide

## 🚀 Quick Deploy to Coolify

### 1. Prerequisites
- [Coolify](https://coolify.io/) instance (self-hosted or cloud)
- GitHub repository access
- Supabase project

### 2. Environment Variables

Required variables:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Optional variables:
```bash
VITE_APP_NAME=CorteQS
VITE_APP_VERSION=1.0.0
PORT=80
```

### 3. Coolify Deployment Steps

1. **Create New Resource** in Coolify Dashboard
2. Choose **"Public Repository"**
3. Enter GitHub URL: `https://github.com/ubterzioglu/corteqs`
4. Branch: `master`
5. Build Pack: **Docker Compose**
6. Select `docker-compose.coolify.yml`
7. Add Environment Variables (see above)
8. **Deploy!**

### 4. Webhook Auto-Deploy (Optional)

Add to GitHub Secrets:
- `COOLIFY_WEBHOOK_URL`: Your Coolify webhook URL

On every push to master, GitHub Actions will trigger Coolify redeploy.

### 5. Manual Docker Deploy

```bash
# 1. Setup environment
cp .env.example .env
# Edit .env with your values

# 2. Run deploy script
./scripts/deploy.sh

# Or manually:
docker-compose -f docker-compose.coolify.yml up -d --build
```

### 6. Health Check

```bash
# Check if app is healthy
curl http://your-domain/health

# Expected response: "healthy"
```

## 📁 Deployment Files

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage build optimized for production |
| `docker-compose.coolify.yml` | Coolify-specific compose config |
| `nginx.conf` | Optimized nginx with gzip, caching, security |
| `coolify.yaml` | Coolify platform configuration |
| `.env.example` | Environment variable template |
| `scripts/deploy.sh` | Manual deployment script |
| `.github/workflows/coolify-deploy.yml` | CI/CD pipeline |

## 🔧 Troubleshooting

### Container won't start
```bash
docker logs corteqs-app
```

### Health check fails
```bash
# Check nginx config
docker exec corteqs-app nginx -t

# Test health endpoint
docker exec corteqs-app wget http://localhost/health
```

### Build fails
```bash
# Clean build
docker system prune -a
docker build --no-cache -t corteqs:latest .
```

## 🌐 Post-Deploy

- App URL: `https://your-domain.com`
- Health Check: `https://your-domain.com/health`
- Guide Page: `https://your-domain.com/guide`
