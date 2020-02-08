import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@babel/polyfill'
import './css/style.css'

import { getAllUsers, getAllQuestions, saveQuestionAnswer } from './utils/api'

getAllUsers().then(response => console.dir(response))
getAllQuestions('sarahedo').then(response => console.dir(response))

saveQuestionAnswer({
  authedUser: 'sarahedo',
  qid: 'am8ehyc8byjqgar0jgpub9',
  answer: 'optionOne',
})
  .then(response => console.log(response))
  .catch(() => console.log('Error occured!!!'))

saveQuestionAnswer({
  authedUser: 'sarahedo',
  qid: 'xj352vofupe1dqz9emx13r',
  answer: 'optionOne',
})
  .then(response => console.log(response))
  .catch(() => console.log('Error occured!!!'))

saveQuestionAnswer({
  authedUser: 'sarahedo',
  qid: 'xj352vofupe1dqz9emx13r',
  answer: 'optionTwo',
})
  .then(response => console.log(response))
  .catch(() => console.log('Error occured!!!'))

// react-axe will run only in dev mode
if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe')
  // running the accessibility tests 1 second after the app is loaded
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<App />, document.getElementById('root'))
