import React from 'react';

const Quotes = ({quotes}) => {
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
