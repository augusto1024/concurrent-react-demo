import React from 'react';
import { fetchQuotes } from '../fakeApi';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    fetchQuotes().then(quotes => setQuotes(quotes));
  }, []);

  return (
    <React.Fragment>
      {
        !quotes ?
          <div>Loading quotes...</div> :
          <ul>
            {quotes.map(quote => <li key={quote.id}>{quote.quote}</li>)}
          </ul> 
      }
    </React.Fragment>
  );
};

export default Quotes;
