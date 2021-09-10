import React from 'react';
import Quotes from './Quotes';

const Author = ({ authorPromise, quotesPromise }) => {
  const author = authorPromise.read();

  return (
    <React.Fragment>
      <h1>{author.name}</h1>
      <h2>({author.birthYear} - {author.deathYear || 'present'})</h2>
      <React.Suspense fallback={<div>Loading quotes...</div>}>
        <Quotes quotesPromise={quotesPromise} />
      </React.Suspense>
    </React.Fragment>
  );
};

export default Author;
