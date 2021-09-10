import React from 'react';
import ReactDOM from 'react-dom';
import Author from './Components/Author';
import './index.css';

const App = () => {
  const [id, setId] = React.useState(0);

  return (
    <React.Fragment>
      <button onClick={() => setId((id + 1) % 2)}>Next Author</button>
      <Author authorId={id}/>
    </React.Fragment>
  )
}

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  // <React.Suspense fallback={<div>Loading author...</div>}>
    <App />
  // </React.Suspense>
);
