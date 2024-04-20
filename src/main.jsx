import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import routes from './routes.jsx';
import { Provider } from 'react-redux';
import store from './state/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
