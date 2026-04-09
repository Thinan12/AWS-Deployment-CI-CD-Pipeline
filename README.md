# 🚀 AWS Deployment CI/CD Pipeline

This project demonstrates a complete CI/CD pipeline that automatically deploys a Node.js application to an AWS EC2 Ubuntu instance using GitHub Actions.

---

## 📌 Overview
This project automates the deployment process of a Node.js web application. Every time code is pushed to the `main` branch, GitHub Actions connects to the EC2 server via SSH and deploys the latest version automatically.

---

## 🏗️ Architecture
Developer → GitHub → GitHub Actions → EC2 (SSH) → Node.js App (Port 4000)

---

## ⚙️ Tech Stack
- Node.js + Express
- AWS EC2 (Ubuntu)
- GitHub Actions (CI/CD)
- SSH (Secure access)
- PM2 (Process manager)
- Linux

---

## 📂 Project Structure
AWS-Deployment-CI-CD-Pipeline/
├── app.js
├── package.json
├── deploy.sh
├── .github/workflows/cicd.yml
├── images/
└── README.md

---

## 🚀 Application Setup (Local)
Clone repo:
git clone https://github.com/thinan12/AWS-Deployment-CI-CD-Pipeline.git
cd AWS-Deployment-CI-CD-Pipeline

Install dependencies:
npm install

Run app:
node app.js

Access:
http://localhost:4000

---

## ☁️ AWS EC2 Setup
- Launched Ubuntu EC2 instance
- Configured Security Group:
  - Port 22 → SSH
  - Port 4000 → Application
- Connected using `.pem` key

---

## 🔐 GitHub Secrets
Configured in repository settings:
- EC2_HOST → EC2 Public IP
- EC2_USER → ubuntu
- EC2_SSH_KEY → Private SSH key

---

## ⚙️ CI/CD Pipeline
Trigger:
- On every push to `main`

Steps:
1. Checkout code
2. Setup SSH
3. Connect to EC2
4. Run deploy.sh

---

## 📜 Deployment Script (deploy.sh)
- Pull latest code
- Install dependencies
- Restart app using PM2

---

## 🌐 Live Application
http://34.229.210.53:4000

---

## 🧪 CI/CD Test
Make a change → then run:
git add .
git commit -m "update"
git push origin main

GitHub Actions will automatically deploy changes.

---

## 🐞 Issue & Fix
Error: Permission denied (publickey)

Fix:
- Added GitHub Actions public key to:
~/.ssh/authorized_keys

- Set permissions:
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys

---

## 📸 Screenshots
Stored in `images/` folder:
- EC2 instance
- Security group
- SSH terminal
- Application running
- GitHub Actions success
- GitHub secrets

---

## 🎯 Completion
✔ Node.js app created  
✔ AWS EC2 configured  
✔ SSH working  
✔ CI/CD pipeline implemented  
✔ Deployment automated  
✔ Live app running  

---

## 👨‍💻 Author
Thinan Eshan  
https://github.com/thinan12

---

## ⭐ Support
If you like this project, give it a ⭐ on GitHub!
