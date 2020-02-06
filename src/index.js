import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import App from './App';
import reducers from './reducers';
import './index.css';
import Character from './Character';

const store = createStore(reducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

serviceWorker.unregister();
