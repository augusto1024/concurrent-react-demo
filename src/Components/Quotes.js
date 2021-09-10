import React from 'react';

const Quotes = ({quotesPromise}) => {
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
