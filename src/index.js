import 'styles/core.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import withScroll from 'scroll-behavior';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {getRandomGenome} from 'actions';
import reducers from './reducers';
import routes from './routes';

const initialState = {};
const store = createStore(reducers, initialState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const appHistory = withScroll(hashHistory);
const history = syncHistoryWithStore(appHistory, store);
store.dispatch(getRandomGenome());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.getElementById('root'));
