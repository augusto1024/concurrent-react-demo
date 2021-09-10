import React from 'react';
import ReactDOM from 'react-dom';
import Author from './Components/Author';
import suspensePromise from './suspensePromise';
import { fetchAuthor, fetchQuotes } from './fakeApi';
import './index.css';


const App = () => {
  const [id, setId] = React.useState(0);
  const [authorPromise, setAuthorPromise] = React.useState(() => suspensePromise(fetchAuthor(0)));
  const [quotesPromise, setQuotesPromise] = React.useState(() => suspensePromise(fetchQuotes(0)));

  return (
    <React.Fragment>
      <button
        onClick={() => {
          const nextId = (id + 1) % 2;
          setAuthorPromise(suspensePromise(fetchAuthor(nextId)));
          setQuotesPromise(suspensePromise(fetchQuotes(nextId)));
          setId(nextId);
        }}
      >
        Next Author
      </button>
      <React.Suspense fallback={<div>Loading author...</div>}>
        <Author authorId={id} authorPromise={authorPromise} quotesPromise={quotesPromise}/>
      </React.Suspense>
    </React.Fragment>
  )
}

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <App />
);
