# VPS Deployment Guide

This project is a Next.js portfolio with a server route for the contact form, so deploy it as a Node.js app behind Nginx.

## 1. Server Requirements

- Ubuntu 22.04 or 24.04
- Node.js 20 or newer
- npm
- PM2
- Nginx
- A domain pointed to the VPS IP address

## 2. Install Server Packages

```bash
sudo apt update
sudo apt install -y nginx git curl
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

## 3. Upload or Clone the Project

```bash
cd /var/www
sudo git clone YOUR_REPOSITORY_URL amanpal-portfolio
sudo chown -R $USER:$USER /var/www/amanpal-portfolio
cd /var/www/amanpal-portfolio
```

If you upload a ZIP instead, extract it to:

```bash
/var/www/amanpal-portfolio
```

## 4. Add Production Environment Variables

```bash
cp .env.production.example .env.production
nano .env.production
```

Fill in:

```env
RESEND_API_KEY=your_real_resend_api_key
CONTACT_RECEIVER_EMAIL=amanpalsingh878@gmail.com
CONTACT_FROM_EMAIL=Amanpal Portfolio <contact@yourdomain.com>
```

For production email delivery, use a sender from a verified Resend domain.

## 5. Install and Build

```bash
npm install
npm run build
```

## 6. Start with PM2

```bash
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

After running `pm2 startup`, copy and run the command PM2 prints.

Check the app:

```bash
pm2 status
curl http://localhost:3000
```

## 7. Configure Nginx

Replace `yourdomain.com` with your real domain.

```bash
sudo nano /etc/nginx/sites-available/amanpal-portfolio
```

Paste:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable it:

```bash
sudo ln -s /etc/nginx/sites-available/amanpal-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 8. Add SSL

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 9. Update Deployment Later

```bash
cd /var/www/amanpal-portfolio
git pull
npm install
npm run build
pm2 restart amanpal-portfolio
```

Or run the included helper:

```bash
cd /var/www/amanpal-portfolio
bash scripts/deploy-vps.sh
```
