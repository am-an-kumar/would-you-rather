import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'
import reducer from './reducers'
import middleware from './middlewares'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

// initializing redux store
const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
