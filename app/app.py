from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), 'model.pkl')
with open(model_path, 'rb') as f:
    model = pickle.load(f)

# Load the encoders
encoders_path = os.path.join(os.path.dirname(__file__), 'encoders.pkl')
with open(encoders_path, 'rb') as f:
    encoders = pickle.load(f)

target_encoder = encoders['target']

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        
        # Create DataFrame with proper feature names
        feature_names = ['Gender', 'Age', 'Occupation', 'Sleep Duration', 'Quality of Sleep',
                        'Physical Activity Level', 'Stress Level', 'BMI Category',
                        'Blood Pressure', 'Heart Rate', 'Daily Steps']
        
        features = [
            float(data.get('gender', 0)),
            float(data.get('age', 30)),
            float(data.get('occupation', 0)),
            float(data.get('sleep_duration', 7)),
            float(data.get('quality_of_sleep', 7)),
            float(data.get('physical_activity', 60)),
            float(data.get('stress_level', 5)),
            float(data.get('bmi_category', 0)),
            float(data.get('blood_pressure', 120)),
            float(data.get('heart_rate', 72)),
            float(data.get('daily_steps', 8000))
        ]
        
        # Create DataFrame with feature names
        df = pd.DataFrame([features], columns=feature_names)
        
        # Make prediction
        prediction_numeric = model.predict(df)[0]
        prediction_label = target_encoder.inverse_transform([prediction_numeric])[0]
        
        # Get prediction probabilities for debugging
        probabilities = model.predict_proba(df)[0]
        class_probabilities = dict(zip(target_encoder.classes_, probabilities))
        
        print(f"Input features: {features}")
        print(f"Prediction numeric: {prediction_numeric}")
        print(f"Prediction label: {prediction_label}")
        print(f"Probabilities: {class_probabilities}")
        
        return jsonify({
            'prediction': prediction_label,
            'probabilities': class_probabilities,
            'status': 'success'
        })
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'error': str(e),
            'status': 'error'
        }), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy', 'model': 'loaded'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
