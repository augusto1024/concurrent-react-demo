import React from 'react';
// import suspensePromise from '../suspensePromise';
import { fetchQuotes } from '../fakeApi';

// const quotesPromise = suspensePromise(fetchQuotes());

const Quotes = ({ authorId }) => {
  // const quotes = quotesPromise.read();
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    fetchQuotes(authorId).then(quotes => setQuotes(quotes));
  }, [authorId]);

  return (
    !quotes ?
      <div>Loading quotes...</div> :
      <React.Fragment>
        <ul>
          {quotes.map(quote => <li key={quote.id}>{quote.quote}</li>)}
        </ul>
      </React.Fragment>
  );
};

export default Quotes;
