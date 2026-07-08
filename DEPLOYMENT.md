# 🚀 Sleep Oracle - Deployment Guide

This guide will help you deploy the Sleep Oracle application to production using **Render** (recommended for free tier).

---

## 📋 Prerequisites

- GitHub account with the project pushed to a repository
- Render account (free)
- Basic understanding of git commands

---

## 🎯 Deploy to Render (Recommended - Free Tier)

Render offers a generous free tier perfect for this full-stack application.

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Deploy Backend

1. **Create a Render account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Deploy the Flask Backend**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure the service:
     - **Name**: `sleep-oracle-backend`
     - **Root Directory**: `.` (root of project)
     - **Build Command**: `pip install -r requirements.txt`
     - **Start Command**: `gunicorn app.app:app`
     - **Environment**: Python 3
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)
   - Copy the backend URL (e.g., `https://sleep-oracle-backend.onrender.com`)

### Step 3: Update Frontend API URL

1. **Edit `frontend/src/App.jsx`**
   - Replace the axios.post URL with your backend URL:
   ```javascript
   const response = await axios.post('https://sleep-oracle-backend.onrender.com/predict', {
   ```

2. **Commit and push the change**
   ```bash
   git add frontend/src/App.jsx
   git commit -m "Update API URL for production"
   git push origin main
   ```

### Step 4: Deploy Frontend

1. **Deploy the React Frontend**
   - In Render, click "New +" → "Web Service"
   - Connect the same GitHub repository
   - Configure the service:
     - **Name**: `sleep-oracle-frontend`
     - **Root Directory**: `frontend`
     - **Build Command**: `npm install && npm run build`
     - **Start Command**: `npm run preview`
     - **Environment**: Node
   - Click "Create Web Service"
   - Wait for deployment (2-3 minutes)

### Step 5: Access Your Application

- Open the frontend URL provided by Render
- Your Sleep Oracle is now live! 🎉

---

## 🔧 Local Development Setup

To run the application locally before deployment:

### Backend Setup

```bash
# Install Python dependencies
pip install -r requirements.txt

# Run Flask backend
cd app
python app.py
```

Backend will run on `http://localhost:5000`

### Frontend Setup

```bash
# Install Node dependencies
cd frontend
npm install

# Run development server
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 📊 Project Structure

```
Sleep-Oracle-master/
├── app/
│   ├── app.py              # Flask backend API
│   ├── model.pkl           # Trained ML model
│   └── encoders.pkl       # Label encoders
├── frontend/               # React frontend
│   ├── src/
│   │   ├── App.jsx         # Main React component
│   │   ├── components/
│   │   │   └── PredictionResult.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── render.yaml         # Render deployment config
├── dataset/                # Training data
├── requirements.txt        # Python dependencies
├── render.yaml            # Backend Render config
└── DEPLOYMENT.md          # This file
```

---

## 🔑 Environment Variables

The application uses the following environment variables (configure in Render dashboard):

- `PORT`: Backend port (default: 5000)

---

## 🐛 Troubleshooting

### Backend Issues

- **Model not loading**: Ensure `model.pkl` and `encoders.pkl` are in the `app/` directory
- **CORS errors**: Backend has CORS enabled
- **Port conflicts**: Render automatically assigns ports

### Frontend Issues

- **Build fails**: Run `npm install` to ensure all dependencies are installed
- **API connection fails**: Verify the backend URL is correct in `App.jsx`
- **Styles not loading**: Ensure Tailwind CSS is properly configured

### Deployment Issues

- **Build timeout**: Free tier has build time limits
- **Memory errors**: The model is small (~228KB), well within free tier limits
- **Cold starts**: Free tier services may have cold starts (30-60s)

---

## 📈 Monitoring

- **Render Dashboard**: Monitor logs, CPU, and memory usage
- **Health Check**: Backend has a `/health` endpoint for monitoring

---

## 🔒 Security Notes

- The model file (`model.pkl`) is committed to the repository
- No sensitive data is stored
- API accepts JSON POST requests
- Consider adding rate limiting for production use

---

## 🎨 Features

- **Modern UI**: Beautiful sleep-themed design with animations
- **Real-time predictions**: ML model predicts sleep disorders
- **Responsive design**: Works on mobile and desktop
- **Health recommendations**: Provides personalized tips based on predictions
- **Error handling**: Graceful error messages for users

---

## 📝 API Endpoints

### POST /predict
Predicts sleep disorder based on input features.

**Request Body:**
```json
{
  "gender": 1,
  "age": 30,
  "occupation": 2,
  "sleep_duration": 7.5,
  "quality_of_sleep": 7,
  "physical_activity": 60,
  "stress_level": 5,
  "bmi_category": 0,
  "blood_pressure": 120,
  "heart_rate": 72,
  "daily_steps": 8000
}
```

**Response:**
```json
{
  "prediction": "No Disorder",
  "probabilities": {
    "Insomnia": 0.03,
    "No Disorder": 0.95,
    "Sleep Apnea": 0.02
  },
  "status": "success"
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "healthy",
  "model": "loaded"
}
```

---

## 🌟 Support

For issues or questions:
- Check the troubleshooting section above
- Review Render documentation
- Check the logs in your deployment dashboard

---

**Happy Deploying! 🚀🌙**
