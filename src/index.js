import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuotesListFromAPI, QuotesListFromUncleBob, QuotesTilesFromAPI, QuotesTilesFromUncleBob } from './Quotes';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <QuotesListFromAPI />
      <QuotesListFromUncleBob />
      <QuotesTilesFromAPI />
      <QuotesTilesFromUncleBob />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
