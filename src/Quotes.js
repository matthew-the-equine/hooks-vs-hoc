import React, { useState, useEffect } from 'react'

const useQuotesFromAPI = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('http://philosophy-quotes-api.glitch.me/quotes')
      .then(response => response.json())
      .then(response => setQuotes(response))
  }, [])

  return quotes
}

const quotesFromUncleBob = [
    { source: 'Robert C. Martin', quote: 'Truth can only be found in one place: the code.' },
    { source: 'Robert C. Martin', quote: 'It is not enough for code to work.' },
    { source: 'Robert C. Martin', quote: 'Of course bad code can be cleaned up. But it’s very expensive..' },
  ]

  const QuotesList = ({ quotes }) => (
  <ul style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
    {
      quotes.map(({ source, quote }) => (
        <li>{source}: {quote}</li>
      ))
    }
  </ul>
)

const QuotesTiles = ({ quotes }) => (
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

export const QuotesListFromAPI = () => {
  const quotes = useQuotesFromAPI()

  return (
    <QuotesList quotes={quotes} />
  )
}

export const QuotesTilesFromAPI = () => {
  const quotes = useQuotesFromAPI()

  return (
    <QuotesTiles quotes={quotes} />
  )
}

export const QuotesListFromUncleBob = () => <QuotesList quotes={quotesFromUncleBob} />
export const QuotesTilesFromUncleBob = () => <QuotesTiles quotes={quotesFromUncleBob} />