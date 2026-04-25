from flask import Flask, render_template, request
import pickle
import numpy as np

app = Flask(__name__)

# Load the trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    features = [
        float(request.form['age']),
        float(request.form['sleep_duration']),
        float(request.form['quality_of_sleep']),
        float(request.form['physical_activity']),
        float(request.form['stress_level']),
        float(request.form['heart_rate']),
        float(request.form['daily_steps'])
    ]
    prediction = model.predict([features])[0]
    return render_template('index.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
