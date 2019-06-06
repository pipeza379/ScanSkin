import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import Router from './Router'

ReactDOM.render(
  <HashRouter>
    <Router/>
  </HashRouter>,
  document.getElementById('root')
)
serviceWorker.unregister()
