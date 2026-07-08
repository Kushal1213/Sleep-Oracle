import { useState } from 'react'
import { Moon, Stars, Heart, Activity, Footprints, Clock, Zap, Scale, Droplet } from 'lucide-react'
import axios from 'axios'
import PredictionResult from './components/PredictionResult'

function App() {
  const [formData, setFormData] = useState({
    gender: '',
    age: '',
    occupation: '',
    sleepDuration: '',
    qualityOfSleep: '',
    physicalActivity: '',
    stressLevel: '',
    bmiCategory: '',
    bloodPressure: '',
    heartRate: '',
    dailySteps: ''
  })
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setPrediction(null)

    try {
      console.log('Form data being sent:', formData)
      const response = await axios.post('https://sleep-oracle-backend.onrender.com/predict', {
        gender: parseFloat(formData.gender),
        age: parseFloat(formData.age),
        occupation: parseFloat(formData.occupation),
        sleep_duration: parseFloat(formData.sleepDuration),
        quality_of_sleep: parseFloat(formData.qualityOfSleep),
        physical_activity: parseFloat(formData.physicalActivity),
        stress_level: parseFloat(formData.stressLevel),
        bmi_category: parseFloat(formData.bmiCategory),
        blood_pressure: parseFloat(formData.bloodPressure),
        heart_rate: parseFloat(formData.heartRate),
        daily_steps: parseFloat(formData.dailySteps)
      })
      console.log('Response from backend:', response.data)
      setPrediction(response.data)
    } catch (err) {
      setError('Failed to get prediction. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-dream-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-dream-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-dream-blue/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-float">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Moon className="w-12 h-12 text-dream-purple" />
            <h1 className="text-5xl md:text-6xl font-bold gradient-text">Sleep Oracle</h1>
            <Stars className="w-12 h-12 text-dream-pink" />
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover your sleep health through the power of machine learning
          </p>
        </div>

        {/* Form */}
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Gender */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Heart className="w-4 h-4 text-dream-pink" />
                    Gender (0=Female, 1=Male)
                  </label>
                  <input
                    type="number"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    min="0"
                    max="1"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="0 or 1"
                  />
                </div>

                {/* Age */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Clock className="w-4 h-4 text-dream-blue" />
                    Age (years)
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="18"
                    max="100"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="25"
                  />
                </div>

                {/* Occupation */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Activity className="w-4 h-4 text-dream-purple" />
                    Occupation Code
                  </label>
                  <input
                    type="number"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="0-10"
                  />
                  <p className="text-xs text-gray-400">0=Accountant, 1=Doctor, 2=Engineer, 3=Lawyer, 4=Manager, 5=Nurse, 6=Sales Rep, 7=Salesperson, 8=Scientist, 9=Software Eng, 10=Teacher</p>
                </div>

                {/* Sleep Duration */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Moon className="w-4 h-4 text-dream-purple" />
                    Sleep Duration (hours)
                  </label>
                  <input
                    type="number"
                    name="sleepDuration"
                    value={formData.sleepDuration}
                    onChange={handleChange}
                    step="0.1"
                    min="4"
                    max="12"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="7.5"
                  />
                </div>

                {/* Quality of Sleep */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Stars className="w-4 h-4 text-dream-pink" />
                    Sleep Quality (1-10)
                  </label>
                  <input
                    type="number"
                    name="qualityOfSleep"
                    value={formData.qualityOfSleep}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="7"
                  />
                </div>

                {/* Physical Activity */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Activity className="w-4 h-4 text-dream-blue" />
                    Physical Activity (min/day)
                  </label>
                  <input
                    type="number"
                    name="physicalActivity"
                    value={formData.physicalActivity}
                    onChange={handleChange}
                    min="0"
                    max="180"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="60"
                  />
                </div>

                {/* Stress Level */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Zap className="w-4 h-4 text-dream-purple" />
                    Stress Level (1-10)
                  </label>
                  <input
                    type="number"
                    name="stressLevel"
                    value={formData.stressLevel}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="5"
                  />
                </div>

                {/* BMI Category */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Scale className="w-4 h-4 text-dream-pink" />
                    BMI Category (0=Normal, 1=Overweight)
                  </label>
                  <input
                    type="number"
                    name="bmiCategory"
                    value={formData.bmiCategory}
                    onChange={handleChange}
                    min="0"
                    max="1"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="0 or 1"
                  />
                </div>

                {/* Blood Pressure */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Droplet className="w-4 h-4 text-dream-blue" />
                    Blood Pressure (systolic)
                  </label>
                  <input
                    type="number"
                    name="bloodPressure"
                    value={formData.bloodPressure}
                    onChange={handleChange}
                    min="90"
                    max="180"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="120"
                  />
                </div>

                {/* Heart Rate */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Heart className="w-4 h-4 text-dream-pink" />
                    Heart Rate (bpm)
                  </label>
                  <input
                    type="number"
                    name="heartRate"
                    value={formData.heartRate}
                    onChange={handleChange}
                    min="50"
                    max="120"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="72"
                  />
                </div>

                {/* Daily Steps */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                    <Footprints className="w-4 h-4 text-dream-purple" />
                    Daily Steps
                  </label>
                  <input
                    type="number"
                    name="dailySteps"
                    value={formData.dailySteps}
                    onChange={handleChange}
                    min="1000"
                    max="20000"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-dream-purple focus:border-transparent transition-all"
                    placeholder="8000"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-dream-purple via-dream-pink to-dream-blue rounded-xl font-semibold text-lg hover:opacity-90 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {loading ? 'Analyzing...' : 'Predict Sleep Disorder'}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-center">
                {error}
              </div>
            )}
          </div>

          {/* Prediction Result */}
          {prediction && (
            <div className="mt-8">
              <PredictionResult prediction={prediction} />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          <p>Built with ❤️ using Machine Learning</p>
        </div>
      </div>
    </div>
  )
}

export default App
