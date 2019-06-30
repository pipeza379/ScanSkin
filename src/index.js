import React from 'react'
import ReactDOM from 'react-dom'
import './asset/css/index.css'
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import Router from './Router'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Router />
    </HashRouter>
  </Provider>
  , document.getElementById('root')
)
serviceWorker.unregister()
