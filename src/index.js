import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from 'components/App';
import { store } from 'redux/store';

import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/test-crud">
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
);
