import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'

import { _getAllUsers, _getAllQuestions } from './_DATA'

_getAllUsers().then(response => console.dir(response))
_getAllQuestions('sarahedo').then(response => console.dir(response))

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
