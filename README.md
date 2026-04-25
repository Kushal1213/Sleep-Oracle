# 🌙 Sleep Oracle: Anticipating Health & Lifestyle through Data

A Machine Learning project that predicts sleep disorders and health outcomes based on lifestyle and physiological data. Built with Python, scikit-learn, and deployed as a Flask web application.

---

## 📌 Problem Statement

Sleep disorders affect millions of people and are often undiagnosed. This project uses machine learning to predict the likelihood of sleep disorders based on features such as physical activity, stress levels, BMI, heart rate, and daily steps — enabling early awareness and intervention.

---

## 🔍 Project Phases

| Phase | Description |
|-------|-------------|
| **Ideation** | Brainstorming, idea prioritization, and empathy mapping |
| **Planning** | Project planning, timeline, and technology stack selection |
| **Design** | Solution architecture, data flow diagrams, user stories |
| **Development** | Data preprocessing, model training, Flask web app |
| **Testing & Submission** | Performance testing, final project report |

---

## 🧠 ML Model

- **Dataset:** Sleep Health and Lifestyle Dataset (374 records, 13 features)
- **Algorithm:** Random Forest Classifier
- **Features used:** Age, Gender, Occupation, Sleep Duration, Sleep Quality, Physical Activity Level, Stress Level, BMI Category, Heart Rate, Daily Steps, Blood Pressure
- **Target:** Sleep Disorder (None / Sleep Apnea / Insomnia)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Language | Python 3.x |
| ML Libraries | scikit-learn, pandas, numpy, matplotlib, seaborn |
| Web Framework | Flask |
| Frontend | HTML, CSS, Bootstrap |
| Model Serialization | pickle |
| Notebook | Jupyter Notebook |

---

## 📂 Repository Structure

```
sleep-oracle/
├── dataset/          # Raw CSV dataset
├── notebooks/        # Jupyter notebooks (EDA + Model training + Flask prep)
├── app/              # Flask web application
│   └── templates/    # HTML frontend
├── docs/             # Phase-wise project documentation (PDFs)
│   ├── ideation/
│   ├── planning/
│   ├── design/
│   ├── development/
│   └── final/
└── assets/           # Static assets
```

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/sleep-oracle.git
cd sleep-oracle

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the Flask app
cd app
python app.py

# 4. Open in browser
# Visit: http://127.0.0.1:5000
```

---

## 📊 Results

- Model trained and evaluated with cross-validation
- Performance metrics documented in `docs/final/Performance-Testing-ML.pdf`
- Full project report available in `docs/final/Project-Report.pdf`

---

## 📄 License

This project was developed as part of a guided project program.
