import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setResult(null)

    try {
      const response = await fetch('/api/sum', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1, num2 }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setResult(data)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Sum Calculator</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="num1">Number 1</label>
            <input
              type="number"
              id="num1"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              required
              placeholder="Enter first number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="num2">Number 2</label>
            <input
              type="number"
              id="num2"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              required
              placeholder="Enter second number"
            />
          </div>
          <button type="submit">Calculate Sum</button>
        </form>

        {result && (
          <div className="result success">
            <p>Number 1: {result.num1}</p>
            <p>Number 2: {result.num2}</p>
            <p className="total">Sum: {result.sum}</p>
          </div>
        )}

        {error && (
          <div className="result error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
