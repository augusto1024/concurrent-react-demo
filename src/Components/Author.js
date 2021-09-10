import React from 'react';
import Quotes from './Quotes';
import suspensePromise from '../suspensePromise';
import { fetchAuthor } from '../fakeApi';

const authorPromise = suspensePromise(fetchAuthor());

const Author = () => {
  const author = authorPromise.read();

  return (
    <React.Fragment>
      <h1>{author.name}</h1>
      <h2>({author.birthYear} - {author.deathYear || 'present'})</h2>
      <React.Suspense fallback={<div>Loading quotes...</div>}>
        <Quotes />
      </React.Suspense>
    </React.Fragment>
  );
};

export default Author;
