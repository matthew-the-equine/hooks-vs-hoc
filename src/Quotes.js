import React from 'react'

class Quotes extends React.Component {
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
      <ul style={{ display: 'flex', flexDirection: 'column' }}>
        {
          this.state.quotes.map(({ source, quote }) => (
            <li>{source}: {quote}</li>
          ))
        }
      </ul>
    );
  }
}

export default Quotes;
