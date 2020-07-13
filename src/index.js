import React from 'react';
import ReactDOM from 'react-dom';
// redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import restaurantReducer from './reducers/restaurantReducer';
import {BrowserRouter as Router} from 'react-router-dom'
//

import App from './App';

// enables redux devtools extension on chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store setup
let store = createStore(restaurantReducer, composeEnhancers(applyMiddleware(thunk)))

//render app comp
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
