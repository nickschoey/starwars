import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

serviceWorker.unregister();
