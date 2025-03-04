import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Aaa from './routes/aaa';
import Bbb from './routes/bbb';
import Board1 from './routes/board1';

const pageLists = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aaa", element: <Aaa /> },
  { path: "/bbb", element: <Bbb /> },
  { path: "/board1", element: <Board1 /> },
])

const root = ReactDOM.createRoot(document.getElementById('root') as ReactDOM.Container); // as 키워드는 개발자가 컴퓨터에게 type을 알려주는것. as는 자주 쓰는 것이 아님.
root.render(
  <RouterProvider router={pageLists} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

