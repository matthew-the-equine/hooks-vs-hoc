import React, { useState, useEffect } from 'react'

const useQuotes = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('http://philosophy-quotes-api.glitch.me/quotes')
      .then(response => response.json())
      .then(response => setQuotes(response))
  }, [])

  return quotes
}

export const QuotesList = () => {
  const quotes = useQuotes()

  return (
    <ul style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {
        quotes.map(({ source, quote }) => (
          <li>{source}: {quote}</li>
        ))
      }
    </ul>
  )
}

export const QuotesTiles = () => {
  const quotes = useQuotes()

  return (
    <div style={{ display: 'flex', flex: 1, flexWrap: 'wrap' }}>
      {
        quotes.map(({ source, quote }) => (
          <div style={{ display: 'flex', flexDirection: 'column', width: '10vw', borderStyle: 'solid', margin: '2px' }}>
            <span>{source}:</span>
            <span>{quote}</span>
          </div>
        ))
      }
    </div>
  )
}