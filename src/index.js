import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuotesList, QuotesTiles } from './Quotes';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <QuotesList />
      <QuotesTiles />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
