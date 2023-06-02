import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as ReactDOM from "react-dom/client";
// import Allamerica from "C:/Users/AMD/Desktop/Show React/shows/src/Components/Allamerica";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Allamerica from './Components/Allamerica';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "allamerica",
    element:<Allamerica/> ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
