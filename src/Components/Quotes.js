import React from 'react';
import suspensePromise from '../suspensePromise';
import { fetchQuotes } from '../fakeApi';

const quotesPromise = suspensePromise(fetchQuotes());

const Quotes = () => {
  const quotes = quotesPromise.read();

  return (
    <React.Fragment>
      <ul>
        {quotes.map(quote => <li key={quote.id}>{quote.quote}</li>)}
      </ul>
    </React.Fragment>
  );
};

export default Quotes;
