import React from 'react';
import { fetchAuthor, fetchQuotes } from '../fakeApi';
import Quotes from './Quotes';

const Author = () => {
  const [author, setAuthor] = React.useState(null);
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    Promise.all([
      fetchAuthor(),
      fetchQuotes(),
    ]).then(([author, quotes]) => {
      setAuthor(author);
      setQuotes(quotes);
    });
  }, []);

  return (
    <React.Fragment>
      {
        !author ? 
          <div>Loading author...</div> :
          <React.Fragment>
            <h1>{author.name}</h1>
            <h2>({author.birthYear} - {author.deathYear || 'present'})</h2>
            <Quotes quotes={quotes} />
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default Author;
