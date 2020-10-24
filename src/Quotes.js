import React from 'react'

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

const withQuotesFromAPI = Quotes => class QuotesFromAPI extends React.Component {
  state = {
    quotes: []
  }

  componentDidMount = () => {
    fetch('http://philosophy-quotes-api.glitch.me/quotes')
      .then(response => response.json())
      .then(quotes => this.setState({
        quotes,
      }))
  }

  render() {
    return (
      <Quotes quotes={this.state.quotes} />
    )
  }
}

const withQuotesFromUncleBob = Quotes => props => {
  const quotes = [
    { source: 'Robert C. Martin', quote: 'Truth can only be found in one place: the code.' },
    { source: 'Robert C. Martin', quote: 'It is not enough for code to work.' },
    { source: 'Robert C. Martin', quote: 'Of course bad code can be cleaned up. But it’s very expensive..' },
  ]

  return (
    <Quotes {...props} quotes={quotes} />
  )
}

export const QuotesListFromAPI = withQuotesFromAPI(QuotesList)
export const QuotesListFromUncleBob = withQuotesFromUncleBob(QuotesList)
export const QuotesTilesFromAPI = withQuotesFromAPI(QuotesTiles)
export const QuotesTilesFromUncleBob = withQuotesFromUncleBob(QuotesTiles)
