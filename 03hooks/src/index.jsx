import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { CounterContextProvider } from './contexts/CounterContext/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

//the <App/> must be inside <CounterContextProvider/> in order to use it's context.
root.render(
  <CounterContextProvider>
    <App />
  </CounterContextProvider>,
);
