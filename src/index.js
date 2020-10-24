import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuotesFromAPI, QuotesFromUncleBob } from './Quotes';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex' }}>
      <QuotesFromAPI />
      <QuotesFromUncleBob />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
