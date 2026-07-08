import { CheckCircle, AlertTriangle, Info } from 'lucide-react'

const PredictionResult = ({ prediction }) => {
  const getResultInfo = (result) => {
    console.log('Prediction result:', result)
    // Handle both direct string and object with prediction property
    const predictionText = typeof result === 'object' ? result.prediction : result
    const lowerResult = (predictionText || '').toLowerCase()
    
    if (lowerResult === 'no disorder' || lowerResult === 'none') {
      return {
        icon: <CheckCircle className="w-16 h-16 text-green-400" />,
        bgColor: 'bg-green-500/20',
        borderColor: 'border-green-500/50',
        title: 'No Sleep Disorder Detected',
        description: 'Your sleep patterns appear healthy. Keep up the good habits!',
        tips: [
          'Maintain your current sleep schedule',
          'Continue regular physical activity',
          'Keep stress levels managed'
        ]
      }
    } else if (lowerResult.includes('apnea')) {
      return {
        icon: <AlertTriangle className="w-16 h-16 text-orange-400" />,
        bgColor: 'bg-orange-500/20',
        borderColor: 'border-orange-500/50',
        title: 'Sleep Apnea Risk Detected',
        description: 'Your indicators suggest possible sleep apnea. Consider consulting a specialist.',
        tips: [
          'Consult a sleep specialist for proper diagnosis',
          'Maintain a healthy weight',
          'Avoid alcohol and sedatives before bed',
          'Sleep on your side if possible'
        ]
      }
    } else if (lowerResult.includes('insomnia')) {
      return {
        icon: <AlertTriangle className="w-16 h-16 text-purple-400" />,
        bgColor: 'bg-purple-500/20',
        borderColor: 'border-purple-500/50',
        title: 'Insomnia Risk Detected',
        description: 'Your patterns suggest difficulty with sleep. Consider these recommendations.',
        tips: [
          'Establish a consistent bedtime routine',
          'Limit caffeine and screen time before bed',
          'Practice relaxation techniques',
          'Consider cognitive behavioral therapy for insomnia'
        ]
      }
    } else {
      return {
        icon: <Info className="w-16 h-16 text-blue-400" />,
        bgColor: 'bg-blue-500/20',
        borderColor: 'border-blue-500/50',
        title: 'Sleep Pattern Analysis',
        description: `Prediction: ${predictionText}`,
        tips: [
          'Monitor your sleep patterns regularly',
          'Maintain a balanced lifestyle',
          'Consult a healthcare provider for concerns'
        ]
      }
    }
  }

  const resultInfo = getResultInfo(prediction)

  return (
    <div className={`glass ${resultInfo.bgColor} ${resultInfo.borderColor} border rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in`}>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          {resultInfo.icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          {resultInfo.title}
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          {resultInfo.description}
        </p>

        <div className="bg-white/5 rounded-2xl p-6 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-white">Recommendations</h3>
          <ul className="space-y-3 text-left">
            {resultInfo.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <span className="text-dream-purple mt-1">✦</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          ⚠️ This is not a medical diagnosis. Please consult a healthcare professional for proper evaluation.
        </p>
      </div>
    </div>
  )
}

export default PredictionResult
