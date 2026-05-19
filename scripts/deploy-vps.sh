#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/amanpal-portfolio"
APP_NAME="amanpal-portfolio"

cd "$APP_DIR"

git pull origin main
npm install
npm run build

if pm2 describe "$APP_NAME" > /dev/null; then
  pm2 restart "$APP_NAME"
else
  pm2 start ecosystem.config.cjs
fi

pm2 save
