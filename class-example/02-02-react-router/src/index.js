import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';

const pageLists = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/aaa', element: <Aaa /> },
  { path: '/bbb', element: <Bbb /> },
]) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={pageLists} />
);

reportWebVitals();