#!/bin/bash
# ==========================================
# CorteQS - Coolify Deployment Script
# ==========================================

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=========================================${NC}"
echo -e "${BLUE}  CorteQS - Coolify Deployment Script${NC}"
echo -e "${BLUE}=========================================${NC}"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  .env file not found!${NC}"
    echo -e "${YELLOW}   Copying from .env.example...${NC}"
    cp .env.example .env
    echo -e "${RED}❌ Please fill in your environment variables in .env${NC}"
    exit 1
fi

# Load environment variables
export $(grep -v '^#' .env | xargs)

# Validate required variables
if [ -z "$VITE_SUPABASE_URL" ] || [ "$VITE_SUPABASE_URL" = "https://your-project.supabase.co" ]; then
    echo -e "${RED}❌ VITE_SUPABASE_URL is not set!${NC}"
    exit 1
fi

if [ -z "$VITE_SUPABASE_ANON_KEY" ] || [ "$VITE_SUPABASE_ANON_KEY" = "your-anon-key" ]; then
    echo -e "${RED}❌ VITE_SUPABASE_ANON_KEY is not set!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Environment variables validated${NC}"
echo ""

# Build Docker image
echo -e "${BLUE}🔨 Building Docker image...${NC}"
docker build \
    --build-arg VITE_SUPABASE_URL="$VITE_SUPABASE_URL" \
    --build-arg VITE_SUPABASE_ANON_KEY="$VITE_SUPABASE_ANON_KEY" \
    --build-arg VITE_APP_NAME="${VITE_APP_NAME:-CorteQS}" \
    --build-arg VITE_APP_VERSION="${VITE_APP_VERSION:-1.0.0}" \
    -t corteqs:latest .

echo -e "${GREEN}✅ Docker image built successfully${NC}"
echo ""

# Run container
echo -e "${BLUE}🚀 Starting container...${NC}"
docker stop corteqs-app 2>/dev/null || true
docker rm corteqs-app 2>/dev/null || true

docker run -d \
    --name corteqs-app \
    -p "${PORT:-3000}:80" \
    --restart unless-stopped \
    --health-cmd="wget --quiet --tries=1 --spider http://localhost/health || exit 1" \
    --health-interval=30s \
    --health-timeout=10s \
    --health-retries=3 \
    corteqs:latest

echo -e "${GREEN}✅ Container started successfully${NC}"
echo ""

# Wait for health check
echo -e "${BLUE}⏳ Waiting for health check...${NC}"
sleep 5

if docker exec corteqs-app wget --quiet --tries=1 --spider http://localhost/health; then
    echo -e "${GREEN}✅ Health check passed!${NC}"
    echo ""
    echo -e "${GREEN}=========================================${NC}"
    echo -e "${GREEN}  Deployment successful! 🎉${NC}"
    echo -e "${GREEN}=========================================${NC}"
    echo -e "${BLUE}App running at: http://localhost:${PORT:-3000}${NC}"
else
    echo -e "${RED}❌ Health check failed!${NC}"
    docker logs corteqs-app
    exit 1
fi
