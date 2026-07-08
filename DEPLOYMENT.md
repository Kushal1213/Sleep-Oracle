# 🚀 Sleep Oracle - Quick Deployment Guide

Deploy Sleep Oracle to Render free tier in minutes.

## 🎯 One-Click Deployment

Use the workflow: `/deploy-to-render`

Or follow these manual steps:

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy Backend
- Go to [render.com](https://render.com) → New Web Service
- Connect GitHub repo
- Root: `.`, Build: `pip install -r requirements.txt`, Start: `gunicorn app.app:app`
- Copy backend URL

### Step 3: Update Frontend
- Edit `frontend/src/App.jsx` - replace `http://localhost:5000/predict` with your backend URL
- Commit and push

### Step 4: Deploy Frontend
- New Web Service → Root: `frontend`
- Build: `npm install && npm run build`, Start: `npm run preview`

## 🔧 Local Development

```bash
# Backend
pip install -r requirements.txt
cd app && python app.py

# Frontend
cd frontend && npm install && npm run dev
```

## � Project Structure

```
Sleep-Oracle/
├── app/                    # Flask backend
│   ├── app.py
│   ├── model.pkl
│   └── encoders.pkl
├── frontend/               # React frontend
│   ├── src/
│   ├── package.json
│   └── render.yaml
├── dataset/                # Training data
├── requirements.txt
└── render.yaml
```

## � API

**POST /predict** - Predict sleep disorder
**GET /health** - Health check

## � Issues?

Check Render logs or use `/deploy-to-render` workflow for detailed guide.

