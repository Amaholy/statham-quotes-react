import React, { useState, useEffect } from 'react'
import quotes from '../data/quotes'
import '../styles/QuoteGenerator.css'
import jasonImage from '../assets/images/bg.jpg'

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    generateQuote()
  }, [])

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }

  return (
    <div className="container">
      <div className="quote-box">
        <img src={jasonImage} alt="Jason Statham" className="jason-image" />
        <h1 className="quote-text">"{quote}"</h1>
        <button className="btn" onClick={generateQuote}>
          Новая цитата
        </button>
      </div>
    </div>
  )
}

export default QuoteGenerator
