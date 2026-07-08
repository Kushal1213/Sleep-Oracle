# 🌙 Sleep Oracle

A modern full-stack application that predicts sleep disorders using machine learning. Built with React, Flask, and scikit-learn.

## ✨ Features

- **AI-Powered Predictions**: Random Forest classifier trained on sleep health data
- **Beautiful UI**: Modern sleep-themed design with animations
- **Real-time Analysis**: Instant predictions with health recommendations
- **Responsive**: Works perfectly on mobile and desktop

## 🚀 Quick Start

### Local Development

```bash
# Backend
pip install -r requirements.txt
cd app && python app.py

# Frontend
cd frontend && npm install && npm run dev
```

### Deploy to Render

Use the workflow: `/deploy-to-render`

Or manually:
1. Push to GitHub
2. Deploy backend on Render (root: `.`, build: `pip install -r requirements.txt`, start: `gunicorn app.app:app`)
3. Update frontend API URL in `frontend/src/App.jsx`
4. Deploy frontend on Render (root: `frontend`, build: `npm install && npm run build`, start: `npm run preview`)

## � Structure

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

## 🧠 Model

- **Algorithm**: Random Forest Classifier
- **Features**: Age, Gender, Occupation, Sleep Duration, Quality, Physical Activity, Stress, BMI, Blood Pressure, Heart Rate, Daily Steps
- **Predictions**: No Disorder, Insomnia, Sleep Apnea

## � API

- `POST /predict` - Predict sleep disorder
- `GET /health` - Health check

## 📄 License

MIT License
