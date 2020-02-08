import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'

import { saveQuestionAnswer } from './utils/api'

saveQuestionAnswer({
  qid: '6ni6ok3ym7mf1p33lnez',
  authedUser: 'sarahedo',
  answer: 'optionOne',
}).then(question => console.dir(question))
saveQuestionAnswer({
  qid: '6ni6ok3ym7mf1p33lnez',
  authedUser: 'sarahedo',
  answer: 'optionTwo',
})
  .then(question => console.dir(question))
  .catch(() => console.error('It errored, which is what we expect'))

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
