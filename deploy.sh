#!/bin/bash
set -e

APP_DIR=/home/ubuntu/aws-node-cicd

echo "Changing to app directory..."
cd $APP_DIR

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Restarting app with PM2..."
pm2 restart aws-node-app || pm2 start app.js --name aws-node-app

echo "Saving PM2 process list..."
pm2 save

echo "Deployment completed successfully."
