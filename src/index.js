import React from 'react';
import ReactDOM from 'react-dom';
import Author from './Components/Author';
import './index.css';

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.Suspense fallback={<div>Loading author...</div>}>
    <Author />
  </React.Suspense>
);
