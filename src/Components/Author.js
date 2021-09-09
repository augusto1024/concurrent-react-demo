import React from 'react';
import { fetchAuthor } from '../fakeApi';
import Quotes from './Quotes';

const Author = () => {
  const [author, setAuthor] = React.useState(null);

  React.useEffect(() => {
    fetchAuthor().then(author => setAuthor(author));
  }, []);

  return (
    <React.Fragment>
      {
        !author ? 
          <div>Loading author...</div> :
          <React.Fragment>
            <h1>{author.name}</h1>
            <h2>({author.birthYear} - {author.deathYear || 'present'})</h2>
            <Quotes />
          </React.Fragment>
      }
    </React.Fragment>
  );
};

export default Author;
