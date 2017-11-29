import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store';

import App from './containers/App';
import reducer from './reducers';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <Route path='/' component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);