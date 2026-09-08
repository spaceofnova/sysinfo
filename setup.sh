#!/bin/bash
set -e

if ! command -v node &> /dev/null; then
    echo "Node.js isn't installed, bro. Get that sorted first."
    exit 1
fi

echo "Installing dependencies..."
npm install

if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
fi

echo "Starting app with PM2..."
pm2 start server.js --name "sysinfo" || pm2 restart "sysinfo"
pm2 save

echo "Setup complete!"
