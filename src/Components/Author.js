import React from 'react';
import Quotes from './Quotes';
// import suspensePromise from '../suspensePromise';
import { fetchAuthor } from '../fakeApi';

// const authorPromise = suspensePromise(fetchAuthor());

const Author = ({ authorId }) => {
  // const author = authorPromise.read();
  const [author, setAuthor] = React.useState(null);

  React.useEffect(() => {
    fetchAuthor(authorId).then(author => setAuthor(author));
  }, [authorId]);

  return (
    !author ?
      <div>Loading author...</div> :
      <React.Fragment>
        <h1>{author.name}</h1>
        <h2>({author.birthYear} - {author.deathYear || 'present'})</h2>
        {/* <React.Suspense fallback={<div>Loading quotes...</div>}> */}
          <Quotes authorId={authorId} />
        {/* </React.Suspense> */}
      </React.Fragment>
  );
};

export default Author;
