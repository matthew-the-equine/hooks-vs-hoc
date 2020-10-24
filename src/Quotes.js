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

export class QuotesFromAPI extends React.Component {
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
      <QuotesList quotes={this.state.quotes} />
    )
  }
}

export const QuotesFromUncleBob = () => {
  const quotes = [
    { source: 'Robert C. Martin', quote: 'Truth can only be found in one place: the code.' },
    { source: 'Robert C. Martin', quote: 'It is not enough for code to work.' },
    { source: 'Robert C. Martin', quote: 'Of course bad code can be cleaned up. But it’s very expensive..' },
  ]

  return (
    <QuotesList quotes={quotes} />
  )
}
